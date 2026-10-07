import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, adminPasswordMatches, createAdminSession } from "@/lib/admin-auth";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function getClientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  const key = getClientKey(request);
  const now = Date.now();
  const current = attempts.get(key);
  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: "تعداد تلاش‌های ورود بیش از حد مجاز است. ۱۵ دقیقه بعد دوباره تلاش کنید." }, { status: 429 });
  }
  if (current && current.resetAt <= now) attempts.delete(key);

  try {
    const body = await request.json();
    const password = typeof body?.password === "string" ? body.password : "";

    if (!adminPasswordMatches(password)) {
      const next = attempts.get(key);
      attempts.set(key, {
        count: (next?.count || 0) + 1,
        resetAt: next?.resetAt && next.resetAt > now ? next.resetAt : now + WINDOW_MS,
      });
      return NextResponse.json({ error: "رمز عبور نادرست است." }, { status: 401 });
    }

    attempts.delete(key);

    let session: string;
    try {
      session = createAdminSession();
    } catch {
      return NextResponse.json({ error: "تنظیمات امنیتی سامانه کامل نشده است." }, { status: 503 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE, session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "در ورود خطایی رخ داد." }, { status: 400 });
  }
}
