import type { Announcement } from "@/types/announcement";
import Link from "next/link";
type LatestAnnouncementsProps = {
  items: Announcement[];
};

export function LatestAnnouncements({ items }: LatestAnnouncementsProps) {
  if (!items.length) return null;

  return (
    <section className="latest-announcements" aria-labelledby="latest-announcements-title">
      <div className="latest-announcements__head">
        <div>
          <p className="solar-kicker">آخرین اخبار و اطلاعیه‌ها</p>
          <h2 id="latest-announcements-title">آنچه تازه در خورشید اتفاق افتاده است</h2>
        </div>
        <Link href="/news">آرشیو اخبار و اطلاعیه‌ها <span aria-hidden="true">←</span></Link>
      </div>
      <div className="latest-announcements__grid">
        {items.map((item) => (
          <article className="latest-announcement-card" key={item.id}>
            <div className="latest-announcement-card__image">
              <img src={item.image} alt={item.imageAlt} loading="lazy" />
              <span>{item.type}</span>
            </div>
            <div className="latest-announcement-card__body">
              <time dateTime={item.isoDate}>{item.dateLabel}</time>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href={item.href}>مشاهده جزئیات <span aria-hidden="true">←</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
