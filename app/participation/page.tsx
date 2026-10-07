export const metadata = {
  alternates: { canonical: "/participation" },
  title: "مشارکت با خورشید مفاخر",
  description: "برای عضویت، همکاری، حمایت، ارائه تخصص یا تعریف پروژه با خورشید مفاخر درخواست خود را ثبت کنید.",
};

import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import ParticipationForm from "./participation-form";
import { PageStructuredData } from "@/components/page-structured-data";

const routes = [
  ["هنرمند", "برای هنرمندان و فعالان فرهنگی که می‌خواهند در تولیدات، برنامه‌ها و پروژه‌های خورشید حضور داشته باشند.", "/images/community/artists-veterans.jpg"],
  ["عضو", "برای افرادی که می‌خواهند وارد جامعه خورشید شوند و مسیر مشارکت خود را در برنامه‌ها، باشگاه‌ها و پروژه‌ها ادامه دهند.", "/images/community/volunteers-companions.jpg"],
  ["متخصص", "برای متخصصان، مشاوران، مدیران و مدرس‌هایی که می‌توانند دانش و تجربه خود را در اختیار برنامه‌ها و پروژه‌ها قرار دهند.", "/images/community/experts-experienced.jpg"],
  ["حامی", "برای افرادی که می‌خواهند از برنامه‌ها و پروژه‌های خورشید با حمایت مالی، تجهیزات، خدمات یا منابع غیرنقدی پشتیبانی کنند.", "/images/community/supporters-sponsors.jpg"],
  ["سازمان", "برای شرکت‌ها، برندها و سازمان‌هایی که به دنبال تعریف پروژه‌های مسئولیت اجتماعی، رسانه‌ای یا فرهنگی هستند.", "/images/community/partners-sponsors.jpg"],
  ["شریک", "برای مجموعه‌ها و افرادی که ظرفیت همکاری بلندمدت، شبکه‌سازی یا توسعه مشترک پروژه‌ها را دارند.", "/images/community/strategic-partners.jpg"],
];

const contributionTypes = [
  ["مالی", "حمایت از یک برنامه، پروژه یا بخشی از مأموریت خورشید."],
  ["غیرمالی", "تأمین تجهیزات، فضا، خدمات، امکانات یا سایر منابع موردنیاز."],
  ["تخصصی", "ارائه مشاوره، آموزش، تولید، اجرا یا دانش و تجربه حرفه‌ای."],
  ["پروژه‌ای", "مشارکت در طراحی و اجرای یک پروژه فرهنگی، هنری یا اجتماعی مشخص."],
];

const flow = [
  ["۰۱", "ثبت درخواست", "موضوع، ظرفیت و اطلاعات اولیه خود را ثبت می‌کنید."],
  ["۰۲", "بررسی اولیه", "درخواست بر اساس موضوع، ظرفیت و نیازهای جاری خورشید بررسی می‌شود."],
  ["۰۳", "طراحی همکاری", "در صورت تناسب، نقش طرفین، منابع، زمان‌بندی و خروجی مورد انتظار مشخص می‌شود."],
  ["۰۴", "توافق", "چارچوب همکاری و مسئولیت‌های طرفین متناسب با موضوع مشخص می‌شود."],
  ["۰۵", "اجرا", "همکاری یا پروژه طبق چارچوب توافق‌شده وارد مرحله اجرا می‌شود."],
  ["۰۶", "گزارش و ارزیابی اثر", "نتایج و دستاوردهای پروژه مستندسازی و در صورت نیاز در قالب گزارش اثرگذاری ارائه می‌شود."],
];

export default function ParticipationPage() {
  return (
    <SiteShell>
          <main>
        <section className="site-grid border-b border-white/8 reveal">
          <div className="container-site py-16 md:py-24">
            <div className="max-w-4xl">
              <p className="eyebrow">مسیرهای مشارکت</p>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.55] tracking-tight md:text-[50px]">
                هر همکاری از یک نقطه شروع می‌شود.
              </h1>
              <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[#4D5B77] md:text-[17px]">
                خورشید مفاخر مسیرهای مختلفی برای مشارکت دارد؛ از حضور هنرمندان و متخصصان تا حمایت مالی و غیرمالی، تعریف پروژه‌های فرهنگی و اجتماعی و همکاری با سازمان‌ها و شرکای راهبردی. لازم نیست از ابتدا مدل همکاری را دقیق بدانید؛ اطلاعات اولیه را ثبت کنید تا مسیر مناسب بررسی شود.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#form" className="btn-primary px-6 py-3 text-[13px]">شروع مشارکت</a>
                <a href="/membership" className="btn-secondary px-6 py-3 text-[13px]">عضویت در جامعه خورشید</a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">مسیر خود را انتخاب کنید</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
              شش نقطه ورود به شبکه خورشید
            </h2>
            <p className="mt-4 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
              هر فرد یا مجموعه می‌تواند متناسب با توانایی، هدف و نوع ارتباطی که می‌خواهد شکل دهد، از یکی از این مسیرها وارد شود.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map(([title, text, image]) => (
              <article key={title} className="group relative min-h-[290px] overflow-hidden rounded-3xl border border-white/10 bg-[#FFFFFF] reveal">
                <Image
                  src={image}
                  alt={"تصویر مسیر " + title + " در مشارکت با خورشید مفاخر"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2">
                  <h3 className="text-[21px] font-extrabold text-white">{title}</h3>
                  <p className="mt-3 max-w-sm text-[13px] leading-7 text-[#d5dde4] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015] py-14 md:py-20">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow">مدل‌های مشارکت</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                مشارکت فقط حمایت مالی نیست.
              </h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                بسته به هدف و ظرفیت شما، مشارکت می‌تواند با منابع مالی، امکانات، تخصص یا حضور مستقیم در یک پروژه شکل بگیرد.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contributionTypes.map(([title, text]) => (
                <article key={title} className="glass rounded-2xl p-6">
                  <h3 className="text-[18px] font-bold">{title}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">یک تفاوت مهم</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                عضویت با همکاری یکی نیست.
              </h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
              <p className="text-[14px] leading-8 text-[#4D5B77]">
                اگر می‌خواهید وارد جامعه اعضای خورشید شوید، مسیر <a href="/membership" className="font-semibold text-[#4A78B0] hover:underline">عضویت</a> برای شماست. اگر قصد حمایت، همکاری تخصصی، تعریف پروژه، همکاری سازمانی یا مشارکت راهبردی دارید، از همین مسیر اقدام کنید.
              </p>
              <p className="mt-4 text-[13px] leading-7 text-[#4D5B77]">
                ثبت درخواست اولیه به معنی پذیرش قطعی همکاری یا تعهد مالی نیست. درخواست ابتدا بررسی می‌شود و سپس درباره مسیر مناسب، نقش طرفین و چارچوب همکاری هماهنگی انجام خواهد شد.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015] py-14 md:py-20">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow">از درخواست تا اثر</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                یک مسیر روشن برای تبدیل مشارکت به نتیجه
              </h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                تلاش می‌کنیم پیش از شروع هر همکاری، موضوع، نقش طرفین، منابع و خروجی مورد انتظار روشن باشد و نتیجه پروژه نیز تا حد امکان مستند و قابل ارزیابی شود.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {flow.map(([number, title, text]) => (
                <article key={number} className="glass rounded-2xl p-6 min-h-[190px]">
                  <span className="text-[11px] font-bold text-[#4A78B0]">{number}</span>
                  <h3 className="mt-4 text-[17px] font-bold">{title}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">همکاری سازمانی</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                برای یک پروژه مشخص یا یک همکاری بلندمدت، می‌توانیم از یک ایده شروع کنیم.
              </h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                شرکت‌ها، برندها و سازمان‌ها می‌توانند برای پروژه‌های مسئولیت اجتماعی، تولید محتوا، حمایت و اسپانسرینگ، همکاری تخصصی یا توسعه شبکه با خورشید وارد گفتگو شوند.
              </p>
              <a href="/partnership" className="mt-6 inline-flex font-semibold text-[#4A78B0]">
                آشنایی با مدل همکاری سازمانی ←
              </a>
            </div>
          </div>
        </section>

        <section id="form" className="border-y border-white/8 bg-white/[0.015] scroll-mt-24 py-16 md:py-24">
          <div className="container-site">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">ثبت درخواست</p>
              <h2 className="mt-2 text-[29px] font-extrabold leading-[1.6] md:text-[38px]">
                ایده یا ظرفیتی برای همکاری دارید؟
              </h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                لازم نیست همه جزئیات را از ابتدا بدانید. اطلاعات اولیه را ثبت کنید تا تیم خورشید موضوع درخواست را بررسی و مسیر مناسب را مشخص کند.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-5xl">
              <ParticipationForm />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
