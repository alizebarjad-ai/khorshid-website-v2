import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";
import Link from "next/link";

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  if (!verifyAdminSession(cookieStore.get(ADMIN_COOKIE)?.value)) redirect("/admin/login");
  const [requests, announcements, newRequests, activeAnnouncements] = await Promise.all([
    prisma.participationRequest.count(), prisma.announcement.count(),
    prisma.participationRequest.count({ where: { status: "new" } }),
    prisma.announcement.count({ where: { active: true } }),
  ]);
  const cards = [
    { title: "درخواست‌ها", value: requests, detail: `${newRequests} مورد جدید`, href: "/admin/requests" },
    { title: "اطلاعیه‌ها", value: announcements, detail: `${activeAnnouncements} مورد فعال`, href: "/admin/announcements" },
  ];
  return <main dir="rtl" className="min-h-screen bg-[#FFFFFF] px-5 py-10 text-white"><div className="mx-auto max-w-7xl">
    <div className="mb-10"><p className="text-sm font-bold text-[#4A78B0]">خورشید مفاخر</p><h1 className="mt-2 text-3xl font-extrabold">داشبورد مدیریت</h1><p className="mt-2 text-sm text-[#4D5B77]">مرکز مدیریت محتوای سایت و درخواست‌های دریافتی.</p></div>
    <div className="grid gap-4 md:grid-cols-2">{cards.map(card => <Link key={card.href} href={card.href} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#4A78B0]/60 hover:bg-white/[0.05]"><p className="text-sm text-[#4D5B77]">{card.title}</p><p className="mt-3 text-4xl font-extrabold text-[#4A78B0]">{card.value}</p><p className="mt-2 text-sm text-[#4D5B77]">{card.detail}</p><span className="mt-5 inline-block text-sm font-bold text-[#4A78B0]">مدیریت ←</span></Link>)}</div>
  </div></main>;
}