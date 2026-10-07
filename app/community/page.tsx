import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { PageStructuredData } from "@/components/page-structured-data";

const groups = [
  [
    "هنرمندان و پیشکسوتان",
    "هنرمندان جوان، پیشکسوتان و صاحبان تجربه که در تولید اثر، آموزش، رویداد و پروژه‌های فرهنگی و اجتماعی مشارکت می‌کنند.",
  ],
  [
    "متخصصان و صاحبان تجربه",
    "متخصصان حوزه‌هایی مانند مدیریت، آموزش، پژوهش، رسانه، فناوری، حقوق و ارتباطات که دانش خود را به پروژه‌ها و نیازهای واقعی متصل می‌کنند.",
  ],
  [
    "همراهان و داوطلبان",
    "افرادی که بخشی از زمان، مهارت، ارتباطات یا توان اجرایی خود را در برنامه‌ها و فعالیت‌های فرهنگی و اجتماعی خورشید به کار می‌گیرند.",
  ],
  [
    "شرکا و حامیان",
    "شرکت‌ها، سازمان‌ها، برندها و افرادی که از طریق منابع، امکانات، تخصص یا شبکه ارتباطی در شکل‌گیری و اجرای پروژه‌ها همراه می‌شوند.",
  ],
];

const groupImages = [
  "/images/community/artists-veterans.jpg",
  "/images/community/experts-experienced.jpg",
  "/images/community/volunteers-companions.jpg",
  "/images/community/partners-sponsors.jpg",
];

export default function CommunityPage() {
  return (
    <>
      <PageStructuredData path="/community" />
    <SiteShell>
      <main>
        <section className="relative min-h-[560px] overflow-hidden border-b border-white/10 reveal md:min-h-[650px]">
          <Image src="/images/hero-community.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/5 via-[#FFFFFF]/10 to-[#FFFFFF]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/45 via-transparent to-[#FFFFFF]/5" />
          <div className="container-site relative z-10 flex min-h-[560px] items-center py-16 md:min-h-[650px] md:py-24">
            <div className="max-w-3xl">
              <p className="eyebrow">جامعه خورشید</p>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.55] tracking-tight md:text-[48px]">جایی که ظرفیت‌ها به هم متصل می‌شوند.</h1>
              <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[#e1e7ec] md:text-[17px]">
                جامعه خورشید شبکه‌ای از هنرمندان، متخصصان، پیشکسوتان، داوطلبان، حامیان و همراهانی است که هرکدام بخشی از ظرفیت فرهنگی، حرفه‌ای یا اجتماعی خود را در مسیر فعالیت‌های خورشید به کار می‌گیرند.
              </p>
              <p className="mt-3 max-w-3xl text-[15px] leading-8 text-[#e1e7ec] md:text-[17px]">
                هدف، جمع‌کردن افراد نیست؛ ایجاد ارتباط میان انسان‌ها، تخصص‌ها و فرصت‌هاست تا ظرفیت‌های مختلف به همکاری، پروژه و اثر قابل مشاهده متصل شوند.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/membership" className="btn-primary px-6 py-3 text-[13px]">عضویت در خورشید</a>
                <a href="/participation#form" className="btn-secondary px-6 py-3 text-[13px]">شروع مشارکت</a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="eyebrow">جامعه</p>
              <h2 className="mt-2 text-[27px] font-extrabold leading-[1.6] md:text-[36px]">جامعه‌ای فراتر از عضویت</h2>
            </div>
            <div className="max-w-4xl">
              <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                جامعه خورشید فقط فهرستی از اعضا نیست. این شبکه از ظرفیت‌های متفاوتی شکل می‌گیرد که بسته به نیاز هر برنامه می‌توانند در کنار یکدیگر قرار بگیرند؛ از ایده و تجربه هنری تا تخصص حرفه‌ای، توان اجرایی، ارتباطات و حمایت.
              </p>
              <p className="mt-3 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                هر فرد یا مجموعه می‌تواند متناسب با توان و علاقه خود در یک یا چند نقش حضور داشته باشد و این نقش در طول زمان تغییر کند. آنچه اهمیت دارد، ارتباط میان ظرفیت واقعی افراد و نیاز واقعی یک برنامه یا پروژه است.
              </p>
              <details className="mt-5 group">
                <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] transition hover:text-[#4A78B0]">
                  ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <div className="mt-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#4D5B77]">
                  این مدل به خورشید امکان می‌دهد برای هر پروژه، ظرفیت‌های مورد نیاز را از میان شبکه خود فعال کند و به افراد نیز فرصت می‌دهد متناسب با زمان، تخصص و تجربه خود در فعالیت‌های فرهنگی، هنری و اجتماعی حضور داشته باشند.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015] py-14 md:py-20 reveal">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow">شبکه انسانی</p>
              <h2 className="mt-2 text-[27px] font-extrabold leading-[1.6] md:text-[36px]">چه کسانی جامعه خورشید را می‌سازند؟</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                چهار گروه اصلی، بخش مهمی از ظرفیت انسانی و حرفه‌ای جامعه خورشید را شکل می‌دهند. مرز میان این نقش‌ها ثابت نیست و یک فرد یا مجموعه می‌تواند در چند مسیر با خورشید همراه شود.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {groups.map(([title, text], i) => (
                <article key={title} className="group relative flex min-h-[230px] cursor-default items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#FFFFFF] p-7 text-center transition-all duration-300 hover:border-[#4A78B0]/30">
                  <Image src={groupImages[i]} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-[#FFFFFF]/20 transition-all duration-300 group-hover:bg-[#FFFFFF]/60" />
                  <div className="relative z-10 w-full transition-all duration-300 group-hover:hidden">
                    <h3 className="text-[19px] font-bold text-white">{title}</h3>
                  </div>
                  <div className="relative z-10 hidden max-w-md text-center group-hover:block">
                    <h3 className="mb-3 text-[17px] font-bold text-white">{title}</h3>
                    <p className="text-[13px] leading-7 text-[#e5e9ed]">{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-10 border-t border-[#4A78B0]/20 pt-6 text-center text-[15px] font-semibold leading-8 text-[#4A78B0]">
              هدف، جمع‌کردن افراد نیست؛ ساختن ارتباطی است که به همکاری و اثر منجر شود.
            </p>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015] py-14 md:py-20">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="eyebrow">اگر هنرمند هستید</p>
                <h2 className="mt-2 text-[27px] font-extrabold leading-[1.6] md:text-[36px]">ظرفیت هنری شما می‌تواند به یک فرصت واقعی متصل شود.</h2>
              </div>
              <div className="max-w-4xl">
                <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                  خورشید هنرمندان را فقط به‌عنوان عضو یک شبکه نمی‌بیند؛ هدف، ایجاد مسیر برای دیده‌شدن توانمندی، مشارکت در پروژه‌های واقعی و اتصال هنر به مسائل فرهنگی و اجتماعی است.
                </p>
                <details className="mt-4 group">
                  <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] hover:text-[#4A78B0]">ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span></summary>
                  <p className="mt-3 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#4D5B77]">
                    بسته به تخصص و علاقه، امکان همکاری در تولید و انتشار اثر، پروژه‌های اجتماعی، آموزش و انتقال تجربه، باشگاه تخصصی، رویدادها و فرصت‌های همکاری با شبکه خورشید وجود دارد.
                  </p>
                </details>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["معرفی و شبکه‌سازی", "اتصال به جامعه هنرمندان، متخصصان و فرصت‌های همکاری."],
                ["مشارکت در پروژه‌های اجتماعی", "حضور در پروژه‌هایی که هنر را به مسائل واقعی جامعه متصل می‌کنند."],
                ["تولید و انتشار اثر", "همکاری در تولید، انتشار و روایت آثار و پروژه‌های فرهنگی."],
                ["آموزش و انتقال تجربه", "مشارکت در برنامه‌های آموزشی و انتقال دانش و تجربه."],
                ["باشگاه تخصصی", "حضور در باشگاه متناسب با حوزه فعالیت هنری شما."],
                ["فرصت‌های همکاری", "اتصال به تولیدات، رویدادها و پروژه‌هایی که به تخصص شما نیاز دارند."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-[#FFFFFF] p-6 min-h-[160px]">
                  <h3 className="text-[17px] font-extrabold text-white">{title}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
            <a href="/participation#form" className="btn-primary mt-8 inline-flex px-6 py-3 text-[13px]">ثبت درخواست همکاری هنری</a>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">مدل شبکه</p>
              <h2 className="mt-2 text-[27px] font-extrabold leading-[1.6] md:text-[36px]">یک پروژه، چند ظرفیت</h2>
            </div>
            <div className="max-w-4xl">
              <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                یک پروژه فرهنگی یا اجتماعی ممکن است هم‌زمان به ایده هنری، تخصص حرفه‌ای، توان اجرایی، رسانه، ارتباطات و حمایت نیاز داشته باشد. جامعه خورشید برای اتصال همین ظرفیت‌ها شکل گرفته است تا هر پروژه بتواند متناسب با هدف خود، شبکه مناسبش را فعال کند.
              </p>
              <p className="mt-3 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                این شبکه در کنار بازوهای اجرایی خورشید قرار می‌گیرد و ظرفیت انسانی مورد نیاز برای طراحی، تولید، اجرا و روایت پروژه را فراهم می‌کند.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {[
                  ["ایده و تخصص", "دانش، تجربه و نگاه خلاق برای تعریف مسئله و طراحی راهکار."],
                  ["همکاری و اجرا", "هنرمندان، متخصصان و داوطلبان برای تبدیل ایده به فعالیت و خروجی."],
                  ["ارتباط و حمایت", "شبکه ارتباطی، منابع و همراهی شرکا برای توسعه و استمرار پروژه."],
                ].map(([title, text]) => (
                  <article key={title} className="border-t border-[#4A78B0]/35 pt-4">
                    <h3 className="text-[16px] font-extrabold">{title}</h3>
                    <p className="mt-2 text-[12px] leading-7 text-[#4D5B77]">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 py-14 md:py-20 reveal">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow">از جامعه تا مشارکت</p>
                <h2 className="mt-2 text-[27px] font-extrabold leading-[1.6] md:text-[36px]">هر ارتباط، می‌تواند به یک نقش واقعی تبدیل شود.</h2>
              </div>
              <div>
                <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                  حضور در جامعه خورشید می‌تواند از عضویت آغاز شود، اما ارزش آن زمانی شکل می‌گیرد که فرد یا مجموعه در یک فعالیت، پروژه یا برنامه مشخص نقش پیدا کند.
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  {[
                    ["عضویت", "شروع ارتباط با جامعه و دسترسی به مسیرهای فعالیت و رشد.", "/membership"],
                    ["مشارکت در پروژه‌ها", "حضور در فعالیت‌های هنری، فرهنگی، آموزشی، رسانه‌ای و اجتماعی.", "/participation#form"],
                    ["همکاری تخصصی و شراکت", "اتصال تخصص، امکانات یا منابع به پروژه‌های مشخص خورشید.", "/participation#form"],
                  ].map(([title, text, href]) => (
                    <a key={title} href={href} className="group border-t border-white/10 pt-4 transition hover:border-[#4A78B0]/50">
                      <h3 className="text-[17px] font-extrabold transition group-hover:text-[#4A78B0]">{title}</h3>
                      <p className="mt-2 text-[12px] leading-7 text-[#4D5B77]">{text}</p>
                      <span className="mt-4 inline-block text-[12px] font-bold text-[#4A78B0]">ورود به مسیر ←</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-site pb-20 md:pb-28">
          <div className="rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 p-8 md:p-12">
            <p className="eyebrow">شروع همکاری</p>
            <h2 className="mt-2 text-[27px] font-extrabold leading-[1.6] md:text-[36px]">یک ظرفیت، وقتی به مسیر درست متصل شود، می‌تواند به اثر تبدیل شود.</h2>
            <p className="mt-4 max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
              اگر می‌خواهید به جامعه خورشید بپیوندید یا در یک پروژه و فعالیت مشخص مشارکت کنید، مسیر ورود بر اساس نوع همکاری و ظرفیت شما تعیین می‌شود.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/membership" className="btn-primary px-6 py-3 text-[13px]">عضویت در خورشید</a>
              <a href="/participation#form" className="btn-secondary px-6 py-3 text-[13px]">شروع همکاری و مشارکت</a>
              <a href="/member-club" className="btn-secondary px-6 py-3 text-[13px]">باشگاه اعضای خورشید</a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
      </>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "/community" },
  title: "جامعه خورشید",
  description: "جامعه هنرمندان، متخصصان، داوطلبان، حامیان و همراهان سازمان مردم‌نهاد خورشید مفاخر.",
};
