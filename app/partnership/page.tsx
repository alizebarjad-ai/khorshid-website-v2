import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { PageStructuredData } from "@/components/page-structured-data";

const trustReasons = [
  ["مشروعیت سازمانی", "سازمان مردم‌نهاد ثبت‌شده و دارای مجوز وزارت کشور."],
  ["ظرفیت اجرایی", "بازوهای تخصصی برای رسانه، آموزش و اجرای پروژه‌های فرهنگی و اجتماعی."],
  ["ظرفیت هنری", "شبکه هنرمندان، مفاخر و باشگاه‌های تخصصی برای مشارکت در پروژه‌ها."],
  ["ظرفیت اجتماعی", "تمرکز بر مسائل واقعی و اولویت‌های اجتماعی، نه صرفاً اجرای یک فعالیت تبلیغاتی."],
  ["گزارش‌پذیری", "مستندسازی فعالیت‌ها و ارائه گزارش حرفه‌ای از خروجی و اثر پروژه."],
];

const collaborationTypes = [
  ["مسئولیت اجتماعی", "طراحی و اجرای پروژه‌های فرهنگی، هنری و اجتماعی متناسب با اهداف سازمان.", "/images/partnership/social-responsibility.jpg"],
  ["رسانه و محتوا", "تولید، روایت و انتشار محتوای فرهنگی، هنری و اجتماعی برای پروژه‌ها و برنامه‌های سازمان.", "/images/partnership/media-content2.jpg"],
  ["حمایت و اسپانسرینگ", "حمایت مالی از پروژه‌ها، رویدادها و برنامه‌های مشخص در قالب همکاری شفاف و قابل گزارش.", "/images/community/supporters-sponsors.jpg"],
  ["ظرفیت و خدمات غیرمالی", "تأمین فضا، تجهیزات، خدمات، آموزش، تخصص یا سایر منابع موردنیاز یک پروژه.", "/images/partnership/non-financial-support.jpg"],
  ["همکاری راهبردی", "تعریف همکاری‌های بلندمدت برای توسعه پروژه‌ها، شبکه‌ها و ظرفیت‌های مشترک.", "/images/community/strategic-partners.jpg"],
];

const deliverables = [
  ["برنامه CSR", "طراحی و اجرای برنامه مسئولیت اجتماعی متناسب با هدف سازمان."],
  ["کمپین و روایت اجتماعی", "ایده‌پردازی، تولید محتوا و اجرای کمپین برای یک مسئله مشخص."],
  ["تولید محتوای فرهنگی", "تولید و انتشار محتوای متنی، تصویری و ویدئویی با رویکرد فرهنگی و اجتماعی."],
  ["رویداد و پروژه اجتماعی", "طراحی، اجرا و مستندسازی رویداد یا پروژه‌ای مشخص."],
  ["حمایت از هنرمندان", "طراحی مسیرهای حمایت و اتصال منابع سازمان به جامعه هنری."],
  ["گزارش اثرگذاری", "مستندسازی فعالیت‌ها، خروجی‌ها و نتایج برای ارائه مدیریتی یا گزارش سالانه."],
];

const process = [
  ["۰۱", "شناخت مسئله", "نیاز، هدف یا ظرفیت سازمان مشخص می‌شود."],
  ["۰۲", "طراحی راهکار", "مدل پروژه، خروجی، زمان‌بندی و منابع موردنیاز طراحی می‌شود."],
  ["۰۳", "توافق و برنامه‌ریزی", "دامنه همکاری، مسئولیت‌ها، منابع و شاخص‌های پروژه مشخص می‌شود."],
  ["۰۴", "اجرا و روایت", "پروژه اجرا و در صورت نیاز، روایت رسانه‌ای آن تولید می‌شود."],
  ["۰۵", "مستندسازی", "فعالیت‌ها، خروجی‌ها و نتایج پروژه مستند می‌شوند."],
  ["۰۶", "گزارش اثرگذاری", "گزارش حرفه‌ای پروژه برای ارائه مدیریتی یا گزارش سالانه تهیه می‌شود."],
];

export default function PartnershipPage() {
  return (
    <>
      <PageStructuredData path="/partnership" />
    <SiteShell>
      <main>
        <section className="site-grid border-b border-white/8 reveal">
          <div className="container-site py-16 md:py-24">
            <div className="max-w-4xl">
              <p className="eyebrow">همکاری سازمانی و راهبردی</p>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.55] tracking-tight md:text-[50px]">
                ظرفیت سازمان شما، یک پروژه قابل اجرا و قابل گزارش
              </h1>
              <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[#4D5B77] md:text-[17px]">
                خورشید مفاخر با شرکت‌ها، برندها و سازمان‌ها برای طراحی و اجرای پروژه‌های فرهنگی، هنری، رسانه‌ای و مسئولیت اجتماعی همکاری می‌کند؛ از تعریف مسئله تا اجرا، روایت و مستندسازی اثر.
              </p>
              <div className="mt-8">
                <a href="/participation#form" className="btn-primary px-6 py-3 text-[13px]">ثبت درخواست همکاری</a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">اعتماد برای شروع همکاری</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">چرا همکاری با خورشید؟</h2>
            <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
              همکاری سازمانی زمانی ارزشمند است که پشت آن، اعتبار حقوقی، توان اجرا، شبکه تخصصی و امکان گزارش‌دهی وجود داشته باشد.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustReasons.map(([title, text]) => (
              <article key={title} className="glass rounded-2xl p-5">
                <h3 className="text-[17px] font-bold">{title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015] py-14 md:py-20">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow">مدل‌های همکاری</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">برای چه نوع همکاری می‌توانید روی خورشید حساب کنید؟</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                از برنامه مسئولیت اجتماعی و کمپین تا تولید محتوا، حمایت از هنرمندان، رویداد، پروژه اجتماعی و مشارکت غیرمالی؛ مدل همکاری بر اساس مسئله و ظرفیت سازمان شما طراحی می‌شود.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {collaborationTypes.map(([title, text, image]) => (
                <article key={title} className="group relative min-h-[290px] overflow-hidden rounded-3xl border border-white/10 bg-[#FFFFFF] reveal">
                  <Image src={image} alt={title + " در همکاری با خورشید مفاخر"} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2">
                    <h3 className="text-[20px] font-extrabold text-white">{title}</h3>
                    <p className="mt-3 max-w-sm text-[13px] leading-7 text-[#d5dde4] opacity-0 transition-opacity duration-300 group-hover:opacity-100">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">خروجی همکاری</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">در پایان چه چیزی تحویل می‌گیرید؟</h2>
            <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
              بسته به مدل پروژه، خورشید می‌تواند از طراحی و تولید تا اجرا و مستندسازی را بر عهده بگیرد و خروجی را در قالبی روشن و قابل ارائه تحویل دهد.
            </p>
            <details className="mt-3 text-[13px] leading-7 text-[#4D5B77]">
              <summary className="cursor-pointer font-semibold text-[#4A78B0]">ادامه متن</summary>
              <p className="mt-3">جزئیات خروجی، شاخص‌های ارزیابی و سطح گزارش‌دهی از ابتدا متناسب با هدف و دامنه همکاری مشخص می‌شود.</p>
            </details>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(([title, text]) => (
              <article key={title} className="glass rounded-2xl p-6">
                <h3 className="text-[17px] font-bold">{title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015] py-14 md:py-20">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow">فرآیند همکاری</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">از مسئله تا اثر</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                پروژه از شناخت نیاز آغاز می‌شود و با طراحی، اجرا، مستندسازی و گزارش اثرگذاری به یک خروجی قابل ارائه تبدیل می‌شود.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {process.map(([number, title, text]) => (
                <article key={number} className="glass min-h-[180px] rounded-2xl p-6">
                  <span className="text-[11px] font-bold text-[#4A78B0]">{number}</span>
                  <h3 className="mt-4 text-[17px] font-bold">{title}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 p-8 md:p-10">
              <p className="eyebrow">گزارش اثرگذاری</p>
              <h2 className="mt-2 text-[27px] font-extrabold leading-[1.6] md:text-[34px]">اثر پروژه باید قابل ارائه باشد.</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                گزارش اثرگذاری می‌تواند برای ارائه داخلی، مدیریت، مجمع عمومی یا گزارش سالانه سازمان تهیه شود.
              </p>
            </div>
            <div id="partners" className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
              <p className="eyebrow">همراهان و حامیان</p>
              <h2 className="mt-2 text-[27px] font-extrabold leading-[1.6] md:text-[34px]">شبکه همکاری خورشید</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                نام مجموعه‌ها و پروژه‌هایی که همکاری آن‌ها نهایی و قابل انتشار باشد، در همین بخش معرفی خواهد شد.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site pb-16 md:pb-24">
          <div className="rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 p-8 md:p-12">
            <p className="eyebrow">شروع همکاری</p>
            <h2 className="mt-2 max-w-3xl text-[28px] font-extrabold leading-[1.6] md:text-[38px]">یک مسئله، ایده یا ظرفیت برای همکاری دارید؟</h2>
            <p className="mt-4 max-w-3xl text-[14px] leading-8 text-[#4D5B77]">اطلاعات اولیه را ثبت کنید تا موضوع بررسی و درباره مدل مناسب همکاری و مسیر اجرا با شما هماهنگ شود.</p>
            <div className="mt-7">
              <a href="/participation#form" className="btn-primary inline-flex px-7 py-3 text-[13px]">ثبت درخواست همکاری</a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
      </>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "/partnership" },
  title: "همکاری سازمانی و راهبردی",
  description: "همکاری سازمان‌ها و شرکت‌ها با خورشید مفاخر برای طراحی و اجرای پروژه‌های فرهنگی، هنری، رسانه‌ای و مسئولیت اجتماعی.",
};
