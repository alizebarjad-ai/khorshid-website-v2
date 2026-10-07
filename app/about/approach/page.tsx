import type { Metadata } from "next";
import { ProjectsSocialPage } from "@/components/projects-social-page";
import { PageStructuredData } from "@/components/page-structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/about/approach" },
  title: "رویکرد و شیوه فعالیت خورشید",
  description:
    "رویکرد خورشید برای شناسایی مسئله، طراحی راهکار، ترکیب ظرفیت‌ها، اجرا و سنجش اثر با تکیه بر هنر، رسانه و شبکه همکاری.",
};

export default function ApproachPage() {
  return (<><PageStructuredData path="/about/approach" /><ProjectsSocialPage route="about/approach" /></>);
}
