import { prisma } from "@/lib/prisma";
import type { Announcement } from "@/types/announcement";

function mapAnnouncement(item: {
  id: string;
  slug: string;
  type: string;
  title: string;
  excerpt: string;
  content: string[];
  dateLabel: string;
  isoDate: Date;
  updatedAt: Date;
  image: string;
  imageAlt: string;
  important: boolean;
  showPopup: boolean;
  active: boolean;
}): Announcement {
  return {
    ...item,
    isoDate: item.isoDate.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
    href: `/news/${item.slug}`,
  };
}

export async function getActiveAnnouncements(limit?: number) {
  const items = await prisma.announcement.findMany({
    where: { active: true },
    orderBy: { isoDate: "desc" },
    ...(limit ? { take: limit } : {}),
  });

  return items.map(mapAnnouncement);
}

export async function getImportantAnnouncement() {
  const item = await prisma.announcement.findFirst({
    where: {
      active: true,
      important: true,
      showPopup: true,
    },
    orderBy: { isoDate: "desc" },
  });

  return item ? mapAnnouncement(item) : null;
}

export async function getAnnouncementBySlug(slug: string) {
  const item = await prisma.announcement.findUnique({
    where: { slug },
  });

  return item ? mapAnnouncement(item) : null;
}
