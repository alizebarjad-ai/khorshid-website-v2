import type { Metadata } from "next";
import Script from "next/script";
import { getActiveAnnouncements } from "@/lib/announcements";

const BASE = "https://www.khorshid-mafakher.ir";

export const metadata: Metadata = {
  title: "اخبار و اطلاعیه‌ها",
  description: "آخرین اخبار، اطلاعیه‌ها و رویدادهای سازمان مردم‌نهاد خورشید مفاخر.",
  alternates: { canonical: "/news" },
};

export const revalidate = 60;

export default async function NewsPage() {
  const announcements = await getActiveAnnouncements();

  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE}/news#webpage`,
    name: "اخبار و اطلاعیه‌های خورشید مفاخر",
    description: "آخرین اخبار، اطلاعیه‌ها و رویدادهای سازمان مردم‌نهاد خورشید مفاخر.",
    url: `${BASE}/news`,
    inLanguage: "fa-IR",
    isPartOf: { "@id": `${BASE}/#website` },
    publisher: { "@id": `${BASE}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: announcements.length,
      itemListElement: announcements.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `${BASE}${item.href}`,
      })),
    },
  };

  return (
    <>
      <Script
        id="news-list-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="news-page">
        <section className="news-hero">
          <div className="container-site">
            <p className="solar-kicker">خورشید مفاخر</p>
            <h1>اخبار و اطلاعیه‌ها</h1>
            <p>آخرین رویدادها، اطلاعیه‌ها و خبرهای رسمی خورشید مفاخر را در این بخش دنبال کنید.</p>
          </div>
        </section>

        <section className="news-list-section">
          <div className="container-site">
            <div className="news-list">
              {announcements.map((item) => (
                <article className="news-list-card" key={item.id}>
                  <div className="news-list-card__image">
                    <img src={item.image} alt={item.imageAlt} />
                  </div>
                  <div className="news-list-card__body">
                    <div className="news-list-card__meta">
                      <span>{item.type}</span>
                      <time dateTime={item.isoDate}>{item.dateLabel}</time>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.excerpt}</p>
                    <a className="btn-primary" href={item.href}>مشاهده جزئیات <span>←</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
