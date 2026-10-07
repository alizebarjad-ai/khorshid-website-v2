import {
  Accessibility, BookOpen, BriefcaseBusiness, Building2, CalendarDays, Camera, Clapperboard, GraduationCap,
  Handshake, HeartHandshake, HeartPulse, Landmark, Megaphone, Music2, Palette, PlayCircle,
  Ruler, Scale, Sparkles, Tv, UserCog, UserPlus, Users, WalletCards, Newspaper, Globe2,
  FlaskConical, ScrollText, CircleHelp
} from "lucide-react";

export type SiteIconName =
  | "art" | "community" | "media" | "partnership"
  | "tv" | "social" | "education" | "health" | "economy"
  | "legal" | "heritage" | "documentation" | "research" | "services"
  | "visual" | "literature" | "music" | "cinema" | "architecture" | "traditional"
  | "responsibility" | "member" | "artist" | "mentor" | "volunteer"
  | "project" | "calendar" | "brand" | "organization" | "contact";

const icons = {
  art: Palette, community: Users, media: Newspaper, partnership: Handshake,
  tv: Tv, social: HeartHandshake, education: GraduationCap, health: HeartPulse,
  economy: WalletCards, legal: Scale, heritage: Landmark, documentation: Camera,
  research: FlaskConical, services: Accessibility, visual: Palette, literature: BookOpen, music: Music2,
  cinema: Clapperboard, architecture: Ruler, traditional: Landmark,
  responsibility: Megaphone, member: UserPlus, artist: Palette, mentor: UserCog,
  volunteer: HeartHandshake, project: BriefcaseBusiness, calendar: CalendarDays, brand: Building2,
  organization: Globe2, contact: CircleHelp,
} as const;

export function SiteIcon({ name, size = 24, strokeWidth = 1.5, className = "" }: {
  name: SiteIconName; size?: number; strokeWidth?: number; className?: string;
}) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" size={size} strokeWidth={strokeWidth} className={className} />;
}

export function IconBadge({ name, size = 44 }: { name: SiteIconName; size?: number }) {
  return <span className="icon-badge" aria-hidden="true"><SiteIcon name={name} size={size} /></span>;
}
