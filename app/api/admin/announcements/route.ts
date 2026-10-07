import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

const MAX_BODY_BYTES = 64 * 1024;
const MAX = {
  title: 200,
  slug: 160,
  type: 80,
  excerpt: 600,
  paragraph: 3000,
  dateLabel: 80,
  image: 2000,
  imageAlt: 300,
};

async function authorized() {
  const store = await cookies();
  return verifyAdminSession(store.get(ADMIN_COOKIE)?.value);
}

function text(value: unknown, max: number, fallback = "") {
  return typeof value === "string" ? value.trim().slice(0, max) : fallback;
}

function booleanValue(value: unknown, fallback = false) {
  return typeof value === "boolean" ? value : fallback;
}

function contentValue(value: unknown) {
  const items = Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : typeof value === "string"
      ? value.split("\n")
      : [];

  return items.map((item) => item.trim().slice(0, MAX.paragraph)).filter(Boolean).slice(0, 30);
}

function validSlug(slug: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

function parseDate(value: unknown) {
  const date = new Date(typeof value === "string" || typeof value === "number" ? value : Date.now());
  return Number.isNaN(date.getTime()) ? null : date;
}

async function readBody(req: Request) {
  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) throw new Error("PAYLOAD_TOO_LARGE");
  return req.json();
}

export async function GET() {
  if (!(await authorized())) {
    return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });
  }

  const announcements = await prisma.announcement.findMany({
    orderBy: { isoDate: "desc" },
  });
  return NextResponse.json({ announcements });
}

export async function POST(req: Request) {
  if (!(await authorized())) {
    return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });
  }

  try {
    const b = await readBody(req);
    const title = text(b?.title, MAX.title);
    const slug = text(b?.slug, MAX.slug);
    const isoDate = parseDate(b?.isoDate);

    if (!title || !slug || !validSlug(slug) || !isoDate) {
      return NextResponse.json({ error: "عنوان، slug معتبر و تاریخ الزامی است." }, { status: 400 });
    }

    const item = await prisma.announcement.create({
      data: {
        title,
        slug,
        type: text(b?.type, MAX.type, "اطلاعیه"),
        excerpt: text(b?.excerpt, MAX.excerpt),
        content: contentValue(b?.content),
        dateLabel: text(b?.dateLabel, MAX.dateLabel),
        isoDate,
        image: text(b?.image, MAX.image),
        imageAlt: text(b?.imageAlt, MAX.imageAlt, title),
        important: booleanValue(b?.important),
        showPopup: booleanValue(b?.showPopup),
        active: booleanValue(b?.active, true),
      },
    });

    return NextResponse.json({ announcement: item }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") {
      return NextResponse.json({ error: "حجم درخواست بیش از حد مجاز است." }, { status: 413 });
    }
    return NextResponse.json({ error: "ثبت اطلاعیه ناموفق بود. احتمالاً slug تکراری است." }, { status: 400 });
  }
}

export async function PATCH(req: Request) {
  if (!(await authorized())) {
    return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });
  }

  try {
    const b = await readBody(req);
    const id = text(b?.id, 100);
    const title = text(b?.title, MAX.title);
    const slug = text(b?.slug, MAX.slug);
    const isoDate = parseDate(b?.isoDate);

    if (!id || !title || !slug || !validSlug(slug) || !isoDate) {
      return NextResponse.json({ error: "اطلاعات اطلاعیه نامعتبر است." }, { status: 400 });
    }

    const item = await prisma.announcement.update({
      where: { id },
      data: {
        title,
        slug,
        type: text(b?.type, MAX.type, "اطلاعیه"),
        excerpt: text(b?.excerpt, MAX.excerpt),
        content: contentValue(b?.content),
        dateLabel: text(b?.dateLabel, MAX.dateLabel),
        isoDate,
        image: text(b?.image, MAX.image),
        imageAlt: text(b?.imageAlt, MAX.imageAlt, title),
        important: booleanValue(b?.important),
        showPopup: booleanValue(b?.showPopup),
        active: booleanValue(b?.active),
      },
    });

    return NextResponse.json({ announcement: item });
  } catch {
    return NextResponse.json({ error: "ویرایش اطلاعیه ناموفق بود." }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  if (!(await authorized())) {
    return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });
  }

  try {
    const b = await readBody(req);
    const id = text(b?.id, 100);
    if (!id) return NextResponse.json({ error: "شناسه نامعتبر است." }, { status: 400 });

    await prisma.announcement.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "حذف اطلاعیه ناموفق بود." }, { status: 400 });
  }
}
