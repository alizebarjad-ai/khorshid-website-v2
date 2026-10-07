import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import "./background.css";
import "./navigation.css";
import "./theme-v2.css";
import { GlobalNavigation } from "@/components/global-navigation";
import { SiteFooter } from "@/components/site-footer";

const vazirmatn = Vazirmatn({ subsets: ["arabic"], display: "swap", variable: "--font-vazirmatn" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.khorshid-mafakher.ir"),
  title: {
    default: "خورشید مفاخر",
    template: "%s | خورشید مفاخر",
  },
  description:
    "سازمان مردم‌نهاد خورشید مفاخر؛ سازمانی غیردولتی، غیرانتفاعی، غیرسیاسی و داوطلبانه در حوزه هنر، فرهنگ و مسئولیت اجتماعی، با مأموریت اثرگذاری اجتماعی از مسیر هنر و حمایت پایدار از هنرمندان.",
  applicationName: "خورشید مفاخر",
  authors: [{ name: "سازمان مردم‌نهاد خورشید مفاخر" }],
  creator: "سازمان مردم‌نهاد خورشید مفاخر",
  publisher: "سازمان مردم‌نهاد خورشید مفاخر",
  category: "nonprofit organization",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "خورشید مفاخر | هنر، جامعه و مسئولیت اجتماعی",
    description:
      "سازمان مردم‌نهاد خورشید مفاخر؛ هنر، فرهنگ و مسئولیت اجتماعی برای اثرگذاری اجتماعی و حمایت از هنرمندان.",
    siteName: "خورشید مفاخر",
    locale: "fa_IR",
    type: "website",
    images: [{
      url: "/images/og2.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
      alt: "خورشید مفاخر؛ هنر، فرهنگ و اثرگذاری اجتماعی",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "خورشید مفاخر | هنر، جامعه و مسئولیت اجتماعی",
    description:
      "سازمان مردم‌نهاد خورشید مفاخر؛ هنر، فرهنگ و مسئولیت اجتماعی برای اثرگذاری اجتماعی و حمایت از هنرمندان.",
    images: ["/images/og2.jpg"],
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.variable}>
        <GlobalNavigation />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.khorshid-mafakher.ir/#website",
              url: "https://www.khorshid-mafakher.ir/",
              name: "خورشید مفاخر",
              alternateName: "سازمان مردم‌نهاد خورشید مفاخر",
              inLanguage: "fa-IR",
              publisher: { "@id": "https://www.khorshid-mafakher.ir/#organization" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "@id": "https://www.khorshid-mafakher.ir/#organization",
              name: "سازمان مردم‌نهاد خورشید مفاخر",
              alternateName: "خورشید مفاخر",
              inLanguage: "fa-IR",
              url: "https://www.khorshid-mafakher.ir/",
              logo: {
                "@type": "ImageObject",
                "@id": "https://www.khorshid-mafakher.ir/#logo",
                url: "https://www.khorshid-mafakher.ir/images/logo.svg",
                contentUrl: "https://www.khorshid-mafakher.ir/images/logo.svg",
                caption: "نشان سازمان مردم‌نهاد خورشید مفاخر",
              },
              image: {
                "@type": "ImageObject",
                "@id": "https://www.khorshid-mafakher.ir/#organization-image",
                url: "https://www.khorshid-mafakher.ir/images/og2.jpg",
                contentUrl: "https://www.khorshid-mafakher.ir/images/og2.jpg",
                width: 1200,
                height: 630,
                caption: "سازمان مردم‌نهاد خورشید مفاخر؛ هنر، فرهنگ و اثرگذاری اجتماعی",
              },
              description:
                "سازمان مردم‌نهاد خورشید مفاخر یک سازمان غیردولتی، غیرانتفاعی، غیرسیاسی و داوطلبانه در ایران است که در حوزه هنر، فرهنگ و مسئولیت اجتماعی فعالیت می‌کند و از هنرمندان حمایت کرده و پروژه‌های فرهنگی و اجتماعی را طراحی، اجرا و روایت می‌کند.",
              foundingDate: "2026-09-22",
              address: {
                "@type": "PostalAddress",
                streetAddress: "خیابان فاطمی غربی، قبل از خیابان سیندخت، پلاک ۲۹۷، طبقه ۳، واحد ۷",
                addressLocality: "تهران",
                addressCountry: "IR",
              },
              telephone: "+982166436007",
              identifier: {
                "@type": "PropertyValue",
                propertyID: "شماره ثبت",
                name: "شماره ثبت سازمان مردم‌نهاد خورشید مفاخر",
                value: "۶۱۷۲۰",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "تهران",
                  containedInPlace: {
                    "@type": "Country",
                    name: "ایران",
                  },
                },
                {
                  "@type": "Country",
                  name: "ایران",
                },
              ],
              knowsAbout: [
                "هنر و فرهنگ",
                "حمایت از هنرمندان",
                "هنر و مسائل اجتماعی",
                "مسئولیت اجتماعی شرکتی (CSR)",
                "پروژه‌های فرهنگی و اجتماعی",
                "رسانه و تولید محتوا",
                "تلویزیون اینترنتی",
                "آموزش هنری",
                "پژوهش فرهنگی",
                "نوآوری",
                "شبکه‌سازی فرهنگی و اجتماعی",
                "مشارکت اجتماعی",
              ],
              subjectOf: [
                { "@id": "https://www.khorshid-mafakher.ir/about#webpage" },
                { "@id": "https://www.khorshid-mafakher.ir/legal#webpage" },
                { "@id": "https://www.khorshid-mafakher.ir/mission#webpage" },
                { "@id": "https://www.khorshid-mafakher.ir/governance#webpage" },
                { "@id": "https://www.khorshid-mafakher.ir/arms#webpage" },
                { "@id": "https://www.khorshid-mafakher.ir/participation#webpage" },
              ],
              mainEntityOfPage: "https://www.khorshid-mafakher.ir/about",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+982166436007",
                contactType: "customer service",
                availableLanguage: ["fa"],
                url: "https://www.khorshid-mafakher.ir/contact",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
