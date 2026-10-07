import HomeClient from "./home-client";
import { PageStructuredData } from "@/components/page-structured-data";
import { getActiveAnnouncements, getImportantAnnouncement } from "@/lib/announcements";

export const metadata = {
  alternates: { canonical: "/" },
  title: { absolute: "سازمان مردم‌نهاد خورشید مفاخر | هنر، فرهنگ و اثرگذاری اجتماعی" },
  description: "سازمان مردم‌نهاد خورشید مفاخر؛ پیوند هنر، فرهنگ و مسئولیت اجتماعی برای حمایت از هنرمندان و طراحی و اجرای پروژه‌های اثرگذار اجتماعی.",
};

export const revalidate = 60;

export default async function HomePage() {
  const [announcements, importantAnnouncement] = await Promise.all([
    getActiveAnnouncements(3),
    getImportantAnnouncement(),
  ]);

  return (
    <>
      <PageStructuredData path="/" />
      <HomeClient
        announcements={announcements}
        importantAnnouncement={importantAnnouncement}
      />
    </>
  );
}
