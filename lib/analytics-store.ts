export interface DailyData {
    visits: number;
    browsers: Record<string, number>;
    countries: Record<string, number>;
}

export interface AnalyticsState {
    totalVisits: number; // All-time counter (legacy/simple)
    activeSessions: Map<string, number>; // sessionId -> lastHeartbeat timestamp
    dailyStats: Record<string, DailyData>; // YYYY-MM-DD -> DailyData
}

// In-memory store
const globalForAnalytics = global as unknown as { analytics: AnalyticsState };

export const analyticsStore = globalForAnalytics.analytics || {
    totalVisits: 0,
    activeSessions: new Map<string, number>(),
    dailyStats: {},
};

// Reset store if data structure looks old (simple number instead of object)
const firstKey = Object.keys(analyticsStore.dailyStats)[0];
if (firstKey && typeof analyticsStore.dailyStats[firstKey] === 'number') {
    analyticsStore.totalVisits = 0;
    analyticsStore.dailyStats = {};
    analyticsStore.activeSessions = new Map<string, number>();
}

// Ensure properties exist
if (!analyticsStore.dailyStats) analyticsStore.dailyStats = {};
if (!analyticsStore.activeSessions) analyticsStore.activeSessions = new Map<string, number>();


if (process.env.NODE_ENV !== "production") globalForAnalytics.analytics = analyticsStore;

// Helper to get YYYY-MM-DD
function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}


export function recordVisit(sessionId: string, browser?: string, country?: string) {
    analyticsStore.totalVisits++;
    analyticsStore.activeSessions.set(sessionId, Date.now());

    const today = getTodayKey();
    if (!analyticsStore.dailyStats[today]) {
        analyticsStore.dailyStats[today] = { visits: 0, browsers: {}, countries: {} };
    }

    const dayData = analyticsStore.dailyStats[today];
    dayData.visits++;

    if (browser) {
        dayData.browsers[browser] = (dayData.browsers[browser] || 0) + 1;
    }
    if (country) {
        dayData.countries[country] = (dayData.countries[country] || 0) + 1;
    }
}

export function updateHeartbeat(sessionId: string) {
    analyticsStore.activeSessions.set(sessionId, Date.now());
}

export function getStats(range: '24h' | '7d' | '1m' | '1y' = '24h') {
    // Prune sessions older than 1 minute
    const now = Date.now();
    const timeout = 60 * 1000;

    const entries = Array.from(analyticsStore.activeSessions.entries());
    for (const [id, lastSeen] of entries) {
        if (now - lastSeen > timeout) {
            analyticsStore.activeSessions.delete(id);
        }
    }

    // Calculate filtered visits
    let rangeVisits = 0;
    const aggregatedBrowsers: Record<string, number> = {};
    const aggregatedCountries: Record<string, number> = {};

    const today = new Date();
    const cutoff = new Date();

    if (range === '24h') {
        cutoff.setDate(today.getDate()); // Same day
    } else if (range === '7d') {
        cutoff.setDate(today.getDate() - 7);
    } else if (range === '1m') {
        cutoff.setDate(today.getDate() - 30);
    } else if (range === '1y') {
        cutoff.setDate(today.getDate() - 365);
    }

    const cutoffStr = cutoff.toISOString().split('T')[0];

    // Sum up stats since cutoff
    Object.entries(analyticsStore.dailyStats).forEach(([date, data]) => {
        // Special case for '24h': only show today. 
        // For others, show anything >= cutoff.
        const include = range === '24h' ? date === getTodayKey() : date >= cutoffStr;

        if (include) {
            rangeVisits += data.visits;

            // Aggregate browsers
            Object.entries(data.browsers).forEach(([b, count]) => {
                aggregatedBrowsers[b] = (aggregatedBrowsers[b] || 0) + count;
            });
            // Aggregate countries
            Object.entries(data.countries).forEach(([c, count]) => {
                aggregatedCountries[c] = (aggregatedCountries[c] || 0) + count;
            });
        }
    });

    return {
        visitsInRange: rangeVisits,
        allTimeVisits: analyticsStore.totalVisits,
        activeUsers: analyticsStore.activeSessions.size,
        chartData: getChartData(range),
        browserStats: aggregatedBrowsers,
        countryStats: aggregatedCountries,
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

        const dayData = analyticsStore.dailyStats[key];
        data.push({
            date: key,
            value: dayData ? dayData.visits : 0
        });
    }
    return data;
}
