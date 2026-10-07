"use client";

import { FormEvent, useState } from "react";

export type ParticipationRequestType =
  | "membership"
  | "project"
  | "expertise"
  | "volunteer"
  | "project-proposal"
  | "organization"
  | "financial-support"
  | "non-cash-support"
  | "csr"
  | "sponsorship"
  | "media"
  | "public-contact"
  | "other";

type FormRequestType =
  | ""
  | "membership"
  | "collaboration"
  | "organization"
  | "support"
  | "project-proposal"
  | "media"
  | "public-contact"
  | "other";

const initialForm = {
  audience: "",
  requestType: "" as FormRequestType,
  name: "",
  organization: "",
  role: "",
  phone: "",
  email: "",
  subject: "",
  area: "",
  budget: "",
  message: "",
  contactMethod: "phone",
  consent: false,
  website: "",
};

const controlClass =
  "w-full rounded-xl border border-white/10 bg-[#111a24] px-4 py-3 text-[13px] text-[#020C21] outline-none transition placeholder:text-[#6f7f8d] focus:border-[#4A78B0]/60 focus:bg-[#162230]";

const optionClass = "bg-[#111a24] text-[#020C21]";

const requestLabels: Record<string, string> = {
  membership: "عضویت در جامعه خورشید",
  collaboration: "همکاری در فعالیت‌ها",
  organization: "همکاری سازمانی و مسئولیت اجتماعی",
  support: "حمایت و اسپانسرینگ",
  "project-proposal": "پیشنهاد پروژه یا ایده",
  media: "همکاری رسانه‌ای و تولید محتوا",
  "public-contact": "ارتباط عمومی",
  other: "سایر",
};

function normalizeInitialRequestType(value: ParticipationRequestType | ""): FormRequestType {
  switch (value) {
    case "membership":
      return "membership";
    case "project":
    case "expertise":
    case "volunteer":
      return "collaboration";
    case "organization":
    case "csr":
      return "organization";
    case "financial-support":
    case "non-cash-support":
    case "sponsorship":
      return "support";
    case "project-proposal":
      return "project-proposal";
    case "media":
      return "media";
    case "public-contact":
      return "public-contact";
    case "other":
      return "other";
    default:
      return "";
  }
}

export default function ParticipationForm({
  initialRequestType = "",
}: {
  initialRequestType?: ParticipationRequestType | "";
}) {
  const normalizedInitialType = normalizeInitialRequestType(initialRequestType);
  const [form, setForm] = useState({
    ...initialForm,
    requestType: normalizedInitialType,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = <K extends keyof typeof initialForm>(
    key: K,
    value: (typeof initialForm)[K],
  ) => setForm((current) => ({ ...current, [key]: value }));

  function getRequestOptions(audience: string) {
    if (audience === "company" || audience === "government") {
      return [
        ["organization", "همکاری سازمانی و مسئولیت اجتماعی"],
        ["support", "حمایت و اسپانسرینگ"],
        ["project-proposal", "پیشنهاد پروژه یا ایده"],
        ["media", "همکاری رسانه‌ای و تولید محتوا"],
        ["other", "سایر"],
      ] as const;
    }

    if (audience === "artist") {
      return [
        ["membership", "عضویت در جامعه خورشید"],
        ["collaboration", "همکاری در فعالیت‌ها"],
        ["project-proposal", "پیشنهاد پروژه یا ایده"],
        ["media", "همکاری رسانه‌ای و تولید محتوا"],
        ["other", "سایر"],
      ] as const;
    }

    if (audience === "media") {
      return [
        ["media", "همکاری رسانه‌ای و تولید محتوا"],
        ["project-proposal", "پیشنهاد پروژه یا ایده"],
        ["public-contact", "ارتباط عمومی"],
        ["other", "سایر"],
      ] as const;
    }

    return [
      ["membership", "عضویت در جامعه خورشید"],
      ["collaboration", "همکاری در فعالیت‌ها"],
      ["project-proposal", "پیشنهاد پروژه یا ایده"],
      ["support", "حمایت و اسپانسرینگ"],
      ["media", "همکاری رسانه‌ای و تولید محتوا"],
      ["other", "سایر"],
    ] as const;
  }

  const requestOptions = getRequestOptions(form.audience);

  const showOrganization = form.audience === "company" || form.audience === "government";
  const showBudget = ["organization", "support", "project-proposal"].includes(form.requestType);
  const showArea = form.requestType !== "membership" && form.requestType !== "public-contact";
  const showSubject = form.requestType !== "membership";
  const showRole = form.audience !== "media";

  function handleAudienceChange(value: string) {
    const nextOptions = getRequestOptions(value);
    const currentRequestStillValid = nextOptions.some(([key]) => key === form.requestType);

    setForm((current) => ({
      ...current,
      audience: value,
      requestType: currentRequestStillValid
        ? current.requestType
        : ((nextOptions[0]?.[0] as FormRequestType | undefined) || ""),
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const type =
      form.requestType === "membership"
        ? "membership"
        : form.audience === "artist"
          ? "artist"
          : form.audience === "company" ||
              form.audience === "government" ||
              form.requestType === "organization"
            ? "organization"
            : "sponsor";

    const message = [
      "عنوان درخواست: " + (form.subject || "-"),
      "نوع درخواست: " + (requestLabels[form.requestType] || form.requestType),
      "حوزه مورد نظر: " + (form.area || "-"),
      "سمت / نقش: " + (form.role || "-"),
      "بودجه / ارزش تقریبی: " + (form.budget || "-"),
      "روش ترجیحی تماس: " + form.contactMethod,
      "",
      form.message,
    ].join("\n");

    try {
      const response = await fetch("/api/participation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          requestType: form.requestType,
          audience: form.audience,
          name: form.name,
          phone: form.phone,
          email: form.email,
          organization: form.organization,
          role: form.role,
          subject: form.subject,
          area: form.area,
          budget: form.budget,
          message,
          consent: form.consent,
          website: form.website,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "ارسال درخواست انجام نشد.");

      setStatus("success");
      setForm({ ...initialForm, requestType: normalizedInitialType });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-[#4A78B0]/30 bg-[#4A78B0]/[0.07] p-8 md:p-10">
        <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#4A78B0]/30 bg-[#4A78B0]/10 text-2xl text-[#4A78B0]">✓</div>
        <p className="eyebrow mt-6">درخواست دریافت شد</p>
        <h3 className="mt-2 text-[26px] font-extrabold leading-[1.7]">درخواست شما با موفقیت ثبت و برای بررسی ارسال شد.</h3>
        <p className="mt-3 max-w-2xl text-[14px] leading-8 text-[#4D5B77]">
          اطلاعات شما برای بررسی اولیه و هماهنگی با مسیر مربوط استفاده می‌شود. در صورت نیاز، تیم خورشید برای تکمیل اطلاعات با شما تماس خواهد گرفت.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-secondary mt-7 px-5 py-3 text-[13px]">ثبت درخواست جدید</button>
      </div>
    );
  }

  return (
    <form id="participation-form" onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-9">
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">\n        <label>وب‌سایت<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label>\n      </div>\n\n      <div className="mb-7 rounded-2xl border border-white/8 bg-white/[0.025] p-4 text-[12px] leading-7 text-[#4D5B77]">
        ابتدا بگویید برای چه کاری با خورشید در ارتباط هستید. سپس فقط اطلاعات مرتبط با همان مسیر نمایش داده می‌شود.
      </div>

      <div className="grid gap-7 lg:grid-cols-2">
        <Field label="نوع متقاضی" required>
          <select
            required
            value={form.audience}
            onChange={(e) => handleAudienceChange(e.target.value)}
            className={controlClass}
          >
            <option value="" className={optionClass}>انتخاب کنید</option>
            <option value="company" className={optionClass}>شرکت / برند</option>
            <option value="government" className={optionClass}>سازمان / نهاد</option>
            <option value="individual" className={optionClass}>شخص حقیقی</option>
            <option value="artist" className={optionClass}>هنرمند / فعال فرهنگی</option>
            <option value="specialist" className={optionClass}>متخصص / مشاور</option>
            <option value="media" className={optionClass}>رسانه / خبرنگار</option>
            <option value="other" className={optionClass}>سایر</option>
          </select>
        </Field>

        <Field label="هدف از ارتباط" required>
          <select
            required
            value={form.requestType}
            onChange={(e) => update("requestType", e.target.value as FormRequestType)}
            className={controlClass}
          >
            <option value="" className={optionClass}>ابتدا نوع متقاضی را انتخاب کنید</option>
            {requestOptions.map(([value, label]) => (
              <option key={value} value={value} className={optionClass}>{label}</option>
            ))}
          </select>
        </Field>

        <Field label="نام و نام خانوادگی" required>
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} className={controlClass} placeholder="نام و نام خانوادگی" />
        </Field>

        {showOrganization && (
          <Field label="نام شرکت یا سازمان" required>
            <input required value={form.organization} onChange={(e) => update("organization", e.target.value)} className={controlClass} placeholder="نام مجموعه" />
          </Field>
        )}

        {showRole && (
          <Field label="سمت / نقش شما">
            <input value={form.role} onChange={(e) => update("role", e.target.value)} className={controlClass} placeholder="مثلاً مدیرعامل، مدیر روابط عمومی، هنرمند..." />
          </Field>
        )}

        <Field label="شماره تماس" required>
          <input required type="tel" dir="ltr" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={controlClass + " text-right"} placeholder="مثلاً 0912..." />
        </Field>

        <Field label="ایمیل" required>
          <input required type="email" dir="ltr" value={form.email} onChange={(e) => update("email", e.target.value)} className={controlClass + " text-right"} placeholder="name@example.com" />
        </Field>

        {showArea && (
          <Field label="حوزه یا موضوع مورد نظر">
            <input value={form.area} onChange={(e) => update("area", e.target.value)} className={controlClass} placeholder="مثلاً کودکان آسیب‌پذیر، هنر، آموزش..." />
          </Field>
        )}

        {showBudget && (
          <Field label="برآورد تقریبی ارزش همکاری">
            <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={controlClass}>
              <option value="" className={optionClass}>در صورت ارتباط با درخواست</option>
              <option value="under-100m" className={optionClass}>کمتر از ۱۰۰ میلیون تومان</option>
              <option value="100m-1b" className={optionClass}>۱۰۰ میلیون تا ۱ میلیارد تومان</option>
              <option value="1b-5b" className={optionClass}>۱ تا ۵ میلیارد تومان</option>
              <option value="over-5b" className={optionClass}>بیش از ۵ میلیارد تومان</option>
              <option value="unknown" className={optionClass}>هنوز مشخص نیست</option>
              <option value="non-cash" className={optionClass}>غیرنقدی / قابل برآورد پس از بررسی</option>
            </select>
          </Field>
        )}

        {showSubject && (
          <Field label="عنوان درخواست">
            <input value={form.subject} onChange={(e) => update("subject", e.target.value)} className={controlClass} placeholder="یک عنوان کوتاه برای درخواست" />
          </Field>
        )}

        <Field label="روش ترجیحی تماس">
          <select value={form.contactMethod} onChange={(e) => update("contactMethod", e.target.value)} className={controlClass}>
            <option value="phone" className={optionClass}>تماس تلفنی</option>
            <option value="email" className={optionClass}>ایمیل</option>
            <option value="whatsapp" className={optionClass}>پیام‌رسان / واتساپ</option>
          </select>
        </Field>

        <div className="lg:col-span-2">
          <Field label="شرح درخواست" required>
            <textarea
              required
              minLength={20}
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={controlClass + " resize-y"}
              placeholder={
                form.requestType === "membership"
                  ? "کوتاه درباره خودتان و دلیل علاقه‌مندی به عضویت بنویسید."
                  : form.requestType === "organization"
                    ? "مسئله، هدف یا نوع همکاری موردنظر سازمان خود را توضیح دهید."
                    : form.requestType === "support"
                      ? "نوع حمایت یا برنامه‌ای را که مایل به حمایت از آن هستید توضیح دهید."
                      : "در چند جمله توضیح دهید چه چیزی مدنظر شماست."
              }
            />
          </Field>
        </div>

        <label className="lg:col-span-2 flex cursor-pointer items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
          <input required type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 h-4 w-4 accent-[#4A78B0]" />
          <span className="text-[12px] leading-7 text-[#4D5B77]">با ارسال این فرم، با بررسی اطلاعات ارائه‌شده برای پیگیری درخواست و هماهنگی اولیه موافقم.</span>
        </label>
      </div>

      {status === "error" && <div role="alert" className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/[0.06] px-5 py-4 text-[13px] leading-7 text-[#f2b8b5]">{error}</div>}

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-[12px] leading-7 text-[#81909e]">اطلاعات این فرم فقط برای بررسی درخواست و هماهنگی اولیه استفاده می‌شود. لطفاً اطلاعات غیرضروری یا محرمانه را در فرم وارد نکنید.</p>
        <button disabled={status === "sending"} type="submit" className="btn-primary min-w-[190px] px-6 py-3 text-[13px] disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? "در حال ارسال..." : "ثبت و ارسال درخواست"}</button>
      </div>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-[12px] font-bold text-[#dce4ea]">{label}{required && <span className="mr-1 text-[#4A78B0]">*</span>}</span>{children}</label>;
}
