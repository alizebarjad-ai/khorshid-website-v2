import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

const allowedStatuses = new Set(["new", "contacted", "in_progress", "closed", "rejected", "archived"]);
const allowedTypes = new Set(["membership", "sponsor", "artist", "organization"]);
const MAX_QUERY = 100;

async function authorized() {
  const cookieStore = await cookies();
  return verifyAdminSession(cookieStore.get(ADMIN_COOKIE)?.value);
}

function validDate(value: string) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function GET(request: Request) {
  if (!(await authorized())) return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || "all";
  const type = searchParams.get("type") || "all";
  const q = (searchParams.get("q") || "").trim().slice(0, MAX_QUERY);
  const fromRaw = searchParams.get("from") || "";
  const toRaw = searchParams.get("to") || "";
  const from = validDate(fromRaw);
  const to = validDate(toRaw);
  const pageRaw = Number(searchParams.get("page") || "1");
  const page = Number.isFinite(pageRaw) ? Math.max(1, Math.min(100000, Math.floor(pageRaw))) : 1;
  const pageSize = 25;

  if (status !== "all" && !allowedStatuses.has(status)) return NextResponse.json({ error: "فیلتر وضعیت نامعتبر است." }, { status: 400 });
  if (type !== "all" && !allowedTypes.has(type)) return NextResponse.json({ error: "فیلتر نوع نامعتبر است." }, { status: 400 });
  if (fromRaw && !from) return NextResponse.json({ error: "تاریخ شروع نامعتبر است." }, { status: 400 });
  if (toRaw && !to) return NextResponse.json({ error: "تاریخ پایان نامعتبر است." }, { status: 400 });

  const where = {
    ...(status !== "all" ? { status } : {}),
    ...(type !== "all" ? { type } : {}),
    ...(from || to ? {
      createdAt: {
        ...(from ? { gte: from } : {}),
        ...(to ? { lte: new Date(to.getTime() + 24 * 60 * 60 * 1000 - 1) } : {}),
      },
    } : {}),
    ...(q ? {
      OR: [
        { name: { contains: q, mode: "insensitive" as const } },
        { email: { contains: q, mode: "insensitive" as const } },
        { phone: { contains: q } },
        { organization: { contains: q, mode: "insensitive" as const } },
        { subject: { contains: q, mode: "insensitive" as const } },
      ],
    } : {}),
  };

  const [requests, total, newCount, contactedCount, inProgressCount, closedCount, rejectedCount, archivedCount] = await Promise.all([
    prisma.participationRequest.findMany({ where, orderBy: { createdAt: "desc" }, skip: (page - 1) * pageSize, take: pageSize }),
    prisma.participationRequest.count({ where }),
    prisma.participationRequest.count({ where: { status: "new" } }),
    prisma.participationRequest.count({ where: { status: "contacted" } }),
    prisma.participationRequest.count({ where: { status: "in_progress" } }),
    prisma.participationRequest.count({ where: { status: "closed" } }),
    prisma.participationRequest.count({ where: { status: "rejected" } }),
    prisma.participationRequest.count({ where: { status: "archived" } }),
  ]);

  return NextResponse.json({
    requests,
    pagination: { page, pageSize, total, totalPages: Math.max(1, Math.ceil(total / pageSize)) },
    stats: { total: newCount + contactedCount + inProgressCount + closedCount + rejectedCount + archivedCount, new: newCount, contacted: contactedCount, inProgress: inProgressCount, closed: closedCount, rejected: rejectedCount, archived: archivedCount },
  });
}

export async function PATCH(request: Request) {
  if (!(await authorized())) return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });

  try {
    const body = await request.json();
    const id = typeof body?.id === "string" ? body.id.trim().slice(0, 100) : "";
    const status = typeof body?.status === "string" ? body.status : "";

    if (!id || !allowedStatuses.has(status)) return NextResponse.json({ error: "اطلاعات وضعیت نامعتبر است." }, { status: 400 });

    const updated = await prisma.participationRequest.update({ where: { id }, data: { status } });
    return NextResponse.json({ request: updated });
  } catch {
    return NextResponse.json({ error: "درخواست پیدا نشد." }, { status: 404 });
  }
}
