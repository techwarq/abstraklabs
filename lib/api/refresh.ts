import { setAccessToken, clearAccessToken } from "./tokenStore";

// Refresh tokens are single-use — two concurrent refresh calls (e.g. React
// StrictMode's double effect-mount in dev, or two API calls 401'ing at once)
// must not both hit the network, or the loser's failed response wipes out
// the winner's freshly-set access token. Dedupe to a single in-flight call.
let inFlight: Promise<string | null> | null = null;

export function refreshAccessToken(): Promise<string | null> {
  if (inFlight) return inFlight;

  inFlight = (async () => {
    try {
      const res = await fetch("/api/auth/refresh", { method: "POST" });
      if (!res.ok) {
        clearAccessToken();
        return null;
      }
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
      return accessToken as string;
    } catch {
      clearAccessToken();
      return null;
    } finally {
      inFlight = null;
    }
  })();

  return inFlight;
}
