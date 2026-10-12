import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getAnnouncementBySlug } from "@/lib/announcements";

export const revalidate = 60;

const BASE = "https://www.khorshid-mafakher.ir";

function absoluteImageUrl(image: string) {
  return image.startsWith("http://") || image.startsWith("https://")
    ? image
    : `${BASE}${image.startsWith("/") ? image : `/${image}`}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getAnnouncementBySlug(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: item.href },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
      publishedTime: item.isoDate,
      modifiedTime: item.updatedAt,
      images: [{ url: absoluteImageUrl(item.image), alt: item.imageAlt }],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getAnnouncementBySlug(slug);
  if (!item || !item.active) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${BASE}${item.href}#newsarticle`,
    headline: item.title,
    description: item.excerpt,
    image: [absoluteImageUrl(item.image)],
    datePublished: item.isoDate,
    dateModified: item.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}${item.href}`,
    },
    author: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "سازمان مردم‌نهاد خورشید مفاخر",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "سازمان مردم‌نهاد خورشید مفاخر",
    },
    articleSection: item.type,
    inLanguage: "fa-IR",
  };

  return (
    <>
      <Script
        id="news-article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="news-detail-page">
        <article className="event-detail">
          <section className="event-hero">
            <div className="event-hero__image">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 62vw"
                />
              ) : (
                <div className="h-full w-full bg-[#0b1118]" aria-hidden="true" />
              )}
            </div>
            <div className="event-hero__content container-site">
              <div className="event-hero__copy">
                <p className="event-hero__eyebrow">{item.type}</p>
                <h1>{item.title}</h1>
                <p className="event-hero__lead">{item.excerpt}</p>
                <div className="event-hero__meta">
                  <span>{item.dateLabel}</span>
                </div>
                <a className="btn-secondary" href="#news-details">ادامه مطلب <span>↓</span></a>
              </div>
            </div>
          </section>

          <section id="news-details" className="event-content container-site">
            <div className="event-content__main">
              <div className="event-content__heading">
                <p className="solar-kicker">خورشید مفاخر</p>
                <h2>{item.type}</h2>
              </div>
              <div className="news-detail__content">
                {item.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <Link className="btn-secondary" href="/news">← بازگشت به اخبار و اطلاعیه‌ها</Link>
            </div>

            <aside className="event-facts" aria-label="اطلاعات اطلاعیه">
              <div className="event-facts__item"><span>نوع</span><strong>{item.type}</strong></div>
              <div className="event-facts__item"><span>تاریخ</span><strong>{item.dateLabel}</strong></div>
            </aside>
          </section>
        </article>
      </main>
    </>
  );
}
