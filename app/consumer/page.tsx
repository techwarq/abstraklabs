"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ConsumerSolutions() {
    const apps = [
        {
            name: "Snips AI (coming soon)",
            tagline: "Combat Information Overload",
            description: "Snips AI is a mobile learning platform designed to combat information overload (or \"brainrot\" as the app playfully calls it) by transforming complex, lengthy content into digestible, Twitter/X-style snippets.",
            features: [
                { icon: "📄", title: "Research Papers", text: "Dense academic studies into digestible insights" },
                { icon: "📰", title: "Articles", text: "Lengthy articles into quick snips that get to the point" },
                { icon: "🎧", title: "Podcasts", text: "3-hour episodes into key moments worth your time" },
                { icon: "📺", title: "YouTube Videos", text: "Long-form content into essential highlights only" },
                { icon: "⚡", title: "Latest News", text: "Information overload into what actually matters" }
            ],
            category: "Education"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-black selection:bg-green-500 selection:text-white font-sans">
            <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

            {/* Navigation */}
            <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
                <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">

                        </div>
                        <span className="text-3xl font-bold tracking-tighter">abstrak<span className="text-green-600">labs</span></span>
                    </Link>
                    <div className="text-sm font-medium uppercase tracking-widest text-green-600">[ Consumer ]</div>
                </div>
            </header>

            <div className="relative z-10 pt-40 pb-20 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl">
                            Designing for <br /><span className="text-green-600">human resonance.</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Technology should feel like an extension of the self. Our consumer applications invite users
                            into a world where digital interaction is intuitive, meaningful, and beautiful.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-px bg-black/10 border border-black/10">
                        {apps.map((app, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                                className="bg-white p-12 md:p-16 flex flex-col gap-12 group hover:shadow-xl transition-all"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                                    <div className="max-w-2xl">
                                        <div className="text-green-600 mb-4 text-xs font-mono uppercase tracking-widest">[{app.category}]</div>
                                        <h3 className="text-4xl font-bold mb-2">{app.name}</h3>
                                        <h4 className="text-xl font-medium mb-6 text-black/80">{app.tagline}</h4>
                                        <p className="text-xl text-gray-600 leading-relaxed">{app.description}</p>
                                    </div>
                                    <div className="w-16 h-16 flex items-center justify-center border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-all shrink-0">
                                        ↗
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-black/5">
                                    {app.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="bg-gray-50 p-6 rounded-lg">
                                            <div className="text-2xl mb-3">{feature.icon}</div>
                                            <div className="font-bold mb-1">{feature.title}</div>
                                            <div className="text-sm text-gray-500">{feature.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="relative z-10 py-12 px-6 border-t border-black/5 text-center text-sm text-gray-500 uppercase tracking-widest">
                © 2024 Abstrak Labs Consumer Division
            </footer>
        </main>
    );
}
