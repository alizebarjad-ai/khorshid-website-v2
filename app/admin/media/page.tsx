"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type MediaFile = { url: string; pathname: string; size: number; uploadedAt: string };

export default function MediaAdmin() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function load() {
    const r = await fetch("/api/admin/media");
    if (r.ok) setFiles((await r.json()).files);
    setLoading(false);
  }

  useEffect(() => {
    let cancelled = false;
    async function initialLoad() {
      try {
        const r = await fetch("/api/admin/media");
        if (r.ok) {
          const data = await r.json();
          if (!cancelled) setFiles(data.files);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    initialLoad();
    return () => { cancelled = true; };
  }, []);

  async function upload(file?: File) {
    if (!file) return;
    setMessage("");
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    const r = await fetch("/api/admin/media", { method: "POST", body: form });
    const data = await r.json();
    setUploading(false);
    if (!r.ok) {
      setMessage(data.error || "آپلود ناموفق بود.");
      return;
    }
    setMessage("تصویر با موفقیت آپلود شد.");
    load();
  }

  async function remove(url: string) {
    if (!confirm("این تصویر حذف شود؟ اگر در اطلاعیه یا صفحه‌ای استفاده شده باشد، دیگر نمایش داده نمی‌شود.")) return;
    const r = await fetch("/api/admin/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    if (r.ok) load();
    else setMessage("حذف تصویر ناموفق بود.");
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#FFFFFF] px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#4A78B0]">خورشید مفاخر</p>
            <h1 className="mt-2 text-3xl font-extrabold">مدیریت رسانه</h1>
            <p className="mt-2 text-sm text-[#4D5B77]">تصاویر قابل استفاده در اطلاعیه‌ها، رویدادها و پروژه‌ها</p>
          </div>
          <Link href="/admin" className="text-sm text-[#4D5B77]">← داشبورد</Link>
        </div>

        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 px-6 py-10 text-center hover:border-[#4A78B0]/60">
            <span className="text-lg font-bold">{uploading ? "در حال آپلود..." : "افزودن تصویر"}</span>
            <span className="mt-2 text-sm text-[#4D5B77]">JPG، PNG، WEBP یا GIF، حداکثر ۵ مگابایت</span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="hidden"
              disabled={uploading}
              onChange={(e) => { upload(e.target.files?.[0]); e.currentTarget.value = ""; }}
            />
          </label>
          {message && <p className="mt-3 text-sm text-[#4A78B0]">{message}</p>}
        </div>

        {loading ? <p>در حال بارگذاری...</p> : files.length === 0 ? (
          <p className="text-sm text-[#4D5B77]">هنوز تصویری آپلود نشده است.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {files.map((file) => (
              <article key={file.url} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="aspect-[16/10] bg-black/30">
                  <img src={file.url} alt={file.pathname} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="truncate text-xs text-[#4D5B77]" title={file.pathname}>{file.pathname}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => navigator.clipboard.writeText(file.url)}
                      className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-xs"
                    >کپی آدرس</button>
                    <button
                      onClick={() => remove(file.url)}
                      className="rounded-lg border border-red-400/30 px-3 py-2 text-xs text-red-300"
                    >حذف</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
