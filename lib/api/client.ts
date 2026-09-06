import { TALO_API_URL } from "./config";
import { getAccessToken } from "./tokenStore";
import { refreshAccessToken } from "./refresh";

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// `error` is usually a plain string, but validation failures come back as a
// JSON-stringified array of Zod issues (e.g. `[{"message":"Too small...", ...}]`)
// — unwrap those into a readable sentence instead of dumping raw JSON.
export function errorMessage(body: { error?: string; message?: string }, status: number): string {
  if (body.message) return body.message;
  if (body.error) {
    try {
      const parsed = JSON.parse(body.error);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((issue) => issue.message).filter(Boolean).join("; ");
      }
    } catch {
      // not JSON — use the string as-is
    }
    return body.error;
  }
  return `Request failed (${status})`;
}

async function parseError(res: Response): Promise<never> {
  let body: { error?: string; message?: string } = {};
  try {
    body = await res.json();
  } catch {
    // non-JSON error body — fall through with a generic message
  }
  throw new ApiError(res.status, errorMessage(body, res.status));
}

// Calls to api.talo.abstraklabs.com directly (not our own /api/* routes).
export async function apiFetch<T>(path: string, opts: RequestInit = {}, _retried = false): Promise<T> {
  const token = getAccessToken();
  const res = await fetch(`${TALO_API_URL}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...opts.headers,
    },
  });

  if (res.status === 401 && !_retried) {
    const newToken = await refreshAccessToken();
    if (newToken) return apiFetch<T>(path, opts, true);
  }

  if (!res.ok) return parseError(res);
  if (res.status === 204) return undefined as T;
  return res.json();
}
