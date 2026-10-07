import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const allowedTypes = new Set(["membership", "sponsor", "artist", "organization"]);
const MAX_BODY_BYTES = 32 * 1024;
const MAX = {
  name: 120,
  phone: 40,
  email: 160,
  city: 80,
  artField: 120,
  organization: 160,
  role: 120,
  requestType: 120,
  audience: 120,
  subject: 200,
  area: 160,
  budget: 120,
  message: 5000,
};

const allowedRequestTypes = new Set(["membership", "collaboration", "organization", "support", "project-proposal", "media", "public-contact", "other"]);
const allowedBudgets = new Set(["under-100m", "100m-1b", "1b-5b", "over-5b", "unknown", "non-cash"]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+()\-\s]{7,40}$/;

function normalizePhone(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "حجم درخواست بیش از حد مجاز است." }, { status: 413 });
    }

    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "بدنه درخواست نامعتبر است." }, { status: 400 });
    }

    const {
      type,
      name: rawName,
      phone: rawPhone,
      email: rawEmail,
      city: rawCity,
      artField: rawArtField,
      organization: rawOrganization,
      role: rawRole,
      requestType: rawRequestType,
      audience: rawAudience,
      subject: rawSubject,
      area: rawArea,
      budget: rawBudget,
      message: rawMessage,
      consent,
      website: rawWebsite,
    } = body as Record<string, unknown>;

    if (typeof type !== "string" || !allowedTypes.has(type)) {
      return NextResponse.json({ error: "نوع درخواست نامعتبر است." }, { status: 400 });
    }

    const name = clean(rawName, MAX.name);
    const phone = normalizePhone(clean(rawPhone, MAX.phone));
    const email = clean(rawEmail, MAX.email).toLowerCase();
    const city = clean(rawCity, MAX.city);
    const artField = clean(rawArtField, MAX.artField);
    const organization = clean(rawOrganization, MAX.organization);
    const role = clean(rawRole, MAX.role);
    const requestType = clean(rawRequestType, MAX.requestType);
    const audience = clean(rawAudience, MAX.audience);
    const subject = clean(rawSubject, MAX.subject);
    const area = clean(rawArea, MAX.area);
    const budget = clean(rawBudget, MAX.budget);
    const message = clean(rawMessage, MAX.message);
    const website = clean(rawWebsite, 200);

    if (website) {
      return NextResponse.json({ success: true, id: null });
    }

    if (!name || !phone || !email || !message || message.length < 20 || consent !== true) {
      return NextResponse.json({ error: "لطفاً اطلاعات الزامی را کامل کنید." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "ایمیل واردشده معتبر نیست." }, { status: 400 });
    }

    if (!phonePattern.test(phone)) {
      return NextResponse.json({ error: "شماره تلفن واردشده معتبر نیست." }, { status: 400 });
    }

    if (!requestType || !allowedRequestTypes.has(requestType)) {
      return NextResponse.json({ error: "نوع درخواست نامعتبر است." }, { status: 400 });
    }

    if (budget && !allowedBudgets.has(budget)) {
      return NextResponse.json({ error: "مبلغ یا ارزش همکاری نامعتبر است." }, { status: 400 });
    }

    const savedRequest = await prisma.participationRequest.create({
      data: {
        type,
        name,
        phone,
        email,
        city: city || null,
        artField: artField || null,
        organization: organization || null,
        role: role || null,
        requestType: requestType || null,
        audience: audience || null,
        subject: subject || null,
        area: area || null,
        budget: budget || null,
        message,
        consent: true,
      },
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      return NextResponse.json({ success: true, id: savedRequest.id });
    }

    const typeLabels: Record<string, string> = {
      membership: "درخواست عضویت",
      sponsor: "درخواست همکاری و حمایت",
      artist: "همکاری هنرمند",
      organization: "همکاری سازمانی",
    };

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.FORM_FROM_EMAIL ?? "Khorshid Website <onboarding@resend.dev>",
        to: [contactEmail],
        reply_to: email,
        subject: `درخواست جدید سایت خورشید: ${typeLabels[type]}`,
        text: [
          `نوع درخواست: ${typeLabels[type]}`,
          `نام: ${name}`,
          `تلفن: ${phone}`,
          `ایمیل: ${email}`,
          `شهر: ${city || "-"}`,
          `حوزه هنری: ${artField || "-"}`,
          `نام مجموعه: ${organization || "-"}`,
          `سمت / نقش: ${role || "-"}`,
          `نوع متقاضی: ${audience || "-"}`,
          `نوع درخواست: ${requestType || "-"}`,
          `عنوان درخواست: ${subject || "-"}`,
          `حوزه / موضوع: ${area || "-"}`,
          `بودجه / ارزش تقریبی: ${budget || "-"}`,
          "",
          "توضیحات:",
          message,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      console.error("Participation notification email failed:", await emailResponse.text());
    }

    return NextResponse.json({ success: true, id: savedRequest.id });
  } catch (error) {
    console.error("Participation API error:", error);
    return NextResponse.json(
      { error: "در پردازش درخواست خطایی رخ داد." },
      { status: 500 },
    );
  }
}
