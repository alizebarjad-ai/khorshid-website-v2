"use client";

import { useEffect, useState, type ReactNode } from "react";

type HomeMotionProps = { children: ReactNode };

export function HomeMotion({ children }: HomeMotionProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
      });
    };

    const scenes = document.querySelectorAll<HTMLElement>(".solar-scene");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    update();
    window.addEventListener("scroll", update, { passive: true });
    scenes.forEach(scene => observer.observe(scene));

    return () => {
      window.removeEventListener("scroll", update);
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="solar-progress" style={{ transform: `scaleX(${progress})` }} />
      {children}
    </>
  );
}

type MissionInteractiveProps = {
  activityAreas: Array<{ title: string; kicker: string; text: string; image: string; alt: string; featured?: boolean }>;
  supportAreas: string[][];
  socialIssues: string[];
};

export function MissionInteractive({ activityAreas, supportAreas, socialIssues }: MissionInteractiveProps) {
  const [supportOpen, setSupportOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <>
      <div className="mission-columns mission-primary-columns">
        {activityAreas.slice(0, 2).map((area, index) => (
          <article key={area.title} className="mission-card mission-card-featured">
            <div className="mission-card-image">
              <img src={area.image} alt={area.alt} loading="lazy" />
              <div />
            </div>
            <div className="mission-card-body">
              <span className="mission-index">۰{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <button onClick={() => index === 0 ? setSupportOpen(value => !value) : setSocialOpen(value => !value)} aria-expanded={index === 0 ? supportOpen : socialOpen}>
                {(index === 0 ? supportOpen : socialOpen)
                  ? "بستن حوزه‌ها"
                  : index === 0 ? "مشاهده ۷ حوزه حمایتی" : "مشاهده ۱۱ مسئله اجتماعی"} <span>←</span>
              </button>
              {index === 0 ? (
                <div className={`mission-detail ${supportOpen ? "open" : ""}`}>
                  {supportAreas.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}
                </div>
              ) : (
                <div className={`mission-detail ${socialOpen ? "open" : ""}`}>
                  {socialIssues.map((title, issueIndex) => <div key={title}><strong>{["۰۱","۰۲","۰۳","۰۴","۰۵","۰۶","۰۷","۰۸","۰۹","۱۰","۱۱"][issueIndex]}</strong><span>{title}</span></div>)}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mission-secondary-label">
        <span>چهار حوزه مکمل</span>
        <i aria-hidden="true" />
      </div>

      <div className="mission-secondary-grid">
        {activityAreas.slice(2).map((area) => (
          <article key={area.title} className="mission-secondary-card">
            <div className="mission-secondary-image"><img src={area.image} alt={area.alt} loading="lazy" /><div /></div>
            <div className="mission-secondary-body">
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
