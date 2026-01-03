import { NextResponse } from "next/server";
import { recordVisit, updateHeartbeat, getStats } from "../../../lib/analytics-store";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, sessionId } = body;

        if (!sessionId) {
            return NextResponse.json({ error: "Session ID required" }, { status: 400 });
        }

        if (type === "visit") {
            // Simple Browser Detection
            const userAgent = request.headers.get("user-agent") || "";
            let browser = "Unknown";
            if (userAgent.includes("Chrome")) browser = "Chrome";
            else if (userAgent.includes("Firefox")) browser = "Firefox";
            else if (userAgent.includes("Safari")) browser = "Safari";
            else if (userAgent.includes("Edge")) browser = "Edge";

            // Country Detection (Vercel specific header)
            const country = request.headers.get("x-vercel-ip-country") || "Unknown";

            recordVisit(sessionId, browser, country);
        } else if (type === "heartbeat") {
            updateHeartbeat(sessionId);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const range = searchParams.get("range") as '24h' | '7d' | '1m' | '1y' || '24h';

    const stats = getStats(range);

    // Return stats with cache-control headers to prevent aggressive caching
    return NextResponse.json(stats, {
        headers: {
            "Cache-Control": "no-store, max-age=0",
        },
    });
}
