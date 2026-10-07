import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عضویت در خورشید مفاخر",
  description: "رده‌های عضویت و مسیر درخواست عضویت در سازمان مردم‌نهاد خورشید مفاخر.",
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
