import { SiteShell } from "./site-shell";

function Arrow() {
  return <span aria-hidden="true">←</span>;
}

function ExpandableText({
  paragraphs,
  more,
}: {
  paragraphs: string[];
  more: string;
}) {
  return (
    <div className="space-y-4 text-[14px] leading-8 text-[#4D5B77]">
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

const arms = [
  ["رسانه", "تولید، توسعه و روایت محتوای فرهنگی، هنری و اجتماعی و ایجاد ظرفیت ارتباطی برای پروژه‌ها.", "/media", "/images/arms/media-arm2.jpg"],
  ["تلویزیون اینترنتی", "توسعه و انتشار محتوای تصویری و ایجاد بستر رسانه‌ای برای تولیدات و برنامه‌های اکوسیستم.", "/tv", "/images/arms/tv-arm2.jpg"],
  ["توسعه پروژه‌های اجتماعی", "طراحی، مشاوره و اجرای برنامه‌ها و پروژه‌های فرهنگی و مسئولیت اجتماعی برای سازمان‌ها و شرکت‌ها.", "/projects-social", "/images/arms/social-projects-arm2.jpg"],
  ["توسعه آموزش، پژوهش و نوآوری", "آموزش، کشف استعداد، توسعه مهارت و ایجاد مسیرهای رشد برای سرمایه انسانی هنر و فرهنگ.", "/education", "/images/arms/education-arm2.jpg"],
];

export function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://khorshid-website.vercel.app/about#webpage",
    url: "https://khorshid-website.vercel.app/about",
    name: "درباره خورشید مفاخر",
    description: "آشنایی با سازمان مردم‌نهاد خورشید مفاخر، مأموریت، ساختار، بازوهای اجرایی و جایگاه حقوقی آن.",
    inLanguage: "fa-IR",
    isPartOf: { "@id": "https://khorshid-website.vercel.app/#website" },
    about: { "@id": "https://khorshid-website.vercel.app/#organization" },
    mainEntity: { "@id": "https://khorshid-website.vercel.app/#organization" },
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="relative min-h-[560px] overflow-hidden border-b border-white/10 md:min-h-[650px]">
        <div className="absolute inset-0">
          <img src="/images/about/about-hero3.jpg" alt="تصویر اصلی درباره سازمان مردم‌نهاد خورشید مفاخر" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/65 via-[#FFFFFF]/35 to-[#FFFFFF]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/70 via-transparent to-transparent" />
        </div>
        <div className="container-site relative z-10 flex min-h-[560px] items-center md:min-h-[650px]">
          <div className="ml-auto w-full max-w-3xl py-20 text-right md:py-24">
            <p className="eyebrow">درباره خورشید</p>
            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.6] tracking-tight md:text-[52px]">
              هنر، جامعه و یک مسیر برای اثرگذاری
            </h1>
            <div className="mt-6 max-w-3xl text-[15px] leading-8 text-[#d5dce2] md:text-[17px]">
              <p>
                سازمان مردم‌نهاد خورشید مفاخر یک سازمان مردم‌نهاد، غیرانتفاعی، غیرسیاسی و داوطلبانه است که برای ایجاد پیوند میان ظرفیت‌های هنر و فرهنگ، سرمایه انسانی، منابع و فرصت‌های همکاری شکل گرفته است. خورشید تلاش می‌کند این ظرفیت‌ها را در مسیرهایی حرفه‌ای، مشارکتی و قابل اجرا به پروژه‌ها و اقدامات اثرگذار تبدیل کند.
              </p>
              <p className="mt-3">
                خورشید در نقطه اتصال هنرمندان و مفاخر، متخصصان و نیروهای خلاق، اعضا و داوطلبان، حامیان و خیرین، شرکت‌ها و سازمان‌ها و مجموعه‌های فرهنگی و اجتماعی فعالیت می‌کند؛ با هدف آنکه حمایت از هنرمندان، تولید و روایت فرهنگی، آموزش و توسعه سرمایه انسانی و مواجهه با مسائل اجتماعی بتوانند در یک ساختار منسجم به یکدیگر متصل شوند.
              </p>
              <details className="group mt-4">
                <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0]">
                  ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <div className="mt-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#b8c3cc]">
                  خورشید صرفاً یک برگزارکننده رویداد یا یک مجموعه حمایتی نیست؛ بلکه تلاش می‌کند نقش یک سازمان راهبر را ایفا کند که مسئله را شناسایی، ظرفیت‌ها را گردآوری، مسیر همکاری را طراحی و با استفاده از شبکه تخصصی و بازوهای اجرایی، امکان تبدیل ایده به پروژه و پروژه به اثر را فراهم می‌کند.
                </div>
              </details>
            </div>
            <div className="mt-8 flex flex-wrap justify-start gap-3">
              <a href="/mission/about" className="btn-primary px-6 py-3 text-[13px]">مأموریت و چشم‌انداز</a>
              <a href="/areas-focus/about" className="btn-secondary px-6 py-3 text-[13px]">حوزه‌های فعالیت</a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-site py-14 md:py-20">
        <section aria-label="چرا خورشید شکل گرفت" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img src="/images/about/about-origin.jpg" alt="روایت شکل‌گیری خورشید و پیوند هنر با مسائل اجتماعی" className="h-[320px] w-full object-cover md:h-[390px]" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">چرا خورشید شکل گرفت؟</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
              از یک دغدغه انسانی تا یک ساختار اجتماعی
            </h2>
            <div className="mt-6">
              <ExpandableText
                paragraphs={[
                  "شکل‌گیری خورشید از مشاهده دو نیاز به‌هم‌پیوسته آغاز شد. از یک سو، بسیاری از هنرمندان، پیشکسوتان و فعالان فرهنگی پس از سال‌ها فعالیت حرفه‌ای با چالش‌هایی در زمینه معیشت، درمان، بیمه، فرصت‌های شغلی و منزلت اجتماعی روبه‌رو هستند و حمایت از آنها نمی‌تواند صرفاً به کمک‌های مقطعی محدود شود. از سوی دیگر، جامعه با مسائل و آسیب‌هایی روبه‌روست که برای مواجهه با آنها علاوه بر منابع مالی و اجرایی، به زبان هنر، خلاقیت، روایت و مشارکت اجتماعی نیاز دارد.",
                  "از همین نقطه، ایده خورشید شکل گرفت: حمایت از هنرمند و استفاده از ظرفیت هنر برای اثرگذاری اجتماعی می‌توانند دو مسیر جداگانه نباشند. هنر می‌تواند هم موضوع حمایت باشد و هم ابزاری برای روایت مسائل، ایجاد گفت‌وگو، افزایش آگاهی، آموزش و شکل‌دادن به تجربه‌های اجتماعی تازه.",
                ]}
                more="خورشید تلاش می‌کند این نگاه را از سطح ایده به یک مدل عملیاتی تبدیل کند؛ مدلی که در آن حمایت، آموزش، تولید، رسانه، مسئولیت اجتماعی و همکاری سازمانی در صورت نیاز یک پروژه، در کنار یکدیگر قرار می‌گیرند و به جای اقدامات پراکنده، امکان شکل‌گیری برنامه‌ها و پروژه‌های هدفمند و قابل ارزیابی فراهم می‌شود."
              />
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow">مدل فعالیت</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                از مسئله و ایده تا اجرا و اثرگذاری
              </h2>
            </div>
            <ExpandableText
              paragraphs={[
                "خورشید تلاش می‌کند هر فعالیت را از یک نیاز، مسئله یا فرصت واقعی آغاز کند. پس از شناخت مسئله، ظرفیت‌های موردنیاز شامل تخصص، نیروی انسانی، منابع، رسانه، شبکه ارتباطی و توان اجرایی شناسایی و متناسب با پروژه گردآوری می‌شوند. سپس راهکار و مدل همکاری طراحی شده و پروژه از طریق ساختار سازمان، شبکه تخصصی و در صورت نیاز بازوهای اجرایی دنبال می‌شود.",
                "شناسایی مسئله ← طراحی راهکار ← گردآوری ظرفیت‌ها ← تأمین منابع ← اجرا و تولید ← ارزیابی و روایت اثر. این مدل به خورشید کمک می‌کند میان مأموریت اجتماعی و اجرای حرفه‌ای پروژه‌ها فاصله ایجاد نشود. هدف، صرفاً انجام یک فعالیت نیست؛ بلکه ایجاد خروجی مشخص، امکان سنجش نتیجه و ساختن تجربه‌ای است که در صورت موفقیت قابلیت توسعه داشته باشد.",
              ]}
              more="در پروژه‌های مشارکتی، نقش هر طرف نیز تا حد امکان از ابتدا مشخص می‌شود؛ از نقش سازمان و بازوهای اجرایی گرفته تا حامیان، متخصصان، هنرمندان و سایر شرکا. این شفافیت، امکان مدیریت بهتر منابع، پاسخ‌گویی و ارائه گزارش روشن از روند و نتایج پروژه را فراهم می‌کند."
            />
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-3xl border border-white/10">
              <img src="/images/about/about-ecosystem.jpg" alt="اکوسیستم اجرایی و تخصصی خورشید" className="h-[320px] w-full object-cover md:h-[390px]" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow">جایگاه خورشید</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
                سازمان مردم‌نهاد در مرکز؛ ظرفیت‌های تخصصی در خدمت اجرا
              </h2>
              <div className="mt-6">
                <ExpandableText
                  paragraphs={[
                    "خورشید به‌عنوان سازمان مردم‌نهاد، صاحب مأموریت اجتماعی و جایگاه نهادی این ساختار است. جامعه خورشید شامل اعضا، هنرمندان، مفاخر، متخصصان، داوطلبان، حامیان و شرکای اجتماعی است و بازوهای تخصصی و اجرایی، ظرفیت‌های موردنیاز برای تبدیل بخشی از ایده‌ها و مأموریت‌ها به برنامه و پروژه را فراهم می‌کنند.",
                    "در این ساختار، فعالیت‌های اجرایی، رسانه‌ای، آموزشی و پروژه‌ای هدفی مستقل از مأموریت اجتماعی سازمان ندارند؛ بلکه ابزارهایی برای افزایش توان اجرا، ایجاد منابع پایدار، توسعه شبکه همکاری و تحقق اهداف خورشید هستند. به همین دلیل، جایگاه سازمان، جامعه آن و بازوهای اجرایی از یکدیگر متمایز است، اما در پروژه‌های مشخص می‌توانند در یک مسیر مشترک قرار گیرند.",
                  ]}
                  more="خورشید در این مدل نقش طراحی مسیر، ایجاد ارتباط، تعریف چارچوب همکاری و راهبری مأموریت را بر عهده دارد. بازوهای تخصصی نیز متناسب با موضوع هر پروژه می‌توانند ظرفیت‌های رسانه‌ای، تولیدی، آموزشی، مشاوره‌ای یا اجرایی موردنیاز را فراهم کنند. این تفکیک به سازمان اجازه می‌دهد در عین حفظ ماهیت و مأموریت مردم‌نهاد خود، از ظرفیت‌های تخصصی برای اجرای حرفه‌ای پروژه‌ها استفاده کند."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <p className="eyebrow">بازوهای اجرایی</p>
          <h2 className="mt-2 max-w-3xl text-[28px] font-extrabold leading-[1.6] md:text-[36px]">
            تبدیل ظرفیت و مأموریت به توان اجرا
          </h2>
          <div className="mt-4 max-w-4xl">
            <ExpandableText
              paragraphs={[
                "برای اجرای حرفه‌ای بخشی از برنامه‌ها و پروژه‌ها، خورشید از ظرفیت بازوهای تخصصی خود در حوزه‌های رسانه، تلویزیون اینترنتی، خدمات مشاوره و اجرای پروژه‌های مسئولیت اجتماعی و توسعه آموزش، پژوهش و نوآوری استفاده می‌کند. هر بازو متناسب با حوزه تخصصی خود، ظرفیت مشخصی را به اکوسیستم اضافه می‌کند.",
                "بازوهای اجرایی، جایگزین ساختار سازمان مردم‌نهاد نیستند؛ بلکه ظرفیت‌هایی تخصصی برای توسعه و اجرای پروژه‌ها هستند. همکاری میان خورشید و هر بازو می‌تواند بر اساس موضوع، قرارداد، مصوبه و چارچوب حقوقی و اجرایی همان پروژه تعریف شود.",
              ]}
              more="این تفکیک کمک می‌کند مأموریت و جایگاه نهادی خورشید از ظرفیت اجرایی بازوها روشن باقی بماند و در عین حال، پروژه‌ها بتوانند از تخصص و توان عملیاتی موردنیاز خود استفاده کنند."
            />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {arms.map(([title, text, href, image]) => (
              <a key={title} href={href} className="glass group rounded-2xl p-6 transition hover:-translate-y-1">
                <div className="-mx-6 -mt-6 mb-5 h-52 overflow-hidden rounded-t-2xl">
                  <img src={image} alt={`تصویر بازوی ${title}`} className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <p className="text-[11px] font-semibold text-[#4A78B0]">بازوی اجرایی</p>
                <h3 className="mt-3 text-[17px] font-bold">{title}</h3>
                <p className="mt-3 text-[12px] leading-7 text-[#4D5B77]">{text}</p>
                <span className="mt-5 inline-flex text-[12px] font-semibold text-[#4A78B0]">مشاهده <span className="mr-2"><Arrow /></span></span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/8 bg-white/[0.02] p-7">
              <p className="eyebrow">جامعه خورشید</p>
              <h2 className="mt-2 text-[24px] font-extrabold">شبکه‌ای از انسان‌ها، تخصص‌ها و فرصت‌های همکاری</h2>
              <p className="mt-4 text-[13px] leading-8 text-[#4D5B77]">
                خورشید بدون جامعه انسانی خود معنا پیدا نمی‌کند. هنرمندان و مفاخر، متخصصان، اعضا، داوطلبان، حامیان، شرکت‌ها، سازمان‌ها و شرکای اجتماعی هرکدام بخشی از ظرفیت این شبکه را شکل می‌دهند.
              </p>
              <a href="/community" className="mt-5 inline-flex text-[12px] font-semibold text-[#4A78B0]">آشنایی با جامعه خورشید ←</a>
            </article>
            <article className="rounded-2xl border border-white/8 bg-white/[0.02] p-7">
              <p className="eyebrow">همکاری</p>
              <h2 className="mt-2 text-[24px] font-extrabold">هر همکاری، یک مسیر برای اثرگذاری</h2>
              <p className="mt-4 text-[13px] leading-8 text-[#4D5B77]">
                هر فرد یا مجموعه می‌تواند متناسب با توانایی و علاقه خود از مسیرهای مختلف در خورشید مشارکت کند؛ از مشارکت تخصصی و هنری تا حمایت مالی و غیرمالی، همکاری رسانه‌ای یا اجرای پروژه.
              </p>
              <a href="/participation" className="mt-5 inline-flex text-[12px] font-semibold text-[#4A78B0]">مسیرهای مشارکت ←</a>
            </article>
          </div>
          <div className="mt-6 max-w-4xl">
            <ExpandableText
              paragraphs={[
                "ارزش این شبکه زمانی شکل می‌گیرد که ارتباط میان افراد به همکاری و همکاری به نتیجه منجر شود. به همین دلیل، خورشید تلاش می‌کند مسیر مشارکت را روشن، قابل دسترس و متناسب با نوع همکاری طراحی کند.",
                "در این مدل، مشارکت می‌تواند از یک ارتباط اولیه آغاز شود و با توجه به توانایی، تخصص و هدف طرفین به یک همکاری مستمر یا مسئولیت پروژه‌ای تبدیل شود.",
              ]}
              more="خورشید تلاش می‌کند برای مشارکت‌های مؤثر، امکان تداوم و توسعه ایجاد کند و ارتباط میان افراد و مجموعه‌ها را به فرصت‌های مشخص و قابل اجرا متصل سازد."
            />
          </div>
        </section>

        <section className="mt-20 border-t border-white/8 pt-16 md:mt-24 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 lg:sticky lg:top-24">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img src="/images/partners/khorshid-makhafer-logo-mockup.jpg" alt="لوگوی سازمان مردم‌نهاد خورشید مفاخر" className="block h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-center text-[13px] font-semibold text-[#d5dce2]">سازمان مردم‌نهاد خورشید مفاخر</p>
            </div>
            <div>
              <p className="eyebrow">اعتبار و جایگاه سازمانی</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">یک ساختار رسمی برای یک مأموریت اجتماعی</h2>
              <div className="mt-6 text-[14px] leading-8 text-[#4D5B77]">
                <p>سازمان مردم‌نهاد خورشید مفاخر به‌عنوان یک سازمان مردم‌نهاد، غیرانتفاعی، غیرسیاسی و داوطلبانه فعالیت می‌کند و فعالیت آن در چارچوب مجوز و الزامات قانونی مربوط به سازمان‌های مردم‌نهاد انجام می‌شود. این ساختار رسمی، مبنای ارتباط سازمان با اعضا، حامیان، نهادهای عمومی، شرکت‌ها و سایر شرکای اجتماعی است.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4"><span className="text-[11px] text-[#4A78B0]">نام رسمی</span><p className="mt-1 text-[13px] font-semibold">سازمان مردم‌نهاد خورشید مفاخر</p></div>
                  <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4"><span className="text-[11px] text-[#4A78B0]">شماره ثبت</span><p className="mt-1 text-[13px] font-semibold">۶۱۷۲۰</p></div>
                  <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4"><span className="text-[11px] text-[#4A78B0]">تاریخ ثبت</span><p className="mt-1 text-[13px] font-semibold">۳۱/۶/۱۴۰۵</p></div>
                  <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4"><span className="text-[11px] text-[#4A78B0]">مرجع ثبت</span><p className="mt-1 text-[13px] font-semibold">سازمان ثبت اسناد کشور</p></div>
                  <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 sm:col-span-2"><span className="text-[11px] text-[#4A78B0]">مرجع صدور مجوز فعالیت</span><p className="mt-1 text-[13px] font-semibold">وزارت کشور</p></div>
                </div>
                <details className="group mt-5">
                  <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0]">ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span></summary>
                  <div className="mt-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] text-[#4D5B77]">اعتبار حقوقی برای خورشید صرفاً یک عنوان ثبتی نیست؛ بلکه چارچوبی برای پاسخ‌گویی، شفافیت، تعریف مسئولیت‌ها و ایجاد همکاری‌های رسمی است. در کنار این جایگاه نهادی، شبکه تخصصی و بازوهای اجرایی به خورشید امکان می‌دهند ظرفیت‌های مختلف را برای پروژه‌های مشخص در یک مسیر هماهنگ قرار دهد.</div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 md:mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 px-6 py-12 text-center md:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,120,176,.10),transparent_58%)]" />
            <div className="relative mx-auto max-w-4xl">
              <p className="eyebrow">مسیر آشنایی با خورشید</p>
              <h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">هر بخش، پاسخ یک سؤال</h2>
              <div className="mt-5 grid gap-4 text-right md:grid-cols-3">
                <a href="/mission/about" className="rounded-2xl border border-white/10 bg-black/10 p-5 transition hover:-translate-y-1">
                  <p className="text-[11px] text-[#4A78B0]">برای شناخت جهت و هدف</p>
                  <h3 className="mt-2 text-[16px] font-bold">مأموریت و چشم‌انداز</h3>
                  <span className="mt-4 inline-flex text-[12px] text-[#4A78B0]">مشاهده ←</span>
                </a>
                <a href="/areas-focus/about" className="rounded-2xl border border-white/10 bg-black/10 p-5 transition hover:-translate-y-1">
                  <p className="text-[11px] text-[#4A78B0]">برای شناخت فعالیت‌ها</p>
                  <h3 className="mt-2 text-[16px] font-bold">حوزه‌های فعالیت</h3>
                  <span className="mt-4 inline-flex text-[12px] text-[#4A78B0]">مشاهده ←</span>
                </a>
                <a href="/participation" className="rounded-2xl border border-white/10 bg-black/10 p-5 transition hover:-translate-y-1">
                  <p className="text-[11px] text-[#4A78B0]">برای همکاری و مشارکت</p>
                  <h3 className="mt-2 text-[16px] font-bold">مسیرهای مشارکت</h3>
                  <span className="mt-4 inline-flex text-[12px] text-[#4A78B0]">مشاهده ←</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
