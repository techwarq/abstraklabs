import { NextRequest, NextResponse } from "next/server";
import { TALO_API_URL } from "../../../../lib/api/config";
import { REFRESH_COOKIE, refreshCookieOptions } from "../../../../lib/api/serverCookie";

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get(REFRESH_COOKIE)?.value;
  if (!refreshToken) {
    return NextResponse.json({ error: "No session" }, { status: 401 });
  }

  const upstream = await fetch(`${TALO_API_URL}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });
  const data = await upstream.json();

  if (!upstream.ok) {
    const response = NextResponse.json(data, { status: upstream.status });
    response.cookies.delete({ name: REFRESH_COOKIE, path: "/api/auth" });
    return response;
  }

  const response = NextResponse.json({ accessToken: data.accessToken }, { status: upstream.status });
  response.cookies.set(REFRESH_COOKIE, data.refreshToken, refreshCookieOptions());
  return response;
}
