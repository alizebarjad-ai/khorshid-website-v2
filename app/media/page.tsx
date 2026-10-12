import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata = {
  alternates: { canonical: "/media" },
  title: "رسانه و تولید محتوا",
  description: "رسانه خورشید مفاخر؛ تولید و روایت محتوای فرهنگی، هنری و اجتماعی در قالب ویدئو، گفت‌وگو، گزارش و تصویر.",
};

const formats = [
  {
    title: "ویدئو",
    text: "گفت‌وگو، گزارش، روایت پروژه و سایر تولیدات ویدئویی خورشید.",
  },
  {
    title: "گفت‌وگو",
    text: "گفت‌وگو با هنرمندان، متخصصان و چهره‌های اثرگذار فرهنگی و اجتماعی.",
  },
  {
    title: "گزارش و روایت",
    text: "روایت تصویری رویدادها، فعالیت‌ها و پروژه‌هایی که خورشید در آن‌ها نقش دارد.",
  },
  {
    title: "تصویر",
    text: "آرشیو عکس‌ها و قاب‌های منتخب از فعالیت‌ها، برنامه‌ها و پروژه‌های خورشید.",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageStructuredData path="/media" />
    <SiteShell>
      <section className="relative min-h-[560px] overflow-hidden border-b border-white/10 md:min-h-[680px]">
        <div className="absolute inset-0">
          <img
            src="/images/arms/media-arm2.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/90 via-[#FFFFFF]/45 to-[#FFFFFF]/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FFFFFF] to-transparent" />
        </div>

        <div className="container-site relative flex min-h-[560px] items-end py-16 md:min-h-[680px] md:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow">رسانه و تولید محتوا</p>
            <h1 className="mt-4 max-w-3xl text-[38px] font-extrabold leading-[1.5] tracking-tight md:text-[58px]">
              روایت آنچه خورشید می‌سازد.
            </h1>
            <p className="mt-5 max-w-2xl text-[14px] leading-8 text-[#d2dbe2] md:text-[16px]">
              رسانه خورشید، فعالیت‌ها، پروژه‌ها، هنرمندان و روایت‌های فرهنگی و
              اجتماعی را در قالب ویدئو، تصویر، گزارش و محتوای دیجیتال تولید و
              منتشر می‌کند.
            </p>
            <a
              href="#productions"
              className="btn-primary mt-8 inline-flex px-6 py-3 text-[13px]"
            >
              مشاهده تولیدات
            </a>
          </div>
        </div>
      </section>

      <div className="container-site py-14 md:py-20">
        <section id="productions" className="scroll-mt-28 reveal">
          <p className="eyebrow">ویترین رسانه</p>
          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-[28px] font-extrabold leading-[1.6] md:text-[38px]">
                تولیدات منتخب
              </h2>
              <p className="mt-3 max-w-2xl text-[14px] leading-8 text-[#4D5B77]">
                این بخش به‌تدریج با ویدئوها، گزارش‌های تصویری، گفت‌وگوها و
                تصاویر تولیدشده توسط رسانه خورشید تکمیل می‌شود.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#FFFFFF]/55 px-6 py-10 text-center md:px-10 md:py-14">
            <p className="text-[16px] font-bold text-[#4A78B0]">
              آرشیو تولیدات در حال تکمیل است
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-8 text-[#4D5B77]">
              تولیدات واقعی خورشید در همین صفحه منتشر خواهند شد؛ بدون ساختن
              محتوای نمایشی یا استفاده از تصاویر غیرمرتبط صرفاً برای پر کردن
              صفحه.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">زیرساخت تولید</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                استودیو تولید خورشید
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                استودیو تولید خورشید، فضای عملیاتی بازوی رسانه برای ضبط و تولید برنامه‌های تصویری، گفت‌وگو، مستند و محتوای فرهنگی و اجتماعی است. این ظرفیت کمک می‌کند ایده‌ها و روایت‌های خورشید در یک محیط تولید مشخص به خروجی حرفه‌ای تبدیل شوند.
              </p>
              <Link
                href="/media/studio"
                className="mt-5 inline-flex text-[13px] font-bold text-[#4A78B0] transition hover:text-white"
              >
                معرفی استودیو تولید خورشید <span className="mr-2">←</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
          <p className="eyebrow">قالب‌های تولید</p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
            رسانه خورشید چه تولید می‌کند؟
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {formats.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/8 bg-[#FFFFFF]/45 p-6 md:p-7"
              >
                <h3 className="text-[18px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-8 text-[#4D5B77]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">روایت پروژه‌ها</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                پروژه فقط اجرا نمی‌شود؛ روایت هم می‌شود.
              </h2>
            </div>
            <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
              رسانه خورشید می‌تواند مسیر شکل‌گیری و اجرای پروژه‌های فرهنگی،
              هنری و مسئولیت اجتماعی را ثبت و روایت کند؛ از معرفی مسئله و
              مشارکت‌کنندگان تا ثبت اجرا، خروجی و نتیجه. این روایت‌ها به‌مرور
              در کنار هر پروژه و فعالیت منتشر خواهند شد.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
          <p className="eyebrow">قاب‌های خورشید</p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
            آرشیو تصویری
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-8 text-[#4D5B77]">
            تصاویر منتخب فعالیت‌ها، رویدادها، پروژه‌ها و همراهان خورشید در این
            بخش گردآوری می‌شوند.
          </p>
          <div className="mt-8 rounded-2xl border border-white/8 bg-[#FFFFFF]/35 px-6 py-10 text-center md:px-10 md:py-14">
            <p className="text-[14px] font-bold text-white">
              گالری تصویری به‌زودی با آرشیو واقعی خورشید تکمیل می‌شود.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">آخرین روایت‌ها</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                خبر، گزارش و روایت
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77]">
                خبرها و روایت‌های منتشرشده از فعالیت‌های خورشید در صفحه اخبار
                دنبال می‌شوند. اینجا قرار نیست نسخه دوم صفحه اخبار بسازیم.
              </p>
              <Link
                href="/news"
                className="mt-5 inline-flex text-[13px] font-bold text-[#4A78B0] transition hover:text-white"
              >
                مشاهده اخبار و روایت‌ها <span className="mr-2">←</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="eyebrow">تلویزیون اینترنتی</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                بخشی از تولیدات، برنامه می‌شوند.
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77]">
                بخشی از تولیدات ویدئویی خورشید، متناسب با قالب و موضوع، در
                تلویزیون اینترنتی منتشر خواهد شد. رسانه مسئول تولید و روایت
                است و تلویزیون اینترنتی مسیر انتشار برنامه‌ها و مجموعه‌های
                تصویری را تکمیل می‌کند.
              </p>
              <Link
                href="/tv"
                className="mt-5 inline-flex text-[13px] font-bold text-[#4A78B0] transition hover:text-white"
              >
                مشاهده تلویزیون اینترنتی <span className="mr-2">←</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">ظرفیت اجرایی رسانه</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                رسانه برای پروژه‌ها
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77]">
                رسانه خورشید علاوه بر روایت فعالیت‌های خود، ظرفیت تولید و
                مستندسازی پروژه‌های فرهنگی، هنری و مسئولیت اجتماعی را نیز در
                اختیار همکاری‌های سازمانی و پروژه‌ای قرار می‌دهد.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["تولید ویدئو", "پوشش و روایت", "تولید محتوای دیجیتال"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] text-[#4D5B77]"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
              <Link
                href="/participation#form"
                className="mt-6 inline-flex text-[13px] font-bold text-[#4A78B0] transition hover:text-white"
              >
                شروع یک همکاری رسانه‌ای <span className="mr-2">←</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-14 md:mt-28 md:pt-20 reveal">
          <div className="rounded-2xl border border-[#4A78B0]/20 bg-[#FFFFFF]/45 p-7 md:p-10">
            <p className="eyebrow">شروع یک روایت</p>
            <h2 className="mt-2 text-[26px] font-extrabold leading-[1.7] md:text-[34px]">
              یک پروژه، ایده یا فعالیت برای روایت دارید؟
            </h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-8 text-[#4D5B77]">
              اطلاعات اولیه را ثبت کنید تا موضوع بررسی و درباره مدل مناسب
              تولید، پوشش یا مستندسازی با شما هماهنگ شود.
            </p>
            <Link
              href="/participation#form"
              className="btn-primary mt-6 inline-flex px-6 py-3 text-[13px]"
            >
              ثبت درخواست
            </Link>
          </div>
        </section>
      </div>
      </SiteShell>
    </>
  );
}
