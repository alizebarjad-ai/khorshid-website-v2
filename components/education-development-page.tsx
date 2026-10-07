import { SiteShell } from "./site-shell";

const capacities = [
  ["آموزش", "آموزش‌های هنری و تخصصی، کارگاه‌ها و مسیرهای مهارت‌محور برای یادگیری عملی و توسعه توانمندی."],
  ["پژوهش", "مطالعه و تحلیل مسائل فرهنگی، هنری و اجتماعی برای شناخت دقیق‌تر مسئله و طراحی راهکارهای کاربردی."],
  ["نوآوری", "توسعه ایده‌ها، روش‌ها و تجربه‌های تازه در آموزش، هنر و پروژه‌های فرهنگی و اجتماعی."],
  ["پرورش استعداد", "ایجاد مسیرهایی برای شناسایی، رشد و اتصال استعدادها به مربیان، متخصصان و فرصت‌های واقعی."],
];

const learningPaths = [
  ["هنرستان", "ظرفیت آموزش عملی هنر و مهارت‌های مرتبط؛ یکی از زیرساخت‌های آموزشی خورشید برای پرورش نسل تازه."],
  ["دوره و کارگاه", "برگزاری یا توسعه دوره‌ها و کارگاه‌های تخصصی متناسب با نیاز مخاطبان و پروژه‌ها."],
  ["آموزش پروژه‌محور", "پیوند یادگیری با تجربه واقعی، تولید، اجرا و حل مسئله به‌جای محدود شدن به آموزش نظری."],
  ["توسعه مهارت", "تقویت مهارت‌های حرفه‌ای و میان‌رشته‌ای برای ورود مؤثرتر به مسیرهای فرهنگی، هنری و اجتماعی."],
];

const outputs = [
  ["آموزش‌های در حال توسعه", "دوره‌ها، کارگاه‌ها و مسیرهای آموزشی که متناسب با ظرفیت‌ها و نیازهای واقعی شکل می‌گیرند."],
  ["پژوهش و مطالعه", "مطالعات و محتوای پژوهشی کاربردی که به فهم مسئله، تصمیم‌گیری و طراحی بهتر کمک می‌کنند."],
  ["ایده و نوآوری", "ایده‌ها و تجربه‌هایی که امکان تبدیل شدن به برنامه، محصول آموزشی یا پروژه فرهنگی و اجتماعی را دارند."],
];

export function EducationDevelopmentPage() {
  return (
    <SiteShell>
      <section className="relative min-h-[560px] overflow-hidden border-b border-white/10 md:min-h-[680px]">
        <div className="absolute inset-0">
          <img
            src="/images/arms/education-arm2.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/90 via-[#FFFFFF]/45 to-[#FFFFFF]/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FFFFFF] to-transparent" />
        </div>

        <div className="container-site relative flex min-h-[560px] items-end py-16 md:min-h-[680px] md:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow">بازوی توسعه آموزش، پژوهش و نوآوری</p>
            <h1 className="mt-4 max-w-3xl text-[38px] font-extrabold leading-[1.5] tracking-tight md:text-[58px]">
              دانش و مهارت، وقتی به فرصت تبدیل می‌شوند.
            </h1>
            <p className="mt-5 max-w-2xl text-[14px] leading-8 text-[#d2dbe2] md:text-[16px]">
              خورشید مفاخر ظرفیت‌های آموزشی، پژوهشی و نوآورانه خود را برای توسعه مهارت، پرورش استعداد و تبدیل ایده به تجربه و پروژه شکل می‌دهد؛ از هنرستان و کارگاه‌های تخصصی تا مطالعه، ایده‌پردازی و تجربه‌های تازه در هنر و جامعه.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site pb-20 pt-4 md:pb-28 md:pt-8">
        <section className="mt-16 border-t border-white/8 pt-12 md:mt-24 md:pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">نقش این بازو</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">فقط آموزش نمی‌دهیم؛ ظرفیت ایجاد می‌کنیم.</h2>
            </div>
            <div>
              <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                هدف این بازو، ساختن یک مسیر پیوسته میان یادگیری، پژوهش، تجربه و اجراست. آموزش می‌تواند به مهارت برسد، پژوهش به فهم بهتر مسئله کمک کند و نوآوری، ایده را به یک تجربه قابل آزمون تبدیل کند.
              </p>
              <div className="mt-9 grid gap-7 sm:grid-cols-2">
                {capacities.map(([title, text]) => (
                  <article key={title} className="border-t border-[#4A78B0]/40 pt-4">
                    <h3 className="text-[18px] font-extrabold">{title}</h3>
                    <p className="mt-2 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-12 md:mt-24 md:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">ظرفیت‌های آموزشی</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">یادگیری، نزدیک به تجربه واقعی</h2>
            <p className="mt-4 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
              آموزش در خورشید قرار نیست فقط به انتقال اطلاعات محدود شود. مسیرهای آموزشی می‌توانند با هنر، تولید، پروژه و تجربه حرفه‌ای پیوند بخورند تا یادگیری به توانایی قابل استفاده تبدیل شود.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {learningPaths.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
                <h3 className="text-[19px] font-extrabold">{title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-12 md:mt-24 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">پژوهش و مطالعه</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[38px]">پژوهش برای فهم بهتر، طراحی بهتر</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                ظرفیت پژوهشی خورشید می‌تواند برای مطالعه مسائل فرهنگی، هنری و اجتماعی، تحلیل تجربه‌ها، مستندسازی دانش و پشتیبانی از تصمیم‌ها و پروژه‌ها به کار گرفته شود. این بخش بر پژوهش کاربردی و قابل استفاده در عمل تمرکز دارد.
              </p>
            </div>
            <div className="border-t border-[#4A78B0]/40 pt-5">
              <p className="text-[13px] leading-7 text-[#4D5B77]">پژوهش می‌تواند در کنار پروژه‌های اجتماعی، برنامه‌های آموزشی، تولیدات رسانه‌ای و فعالیت‌های هنری قرار بگیرد و به جای یک فعالیت جدا از اجرا، بخشی از چرخه طراحی و یادگیری باشد.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-12 md:mt-24 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">نوآوری</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[38px]">ایده‌ای که بتواند به تجربه تبدیل شود.</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
                نوآوری در این بازو به معنای ساختن مسیرهای تازه برای آموزش، هنر و حل مسئله است؛ از ایده‌های فرهنگی و هنری تا روش‌های جدید یادگیری، ابزارها و تجربه‌هایی که امکان آزمون و توسعه دارند.
              </p>
            </div>
            <div className="grid gap-4">
              {["ایده‌های فرهنگی و هنری", "روش‌ها و تجربه‌های تازه آموزشی", "راهکارهای خلاق برای مسائل اجتماعی", "پیوند فناوری و ابزار با آموزش و هنر"].map((item) => (
                <div key={item} className="border-t border-white/10 pt-4 text-[13px] font-bold leading-7 text-[#d2dce4]">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-12 md:mt-24 md:pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">هنرستان</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">هنرستان؛ یکی از زیرساخت‌های آموزش عملی</h2>
            </div>
            <div>
              <p className="text-[14px] leading-8 text-[#4D5B77]">
                هنرستان، یکی از ظرفیت‌های واقعی این بازو برای آموزش عملی و پرورش استعداد است. این ظرفیت در کنار دوره‌ها، کارگاه‌ها، پژوهش و تجربه‌های نوآورانه قرار می‌گیرد تا آموزش به بخشی از یک مسیر گسترده‌تر برای رشد مهارت و فرصت تبدیل شود.
              </p>
              <p className="mt-4 text-[12px] leading-7 text-[#738391]">جزئیات رشته‌ها، دوره‌ها و برنامه‌های فعال پس از نهایی شدن هر برنامه در همین بخش معرفی خواهد شد.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-12 md:mt-24 md:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">از یادگیری تا اثر</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">این ظرفیت‌ها در شبکه خورشید تنها نمی‌مانند.</h2>
            <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">
              آموزش و پژوهش می‌توانند با هنرمندان و متخصصان شبکه خورشید، رسانه و تلویزیون اینترنتی، بازوی توسعه پروژه‌های اجتماعی و سایر ظرفیت‌های سازمان ترکیب شوند. نتیجه می‌تواند یک دوره آموزشی، مطالعه کاربردی، تجربه نوآورانه یا پروژه‌ای باشد که در دنیای واقعی اجرا و ارزیابی می‌شود.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {outputs.map(([title, text]) => (
              <article key={title} className="border-t border-[#4A78B0]/35 pt-5">
                <h3 className="text-[17px] font-extrabold">{title}</h3>
                <p className="mt-2 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-12 md:mt-24 md:pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">شروع همکاری</p>
              <h2 className="mt-2 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">یک ایده آموزشی، پژوهشی یا نوآورانه دارید؟</h2>
            </div>
            <div>
              <p className="text-[14px] leading-8 text-[#4D5B77]">مسیر مشارکت، نقطه شروع بررسی ایده‌ها و اتصال آن‌ها به ظرفیت مناسب خورشید است.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/participation#form" className="btn-primary px-5 py-3 text-[13px]">ثبت درخواست</a>
                <a href="/arms" className="btn-primary px-5 py-3 text-[13px]">بازوهای اجرایی</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
