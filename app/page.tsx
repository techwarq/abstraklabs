"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-green-500 selection:text-white font-sans">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">

            </div>
            <span className="text-3xl font-bold tracking-tighter">abstrak<span className="text-green-600">labs</span></span>
          </Link>
          <nav className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest text-gray-500">
            <a href="/philosophy" className="hover:text-black transition-colors">Philosophy</a>
            <a href="#ecosystem" className="hover:text-black transition-colors">Ecosystem</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Philosophical & Abstract */}
      <section className="relative z-10 pt-40 pb-32 px-6 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-12"
          >
            AI that doesn&apos;t <br />
            just do the work. <br />
            <span className="text-green-600">It makes you better.</span>
          </motion.h1>
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl text-gray-800 leading-tight max-w-3xl font-light"
              >
                Abstrak Labs builds both B2B and consumer products used to amplify human potential.
                Our tools act as sidekicks that help you think better, work better, and grow.
                <br /><br />
                <span className="font-medium">Humans + AI, done right.</span>
              </motion.p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-full max-w-xs p-6 bg-black text-white rounded-none"
              >
                <div className="text-green-500 text-4xl font-bold mb-2">Refined</div>
                <div className="text-sm uppercase tracking-widest text-gray-400">Intelligence</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem - Grid Layout */}
      <section id="ecosystem" className="relative z-10 py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-black/10 pb-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">The Ecosystem</h2>
            <p className="text-gray-500 uppercase tracking-widest mt-4 md:mt-0">B2B & Consumer Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {/* B2B Block */}
            <Link href="/b2b" className="contents">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-12 md:p-20 hover:bg-gray-50 transition-colors group cursor-pointer"
              >
                <div className="text-green-600 mb-8 text-sm font-mono uppercase tracking-widest">[ Enterprise ]</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform">Allore AI</h3>
                <p className="text-xl text-gray-600 mb-12 max-w-md">
                  Our premier B2B web platform. Strategic visuals and marketing engineering for brands that want to dominate.
                </p>
                <div className="flex gap-4">
                  <div className="h-px w-12 bg-black self-center group-hover:w-24 transition-all" />
                  <span className="text-black font-bold">Discover Allore</span>
                </div>
              </motion.div>
            </Link>

            {/* Consumer Block */}
            <Link href="/consumer" className="contents">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-12 md:p-20 hover:bg-gray-50 transition-colors group cursor-pointer"
              >
                <div className="text-green-600 mb-8 text-sm font-mono uppercase tracking-widest">[ Consumer ]</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform">Snips AI</h3>
                <p className="text-xl text-gray-600 mb-12 max-w-md">
                  A consumer app that fights information overload. Turn the noise into signal with AI-powered clarity.
                </p>
                <div className="flex gap-4">
                  <div className="h-px w-12 bg-black self-center group-hover:w-24 transition-all" />
                  <span className="text-black font-bold">Get Snips</span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>



      {/* Footer - Large Outlined Text */}
      <footer className="relative z-10 text-center bg-black pt-20 pb-10 px-6 overflow-hidden">
        <CountdownTimer />
        <div className="max-w-[1400px] mx-auto relative">
          {/* Main Text */}
          <div className="relative z-10">
            <h2 className="text-[17vw] leading-[0.8] font-bold tracking-tighter text-outline select-none pointer-events-none">
              Abstrak Labs
            </h2>
          </div>


          {/* Bottom Bar */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10 text-gray-500 text-xs md:text-sm font-mono uppercase tracking-widest">
            <div>© 2024 Abstrak Labs</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}



