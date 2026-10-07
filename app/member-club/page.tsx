import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { SpecialtyClubsGrid } from "@/components/specialty-clubs-grid";
import { PageStructuredData } from "@/components/page-structured-data";

const benefits = [
  ["اعتبار حرفه‌ای", "ثبت سابقه مشارکت و امکان معرفی حرفه‌ای عضو در چارچوب فعالیت‌های خورشید.", "/images/member-club/credibility.jpg"],
  ["شبکه حرفه‌ای", "ارتباط با هنرمندان، متخصصان، فعالان اجتماعی و مجموعه‌های هم‌مسیر.", "/images/member-club/network.jpg"],
  ["رشد و یادگیری", "توسعه مهارت‌ها از مسیر آموزش، تجربه و تعامل با شبکه اعضا.", "/images/member-club/growth.jpg"],
  ["دیده‌شدن توانمندی‌ها", "فراهم‌شدن زمینه معرفی آثار، تخصص و توانمندی عضو در فرصت‌های مرتبط.", "/images/member-club/visibility.jpg"],
  ["اثرگذاری اجتماعی", "مشارکت در پروژه‌هایی که هنر و تخصص اعضا را به مسائل واقعی جامعه متصل می‌کنند.", "/images/member-club/impact.jpg"],
  ["فرصت‌های منتخب", "دسترسی به فرصت‌های همکاری، آموزش و مشارکت متناسب با برنامه‌ها و ظرفیت‌های موجود.", "/images/member-club/opportunity.jpg"],
  ["حمایت و رفاه اعضا", "امکان توسعه خدمات حمایتی مانند صندوق درمان، بیمه تکمیلی و خدمات سلامت، متناسب با ظرفیت‌های اجرایی و همکاری‌های سازمان.", "/images/member-club/support-benefits.jpg"],
] as const;

const clubs = [
  ["رسانه و تولید محتوا", "نویسندگی، تولید ویدئو، عکاسی، تدوین، روایت پروژه و توسعه محتوای رسانه‌ای.", "media", "/images/clubs/club-media.jpg"],
  ["سینما و تئاتر", "همکاری فعالان سینما و تئاتر در تولید، آموزش، گفت‌وگو و پروژه‌های فرهنگی و اجتماعی.", "cinema", "/images/clubs/club-cinema.jpg"],
  ["موسیقی", "اتصال خوانندگان، نوازندگان، آهنگسازان و دیگر فعالان موسیقی به برنامه‌ها و تولیدات مشترک.", "music", "/images/clubs/club-music.jpg"],
  ["ادبیات", "مشارکت نویسندگان، شاعران، مترجمان و علاقه‌مندان ادبیات در پروژه‌های فرهنگی و اجتماعی.", "art", "/images/clubs/club-literature.jpg"],
  ["هنرهای تجسمی و طراحی", "اتصال هنرمندان تجسمی، گرافیست‌ها، تصویرگران و طراحان برای خلق آثار و تولیدات خلاقانه.", "visual", "/images/clubs/club-visual2.jpg"],
  ["مسئولیت اجتماعی", "مشارکت در شناسایی مسائل، طراحی ایده و اجرای برنامه‌های مسئولیت اجتماعی.", "responsibility", "/images/clubs/club-social2.jpg"],
  ["آموزش", "مشارکت مدرسان، مربیان و پژوهشگران در کارگاه‌ها، انتقال تجربه و توسعه مهارت.", "education", "/images/clubs/club-education2.jpg"],
  ["توسعه و شبکه‌سازی", "اتصال اعضا، متخصصان، سازمان‌ها و فرصت‌های همکاری برای ساختن یک شبکه فعال.", "partnership", "/images/clubs/club-networking2.jpg"],
] as const;

const journey = [
  ["ورود", "تکمیل پروفایل و معرفی حوزه‌های علاقه و تخصص."],
  ["مشارکت", "حضور در برنامه‌ها، باشگاه‌های تخصصی و پروژه‌های مرتبط."],
  ["تجربه و سابقه", "ثبت فعالیت‌ها و شکل‌گیری سابقه مشارکت قابل اتکا."],
  ["مسئولیت", "پذیرش نقش‌های اجرایی متناسب با تجربه و توانمندی."],
  ["نقش‌آفرینی تخصصی", "حضور مؤثرتر در پروژه‌ها و توسعه نقش در شبکه باشگاه."],
] as const;

export default function MemberClubPage() {
  return (
    <>
      <PageStructuredData path="/member-club" />
    <SiteShell>
      <section className="site-grid border-b border-[#14213D]/10 reveal">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow">باشگاه اعضای خورشید</p>
          <h1 className="mt-4 max-w-4xl text-[34px] font-extrabold leading-[1.6] tracking-tight md:text-[50px]">
            مسیر رشد، مشارکت و فرصت
          </h1>
          <div className="mt-6 max-w-4xl space-y-4 text-[15px] leading-8 text-[#4D5B77] md:text-[17px]">
            <p>
              باشگاه اعضای خورشید، فضای فعال جامعه اعضاست؛ جایی برای ارتباط تخصصی، یادگیری، مشارکت در پروژه‌ها و شکل‌گیری فرصت‌های حرفه‌ای و اجتماعی.
            </p>
            <p>
              عضویت نقطه شروع است. مسیر هر عضو بر اساس تخصص، علاقه و میزان مشارکت او شکل می‌گیرد و با رشد تجربه و فعالیت، فرصت‌های بیشتری در اختیارش قرار می‌گیرد.
            </p>
            <details className="group">
              <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] transition hover:text-white">
                <span className="group-open:hidden">ادامه توضیحات ←</span>
                <span className="hidden group-open:inline">بستن توضیحات ↑</span>
              </summary>
              <div className="mt-4 space-y-4">
                <p>
                  باشگاه تلاش می‌کند ارتباط میان اعضا را از آشنایی و شبکه‌سازی فراتر ببرد و در صورت وجود ظرفیت، آن را به آموزش، تولید، رویداد، پروژه و همکاری تخصصی تبدیل کند.
                </p>
                <p>
                  فرصت‌ها بر اساس نیاز پروژه، برنامه‌های خورشید و ظرفیت شبکه معرفی می‌شوند و نوع مشارکت هر عضو متناسب با شرایط همان فرصت خواهد بود.
                </p>
              </div>
            </details>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/membership" className="btn-primary px-6 py-3 text-[13px]">شروع عضویت</a>
            <a href="#specialty-clubs" className="btn-secondary px-6 py-3 text-[13px]">باشگاه‌های تخصصی</a>
          </div>
        </div>
      </section>

      <section className="container-site py-14 md:py-20 reveal">
        <div className="grid gap-8">
          <div>
            <p className="eyebrow">باشگاه چگونه کار می‌کند؟</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.7] md:text-[36px]">
              از شناخت عضو تا شکل‌گیری فرصت
            </h2>
          </div>
          <div className="text-[14px] leading-8 text-[#4D5B77]">
            <p>
              باشگاه، چهار مسیر را به هم متصل می‌کند: شناخت و معرفی عضو، حضور در مسیرهای تخصصی، دسترسی به فرصت‌ها و پروژه‌ها و در نهایت رشد تجربه و مزایا. هدف، ساختن یک شبکه کاربردی است، نه صرفاً یک فهرست از اعضا.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ["۰۱", "پروفایل", "معرفی تخصص، تجربه و علایق عضو."],
                ["۰۲", "باشگاه تخصصی", "اتصال به حوزه‌های مشترک و افراد هم‌مسیر."],
                ["۰۳", "فرصت و پروژه", "معرفی همکاری‌ها و برنامه‌های متناسب با ظرفیت عضو."],
                ["۰۴", "رشد و مزایا", "گسترش تجربه، سابقه و فرصت‌های قابل دسترس."],
              ].map(([n, title, text]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-[#FFFFFF] p-5">
                  <span className="text-[11px] font-bold text-[#4A78B0]">{n}</span>
                  <h3 className="mt-3 text-[17px] font-extrabold text-white">{title}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.015] py-16 md:py-20 reveal">
        <div className="container-site">
          <p className="eyebrow">ارزش عضویت</p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.7] md:text-[36px]">
            عضویت چه ارزشی ایجاد می‌کند؟
          </h2>
          <div className="mt-5 max-w-4xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
            <p>
              ارزش عضویت زمانی معنا پیدا می‌کند که شبکه برای عضو ارتباط حرفه‌ای، مسیر رشد و فرصت مشارکت ایجاد کند. باشگاه این ارزش را در چند مسیر مکمل دنبال می‌کند؛ از اعتبار و معرفی حرفه‌ای تا یادگیری، دیده‌شدن، اثرگذاری اجتماعی و خدمات حمایتی.
            </p>
            <details className="group mt-4">
              <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] transition hover:text-white">
                <span className="group-open:hidden">ادامه توضیحات ←</span>
                <span className="hidden group-open:inline">بستن توضیحات ↑</span>
              </summary>
              <p className="mt-4">
                خدمات حمایتی نیز به‌صورت مرحله‌ای و بر اساس ظرفیت اجرایی، منابع و همکاری‌های قابل تحقق توسعه می‌یابند و شامل مزایایی هستند که امکان ارائه آن‌ها در چارچوب برنامه‌های خورشید فراهم شود.
              </p>
            </details>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([title, text, image], index) => (
              <article
                key={title}
                tabIndex={0}
                className={`${index === 6 ? "lg:col-start-2" : ""} group relative isolate aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#FFFFFF] outline-none transition-all duration-500 hover:border-[#4A78B0]/40 focus:border-[#4A78B0]/40`}
              >
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0" />
                <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0 group-focus:translate-y-3 group-focus:opacity-0">
                  <h3 className="text-[20px] font-extrabold leading-[1.6] text-white">{title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#080d15]/90 p-7 text-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100">
                  <div className="max-w-sm translate-y-4 transition-transform duration-500 group-hover:translate-y-0 group-focus:translate-y-0">
                    <h3 className="text-[20px] font-extrabold leading-[1.6] text-white">{title}</h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#d6dee6]">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-20 reveal">
        <div className="w-full">
          <p className="eyebrow">مسیر رشد مشارکت</p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.7] md:text-[36px]">
            مشارکت بیشتر، تجربه و مسئولیت بیشتر
          </h2>
          <p className="mt-5 max-w-5xl text-[14px] leading-8 text-[#4D5B77]">
            مسیر رشد برای همه اعضا یکسان نیست. افزایش سابقه مشارکت، کیفیت عملکرد و تجربه می‌تواند زمینه پذیرش مسئولیت‌های بیشتر، حضور در پروژه‌های تخصصی و دسترسی به فرصت‌های گسترده‌تر را فراهم کند. سابقه و امتیازهای تأییدشده مشارکت، ابزار شناخت و ارزیابی این مسیر هستند، نه صرفاً یک عدد برای رتبه‌بندی اعضا.
          </p>
          <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map(([title, text], index) => (
              <article key={title} className="relative min-h-[220px] w-full rounded-2xl border border-white/10 bg-[#FFFFFF] p-6">
                <span className="text-[11px] font-bold text-[#4A78B0]">۰{index + 1}</span>
                <h3 className="mt-4 text-[18px] font-extrabold leading-8 text-white">{title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="specialty-clubs" className="border-y border-white/8 bg-white/[0.015] py-16 md:py-20 reveal">
        <div className="container-site">
          <p className="eyebrow">باشگاه‌های تخصصی خورشید</p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
            هشت باشگاه تخصصی؛ مسیرهای موضوعی مشارکت
          </h2>
          <div className="mt-5 max-w-4xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
            <p>
              هشت باشگاه تخصصی، مسیرهای موضوعی مشارکت در باشگاه اعضای خورشید هستند. هر عضو می‌تواند بر اساس علاقه و تخصص خود در یک یا چند باشگاه حضور داشته باشد و از طریق آن به افراد، فرصت‌ها و پروژه‌های مرتبط متصل شود.
            </p>
            <details className="group mt-4">
              <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] transition hover:text-white">
                <span className="group-open:hidden">ادامه توضیحات ←</span>
                <span className="hidden group-open:inline">بستن توضیحات ↑</span>
              </summary>
              <p className="mt-4">
                بسیاری از پروژه‌های فرهنگی و اجتماعی میان‌رشته‌ای هستند؛ بنابراین امکان حضور در چند باشگاه می‌تواند به اتصال تخصص‌های مختلف برای شکل‌گیری ایده، تولید و اجرای پروژه کمک کند.
              </p>
            </details>
          </div>

          <SpecialtyClubsGrid
            clubs={clubs.map(([title, text, icon, image]) => ({
              title,
              text,
              icon: icon as any,
              image,
            }))}
          />
        </div>
      </section>

      <section className="container-site py-16 md:py-20 reveal">
        <div className="relative overflow-hidden rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 px-6 py-12 text-center md:px-12">
          <p className="eyebrow">شروع عضویت</p>
          <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">
            عضویت، نقطه شروع است؛ مشارکت، مسیر ساختن تجربه و فرصت.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-8 text-[#4D5B77]">
            با عضویت در جامعه خورشید، مسیر ارتباط با باشگاه‌های تخصصی، برنامه‌ها و فرصت‌های متناسب با حوزه فعالیت شما آغاز می‌شود.
          </p>
          <a href="/membership" className="btn-primary mt-7 inline-flex px-7 py-3 text-[13px]">
            شروع فرآیند عضویت
          </a>
        </div>
      </section>
    </SiteShell>
      </>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "/member-club" },
  title: "باشگاه اعضای خورشید",
  description: "باشگاه اعضای خورشید مفاخر؛ مسیر ارتباط، رشد، مشارکت و فرصت در شبکه اعضا و هشت باشگاه تخصصی.",
};
