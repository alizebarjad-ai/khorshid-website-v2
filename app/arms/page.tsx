import { ArchitecturePage } from "@/components/architecture-page";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata = {
  alternates: { canonical: "/arms" },
  title: "بازوهای اجرایی خورشید مفاخر",
  description: "آشنایی با بازوهای اجرایی خورشید مفاخر در رسانه، تلویزیون اینترنتی، پروژه‌های اجتماعی و آموزش، پژوهش و نوآوری.",
};

export default function ArmsPage() {
  return (<><PageStructuredData path="/arms" /><ArchitecturePage slug="arms" /></>);
}
