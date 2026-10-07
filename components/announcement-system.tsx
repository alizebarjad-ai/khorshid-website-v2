"use client";

import { useEffect, useState } from "react";
import type { Announcement } from "@/types/announcement";

const STORAGE_KEY = "khorshid-seen-announcement";

function formatDate(announcement: Announcement) {
  return announcement.dateLabel;
}

type AnnouncementPopupProps = {
  announcement: Announcement | null;
};

export function AnnouncementPopup({ announcement }: AnnouncementPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!announcement) return;

    const seen = window.localStorage.getItem(STORAGE_KEY);
    if (seen !== announcement.id) {
      const timer = window.setTimeout(() => setOpen(true), 900);
      return () => window.clearTimeout(timer);
    }
  }, [announcement]);

  const close = () => {
    if (!announcement) return;
    window.localStorage.setItem(STORAGE_KEY, announcement.id);
    setOpen(false);
  };

  if (!announcement || !open) return null;

  return (
    <div className="announcement-modal" role="dialog" aria-modal="true" aria-labelledby="announcement-title">
      <button className="announcement-modal__backdrop" onClick={close} aria-label="بستن اطلاعیه" />
      <article className="announcement-modal__card">
        <button className="announcement-modal__close" onClick={close} aria-label="بستن">×</button>
        <div className="announcement-modal__image">
          <img src={announcement.image} alt={announcement.imageAlt} />
          <span>{announcement.type}</span>
        </div>
        <div className="announcement-modal__body">
          <p className="announcement-modal__eyebrow">اطلاعیه مهم خورشید مفاخر</p>
          <h2 id="announcement-title">{announcement.title}</h2>
          <p>{announcement.excerpt}</p>
          <div className="announcement-modal__meta">{formatDate(announcement)}</div>
          <div className="announcement-modal__actions">
            <a className="announcement-primary" href={announcement.href} onClick={() => window.localStorage.setItem(STORAGE_KEY, announcement.id)}>
              مشاهده جزئیات
            </a>
            <button className="announcement-secondary" onClick={close}>بعداً می‌خوانم</button>
          </div>
        </div>
      </article>
    </div>
  );
}
