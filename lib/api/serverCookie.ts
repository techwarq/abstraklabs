// Server-only — refresh cookie name/options shared by the four auth proxy routes.
export const REFRESH_COOKIE = "talo_rt";

export function refreshCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/api/auth",
    maxAge: 60 * 60 * 24 * 30, // 30 days, matches refresh token lifetime
  };
}
