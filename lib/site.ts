import { headers } from "next/headers";

// Site config — single source for production URLs
// Override with env: NEXT_PUBLIC_SITE_URL=https://yourdomain.com
// If no env, defaults to https://abstraklabs.com (update when domain is final)
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) ||
  "https://abstraklabs.com";

export const siteName = "Abstrak Labs";
export const siteTagline = "Hire an AI Freelancer — From $10/Hour";

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${p}`;
}

// Same Vercel project serves multiple domains (abstraklabs.com, talo.abstraklabs.com).
// NEXT_PUBLIC_SITE_URL is baked in at build time and can't vary per domain, so
// request-scoped routes (sitemap.xml, robots.txt) must read the actual host instead.
export function requestSiteUrl() {
  const host = headers().get("host");
  return host ? `https://${host}` : siteUrl;
}
