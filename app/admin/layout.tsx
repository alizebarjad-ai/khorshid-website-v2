import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl">
      <nav className="border-b border-white/10 bg-[#FFFFFF] px-5 py-3 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-5 text-sm">
          <Link href="/admin" className="font-bold text-[#4A78B0]">مدیریت خورشید</Link>
          <Link href="/admin">داشبورد</Link>
          <Link href="/admin/announcements">اطلاعیه‌ها</Link>
          <Link href="/admin/requests">درخواست‌ها</Link>
          <Link href="/admin/media">رسانه</Link>
          <Link href="/">مشاهده سایت</Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
