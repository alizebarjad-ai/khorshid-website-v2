import { ArchitecturePage } from "@/components/architecture-page";
import { PageStructuredData } from "@/components/page-structured-data";
import "./light-preview-activity.css";

export const metadata = {
  title: "پیش‌نمایش روشن | حوزه‌های فعالیت خورشید مفاخر",
  description: "نسخه آزمایشی روشن صفحه حوزه‌های فعالیت خورشید مفاخر برای مقایسه بصری.",
  robots: { index: false, follow: false },
};

export default function ActivityAreasLightPreview() {
  return (
    <div className="activity-light-preview-shell">
      <PageStructuredData path="/activity-areas" />
      <ArchitecturePage slug="activity-areas" />
    </div>
  );
}
