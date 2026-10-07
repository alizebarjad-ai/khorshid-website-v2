"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      router.replace("/admin");
      router.refresh();
    } else {
      const data = await response.json().catch(() => ({}));
      setError(data.error || "ورود ناموفق بود.");
    }
    setLoading(false);
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#FFFFFF] px-5 py-20 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
        <p className="text-sm font-bold text-[#4A78B0]">خورشید مفاخر</p>
        <h1 className="mt-3 text-3xl font-extrabold">ورود به مدیریت</h1>
        <p className="mt-3 text-sm leading-7 text-[#4D5B77]">
          پنل داخلی برای بررسی و پیگیری درخواست‌های مشارکت.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-[#c8d0d8]">رمز عبور مدیریت</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-[#4A78B0]"
            />
          </label>
          {error && <p className="text-sm text-red-300">{error}</p>}
          <button
            disabled={loading}
            className="w-full rounded-xl bg-[#4A78B0] px-5 py-3 font-bold text-black disabled:opacity-50"
          >
            {loading ? "در حال ورود..." : "ورود"}
          </button>
        </form>
      </div>
    </main>
  );
}
