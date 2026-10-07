import "./solar-motion.css";
import { AnnouncementPopup } from "@/components/announcement-system";
import { LatestAnnouncements } from "@/components/latest-announcements";
import { HomeMotion, MissionInteractive } from "./home-interactions";
import type { Announcement } from "@/types/announcement";

const supportAreas = [
  ["سلامت و رفاه", "حمایت از سلامت، درمان، بیمه و رفاه هنرمندان."],
  ["توانمندسازی اقتصادی", "ایجاد مسیرهای درآمدی، آموزش، بازار و فرصت‌های حرفه‌ای."],
  ["حمایت حقوقی", "تسهیل دسترسی هنرمندان به مشاوره و حمایت‌های حقوقی."],
  ["حفظ و احیای هنرهای ایرانی", "حمایت از تداوم، انتقال و احیای ظرفیت‌های هنر ایرانی."],
  ["مستندسازی و ثبت میراث هنری", "ثبت تجربه‌ها، آثار، روایت‌ها و میراث هنرمندان."],
  ["پژوهش و توسعه دانش", "پژوهش کاربردی برای شناخت مسائل و طراحی راه‌حل‌های فرهنگی."],
  ["منزلت و جایگاه اجتماعی هنرمندان", "تقویت دیده‌شدن، اعتبار و حضور مؤثر هنرمندان در جامعه."],
];

const socialIssues = [
  "کودکان کار و کودکان در معرض آسیب",
  "خشونت خانگی و آسیب‌های زنان",
  "اعتیاد و بازتوانی",
  "سالمندان و تنهایی",
  "معلولیت و توانبخشی",
  "زندانیان و بازپروری",
  "حاشیه‌نشینی و فقر شهری",
  "بلایای طبیعی و بحران‌ها",
  "مهاجران و آوارگان",
  "سلامت روان عمومی جامعه",
  "محیط‌زیست و آگاهی اجتماعی",
];

const arms = [
  ["رسانه", "روایت و تولید محتوای فرهنگی و اجتماعی"],
  ["تلویزیون اینترنتی", "تولید و انتشار محتوای تصویری و برنامه‌های تخصصی"],
  ["توسعه پروژه‌های اجتماعی", "طراحی و اجرای پروژه برای سازمان‌ها و برندها"],
  ["توسعه آموزش، پژوهش و نوآوری", "آموزش، انتقال تجربه و پرورش ظرفیت‌های هنری"],
];

const activityAreas = [
  {
    title: "حمایت از هنرمندان",
    kicker: "محور اصلی اول",
    text: "حمایت حرفه‌ای و پایدار از هنرمندان؛ از سلامت، رفاه و توانمندسازی اقتصادی تا حفظ میراث هنری و تقویت منزلت اجتماعی.",
    image: "/images/homepage/artist-support.jpg",
    alt: "حمایت از هنرمندان و پاسداشت مفاخر",
    featured: true,
  },
  {
    title: "هنر و مسائل اجتماعی",
    kicker: "محور اصلی دوم",
    text: "به‌کارگیری ظرفیت هنر و فرهنگ برای دیده‌شدن، روایت و مواجهه خلاقانه با مسائل و آسیب‌های واقعی جامعه.",
    image: "/images/homepage/social-issues.jpg",
    alt: "هنر و مسائل اجتماعی",
    featured: true,
  },
  {
    title: "رسانه و تولید محتوا",
    kicker: "حوزه مکمل",
    text: "روایت، تولید و توزیع محتوای هنری، فرهنگی و اجتماعی برای توسعه آگاهی، ارتباط و اثرگذاری مأموریت خورشید.",
    image: "/images/homepage/media-content.jpg",
    alt: "رسانه و تولید محتوا",
  },
  {
    title: "مشارکت و همکاری",
    kicker: "حوزه مکمل",
    text: "اتصال سازمان‌ها، برندها، حامیان و شرکای اجتماعی به فرصت‌های مشترک، منابع تخصصی و پروژه‌های قابل اجرا.",
    image: "/images/homepage/partnership.jpg",
    alt: "مشارکت و همکاری",
  },
  {
    title: "پژوهش و نوآوری",
    kicker: "حوزه مکمل",
    text: "مطالعه، توسعه دانش و طراحی راهکارهای خلاقانه برای شناخت بهتر مسائل و افزایش کیفیت و اثرگذاری فعالیت‌ها.",
    image: "/images/homepage/research.jpg",
    alt: "پژوهش و نوآوری",
  },
  {
    title: "جامعه و شبکه خورشید",
    kicker: "حوزه مکمل",
    text: "توسعه شبکه اعضا، هنرمندان، مفاخر، متخصصان، حامیان و همراهان اجتماعی برای شکل‌گیری همکاری‌های پایدار.",
    image: "/images/homepage/community.jpg",
    alt: "جامعه و شبکه خورشید",
  },
];

const communityPaths = ["هنرمند", "عضو", "متخصص", "حامی", "سازمان", "شریک"];


type HomeClientProps = {
  announcements: Announcement[];
  importantAnnouncement: Announcement | null;
};

export default function HomeContent({ announcements, importantAnnouncement }: HomeClientProps) {
  return (
    <HomeMotion>
      <main className="solar-motion">
        <AnnouncementPopup announcement={importantAnnouncement} />

      <section className="v2-hero">
        <video className="v2-bg" autoPlay muted loop playsInline preload="auto" aria-hidden="true" poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_105822_bf7c2d53-9957-4521-bbbf-7c1ab7a70130.png" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_105953_21ad8049-9088-4a00-bad3-aee6b5575a2b.mp4" />
        <div className="v2-tint" />
        <div className="v2-hero-inner">
          <div className="v2-hero-copy">
            <p className="v2-eyebrow">سازمان مردم‌نهاد خورشید مفاخر</p>
            <h1>هنر و<br />مسئولیت اجتماعی</h1>
            <p className="v2-tagline">خورشید مفاخر، ظرفیت هنر و فرهنگ را به فرصت‌های واقعی برای جامعه و سازمان‌ها تبدیل می‌کند؛ از ایده و طراحی تا تولید، اجرا و روایت اثر.</p>
            <div className="v2-actions">
              <a href="#about-solar" className="v2-btn">آشنایی با خورشید</a>
              <a href="/participation#form" className="v2-btn v2-ghost">همکاری با خورشید</a>
            </div>
          </div>
          <aside className="v2-panel">
            <h3>حمایت از هنرمندان <i /></h3>
            <p>و استفاده از ظرفیت هنر برای مواجهه با مسائل واقعی جامعه</p>
            <div className="v2-track"><b /></div>
          </aside>
        </div>
        <div className="v2-stats">
          <div><strong>۶</strong><span>حوزه<br />فعالیت</span></div><em aria-hidden="true" />
          <div><strong>۸</strong><span>باشگاه<br />تخصصی</span></div><em aria-hidden="true" />
          <div><strong>۴</strong><span>بازوی<br />اجرایی</span></div>
        </div>
      </section>

      <LatestAnnouncements items={announcements} />

      <section className="solar-intro solar-scene" id="about-solar">
        <div className="intro-heading">
          <p className="solar-kicker">خورشید چیست؟</p>
          <h2>یک نهاد برای پیوند هنر، جامعه و فرصت‌های اثرگذاری.</h2>
        </div>
        <div className="intro-story">
          <p className="intro-lead">سازمان مردم‌نهاد خورشید مفاخر، نهادی غیردولتی، غیرانتفاعی، غیرسیاسی و داوطلبانه است که با شماره ثبت ۶۱۷۲۰ به ثبت رسمی رسیده و دارای مجوز وزارت کشور است. خورشید برای پیوند دادن ظرفیت هنر و فرهنگ با نیازهای واقعی جامعه شکل گرفته است؛ بستری که در آن هنرمندان، متخصصان، سازمان‌ها و حامیان می‌توانند توانایی، تجربه و منابع خود را در مسیر برنامه‌ها و پروژه‌های فرهنگی و اجتماعی به کار بگیرند.</p>
          <p>فعالیت خورشید از حمایت و توانمندسازی هنرمندان، حفظ و توسعه میراث هنری و تقویت شبکه حرفه‌ای آنان تا طراحی و اجرای پروژه‌های اجتماعی، تولید محتوا، پژوهش، آموزش و همکاری با سازمان‌ها و حامیان را دربرمی‌گیرد. این مسیر با تکیه بر شبکه تخصصی و چهار بازوی اجرایی در رسانه، تلویزیون اینترنتی، توسعه پروژه‌های اجتماعی، و توسعه آموزش، پژوهش و نوآوری، امکان می‌دهد یک ایده یا مسئله از مرحله شناخت و طراحی تا اجرا، تولید و روایت اثر پیش برود و همکاری‌ها به خروجی‌های روشن و قابل ارائه تبدیل شوند.</p>
        </div>
        <div className="solar-statement">
          <div><small>نقطه شروع</small><span>هنر</span></div><b aria-hidden="true">←</b>
          <div><small>مسئله و نیاز</small><span>جامعه</span></div><b aria-hidden="true">←</b>
          <div><small>نتیجه</small><span>اثر</span></div>
        </div>
      </section>

      <section className="solar-capacity solar-scene">
        <p className="solar-kicker">ظرفیت خورشید</p>
        <div className="capacity-grid">
          <div><strong>۶</strong><span>حوزه فعالیت</span></div>
          <div><strong>۸</strong><span>باشگاه تخصصی</span></div>
          <div><strong>۴</strong><span>بازوی اجرایی</span></div>
        </div>
        <p className="capacity-mission">یک ساختار برای یک مأموریت مشترک: <b>پیوند هنر با جامعه و تبدیل ظرفیت فرهنگی به اثر</b></p>
      </section>

      <section className="solar-mission solar-scene" id="mission">
        <div className="mission-heading">
          <p className="solar-kicker">نقشه فعالیت‌های خورشید</p>
          <h2>شش حوزه فعالیت؛ دو محور اصلی، یک مأموریت</h2>
          <p className="mission-intro">فعالیت‌های خورشید در شش حوزه اصلی تعریف شده است؛ اما هسته مأموریت ما بر دو محور استوار است: <strong>حمایت از هنرمندان</strong> و <strong>هنر و مسائل اجتماعی</strong>. چهار حوزه دیگر، ظرفیت لازم برای توسعه، پشتیبانی و اجرای این دو محور را فراهم می‌کنند.</p>
        </div>

        <div className="mission-featured-label">
          <span>هسته مأموریت خورشید</span>
          <i aria-hidden="true" />
        </div>

        <MissionInteractive activityAreas={activityAreas} supportAreas={supportAreas} socialIssues={socialIssues} />
      </section>

      <section className="solar-paths solar-scene">
        <div className="solar-scene-head">
          <div><p className="solar-kicker">مسیر شما در خورشید</p><h2>خورشید برای شما چه می‌کند؟</h2></div>
          <p>مسیر ورود بر اساس نقش و نیاز شما متفاوت است؛ لازم نیست برای پیدا کردن راه مناسب، کل سایت را زیر و رو کنید.</p>
        </div>
        <div className="community-cards">
          {[
            ["اگر سازمان هستید", "برای CSR، کمپین، تولید محتوای فرهنگی، رویداد، پروژه اجتماعی یا مشارکت غیرنقدی، خورشید مسئله را به یک مسیر اجرایی و قابل گزارش تبدیل می‌کند.", "/images/homepage/partnership.jpg", "/partnership", "همکاری با سازمان‌ها"],
            ["اگر هنرمند هستید", "برای معرفی توانمندی، مشارکت در پروژه‌ها، تولید و انتشار اثر، آموزش، باشگاه تخصصی و فرصت‌های همکاری به شبکه خورشید متصل شوید.", "/images/community/artists-veterans.jpg", "/community", "مسیر هنرمندان"],
            ["اگر می‌خواهید عضو شوید", "با عضویت، به باشگاه تخصصی، شبکه حرفه‌ای، برنامه‌های آموزشی و فرصت‌های مشارکت در فعالیت‌ها و پروژه‌های خورشید نزدیک‌تر می‌شوید.", "/images/homepage/community.jpg", "/membership", "پیوستن به خورشید"],
          ].map(([title, text, image, href, link]) => (
            <article key={title} className="community-card">
              <div className="community-card-image"><img src={image} alt={title} loading="lazy" /></div>
              <div className="community-card-body">
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="trust-more-link" href={href}>{link} <span aria-hidden="true">←</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="solar-corporate solar-scene" id="collaboration">
        <div className="corporate-heading">
          <p className="solar-kicker">برای سازمان‌ها و برندها</p>
          <h2>از ایده تا اثر اجتماعی؛ ظرفیت سازمان شما در یک مسیر مشترک</h2>
          <p>خورشید مفاخر به سازمان‌ها و کسب‌وکارها کمک می‌کند هدف‌ها و مسائل فرهنگی و اجتماعی خود را به برنامه، کمپین، تولید محتوا، رویداد یا پروژه‌ای مشخص تبدیل کنند؛ از طراحی و اجرا تا مستندسازی و گزارش اثرگذاری.</p>
          <details className="solar-inline-more">
            <summary>ادامه متن <span>←</span></summary>
            <p>همکاری می‌تواند با حمایت مالی، ظرفیت رسانه‌ای، تخصص، امکانات یا منابع غیرمالی شکل بگیرد. نقش طرفین، خروجی مورد انتظار و مسیر اجرا متناسب با پروژه از ابتدا روشن می‌شود.</p>
          </details>
        </div>
        <div className="corporate-options">
          <article><span>۰۱</span><h3>حمایت مالی</h3><p>اتصال منابع مالی به برنامه‌ها و پروژه‌های فرهنگی و اجتماعی مشخص.</p></article>
          <article><span>۰۲</span><h3>همکاری رسانه‌ای</h3><p>تولید، روایت و انتشار محتوای مشترک در ظرفیت‌های رسانه‌ای خورشید.</p></article>
          <article><span>۰۳</span><h3>پروژه مسئولیت اجتماعی</h3><p>تعریف مسئله، طراحی راه‌حل، اجرا و مستندسازی یک پروژه مشترک.</p></article>
        </div>
        <a className="solar-primary-link" href="/participation#form">فرصت‌های همکاری با خورشید <span>←</span></a>
      </section>

      <section className="solar-arms solar-scene">
        <div className="solar-scene-head"><div><p className="solar-kicker">بازوهای اجرایی</p><h2>چهار مسیر از ایده تا اجرا</h2></div><p>بازوهای وابسته، ظرفیت‌های تخصصی و اجرایی خورشید را توسعه می‌دهند و امکان می‌دهند مأموریت‌ها و همکاری‌ها در مسیرهای حرفه‌ای و قابل اجرا پیش بروند.</p></div>
        <div className="arms-cards">
          {[
            ["رسانه", "روایت و تولید محتوای فرهنگی و اجتماعی", "/images/arms/media-arm2.jpg"],
            ["تلویزیون اینترنتی", "تولید و انتشار محتوای تصویری و برنامه‌های تخصصی", "/images/arms/tv-arm2.jpg"],
            ["توسعه پروژه‌های اجتماعی", "طراحی و اجرای پروژه برای سازمان‌ها و برندها", "/images/arms/social-projects-arm2.jpg"],
            ["توسعه آموزش، پژوهش و نوآوری", "آموزش، انتقال تجربه و پرورش ظرفیت‌های هنری", "/images/arms/education-arm2.jpg"],
          ].map(([title, text, image], index) => (
            <article key={title} className="arms-card">
              <div className="arms-card-image">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="arms-card-body">
                <span>۰{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="arms-summary">
          <p>چهار بازو، از تولید و انتشار محتوا تا مشاوره، پروژه‌های مسئولیت اجتماعی و آموزش، ظرفیت‌های تخصصی لازم برای تبدیل ایده‌های خورشید به برنامه‌های عملیاتی را فراهم می‌کنند. این ساختار، بخش اجرایی مأموریت را از طراحی تا تولید و اجرا پوشش می‌دهد.</p>
          <a className="trust-more-link" href="/arms">آشنایی بیشتر با بازوهای اجرایی <span aria-hidden="true">←</span></a>
        </div>
      </section>

      <section className="solar-partners solar-scene">
        <div className="solar-scene-head">
          <div>
            <p className="solar-kicker">شرکا و حامیان</p>
            <h2>همراهانی که در مسیر اثرگذاری کنار خورشید ایستاده‌اند.</h2>
          </div>
          <p>همکاری با مجموعه‌ها و حامیان، بخشی از ظرفیت اجرایی خورشید برای توسعه برنامه‌ها و پروژه‌های فرهنگی و اجتماعی است.</p>
        </div>

        <div className="partners-grid">
          {[
            ["/images/partners/khorshid-honar.jpg", "خورشید هنر"],
            ["/images/partners/shafaghi-carpet2.jpg", "فرش شفقی"],
            ["/images/partners/tash.jpg", "تاش"],
            ["/images/partners/tiwall2.jpg", "تیوال"],
          ].map(([image, alt]) => (
            <article key={image} className="partner-card">
              <img src={image} alt={alt} loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="solar-projects solar-scene">
        <p className="solar-kicker">فعالیت‌ها و پروژه‌ها</p>
        <h2>از مسئله تا پروژه</h2>
        <div className="project-empty">
          <span>در حال آماده‌سازی</span>
          <h3>نخستین پروژه‌های خورشید در حال طراحی‌اند.</h3>
          <p>پروژه‌های خورشید پس از ورود به مرحله اجرا، با معرفی مسئله، هدف، شیوه اجرا و نتایج آن‌ها در همین بخش ارائه خواهند شد.</p>
        </div>
      </section>

      <section className="solar-community solar-scene" id="community">
        <p className="solar-kicker">جامعه خورشید</p>
        <h2>یک جامعه، چند مسیر مشارکت</h2>
        <p className="community-lead">هرکس می‌تواند از یک نقطه وارد شود: هنرمند، عضو، متخصص، حامی، سازمان یا شریک؛ و در ادامه، با توجه به توانایی و علاقه خود در شبکه خورشید نقش بگیرد.</p>
        <div className="community-cards">
          {[
            ["هنرمندان و پیشکسوتان", "جامعه خورشید فضایی برای حضور هنرمندان جوان، باسابقه و پیشکسوت و تبدیل تجربه و استعداد هنری به ظرفیت قابل استفاده برای جامعه.", "/images/community/artists-veterans.jpg"],
            ["متخصصان و صاحبان تجربه", "مدیریت، آموزش، پژوهش، رسانه، فناوری، حقوق، کسب‌وکار و دیگر تخصص‌ها می‌توانند در طراحی و اجرای پروژه‌های فرهنگی و اجتماعی نقش داشته باشند.", "/images/community/experts-experienced.jpg"],
            ["همراهان و داوطلبان", "افرادی که بخشی از زمان، مهارت، ارتباطات یا تجربه خود را در اختیار برنامه‌ها و فعالیت‌های خورشید قرار می‌دهند.", "/images/community/volunteers-companions.jpg"],
            ["شرکا و حامیان", "شرکت‌ها، برندها، سازمان‌ها و افراد می‌توانند با حمایت مالی، تخصص، امکانات یا شبکه ارتباطی در پروژه‌های خورشید همراه شوند.", "/images/community/partners-sponsors.jpg"],
          ].map(([title, text, image]) => (
            <article key={title} className="community-card">
              <div className="community-card-image"><img src={image} alt={title} loading="lazy" /></div>
              <div className="community-card-body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="trust-more-link community-more-link" href="/community">آشنایی بیشتر با جامعه خورشید <span aria-hidden="true">←</span></a>
      </section>

      <section className="solar-events solar-scene">
        <p className="solar-kicker">رویدادهای پیش‌رو</p>
        <h2>برنامه‌های خورشید در حال شکل‌گیری است.</h2>
        <div className="event-empty">رویدادها، نشست‌ها و برنامه‌های رسمی خورشید پس از نهایی‌شدن، همراه با تاریخ، موضوع و جزئیات حضور در این بخش منتشر می‌شوند.</div>
      </section>

      <section className="solar-honors solar-scene">
        <div><p className="solar-kicker">باشگاه مفاخر</p><h2>پیوند چهره‌های برجسته فرهنگ و هنر با جامعه خورشید و روایت تجربه نسل‌ها.</h2></div>
        <a className="solar-primary-link" href="/member-club">آشنایی با باشگاه مفاخر <span>←</span></a>
      </section>

      <section className="solar-footer solar-scene">
        <p className="solar-kicker">سازمان مردم‌نهاد خورشید مفاخر</p>
        <h2>یک ایده، یک مسئله یا یک ظرفیت دارید؟</h2>
        <p>ایده، مسئله یا ظرفیتی که دارید می‌تواند با شبکه هنری، تخصصی و اجرایی خورشید به یک مسیر همکاری و پروژه فرهنگی یا اجتماعی قابل اجرا تبدیل شود.</p>
        <div className="solar-actions">
          <a href="/participation#form">همکاری با خورشید</a>
          <a href="/membership" className="ghost">پیوستن به جامعه</a>
        </div>
        <footer>سازمان مردم‌نهاد خورشید مفاخر · ثبت رسمی با شماره ۶۱۷۲۰ · دارای مجوز وزارت کشور · نهاد غیردولتی، غیرانتفاعی، غیرسیاسی و داوطلبانه</footer>
      </section>
      </main>
    </HomeMotion>
  );
}
