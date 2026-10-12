import Link from "next/link";

export function SiteFooter() {
  const navigationGroups = [
    {
      title: "هویت و ساختار",
      links: [
        ["درباره خورشید", "/about"],
        ["مأموریت و چشم‌انداز", "/mission"],
        ["ساختار و ارکان", "/governance"],
        ["رویکرد و شیوه فعالیت", "/about/approach"],
        ["اطلاعات رسمی و ثبتی", "/legal"],
        ["پرسش‌های متداول", "/faq"],
      ],
    },
    {
      title: "فعالیت و اجرا",
      links: [
        ["حوزه‌های فعالیت", "/activity-areas"],
        ["بازوهای اجرایی", "/arms"],
        ["رسانه و تولید محتوا", "/media"],
        ["تلویزیون اینترنتی", "/tv"],
        ["پروژه‌های اجتماعی", "/projects-social"],
        ["آموزش، پژوهش و نوآوری", "/education"],
      ],
    },
    {
      title: "جامعه و همکاری",
      links: [
        ["جامعه خورشید", "/community"],
        ["باشگاه اعضای خورشید", "/member-club"],
        ["همکاری سازمانی", "/partnership"],
        ["مسیرهای مشارکت", "/participation"],
        ["پیوستن به خورشید", "/membership"],
      ],
    },
  ] as const;

  return (
    <footer className="site-footer" dir="rtl">
      <div className="container-site site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__logo" aria-label="خورشید مفاخر">
            <span className="site-footer__mark" aria-hidden="true">☼</span>
            <span>خورشید مفاخر</span>
          </Link>
          <p>
            سازمان مردم‌نهاد، غیرانتفاعی و غیرسیاسی؛
            پیوند هنر، فرهنگ و مسئولیت اجتماعی برای خلق اثر ماندگار.
          </p>
        </div>

        {navigationGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            <ul className="space-y-1.5">
              {group.links.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="site-footer__contact">
          <h2>ارتباط با ما</h2>
          <address>
            تهران، خیابان فاطمی غربی، قبل از خیابان سیندخت،
            پلاک ۲۹۷، طبقه ۳، واحد ۷
          </address>
          <a href="tel:+982166436007">۰۲۱-۶۶۴۳۶۰۰۷</a>
          <a href="/contact">صفحه تماس و اطلاعات بیشتر</a>
        </div>
      </div>

      <div className="container-site site-footer__portal-wrap">
        <div className="site-footer__portal">
          <div className="site-footer__portal-copy">
            <span className="site-footer__portal-icon" aria-hidden="true">↗</span>
            <div>
              <h2>سامانه داخلی خورشید</h2>
              <p>دسترسی اعضا و همکاران مجاز به فضای داخلی سازمان</p>
            </div>
          </div>
          <a href="https://portal.khorshid.ir" target="_blank" rel="noopener noreferrer" className="site-footer__portal-link">
            ورود به سامانه داخلی <span aria-hidden="true">←</span>
          </a>
        </div>
      </div>

      <div className="container-site site-footer__bottom">
        <span>© ۱۴۰۵ سازمان مردم‌نهاد خورشید مفاخر</span>
        <span>شماره ثبت: ۶۱۷۲۰</span>
      </div>
    </footer>
  );
}
