import { apiFetch, ApiError, errorMessage } from "./client";
import { setAccessToken, clearAccessToken } from "./tokenStore";

async function proxyPost(path: string, body?: unknown): Promise<{ accessToken: string }> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  let json: { error?: string; message?: string } = {};
  try {
    json = await res.json();
  } catch {
    // empty body (e.g. logout)
  }
  if (!res.ok) {
    throw new ApiError(res.status, errorMessage(json, res.status));
  }
  return json as { accessToken: string };
}

export async function register(email: string, password: string) {
  const { accessToken } = await proxyPost("/api/auth/register", { email, password });
  setAccessToken(accessToken);
}

export async function login(email: string, password: string) {
  const { accessToken } = await proxyPost("/api/auth/login", { email, password });
  setAccessToken(accessToken);
}

export async function logout() {
  try {
    await proxyPost("/api/auth/logout");
  } finally {
    clearAccessToken();
  }
}

export async function me(): Promise<{ userId: string }> {
  return apiFetch<{ userId: string }>("/api/auth/me");
}
