import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata: Metadata = {
  title: "اطلاعات رسمی و ثبتی سازمان مردم‌نهاد خورشید مفاخر",
  description:
    "اطلاعات رسمی و ثبتی سازمان مردم‌نهاد خورشید مفاخر؛ شماره ثبت ۶۱۷۲۰، تاریخ ثبت ۳۱/۶/۱۴۰۵، مرجع ثبت سازمان ثبت اسناد و املاک کشور و مجوز فعالیت وزارت کشور.",
  alternates: {
    canonical: "/legal",
  },
  openGraph: {
    title: "اطلاعات رسمی و ثبتی | سازمان مردم‌نهاد خورشید مفاخر",
    description:
      "مشخصات حقوقی، ثبتی و رسمی سازمان مردم‌نهاد خورشید مفاخر، شامل شماره ثبت، تاریخ ثبت، مرجع ثبت و مرجع صدور مجوز فعالیت.",
    url: "/legal",
    type: "article",
  },
};

function DocumentCard({
  title,
  description,
  status = "سند رسمی",
}: {
  title: string;
  description: string;
  status?: string;
}) {
  return (
    <article className="glass rounded-2xl p-6 transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#4A78B0]/20 bg-[#4A78B0]/[0.07] text-[#4A78B0]" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 3.5h8l4 4V20.5H6z" />
            <path d="M14 3.5v4h4M8.5 12h7M8.5 15.5h7" />
          </svg>
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-[#4D5B77]">
          {status}
        </span>
      </div>
      <h3 className="mt-5 text-[17px] font-bold">{title}</h3>
      <p className="mt-3 text-[12px] leading-7 text-[#4D5B77]">{description}</p>

    </article>
  );
}

const facts = [
  ["نام رسمی", "سازمان مردم‌نهاد خورشید مفاخر"],
  ["نوع سازمان", "مردم‌نهاد، غیرانتفاعی، غیرسیاسی و داوطلبانه"],
  ["شماره ثبت", "۶۱۷۲۰"],
  ["تاریخ ثبت", "۳۱/۶/۱۴۰۵"],
  ["مرجع ثبت", "سازمان ثبت اسناد و املاک کشور"],
  ["مرجع صدور مجوز فعالیت", "وزارت کشور"],
];

export default function LegalPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://khorshid-website.vercel.app/legal#webpage",
    url: "https://khorshid-website.vercel.app/legal",
    name: "اطلاعات رسمی و ثبتی | خورشید مفاخر",
    description:
      "اطلاعات رسمی، ثبتی و حقوقی سازمان مردم‌نهاد خورشید مفاخر، شامل مشخصات ثبت، مرجع صدور مجوز و مستندات رسمی.",
    inLanguage: "fa-IR",
    isPartOf: { "@id": "https://khorshid-website.vercel.app/#website" },
    about: { "@id": "https://khorshid-website.vercel.app/#organization" },
    mainEntity: { "@id": "https://khorshid-website.vercel.app/#organization" },
    breadcrumb: { "@id": "https://khorshid-website.vercel.app/legal#breadcrumb" },
    keywords: [
      "خورشید مفاخر",
      "سازمان مردم‌نهاد خورشید مفاخر",
      "شماره ثبت خورشید مفاخر",
      "شماره ثبت ۶۱۷۲۰",
      "اطلاعات ثبتی خورشید مفاخر",
      "سازمان مردم نهاد در تهران",
      "مجوز وزارت کشور",
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://khorshid-website.vercel.app/legal#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خورشید مفاخر",
        item: "https://khorshid-website.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "درباره خورشید",
        item: "https://khorshid-website.vercel.app/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "اطلاعات رسمی و ثبتی",
        item: "https://khorshid-website.vercel.app/legal",
      },
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://khorshid-website.vercel.app/legal#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "نام رسمی این سازمان چیست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نام رسمی سازمان، «سازمان مردم‌نهاد خورشید مفاخر» است.",
        },
      },
      {
        "@type": "Question",
        name: "شماره ثبت خورشید مفاخر چیست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "شماره ثبت سازمان مردم‌نهاد خورشید مفاخر ۶۱۷۲۰ است.",
        },
      },
      {
        "@type": "Question",
        name: "خورشید مفاخر چه زمانی ثبت شده است؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تاریخ ثبت سازمان مردم‌نهاد خورشید مفاخر ۳۱/۶/۱۴۰۵ است.",
        },
      },
      {
        "@type": "Question",
        name: "مرجع ثبت خورشید مفاخر کدام است؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "مرجع ثبت سازمان مردم‌نهاد خورشید مفاخر، سازمان ثبت اسناد و املاک کشور است.",
        },
      },
      {
        "@type": "Question",
        name: "مجوز فعالیت خورشید مفاخر توسط کدام نهاد صادر شده است؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "مجوز فعالیت سازمان مردم‌نهاد خورشید مفاخر توسط وزارت کشور صادر شده است.",
        },
      },
    ],
  };

  return (
    <>
      <PageStructuredData path="/legal" />
      <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[8%] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#4A78B0]/[0.08] blur-3xl" />
          <div className="absolute left-[8%] bottom-[-240px] h-[420px] w-[420px] rounded-full bg-[#2c8bb8]/[0.05] blur-3xl" />
        </div>

        <div className="container-site relative py-28 md:py-36">
          <div className="max-w-4xl">
            <p className="eyebrow">اطلاعات رسمی و ثبتی</p>
            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.6] tracking-tight md:text-[52px]">
              هویت حقوقی و رسمی خورشید مفاخر
            </h1>
            <div className="mt-6 max-w-3xl text-[15px] leading-8 text-[#c6d0d8] md:text-[17px]">
              <p>
                سازمان مردم‌نهاد خورشید مفاخر، نهادی غیرانتفاعی، غیرسیاسی و داوطلبانه است که با ثبت رسمی و مجوز وزارت کشور فعالیت می‌کند. هویت حقوقی و مشخصات ثبتی سازمان در این بخش ارائه شده است.
              </p>
              <p className="mt-3">
                خورشید مفاخر در کنار جایگاه حقوقی خود، شبکه‌ای از هنرمندان، متخصصان، اعضا، حامیان و بازوهای اجرایی را در اختیار دارد. اطلاعات این بخش به هویت رسمی و اسناد سازمان اختصاص دارد.
              </p>
              <details className="group mt-4">
                <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0]">
                  ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <div className="mt-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#4D5B77]">
                  مأموریت و چشم‌انداز، ساختار و ارکان، رویکرد فعالیت و حوزه‌های فعالیت سازمان در صفحات اختصاصی سایت معرفی شده‌اند.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <div className="container-site py-14 md:py-20">
        <section>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="eyebrow">مشخصات رسمی</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                مشخصات ثبتی و حقوقی
              </h2>
              <p className="mt-5 max-w-md text-[13px] leading-8 text-[#4D5B77]">
                اطلاعات پایه برای شناسایی رسمی و ثبتی سازمان مردم‌نهاد خورشید مفاخر.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                  <span className="text-[11px] font-semibold text-[#4A78B0]">{label}</span>
                  <p className="mt-2 text-[14px] font-semibold leading-7 text-[#f1f4f6]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">وضعیت حقوقی</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                یک سازمان رسمی با هویتی روشن
              </h2>
            </div>
            <div className="text-[14px] leading-8 text-[#4D5B77]">
              <p>
                خورشید مفاخر فعالیت خود را بر پایه شخصیت حقوقی ثبت‌شده و مجوز فعالیت سازمان مردم‌نهاد دنبال می‌کند. این جایگاه، چارچوب ارتباط رسمی سازمان با اعضا، حامیان، شرکت‌ها، نهادهای عمومی و شرکای اجتماعی را شکل می‌دهد.
              </p>
              <p className="mt-4">
                هویت حقوقی خورشید در کنار ساختار سازمانی، جامعه تخصصی و بازوهای اجرایی آن معنا پیدا می‌کند؛ هر یک از این بخش‌ها در صفحات اختصاصی خود معرفی شده‌اند.
              </p>
              <details className="group mt-4">
                <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0]">
                  ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <div className="mt-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] text-[#4D5B77]">
                  مستندات منتشرشده در این بخش، نسخه‌های رسمی و قابل استناد اسناد سازمان هستند.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">مستندات رسمی</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                اسناد رسمی
              </h2>
            </div>
            <p className="max-w-xl text-[12px] leading-7 text-[#778796]">
              اسناد رسمی سازمان در قالب نسخه‌های دیجیتال قابل مشاهده و دریافت هستند.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <DocumentCard
              title="آگهی تأسیس"
              description="سند رسمی تأسیس و ثبت سازمان و مشخصات شخصیت حقوقی خورشید مفاخر."
            />
            <DocumentCard
              title="روزنامه رسمی"
              description="نسخه منتشرشده آگهی تأسیس و ثبت سازمان در روزنامه رسمی جمهوری اسلامی ایران."
            />
            <DocumentCard
              title="اساسنامه"
              description="سند پایه سازمان شامل اهداف، موضوع فعالیت، ارکان و چارچوب حقوقی خورشید مفاخر."
            />
          </div>


        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <div className="mb-8">
            <p className="eyebrow">مطالب مرتبط</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
              اطلاعات تکمیلی درباره خورشید مفاخر
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <a href="/about" className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:-translate-y-1">
              <p className="text-[11px] font-semibold text-[#4A78B0]">معرفی سازمان</p>
              <h3 className="mt-2 text-[19px] font-bold">درباره خورشید مفاخر</h3>
              <p className="mt-3 text-[12px] leading-7 text-[#4D5B77]">
                معرفی سازمان، مأموریت و مسیر فعالیت در حوزه هنر، فرهنگ و مسئولیت اجتماعی.
              </p>
            </a>
            <a href="/governance" className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:-translate-y-1">
              <p className="text-[11px] font-semibold text-[#4A78B0]">ساختار سازمانی</p>
              <h3 className="mt-2 text-[19px] font-bold">ساختار و ارکان</h3>
              <p className="mt-3 text-[12px] leading-7 text-[#4D5B77]">
                ساختار سازمانی، ارکان و چارچوب حکمرانی خورشید مفاخر.
              </p>
            </a>
            <a href="/mission/about" className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:-translate-y-1">
              <p className="text-[11px] font-semibold text-[#4A78B0]">شناخت سازمان</p>
              <h3 className="mt-2 text-[19px] font-bold">مأموریت و چشم‌انداز</h3>
              <p className="mt-3 text-[12px] leading-7 text-[#4D5B77]">
                مأموریت، چشم‌انداز و جهت‌گیری سازمان در مسیر اثرگذاری اجتماعی.
              </p>
            </a>
          </div>
        </section>

        <section className="mt-20 md:mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 px-6 py-12 text-center md:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,120,176,.10),transparent_58%)]" />
            <div className="relative mx-auto max-w-3xl">
              <p className="eyebrow">مسیرهای مرتبط</p>
              <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">
                خورشید مفاخر؛ هویتی رسمی، مسیری برای اثرگذاری
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-8 text-[#4D5B77]">
                برای شناخت مأموریت، ساختار، حوزه‌های فعالیت و ظرفیت‌های اجرایی خورشید مفاخر، صفحات مرتبط سایت را دنبال کنید.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href="/about" className="btn-secondary px-6 py-3 text-[13px]">درباره خورشید</a>
                <a href="/governance" className="btn-secondary px-6 py-3 text-[13px]">ساختار و ارکان</a>
                <a href="/partnership" className="btn-primary px-6 py-3 text-[13px]">همکاری سازمانی</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <div>
            <p className="eyebrow">پرسش‌های متداول</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
              اطلاعاتی که بیشتر جستجو می‌شوند
            </h2>
          </div>
          <div className="mt-8 grid gap-3">
            {[
              ["نام رسمی خورشید مفاخر چیست؟", "نام رسمی سازمان، «سازمان مردم‌نهاد خورشید مفاخر» است."],
              ["شماره ثبت خورشید مفاخر چیست؟", "شماره ثبت سازمان ۶۱۷۲۰ است."],
              ["تاریخ ثبت خورشید مفاخر چه زمانی است؟", "تاریخ ثبت سازمان ۳۱/۶/۱۴۰۵ است."],
              ["مرجع ثبت خورشید مفاخر کدام است؟", "مرجع ثبت سازمان، سازمان ثبت اسناد و املاک کشور است."],
              ["مجوز فعالیت خورشید مفاخر را کدام نهاد صادر کرده است؟", "مرجع صدور مجوز فعالیت سازمان، وزارت کشور است."],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4">
                <summary className="cursor-pointer list-none text-[14px] font-bold text-[#f1f4f6]">
                  {question}
                  <span className="float-left text-[#4A78B0] transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-7 text-[#4D5B77]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
      </SiteShell>
    </>
  );
}
