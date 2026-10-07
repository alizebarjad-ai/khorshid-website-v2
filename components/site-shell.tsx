export function SiteFooter() {
  const links = [
    ["شناسنامه و درباره خورشید", "/about"],
    ["ساختار و ارکان", "/governance"],
    ["ماموریت و چشم‌انداز", "/mission"],
    ["حوزه‌های فعالیت", "/activity-areas"],
    ["باشگاه مفاخر", "/member-club"],
    ["تماس با ما", "/contact"],
  ];
  return <footer className="border-t border-white/10 py-12 text-[12px] text-[#4D5B77]"><div className="container-site grid gap-8 md:grid-cols-[1fr_1.5fr]"><div><div className="flex items-center gap-3 font-bold text-[#020C21]"><span className="grid h-9 w-9 place-items-center rounded-xl border border-[#4A78B0]/30 text-[#4A78B0]"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.65"/><path d="M12 2v2M12 20v2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2M20 12h2M4.9 19.1l1.5-1.5M17.6 6.4l1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round"/></svg></span>خورشید مفاخر</div><p className="mt-4 max-w-sm leading-7">هنر، جامعه و فرهنگ؛ برای اثرگذاری اجتماعی و حمایت پایدار از هنرمندان.</p></div><nav className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3" aria-label="پیوندهای پایانی">{links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-[#4A78B0]">{label}</a>)}</nav></div><div className="container-site mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-5 md:flex-row"><span>خورشید مفاخر</span><span>هنر · جامعه · فرهنگ</span></div></footer>;
}

import { BreadcrumbSchema } from "./breadcrumb-schema";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen pt-[72px]">
      <BreadcrumbSchema />
      {children}
    </main>
  );
}