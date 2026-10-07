import { ArchitecturePage } from "@/components/architecture-page";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata = {
  alternates: { canonical: "/tv" },
  title: "تلویزیون اینترنتی خورشید",
  description: "تلویزیون اینترنتی خورشید مفاخر برای تولید و انتشار برنامه‌ها و محتوای تصویری فرهنگی، هنری و اجتماعی.",
};

export default function TvPage() {
  return (
    <>
      <PageStructuredData path="/tv" />
      <ArchitecturePage slug="tv" />
    </>
  );
}
