import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

const publicRoutes = [
  { path: "/", lastModified: "2026-10-04" },
  { path: "/faq", lastModified: "2026-10-06" },
  { path: "/about", lastModified: "2026-10-03" },
  { path: "/legal", lastModified: "2026-10-03" },
  { path: "/about/approach", lastModified: "2026-10-03" },
  { path: "/mission", lastModified: "2026-10-04" },
  { path: "/activity-areas", lastModified: "2026-10-04" },
  { path: "/governance", lastModified: "2026-10-03" },
  { path: "/arms", lastModified: "2026-10-03" },
  { path: "/media", lastModified: "2026-10-03" },
  { path: "/media/studio", lastModified: "2026-10-04" },
  { path: "/tv", lastModified: "2026-10-03" },
  { path: "/projects-social", lastModified: "2026-10-03" },
  { path: "/education", lastModified: "2026-10-03" },
  { path: "/community", lastModified: "2026-10-03" },
  { path: "/member-club", lastModified: "2026-10-03" },
  { path: "/membership", lastModified: "2026-10-03" },
  { path: "/partnership", lastModified: "2026-10-03" },
  { path: "/participation", lastModified: "2026-10-03" },
  { path: "/contact", lastModified: "2026-10-03" },
  { path: "/news", lastModified: "2026-10-05" },
] as const;

const SITE_URL = "https://www.khorshid-mafakher.ir";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let announcements: Array<{ slug: string; isoDate: Date }> = [];

  try {
    announcements = await prisma.announcement.findMany({
      where: { active: true },
      select: { slug: true, isoDate: true },
      orderBy: { isoDate: "desc" },
    });
  } catch {
    // Keep the sitemap usable even if the announcements database is temporarily unavailable.
  }

  const staticEntries = publicRoutes.map(({ path, lastModified }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
  }));

  const newsEntries = announcements.map(({ slug, isoDate }) => ({
    url: new URL(`/news/${slug}`, SITE_URL).toString(),
    lastModified: isoDate.toISOString(),
  }));

  return [...staticEntries, ...newsEntries];
}
