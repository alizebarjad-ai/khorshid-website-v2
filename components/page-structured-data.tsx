import Script from "next/script";

const BASE = "https://www.khorshid-mafakher.ir";
const ORG = { "@id": `${BASE}/#organization` };
const SITE = { "@id": `${BASE}/#website` };

const pages: Record<string, Record<string, unknown>> = {
  "/faq": {
    "@type": "FAQPage",
    name: "پرسش‌های متداول خورشید مفاخر",
    description: "پاسخ پرسش‌های رایج درباره هویت، حوزه‌های فعالیت، عضویت، همکاری با برندها و مسیرهای مشارکت در سازمان مردم‌نهاد خورشید مفاخر.",
  },
  "/": {
    "@type": "WebPage",
    name: "خورشید مفاخر | هنر، فرهنگ و اثرگذاری اجتماعی",
    description: "سازمان مردم‌نهاد خورشید مفاخر؛ پیوند هنر، فرهنگ و مسئولیت اجتماعی برای حمایت از هنرمندان و طراحی و اجرای پروژه‌های اثرگذار اجتماعی.",
  },
  "/about": {
    "@type": "AboutPage",
    name: "درباره خورشید مفاخر",
    description: "آشنایی با سازمان مردم‌نهاد خورشید مفاخر، مأموریت، رویکرد و جایگاه آن در حوزه هنر، فرهنگ و مسئولیت اجتماعی.",
  },
  "/governance": {
    "@type": "WebPage",
    name: "حکمرانی و ساختار خورشید مفاخر",
    description: "ساختار سازمانی و چارچوب حکمرانی سازمان مردم‌نهاد خورشید مفاخر.",
  },
  "/mission": {
    "@type": "WebPage",
    name: "مأموریت و چشم‌انداز خورشید مفاخر",
    description: "مأموریت، چشم‌انداز، ارزش‌ها و مسیر اثرگذاری اجتماعی خورشید مفاخر از طریق هنر.",
  },
  "/activity-areas": {
    "@type": "CollectionPage",
    name: "حوزه‌های فعالیت خورشید مفاخر",
    description: "حوزه‌های فعالیت و تمرکز سازمان مردم‌نهاد خورشید مفاخر در حمایت از هنرمندان، هنر و مسائل اجتماعی و حوزه‌های مکمل.",
  },
  "/arms": {
    "@type": "CollectionPage",
    name: "بازوهای اجرایی خورشید مفاخر",
    description: "بازوهای اجرایی خورشید مفاخر در رسانه و تولید محتوا، تلویزیون اینترنتی، پروژه‌های اجتماعی و آموزش، پژوهش و نوآوری.",
    mainEntity: {
      "@type": "ItemList",
      name: "بازوهای اجرایی خورشید مفاخر",
      numberOfItems: 4,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "رسانه و تولید محتوا", url: `${BASE}/media` },
        { "@type": "ListItem", position: 2, name: "تلویزیون اینترنتی", url: `${BASE}/tv` },
        { "@type": "ListItem", position: 3, name: "توسعه پروژه‌های اجتماعی", url: `${BASE}/projects-social` },
        { "@type": "ListItem", position: 4, name: "توسعه آموزش، پژوهش و نوآوری", url: `${BASE}/education` },
      ],
    },
  },
  "/media": {
    "@type": "WebPage",
    name: "رسانه و تولید محتوا",
    description: "بازوی رسانه و تولید محتوای خورشید مفاخر در حوزه‌های فرهنگی، هنری و اجتماعی.",
  },
  "/media/studio": {
    "@type": "WebPage",
    name: "استودیو تولید خورشید",
    description: "استودیو تولید خورشید به‌عنوان زیرساخت تولید و ضبط برنامه‌های تصویری، گفت‌وگو، مستند و محتوای فرهنگی و اجتماعی در بازوی رسانه خورشید مفاخر.",
  },
  "/tv": {
    "@type": "WebPage",
    name: "تلویزیون اینترنتی خورشید",
    description: "تلویزیون اینترنتی خورشید مفاخر برای تولید و انتشار برنامه‌ها و محتوای تصویری فرهنگی، هنری و اجتماعی.",
  },
  "/education": {
    "@type": "WebPage",
    name: "آموزش، پژوهش و نوآوری",
    description: "بازوی آموزش، پژوهش و نوآوری خورشید مفاخر در توسعه ظرفیت‌های فرهنگی و هنری.",
  },
  "/projects-social": {
    "@type": "CollectionPage",
    name: "پروژه‌های اجتماعی خورشید مفاخر",
    description: "طراحی و اجرای پروژه‌های فرهنگی و اجتماعی خورشید مفاخر با مشارکت هنرمندان، متخصصان، سازمان‌ها و حامیان.",
    mainEntity: {
      "@type": "Project",
      "@id": `${BASE}/projects-social#project-arm`,
      name: "بازوی توسعه پروژه‌های اجتماعی خورشید مفاخر",
      description: "طراحی، توسعه و اجرای پروژه‌های فرهنگی و اجتماعی با مشارکت هنرمندان، متخصصان، سازمان‌ها و حامیان.",
      url: `${BASE}/projects-social`,
      parentOrganization: ORG,
    },
  },
  "/community": {
    "@type": "WebPage",
    name: "جامعه خورشید",
    description: "شبکه هنرمندان، متخصصان، پیشکسوتان، داوطلبان، حامیان و همراهان سازمان مردم‌نهاد خورشید مفاخر.",
  },
  "/member-club": {
    "@type": "WebPage",
    name: "باشگاه اعضای خورشید",
    description: "باشگاه اعضای خورشید مفاخر و مسیرهای ارتباط، مشارکت و استفاده از ظرفیت‌های جامعه خورشید.",
  },
  "/membership": {
    "@type": "WebPage",
    name: "عضویت در جامعه خورشید",
    description: "درخواست عضویت در جامعه خورشید مفاخر و آغاز مسیر مشارکت در برنامه‌ها، باشگاه‌ها و پروژه‌های فرهنگی و اجتماعی.",
  },
  "/partnership": {
    "@type": "WebPage",
    name: "همکاری سازمانی و راهبردی",
    description: "همکاری سازمان‌ها و شرکت‌ها با خورشید مفاخر برای طراحی و اجرای پروژه‌های فرهنگی، هنری، رسانه‌ای و مسئولیت اجتماعی.",
  },
  "/participation": {
    "@type": "WebPage",
    name: "مشارکت با خورشید مفاخر",
    description: "مسیرهای مشارکت، حمایت، همکاری تخصصی و تعریف پروژه با سازمان مردم‌نهاد خورشید مفاخر.",
    mainEntity: {
      "@type": "ItemList",
      name: "مسیرهای مشارکت با خورشید مفاخر",
      numberOfItems: 6,
      itemListElement: ["هنرمند", "عضو", "متخصص", "حامی", "سازمان", "شریک"].map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        url: `${BASE}/participation#form`,
      })),
    },
  },
  "/contact": {
    "@type": "ContactPage",
    name: "تماس با خورشید مفاخر",
    description: "اطلاعات تماس و راه‌های ارتباط با سازمان مردم‌نهاد خورشید مفاخر در تهران.",
    mainEntity: {
      "@type": "ContactPoint",
      telephone: "+982166436007",
      contactType: "customer service",
      availableLanguage: ["fa"],
      url: `${BASE}/contact`,
      areaServed: "IR",
    },
  },
  "/legal": {
    "@type": "WebPage",
    name: "اطلاعات رسمی و ثبتی سازمان مردم‌نهاد خورشید مفاخر",
    description: "مشخصات حقوقی، ثبتی و رسمی سازمان مردم‌نهاد خورشید مفاخر.",
    mainEntity: {
      "@type": "FAQPage",
      "@id": `${BASE}/legal#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "نام رسمی خورشید مفاخر چیست؟",
          acceptedAnswer: { "@type": "Answer", text: "نام رسمی سازمان، «سازمان مردم‌نهاد خورشید مفاخر» است." },
        },
        {
          "@type": "Question",
          name: "شماره ثبت خورشید مفاخر چیست؟",
          acceptedAnswer: { "@type": "Answer", text: "شماره ثبت سازمان ۶۱۷۲۰ است." },
        },
        {
          "@type": "Question",
          name: "تاریخ ثبت خورشید مفاخر چه زمانی است؟",
          acceptedAnswer: { "@type": "Answer", text: "تاریخ ثبت سازمان ۳۱/۶/۱۴۰۵ است." },
        },
        {
          "@type": "Question",
          name: "مرجع ثبت خورشید مفاخر کدام است؟",
          acceptedAnswer: { "@type": "Answer", text: "مرجع ثبت سازمان، سازمان ثبت اسناد و املاک کشور است." },
        },
        {
          "@type": "Question",
          name: "مجوز فعالیت خورشید مفاخر را کدام نهاد صادر کرده است؟",
          acceptedAnswer: { "@type": "Answer", text: "مرجع صدور مجوز فعالیت سازمان، وزارت کشور است." },
        },
      ],
    },
  },
  "/about/approach": {
    "@type": "WebPage",
    name: "رویکرد و شیوه فعالیت خورشید",
    description: "رویکرد خورشید برای شناسایی مسئله، طراحی راهکار، ترکیب ظرفیت‌ها، اجرا و سنجش اثر با تکیه بر هنر، رسانه و شبکه همکاری.",
  },
};

const breadcrumbs: Record<string, Array<[string, string]>> = {
  "/about": [["درباره خورشید", "/about"]],
  "/governance": [["درباره خورشید", "/about"], ["ساختار و ارکان", "/governance"]],
  "/mission": [["درباره خورشید", "/about"], ["مأموریت و چشم‌انداز", "/mission"]],
  "/activity-areas": [["درباره خورشید", "/about"], ["حوزه‌های فعالیت", "/activity-areas"]],
  "/about/approach": [["درباره خورشید", "/about"], ["رویکرد و شیوه فعالیت", "/about/approach"]],
  "/legal": [["درباره خورشید", "/about"], ["اطلاعات رسمی و ثبتی", "/legal"]],
  "/arms": [["بازوهای اجرایی", "/arms"]],
  "/media": [["بازوهای اجرایی", "/arms"], ["رسانه و تولید محتوا", "/media"]],
  "/media/studio": [["بازوهای اجرایی", "/arms"], ["رسانه و تولید محتوا", "/media"], ["استودیو تولید خورشید", "/media/studio"]],
  "/tv": [["بازوهای اجرایی", "/arms"], ["تلویزیون اینترنتی", "/tv"]],
  "/projects-social": [["بازوهای اجرایی", "/arms"], ["پروژه‌های اجتماعی", "/projects-social"]],
  "/education": [["بازوهای اجرایی", "/arms"], ["آموزش، پژوهش و نوآوری", "/education"]],
  "/community": [["جامعه خورشید", "/community"]],
  "/member-club": [["جامعه خورشید", "/community"], ["باشگاه اعضای خورشید", "/member-club"]],
  "/membership": [["جامعه خورشید", "/community"], ["پیوستن به خورشید", "/membership"]],
  "/partnership": [["همکاری", "/partnership"]],
  "/participation": [["همکاری", "/partnership"], ["مسیرهای مشارکت", "/participation"]],
  "/contact": [["درباره خورشید", "/about"], ["تماس با ما", "/contact"]],
};

const relatedLinks: Record<string, string[]> = {
  "/about": ["/mission", "/governance", "/about/approach", "/activity-areas", "/legal"],
  "/governance": ["/about", "/mission", "/arms", "/contact"],
  "/mission": ["/about", "/about/approach", "/activity-areas", "/participation"],
  "/activity-areas": ["/about", "/mission", "/projects-social", "/community"],
  "/about/approach": ["/mission", "/activity-areas", "/arms", "/partnership", "/participation"],
  "/legal": ["/about", "/governance", "/contact"],
  "/arms": ["/about/approach", "/activity-areas", "/media", "/tv", "/projects-social", "/education"],
  "/media": ["/arms", "/community", "/projects-social", "/participation"],
  "/media/studio": ["/media", "/tv", "/participation"],
  "/tv": ["/arms", "/media", "/projects-social"],
  "/projects-social": ["/arms", "/activity-areas", "/partnership", "/participation"],
  "/education": ["/arms", "/activity-areas", "/community", "/participation"],
  "/community": ["/member-club", "/membership", "/participation", "/activity-areas"],
  "/member-club": ["/community", "/membership", "/participation"],
  "/membership": ["/community", "/member-club", "/participation"],
  "/partnership": ["/participation", "/projects-social", "/media", "/about/approach"],
  "/participation": ["/partnership", "/community", "/membership", "/projects-social", "/contact"],
  "/contact": ["/about", "/legal", "/participation"],
};

export function PageStructuredData({ path }: { path: string }) {
  const page = pages[path];
  if (!page) return null;

  const crumbs = breadcrumbs[path] ?? [["خورشید مفاخر", "/"]];
  const breadcrumbSchema = [
    { "@type": "ListItem", position: 1, name: "خورشید مفاخر", item: `${BASE}/` },
    ...crumbs.map(([name, href], index) => ({
      "@type": "ListItem",
      position: index + 2,
      name,
      item: `${BASE}${href}`,
    })),
  ];

  const data = {
    "@context": "https://schema.org",
    ...page,
    "@id": `${BASE}${path}#webpage`,
    url: `${BASE}${path}`,
    inLanguage: "fa-IR",
    isPartOf: SITE,
    about: ORG,
    publisher: ORG,
    mainEntity: page.mainEntity ?? ORG,
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `${BASE}${path}#breadcrumb`,
      itemListElement: breadcrumbSchema,
    },
    relatedLink: (relatedLinks[path] ?? []).map((href) => `${BASE}${href}`),
  };

  return (
    <Script
      id={`structured-data-${path.replace(/[^a-z0-9]/gi, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
