import { SiteIcon } from "./ui-icons";
import { SiteShell } from "./site-shell";
import { SpecialtyClubsGrid } from "./specialty-clubs-grid";
import { InteractiveImageCards } from "./interactive-image-cards";
import { ExpandableIntro } from "./expandable-intro";

export type PageSpec = {
  title: string;
  eyebrow: string;
  intro: string;
  sections?: { title: string; text: string; items?: string[]; icon?: import("./ui-icons").SiteIconName }[];
  cards?: { title: string; text: string; href?: string; image?: string }[];
  cta?: { label: string; href: string };
  empty?: string;
};

const specs: Record<string, PageSpec> = {
  about: {
    eyebrow: "درباره خورشید مفاخر",
    title: "سازمان مردم‌نهاد خورشید مفاخر؛ پیوند هنر، انسان و جامعه",
    intro: "سازمان مردم‌نهاد خورشید مفاخر یک سازمان غیردولتی، غیرانتفاعی، غیرسیاسی و داوطلبانه است که با تکیه بر ظرفیت هنر، شبکه هنرمندان، مشارکت اجتماعی و همکاری با نهادها و حامیان فعالیت می‌کند. خورشید مفاخر تلاش می‌کند میان ایده، توان تخصصی، منابع و فرصت اجرا ارتباطی روشن ایجاد کند تا فعالیت‌های فرهنگی و اجتماعی از مرحله ایده تا اثر قابل مشاهده پیش بروند.",
    sections: [
      { title: "شناسنامه رسمی خورشید", text: "نام رسمی: سازمان مردم‌نهاد خورشید مفاخر. ماهیت حقوقی: سازمان غیردولتی، غیرانتفاعی، غیرسیاسی و داوطلبانه. وضعیت ثبت: ثبت‌شده در سازمان ثبت اسناد کشور. شماره ثبت: ۶۱۷۲۰. مرجع صدور مجوز: وزارت کشور. تاریخ ثبت: ۳۱ شهریور ۱۴۰۵. محل فعالیت: تهران، خیابان فاطمی غربی، بین خیابان کارگر و خیابان سیندخت، پلاک ۲۹۷، طبقه ۳، واحد ۷." },
      { title: "داستان شکل‌گیری خورشید", text: "خورشید مفاخر از یک ایده ساده شکل گرفت: اینکه هنر فقط برای تماشا و مصرف فرهنگی نیست؛ می‌تواند به زبان گفت‌وگو، ابزار همدلی و وسیله‌ای برای مواجهه با مسائل واقعی جامعه تبدیل شود. این ایده به‌تدریج به طراحی یک نهاد مستقل فرهنگی و اجتماعی انجامید؛ نهادی که بتواند هنرمندان، متخصصان، اعضا، حامیان و سازمان‌ها را در یک مسیر مشترک کنار هم قرار دهد. پس از طی مسیر اخذ مجوز و شکل‌گیری ارکان، خورشید در ۳۱ شهریور ۱۴۰۵ به ثبت رسمی رسید و وارد مرحله‌ای تازه برای تبدیل این ایده و شبکه انسانی به نهادی پایدار شد." },
      { title: "خورشید چیست؟", text: "خورشید بستری برای جمع کردن ظرفیت‌های پراکنده در حوزه هنر و جامعه است؛ بستری که هنرمند، عضو، متخصص، سازمان، حامی و شریک راهبردی می‌تواند در آن نقش مشخصی داشته باشد. خورشید در جایگاه نهاد راهبر، چارچوب فعالیت، شبکه همکاری و مسیرهای مشارکت را توسعه می‌دهد و برای اجرای فعالیت‌ها از ظرفیت تیم‌ها و بازوهای اجرایی خود استفاده می‌کند." },
      { title: "جایگاه خورشید", text: "خورشید صاحب شخصیت و مأموریت اجتماعی مستقل خود است و در کنار شبکه اعضا، هنرمندان، متخصصان، حامیان و شرکای راهبردی، هسته راهبری اکوسیستم خورشید را تشکیل می‌دهد. مدل‌های رسانه‌ای، اقتصادی و اجرایی در این ساختار ابزارهایی برای پایداری، توسعه و افزایش دامنه اثرگذاری مأموریت اجتماعی هستند، نه هدفی مستقل از آن." },
    ],
    cards: [
      { title: "ساختار و ارکان", text: "شناخت ارکان، مسئولیت‌ها و ساختار رسمی راهبری سازمان مردم‌نهاد خورشید مفاخر.", href: "/governance" },
      { title: "مأموریت و چشم‌انداز", text: "آشنایی با مأموریت اصلی، جهت‌گیری بلندمدت و منطق فعالیت خورشید.", href: "/mission" },
      { title: "حوزه‌های فعالیت", text: "مروری بر حوزه‌هایی که مأموریت خورشید را به برنامه‌ها و فعالیت‌های مشخص تبدیل می‌کنند.", href: "/activity-areas" },
      { title: "جامعه خورشید", text: "آشنایی با اعضا، هنرمندان، مفاخر و مشارکت‌کنندگانی که شبکه انسانی خورشید را شکل می‌دهند.", href: "/community" },
    ],
  },
  governance: {
    eyebrow: "ساختار و ارکان",
    title: "ساختار خورشید چگونه شکل گرفته است؟",
    intro: "خورشید مفاخر به‌عنوان یک سازمان مردم‌نهاد، میان راهبری رسمی سازمان، مدیریت اجرایی و ظرفیت‌های انسانی و تخصصی خود تفکیک روشنی ایجاد می‌کند. این ساختار کمک می‌کند مسئولیت تصمیم‌گیری و نظارت از اجرای برنامه‌ها و مشارکت در پروژه‌ها متمایز باشد.",
    sections: [],
    cards: [
      { title: "مأموریت و چشم‌انداز", text: "چرایی شکل‌گیری خورشید، جهت‌گیری بلندمدت و مسیری که سازمان برای ایجاد اثر دنبال می‌کند.", href: "/mission" },
      { title: "بازوهای اجرایی", text: "ظرفیت‌های تخصصی و اجرایی که ایده‌ها و برنامه‌های خورشید را به تولید، اجرا و پروژه تبدیل می‌کنند.", href: "/arms" },
      { title: "جامعه خورشید", text: "شبکه انسانی شامل هنرمندان، متخصصان، اعضا، داوطلبان، حامیان و مشارکت‌کنندگان.", href: "/community" },
    ],
  },
  "mission": {
    eyebrow: "مأموریت و چشم‌انداز",
    title: "اثرگذاری اجتماعی از مسیر هنر",
    intro: "رسیدگی به معضلات و آسیب‌های اجتماعی از طریق ظرفیت‌های هنر، و همزمان حمایت حرفه‌ای و پایدار از هنرمندان و توسعه اکوسیستم هنر ایران؛ به‌گونه‌ای که برندها، صنایع، بانک‌ها، هلدینگ‌ها و نهادهای دولتی نیز از طریق مشارکت معتبر و اثرگذار در این مسیر دیده شوند.",
    sections: [
      { title: "چشم‌انداز پنج‌ساله", text: "تثبیت خورشید به‌عنوان مرجع شناخته‌شده کشور در تلاقی هنر و مسئولیت اجتماعی؛ تبدیل رسانه و تلویزیون اینترنتی وابسته به مرجع روایت اکوسیستم هنر ایران در فضای دیجیتال؛ و ایجاد شبکه‌ای از شرکت‌های وابسته پایدار برای کاهش اتکا به کمک‌های دولتی و خیرین، بدون الزام به مالکیت اکثریت خورشید در آن‌ها." },
      { title: "اصل مأموریتی", text: "اثرگذاری اجتماعی از طریق هنر در هسته مأموریت است. مدل مالی و رسانه‌ای ابزار تأمین مالی و توسعه پایدار این مأموریت است، نه هدف مستقل از آن." },
    ],
    cta: { label: "حوزه‌های فعالیت", href: "/activity-areas" },
  },
  "activity-areas": {
    eyebrow: "حوزه‌های فعالیت",
    title: "خورشید در چه زمینه‌هایی فعالیت می‌کند؟",
    intro: "فعالیت‌های خورشید در شش حوزه اصلی شکل گرفته است؛ دو محور «حمایت از هنرمندان» و «هنر و مسائل اجتماعی» هسته اصلی این فعالیت‌ها را تشکیل می‌دهند و چهار حوزه دیگر، ظرفیت‌های رسانه‌ای، مشارکتی، پژوهشی و شبکه انسانی مورد نیاز را تکمیل می‌کنند.\n\nحوزه‌های حمایتی و مسائل اجتماعی هدف، دو فهرست مستقل در کنار این شش حوزه نیستند؛ بلکه به‌ترتیب زیرمجموعه «حمایت از هنرمندان» و «هنر و مسائل اجتماعی» هستند و دامنه فعالیت هرکدام را روشن می‌کنند.",
    sections: [],
  },
  arms: {
    eyebrow: "بازوهای اجرایی",
    title: "بازوهای اجرایی خورشید؛ از ایده تا اجرا",
    intro: "خورشید برای تبدیل ایده‌ها، برنامه‌ها و نیازهای فرهنگی و اجتماعی به خروجی قابل اجرا، از چهار ظرفیت تخصصی استفاده می‌کند. هر بازو مأموریت و ظرفیت مشخصی دارد و می‌تواند به‌صورت مستقل یا در کنار بازوهای دیگر، در پروژه‌های خورشید فعال شود.\n\nرسانه و تولید محتوا، تلویزیون اینترنتی، توسعه پروژه‌های اجتماعی، و توسعه آموزش، پژوهش و نوآوری، ظرفیت اجرایی این ساختار را شکل می‌دهند. بسته به ماهیت پروژه، این ظرفیت‌ها با هنرمندان، متخصصان، سازمان‌ها و حامیان شبکه خورشید ترکیب می‌شوند تا مسیر از طراحی تا اجرا و روایت اثر شکل بگیرد.",
    cards: [
      { title: "رسانه و تولید محتوا", text: "تولید و توسعه محتوای حرفه‌ای با تکیه بر تیم رسانه و زیرساخت‌هایی مانند استودیو تولید خورشید برای روایت فعالیت‌ها، پروژه‌ها و همکاری‌های فرهنگی و اجتماعی.", href: "/media", image: "/images/arms/media-arm2.jpg" },
      { title: "تلویزیون اینترنتی", text: "بستر مستقل انتشار برنامه‌ها، گفت‌وگوها، مستندها و روایت‌های تصویری خورشید.", href: "/tv", image: "/images/arms/tv-arm2.jpg" },
      { title: "توسعه پروژه‌های اجتماعی", text: "تبدیل مسائل اجتماعی به پروژه‌های قابل اجرا و قابل گزارش؛ از شناخت مسئله تا اجرا، روایت و سنجش اثر.", href: "/projects-social", image: "/images/arms/social-projects-arm2.jpg" },
      { title: "توسعه آموزش، پژوهش و نوآوری", text: "توسعه ظرفیت‌های آموزشی، پژوهشی و نوآورانه؛ از هنرستان و کارگاه‌های تخصصی تا مطالعه، پرورش استعداد و تبدیل ایده به تجربه.", href: "/education", image: "/images/arms/education-arm2.jpg" },
    ],
  },
  tv: {
    eyebrow: "تلویزیون اینترنتی",
    title: "تلویزیون اینترنتی خورشید؛ رسانه‌ای برای روایت هنر و اثر اجتماعی",
    intro: "تلویزیون اینترنتی خورشید مفاخر، ظرفیت اختصاصی سازمان برای تولید، گردآوری و انتشار محتوای تصویری درباره هنر، هنرمندان و فعالیت‌های فرهنگی و اجتماعی است. این بستر می‌تواند گفت‌وگوها، برنامه‌های موضوعی، مستندها و گزارش رویدادها را در یک مسیر رسانه‌ای منسجم کنار هم قرار دهد؛ مسیری که هم آثار و تجربه‌های هنرمندان را به مخاطبان معرفی می‌کند و هم نتایج پروژه‌های اجتماعی را از دل اجرا به روایت قابل مشاهده تبدیل می‌سازد. اتصال این ظرفیت به شبکه هنرمندان، بازوی رسانه و پروژه‌های مشارکتی، امکان شکل‌گیری تولیدات مستقل و همکاری‌های رسانه‌ای هدفمند را فراهم می‌کند.",
    sections: [
      {
        title: "روایت تصویری از هنر و جامعه",
        text: "تلویزیون اینترنتی خورشید می‌تواند میزبان گفت‌وگو با هنرمندان و مفاخر، معرفی آثار و تجربه‌های حرفه‌ای، برنامه‌های فرهنگی، مستندهای کوتاه و گزارش رویدادها باشد. در کنار محتوای هنری، این بستر فرصتی برای روایت مسائل اجتماعی، معرفی راه‌حل‌ها و ثبت تجربه‌های میدانی پروژه‌ها فراهم می‌کند؛ به‌گونه‌ای که مخاطب تنها با خبر یک فعالیت روبه‌رو نباشد، بلکه زمینه، مسیر اجرا و نتیجه آن را نیز بشناسد. هدف، شکل‌دادن به محتوایی معتبر، دیدنی و مرتبط با مأموریت خورشید است.",
      },
      {
        title: "پیوند تولید محتوا با شبکه اجرایی خورشید",
        text: "تلویزیون اینترنتی در کنار رسانه و تولید محتوا، بخشی از یک زنجیره به‌هم‌پیوسته است: موضوع و ایده انتخاب می‌شود، محتوای مناسب طراحی و تولید می‌شود و سپس از مسیر انتشار تصویری در اختیار مخاطبان قرار می‌گیرد. این پیوند امکان می‌دهد یک رویداد، فعالیت هنری یا پروژه اجتماعی فقط به یک گزارش کوتاه محدود نماند و در قالب‌های متناسب، از گفت‌وگو و گزارش تا روایت مستند، توسعه پیدا کند. ترکیب توان تولید، دسترسی به هنرمندان و شناخت موضوعات اجتماعی، پایه شکل‌گیری هویت متمایز این رسانه خواهد بود.",
      },
      {
        title: "فرصتی برای همکاری برندها و حامیان",
        text: "برای سازمان‌ها، شرکت‌ها و برندها، این ظرفیت می‌تواند بستری حرفه‌ای برای همراهی با برنامه‌های فرهنگی و اجتماعی و روایت مسئولیت اجتماعی باشد. همکاری‌ها می‌توانند متناسب با هدف پروژه در قالب حمایت از یک برنامه، تولید محتوای مشترک، پوشش رویداد یا مستندسازی نتایج تعریف شوند؛ با توجه به تناسب موضوع، کیفیت محتوا و شفافیت نقش هر شریک. به این ترتیب، مشارکت حامیان در کنار پشتیبانی از یک هدف فرهنگی یا اجتماعی، به تجربه‌ای مستند و قابل ارائه تبدیل می‌شود.",
      },
    ],
    cards: [],
    cta: { label: "پیشنهاد همکاری رسانه‌ای", href: "/participation#form" },
  },
  news: {
    eyebrow: "اخبار و روایت‌ها",
    title: "آخرین خبرها و روایت‌های خورشید",
    intro: "در این بخش، خبرها و روایت‌های مرتبط با فعالیت‌های خورشید، برنامه‌ها، رویدادها، پروژه‌ها، هنرمندان و همراهان خورشید منتشر می‌شود.",
    sections: [
      { title: "اخبار خورشید", text: "خبرهای رسمی مربوط به فعالیت‌ها، برنامه‌ها، رویدادها و اتفاقات مهم خورشید در این بخش قرار می‌گیرد." },
      { title: "روایت پروژه‌ها", text: "پروژه‌های اجراشده و در حال اجرا از زاویه فعالیت انجام‌شده، حضور هنرمندان، نتیجه کار و تجربه مشارکت‌کنندگان روایت می‌شوند." },
      { title: "رویدادها و برنامه‌ها", text: "گزارش و تصاویر برنامه‌ها، نشست‌ها، رویدادهای هنری و اجتماعی و سایر فعالیت‌های عمومی خورشید در این بخش منتشر خواهد شد." },
      { title: "اخبار جامعه خورشید", text: "خبرها و روایت‌های مرتبط با اعضا، هنرمندان، مفاخر، همراهان و شرکای خورشید نیز در این بخش بازتاب پیدا می‌کند." }
    ],
    cards: [
      { title: "اخبار خورشید", text: "آخرین خبرهای رسمی و اطلاعیه‌های مرتبط با فعالیت‌های خورشید." },
      { title: "گزارش رویدادها", text: "گزارش، تصویر و روایت برنامه‌ها و رویدادهای برگزارشده." },
      { title: "روایت پروژه‌ها", text: "داستان شکل‌گیری، اجرا و نتیجه پروژه‌های خورشید." },
      { title: "هنرمندان و مفاخر", text: "خبرها و روایت‌های مرتبط با هنرمندان، اعضا و مفاخر همراه خورشید." },
      { title: "همراهان و شرکا", text: "اخبار همکاری‌ها و فعالیت‌های مشترک با سازمان‌ها، برندها و مجموعه‌های همراه." },
      { title: "تصویر و ویدئو", text: "محتوای تصویری مرتبط با خبرها و روایت‌های منتشرشده." }
    ],
    cta: { label: "رسانه و تولید محتوا", href: "/media" }
  },
  partnerships: {
    eyebrow: "همکاری با سازمان‌ها و شرکت‌ها",
    title: "یک مسیر روشن برای همکاری سازمانی با خورشید",
    intro: "سازمان‌ها، شرکت‌ها و برندها می‌توانند متناسب با هدف و ظرفیت خود از سه مسیر با خورشید همکاری کنند: حمایت مالی، همکاری رسانه‌ای یا تعریف پروژه مسئولیت اجتماعی. این صفحه مرجع واحد همکاری سازمانی است و سابقه همکاری‌های نهایی‌شده نیز در همین مسیر معرفی خواهد شد.",
    sections: [
      { title: "حمایت مالی و اسپانسرینگ", text: "اگر مجموعه شما می‌خواهد از فعالیت‌ها، برنامه‌ها یا پروژه‌های خورشید حمایت مالی کند، می‌توانیم متناسب با موضوع و سطح حمایت، چارچوب همکاری، نحوه دیده‌شدن و گزارش‌دهی را مشخص کنیم.", items: ["حمایت از برنامه یا رویداد", "حمایت از یک پروژه مشخص", "حمایت از تولیدات فرهنگی و هنری", "اسپانسرینگ رسانه‌ای و محتوایی"] },
      { title: "همکاری رسانه‌ای", text: "مجموعه‌ها می‌توانند برای تولید یا انتشار محتوای حرفه‌ای، پوشش رویداد، روایت یک فعالیت یا استفاده از ظرفیت رسانه و تلویزیون اینترنتی خورشید همکاری کنند. نوع همکاری بر اساس موضوع، مخاطب و قالب محتوا تعیین می‌شود.", items: ["تولید محتوای تصویری و ویدئویی", "پوشش و روایت رویدادها", "گفت‌وگو و برنامه‌های رسانه‌ای", "همکاری در انتشار و توسعه محتوا"] },
      { title: "پروژه مسئولیت اجتماعی", text: "اگر سازمان یا برند شما یک هدف اجتماعی مشخص دارد، خورشید می‌تواند آن را با ظرفیت هنر، رسانه و شبکه اجرایی خود به پروژه‌ای تعریف‌شده تبدیل کند؛ پروژه‌ای با گروه هدف، برنامه اجرا، خروجی و امکان گزارش اثرگذاری.", items: ["تعریف مسئله و گروه هدف", "طراحی پروژه و انتخاب ظرفیت تخصصی", "تولید و اجرای برنامه", "مستندسازی و گزارش نتایج"] },
      { title: "ثبت و معرفی همکاری‌ها", text: "پس از نهایی‌شدن همکاری، اطلاعات قابل انتشار مانند نام مجموعه، نوع همکاری، پروژه یا برنامه مرتبط و زمان همکاری در همین مسیر معرفی می‌شود. انتشار نام و نشان هر مجموعه فقط با رضایت آن مجموعه انجام خواهد شد." },
    ],
    cards: [
      { title: "حمایت مالی", text: "حمایت از پروژه‌ها، برنامه‌ها و فعالیت‌های خورشید در قالب حمایت یا اسپانسرینگ.", href: "/participation#form" },
      { title: "همکاری رسانه‌ای", text: "تولید، پوشش، روایت و توسعه محتوای حرفه‌ای با استفاده از ظرفیت رسانه خورشید.", href: "/media" },
      { title: "پروژه مسئولیت اجتماعی", text: "تبدیل یک هدف اجتماعی سازمان به پروژه‌ای مشخص با اجرا و گزارش اثرگذاری.", href: "/participation#form" },
    ],
    cta: { label: "ثبت درخواست همکاری", href: "/participation#form" },
  },
  contact: {
    eyebrow: "ارتباط با خورشید",
    title: "برای شروع یک همکاری، گفتگو یا پروژه با خورشید در ارتباط باشید.",
    intro: "خورشید برای دریافت پیشنهادهای همکاری، پروژه‌های فرهنگی و اجتماعی، مشارکت هنرمندان و متخصصان، درخواست‌های رسانه‌ای و ارتباطات عمومی، یک مسیر روشن برای شروع ارتباط در نظر گرفته است.\n\nاگر موضوع شما نیازمند بررسی و هماهنگی است، درخواست خود را ثبت کنید تا پس از بررسی اولیه به مسیر مربوط ارجاع شود.",
    sections: [
      { title: "اطلاعات رسمی", text: "نشانی دفتر: تهران، خیابان فاطمی غربی، قبل از خیابان سیندخت، پلاک ۲۹۷، طبقه ۳، واحد ۷.\nتلفن رسمی: ۰۲۱-۶۶۴۳۶۰۰۷" },
    ],
    cta: { label: "ثبت درخواست همکاری", href: "/participation#form" },
  },
};

function ExpandableSectionText({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  if (paragraphs.length <= 1) {
    return <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">{text}</p>;
  }
  return (
    <div className="max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
      <p>{paragraphs[0]}</p>
      <details className="group mt-3">
        <summary className="cursor-pointer list-none text-[13px] font-bold text-[#4A78B0] transition hover:text-[#4A78B0]">
          ادامه متن <span className="mr-1 inline-block transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div className="mt-4 space-y-4 border-r border-[#4A78B0]/25 pr-4 text-[13px] leading-8 text-[#4D5B77]">
          {paragraphs.slice(1).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </details>
    </div>
  );
}

function Arrow() { return <span aria-hidden="true">←</span>; }
const fa = (n:number) => String(n).padStart(2,"0").replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export function ArchitecturePage({ slug }: { slug: string }) {
  const spec = specs[slug];
  if (!spec) return null;

  const pageUrl = `https://khorshid-website.vercel.app/${slug}`;
  const relatedLinks: Record<string, { label: string; href: string }[]> = {
    about: [
      { label: "مأموریت و چشم‌انداز", href: "/mission" },
      { label: "حوزه‌های فعالیت", href: "/activity-areas" },
      { label: "رویکرد و شیوه فعالیت", href: "/about/approach" },
      { label: "مسیرهای مشارکت", href: "/participation" },
    ],
    "mission/about": [
      { label: "حوزه‌های فعالیت", href: "/activity-areas" },
      { label: "بازوهای اجرایی", href: "/arms" },
      { label: "همکاری و مشارکت", href: "/participation" },
    ],
    "areas-focus/about": [
      { label: "مأموریت و چشم‌انداز", href: "/mission" },
      { label: "بازوهای اجرایی", href: "/arms" },
      { label: "پروژه‌های اجتماعی", href: "/projects-social" },
    ],
    governance: [
      { label: "بازوهای اجرایی", href: "/arms" },
      { label: "جامعه خورشید", href: "/community" },
      { label: "مسیرهای مشارکت", href: "/participation" },
    ],
    arms: [
      { label: "پروژه‌های اجتماعی", href: "/projects-social" },
      { label: "رسانه و تولید محتوا", href: "/media" },
      { label: "تلویزیون اینترنتی", href: "/tv" },
    ],
  };

  const faqItems = slug === "about" ? [
    { "@type": "Question", name: "خورشید مفاخر چیست؟", acceptedAnswer: { "@type": "Answer", text: "سازمان مردم‌نهاد خورشید مفاخر یک سازمان غیردولتی، غیرانتفاعی، غیرسیاسی و داوطلبانه است که در حوزه هنر، فرهنگ و مسئولیت اجتماعی فعالیت می‌کند." } },
    { "@type": "Question", name: "خورشید مفاخر چه کاری انجام می‌دهد؟", acceptedAnswer: { "@type": "Answer", text: "خورشید از هنرمندان حمایت می‌کند، از ظرفیت هنر برای مواجهه با مسائل اجتماعی استفاده می‌کند و با شبکه متخصصان، سازمان‌ها و حامیان، پروژه‌های فرهنگی و اجتماعی را طراحی و اجرا می‌کند." } },
    { "@type": "Question", name: "چه کسانی می‌توانند با خورشید همکاری کنند؟", acceptedAnswer: { "@type": "Answer", text: "هنرمندان، متخصصان، داوطلبان، سازمان‌ها، شرکت‌ها، نهادهای عمومی، دانشگاه‌ها و حامیان می‌توانند متناسب با ظرفیت و هدف خود در پروژه‌ها و مسیرهای مشارکت خورشید همکاری کنند." } },
    { "@type": "Question", name: "وضعیت حقوقی خورشید مفاخر چیست؟", acceptedAnswer: { "@type": "Answer", text: "خورشید مفاخر یک سازمان مردم‌نهاد ثبت‌شده در سازمان ثبت اسناد کشور با شماره ثبت ۶۱۷۲۰ است و مجوز فعالیت آن از وزارت کشور صادر شده است. تاریخ ثبت آن ۳۱ شهریور ۱۴۰۵ است." } }
  ] : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": slug === "about" ? "AboutPage" : "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: spec.title,
    description: spec.intro.replace(/\n\n/g, " "),
    inLanguage: "fa-IR",
    isPartOf: { "@id": "https://khorshid-website.vercel.app/#website" },
    about: { "@id": "https://khorshid-website.vercel.app/#organization" },
  };
  const faqStructuredData = faqItems.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqItems,
  } : null;
  return <SiteShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    {faqStructuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />}
    <section className={(slug === "areas-focus/about" || slug === "activity-areas") ? "relative min-h-[560px] overflow-hidden border-b border-[#14213D]/10 reveal md:min-h-[650px]" : slug === "arms" ? "relative min-h-[560px] overflow-hidden border-b border-white/10 reveal md:min-h-[680px]" : slug === "tv" ? "relative min-h-[500px] overflow-hidden border-b border-white/10 reveal md:min-h-[680px]" : "site-grid border-b border-[#14213D]/10 reveal"}>
      {(slug === "areas-focus/about" || slug === "activity-areas" || slug === "arms" || slug === "tv") && (
        <div className="absolute inset-0">
          <img
            src={slug === "arms" ? "/images/arms/arms-hero2.jpg" : slug === "tv" ? "/images/arms/tv-hero.jpg" : "/images/areas-focus/areas-focus-about-hero2.jpg"}
            alt={slug === "arms" ? "بازوهای اجرایی خورشید مفاخر" : slug === "tv" ? "تلویزیون اینترنتی خورشید مفاخر" : "حوزه‌های فعالیت خورشید مفاخر"}
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[#FFFFFF]/25" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/85 via-[#FFFFFF]/50 to-[#FFFFFF]/10" />
          {slug === "arms" && <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent" />}
        </div>
      )}
      {false && (
        <div className="absolute inset-0">
          <img
            src="/images/areas-focus/areas-focus-about-hero.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[#FFFFFF]/10" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/65 via-[#FFFFFF]/28 to-transparent" />
        </div>
      )}
      <div className="container-site relative py-16 md:py-24">
        <p className="eyebrow">{spec.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-[34px] font-extrabold leading-[1.6] tracking-tight md:text-[50px]">{spec.title}</h1>
        <ExpandableIntro text={spec.intro} expanded={slug !== "arms"} />
        {spec.cta && <div className={`mt-7 ${slug === "tv" ? "w-full sm:w-auto" : ""}`}><a className={`btn-primary px-6 py-3 text-center text-[13px] ${slug === "tv" ? "flex w-full justify-center sm:inline-flex sm:w-auto" : ""}`} href={spec.cta.href}>{spec.cta.label}</a></div>}
      </div>
    </section>

    <div className="container-site py-14 md:py-20">
      {slug === "about" ? (
        <>
          {spec.sections?.map((section) => (
            <section key={section.title} className="border-t border-white/8 py-14 first:border-t-0 first:pt-0 md:py-20 reveal">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <h2 className="mt-2 text-[24px] font-extrabold leading-[1.7] md:text-[32px]">{section.title}</h2>
                </div>
                <div>
                  <p className="text-[14px] leading-8 text-[#4D5B77]">{section.text}</p>
                  {section.items && <ul className="mt-6 space-y-3 text-[13px] leading-7 text-[#4D5B77]">{section.items.map((item) => <li key={item}>• {item}</li>)}</ul>}
                </div>
              </div>
            </section>
          ))}

          <section className="border-t border-white/8 pt-14 md:pt-20 reveal">
            <div className="max-w-3xl">
              <p className="eyebrow">پاسخ‌های کوتاه</p>
              <h2 className="mt-2 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">خورشید مفاخر دقیقاً چیست و چه می‌کند؟</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">پاسخ‌های زیر برای توضیح سریع جایگاه، فعالیت و مسیر همکاری با خورشید طراحی شده‌اند.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["خورشید مفاخر چیست؟","سازمان مردم‌نهاد خورشید مفاخر یک سازمان غیردولتی، غیرانتفاعی، غیرسیاسی و داوطلبانه است که در حوزه هنر، فرهنگ و مسئولیت اجتماعی فعالیت می‌کند."],
                ["خورشید مفاخر چه کاری انجام می‌دهد؟","خورشید از هنرمندان حمایت می‌کند، از ظرفیت هنر برای مواجهه با مسائل اجتماعی استفاده می‌کند و با شبکه متخصصان، سازمان‌ها و حامیان، پروژه‌های فرهنگی و اجتماعی را طراحی و اجرا می‌کند."],
                ["چه کسانی می‌توانند با خورشید همکاری کنند؟","هنرمندان، متخصصان، داوطلبان، سازمان‌ها، شرکت‌ها، نهادهای عمومی، دانشگاه‌ها و حامیان می‌توانند متناسب با ظرفیت و هدف خود در پروژه‌ها و مسیرهای مشارکت خورشید همکاری کنند."],
                ["وضعیت حقوقی خورشید مفاخر چیست؟","خورشید مفاخر یک سازمان مردم‌نهاد ثبت‌شده در سازمان ثبت اسناد کشور با شماره ثبت ۶۱۷۲۰ است و مجوز فعالیت آن از وزارت کشور صادر شده است. تاریخ ثبت آن ۳۱ شهریور ۱۴۰۵ است."]
              ].map(([question, answer]) => (
                <article key={question} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 md:p-6">
                  <h3 className="text-[17px] font-extrabold leading-8">{question}</h3>
                  <p className="mt-3 text-[13px] leading-8 text-[#4D5B77]">{answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-white/8 pt-14 md:pt-20">
            <p className="eyebrow">اکوسیستم خورشید</p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">از هسته سازمان تا ظرفیت اجرا</h2>
            <div className="mt-5 max-w-4xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
              <p>خورشید مفاخر در کنار شخصیت حقوقی و مأموریت اجتماعی مستقل خود، یک اکوسیستم همکاری و اجرا ایجاد کرده است تا ظرفیت‌های هنر، رسانه، آموزش، مسئولیت اجتماعی و شبکه انسانی را به یک مسیر منسجم متصل کند. در این ساختار، سازمان مردم‌نهاد خورشید مفاخر هسته راهبری و مأموریتی است و بازوهای اجرایی، اعضا، هنرمندان، متخصصان، همراهان و شرکای سازمانی ظرفیت‌های لازم برای طراحی و اجرای برنامه‌ها و پروژه‌ها را فراهم می‌کنند.</p>
              <p className="mt-4">این مدل به خورشید اجازه می‌دهد از مرحله شناسایی مسئله و طراحی راهکار تا تولید، اجرا، مستندسازی و سنجش اثر، ترکیب مناسبی از ظرفیت‌های داخلی و شبکه همکاران را فعال کند. ثبت رسمی سازمان و مجوز وزارت کشور، در کنار این شبکه و بازوهای اجرایی، بستر لازم برای شکل‌دهی به همکاری‌های رسمی و پروژه‌های فرهنگی و اجتماعی را فراهم می‌کند.</p>
              <p className="mt-4">چهار بازوی اجرایی خورشید هرکدام مأموریت مشخصی دارند، اما در پروژه‌های مشترک می‌توانند در کنار یکدیگر فعالیت کنند. به همین دلیل، بازوها شرکت‌ها یا واحدهای منفک از مأموریت سازمان نیستند؛ بلکه ظرفیت‌های تخصصی برای تبدیل مأموریت و فرصت‌های همکاری به خروجی قابل اجرا هستند.</p>
            </div>

            <div className="mt-10">
              <div className="mb-6">
                <h3 className="text-[21px] font-extrabold leading-[1.7] md:text-[25px]">چهار بازوی اجرایی خورشید</h3>
                <p className="mt-2 text-[13px] leading-7 text-[#4D5B77]">هر بازو یک مسیر تخصصی برای اجراست و در صورت نیاز می‌تواند با سایر بازوها و شبکه خورشید در یک پروژه مشترک ترکیب شود.</p>
              </div>
              <InteractiveImageCards cards={[
                { title: "رسانه و تولید محتوا", text: "تولید و توسعه محتوای حرفه‌ای برای روایت فعالیت‌های خورشید، پروژه‌های اجتماعی و فرهنگی و همکاری‌های رسانه‌ای.", icon: "media", image: "/images/arms/media-arm2.jpg", href: "/media" },
                { title: "تلویزیون اینترنتی", text: "تولید و انتشار برنامه‌ها، گفت‌وگوها، مستندها و روایت‌های تصویری در بستر تلویزیون اینترنتی خورشید.", icon: "media", image: "/images/arms/tv-arm2.jpg", href: "/tv" },
                { title: "توسعه پروژه‌های اجتماعی", text: "طراحی و توسعه پروژه‌های اجتماعی و برنامه‌های حمایتی؛ از تعریف مسئله و طراحی مداخله تا اجرا و ارزیابی اثر.", icon: "responsibility", image: "/images/arms/social-projects-arm2.jpg" },
                { title: "توسعه آموزش، پژوهش و نوآوری", text: "توسعه آموزش‌های هنری، کارگاه‌ها و مسیرهای پرورش استعداد با تمرکز بر انتقال مهارت و ایجاد فرصت برای نسل‌های تازه.", icon: "education", image: "/images/arms/education-arm2.jpg", href: "/education" },
              ]} />
            </div>
          </section>
        </>
      ) : slug === "clubs" ? (
        <section className="border-t border-white/8 pt-12 md:pt-16">
          <p className="eyebrow">۸ مسیر تخصصی</p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">باشگاه‌ها را انتخاب کنید</h2>
          <p className="mt-3 max-w-3xl text-[13px] leading-7 text-[#4D5B77]">
            هر کارت تصویر و هویت بصری باشگاه را نشان می‌دهد. با انتخاب کارت، توضیحات کامل همان باشگاه نمایش داده می‌شود و با برداشتن موس، تصویر دوباره برمی‌گردد.
          </p>
          <SpecialtyClubsGrid
            clubs={(spec.sections ?? []).map((section, index) => ({
              title: section.title,
              text: section.text,
              icon: section.icon ?? "art",
              image: [
                "/images/clubs/club-media.jpg",
                "/images/clubs/club-cinema.jpg",
                "/images/clubs/club-music.jpg",
                "/images/clubs/club-literature.jpg",
                "/images/clubs/club-visual2.jpg",
                "/images/clubs/club-social2.jpg",
                "/images/clubs/club-education2.jpg",
                "/images/clubs/club-networking2.jpg",
              ][index],
            }))}
          />
        </section>
      ) : (slug === "areas-focus/about" || slug === "activity-areas") ? (
        <section className="space-y-16 md:space-y-24">
          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <p className="eyebrow">ساختار فعالیت‌ها</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">دو محور اصلی و چهار حوزه مکمل</h2>
              <ExpandableSectionText text={"دو محور اصلی، جهت‌گیری محتوایی فعالیت‌های خورشید را مشخص می‌کنند: حمایت از هنرمندان و استفاده از هنر و فرهنگ برای مواجهه با مسائل اجتماعی. چهار حوزه مکمل نیز ظرفیت‌های لازم برای توسعه، روایت، پژوهش و شبکه‌سازی این فعالیت‌ها را فراهم می‌کنند.\n\nیک پروژه می‌تواند هم‌زمان از چند حوزه استفاده کند؛ برای مثال یک پروژه اجتماعی ممکن است به پژوهش، تولید محتوا، همکاری سازمانی و مشارکت هنرمندان نیاز داشته باشد. حوزه‌ها بنابراین مرزهای جدا از هم نیستند، بلکه چارچوبی برای تعریف و ترکیب فعالیت‌ها هستند."} />
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <p className="eyebrow">محور اول</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">حمایت از هنرمندان</h2>
              <p className="mt-4 max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">ایجاد فرصت، حمایت و ظرفیت‌سازی برای هنرمندان در مسیر رشد حرفه‌ای، تولید اثر، حفظ کرامت و حضور مؤثر در جامعه. این حمایت می‌تواند متناسب با شرایط فرد یا پروژه، از مسیر شبکه‌سازی، معرفی، آموزش، خدمات تخصصی، جذب منابع یا طراحی برنامه‌های حمایتی دنبال شود.</p>
            </div>
            <div className="mt-8">
              <p className="eyebrow mb-4">۷ حوزه حمایتی</p>
              <InteractiveImageCards cards={[
                { title: "سلامت و درمان", text: "تسهیل دسترسی هنرمندان و خانواده‌های آنان به خدمات سلامت و درمان از مسیر همکاری با مراکز و ارائه‌دهندگان صلاحیت‌دار.", icon: "health", image: "/images/homepage/health.jpg" },
                { title: "معیشت و توانمندسازی اقتصادی", text: "ایجاد فرصت‌های درآمدی، اتصال هنرمندان به بازار، آموزش مهارت‌های اقتصادی و طراحی مسیرهای حمایتی هدفمند.", icon: "economy", image: "/images/homepage/economy.jpg" },
                { title: "حقوق و مشاوره", text: "تسهیل دسترسی به مشاوره و حمایت حقوقی و کمک به صیانت از حقوق مادی و معنوی هنرمندان و آثار آنان.", icon: "legal", image: "/images/homepage/legal.jpg" },
                { title: "میراث و هنرهای سنتی", text: "پشتیبانی از ثبت، مستندسازی، آموزش میان‌نسلی و انتقال دانش هنرهای ایرانی، به‌ویژه در حوزه‌های در معرض فراموشی.", icon: "heritage", image: "/images/homepage/heritage.jpg" },
                { title: "معرفی و مستندسازی", text: "ثبت روایت هنرمندان و آثار و ایجاد بستر برای معرفی و دیده‌شدن ظرفیت‌های هنری در سطح ملی و بین‌المللی.", icon: "documentation", image: "/images/homepage/documentation.jpg" },
                { title: "پژوهش و خدمات تخصصی", text: "پشتیبانی از پژوهش، تولید دانش و دسترسی به خدمات تخصصی برای حل مسائل حوزه هنر و توسعه تجربه‌های قابل استفاده.", icon: "research", image: "/images/homepage/research-services.jpg" },
                { title: "خدمات و حمایت‌های اجتماعی", text: "تقویت منزلت اجتماعی هنرمندان و تسهیل دسترسی آنان به خدمات فرهنگی، اجتماعی و رفاهی از مسیر شبکه همکاری‌های خورشید.", icon: "services", image: "/images/homepage/services.jpg" },
              ]} />
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <p className="eyebrow">محور دوم</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">هنر و مسائل اجتماعی</h2>
              <p className="mt-4 max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">به‌کارگیری هنر، رسانه و مشارکت اجتماعی برای آگاهی‌رسانی، روایت، گفت‌وگو و طراحی پروژه‌های فرهنگی و اجتماعی در مواجهه با مسائل و نیازهای جامعه. انتخاب این موضوعات به معنای ارائه مستقیم خدمات تخصصی نیست؛ نقش خورشید در موارد تخصصی می‌تواند تسهیلگری، شبکه‌سازی و اتصال پروژه به متخصصان و نهادهای ذی‌صلاح باشد.</p>
            </div>
            <div className="mt-8">
              <p className="eyebrow mb-4">۱۱ مسئله اجتماعی هدف</p>
              <InteractiveImageCards cards={[
                { title: "کودکان کار و کودکان در معرض آسیب", text: "استفاده از ظرفیت هنر و مشارکت اجتماعی برای ایجاد مسیرهای امن‌تر برای آموزش، رشد و فرصت‌های اجتماعی.", icon: "community", image: "/images/social-issues/child-labor-risk.jpg" },
                { title: "خشونت خانگی و آسیب‌های زنان", text: "تقویت آگاهی، حمایت اجتماعی و مسیرهای ارجاع برای زنان و خانواده‌های در معرض خشونت و آسیب.", icon: "health", image: "/images/social-issues/domestic-violence-women.jpg" },
                { title: "اعتیاد و بازتوانی", text: "کمک به فرهنگ‌سازی، بازتوانی و بازگشت افراد درگیر اعتیاد به مسیر زندگی و مشارکت اجتماعی.", icon: "services", image: "/images/social-issues/addiction-recovery.jpg" },
                { title: "سالمندان و تنهایی", text: "تقویت ارتباط اجتماعی، همراهی و مشارکت سالمندان و کاهش انزوای اجتماعی و تنهایی.", icon: "community", image: "/images/social-issues/elderly-isolation.jpg" },
                { title: "معلولیت و توانبخشی", text: "ترویج دسترس‌پذیری، توانمندسازی و مشارکت برابر افراد دارای معلولیت در جامعه.", icon: "services", image: "/images/social-issues/disability-rehabilitation.jpg" },
                { title: "زندانیان و بازپروری", text: "حمایت از بازپروری، آموزش و بازگشت مسئولانه افراد به جامعه پس از دوران محکومیت.", icon: "responsibility", image: "/images/social-issues/prisoner-rehabilitation.jpg" },
                { title: "حاشیه‌نشینی و فقر شهری", text: "استفاده از ظرفیت هنر و مشارکت اجتماعی برای افزایش فرصت، آگاهی و دسترسی جوامع کم‌برخوردار.", icon: "community", image: "/images/social-issues/urban-poverty.jpg" },
                { title: "بلایای طبیعی و بحران‌ها", text: "تقویت فرهنگ آمادگی، همبستگی اجتماعی، روایت و مشارکت هنری در زمان بحران و بازسازی.", icon: "responsibility", image: "/images/social-issues/natural-disasters-crisis.jpg" },
                { title: "مهاجران و آوارگان", text: "ترویج همزیستی، کرامت انسانی، تعلق اجتماعی و فرصت‌های مشارکت برای مهاجران و آوارگان.", icon: "community", image: "/images/social-issues/migrants-displaced.jpg" },
                { title: "سلامت روان عمومی جامعه", text: "افزایش آگاهی عمومی، کاهش انگ اجتماعی و تقویت فرهنگ گفت‌وگو، حمایت و پیشگیری در حوزه سلامت روان.", icon: "health", image: "/images/social-issues/mental-health.jpg" },
                { title: "محیط‌زیست و آگاهی اجتماعی", text: "به‌کارگیری هنر و رسانه برای افزایش آگاهی عمومی و تقویت مسئولیت‌پذیری اجتماعی در قبال محیط‌زیست.", icon: "social", image: "/images/social-issues/environment-awareness.jpg" },
              ]} />
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <p className="eyebrow">چهار حوزه مکمل</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">ظرفیت‌هایی که فعالیت‌ها را کامل می‌کنند</h2>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                ["رسانه و تولید محتوا","تولید و روایت محتوای هنری، فرهنگی و اجتماعی و ایجاد ظرفیت ارتباط با مخاطب."],
                ["همکاری و مشارکت","ایجاد مسیر همکاری میان خورشید، سازمان‌ها، متخصصان، هنرمندان، حامیان و شرکای اجرایی."],
                ["پژوهش و نوآوری","پژوهش، تولید دانش و توسعه ایده‌ها و راهکارهای تازه در حوزه هنر و مسائل فرهنگی و اجتماعی."],
                ["جامعه و شبکه انسانی","توسعه ارتباط میان اعضا، هنرمندان، متخصصان، مفاخر، داوطلبان و همراهان و ایجاد فرصت برای یادگیری و مشارکت."]
              ].map(([title,text]) => (
                <article key={title} className="border-t border-[#4A78B0]/35 pt-5">
                  <h3 className="text-[20px] font-extrabold md:text-[22px]">{title}</h3>
                  <p className="mt-2 max-w-xl text-[13px] leading-7 text-[#4D5B77] md:text-[14px]">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow">از حوزه تا پروژه</p>
                <h2 className="mt-2 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">هر حوزه می‌تواند به یک همکاری یا پروژه مشخص تبدیل شود.</h2>
              </div>
              <div>
                <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">حوزه‌های فعالیت، چارچوب موضوعی خورشید را مشخص می‌کنند؛ رویکرد خورشید توضیح می‌دهد این ظرفیت‌ها چگونه در یک پروژه کنار هم قرار می‌گیرند. بسته به موضوع، یک پروژه می‌تواند از یک حوزه آغاز شود و از چند ظرفیت دیگر برای طراحی، اجرا و سنجش اثر استفاده کند.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/about" className="btn-primary px-5 py-3 text-[13px]">آشنایی با رویکرد خورشید</a>
                  <a href="/participation#form" className="btn-primary px-5 py-3 text-[13px]">ثبت درخواست همکاری</a>
                </div>
              </div>
            </div>
          </section>
        </section>      ) : slug === "contact" ? (
        <section className="space-y-16 md:space-y-24">
          <section className="border-t border-white/8 pt-2 md:pt-4">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
              <div className="flex flex-col justify-center">
                <p className="eyebrow">اطلاعات رسمی</p>
                <h2 className="mt-2 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">راه‌های ارتباط مستقیم</h2>
                <div className="mt-6 space-y-5 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">
                  <div>
                    <p className="text-[12px] font-bold text-[#4A78B0]">نشانی دفتر</p>
                    <p className="mt-1">تهران، خیابان فاطمی غربی، قبل از خیابان سیندخت، پلاک ۲۹۷، طبقه ۳، واحد ۷</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#4A78B0]">تلفن رسمی</p>
                    <a href="tel:02166436007" className="mt-1 inline-block transition hover:text-white">۰۲۱-۶۶۴۳۶۰۰۷</a>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:min-h-[390px]">
                <iframe
                  title="موقعیت دفتر سازمان مردم‌نهاد خورشید مفاخر روی نقشه"
                  src="https://www.google.com/maps?q=P97P%2BGWV%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran&z=17&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <p className="eyebrow">مسیرهای ارتباط</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">موضوع شما از کدام مسیر شروع می‌شود؟</h2>
              <p className="mt-4 max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">برای اینکه درخواست شما سریع‌تر به مسیر مناسب برسد، موضوع ارتباط را از میان مسیرهای زیر مشخص کنید. ثبت درخواست در همه این مسیرها از طریق فرم مشارکت انجام می‌شود.</p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                ["همکاری و پروژه", "برای تعریف پروژه فرهنگی یا اجتماعی، مسئولیت اجتماعی، حمایت از یک برنامه یا همکاری سازمانی."],
                ["هنرمندان و متخصصان", "برای همکاری هنری و تخصصی، پیوستن به پروژه‌ها، ارائه پیشنهاد یا استفاده از ظرفیت شبکه خورشید."],
                ["رسانه و محتوا", "برای درخواست مصاحبه، پوشش خبری، تولید محتوا یا همکاری با رسانه و تلویزیون اینترنتی خورشید."],
                ["ارتباط عمومی", "برای پرسش‌ها، پیگیری امور، معرفی یک پیشنهاد یا موضوعی که در مسیرهای بالا قرار نمی‌گیرد."]
              ].map(([title, text]) => (
                <article key={title} className="border-t border-[#4A78B0]/35 pt-5">
                  <h3 className="text-[19px] font-extrabold md:text-[21px]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-7 text-[#4D5B77] md:text-[14px]">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow">شروع ارتباط</p>
                <h2 className="mt-2 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">هر همکاری از یک درخواست روشن شروع می‌شود.</h2>
              </div>
              <div>
                <p className="max-w-3xl text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">در فرم مشارکت، موضوع، هدف و اطلاعات اولیه درخواست خود را ثبت کنید. تیم خورشید پس از بررسی، در صورت نیاز برای تکمیل اطلاعات و هماهنگی مراحل بعدی با شما ارتباط می‌گیرد.</p>
                <a href="/participation#form" className="btn-primary mt-6 inline-flex px-5 py-3 text-[13px]">ثبت درخواست همکاری</a>
              </div>
            </div>
          </section>
        </section>

      ) : slug === "arms" ? (
        <section className="space-y-16 md:space-y-24">
          <section className="border-t border-white/8 pt-2 md:pt-4">
            <div className="max-w-4xl">
              <p className="eyebrow">چهار ظرفیت تخصصی</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">بازوهایی که مسیر اجرا را کامل می‌کنند.</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">هر بازو یک ظرفیت مشخص را پوشش می‌دهد و در صورت نیاز می‌تواند در کنار بازوهای دیگر و شبکه خورشید، بخشی از یک پروژه مشترک را بر عهده بگیرد.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {spec.cards?.map((card) => (
                <article key={card.title} className="glass overflow-hidden rounded-2xl reveal">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#FFFFFF]">
                    {card.image && <img src={card.image} alt={"تصویر " + card.title + " در خورشید مفاخر"} className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" loading="lazy" />}
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-[20px] font-extrabold">{card.title}</h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#4D5B77] md:text-[14px]">{card.text}</p>
                    {card.href && <a className="mt-5 inline-flex text-[12px] font-semibold text-[#4A78B0]" href={card.href}>ورود به این بازو ←</a>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="eyebrow">مدل همکاری</p>
                <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">چهار ظرفیت، یک مسیر اجرایی</h2>
              </div>
              <div>
                <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">یک پروژه لزوماً به یک بازو محدود نیست. بسته به هدف پروژه، ظرفیت‌های مختلف می‌توانند در کنار هم فعال شوند؛ برای مثال، بازوی توسعه پروژه‌های اجتماعی می‌تواند طراحی و مدیریت پروژه را پیش ببرد، رسانه روایت و محتوای آن را تولید کند و تلویزیون اینترنتی، بخش تصویری پروژه را منتشر کند. در کنار این ظرفیت‌ها، هنرمندان و متخصصان شبکه خورشید نیز می‌توانند در بخش‌های تخصصی پروژه مشارکت کنند.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-5">
                  {["ایده یا مسئله", "طراحی پروژه", "فعال‌سازی بازوها", "تولید و اجرا", "روایت و اثر"].map((item, index) => (
                    <div key={item} className="border-t border-[#4A78B0]/40 pt-3">
                      <span className="text-[11px] font-bold text-[#4A78B0]">{fa(index + 1)}</span>
                      <p className="mt-2 text-[12px] font-bold leading-6">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                ["پشتوانه سازمانی", "شخصیت حقوقی، ساختار رسمی و مجوز وزارت کشور، بستر شکل‌گیری همکاری‌های رسمی را فراهم می‌کند."],
                ["ظرفیت تخصصی", "چهار بازوی اجرایی در کنار شبکه هنرمندان، متخصصان و همکاران، ظرفیت‌های مورد نیاز پروژه را فراهم می‌کنند."],
                ["اجرای پروژه", "ظرفیت‌ها متناسب با موضوع هر پروژه کنار هم قرار می‌گیرند تا مسیر طراحی، تولید، اجرا و روایت به یکدیگر متصل شود."],
              ].map(([title, text]) => (
                <article key={title} className="border-t border-[#4A78B0]/35 pt-5">
                  <h3 className="text-[18px] font-extrabold">{title}</h3>
                  <p className="mt-2 text-[13px] leading-7 text-[#4D5B77]">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow">از ظرفیت تا پروژه</p>
                <h2 className="mt-2 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">یک ایده می‌تواند به یک پروژه قابل اجرا تبدیل شود.</h2>
              </div>
              <div>
                <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">اگر یک ایده، مسئله یا نیاز فرهنگی و اجتماعی دارید، مسیر مشارکت نقطه شروع بررسی موضوع و اتصال آن به ظرفیت مناسب خورشید است.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/participation#form" className="btn-primary px-5 py-3 text-[13px]">ثبت درخواست همکاری</a>
                  <a href="/about/approach" className="btn-primary px-5 py-3 text-[13px]">آشنایی با رویکرد خورشید</a>
                </div>
              </div>
            </div>
          </section>
        </section>

      ) : slug === "governance" ? (
        <section className="space-y-16 md:space-y-24">
          <section className="border-t border-white/8 pt-2 md:pt-4">
            <div className="max-w-4xl">
              <p className="eyebrow">ساختار سازمانی</p>
              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">از راهبری تا اجرا، یک ساختار روشن</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">ساختار خورشید مفاخر میان ارکان قانونی، مدیریت ارشد، معاونت‌های تخصصی و دفاتر راهبردی تفکیک ایجاد می‌کند تا مسئولیت راهبری، برنامه‌ریزی و اجرا در جایگاه مشخص خود قرار گیرد.</p>
            </div>

            <div className="mt-12 overflow-x-auto pb-4">
              <div className="mx-auto min-w-[760px] max-w-6xl px-2">
                <div className="flex flex-col items-center">
                  <div className="rounded-2xl border px-4 py-4 text-[13px] font-extrabold leading-7 border-[#4A78B0]/45 bg-[#4A78B0]/[0.07] text-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">مجمع عمومی</div>
                  <div className="h-7 w-px bg-[#4A78B0]/45" />
                  <div className="rounded-2xl border px-4 py-4 text-[13px] font-extrabold leading-7 border-[#4A78B0]/45 bg-[#4A78B0]/[0.07] text-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">هیئت‌مدیره</div>
                  <div className="h-7 w-px bg-[#4A78B0]/45" />
                  <div className="rounded-2xl border px-4 py-4 text-[13px] font-extrabold leading-7 border-[#4A78B0]/45 bg-[#4A78B0]/[0.07] text-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">مدیرعامل</div>

                  <div className="mt-8 grid w-full grid-cols-[1fr_auto_1fr] items-start gap-5">
                    <div className="flex flex-col items-center">
                      <div className="h-7 w-px bg-white/15" />
                      <div className="rounded-2xl border px-4 py-4 text-[13px] font-extrabold leading-7 w-full max-w-[300px] border-white/10 bg-white/[0.025] text-[#d9e0e6] text-center">مشاور ارشد مدیرعامل<br /><span className="text-[10px] font-normal leading-5 text-[#4D5B77]">شراکت‌های راهبردی و سرمایه‌گذاری</span></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-7 w-px bg-[#4A78B0]/45" />
                      <div className="rounded-2xl border px-4 py-4 text-[13px] font-extrabold leading-7 max-w-[360px] border-[#4A78B0]/45 bg-[#4A78B0]/[0.07] text-white text-center">قائم‌مقام مدیرعامل و معاون راهبرد و برنامه‌ریزی</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-7 w-px bg-white/15" />
                      <div className="rounded-2xl border px-4 py-4 text-[13px] font-extrabold leading-7 w-full max-w-[300px] border-white/10 bg-white/[0.025] text-[#d9e0e6] text-center">اتاق فکر<br /><span className="text-[10px] font-normal leading-5 text-[#4D5B77]">شورای مشورتی، زیر نظر مستقیم مدیرعامل</span></div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                  <div className="mb-6 text-center">
                    <p className="text-[11px] font-bold tracking-wide text-[#4A78B0]">معاونت‌های تخصصی</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      "معاونت رسانه، ارتباطات، برند و امور بین‌الملل",
                      "معاونت اجتماعی و برنامه‌های حمایتی",
                      "معاونت توسعه مشارکت‌های اقتصادی",
                      "معاونت توسعه منابع مالی و اداری",
                      "معاونت آموزش، پژوهش و نوآوری",
                      "معاونت امور هنری و ارتباط با هنرمندان",
                      "معاونت مفاخر و امور اعضا",
                    ].map((title, index) => (
                      <div key={title} className="relative pt-4">
                        <div className="absolute right-1/2 top-0 h-4 w-px translate-x-1/2 bg-white/15" />
                        <article className="rounded-2xl border px-4 py-4 text-[13px] font-extrabold leading-7 min-h-[92px] w-full border-white/10 bg-white/[0.025] text-center text-[#dce3e8]">
                          <span className="mb-2 block text-[10px] font-bold text-[#4A78B0]">{fa(index + 1)}</span>
                          {title}
                        </article>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                  <div className="mb-6 text-center">
                    <p className="text-[11px] font-bold tracking-wide text-[#4A78B0]">دفاتر تخصصی</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      ["دفتر طرح، برنامه، پایش عملکرد، ریسک و مدیریت دانش", "برنامه‌ریزی، پایش عملکرد، مدیریت ریسک و توسعه دانش سازمانی"],
                      ["دفتر فناوری اطلاعات و توسعه دیجیتال", "زیرساخت فناوری، تحول دیجیتال و توسعه ظرفیت‌های دیجیتال"],
                      ["دفتر راهبری و پایش شرکت‌های وابسته", "هماهنگی و پایش راهبردی شرکت‌ها و بازوهای وابسته"],
                    ].map(([title, text]) => (
                      <article key={title} className="rounded-2xl border px-4 py-4 text-[13px] font-extrabold leading-7 min-h-[128px] border-[#4A78B0]/20 bg-[#4A78B0]/[0.025] text-[#dce3e8]">
                        <h3 className="text-[14px] font-extrabold leading-7">{title}</h3>
                        <p className="mt-2 text-[11px] leading-6 text-[#4D5B77]">{text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="eyebrow">منطق ساختار</p>
                <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[40px]">ساختار برای تبدیل ظرفیت به اثر</h2>
              </div>
              <div>
                <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">ارکان حاکمیتی مسیر کلی سازمان را تعیین و بر آن نظارت می‌کنند؛ مدیرعامل مسئول مدیریت کلان و هدایت اجرایی است؛ قائم‌مقام و معاون راهبرد و برنامه‌ریزی هماهنگی راهبردی و برنامه‌ای را پیش می‌برد و معاونت‌ها و دفاتر تخصصی، ظرفیت‌های مورد نیاز سازمان را سازمان‌دهی می‌کنند.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/arms" className="btn-primary px-5 py-3 text-[13px]">بازوهای اجرایی</a>
                  <a href="/community" className="btn-primary px-5 py-3 text-[13px]">جامعه خورشید</a>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-white/8 pt-12 md:pt-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow">شروع همکاری</p>
                <h2 className="mt-2 text-[27px] font-extrabold leading-[1.7] md:text-[38px]">یک ساختار روشن، برای یک اجرای حرفه‌ای</h2>
              </div>
              <div>
                <p className="text-[14px] leading-8 text-[#4D5B77] md:text-[15px]">اگر پیشنهاد، پروژه یا ظرفیتی برای همکاری با خورشید دارید، مسیر مشارکت نقطه شروع ارتباط با تیم اجرایی و بررسی درخواست شماست.</p>
                <a href="/participation#form" className="btn-primary mt-6 inline-flex px-5 py-3 text-[13px]">ثبت درخواست همکاری</a>
              </div>
            </div>
          </section>
        </section>
      ) : (
        <>
          {spec.sections?.map((section, index) => (
            <section key={section.title} className={slug === "contact" && index === 0 ? "border-t border-[#14213D]/10 py-6 first:border-t-0 first:pt-0 reveal" : "border-t border-[#14213D]/10 py-14 first:border-t-0 first:pt-0 md:py-20 reveal"}>
              <div className={slug === "contact" && index < 2 ? "rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8" : "grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"}>
                <div>
                  {slug !== "contact" && slug !== "tv" && <p className="eyebrow">بخش {fa(index + 1)}</p>}
                  <h2 className="mt-2 text-[24px] font-extrabold leading-[1.7] md:text-[32px]">{section.title}</h2>
                </div>
                <div className={slug === "contact" && index < 2 ? "grid gap-5" : slug === "tv" ? "block" : "grid gap-8 md:grid-cols-[1.15fr_0.85fr]"}>
                  <div>
                    <p className="text-[14px] leading-8 text-[#4D5B77]">{section.text}</p>
                    {section.items && <ul className="mt-6 space-y-3 text-[13px] leading-7 text-[#4D5B77]">{section.items.map((item) => <li key={item}>• {item}</li>)}</ul>}
                  </div>
                  {slug === "contact" && index === 0 ? <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 md:min-h-[360px]"><iframe title="موقعیت دفتر سازمان مردم‌نهاد خورشید مفاخر روی نقشه" src="https://www.google.com/maps?q=P97P%2BGWV%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran&z=17&output=embed" className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div> : slug === "tv" ? null : <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden rounded-2xl border border-[#14213D]/10 bg-white p-6 text-center"><img src="/images/placeholders/content-3x2.svg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" /><div className="relative"><div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-[#4A78B0] text-[#14213D]"><SiteIcon name={section.icon ?? "art"} size={32} /></div><p className="text-[11px] font-bold text-[#14213D]">فضای گرافیک / اینفوگرافیک</p><p className="mt-2 text-[12px] leading-7 text-[#5B6470]">جای تصویر، نمودار یا اینفوگرافیک اختصاصی این بخش</p></div></div>}
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {relatedLinks[slug]?.length ? (
        <section className="border-t border-white/8 pt-12 md:pt-16">
          <p className="eyebrow">مسیرهای مرتبط</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedLinks[slug].map((link) => (
              <a key={link.href} href={link.href} className="rounded-full border border-[#4A78B0]/25 px-4 py-2.5 text-[12px] font-semibold text-[#4A78B0] transition hover:border-[#4A78B0]/50 hover:text-[#4A78B0]">
                {link.label} <Arrow />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {Boolean(spec.cards?.length) && slug !== "contact" && slug !== "arms" && (
        <section className="border-t border-white/8 pt-14 md:pt-20">
          <p className="eyebrow">ادامه مسیر</p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.6] md:text-[36px]">{slug === "arms" ? "بازوهای اجرایی خورشید" : slug === "governance" ? "بخش‌های مرتبط" : "اجزای مرتبط"}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {(spec.cards ?? []).map((card) => (
              <article key={card.title} className="border-t border-[#4A78B0]/40 pt-5 reveal">
                <h3 className="text-[19px] font-extrabold">{card.title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#4D5B77]">{card.text}</p>
                {card.href && <a className="mt-4 inline-flex text-[12px] font-semibold text-[#4A78B0]" href={card.href}>مشاهده صفحه ←</a>}
              </article>
            ))}
          </div>
        </section>
      )}

      {spec.empty && <div className="relative mt-10 overflow-hidden rounded-3xl border border-[#14213D]/10 bg-white p-8 md:p-10"><img src="/images/placeholders/content-3x2.svg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" /><div className="relative max-w-2xl"><div className="grid h-14 w-14 place-items-center rounded-full bg-[#4A78B0] text-[#14213D]"><SiteIcon name="partnership" size={30} /></div><h2 className="mt-5 text-[22px] font-bold text-[#14213D]">اطلاعات در حال تکمیل است</h2><p className="mt-3 text-[14px] leading-8 text-[#5B6470]">{spec.empty}</p>{spec.cta && <a href={spec.cta.href} className="btn-primary mt-5 px-5 py-3 text-[13px]">{spec.cta.label}</a>}</div></div>}
    </div>
  </SiteShell>;
}
export function getArchitectureSpec(slug: string) { return specs[slug]; }