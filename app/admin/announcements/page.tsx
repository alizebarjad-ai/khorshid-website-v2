"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Announcement = {
  id: string; slug: string; type: string; title: string; excerpt: string; content: string[];
  dateLabel: string; isoDate: string; image: string; imageAlt: string;
  important: boolean; showPopup: boolean; active: boolean;
};

const empty = {
  type: "اطلاعیه", title: "", slug: "", excerpt: "", content: "",
  dateLabel: "", isoDate: new Date().toISOString().slice(0, 16),
  image: "", imageAlt: "", important: false, showPopup: false, active: true
};

export default function AnnouncementsAdmin() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [editing, setEditing] = useState<Announcement | null>(null);
  const [form, setForm] = useState<any>(empty);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function load() {
    const r = await fetch("/api/admin/announcements");
    if (r.ok) setItems((await r.json()).announcements);
    setLoading(false);
  }

  useEffect(() => {
    let cancelled = false;
    async function initialLoad() {
      try {
        const r = await fetch("/api/admin/announcements");
        if (r.ok) {
          const data = await r.json();
          if (!cancelled) setItems(data.announcements);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    initialLoad();
    return () => { cancelled = true; };
  }, []);

  function edit(x: Announcement) {
    setEditing(x);
    setForm({ ...x, content: x.content.join("\n"), isoDate: x.isoDate.slice(0, 16) });
  }

  function fresh() {
    setEditing(null);
    setForm({ ...empty });
    setMessage("");
  }

  async function uploadImage(file?: File) {
    if (!file) return;
    setMessage("");
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const r = await fetch("/api/admin/media", { method: "POST", body: fd });
    const data = await r.json();
    setUploading(false);
    if (!r.ok) {
      setMessage(data.error || "آپلود تصویر ناموفق بود.");
      return;
    }
    setForm((f: any) => ({ ...f, image: data.url }));
    setMessage("تصویر آپلود شد و به اطلاعیه متصل شد.");
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    const payload = {
      ...form,
      content: String(form.content || "").split("\n").map((x: string) => x.trim()).filter(Boolean)
    };
    const r = await fetch("/api/admin/announcements", {
      method: editing ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing ? { ...payload, id: editing.id } : payload)
    });
    const d = await r.json();
    if (!r.ok) { setMessage(d.error || "خطا"); return; }
    setMessage("ذخیره شد.");
    fresh();
    load();
  }

  async function remove(id: string) {
    if (!confirm("این اطلاعیه حذف شود؟")) return;
    const r = await fetch("/api/admin/announcements", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    if (r.ok) load();
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#FFFFFF] px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#4A78B0]">خورشید مفاخر</p>
            <h1 className="mt-2 text-3xl font-extrabold">مدیریت اطلاعیه‌ها</h1>
          </div>
          <Link href="/admin" className="text-sm text-[#4D5B77]">← داشبورد</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <section className="space-y-3">
            {loading ? <p>در حال بارگذاری...</p> : items.map(x => (
              <article key={x.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs text-[#4A78B0]">{x.type} · {x.dateLabel}</p>
                    <h2 className="mt-1 font-bold">{x.title}</h2>
                    <p className="mt-2 text-sm text-[#4D5B77]">{x.excerpt}</p>
                    {x.image && <img src={x.image} alt={x.imageAlt || x.title} className="mt-4 aspect-[16/7] w-full rounded-xl object-cover" />}
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button onClick={() => edit(x)} className="rounded-lg border border-white/10 px-3 py-2 text-xs">ویرایش</button>
                    <button onClick={() => remove(x.id)} className="rounded-lg border border-red-400/30 px-3 py-2 text-xs text-red-300">حذف</button>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[#4D5B77]">{x.active ? "فعال" : "غیرفعال"}{x.important ? " · مهم" : ""}{x.showPopup ? " · پاپ‌آپ" : ""}</p>
              </article>
            ))}
          </section>

          <form onSubmit={save} className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:sticky lg:top-5 lg:h-fit">
            <h2 className="font-bold">{editing ? "ویرایش اطلاعیه" : "اطلاعیه جدید"}</h2>

            {["title", "slug", "type", "dateLabel"].map(k => (
              <input key={k} value={form[k] || ""} onChange={e => setForm({ ...form, [k]: e.target.value })}
                placeholder={k} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-[#4A78B0]"
                required={k === "title" || k === "slug"} />
            ))}

            <div className="rounded-xl border border-white/10 bg-black/20 p-3">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-sm font-bold">تصویر اطلاعیه</span>
                <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading}
                  className="rounded-lg bg-[#4A78B0] px-3 py-2 text-xs font-bold text-black">
                  {uploading ? "در حال آپلود..." : "انتخاب و آپلود تصویر"}
                </button>
              </div>
              <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="hidden"
                onChange={e => { uploadImage(e.target.files?.[0]); e.currentTarget.value = ""; }} />
              {form.image ? (
                <div className="space-y-2">
                  <img src={form.image} alt={form.imageAlt || "پیش‌نمایش"} className="aspect-[16/8] w-full rounded-lg object-cover" />
                  <input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })}
                    placeholder="آدرس تصویر" className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs" />
                </div>
              ) : <p className="text-xs text-[#4D5B77]">هنوز تصویری انتخاب نشده است.</p>}
            </div>

            <input value={form.imageAlt || ""} onChange={e => setForm({ ...form, imageAlt: e.target.value })}
              placeholder="متن جایگزین تصویر (alt)" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm" />

            <textarea value={form.excerpt || ""} onChange={e => setForm({ ...form, excerpt: e.target.value })}
              placeholder="خلاصه" rows={3} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm" />
            <textarea value={form.content || ""} onChange={e => setForm({ ...form, content: e.target.value })}
              placeholder="متن کامل، هر پاراگراف در یک خط" rows={7} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm" />
            <input type="datetime-local" value={form.isoDate || ""} onChange={e => setForm({ ...form, isoDate: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm" />

            <div className="flex flex-wrap gap-4 text-sm">
              {[["active", "فعال"], ["important", "مهم"], ["showPopup", "نمایش پاپ‌آپ"]].map(([k, l]) => (
                <label key={k} className="flex gap-2"><input type="checkbox" checked={!!form[k]}
                  onChange={e => setForm({ ...form, [k]: e.target.checked })} />{l}</label>
              ))}
            </div>

            {message && <p className="text-sm text-[#4A78B0]">{message}</p>}
            <button className="w-full rounded-xl bg-[#4A78B0] px-4 py-3 font-bold text-black">ذخیره اطلاعیه</button>
            {editing && <button type="button" onClick={fresh} className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm">لغو</button>}
          </form>
        </div>
      </div>
    </main>
  );
}
