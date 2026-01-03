"use client";

import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AnalyticsTracker() {
    const sessionIdRef = useRef<string | null>(null);

    useEffect(() => {
        // Generate or retrieve session ID
        let sessionId = sessionStorage.getItem("analytics_session_id");
        if (!sessionId) {
            sessionId = uuidv4();
            sessionStorage.setItem("analytics_session_id", sessionId);

            // Record new visit
            fetch("/api/analytics", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type: "visit", sessionId }),
            }).catch(err => console.error("Analytics error:", err));
        }
        sessionIdRef.current = sessionId;

        // Heartbeat for "active" status and duration
        const interval = setInterval(() => {
            if (document.visibilityState === 'visible') {
                fetch("/api/analytics", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ type: "heartbeat", sessionId: sessionIdRef.current }),
                }).catch(() => { }); // silent fail usually ok for analytics
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return null;
}
