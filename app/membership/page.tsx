export const metadata = {
  alternates: { canonical: "/membership" },
  title: "عضویت در جامعه خورشید",
  description: "درخواست عضویت در جامعه خورشید مفاخر و آغاز مسیر مشارکت در برنامه‌ها، باشگاه‌ها و پروژه‌های فرهنگی و اجتماعی.",
};

import ParticipationForm from "@/app/participation/participation-form";
import { SiteShell } from "@/components/site-shell";
import { PageStructuredData } from "@/components/page-structured-data";

const steps = [
  ["۰۱", "ثبت درخواست", "اطلاعات اولیه و حوزه فعالیت خود را ثبت می‌کنید."],
  ["۰۲", "بررسی اطلاعات", "درخواست بر اساس اطلاعات ارائه‌شده بررسی می‌شود."],
  ["۰۳", "آغاز ارتباط", "پس از پذیرش، مسیر ارتباط و مشارکت شما شکل می‌گیرد."],
  ["۰۴", "مشارکت در جامعه", "می‌توانید در برنامه‌ها، باشگاه‌ها و پروژه‌های مرتبط حضور پیدا کنید."],
];

export default function MembershipPage() {
  return (
    <SiteShell>
      <PageStructuredData path="/membership" />
      <main>
        <section className="relative min-h-[430px] overflow-hidden border-b border-white/10 md:min-h-[500px]">
          <img src="/images/membership/hero-membership.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/90 via-[#FFFFFF]/60 to-[#FFFFFF]/15" />
          <div className="relative container-site flex min-h-[430px] items-center py-14 md:min-h-[500px] md:py-18">
            <div className="max-w-2xl">
              <p className="eyebrow">عضویت در جامعه خورشید</p>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.55] tracking-tight md:text-[48px]">عضویت در جامعه خورشید، آغاز یک مسیر مشارکت است.</h1>
              <p className="mt-6 text-[15px] leading-8 text-[#d7e0e7] md:text-[17px]">
                اگر در حوزه هنر، فرهنگ، رسانه، آموزش، مسئولیت اجتماعی یا زمینه‌های تخصصی مرتبط فعالیت می‌کنید، می‌توانید درخواست عضویت خود را ثبت کنید. پس از بررسی اطلاعات، مسیر ارتباط و مشارکت شما با توجه به زمینه فعالیت و علاقه‌مندی‌هایتان شکل می‌گیرد.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#membership-form" className="btn-primary px-6 py-3 text-[13px]">درخواست عضویت</a>
                <a href="/community" className="btn-secondary px-6 py-3 text-[13px]">آشنایی با جامعه خورشید</a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-site py-14 md:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow">بعد از عضویت چه چیزی تغییر می‌کند؟</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">عضویت، ورود به یک شبکه برای ارتباط، فرصت و مشارکت است.</h2>
            <p className="mt-5 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
              عضویت به شما امکان می‌دهد توانمندی خود را در جامعه خورشید معرفی کنید، در باشگاه تخصصی مرتبط حضور داشته باشید و متناسب با تخصص و علاقه‌مندی خود به برنامه‌ها، آموزش‌ها و پروژه‌های واقعی متصل شوید.
            </p>
            <details className="mt-4 group">
              <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] hover:text-[#4A78B0]">ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span></summary>
              <p className="mt-3 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#4D5B77]">
                در ادامه مسیر، سابقه مشارکت شما در فعالیت‌های خورشید شکل می‌گیرد و می‌توانید در تولید، رویداد، آموزش، شبکه‌سازی و همکاری‌های تخصصی نقش بگیرید. برخی برنامه‌های حمایتی اعضا نیز متناسب با سیاست‌ها و ظرفیت‌های خورشید ارائه می‌شوند.
              </p>
            </details>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["معرفی توانمندی", "معرفی تخصص، آثار و ظرفیت‌های حرفه‌ای شما در شبکه خورشید."],
              ["باشگاه تخصصی", "حضور در باشگاه متناسب با حوزه فعالیت و علاقه‌مندی شما."],
              ["فرصت مشارکت در پروژه‌ها", "امکان حضور در پروژه‌های فرهنگی، هنری، رسانه‌ای و اجتماعی."],
              ["آموزش و انتقال تجربه", "دسترسی به برنامه‌های آموزشی و فرصت‌های یادگیری و انتقال تجربه."],
              ["شبکه‌سازی تخصصی", "ارتباط با هنرمندان، متخصصان، سازمان‌ها و دیگر اعضای جامعه خورشید."],
              ["سابقه و حمایت", "ثبت سابقه مشارکت و دسترسی به برنامه‌های حمایتی اعضا در چارچوب ظرفیت‌های خورشید."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#FFFFFF] p-6 min-h-[165px]">
                <h3 className="text-[17px] font-extrabold leading-8 text-white">{title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015] py-14 md:py-20">
          <div className="container-site">
            <p className="eyebrow">فرآیند عضویت</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">چهار مرحله برای آغاز عضویت</h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([number, title, text]) => (
                <article key={number} className="rounded-2xl border border-white/10 bg-[#FFFFFF] p-6 min-h-[185px]">
                  <span className="text-[11px] font-bold text-[#4A78B0]">{number}</span>
                  <h3 className="mt-4 text-[18px] font-extrabold leading-8 text-white">{title}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="membership-form" className="border-y border-white/8 bg-white/[0.015] scroll-mt-24 py-14 md:py-20">
          <div className="container-site">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">درخواست عضویت</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">فرم درخواست عضویت</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                اطلاعات اولیه خود را ثبت کنید تا درخواست عضویت بررسی و مسیر ارتباط شما با جامعه خورشید مشخص شود.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-5xl">
              <ParticipationForm initialRequestType="membership" />
            </div>
          </div>
        </section>

        <section className="container-site pb-20 md:pb-28">
          <div className="rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 p-8 md:p-12">
            <p className="eyebrow">بعد از عضویت</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">عضویت پایان مسیر نیست.</h2>
            <p className="mt-4 max-w-3xl text-[14px] leading-8 text-[#4D5B77]">
              پس از ورود به جامعه، می‌توانید بر اساس تخصص و علاقه خود در باشگاه‌های تخصصی، برنامه‌ها و پروژه‌های خورشید مشارکت کنید و مسیر رشد و فرصت‌های خود را شکل دهید.
            </p>
            <a href="/member-club" className="btn-primary mt-7 inline-flex px-6 py-3 text-[13px]">آشنایی با باشگاه اعضای خورشید</a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
