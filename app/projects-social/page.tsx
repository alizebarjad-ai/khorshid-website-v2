import { SocialProjectsArmPage } from "@/components/social-projects-arm-page";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata = {
  alternates: { canonical: "/projects-social" },
  title: "پروژه‌های اجتماعی خورشید مفاخر",
  description: "طراحی و اجرای پروژه‌های فرهنگی و اجتماعی خورشید مفاخر با مشارکت هنرمندان، متخصصان، سازمان‌ها و حامیان.",
};

export default function ProjectsSocialPage() {
  return (<><PageStructuredData path="/projects-social" /><SocialProjectsArmPage /></>);
}
