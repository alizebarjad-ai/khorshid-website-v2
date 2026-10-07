import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "khorshid_admin";

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

export function createAdminSession() {
  const configuredSecret = secret();
  if (!configuredSecret) {
  console.error("[admin-auth] ADMIN_SESSION_SECRET is missing at runtime");
  throw new Error("ADMIN_SESSION_SECRET is not configured");
}

  const timestamp = String(Date.now());
  const signature = createHmac("sha256", configuredSecret).update(timestamp).digest("hex");
  return `${timestamp}.${signature}`;
}

export function verifyAdminSession(token: string | undefined) {
  const configuredSecret = secret();
  if (!token || !configuredSecret) return false;

  const [timestamp, signature] = token.split(".");
  if (!timestamp || !signature || !/^\d+$/.test(timestamp)) return false;

  const age = Date.now() - Number(timestamp);
  if (age < 0 || age > 24 * 60 * 60 * 1000) return false;

  const expected = createHmac("sha256", configuredSecret).update(timestamp).digest("hex");
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function adminPasswordMatches(password: string) {
  const configured = process.env.ADMIN_PASSWORD || "";
  if (!configured || !password) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(configured);
  return a.length === b.length && timingSafeEqual(a, b);
}
