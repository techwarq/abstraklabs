// Talo API base URL — same default on client and server so both sides agree.
export const TALO_API_URL =
  (process.env.NEXT_PUBLIC_TALO_API_URL || process.env.TALO_API_URL || "https://api.talo.abstraklabs.com").replace(/\/$/, "");
