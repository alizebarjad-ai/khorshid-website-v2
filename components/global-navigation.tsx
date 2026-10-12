"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const aboutNavigation = [
  ["درباره خورشید", "/about"],
  ["مأموریت و چشم‌انداز", "/mission"],
  ["ساختار و ارکان", "/governance"],
  ["اطلاعات رسمی و ثبتی", "/legal"],
  ["رویکرد و شیوه فعالیت خورشید", "/about/approach"],
  ["حوزه‌های فعالیت", "/activity-areas"],
  ["تماس با ما", "/contact"],
  ["پرسش‌های متداول", "/faq"],
] as const;

const mainNavigation = [
  { label: "بازوهای اجرایی", href: "/arms", items: [["معرفی بازوهای اجرایی", "/arms"], ["رسانه و تولید محتوا", "/media"], ["استودیو تولید خورشید", "/media/studio"], ["تلویزیون اینترنتی", "/tv"], ["توسعه پروژه‌های اجتماعی", "/projects-social"], ["توسعه آموزش، پژوهش و نوآوری", "/education"]] },
  { label: "جامعه خورشید", href: "/community", items: [["جامعه خورشید", "/community"], ["باشگاه اعضای خورشید", "/member-club"]] },
  { label: "همکاری", href: "/partnership", items: [["همکاری سازمانی", "/partnership"], ["مسیرهای مشارکت", "/participation"]] },
  { label: "اخبار و اطلاعیه‌ها", href: "/news", items: [] },
] as const;

function SunIcon() { return <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true" className="drop-shadow-[0_0_8px_rgba(74,120,176,.22)]"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.65"/><path d="M12 2v2M12 20v2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2M20 12h2M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round"/></svg>; }
function Chevron() { return <span className="mr-2 inline-block text-[#4A78B0]">⌄</span>; }

export function GlobalNavigation() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);


  useEffect(() => {
    function handleOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpen(null);
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(null); setMobileOpen(false); }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function renderDropdown(label: string, href: string, items: readonly (readonly [string, string])[], key: string) {
    return (
      <div key={key} className="relative">
        <button type="button" aria-expanded={open === key} aria-haspopup="menu"
          onClick={() => setOpen(open === key ? null : key)}
          className={"rounded-xl px-3 py-3 text-[13px] text-[#020C21] transition hover:bg-[rgba(74,120,176,.14)] hover:text-[#4A78B0] " + (open === key ? "bg-[rgba(74,120,176,.14)]" : "")}>
          {label}<Chevron />
        </button>
        {open === key && (
          <div className="absolute right-0 top-[calc(100%+8px)] w-72 rounded-2xl border border-white/10 bg-[#FFFFFF] p-2 text-[#020C21] shadow-xl" role="menu">
            {items.map(([itemLabel, itemHref]) => (
              <a key={itemHref} href={itemHref} onClick={() => setOpen(null)}
                className="block rounded-xl px-4 py-3 text-[14px] text-[#020C21] transition hover:bg-[rgba(74,120,176,.14)] hover:text-[#4A78B0]" role="menuitem">
                {itemLabel}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <header ref={navRef} className="khorshid-global-header fixed inset-x-0 top-0 z-[200]">
      <div className="container-site flex min-h-[72px] items-center justify-between gap-3 lg:gap-6">
        <Link href="/" onClick={() => { setOpen(null); setMobileOpen(false); }} className="flex shrink-0 items-center gap-3 font-bold text-[15px] text-[#020C21]">
          <span className="grid h-9 w-9 shrink-0 place-items-center text-[#4A78B0]"><SunIcon /></span>
          <span>خورشید مفاخر</span>
        </Link>

        <nav className="hidden items-center gap-1.5 text-[14px] font-medium text-[#020C21] lg:flex" aria-label="منوی اصلی">
          {renderDropdown("درباره خورشید", "", aboutNavigation, "about")}
          {mainNavigation.map(({ label, href, items }) => items.length ? (
            renderDropdown(label, href, items, href)
          ) : (
            <a key={href} href={href}
              className="rounded-xl px-2.5 py-3 text-[13px] text-[#020C21] transition hover:bg-[rgba(74,120,176,.14)] hover:text-[#4A78B0]">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/membership" className="btn-primary hidden px-5 py-2.5 text-[13px] sm:inline-flex">پیوستن به خورشید</a>
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label="باز کردن منوی سایت"
            className="lg:hidden rounded-xl border border-white/15 bg-[#FFFFFF] px-3 py-2 text-[13px] font-semibold text-[#020C21]">
            {mobileOpen ? "بستن" : "منو"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#081827] px-4 py-4 lg:hidden">
          <nav className="container-site grid gap-2" aria-label="منوی اصلی موبایل">
            <div className="rounded-2xl border border-white/10 bg-[#FFFFFF]">
              <button type="button" aria-expanded={open === "about"} onClick={() => setOpen(open === "about" ? null : "about")}
                className="flex w-full items-center justify-between px-4 py-3 text-right font-semibold text-[#020C21]">
                <span>درباره خورشید</span><Chevron />
              </button>
              {open === "about" && (
                <div className="border-t border-white/10 px-2 pb-2">
                  {aboutNavigation.map(([label, href]) => (
                    <a key={href} href={href} onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-2 text-[13px] text-[#4D5B77] hover:bg-[rgba(74,120,176,.14)] hover:text-[#020C21]">
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {mainNavigation.map(({ label, href, items }) => items.length ? (
              <div key={href} className="rounded-2xl border border-white/10 bg-[#FFFFFF]">
                <button type="button" aria-expanded={open === href} onClick={() => setOpen(open === href ? null : href)}
                  className="flex w-full items-center justify-between px-4 py-3 text-right font-semibold text-[#020C21]">
                  <span>{label}</span><Chevron />
                </button>
                {open === href && (
                  <div className="border-t border-white/10 px-2 pb-2">
                    {!items.some(([, itemHref]) => itemHref === href) && href !== "/arms" && <a href={href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-2 text-[13px] text-[#020C21] hover:bg-[rgba(74,120,176,.14)]">صفحه اصلی {label}</a>}
                    {items.map(([itemLabel, itemHref]) => (
                      <a key={itemHref} href={itemHref} onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-2 text-[13px] text-[#4D5B77] hover:bg-[rgba(74,120,176,.14)] hover:text-[#020C21]">
                        {itemLabel}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={href} href={href} onClick={() => setMobileOpen(false)}
                className="block rounded-2xl border border-white/10 bg-[#FFFFFF] px-4 py-3 font-semibold text-[#020C21]">
                {label}
              </a>
            ))}

            <a href="/contact" onClick={() => setMobileOpen(false)} className="rounded-2xl border border-white/10 bg-[#FFFFFF] px-4 py-3 font-semibold text-[#020C21]">ارتباط با خورشید</a>
          </nav>
        </div>
      )}
    </header>
  );
}
