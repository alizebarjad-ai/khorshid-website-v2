import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import { PageStructuredData } from "@/components/page-structured-data";

function ExpandableText({
  paragraphs,
  more,
}: {
  paragraphs: string[];
  more: ReactNode;
}) {
  return (
    <div className="space-y-3 md:space-y-4 text-[14px] leading-8 text-[#4D5B77]">
      <p>{paragraphs[0]}</p>
      <p>{paragraphs[1]}</p>
      <details className="group pt-1">
        <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] transition hover:text-[#4A78B0]">
          ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div className="mt-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#4D5B77]">
          {more}
        </div>
      </details>
    </div>
  );
}

const missionAxes = [
  {
    title: "حمایت از هنرمندان",
    text: "ایجاد فرصت برای رشد، مشارکت، خلق و اثرگذاری هنرمندان و پیشکسوتان و پیوند دادن ظرفیت حرفه‌ای آنان با فرصت‌های واقعی فرهنگی و اجتماعی.",
  },
  {
    title: "هنر و مسائل اجتماعی",
    text: "استفاده از قدرت هنر و روایت برای دیده‌شدن مسائل واقعی، شکل‌گیری گفت‌وگو و همراه شدن جامعه با مسیرهای آگاهی، مشارکت و اقدام.",
  },
  {
    title: "شبکه‌سازی و مشارکت",
    text: "اتصال هنرمندان، متخصصان، اعضا، سازمان‌ها، حامیان و بازوهای اجرایی برای تبدیل ایده‌ها و ظرفیت‌های پراکنده به همکاری و پروژه قابل اجرا.",
  },
];

const impactSteps = [
  ["شناخت مسئله", "تعریف دقیق نیاز، مسئله و مخاطب"],
  ["پژوهش و گفت‌وگو", "شناخت زمینه، ذی‌نفعان و ظرفیت‌های موجود"],
  ["طراحی ایده", "انتخاب زبان هنری و مسیر مناسب برای اثرگذاری"],
  ["تولید و اجرا", "به‌کارگیری شبکه هنری، تخصصی و اجرایی"],
  ["مشارکت جامعه", "ایجاد تجربه، گفت‌وگو و امکان همراهی مخاطبان"],
  ["سنجش و یادگیری", "ثبت نتیجه، بازخورد و آموخته‌های قابل استفاده"],
];

const visionPillars = [
  [
    "برای هنرمند",
    "فرصتی معتبر برای خلق، رشد، همکاری و تبدیل توانایی هنری به تجربه و اثر اجتماعی.",
  ],
  [
    "برای جامعه",
    "مسائل واقعی از مسیر روایت و تجربه هنری دیده و شنیده شوند و زمینه گفت‌وگو و مشارکت بیشتر فراهم شود.",
  ],
  [
    "برای شرکا",
    "یک نقطه اتصال حرفه‌ای برای طراحی و اجرای پروژه‌های فرهنگی و اجتماعی روشن، شفاف و قابل ارائه شکل بگیرد.",
  ],
];

const values = [
  ["کرامت انسانی", "انسان نقطه شروع تصمیم‌ها و همکاری‌های خورشید است."],
  ["احترام به هنر و هنرمند", "خلاقیت، استقلال، شأن حرفه‌ای و حقوق هنرمند در همکاری‌ها محترم است."],
  ["اثرگذاری اجتماعی", "فعالیت‌ها باید به یک نیاز یا مسئله واقعی متصل و نتیجه آن تا حد امکان قابل مشاهده و مستندسازی باشد."],
  ["مشارکت و هم‌افزایی", "تغییر پایدار از اتصال ظرفیت‌های انسانی، تخصصی و اجتماعی شکل می‌گیرد."],
  ["حرفه‌ای‌گری و شفافیت", "اعتماد بر پایه ساختار روشن، رفتار حرفه‌ای، مسئولیت‌پذیری و پاسخ‌گویی ساخته می‌شود."],
  ["خلاقیت و نوآوری", "برای مسائل تازه، از ایده‌ها، تجربه‌ها و روش‌های تازه استفاده می‌کنیم."],
  ["پایداری مسئولانه", "رشد سازمانی و اقتصادی باید در خدمت پایداری مأموریت اجتماعی باشد."],
];

export default function MissionPage() {
  return (
    <SiteShell>
      <PageStructuredData path="/mission" />
      <main>
        <section className="relative min-h-[540px] md:min-h-[620px] overflow-hidden border-b border-white/10">
          <img
            src="/images/mission/mission-hero.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="container-site relative flex min-h-[540px] md:min-h-[620px] items-end py-10 md:py-24">
            <div className="max-w-4xl">
              <p className="eyebrow">مأموریت و چشم‌انداز</p>
              <h1 className="mt-4 max-w-4xl text-[34px] font-extrabold leading-[1.6] tracking-tight md:text-[54px]">
                هنر، زمانی اثرگذار است که به زندگی جامعه راه پیدا کند.
              </h1>
              <div className="mt-6 max-w-3xl">
                <ExpandableText
                  paragraphs={[
                    "مأموریت خورشید، پیوند دادن هنر، هنرمند و ظرفیت‌های تخصصی و اجتماعی برای ایجاد اثر واقعی در جامعه است؛ مسیری که در آن هنر فقط محصول نهایی نیست، بلکه می‌تواند به شناخت مسئله، روایت تجربه انسانی، شکل‌گیری گفت‌وگو و ایجاد فرصت برای مشارکت اجتماعی کمک کند.",
                    "خورشید این مأموریت را با تکیه بر شبکه انسانی خود، همکاری با سازمان‌ها و حامیان و استفاده از ظرفیت بازوهای اجرایی دنبال می‌کند؛ از حمایت و توانمندسازی هنرمندان تا طراحی و اجرای پروژه‌های فرهنگی و اجتماعی.",
                  ]}
                  more="چشم‌انداز این مسیر، شکل‌گیری شبکه‌ای معتبر و قابل اعتماد است که استعداد، دانش، منابع و فرصت را به یکدیگر متصل کند و امکان تبدیل ایده‌های فرهنگی و اجتماعی به پروژه‌های حرفه‌ای، تجربه‌های معنادار و اثر قابل مشاهده را افزایش دهد."
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container-site py-10 md:py-20">
          <section className="border-t border-white/8 pt-10 md:pt-20">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="eyebrow">مأموریت خورشید</p>
                <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">
                  پیوند هنر، هنرمند و جامعه برای خلق اثر واقعی
                </h2>
              </div>
              <ExpandableText
                paragraphs={[
                  "خورشید مفاخر برای آن شکل گرفته است که میان ظرفیت هنر و فرهنگ و نیازهای واقعی جامعه ارتباط ایجاد کند. این ارتباط از حمایت از هنرمندان و پیشکسوتان آغاز می‌شود، اما به آن محدود نمی‌ماند؛ هدف، ساختن مسیری است که در آن خلاقیت هنری، دانش تخصصی، منابع اجتماعی و توان اجرایی بتوانند کنار یکدیگر قرار بگیرند.",
                  "بنابراین خورشید خود را صرفاً تولیدکننده برنامه یا برگزارکننده رویداد تعریف نمی‌کند. نقش آن ایجاد ارتباط، طراحی مسیر، گردآوری ظرفیت‌ها و فراهم کردن بستر اجرای پروژه‌هایی است که برای هنرمند، جامعه و شریک همکاری ارزش روشن و قابل ارائه ایجاد کنند.",
                ]}
                more="این مأموریت در حوزه‌هایی مانند حمایت از هنرمندان، هنر و مسائل اجتماعی، آموزش و توسعه استعداد، تولید محتوای فرهنگی و اجتماعی، پژوهش و همکاری با سازمان‌ها و حامیان دنبال می‌شود. نقطه مشترک این فعالیت‌ها آن است که از یک نیاز یا فرصت واقعی آغاز شوند و به نتیجه‌ای قابل توضیح، مستندسازی و یادگیری منجر شوند."
              />
            </div>
          </section>

          <section className="mt-14 border-t border-white/8 pt-10 md:mt-24 md:pt-20">
            <div className="max-w-3xl">
              <p className="eyebrow">سه محور مأموریت</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[38px]">
                مأموریت خورشید در سه مسیر اصلی
              </h2>
            </div>
            <div className="mt-7 grid gap-3 md:mt-10 md:gap-4 lg:grid-cols-3">
              {missionAxes.map(({ title, text }, index) => (
                <article key={title} className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.025] p-5 md:p-7 transition hover:border-[#4A78B0]/30 hover:bg-white/[0.04]">
                  <span className="text-[12px] font-bold text-[#4A78B0]">۰{index + 1}</span>
                  <h3 className="mt-3 md:mt-5 text-[20px] md:text-[21px] font-bold leading-8">{title}</h3>
                  <p className="mt-4 text-[13px] leading-8 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="eyebrow">مأموریت در عمل</p>
                <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[38px]">
                  از مسئله تا اثر قابل مشاهده
                </h2>
                <p className="mt-5 max-w-md text-[13px] leading-8 text-[#4D5B77]">
                  پروژه‌های خورشید یک خط تولید ساده نیستند؛ یک چرخه یادگیری‌اند که از شناخت مسئله آغاز می‌شود و با سنجش نتیجه و ثبت تجربه ادامه پیدا می‌کند.
                </p>
              </div>

              <div className="relative">
                <div className="absolute right-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-[#4A78B0]/0 via-[#4A78B0]/35 to-[#4A78B0]/0 md:right-1/2 md:translate-x-1/2" />
                <div className="space-y-4">
                  {impactSteps.map(([title, text], index) => (
                    <div key={title} className="relative grid grid-cols-[40px_minmax(0,1fr)] md:grid-cols-[56px_1fr] items-start gap-3 md:gap-5 rounded-2xl border border-white/8 bg-white/[0.02] p-3 md:p-4">
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#4A78B0]/30 bg-[#0a0d11] text-[11px] font-bold text-[#4A78B0] md:h-12 md:w-12">
                        ۰{index + 1}
                      </div>
                      <div>
                        <h3 className="text-[16px] font-bold">{title}</h3>
                        <p className="mt-1 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-l from-[#4A78B0]/10 via-transparent to-transparent" />
              <div className="relative grid gap-6 md:gap-10 p-5 md:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="eyebrow">چشم‌انداز</p>
                  <h2 className="mt-3 text-[29px] font-extrabold leading-[1.6] md:text-[42px]">
                    شبکه‌ای معتبر که ظرفیت‌ها را برای خلق اثر به هم متصل می‌کند.
                  </h2>
                </div>
                <div>
                  <p className="text-[15px] leading-9 text-[#4D5B77]">
                    چشم‌انداز خورشید، شکل‌گیری یک شبکه فرهنگی و اجتماعی زنده و قابل اعتماد است؛ شبکه‌ای که در آن استعداد، دانش، منابع و فرصت به دلیل نبود ارتباط یا سازوکار اجرایی متوقف نشوند و بتوانند به پروژه، تجربه و اثر تبدیل شوند.
                  </p>
                  <p className="mt-5 text-[14px] leading-8 text-[#4D5B77]">
                    در این آینده، رشد خورشید فقط با تعداد پروژه‌ها یا مخاطبان سنجیده نمی‌شود؛ اعتبار همکاری‌ها، کیفیت شبکه، تداوم فعالیت و اثر واقعی بر هنرمند، جامعه و شرکا نیز بخشی از موفقیت آن است.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 grid gap-4 md:grid-cols-3">
              {visionPillars.map(([title, text]) => (
                <article key={title} className="border-t border-[#4A78B0]/25 pt-5">
                  <h3 className="text-[18px] font-bold">{title}</h3>
                  <p className="mt-3 text-[13px] leading-8 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
            <div className="max-w-3xl">
              <p className="eyebrow">اصول حرکت</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[38px]">
                ارزش‌هایی که کیفیت مسیر را تعیین می‌کنند
              </h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                ارزش‌ها برای خورشید شعارهای تزئینی نیستند؛ چارچوبی هستند برای اینکه تصمیم‌ها، همکاری‌ها و استفاده از منابع با مأموریت اجتماعی سازمان هم‌راستا بمانند.
              </p>
            </div>

            <div className="mt-7 md:mt-10 divide-y divide-white/8 border-y border-white/8">
              {values.map(([title, text], index) => (
                <div key={title} className="grid gap-2 md:gap-3 py-4 md:py-6 md:grid-cols-[70px_0.6fr_1.4fr] md:items-center">
                  <span className="text-[11px] font-bold text-[#4A78B0]">۰{index + 1}</span>
                  <h3 className="text-[17px] font-bold">{title}</h3>
                  <p className="text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 md:mt-24">
            <div className="relative overflow-hidden rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 px-5 py-8 md:px-12 md:py-12">
              <p className="eyebrow">از ایده تا اثر</p>
              <h2 className="mt-3 max-w-3xl text-[27px] font-extrabold leading-[1.7] md:text-[40px]">
                خورشید می‌خواهد میان هنر، انسان و جامعه ارتباطی ایجاد کند که در عمل دیده شود.
              </h2>
              <p className="mt-5 max-w-3xl text-[14px] leading-8 text-[#4D5B77]">
                توسعه شبکه، رسانه، پروژه و ظرفیت اجرایی زمانی ارزشمند است که امکان حمایت مؤثرتر از هنرمند، اجرای حرفه‌ای‌تر و ایجاد اثر اجتماعی روشن‌تر را فراهم کند.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/activity-areas" className="rounded-full border border-[#4A78B0]/40 bg-[#4A78B0]/10 px-5 py-3 text-[13px] font-bold text-[#f0bd58] transition hover:bg-[#4A78B0]/20">
                  حوزه‌های فعالیت
                </a>
                <a href="/participation#form" className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-[13px] font-bold text-[#dbe3ea] transition hover:bg-white/[0.07]">
                  همکاری با خورشید
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "/mission" },
  title: "مأموریت و چشم‌انداز",
  description:
    "مأموریت و چشم‌انداز سازمان مردم‌نهاد خورشید مفاخر؛ پیوند هنر، هنرمند و جامعه برای خلق اثر فرهنگی و اجتماعی.",
};
