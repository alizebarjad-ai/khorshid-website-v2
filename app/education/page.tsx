import { EducationDevelopmentPage } from "@/components/education-development-page";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata = {
  alternates: { canonical: "/education" },
  title: "آموزش، پژوهش و نوآوری",
  description: "ظرفیت‌های آموزشی، پژوهشی و نوآورانه خورشید مفاخر برای توسعه مهارت، انتقال تجربه و پرورش استعدادهای هنری و فرهنگی.",
};

export default function EducationPage() {
  return (
    <>
      <PageStructuredData path="/education" />
      <EducationDevelopmentPage />
    </>
  );
}
