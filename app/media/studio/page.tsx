import { ExpandableIntro } from "@/components/expandable-intro";
import { PageStructuredData } from "@/components/page-structured-data";
import { SiteShell } from "@/components/site-shell";

export const metadata = {
  alternates: { canonical: "/media/studio" },
  title: "استودیو تولید خورشید",
  description:
    "استودیو تولید خورشید؛ فضای حرفه‌ای تولید و ضبط برنامه‌های تصویری، گفت‌وگو، مستند و محتوای فرهنگی و اجتماعی.",
};

const capabilities = [
  {
    title: "برنامه‌های تصویری",
    text: "تولید و ضبط برنامه‌های فرهنگی، هنری و اجتماعی با طراحی متناسب با ایده، قالب و مخاطب.",
  },
  {
    title: "گفت‌وگو و مصاحبه",
    text: "ضبط گفت‌وگو با هنرمندان، متخصصان، مفاخر و چهره‌های اثرگذار برای انتشار در مجموعه‌های رسانه‌ای خورشید.",
  },
  {
    title: "مستند و روایت",
    text: "ثبت و روایت پروژه‌ها، رویدادها و تجربه‌های فرهنگی و اجتماعی؛ از تولید محتوای کوتاه تا مجموعه‌های تصویری.",
  },
  {
    title: "تولید سفارشی",
    text: "اجرای تولیدات مشترک و سفارشی برای سازمان‌ها، برندها، هنرمندان و مجموعه‌های فرهنگی و اجتماعی.",
  },
];

export default function StudioPage() {
  return (
    <>
      <PageStructuredData path="/media/studio" />
      <SiteShell>
        <section className="relative min-h-[620px] overflow-hidden border-b border-white/10 md:min-h-[760px]">
          <div className="absolute inset-0">
            <img
              src="/images/arms/media/media-studio-legacy.jpg"
              alt="استودیو تولید خورشید"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/90 via-[#FFFFFF]/55 to-[#FFFFFF]/20" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#FFFFFF] to-transparent" />
          </div>

          <div className="container-site relative flex min-h-[620px] items-end py-16 md:min-h-[760px] md:py-24">
            <div className="max-w-4xl">
              <p className="eyebrow">رسانه و تولید محتوا</p>
              <h1 className="mt-4 max-w-3xl text-[38px] font-extrabold leading-[1.5] tracking-tight md:text-[58px]">
                استودیو تولید خورشید
              </h1>
              <ExpandableIntro
                text={`استودیو تولید خورشید، فضای تولید و ضبط برنامه‌های تصویری در بازوی رسانه خورشید مفاخر است؛ ظرفیتی برای شکل‌دادن به گفت‌وگوها، روایت‌ها و تولیدات تصویری حرفه‌ای که می‌توانند به مخاطب و اثرگذاری واقعی برسند.

این ظرفیت برای تولید برنامه‌های فرهنگی، هنری و اجتماعی، گفت‌وگو با چهره‌ها و متخصصان، روایت پروژه‌ها و تولید محتوای تصویری برای خورشید و مجموعه‌های همکار به کار گرفته می‌شود.`}
              />
              <a href="/participation#form" className="btn-primary mt-8 inline-flex px-6 py-3 text-[13px]">
                پیشنهاد یک تولید یا همکاری
              </a>
            </div>
          </div>
        </section>

        <div className="container-site py-14 md:py-20">
          <section className="reveal">
            <p className="eyebrow">آنچه تولید می‌کنیم</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[38px]">
              روایت‌هایی که باید دیده شوند
            </h2>
            <p className="mt-3 max-w-3xl text-[14px] leading-8 text-[#4D5B77]">
              استودیو در خدمت ایده و پروژه است؛ از یک گفت‌وگوی متمرکز تا یک مجموعه تصویری کامل، با همراهی تیم رسانه و ظرفیت تخصصی شبکه خورشید.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {capabilities.map((item) => (
                <article key={item.title} className="glass p-6 md:p-7">
                  <h3 className="text-[18px] font-extrabold">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-8 text-[#4D5B77]">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
            <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
              <div>
                <p className="eyebrow">همکاری و پروژه</p>
                <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                  ایده‌تان را به تصویر تبدیل کنیم
                </h2>
              </div>
              <div>
                <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                  استودیو برای تولیدات خود خورشید و پروژه‌های مشترک و سفارشی در دسترس است؛ از ضبط یک گفت‌وگوی تخصصی تا تولید مجموعه‌های تصویری، محتوای سازمانی و روایت پروژه‌های فرهنگی و اجتماعی.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["برنامه تصویری", "گفت‌وگو و مصاحبه", "مستند و روایت", "تولید محتوای سازمانی", "پروژه‌های فرهنگی و اجتماعی"].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] text-[#4D5B77]">
                      {item}
                    </span>
                  ))}
                </div>
                <a href="/participation#form" className="btn-primary mt-7 inline-flex px-6 py-3 text-[13px]">
                  ثبت پیشنهاد همکاری
                </a>
              </div>
            </div>
          </section>
        </div>
      </SiteShell>
    </>
  );
}
