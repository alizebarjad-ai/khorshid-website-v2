"use client";

import { FormEvent, useState } from "react";

type FormType = "membership" | "sponsor" | "artist" | "organization";

const formLabels: Record<FormType, { title: string; description: string }> = {
  membership: { title: "درخواست عضویت", description: "اطلاعات اولیه خود را ثبت کنید تا درخواست شما در مسیر عضویت بررسی شود." },
  sponsor: { title: "درخواست همکاری و حمایت", description: "اگر حامی، اسپانسر یا شریک اقتصادی هستید، مسیر همکاری را با ما آغاز کنید." },
  artist: { title: "همکاری هنرمند", description: "برای مشارکت در پروژه‌ها و برنامه‌های هنری و اجتماعی خورشید اطلاعات خود را ثبت کنید." },
  organization: { title: "همکاری سازمانی", description: "برای طراحی یا اجرای پروژه مشترک، اطلاعات اولیه همکاری را ارسال کنید." },
};

export function ParticipationForm() {
  const [type, setType] = useState<FormType>("membership");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/participation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type, consent: data.consent === "on" }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "ارسال درخواست انجام نشد.");
      }

      setSubmitted(true);
      form.reset();
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "ارسال درخواست انجام نشد.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="border-b border-white/10 py-16 md:py-24" id="form">
      <div className="container-site grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <div>
          <p className="eyebrow">شروع ارتباط</p>
          <h2 className="section-title">مسیر مناسب خود را انتخاب کنید.</h2>
          <p className="mt-5 max-w-xl text-[14px] leading-8 text-[#4D5B77]">
            این فرم برای دریافت اطلاعات اولیه است. پس از بررسی، ادامه فرایند متناسب با نوع همکاری انجام می‌شود.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 md:p-8">
          <div className="grid gap-2 sm:grid-cols-2">
            {(Object.keys(formLabels) as FormType[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => { setType(key); setSubmitted(false); setError(""); }}
                className={`rounded-xl border px-4 py-3 text-right text-[13px] transition ${type === key ? "border-[#4A78B0]/55 bg-[#4A78B0]/10 text-[#4A78B0]" : "border-white/10 bg-white/[.02] text-[#4D5B77] hover:border-white/20 hover:text-white"}`}
              >
                {formLabels[key].title}
              </button>
            ))}
          </div>

          <div className="mt-7 border-t border-white/10 pt-7">
            <h3 className="text-[20px] font-bold">{formLabels[type].title}</h3>
            <p className="mt-2 text-[13px] leading-7 text-[#4D5B77]">{formLabels[type].description}</p>
          </div>

          {submitted ? (
            <div className="mt-7 rounded-2xl border border-[#4A78B0]/25 bg-[#4A78B0]/7 p-6">
              <p className="text-[16px] font-bold text-[#4A78B0]">درخواست شما با موفقیت ارسال شد.</p>
              <p className="mt-2 text-[13px] leading-7 text-[#4D5B77]">اطلاعات درخواست برای بررسی و ادامه ارتباط به انجمن ارسال شد.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-5 text-[12px] text-[#4A78B0]">ثبت درخواست جدید</button>
            </div>
          ) : (
            <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-[12px] text-[#4D5B77]">نام و نام خانوادگی<input required name="name" className="form-input" placeholder="نام و نام خانوادگی" /></label>
                <label className="grid gap-2 text-[12px] text-[#4D5B77]">شماره تماس<input required name="phone" type="tel" className="form-input" placeholder="۰۹۱۲..." /></label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-[12px] text-[#4D5B77]">ایمیل<input required name="email" type="email" className="form-input" placeholder="name@example.com" /></label>
                <label className="grid gap-2 text-[12px] text-[#4D5B77]">شهر<input name="city" className="form-input" placeholder="شهر محل فعالیت" /></label>
              </div>
              {type === "artist" && <label className="grid gap-2 text-[12px] text-[#4D5B77]">حوزه هنری<input name="artField" className="form-input" placeholder="مثلاً موسیقی، تئاتر، هنرهای تجسمی" /></label>}
              {(type === "sponsor" || type === "organization") && <label className="grid gap-2 text-[12px] text-[#4D5B77]">نام مجموعه<input name="organization" className="form-input" placeholder="نام شرکت، سازمان یا مجموعه" /></label>}
              <label className="grid gap-2 text-[12px] text-[#4D5B77]">توضیحات و زمینه همکاری<textarea required name="message" rows={5} className="form-input resize-y" placeholder="در چند خط، زمینه علاقه یا پیشنهاد همکاری خود را توضیح دهید." /></label>
              <label className="flex items-start gap-3 text-[12px] leading-6 text-[#4D5B77]"><input required name="consent" type="checkbox" className="mt-1 accent-[#4A78B0]" />با ثبت فرم، با بررسی اطلاعات ارائه‌شده برای ادامه فرایند ارتباط موافقم.</label>
              {error && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-[12px] leading-6 text-red-200">{error}</p>}
              <button disabled={isSubmitting} type="submit" className="btn-primary w-full px-6 py-3.5 text-[13px] disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "در حال ارسال..." : "ثبت درخواست"}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
