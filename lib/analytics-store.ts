export interface AnalyticsState {
    totalVisits: number;
    activeSessions: Map<string, number>; // sessionId -> lastHeartbeat timestamp
    dailyStats: Record<string, number>; // YYYY-MM-DD -> count
    browserStats: Record<string, number>; // Browser Name -> count
    countryStats: Record<string, number>; // Country Code -> count
}

// In-memory store
const globalForAnalytics = global as unknown as { analytics: AnalyticsState };

export const analyticsStore = globalForAnalytics.analytics || {
    totalVisits: 0,
    activeSessions: new Map<string, number>(),
    dailyStats: {},
    browserStats: {},
    countryStats: {},
};

// Reset store if it has data (to clear potential previous mock data during HMR)
if (Object.keys(analyticsStore.dailyStats).length > 366) {
    analyticsStore.totalVisits = 0;
    analyticsStore.dailyStats = {};
    analyticsStore.activeSessions = new Map<string, number>();
    analyticsStore.browserStats = {};
    analyticsStore.countryStats = {};
}

// Ensure properties exist (HMR safety)
if (!analyticsStore.dailyStats) analyticsStore.dailyStats = {};
if (!analyticsStore.activeSessions) analyticsStore.activeSessions = new Map<string, number>();
if (!analyticsStore.browserStats) analyticsStore.browserStats = {};
if (!analyticsStore.countryStats) analyticsStore.countryStats = {};


if (process.env.NODE_ENV !== "production") globalForAnalytics.analytics = analyticsStore;

// Helper to get YYYY-MM-DD
function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}


export function recordVisit(sessionId: string, browser?: string, country?: string) {
    analyticsStore.totalVisits++;
    analyticsStore.activeSessions.set(sessionId, Date.now());

    const today = getTodayKey();
    analyticsStore.dailyStats[today] = (analyticsStore.dailyStats[today] || 0) + 1;

    if (browser) {
        analyticsStore.browserStats[browser] = (analyticsStore.browserStats[browser] || 0) + 1;
    }
    if (country) {
        analyticsStore.countryStats[country] = (analyticsStore.countryStats[country] || 0) + 1;
    }
}

export function updateHeartbeat(sessionId: string) {
    analyticsStore.activeSessions.set(sessionId, Date.now());
}

export function getStats(range: '24h' | '7d' | '1m' | '1y' = '24h') {
    // Prune sessions older than 1 minute
    const now = Date.now();
    const timeout = 60 * 1000;

    // Convert to array to avoid "downlevelIteration" or target ES version issues
    const entries = Array.from(analyticsStore.activeSessions.entries());
    for (const [id, lastSeen] of entries) {
        if (now - lastSeen > timeout) {
            analyticsStore.activeSessions.delete(id);
        }
    }

    // Calculate filtered visits
    let rangeVisits = 0;
    const today = new Date();
    const cutoff = new Date();

    if (range === '24h') {
        const key = getTodayKey();
        rangeVisits = analyticsStore.dailyStats[key] || 0;
    } else {
        // Set cutoff date
        if (range === '7d') cutoff.setDate(today.getDate() - 7);
        if (range === '1m') cutoff.setDate(today.getDate() - 30);
        if (range === '1y') cutoff.setDate(today.getDate() - 365);

        const cutoffStr = cutoff.toISOString().split('T')[0];

        // Sum up stats since cutoff
        Object.entries(analyticsStore.dailyStats).forEach(([date, count]) => {
            if (date >= cutoffStr) {
                rangeVisits += count;
            }
        });
    }

    return {
        totalVisits: rangeVisits,
        activeUsers: analyticsStore.activeSessions.size,
        chartData: getChartData(range),
        browserStats: analyticsStore.browserStats,
        countryStats: analyticsStore.countryStats,
    };
}

function getChartData(range: string) {
    // Return last N days for the chart
    const days = range === '7d' ? 7 : range === '1m' ? 30 : range === '1y' ? 365 : 1;
    const today = new Date();
    const data = [];

    for (let i = days - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0];
        data.push({
            date: key,
            value: analyticsStore.dailyStats[key] || 0
        });
    }
    return data;
}
