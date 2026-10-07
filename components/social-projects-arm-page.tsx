import { SiteShell } from "./site-shell";

function ExpandableText({ visible, more }: { visible: string; more: string }) {
  return (
    <div className="max-w-4xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
      <p>{visible}</p>
      {more && (
        <details className="group mt-3">
          <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] transition hover:text-[#4A78B0]">
            ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span>
          </summary>
          <div className="mt-4 space-y-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#4D5B77]">
            {more.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </details>
      )}
    </div>
  );
}

const steps = [
  ["شناخت مسئله", "هر پروژه با یک مسئله، نیاز یا فرصت مشخص آغاز می‌شود؛ جامعه هدف، زمینه مسئله و نتیجه مورد انتظار ابتدا روشن می‌شوند."],
  ["طراحی راهکار", "راهکار بر اساس مسئله، مخاطب، منابع و شرایط پروژه طراحی می‌شود و می‌تواند ترکیبی از هنر، رسانه، آموزش، پژوهش، رویداد یا حمایت باشد."],
  ["ترکیب ظرفیت‌ها", "هنرمندان، متخصصان، سازمان‌ها، حامیان و بازوهای اجرایی متناسب با نیاز پروژه کنار هم قرار می‌گیرند."],
  ["اجرا و روایت", "پروژه از طراحی وارد اجرا می‌شود و در صورت نیاز، تولید محتوا، پوشش رسانه‌ای و مستندسازی نیز هم‌زمان پیش می‌رود."],
  ["سنجش و گزارش اثر", "فعالیت‌ها، خروجی‌ها و نتایج تا حد امکان مستند و ارزیابی می‌شوند تا اثر پروژه برای شرکا و حامیان قابل ارائه باشد."],
];

const areas = [
  "کودکان و نوجوانان", "خانواده و جامعه", "آسیب‌های اجتماعی",
  "سالمندان و پیشکسوتان", "توانمندسازی و اشتغال", "سلامت و کیفیت زندگی",
  "آموزش و مهارت", "فرهنگ و هنر", "محیط‌زیست",
  "دسترسی و عدالت اجتماعی", "مشارکت اجتماعی و سرمایه اجتماعی",
];

const projectStates = [
  ["پروژه‌های در حال طراحی", "ایده‌ها و نیازهایی که شناسایی شده‌اند و در مرحله بررسی، طراحی یا آماده‌سازی برای اجرا قرار دارند."],
  ["پروژه‌های در حال اجرا", "پروژه‌هایی که اجرای آن‌ها آغاز شده و فعالیت‌ها، خروجی‌ها و روایت آن‌ها در این بخش منتشر خواهد شد."],
  ["پروژه‌های اجراشده", "پروژه‌هایی که به پایان رسیده‌اند و پس از تکمیل مستندسازی و گزارش اثر، در این بخش آرشیو خواهند شد."],
];

export function SocialProjectsArmPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://khorshid-website.vercel.app/projects-social#webpage",
    url: "https://khorshid-website.vercel.app/projects-social",
    name: "پروژه‌های اجتماعی خورشید مفاخر",
    description: "طراحی و اجرای پروژه‌های فرهنگی و اجتماعی؛ از شناخت مسئله تا اجرا، روایت و سنجش اثر.",
    inLanguage: "fa-IR",
    isPartOf: { "@id": "https://khorshid-website.vercel.app/#website" },
    about: { "@id": "https://khorshid-website.vercel.app/#organization" },
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="relative overflow-hidden border-b border-white/8 reveal">
        <div className="absolute inset-0">
          <img src="/images/arms/social-projects-arm2.jpg" alt="تصویر بازوی توسعه پروژه‌های اجتماعی خورشید مفاخر" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/90 via-[#FFFFFF]/55 to-[#FFFFFF]/15" />
        <div className="relative min-h-[540px]">
          <div className="container-site flex min-h-[540px] items-end py-16 md:py-24">
            <div className="max-w-4xl">
              <p className="eyebrow">بازوی توسعه پروژه‌های اجتماعی</p>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.55] tracking-tight md:text-[54px]">
                توسعه پروژه‌های اجتماعی
              </h1>
              <ExpandableText
                visible="از شناسایی یک مسئله تا طراحی، اجرا، روایت و سنجش اثر؛ این بازو ظرفیت‌های فرهنگی، هنری، رسانه‌ای و تخصصی خورشید را برای تبدیل یک نیاز اجتماعی به پروژه‌ای قابل اجرا و قابل گزارش کنار هم قرار می‌دهد."
                more="پروژه‌های اجتماعی خورشید صرفاً یک کمپین یا فعالیت مقطعی نیستند. هر پروژه بر اساس مسئله، جامعه هدف، منابع، شرکا و نتیجه مورد انتظار طراحی می‌شود و می‌تواند از ترکیبی از هنر، آموزش، رسانه، پژوهش، رویداد، توانمندسازی و حمایت استفاده کند."
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-site py-14 md:py-20">
        <section className="grid gap-8 border-b border-white/8 pb-14 md:pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start reveal">
          <div>
            <p className="eyebrow">نقش این بازو</p>
            <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[40px]">مسئله اجتماعی را به پروژه قابل اجرا تبدیل می‌کنیم.</h2>
          </div>
          <ExpandableText
            visible="خورشید تلاش می‌کند میان نیازهای واقعی جامعه، ظرفیت هنرمندان و متخصصان، منابع سازمان‌ها و مسئولیت اجتماعی شرکت‌ها و نهادها ارتباط ایجاد کند و این ظرفیت‌ها را در قالب پروژه‌های منسجم به کار بگیرد."
            more="نقش بازو می‌تواند بسته به پروژه طراحی، هماهنگی، شبکه‌سازی، مدیریت اجرا یا بخشی از تولید و مستندسازی باشد. هدف این است که یک دغدغه کلی به برنامه‌ای روشن با هدف، جامعه هدف، فعالیت، خروجی و امکان ارزیابی تبدیل شود."
          />
        </section>

        <section className="pt-14 md:pt-20 reveal">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">مسیر اجرا</p>
            <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[40px]">از مسئله تا اثر، با یک مسیر روشن</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map(([title, text], index) => (
              <article key={title} className="border-t border-[#4A78B0]/40 pt-5 reveal">
                <span className="text-[12px] font-bold text-[#4A78B0]">مرحله {"۰۱۲۳۴۵۶۷۸۹"[index + 1]}</span>
                <h3 className="mt-2 text-[18px] font-extrabold leading-[1.7]">{title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-14 md:mt-24 md:pt-20 reveal">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">حوزه‌های پروژه</p>
              <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">مسئله‌ها و گروه‌هایی که می‌توانند نقطه آغاز پروژه باشند</h2>
            </div>
            <div>
              <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                این فهرست چارچوبی برای طراحی پروژه‌هاست، نه فهرستی بسته. هر پروژه بر اساس نیاز جامعه، ظرفیت شرکا و امکان اجرا تعریف می‌شود.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {areas.map((area) => (
                  <div key={area} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-[13px] leading-7 text-[#4D5B77]">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-14 md:mt-24 md:pt-20 reveal">
          <div className="max-w-3xl">
            <p className="eyebrow">آرشیو پروژه‌ها</p>
            <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[40px]">پروژه‌ها در سه مرحله دیده می‌شوند.</h2>
            <p className="mt-5 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
              این بخش محل نمایش پروژه‌های واقعی خورشید خواهد بود؛ نه نمونه‌های ساختگی. با شکل‌گیری پروژه‌ها، هر مورد بر اساس وضعیت خود در یکی از این سه مسیر قرار می‌گیرد.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projectStates.map(([title, text]) => (
              <article key={title} className="min-h-[220px] rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
                <p className="text-[12px] font-bold text-[#4A78B0]">آرشیو در حال تکمیل</p>
                <h3 className="mt-3 text-[21px] font-extrabold">{title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-white/8 pt-14 md:mt-24 md:pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start reveal">
          <div>
            <p className="eyebrow">ظرفیت اجرایی</p>
            <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">یک بازو، در اتصال با کل ظرفیت خورشید</h2>
          </div>
          <div>
            <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
              پروژه‌های اجتماعی می‌توانند از شبکه هنرمندان و متخصصان، رسانه و تولید محتوا، تلویزیون اینترنتی، توسعه آموزش، پژوهش و نوآوری و سایر ظرفیت‌های خورشید استفاده کنند. وجود شخصیت حقوقی و مجوز وزارت کشور نیز بستر همکاری رسمی با سازمان‌ها، شرکت‌ها و حامیان را فراهم می‌کند.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["هنر و فرهنگ", "رسانه", "آموزش", "شبکه تخصصی", "مشارکت و حمایت"].map((item) => (
                <span key={item} className="rounded-full border border-[#4A78B0]/25 px-4 py-2 text-[12px] text-[#4D5B77]">{item}</span>
              ))}
            </div>
            <a href="/arms" className="btn-primary mt-7 inline-flex px-5 py-3 text-[13px]">مشاهده همه بازوهای اجرایی</a>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 px-6 py-10 md:mt-24 md:px-12 md:py-12 reveal">
          <p className="eyebrow">شروع همکاری</p>
          <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">یک مسئله، یک ایده یا یک ظرفیت برای همکاری دارید؟</h2>
          <p className="mt-5 max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
            شرکت‌ها، سازمان‌ها، دانشگاه‌ها، گروه‌های تخصصی، حامیان و هنرمندان می‌توانند از مسیر مشارکت، موضوع یا ظرفیت خود را برای بررسی و طراحی همکاری مطرح کنند.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/participation#form" className="btn-primary px-6 py-3 text-[13px]">ثبت درخواست همکاری</a>
            <a href="/partnership" className="btn-primary px-6 py-3 text-[13px]">همکاری سازمانی و راهبردی</a>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
