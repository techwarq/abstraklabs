// Access token lives only in the JS heap for this tab — never persisted to
// localStorage/sessionStorage. Re-minted from the httpOnly refresh cookie via
// bootstrapSession() on page load. See session.ts.
let accessToken: string | null = null;

export function getAccessToken(): string | null {
  return accessToken;
}

export function setAccessToken(token: string | null) {
  accessToken = token;
}

export function clearAccessToken() {
  accessToken = null;
}
