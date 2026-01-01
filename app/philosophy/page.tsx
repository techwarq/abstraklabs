"use client";
import React from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';

export default function Philosophy() {
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
                    <div className="text-sm font-medium uppercase tracking-widest text-green-600">[ Philosophy ]</div>
                </div>
            </header>

            <div className="relative z-10 pt-40 pb-20 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-32"
                    >
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12 max-w-5xl leading-[0.9]">
                            Humans + AI, <br />
                            <span className="text-green-600">done right.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-800 max-w-3xl leading-relaxed font-light">
                            We believe that AI shouldn't just do the work for you. It should act like a sidekick that helps you think better, work better, and grow.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-12 md:p-20 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-4xl font-bold mb-6">The Sidekick Philosophy</h3>
                                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                                    Our products are designed to amplify human potential, not replace it. We build for the builders, the curious, and those who want to push the boundaries of what's possible.
                                </p>
                            </div>
                            <div className="text-6xl font-bold text-black/10">01</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-12 md:p-20 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-4xl font-bold mb-6">A Trusted Standard</h3>
                                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                                    We aim to be the umbrella brand for high-quality, thoughtful, and slightly crazy innovation. When you see Abstrak Labs, you know it's built with purpose.
                                </p>
                            </div>
                            <div className="text-6xl font-bold text-green-600/20">02</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <footer className="relative z-10 py-12 px-6 border-t border-black/5 text-center text-sm text-gray-500 uppercase tracking-widest">
                © 2024 Abstrak Labs
            </footer>
        </main>
    );
}
