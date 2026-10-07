import { SiteShell } from "./site-shell";

function ExpandableText({ visible, more }: { visible: string; more: string }) {
  return <div className="max-w-4xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
    <p>{visible}</p>
    <details className="group mt-3">
      <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] transition hover:text-[#4A78B0]">ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span></summary>
      <div className="mt-4 space-y-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#4D5B77]">{more.split("\n\n").map(p => <p key={p}>{p}</p>)}</div>
    </details>
  </div>;
}

const steps = [
  ["شناخت مسئله","هر پروژه با یک مسئله، نیاز یا فرصت مشخص آغاز می‌شود. خورشید ابتدا تلاش می‌کند بداند چه چیزی نیاز به تغییر دارد، جامعه هدف چه کسانی هستند و مسئله در چه زمینه‌ای شکل گرفته است.","گفت‌وگو با ذی‌نفعان، بررسی اطلاعات موجود و استفاده از تجربه متخصصان و شبکه خورشید می‌تواند به روشن‌تر شدن صورت مسئله کمک کند. هدف این مرحله آن است که پیش از ساختن راهکار، مسئله درست فهمیده شود."],
  ["پژوهش و تعریف راهکار","پس از شناخت مسئله، مسیر مناسب برای مداخله طراحی می‌شود. راهکار ثابت و از پیش‌تعیین‌شده‌ای برای همه پروژه‌ها وجود ندارد؛ شکل پروژه باید با هدف، مخاطب، منابع و شرایط آن متناسب باشد.","راهکار می‌تواند ترکیبی از هنر، رسانه، آموزش، پژوهش، رویداد، توانمندسازی یا سایر اقدامات فرهنگی و اجتماعی باشد. هدف، تبدیل یک دغدغه کلی به طرحی روشن با هدف، جامعه هدف، فعالیت‌ها و نتیجه مورد انتظار است."],
  ["ترکیب ظرفیت‌ها","خورشید متناسب با هر پروژه، هنرمندان، متخصصان، سازمان‌ها، حامیان و ظرفیت‌های اجرایی مورد نیاز را کنار هم قرار می‌دهد تا تیم و ساختار مناسب برای اجرای آن شکل بگیرد.","این ترکیب می‌تواند شامل دانش تخصصی، شبکه ارتباطی، رسانه، تجهیزات، فضا، منابع مالی یا مشارکت داوطلبانه باشد. هر پروژه بر اساس نیاز خود شکل می‌گیرد و الزاماً از همه ظرفیت‌های شبکه استفاده نمی‌کند."],
  ["تولید و اجرا","پس از طراحی، پروژه وارد مرحله عمل می‌شود؛ از تشکیل تیم و تقسیم مسئولیت‌ها تا تولید، اجرا، انتشار و مستندسازی. در این مرحله ایده باید به خروجی واقعی و قابل ارائه تبدیل شود.","بسته به ماهیت پروژه، بخشی از اجرا می‌تواند توسط شبکه تخصصی خورشید یا بازوهای اجرایی وابسته دنبال شود. نقش طرف‌های همکاری، منابع و زمان‌بندی نیز تا حد امکان از ابتدا روشن می‌شود."],
  ["مشارکت و ارتباط با جامعه","مشارکت فقط تأمین مالی نیست. یک پروژه می‌تواند از ترکیب منابع مالی، تخصص، رسانه، فضا، تجهیزات، شبکه ارتباطی و مشارکت داوطلبانه شکل بگیرد و جامعه هدف نیز در صورت امکان بخشی از فرآیند باشد.","خورشید متناسب با پروژه می‌تواند نقش طراحی، هماهنگی، تولید، شبکه‌سازی یا اجرای بخشی از برنامه را بر عهده بگیرد و با شریک، ساختار همکاری مشخصی تعریف کند."],
  ["سنجش اثر و یادگیری","اجرای یک برنامه به‌تنهایی نشان‌دهنده اثر آن نیست. در پایان، هدف‌ها، فعالیت‌ها، خروجی‌ها و نتایج پروژه تا حد امکان مستند و ارزیابی می‌شوند تا تصویر روشن‌تری از اثر ایجادشده به دست آید.","شاخص‌ها بر اساس ماهیت هر پروژه تعیین می‌شوند و می‌توانند شامل میزان مشارکت، تولیدات فرهنگی و رسانه‌ای، آموزش، توسعه مهارت، دسترسی به خدمات یا سایر نتایج قابل مشاهده باشند. گزارش‌پذیری همچنین امکان یادگیری و بهبود پروژه‌های بعدی را فراهم می‌کند."]
];

const capacities = [
  ["هنرمندان","خلق، روایت و تولید اثر"],
  ["متخصصان","پژوهش، طراحی و حل مسئله"],
  ["سازمان‌ها و شرکا","دسترسی به منابع، مخاطب و زیرساخت"],
  ["حامیان","تأمین منابع و پشتیبانی از اجرای پروژه"]
];

export function ProjectsSocialPage({ route = "projects-social" }: { route?: "projects-social" | "about/approach" }) {
  const isApproach = route === "about/approach";
  const pageUrl = `https://khorshid-website.vercel.app/${route}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": isApproach ? "WebPage" : "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: isApproach ? "رویکرد و شیوه فعالیت خورشید" : "پروژه‌های اجتماعی خورشید مفاخر",
    description: isApproach
      ? "رویکرد خورشید برای شناسایی مسئله، طراحی راهکار، ترکیب ظرفیت‌ها، اجرا و سنجش اثر با تکیه بر هنر، رسانه و شبکه همکاری."
      : "طراحی و اجرای پروژه‌های فرهنگی و اجتماعی؛ از شناخت مسئله تا اجرا، روایت و سنجش اثر.",
    inLanguage: "fa-IR",
    isPartOf: { "@id": "https://khorshid-website.vercel.app/#website" },
    about: { "@id": "https://khorshid-website.vercel.app/#organization" },
  };

  return <SiteShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="relative overflow-hidden border-b border-white/8 reveal">
      <div className="absolute inset-0"><img src="/images/approach/approach-hero.jpg" alt="رویکرد و شیوه فعالیت خورشید مفاخر" className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/88 via-[#FFFFFF]/38 to-transparent" />
      <div className="relative min-h-[560px]"><div className="container-site flex min-h-[560px] items-end py-16 md:py-24">
        <div className="max-w-3xl"><p className="eyebrow">رویکرد خورشید</p>
          <h1 className="mt-4 text-[34px] font-extrabold leading-[1.55] tracking-tight md:text-[54px]">از مسئله تا اثر، با یک مسیر روشن</h1>
          <ExpandableText visible="خورشید با شناخت مسئله، طراحی راهکار، گردآوردن ظرفیت‌های تخصصی و هنری و اجرای حرفه‌ای، ایده‌ها و نیازهای فرهنگی و اجتماعی را به پروژه‌هایی قابل اجرا و قابل ارزیابی تبدیل می‌کند." more="این مسیر بسته به ماهیت پروژه می‌تواند تغییر کند، اما منطق اصلی آن روشن است: مسئله درست فهمیده شود، راهکار متناسب طراحی شود، ظرفیت‌های لازم کنار هم قرار گیرند و نتیجه اجرا تا حد امکان مستند و قابل یادگیری باشد." />
        </div>
      </div></div>
    </section>

    <div className="container-site py-14 md:py-20">
      <section className="grid gap-10 border-b border-white/8 pb-14 md:pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center reveal">
        <div><p className="eyebrow">مدل عمل</p><h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">یک ایده، زمانی ارزشمند است که بتواند به اقدام تبدیل شود.</h2></div>
        <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[16px]">رویکرد خورشید بر اتصال سه عنصر استوار است: فهم مسئله، استفاده از ظرفیت‌های مناسب و اجرای قابل پیگیری. بنابراین پروژه از ابتدا با نگاه به نتیجه، منابع، نقش شرکا و امکان سنجش اثر طراحی می‌شود.</p>
      </section>

      <section className="pt-14 md:pt-20 reveal">
        <div className="mb-10 max-w-3xl"><p className="eyebrow">مسیر تبدیل ایده به پروژه</p><h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[40px]">از شناخت مسئله تا سنجش اثر</h2></div>
        <div className="relative mr-2 border-r border-[#4A78B0]/25 pr-7 md:mr-5 md:pr-10">
          {steps.map(([title,visible,more],index)=><article key={title} className="relative mb-12 last:mb-0 md:mb-16 reveal">
            <span className="absolute -right-[35px] top-1 h-3 w-3 rounded-full border-2 border-[#4A78B0] bg-[#07090c] md:-right-[48px]" />
            <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10"><div><p className="eyebrow">مرحله {"۰۱۲۳۴۵۶۷۸۹"[index+1]}</p><h3 className="mt-1 text-[21px] font-extrabold leading-[1.7] md:text-[25px]">{title}</h3></div><ExpandableText visible={visible} more={more} /></div>
          </article>)}
        </div>
      </section>

      <section className="mt-16 grid gap-8 border-t border-white/8 pt-14 md:mt-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center reveal">
        <div><p className="eyebrow">هنر در فرآیند</p><h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">هنر، بخشی از راه‌حل است؛ نه فقط محصول نهایی</h2>
          <ExpandableText visible="هنر و فرهنگ می‌توانند ابزار ارتباط، روایت، آموزش، گفت‌وگو و ایجاد مشارکت باشند. خورشید متناسب با مسئله، از ظرفیت‌هایی مانند فیلم، تئاتر، موسیقی، ادبیات، هنرهای تجسمی و تولید محتوای رسانه‌ای استفاده می‌کند." more="انتخاب ابزار بر اساس هدف پروژه انجام می‌شود، نه صرفاً به دلیل جذابیت آن. در حوزه‌هایی که به خدمات تخصصی مانند درمان، روان‌شناسی یا مشاوره حقوقی نیاز دارند، نقش خورشید می‌تواند تسهیلگری، شبکه‌سازی و اتصال پروژه به متخصصان و نهادهای ذی‌صلاح باشد." />
        </div><div className="overflow-hidden rounded-3xl border border-white/8"><img src="/images/approach/approach-art.jpg" alt="هنر و فرهنگ در رویکرد پروژه‌ای خورشید مفاخر" className="aspect-[4/3] w-full object-cover" /></div>
      </section>

      <section className="mt-16 border-t border-white/8 pt-14 md:mt-24 md:pt-20 reveal">
        <div className="max-w-3xl"><p className="eyebrow">شبکه همکاری</p><h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[40px]">ظرفیت‌ها را برای خلق یک پروژه مشترک کنار هم می‌گذاریم</h2><p className="mt-5 text-[14px] leading-8 text-[#4D5B77] md:text-[16px]">ارزش خورشید فقط در تولید نیست؛ در توانایی اتصال ظرفیت‌های مختلف برای شکل‌دادن به یک پروژه مشترک است.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{capacities.map(([title,text])=><div key={title} className="border-t border-[#4A78B0]/35 pt-5"><h3 className="text-[20px] font-extrabold">{title}</h3><p className="mt-2 text-[13px] leading-7 text-[#4D5B77]">{text}</p></div>)}</div>
      </section>

      <section className="mt-16 grid gap-8 border-t border-white/8 pt-14 md:mt-24 md:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center reveal">
        <div><p className="eyebrow">زنجیره اجرا</p><h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">از طراحی تا اجرا، با استفاده از ظرفیت‌های تخصصی</h2></div>
        <div><p className="text-[14px] leading-8 text-[#4D5B77] md:text-[16px]">خورشید علاوه بر شبکه انسانی خود، از ظرفیت بازوهای اجرایی وابسته در حوزه رسانه، تلویزیون اینترنتی، توسعه پروژه‌های اجتماعی و توسعه آموزش، پژوهش و نوآوری استفاده می‌کند. این ساختار، در پروژه‌های متناسب، امکان هماهنگی بخشی از مسیر طراحی، تولید، اجرا و انتشار را فراهم می‌کند.</p><a href="/arms" className="btn-primary mt-6 inline-flex px-5 py-3 text-[13px]">آشنایی با بازوهای اجرایی</a></div>
      </section>

      <section className="mt-16 rounded-3xl border border-[#4A78B0]/20 bg-[#4A78B0]/5 px-6 py-10 md:mt-24 md:px-12 md:py-12 reveal">
        <p className="eyebrow">شروع همکاری</p><h2 className="mt-3 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">یک مسئله، یک ایده یا یک فرصت دارید؟</h2>
        <p className="mt-5 max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">اگر سازمان، شرکت، نهاد عمومی، دانشگاه یا گروه تخصصی شما با یک مسئله فرهنگی یا اجتماعی روبه‌رو است، می‌توان آن را برای بررسی و طراحی یک پروژه مشترک با خورشید مطرح کرد.</p>
        <a href="/participation#form" className="btn-primary mt-7 inline-flex px-6 py-3 text-[13px]">ثبت درخواست همکاری</a>
      </section>
    </div>
  </SiteShell>;
}
