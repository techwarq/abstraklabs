import { me } from "./auth";
import { refreshAccessToken } from "./refresh";

const EMAIL_KEY = "talo_email"; // display-only cache, never used for auth

export function getCachedEmail(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(EMAIL_KEY);
}

export function setCachedEmail(email: string) {
  sessionStorage.setItem(EMAIL_KEY, email);
}

// Called once on app load: mints a fresh access token from the httpOnly
// refresh cookie (if any) and resolves the current user. Returns null if
// there's no valid session — caller should redirect to /sign-in.
export async function bootstrapSession(): Promise<{ userId: string; email: string | null } | null> {
  const accessToken = await refreshAccessToken();
  if (!accessToken) return null;
  try {
    const { userId } = await me();
    return { userId, email: getCachedEmail() };
  } catch {
    return null;
  }
}
