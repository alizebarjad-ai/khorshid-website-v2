export const metadata = {
  alternates: { canonical: "/contact" },
  title: "تماس با خورشید مفاخر",
  description: "اطلاعات تماس و راه‌های ارتباط با سازمان مردم‌نهاد خورشید مفاخر در تهران.",
};

import { ArchitecturePage } from "@/components/architecture-page";
import { PageStructuredData } from "@/components/page-structured-data";

export default function ContactPage() {
  return (<><PageStructuredData path="/contact" /><ArchitecturePage slug="contact" /></>);
}
