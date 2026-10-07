import { del, list, put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

async function authorized() {
  const store = await cookies();
  return verifyAdminSession(store.get(ADMIN_COOKIE)?.value);
}

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_FILE_SIZE = 5 * 1024 * 1024;

function isOwnedMediaUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname.endsWith(".public.blob.vercel-storage.com") && url.pathname.startsWith("/media/");
  } catch {
    return false;
  }
}

export async function GET() {
  if (!(await authorized())) return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });
  try {
    const result = await list({ prefix: "media/" });
    return NextResponse.json({
      files: result.blobs
        .filter((b) => b.pathname.startsWith("media/"))
        .map((b) => ({ url: b.url, pathname: b.pathname, size: b.size, uploadedAt: b.uploadedAt })),
    });
  } catch {
    return NextResponse.json({ error: "خواندن رسانه‌ها ناموفق بود." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!(await authorized())) return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });

  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) return NextResponse.json({ error: "فایل تصویر ارسال نشده است." }, { status: 400 });
    if (!ALLOWED.has(file.type)) return NextResponse.json({ error: "فرمت مجاز: JPG، PNG، WEBP یا GIF." }, { status: 400 });
    if (file.size <= 0 || file.size > MAX_FILE_SIZE) return NextResponse.json({ error: "حداکثر حجم تصویر ۵ مگابایت است." }, { status: 400 });

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(-100);
    const blob = await put(`media/${Date.now()}-${safeName || "image"}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json({ url: blob.url, pathname: blob.pathname }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "آپلود تصویر ناموفق بود." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!(await authorized())) return NextResponse.json({ error: "دسترسی غیرمجاز است." }, { status: 401 });
  try {
    const body = await req.json();
    const url = typeof body?.url === "string" ? body.url.trim() : "";
    if (!isOwnedMediaUrl(url)) return NextResponse.json({ error: "آدرس تصویر نامعتبر است." }, { status: 400 });
    await del(url);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "حذف تصویر ناموفق است." }, { status: 500 });
  }
}
