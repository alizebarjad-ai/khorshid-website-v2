"use client";

import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  "/": "خورشید مفاخر",
  "/about": "درباره خورشید مفاخر",
  "/about/approach": "رویکرد و شیوه فعالیت",
  "/mission/about": "ماموریت و چشم‌انداز",
  "/areas-focus/about": "حوزه‌های فعالیت",
  "/governance": "ساختار و ارکان",
  "/arms": "بازوهای اجرایی",
  "/media": "رسانه و تولید محتوا",
  "/tv": "تلویزیون اینترنتی",
  "/projects-social": "پروژه‌های اجتماعی",
  "/education": "آموزش، پژوهش و نوآوری",
  "/community": "جامعه خورشید",
  "/member-club": "باشگاه مفاخر",
  "/membership": "عضویت و همراهی",
  "/partnership": "همکاری سازمانی",
  "/participation": "مشارکت با خورشید",
  "/contact": "تماس با خورشید مفاخر",
};

const SITE_URL = "https://khorshid-website.vercel.app";

export function BreadcrumbSchema() {
  const pathname = usePathname();
  const current = labels[pathname];

  if (!current || pathname === "/") return null;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${pathname}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خورشید مفاخر",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: current,
        item: `${SITE_URL}${pathname}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}
