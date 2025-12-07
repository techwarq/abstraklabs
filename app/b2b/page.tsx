"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function B2BSolutions() {
    const solutions = [
        {
            name: "Allore AI",
            tagline: "Turn your brand story into sold-out drops",
            description: "Your brand has a story. We turn it into strategic visuals, drop ideas, and marketing campaigns engineered to reach every untapped market—without agencies, studios, or guesswork.",
            link: "https://www.alloreai.com/",
            status: "Live"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-black selection:bg-green-500 selection:text-white font-sans">
            <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

            {/* Navigation */}
            <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
                <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">

                        </div>
                        <span className="text-3xl font-bold tracking-tighter">abstrak<span className="text-green-600">labs</span></span>
                    </div>
                    <div className="text-sm font-medium uppercase tracking-widest text-green-600">[ Enterprise ]</div>
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
                            Constructing the <br /><span className="text-green-600">backbone of industry.</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Our enterprise solutions are built on the principles of reliability, scalability, and absolute precision.
                            We don't just solve problems; we eliminate them.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-px bg-black/10 border border-black/10">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                                className="bg-white p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group"
                            >
                                <div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-green-600 transition-colors">{solution.name}</h3>
                                    <h4 className="text-xl font-medium mb-4 text-black/80">{solution.tagline}</h4>
                                    <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">{solution.description}</p>

                                    <a
                                        href={solution.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-green-600 hover:border-green-600 transition-colors"
                                    >
                                        Start Your Next Drop
                                        <span>→</span>
                                    </a>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-xs uppercase tracking-widest border border-green-600/30 text-green-700 bg-green-50 px-3 py-1 rounded-full">
                                        {solution.status}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="relative z-10 py-12 px-6 border-t border-black/5 text-center text-sm text-gray-500 uppercase tracking-widest">
                © 2024 Abstrak Labs Enterprise Division
            </footer>
        </main>
    );
}
