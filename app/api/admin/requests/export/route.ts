import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

const labels: Record<string, string> = { membership: "عضویت", sponsor: "حمایت و همکاری", artist: "هنرمند", organization: "همکاری سازمانی" };
const statuses: Record<string, string> = { new: "جدید", contacted: "تماس گرفته شد", in_progress: "در حال پیگیری", closed: "بسته شد", rejected: "رد شده", archived: "آرشیو" };

function csv(value: unknown) {
  return '"' + String(value ?? "").replace(/"/g, '""').replace(/\r?\n/g, " ") + '"';
}

export async function GET() {
  const cookieStore = await cookies();
  if (!verifyAdminSession(cookieStore.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });
  }

  const requests = await prisma.participationRequest.findMany({ orderBy: { createdAt: "desc" } });
  const headers = ["تاریخ", "نام", "نوع", "تلفن", "ایمیل", "شهر", "حوزه هنری", "مجموعه", "سمت", "نوع درخواست", "عنوان", "حوزه", "بودجه", "وضعیت", "توضیحات"];
  const rows = requests.map((r) => [
    new Date(r.createdAt).toLocaleString("fa-IR"), r.name, labels[r.type] || r.type, r.phone, r.email, r.city, r.artField, r.organization, r.role, r.requestType, r.subject, r.area, r.budget, statuses[r.status] || r.status, r.message,
  ].map(csv).join(","));
  const body = "\uFEFF" + [headers.map(csv).join(","), ...rows].join("\r\n");

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="khorshid-requests.csv"',
      "Cache-Control": "no-store",
    },
  });
}
