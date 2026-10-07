import { AboutPage } from "@/components/about-page";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "درباره خورشید مفاخر",
  description: "آشنایی با سازمان مردم‌نهاد خورشید مفاخر، مأموریت، رویکرد و مسیر فعالیت آن در حوزه هنر، فرهنگ و مسئولیت اجتماعی.",
};

export default function AboutRoute() {
  return (<><PageStructuredData path="/about" /><AboutPage /></>);
}
