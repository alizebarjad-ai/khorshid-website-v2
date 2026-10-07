import HomeClient from "../home-client";
import { PageStructuredData } from "@/components/page-structured-data";
import { getActiveAnnouncements, getImportantAnnouncement } from "@/lib/announcements";
import "./light-preview.css";

export const metadata = {
  title: "پیش‌نمایش نسخه روشن | خورشید مفاخر",
  description: "نسخه آزمایشی روشن صفحه اصلی خورشید مفاخر برای مقایسه بصری.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function LightPreviewPage() {
  const [announcements, importantAnnouncement] = await Promise.all([
    getActiveAnnouncements(3),
    getImportantAnnouncement(),
  ]);

  return (
    <div className="light-preview-shell">
      <PageStructuredData path="/" />
      <HomeClient
        announcements={announcements}
        importantAnnouncement={importantAnnouncement}
      />
    </div>
  );
}
