"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveAnalytics() {
    const [accessCode, setAccessCode] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [stats, setStats] = useState({ totalVisits: 0, activeUsers: 0 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [range, setRange] = useState<'24h' | '7d' | '1m' | '1y'>('24h');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Artificial delay for "premium" feel
        setTimeout(() => {
            if (accessCode.toLowerCase() === "lfg") {
                setIsAuthenticated(true);
                setError("");
            } else {
                setError("Access denied. Invalid code.");
            }
            setLoading(false);
        }, 800);
    };

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchStats = async () => {
            try {
                const res = await fetch(`/api/analytics?range=${range}`);
                const data = await res.json();
                setStats(data);
            } catch (err) {
                console.error("Failed to fetch stats", err);
            }
        };

        fetchStats();
        const interval = setInterval(fetchStats, 2000);
        return () => clearInterval(interval);
    }, [isAuthenticated, range]);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
                <div className="w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 shadow-2xl"
                    >
                        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Abstrak Live
                        </h1>
                        <p className="text-zinc-400 mb-8">Enter access code to view real-time data.</p>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    value={accessCode}
                                    onChange={(e) => setAccessCode(e.target.value)}
                                    placeholder="Access Code"
                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                            </div>

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-red-400 text-sm"
                                >
                                    {error}
                                </motion.p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-medium rounded-xl px-4 py-3 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                {loading ? "Verifying..." : "Enter Dashboard"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto"
            >
                <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                            Live Analytics
                        </h1>
                        <p className="text-zinc-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Real-time monitoring
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="flex bg-zinc-900 border border-zinc-800 rounded-lg p-1">
                            {(['24h', '7d', '1m', '1y'] as const).map((r) => (
                                <button
                                    key={r}
                                    onClick={() => setRange(r)}
                                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${range === r ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                                >
                                    {r.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <StatCard
                        title="Active Visitors"
                        value={stats.activeUsers}
                        subtitle="Right now"
                        color="text-green-400"
                    />
                    <StatCard
                        title="Total Sessions"
                        value={stats.totalVisits}
                        subtitle={range === '24h' ? "Today" : `Last ${range}`}
                        color="text-blue-400"
                    />
                </div>

                {/* Trend Chart */}
                <div className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl overflow-hidden mb-6">
                    <h3 className="text-zinc-500 font-medium mb-6">Traffic Trend</h3>
                    <div className="h-40 flex items-end gap-[1px]">
                        {(stats as any).chartData?.map((point: any, i: number) => (
                            <div
                                key={point.date}
                                className="bg-blue-500/20 hover:bg-blue-500/50 transition-colors rounded-t-sm flex-1 min-w-[2px]"
                                style={{ height: `${Math.min(100, Math.max(5, (point.value / 100) * 100))}%` }} // Adjusted scale
                                title={`${point.date}: ${point.value}`}
                            />
                        ))}
                        {(!(stats as any).chartData || (stats as any).chartData.length === 0) && (
                            <div className="w-full h-full flex items-center justify-center text-zinc-600">
                                No trend data available
                            </div>
                        )}
                    </div>
                </div>

                {/* Demographics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl">
                        <h3 className="text-zinc-500 font-medium mb-6">Top Browsers</h3>
                        <div className="space-y-4">
                            {Object.entries((stats as any).browserStats || {}).map(([name, count]: any) => (
                                <div key={name} className="flex items-center justify-between">
                                    <span className="text-zinc-400">{name}</span>
                                    <div className="flex items-center gap-3 flex-1 justify-end">
                                        <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500" style={{ width: `${(count / Math.max(1, (stats as any).totalVisits)) * 100}%` }} />
                                        </div>
                                        <span className="text-white font-mono w-8 text-right">{count}</span>
                                    </div>
                                </div>
                            ))}
                            {Object.keys((stats as any).browserStats || {}).length === 0 && <p className="text-zinc-600 text-sm">No data yet</p>}
                        </div>
                    </div>

                    <div className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl">
                        <h3 className="text-zinc-500 font-medium mb-6">Top Countries</h3>
                        <div className="space-y-4">
                            {Object.entries((stats as any).countryStats || {}).map(([name, count]: any) => (
                                <div key={name} className="flex items-center justify-between">
                                    <span className="text-zinc-400">{name === "Unknown" ? "🏳️ Unknown" : name}</span>
                                    <div className="flex items-center gap-3 flex-1 justify-end">
                                        <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500" style={{ width: `${(count / Math.max(1, (stats as any).totalVisits)) * 100}%` }} />
                                        </div>
                                        <span className="text-white font-mono w-8 text-right">{count}</span>
                                    </div>
                                </div>
                            ))}
                            {Object.keys((stats as any).countryStats || {}).length === 0 && <p className="text-zinc-600 text-sm">No data yet</p>}
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}

function StatCard({ title, value, subtitle, color }: { title: string; value: number; subtitle: string; color: string }) {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl"
        >
            <h3 className="text-zinc-500 font-medium mb-4">{title}</h3>
            <div className={`text-6xl font-bold mb-2 ${color} font-mono tracking-tighter`}>
                {value?.toLocaleString() || 0}
            </div>
            <p className="text-zinc-600 text-sm">{subtitle}</p>
        </motion.div>
    );
}
