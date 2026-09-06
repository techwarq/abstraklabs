import { NextRequest, NextResponse } from "next/server";
import { TALO_API_URL } from "../../../../lib/api/config";
import { REFRESH_COOKIE, refreshCookieOptions } from "../../../../lib/api/serverCookie";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const upstream = await fetch(`${TALO_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await upstream.json();

  if (!upstream.ok) {
    return NextResponse.json(data, { status: upstream.status });
  }

  const response = NextResponse.json({ accessToken: data.accessToken }, { status: upstream.status });
  response.cookies.set(REFRESH_COOKIE, data.refreshToken, refreshCookieOptions());
  return response;
}
