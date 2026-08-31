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
