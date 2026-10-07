"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type RequestItem = {
  id: string;
  type: string;
  name: string;
  phone: string;
  email: string;
  city: string | null;
  artField: string | null;
  organization: string | null;
  role: string | null;
  requestType: string | null;
  audience: string | null;
  subject: string | null;
  area: string | null;
  budget: string | null;
  message: string;
  status: string;
  createdAt: string | Date;
};

const typeLabels: Record<string, string> = {
  membership: "عضویت",
  sponsor: "حمایت و همکاری",
  artist: "هنرمند",
  organization: "همکاری سازمانی",
};

const budgetLabels: Record<string, string> = {
  "under-100m": "کمتر از ۱۰۰ میلیون تومان",
  "100m-1b": "۱۰۰ میلیون تا ۱ میلیارد تومان",
  "1b-5b": "۱ تا ۵ میلیارد تومان",
  "over-5b": "بیش از ۵ میلیارد تومان",
  unknown: "هنوز مشخص نیست",
  "non-cash": "غیرنقدی / قابل برآورد پس از بررسی",
};

const statusLabels: Record<string, string> = {
  new: "جدید",
  contacted: "تماس گرفته شد",
  in_progress: "در حال پیگیری",
  closed: "بسته شد",
  rejected: "رد شده",
  archived: "بایگانی شده",
};

export default function AdminRequests({ initialRequests }: { initialRequests: RequestItem[] }) {
  const [requests, setRequests] = useState(initialRequests);
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<RequestItem | null>(null);
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requests.filter((item) => {
      const matchesStatus = status === "all" || item.status === status;
      const matchesType = type === "all" || item.type === type;
      const haystack = [item.name, item.email, item.phone, item.organization || "", item.subject || ""].join(" ").toLowerCase();
      return matchesStatus && matchesType && (!q || haystack.includes(q));
    });
  }, [requests, status, type, query]);

  async function changeStatus(id: string, nextStatus: string) {
    const response = await fetch("/api/admin/requests", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: nextStatus }),
    });
    if (!response.ok) return;
    const data = await response.json();
    setRequests((items) => items.map((item) => item.id === id ? data.request : item));
    setSelected((item) => item?.id === id ? data.request : item);
  }

  const newCount = requests.filter((item) => item.status === "new").length;

  return (
    <main dir="rtl" className="min-h-screen bg-[#FFFFFF] pt-[72px] text-white">
      <header className="border-b border-white/10 bg-[#07101a]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5">
          <div>
            <p className="text-xs font-bold text-[#4A78B0]">خورشید مفاخر</p>
            <h1 className="mt-1 text-2xl font-extrabold">مدیریت درخواست‌ها</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#4D5B77]">
              {newCount} درخواست جدید
            </div>
            <button
              type="button"
              onClick={logout}
              className="rounded-xl border border-[#4A78B0]/70 bg-[#4A78B0]/10 px-5 py-2 text-sm font-bold text-[#4A78B0] transition hover:bg-[#4A78B0]/20 hover:text-white"
            >
              خروج
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid gap-3 md:grid-cols-[1fr_180px_180px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جست‌وجو نام، ایمیل، تلفن یا مجموعه..."
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none focus:border-[#4A78B0]"
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-xl border border-white/10 bg-[#0a1119] px-4 py-3">
            <option value="all">همه وضعیت‌ها</option>
            {Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-xl border border-white/10 bg-[#0a1119] px-4 py-3">
            <option value="all">همه انواع</option>
            {Object.entries(typeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-right text-sm">
              <thead className="bg-white/[0.04] text-[#4D5B77]">
                <tr>
                  <th className="px-4 py-4">نام</th>
                  <th className="px-4 py-4">نوع</th>
                  <th className="px-4 py-4">تماس</th>
                  <th className="px-4 py-4">موضوع</th>
                  <th className="px-4 py-4">تاریخ</th>
                  <th className="px-4 py-4">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id} onClick={() => setSelected(item)} className="cursor-pointer border-t border-white/8 hover:bg-white/[0.03]">
                    <td className="px-4 py-4 font-semibold">{item.name}</td>
                    <td className="px-4 py-4">{typeLabels[item.type] || item.type}</td>
                    <td className="px-4 py-4 text-[#b8c2cb]">{item.phone}<br />{item.email}</td>
                    <td className="px-4 py-4">{item.subject || item.area || "—"}</td>
                    <td className="px-4 py-4 text-[#4D5B77]">{new Date(item.createdAt).toLocaleString("fa-IR")}</td>
                    <td className="px-4 py-4">{statusLabels[item.status] || item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!filtered.length && <p className="p-10 text-center text-[#4D5B77]">درخواستی با این فیلتر پیدا نشد.</p>}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-[100] flex items-start justify-center overflow-y-auto bg-black/80 px-3 py-4 md:px-6 md:py-8" onClick={() => setSelected(null)}>
          <div className="max-h-[calc(100vh-6rem)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a1119] p-6 shadow-2xl md:max-h-[calc(100vh-8rem)] md:rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-[#4A78B0]">{typeLabels[selected.type] || selected.type}</p>
                <h2 className="mt-1 text-2xl font-extrabold">{selected.name}</h2>
              </div>
              <button onClick={() => setSelected(null)} className="rounded-lg border border-white/10 px-3 py-2 text-sm">بستن</button>
            </div>

            <div className="mt-6 grid gap-3 text-sm md:grid-cols-2">
              {[
                ["تلفن", selected.phone], ["ایمیل", selected.email], ["شهر", selected.city],
                ["حوزه هنری", selected.artField], ["مجموعه", selected.organization], ["سمت", selected.role],
                ["نوع درخواست", selected.requestType], ["نوع متقاضی", selected.audience],
                ["عنوان", selected.subject], ["حوزه / موضوع", selected.area], ["برآورد ارزش همکاری", selected.budget ? (budgetLabels[selected.budget] || selected.budget) : null],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  <span className="text-xs text-[#4D5B77]">{label}</span>
                  <p className="mt-1 text-[#e0e6eb]">{value || "—"}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <span className="text-xs text-[#4D5B77]">توضیحات</span>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-[#e0e6eb]">{selected.message}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {Object.entries(statusLabels).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => changeStatus(selected.id, value)}
                  className={`rounded-xl border px-4 py-2 text-sm ${selected.status === value ? "border-[#4A78B0] bg-[#4A78B0]/10 text-[#4A78B0]" : "border-white/10 text-[#b8c2cb]"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
