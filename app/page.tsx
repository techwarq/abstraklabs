"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instrument_Serif } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });

const ACCENT = "#719DF4";
const GREEN = "#16A34A";

/* ---------- data ---------- */

const heroChecks = [
  { name: "Shopify", color: "#95BF47" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Meta", color: "#4267B2" },
  { name: "QuickBooks", color: "#2CA01C" },
];

const findingBreakdown = [
  { pct: 48, label: "Amazon fees" },
  { pct: 31, label: "Ad spend" },
  { pct: 21, label: "Refunds" },
];

const dataSources = [
  { name: "Shopify", color: "#95BF47" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Meta", color: "#4267B2" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Your bank", color: "#64748B" },
  { name: "QuickBooks", color: "#2CA01C" },
];

const jobBoard = [
  { icon: "💰", q: "Find where I’m losing money." },
  { icon: "📉", q: "Why did sales drop?" },
  { icon: "💸", q: "Why was my payout different?" },
  { icon: "📦", q: "What should I reorder?" },
  { icon: "🔎", q: "Find anything unusual." },
  { icon: "📊", q: "What needs my attention?" },
];

const progression = [
  { tag: "Investigate", quote: "“Here’s what happened.”" },
  { tag: "Recommend", quote: "“Here’s what I’d do.”" },
  { tag: "Act", quote: "“I’ve done it.”" },
];

const concept = [
  { step: "You have a problem", detail: "“Why was my payout lower?”" },
  { step: "Give it to Talo", detail: "Talo investigates your data." },
  { step: "Talo finds the answer", detail: "“$3,821 was Amazon fees.”" },
  { step: "And shows you why", detail: "Every finding, with the receipts." },
];

const evidenceRows = [
  { label: "Expected payout", val: "$48,293" },
  { label: "Actual payout", val: "$44,472" },
  { label: "Difference", val: "$3,821", diff: true },
];
const evidenceBreak = [
  { label: "Amazon fees", val: "$2,940" },
  { label: "Refunds", val: "$681" },
  { label: "Adjustment", val: "$200" },
];

/* ---------- motion helpers ---------- */

const card = "bg-white rounded-[22px] border border-black/[0.06] shadow-[0_2px_16px_-4px_rgba(20,20,20,0.06)]";
const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
const revealProps = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, margin: "-80px" } as const,
  variants: fadeUp,
  transition: { duration: 0.6, ease: easeOut },
};
const heroStagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };

/* ---------- primitives ---------- */

function TypingText({ text, speed = 32, start = true }: { text: string; speed?: number; start?: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, start]);
  return (
    <>
      {text.slice(0, count)}
      <span className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle animate-pulse" />
    </>
  );
}

function LazyMount({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return <div ref={ref}>{inView && children}</div>;
}

function Check({ color = GREEN }: { color?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

/* ---------- hero: a job, running live ---------- */

function CheckChip({ name, color, delay, inView }: { name: string; color: string; delay: number; inView: boolean }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-[12px] font-medium shadow-[0_1px_4px_-2px_rgba(20,20,20,0.1)]">
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
      <span>{name}</span>
      <span className="relative w-3.5 h-3.5 grid place-items-center">
        <motion.span
          className="absolute w-3 h-3 rounded-full border-2 border-black/15"
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 0 } : {}}
          transition={{ duration: 0.2, delay }}
        />
        <motion.span initial={{ opacity: 0, scale: 0.4 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay, ease: easeOut }}>
          <Check />
        </motion.span>
      </span>
    </div>
  );
}

function HeroDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const checkBase = 1.9; // question types first
  const checkStep = 0.42;
  const foundAt = checkBase + heroChecks.length * checkStep + 0.25;

  return (
    <div ref={ref} className="relative">
      <div
        className="absolute -inset-6 rounded-[40px] blur-3xl opacity-70 -z-10 pointer-events-none"
        style={{ background: `radial-gradient(60% 55% at 50% 25%, ${ACCENT}44, transparent 72%)` }}
      />
      <div className={`${card} overflow-hidden`}>
        {/* You */}
        <div className="px-5 md:px-7 py-5 border-b border-black/[0.06]">
          <div className="flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.1em] uppercase text-black/40">
            <span className="w-4 h-4 rounded-full bg-black/[0.08] grid place-items-center text-[9px]">🧑</span> You
          </div>
          <div className="mt-2.5 relative text-[16px] md:text-[18px] leading-[1.5] font-medium bg-[#F5F4F1] rounded-xl pl-4 pr-3.5 py-3.5 overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: ACCENT }} />
            {inView ? <TypingText text={"“Why did my profit drop last month?”"} /> : " "}
          </div>
        </div>

        {/* Talo working */}
        <div className="px-5 md:px-7 py-5 border-b border-black/[0.06]">
          <div className="flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.1em] uppercase text-black/40">
            <span className="w-4 h-4 rounded-full grid place-items-center text-[9px]" style={{ background: `${ACCENT}22` }}>◆</span>
            Talo is working
            <motion.span
              className="ml-0.5 flex gap-0.5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: checkBase - 0.2 }}
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="w-1 h-1 rounded-full"
                  style={{ background: ACCENT }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                />
              ))}
            </motion.span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {heroChecks.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: checkBase - 0.1 + i * 0.08, ease: easeOut }}
              >
                <CheckChip name={c.name} color={c.color} delay={checkBase + i * checkStep} inView={inView} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Found it */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: foundAt }}>
          <div className="flex items-center gap-2 px-5 md:px-7 py-3" style={{ background: ACCENT }}>
            <span className="w-4 h-4 rounded-full bg-white/25 grid place-items-center shrink-0">
              <Check color="#fff" />
            </span>
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white">Found it</div>
          </div>
          <div className="px-5 md:px-7 py-5 bg-[#FAFAF9]">
            <div className="text-[18px] md:text-[20px] font-semibold tracking-tight">
              Profit down <span style={{ color: ACCENT }}>19%</span>{" "}
              <span className="mono text-black/40 text-[15px]">· $12,430</span>
            </div>
            <div className="mt-4 space-y-2.5">
              {findingBreakdown.map((b, i) => (
                <div key={b.label} className="flex items-center gap-3 text-[13px]">
                  <span className="w-[86px] shrink-0 text-black/60">{b.label}</span>
                  <div className="flex-1 h-2 rounded-full bg-black/[0.07] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: ACCENT }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${b.pct}%` } : {}}
                      transition={{ duration: 0.8, delay: foundAt + 0.2 + i * 0.12, ease: easeOut }}
                    />
                  </div>
                  <span className="w-8 text-right mono font-semibold" style={{ color: ACCENT }}>{b.pct}%</span>
                </div>
              ))}
            </div>
            <a href="#evidence" className="inline-flex items-center gap-2 mt-5 text-[13px] font-semibold text-black hover:opacity-70 transition-opacity">
              See how Talo found it <span style={{ color: ACCENT }}>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- data → Talo → answer wiring ---------- */

function WiringDiagram() {
  return (
    <div>
      {/* desktop */}
      <div className="hidden md:flex items-stretch justify-center gap-0 px-6 py-14">
        <div className="flex flex-col justify-center gap-2.5">
          {dataSources.map((s) => (
            <div key={s.name} className="flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white px-4 py-2 text-[13px] font-medium mono shadow-[0_1px_4px_-2px_rgba(20,20,20,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
              {s.name}
            </div>
          ))}
        </div>

        {/* bracket + connector */}
        <div className="relative w-16 shrink-0">
          <div className="absolute left-4 top-[10%] bottom-[10%] w-px bg-black/15" />
          <div className="absolute left-4 right-0 top-1/2 h-px bg-black/15" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" style={{ color: ACCENT }}>▸</div>
        </div>

        {/* TALO node */}
        <div className="flex items-center">
          <div className="w-28 h-28 rounded-3xl bg-[#141414] grid place-items-center shadow-[0_20px_40px_-16px_rgba(20,20,20,0.5)]">
            <Image src="/talo-logo-mark.png" alt="Talo" width={329} height={140} className="h-8 w-auto" />
          </div>
        </div>

        {/* arrow → answer */}
        <div className="relative w-16 shrink-0 flex items-center justify-center" style={{ color: ACCENT }}>
          <div className="absolute left-0 right-6 top-1/2 h-px bg-black/15" />
          <span className="absolute right-3">▸</span>
        </div>

        <div className="flex items-center">
          <div className="rounded-2xl border-2 px-6 py-5 bg-white" style={{ borderColor: ACCENT }}>
            <div className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-black/40">Answer</div>
            <div className="text-[17px] font-semibold mt-1.5">Profit fell $12,430</div>
            <div className="text-[13px] text-black/50 mt-1">48% was Amazon fees.</div>
          </div>
        </div>
      </div>

      {/* mobile — stacked */}
      <div className="md:hidden px-6 py-10 flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {dataSources.map((s) => (
            <span key={s.name} className="flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-[12px] font-medium mono">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>
        <div style={{ color: ACCENT }} className="text-[20px]">▾</div>
        <div className="w-20 h-20 rounded-2xl bg-[#141414] grid place-items-center">
          <Image src="/talo-logo-mark.png" alt="Talo" width={329} height={140} className="h-6 w-auto" />
        </div>
        <div style={{ color: ACCENT }} className="text-[20px]">▾</div>
        <div className="rounded-2xl border-2 px-5 py-4 bg-white" style={{ borderColor: ACCENT }}>
          <div className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-black/40">Answer</div>
          <div className="text-[16px] font-semibold mt-1">Profit fell $12,430</div>
          <div className="text-[12.5px] text-black/50 mt-1">48% was Amazon fees.</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- evidence ---------- */

function EvidenceCard() {
  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-[0_20px_50px_-24px_rgba(20,20,20,0.3)]">
      <div className="px-5 py-4 border-b border-black/[0.06] bg-[#FAFAF9] text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">
        Amazon payout
      </div>
      <div className="px-5 py-5 mono text-[13px]">
        {evidenceRows.map((r) => (
          <div key={r.label} className={`flex items-center justify-between py-2 ${r.diff ? "border-t border-black/[0.08] mt-1 pt-3" : ""}`}>
            <span className={r.diff ? "font-semibold" : "text-black/55"}>{r.label}</span>
            <span className={r.diff ? "font-bold" : "font-semibold"} style={r.diff ? { color: ACCENT } : undefined}>{r.val}</span>
          </div>
        ))}
        <div className="mt-4 pt-3 border-t border-dashed border-black/10 space-y-2">
          {evidenceBreak.map((r) => (
            <div key={r.label} className="flex items-center justify-between text-[12px]">
              <span className="text-black/45">{r.label}</span>
              <span className="text-black/70">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
      <a href="#" className="flex items-center justify-between px-5 py-3.5 border-t border-black/[0.06] text-[12.5px] font-semibold hover:bg-[#FAFAF9] transition-colors">
        View transactions <span style={{ color: ACCENT }}>→</span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFEEEC] text-[#141414] selection:bg-[#719DF4] selection:text-white">
      <div className="fixed inset-0 bg-lines-soft pointer-events-none opacity-[0.7]" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-3 md:px-5">
        {/* NAV */}
        <header className="sticky top-3 md:top-4 z-50 pt-3 md:pt-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="w-full max-w-[980px] bg-[#141414] text-white rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-4 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]"
          >
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/talo-logo-mark.png" alt="Talo" width={329} height={140} className="h-7 w-auto" priority />
            </Link>
            <nav className="hidden lg:flex items-center gap-6 text-[12.5px] text-white/65">
              <a href="#how" className="hover:text-white transition-colors">How it works</a>
              <a href="#data" className="hover:text-white transition-colors">Your data</a>
              <a href="#jobs" className="hover:text-white transition-colors">Jobs</a>
              <a href="#evidence" className="hover:text-white transition-colors">Evidence</a>
            </nav>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-white/55 pr-1">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ADE80" }} /> Talo online
              </span>
              <Link href="/hire" className="bg-white text-[#141414] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-white/90 hover:scale-[1.04] active:scale-[0.97] transition-all whitespace-nowrap">
                Give Talo a job →
              </Link>
            </div>
          </motion.div>
        </header>

        {/* HERO */}
        <section className="mt-10 md:mt-16 text-center">
          <motion.div initial="hidden" animate="show" variants={heroStagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-black/45 bg-white border border-black/[0.06] rounded-full px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} /> Your AI employee for ecommerce
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }} className="mt-6 leading-[0.95] tracking-[-0.03em]">
              <span className="block text-[44px] sm:text-[62px] lg:text-[76px] font-semibold">Give Talo a job.</span>
              <span className="block text-[44px] sm:text-[62px] lg:text-[76px] font-semibold" style={{ color: ACCENT }}>
                It gets it done.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }} className="text-[15px] md:text-[17px] leading-[1.6] text-black/55 mt-6 max-w-[560px] mx-auto">
              Tell Talo what you need. It investigates your business and gets you the answer — with the evidence to back it up.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }} className="mt-8">
              <Link href="/hire" className="inline-flex bg-[#141414] hover:bg-black text-white text-[14px] font-semibold px-8 py-4 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all">
                Give Talo a job →
              </Link>
            </motion.div>
          </motion.div>

          {/* live demo */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
            className="mt-12 md:mt-16 max-w-[640px] mx-auto text-left"
          >
            <HeroDemo />
          </motion.div>
        </section>

        {/* CONCEPT */}
        <motion.section id="how" {...revealProps} className="scroll-mt-28 mt-16 md:mt-28 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06] text-center">
            <h2 className="text-[28px] md:text-[38px] leading-[1.1] tracking-[-0.02em] font-semibold">
              You don&apos;t need another dashboard.
            </h2>
            <p className={`${serif.className} text-[19px] md:text-[22px] text-black/50 mt-3`}>You need the answer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {concept.map((c, i) => (
              <motion.div
                key={c.step}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
                className={`relative px-6 py-9 border-black/[0.06] ${i < 3 ? "md:border-r" : ""} ${i > 0 ? "border-t md:border-t-0" : ""}`}
              >
                <div className="text-[13px] mono font-semibold" style={{ color: ACCENT }}>0{i + 1}</div>
                <div className="text-[16px] font-semibold mt-3 leading-snug">{c.step}</div>
                <div className={`${serif.className} text-[16px] text-black/50 mt-2 leading-relaxed`}>{c.detail}</div>
                {i < 3 && (
                  <div className="hidden md:grid absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 bg-white border border-black/[0.08] rounded-full place-items-center text-[11px] z-10" style={{ color: ACCENT }}>
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* DATA → TALO → ANSWER */}
        <motion.section id="data" {...revealProps} className="scroll-mt-28 mt-8 md:mt-10 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06] text-center">
            <h2 className="text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.02em] font-semibold">
              You have the data. <span style={{ color: ACCENT }}>Talo does the digging.</span>
            </h2>
          </div>
          <WiringDiagram />
        </motion.section>

        {/* JOB BOARD */}
        <motion.section id="jobs" {...revealProps} className="scroll-mt-28 mt-8 md:mt-10 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06]">
            <h2 className="text-[28px] md:text-[38px] leading-[1.1] tracking-[-0.02em] font-semibold">What do you need done?</h2>
            <p className="text-[14px] text-black/45 mt-3">Hand Talo any of these. It takes it from there.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {jobBoard.map((j, i) => (
              <motion.div
                key={j.q}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: (i % 2) * 0.06, ease: easeOut }}
              >
                <Link
                  href="/hire"
                  className={`group flex items-center gap-4 px-6 lg:px-8 py-6 border-black/[0.06] hover:bg-[#FAFAF9] transition-colors ${
                    i % 2 === 0 ? "md:border-r" : ""
                  } ${i < jobBoard.length - (jobBoard.length % 2 === 0 ? 2 : 1) ? "border-b" : "border-b md:border-b-0"}`}
                >
                  <span className="w-10 h-10 rounded-xl bg-[#F3F2EF] border border-black/[0.06] grid place-items-center text-[18px] shrink-0">{j.icon}</span>
                  <span className="text-[17px] md:text-[19px] font-semibold tracking-[-0.01em]">“{j.q}”</span>
                  <span className="ml-auto w-8 h-8 rounded-full border border-black/[0.08] grid place-items-center text-[12px] shrink-0 group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EVIDENCE */}
        <motion.section id="evidence" {...revealProps} className="scroll-mt-28 mt-8 md:mt-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-6 lg:px-10 py-12 lg:py-16 lg:border-r border-black/[0.06] flex flex-col justify-center">
              <h2 className="text-[28px] md:text-[38px] leading-[1.1] tracking-[-0.02em] font-semibold">
                Talo shows <span style={{ color: ACCENT }}>its work.</span>
              </h2>
              <p className="text-[15px] leading-[1.7] text-black/55 mt-4 max-w-[400px]">
                Every answer comes with the evidence behind it. No black box — ask &quot;how do you know?&quot; and get shown.
              </p>
            </div>
            <div className="px-6 lg:px-10 py-12 lg:py-16 bg-[#FAFAF9] flex items-center justify-center">
              <div className="w-full max-w-[420px]">
                <LazyMount>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut }}>
                    <EvidenceCard />
                  </motion.div>
                </LazyMount>
              </div>
            </div>
          </div>
        </motion.section>

        {/* PROGRESSION */}
        <motion.section id="autonomy" {...revealProps} className="scroll-mt-28 mt-8 md:mt-10 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06] text-center">
            <h2 className="text-[28px] md:text-[38px] leading-[1.1] tracking-[-0.02em] font-semibold">
              Talo can do more than answer.
            </h2>
            <p className="text-[14px] text-black/45 mt-3">From thinking → doing. You decide how far it goes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {progression.map((p, i) => {
              const dark = i === progression.length - 1;
              return (
                <motion.div
                  key={p.tag}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
                  className={`relative px-6 py-12 text-center border-black/[0.06] ${i < 2 ? "md:border-r" : ""} ${i > 0 ? "border-t md:border-t-0" : ""} ${
                    dark ? "bg-[#141414] text-white" : ""
                  }`}
                >
                  <div className="text-[13px] font-bold tracking-[0.14em] uppercase" style={{ color: ACCENT }}>{p.tag}</div>
                  <div className={`${serif.className} text-[20px] md:text-[24px] mt-3 ${dark ? "text-white/90" : "text-black/70"}`}>{p.quote}</div>
                  {i < 2 && (
                    <div className="hidden md:grid absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 bg-white border border-black/[0.08] rounded-full place-items-center text-[11px] z-10" style={{ color: ACCENT }}>
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* FINAL CTA — pre-launch */}
        <motion.section {...revealProps} className="mt-8 md:mt-10 rounded-[22px] bg-[#141414] text-white overflow-hidden text-center px-6 py-16 md:py-24">
          <h2 className="leading-[1.05] tracking-[-0.02em]">
            <span className="block text-[32px] md:text-[52px] font-semibold">Stop digging through dashboards.</span>
            <span className={`${serif.className} block text-[34px] md:text-[56px]`} style={{ color: ACCENT }}>Give Talo the job.</span>
          </h2>
          <div className="mt-9">
            <Link href="/hire" className="inline-flex bg-white hover:bg-white/90 text-[#141414] text-[14px] font-semibold px-8 py-4 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all">
              Give Talo a job →
            </Link>
          </div>
          <div className="mt-7 inline-flex items-center gap-2 text-[12.5px] text-white/55">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ADE80" }} />
            We&apos;re building Talo with our first users — <span className="text-white font-semibold">get 50% off early access.</span>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer {...revealProps} className="mt-4 md:mt-5 mb-6 rounded-[32px] bg-[#0E0F10] overflow-hidden relative">
          <div className="relative px-6 md:px-10 pt-10 md:pt-12 pb-8 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8">
            <div>
              <Image src="/talo-by-abstrak-lockup.png" alt="Talo by Abstrak Labs" width={613} height={464} className="h-16 w-auto" />
              <p className="text-white/45 text-[13px] leading-relaxed mt-4 max-w-[300px]">
                Your AI employee for ecommerce. You give it a job — it gets it done.
              </p>
              <div className="text-white/35 text-[11px] mt-4">© 2026 Talo. All rights reserved.</div>
            </div>
            <div>
              <div className="text-white text-[12px] font-semibold uppercase tracking-[0.04em] mb-3">Product</div>
              <div className="flex flex-col gap-2 text-[12.5px] text-white/50">
                <a href="#how" className="hover:text-white transition-colors w-fit">How it works</a>
                <a href="#jobs" className="hover:text-white transition-colors w-fit">Jobs</a>
                <a href="#evidence" className="hover:text-white transition-colors w-fit">Evidence</a>
              </div>
            </div>
            <div>
              <div className="text-white text-[12px] font-semibold uppercase tracking-[0.04em] mb-3">Company</div>
              <div className="flex flex-col gap-2 text-[12.5px] text-white/50">
                <Link href="/privacy" className="hover:text-white transition-colors w-fit">Privacy Policy</Link>
                <Link href="/hire" className="hover:text-white transition-colors w-fit">Give Talo a job</Link>
                <a href="mailto:hello@abstraklabs.com" className="hover:text-white transition-colors w-fit">hello@abstraklabs.com</a>
              </div>
            </div>
          </div>
          <div className="relative border-t border-white/[0.08] px-6 md:px-10 py-5">
            <p className="text-white/40 text-[12.5px]">
              <span className="text-white/70 font-semibold">Talo</span> — Your AI employee for ecommerce.
            </p>
          </div>
          <div className="relative select-none pointer-events-none text-center leading-none font-semibold tracking-[-0.03em] text-[26vw] md:text-[18vw] lg:text-[220px] translate-y-[32%]">
            <span style={{ color: ACCENT, opacity: 0.1 }}>TALO</span>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
