import { NextRequest, NextResponse } from "next/server";
import { TALO_API_URL } from "../../../../lib/api/config";
import { REFRESH_COOKIE } from "../../../../lib/api/serverCookie";

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get(REFRESH_COOKIE)?.value;
  if (refreshToken) {
    await fetch(`${TALO_API_URL}/api/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    }).catch(() => {});
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.delete({ name: REFRESH_COOKIE, path: "/api/auth" });
  return response;
}
