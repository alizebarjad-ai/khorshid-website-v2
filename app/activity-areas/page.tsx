import { ArchitecturePage } from "@/components/architecture-page";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata = {
  alternates: { canonical: "/activity-areas" },
  title: "حوزه‌های فعالیت خورشید مفاخر",
  description: "حوزه‌های تمرکز و فعالیت خورشید مفاخر در حمایت از هنرمندان، فرهنگ، هنر و مسائل اجتماعی.",
};

export default function AreasFocusPage() {
  return (<><PageStructuredData path="/activity-areas" /><ArchitecturePage slug="activity-areas" /></>);
}
