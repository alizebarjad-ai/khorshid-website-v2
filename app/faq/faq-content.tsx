"use client";

import { useMemo, useState } from "react";

type FaqItem = { question: string; answer: string };
type Category = { label: string; description: string; questions: string[] };

const categories: Category[] = [
  { label: "همه پرسش‌ها", description: "پاسخ پرسش‌های رایج درباره خورشید مفاخر", questions: [] },
  { label: "معرفی و فعالیت", description: "هویت سازمان، حوزه‌های فعالیت و بازوهای اجرایی", questions: ["خورشید مفاخر چیست؟", "آیا خورشید مفاخر به‌صورت رسمی ثبت شده است؟", "فعالیت‌های خورشید مفاخر بر چه موضوعاتی متمرکز است؟", "تفاوت حوزه‌های فعالیت با حوزه‌های حمایتی چیست؟", "خورشید مفاخر چه مسائل اجتماعی را دنبال می‌کند؟", "بازوهای اجرایی خورشید مفاخر چه هستند؟"] },
  { label: "همکاری و حمایت", description: "همکاری با برندها، سازمان‌ها و حامیان پروژه‌ها", questions: ["شرکت‌ها و برندها چگونه می‌توانند با خورشید همکاری کنند؟", "پروژه مسئولیت اجتماعی شرکتی (CSR) چگونه تعریف می‌شود؟", "آیا امکان حمایت از یک پروژه مشخص وجود دارد؟", "حمایت فقط به‌صورت مالی انجام می‌شود؟"] },
  { label: "عضویت و مشارکت", description: "عضویت، همکاری داوطلبانه و ارائه ایده یا تخصص", questions: ["هنرمندان چگونه می‌توانند با خورشید مفاخر همراه شوند؟", "چه کسانی می‌توانند برای عضویت اقدام کنند؟", "آیا همکاری داوطلبانه امکان‌پذیر است؟", "چگونه می‌توان یک ایده یا پیشنهاد پروژه ارائه کرد؟"] },
  { label: "پیگیری و ارتباط", description: "فرایند بررسی درخواست‌ها و راه‌های تماس", questions: ["پس از ثبت درخواست همکاری چه اتفاقی می‌افتد؟", "آیا خورشید مفاخر خدمات یا اجرای پروژه را تضمین می‌کند؟", "چگونه می‌توان اخبار و رویدادهای خورشید را دنبال کرد؟", "راه ارتباط با خورشید مفاخر چیست؟"] },
];

export function FaqContent({ items }: { items: FaqItem[] }) {
  const [activeCategory, setActiveCategory] = useState("همه پرسش‌ها");
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(items[0]?.question ?? null);

  const visibleItems = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("fa");
    return items.filter((item) => {
      const category = categories.find((entry) => entry.label === activeCategory);
      const categoryMatch = activeCategory === "همه پرسش‌ها" || category?.questions.includes(item.question);
      const searchMatch = !normalized || `${item.question} ${item.answer}`.toLocaleLowerCase("fa").includes(normalized);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, items, query]);

  return (
    <main className="faq-page pt-[72px]" dir="rtl">
      <section className="site-grid border-b border-white/8">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="container-site relative py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow">راهنمای همراهی با خورشید</p>
            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.55] tracking-tight md:text-[50px]">
              پرسش‌های متداول
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#4D5B77] md:text-[17px]">
              پاسخ روشن به پرسش‌های شما درباره هویت و فعالیت‌های خورشید مفاخر، عضویت، همکاری با برندها و سازمان‌ها و مسیرهای حمایت از پروژه‌های فرهنگی، هنری و اجتماعی.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#faq-list" className="btn-primary px-6 py-3 text-[13px]">مشاهده پرسش‌ها</a>
              <a href="/participation" className="btn-secondary px-6 py-3 text-[13px]">شروع همکاری</a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["۱۸", "پاسخ کاربردی"],
                ["۴", "دسته موضوعی"],
                ["۱", "مسیر شروع همکاری"],
              ].map(([number, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-[#FFFFFF]/75 px-3 py-4 md:px-5">
                  <div className="text-2xl font-bold text-[#4A78B0] md:text-3xl">{number}</div>
                  <div className="mt-1 text-xs leading-6 text-[#4D5B77] md:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-12 md:py-16" id="faq-list">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <aside className="self-start lg:sticky lg:top-28">
            <p className="eyebrow">دسته‌بندی پرسش‌ها</p>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category.label}
                  onClick={() => { setActiveCategory(category.label); setOpenQuestion(null); }}
                  aria-pressed={activeCategory === category.label}
                  className={`shrink-0 rounded-xl border px-4 py-3 text-right text-sm transition lg:w-full ${activeCategory === category.label ? "border-[#4A78B0]/50 bg-[#4A78B0]/10 text-[#4A78B0]" : "border-white/10 bg-[#FFFFFF]/70 text-[#d5dee6] hover:border-white/25"}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="mt-5 hidden rounded-2xl border border-white/10 bg-[#FFFFFF]/65 p-4 lg:block">
              <p className="text-sm font-bold text-[#020C21]">{categories.find((entry) => entry.label === activeCategory)?.label}</p>
              <p className="mt-2 text-xs leading-7 text-[#aebbc7]">{categories.find((entry) => entry.label === activeCategory)?.description}</p>
            </div>
            <a href="/contact" className="mt-5 hidden text-sm text-[#4A78B0] hover:underline lg:inline-flex">پاسخ پرسش خود را پیدا نکردید؟ تماس با ما ←</a>
          </aside>

          <div className="min-w-0">
            <label htmlFor="faq-search" className="mb-2 block text-sm font-semibold text-[#020C21]">جست‌وجو در پرسش‌ها</label>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="مثلاً عضویت، حمایت مالی یا پروژه اجتماعی"
              className="w-full rounded-2xl border border-white/10 bg-[#FFFFFF]/85 px-5 py-4 text-sm text-[#020C21] outline-none transition placeholder:text-[#8293a2] focus:border-[#4A78B0]/60"
            />
            <div className="mt-4 flex items-center justify-between gap-3 text-xs text-[#9eacb9]">
              <span>{visibleItems.length} پرسش</span>
              {query && <button type="button" onClick={() => setQuery("")} className="text-[#4A78B0] hover:underline">پاک‌کردن جست‌وجو</button>}
            </div>

            <div className="mt-4 space-y-3">
              {visibleItems.map((item, index) => {
                const isOpen = openQuestion === item.question;
                return (
                  <article key={item.question} className="overflow-hidden rounded-2xl border border-white/10 bg-[#FFFFFF]/80 transition hover:border-white/20">
                    <h2 className="m-0">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right text-sm font-bold leading-7 text-[#020C21] md:px-6 md:text-base"
                      >
                        <span className="flex items-start gap-3">
                          <span className="mt-0.5 text-xs font-bold text-[#4A78B0]">{String(index + 1).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).padStart(2, "۰")}</span>
                          <span>{item.question}</span>
                        </span>
                        <span aria-hidden="true" className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-xl text-[#4A78B0] transition ${isOpen ? "rotate-45 bg-[#4A78B0]/10" : ""}`}>+</span>
                      </button>
                    </h2>
                    {isOpen && (
                      <div className="border-t border-white/8 px-5 pb-6 pt-4 md:px-6">
                        <p className="text-sm leading-8 text-[#4D5B77] md:text-[15px]">{item.answer}</p>
                        {item.question.includes("همکاری") || item.question.includes("پروژه") || item.question.includes("مشارکت") ? (
                          <a href="/participation" className="mt-4 inline-flex text-sm font-semibold text-[#4A78B0] hover:underline">مسیرهای مشارکت ←</a>
                        ) : item.question.includes("عضویت") ? (
                          <a href="/membership" className="mt-4 inline-flex text-sm font-semibold text-[#4A78B0] hover:underline">اطلاعات عضویت ←</a>
                        ) : item.question.includes("تماس") ? (
                          <a href="/contact" className="mt-4 inline-flex text-sm font-semibold text-[#4A78B0] hover:underline">تماس با ما ←</a>
                        ) : null}
                      </div>
                    )}
                  </article>
                );
              })}
              {visibleItems.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-[#FFFFFF]/70 px-6 py-10 text-center">
                  <p className="font-bold text-[#020C21]">پرسشی با این عبارت پیدا نشد.</p>
                  <p className="mt-2 text-sm text-[#aebbc7]">عبارت کوتاه‌تری جست‌وجو کنید یا از صفحه تماس با ما پیام بفرستید.</p>
                  <a href="/contact" className="mt-4 inline-flex text-sm font-semibold text-[#4A78B0] hover:underline">تماس با ما ←</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container-site pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#FFFFFF]/90 px-6 py-8 md:px-10 md:py-12">
          <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[#4A78B0]/[0.07] blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow">گام بعدی</p>
              <h2 className="mt-2 text-2xl font-extrabold leading-relaxed text-[#4A78B0] md:text-3xl">برای همراهی با خورشید، از یک گفت‌وگو شروع کنید.</h2>
              <p className="mt-3 text-sm leading-8 text-[#4D5B77]">نوع همکاری هنوز مشخص نیست؟ اطلاعات اولیه خود را ثبت کنید تا مسیر متناسب با ظرفیت و هدف شما بررسی شود.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href="/participation" className="btn-primary px-6 py-3 text-sm">ثبت درخواست مشارکت</a>
              <a href="/contact" className="btn-secondary px-6 py-3 text-sm">تماس با ما</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
