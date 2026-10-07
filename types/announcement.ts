export type Announcement = {
  id: string;
  slug: string;
  type: string;
  title: string;
  excerpt: string;
  content: string[];
  dateLabel: string;
  isoDate: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  href: string;
  important: boolean;
  showPopup: boolean;
  active: boolean;
};
