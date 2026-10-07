export const metadata = {
  alternates: { canonical: "/governance" },
  title: "حکمرانی و ساختار خورشید مفاخر",
  description: "آشنایی با ساختار سازمانی و چارچوب حکمرانی سازمان مردم‌نهاد خورشید مفاخر.",
};

import { ArchitecturePage } from "@/components/architecture-page";
import { PageStructuredData } from "@/components/page-structured-data";

export default function GovernancePage() {
  return (<><PageStructuredData path="/governance" /><ArchitecturePage slug="governance" /></>);
}
