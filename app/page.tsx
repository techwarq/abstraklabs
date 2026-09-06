"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instrument_Serif } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });

const ACCENT = "#719DF4";
const INK = "#141414";
const GREEN = "#16A34A";
const RED = "#DC2626";

/* ---------- data ---------- */

// the investigation the hero runs, and that the "how it works" section re-tells
const heroTrace = [
  { src: "Shopify", color: "#95BF47", note: "Revenue down 3%", dir: "down" },
  { src: "Amazon", color: "#FF9900", note: "Fees up 27%", dir: "up-bad" },
  { src: "Meta", color: "#4267B2", note: "Ad spend up 18%", dir: "up-bad" },
  { src: "QuickBooks", color: "#2CA01C", note: "COGS unchanged", dir: "flat" },
  { src: "Refunds", color: "#DC2626", note: "Refund rate up 4%", dir: "up-bad" },
] as const;

const findingBreakdown = [
  { pct: 48, label: "Higher Amazon fees" },
  { pct: 31, label: "Increased Meta spend" },
  { pct: 21, label: "Higher refunds — 7 SKUs" },
];

const dashboards = [
  { name: "Shopify", tells: "what sold" },
  { name: "Triple Whale", tells: "what your ads did" },
  { name: "Finaloop", tells: "your numbers" },
  { name: "QuickBooks", tells: "your books" },
];

const sources = ["Shopify", "Amazon", "Meta", "Google", "Stripe", "QuickBooks", "Your bank", "Inventory files"];

const jobs = [
  { n: "01", q: "Why did my profit change?", d: "Traces every dollar of movement to its source." },
  { n: "02", q: "Why was my payout different?", d: "Reconciles expected vs. actual, line by line." },
  { n: "03", q: "Find where I'm losing money.", d: "Sweeps fees, refunds, spend and margin for leaks." },
  { n: "04", q: "Find anything unusual.", d: "Flags the anomalies before they become problems." },
  { n: "05", q: "Tell me what needs my attention.", d: "Surfaces what actually matters this week." },
];

const autonomy = [
  { n: 1, level: "Investigate", behavior: "Explains what happened", ex: "“Here’s what happened.”" },
  { n: 2, level: "Recommend", behavior: "Suggests next steps", ex: "“Here’s what I’d do.”" },
  { n: 3, level: "Prepare", behavior: "Drafts the action", ex: "“I’ve prepared the purchase order.”" },
  { n: 4, level: "Ask approval", behavior: "Confirms before acting", ex: "“Should I send it?”" },
  { n: 5, level: "Execute", behavior: "Acts autonomously", ex: "“Done.”" },
];

const comparison = [
  { tool: "Shopify Sidekick", promise: "AI for your Shopify store", talo: "AI for your entire ecommerce business" },
  { tool: "Triple Whale", promise: "Understand & optimize ecommerce", talo: "Investigate and complete the job" },
  { tool: "Finaloop", promise: "Financial operating system", talo: "Works with your existing financial stack" },
  { tool: "A2X", promise: "Reconcile payouts", talo: "Investigate any financial problem" },
  { tool: "Polar", promise: "Ecommerce BI", talo: "Don’t make me read dashboards" },
  { tool: "Gumloop / Relevance AI", promise: "Build your own AI agents", talo: "You don’t build the employee — we give you one" },
];

const laborWeek = [
  { day: "Mon", h: "2h", task: "Reconcile payouts" },
  { day: "Tue", h: "1h", task: "Analyze sales" },
  { day: "Wed", h: "2h", task: "Inventory spreadsheet" },
  { day: "Thu", h: "2h", task: "Investigate fees" },
  { day: "Fri", h: "2h", task: "Weekly report" },
];

const pricing = [
  { name: "Starter", price: "$99–149", per: "/mo", features: "Core investigation jobs, one store", highlight: false },
  { name: "Growth", price: "$299–499", per: "/mo", features: "Multiple data sources, scheduled jobs", highlight: true },
  { name: "Pro", price: "$799–1,499+", per: "/mo", features: "Full data access, team access, actions & autonomy", highlight: false },
  { name: "Enterprise", price: "$2K–10K+", per: "/mo", features: "Multiple stores, agencies, custom workflows", highlight: false },
];

/* ---------- motion helpers ---------- */

const card = "bg-white rounded-[22px] border border-black/[0.06] shadow-[0_2px_16px_-4px_rgba(20,20,20,0.06)]";
const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const revealProps = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, margin: "-80px" } as const,
  variants: fadeUp,
  transition: { duration: 0.6, ease: easeOut },
};

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

/* ---------- small primitives ---------- */

function TypingText({ text, speed = 34 }: { text: string; speed?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
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

function TrendMark({ dir }: { dir: string }) {
  if (dir === "flat") return <span className="text-black/30">—</span>;
  const up = dir.startsWith("up");
  const bad = dir === "up-bad" || dir === "down";
  return (
    <span style={{ color: bad ? RED : GREEN }} className="font-semibold">
      {up ? "▲" : "▼"}
    </span>
  );
}

function SourceTag({ name, color }: { name: string; color: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
      {name}
    </span>
  );
}

/* ---------- hero: a live investigation running ---------- */

function HeroInvestigation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      {/* ambient glow */}
      <div
        className="absolute -inset-8 rounded-[44px] blur-3xl opacity-70 -z-10 pointer-events-none"
        style={{ background: `radial-gradient(60% 60% at 50% 30%, ${ACCENT}55, transparent 72%)` }}
      />
      <div
        className="relative rounded-[28px] p-2.5 md:p-3 overflow-hidden shadow-[0_35px_70px_-20px_rgba(40,48,110,0.45)]"
        style={{ background: `linear-gradient(150deg, #4E5FBD 0%, ${ACCENT} 55%, #D6DDF3 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.5] mix-blend-overlay pointer-events-none"
          style={{ background: "radial-gradient(120% 90% at 15% 0%, rgba(255,255,255,0.5), transparent 55%)" }}
        />

        <div className="relative rounded-[20px] bg-white border border-black/[0.06] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.06] bg-[#FAFAF9]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-[10.5px] text-black/35 bg-white border border-black/[0.06] rounded-full px-3 py-1 flex-1 text-center max-w-[200px]">
              talo.abstraklabs.com
            </span>
            <span className="flex items-center gap-1.5 text-[10.5px] font-semibold" style={{ color: GREEN }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN }} /> On the job
            </span>
          </div>

          <div className="px-5 py-5">
            {/* the job */}
            <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40">The job</div>
            <div className="mt-2 relative text-[14px] leading-[1.5] font-medium bg-[#F5F4F1] rounded-xl pl-4 pr-3.5 py-3.5 overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: ACCENT }} />
              {inView ? <TypingText text={"“Why did my profit drop last month?”"} /> : " "}
            </div>

            {/* investigation trace */}
            <div className="mt-5 flex items-center justify-between">
              <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40">Investigation trace</div>
              <div className="text-[10px] font-semibold text-black/35">5 systems checked</div>
            </div>

            <div className="mt-2 rounded-xl border border-black/[0.06] overflow-hidden mono">
              {heroTrace.map((row, i) => (
                <motion.div
                  key={row.src}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.1 + i * 0.18, ease: easeOut }}
                  className="flex items-center gap-3 px-3.5 py-2.5 border-b last:border-b-0 border-black/[0.05] text-[11.5px]"
                >
                  <span className="w-[86px] shrink-0 font-semibold text-black/70">
                    <SourceTag name={row.src} color={row.color} />
                  </span>
                  <span className="text-black/30">→</span>
                  <span className="text-black/60">{row.note}</span>
                  <span className="ml-auto">
                    <TrendMark dir={row.dir} />
                  </span>
                </motion.div>
              ))}
            </div>

            {/* root cause / finding */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 + heroTrace.length * 0.18 + 0.15, ease: easeOut }}
              className="mt-3 rounded-xl overflow-hidden border border-black/[0.06]"
            >
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: ACCENT }}>
                <span className="w-4 h-4 rounded-full bg-white/25 grid place-items-center shrink-0 text-white text-[10px]">✓</span>
                <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-white">Root cause</div>
              </div>
              <div className="px-4 py-4" style={{ background: "#F5F4F1" }}>
                <div className="text-[15px] font-semibold tracking-tight">
                  Profit down 19% <span style={{ color: ACCENT }}>($12,430)</span>
                </div>
                <div className="mt-3 space-y-2">
                  {findingBreakdown.map((b) => (
                    <div key={b.label} className="flex items-center gap-3 text-[11px]">
                      <span className="w-9 shrink-0 font-semibold mono text-black/70">{b.pct}%</span>
                      <div className="flex-1 h-1.5 rounded-full bg-black/[0.07] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: ACCENT }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${b.pct}%` } : {}}
                          transition={{ duration: 0.8, delay: 2.4, ease: easeOut }}
                        />
                      </div>
                      <span className="text-black/55 w-[130px] shrink-0 leading-tight">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- how it works: the investigation, retold ---------- */

function InvestigationFlow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* the trace */}
      <div className="p-6 lg:p-8 lg:border-r border-black/[0.06]">
        <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40">Investigation trace</div>
        <div className="mt-4 mono relative">
          <div className="absolute left-[5px] top-2 bottom-8 w-px bg-black/[0.1]" />
          {heroTrace.map((row, i) => (
            <motion.div
              key={row.src}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: easeOut }}
              className="relative flex items-center gap-3 pl-6 py-2.5 text-[13px]"
            >
              <span className="absolute left-0 w-[11px] h-[11px] rounded-full border-2 border-white" style={{ background: row.color }} />
              <span className="w-[100px] shrink-0 font-semibold">{row.src}</span>
              <span className="text-black/30">→</span>
              <span className="text-black/60">{row.note}</span>
              <span className="ml-auto">
                <TrendMark dir={row.dir} />
              </span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: heroTrace.length * 0.08, ease: easeOut }}
            className="relative flex items-center gap-3 pl-6 py-3 mt-1 text-[13px] border-t border-dashed border-black/15"
          >
            <span className="absolute left-0 w-[11px] h-[11px] rounded-full ring-4 ring-white" style={{ background: ACCENT }} />
            <span className="font-bold tracking-[0.04em]" style={{ color: ACCENT }}>ROOT CAUSE</span>
            <span className="text-black/30">→</span>
            <span className="font-semibold">Profit down 19% ($12,430)</span>
          </motion.div>
        </div>
      </div>

      {/* the finding */}
      <div className="p-6 lg:p-8 bg-[#FAFAF9]">
        <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40">The finding</div>
        <p className="text-[19px] md:text-[22px] font-semibold tracking-[-0.01em] mt-4 leading-snug">
          Your profit fell <span style={{ color: ACCENT }}>$12,430</span> this month.
        </p>
        <div className="mt-5 space-y-3.5">
          {findingBreakdown.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
              className="flex items-center gap-4"
            >
              <div className="text-[22px] font-semibold mono w-[52px] shrink-0" style={{ color: ACCENT }}>{b.pct}%</div>
              <div className="flex-1">
                <div className="h-2 rounded-full bg-black/[0.07] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: ACCENT }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: easeOut }}
                  />
                </div>
                <div className="text-[13px] text-black/55 mt-1.5">{b.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <a href="#evidence" className="inline-flex items-center gap-2 mt-7 text-[13px] font-semibold text-black hover:opacity-70 transition-opacity">
          View the evidence <span style={{ color: ACCENT }}>→</span>
        </a>
      </div>
    </div>
  );
}

/* ---------- evidence card: reconciliation ---------- */

const evidenceRows = [
  { label: "Expected payout", val: "$48,293", strong: true },
  { label: "Actual payout", val: "$44,472", strong: true },
  { label: "Difference", val: "$3,821", diff: true },
];
const evidenceBreak = [
  { label: "Amazon fees", val: "$2,940" },
  { label: "Refunds", val: "$681" },
  { label: "Adjustment", val: "$200" },
];

function EvidenceCard() {
  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-[0_20px_50px_-24px_rgba(20,20,20,0.3)]">
      <div className="px-5 py-4 border-b border-black/[0.06] bg-[#FAFAF9]">
        <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40">Finding</div>
        <div className="text-[14px] font-semibold mt-1">Amazon fees caused $3,821 of the discrepancy</div>
      </div>
      <div className="px-5 py-5 mono text-[13px]">
        {evidenceRows.map((r) => (
          <div
            key={r.label}
            className={`flex items-center justify-between py-2 ${r.diff ? "border-t border-black/[0.08] mt-1 pt-3" : ""}`}
          >
            <span className={r.diff ? "font-semibold" : "text-black/55"}>{r.label}</span>
            <span
              className={r.diff ? "font-bold" : r.strong ? "font-semibold" : ""}
              style={r.diff ? { color: ACCENT } : undefined}
            >
              {r.val}
            </span>
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
      <a
        href="#"
        className="flex items-center justify-between px-5 py-3.5 border-t border-black/[0.06] text-[12.5px] font-semibold hover:bg-[#FAFAF9] transition-colors"
      >
        View transactions <span style={{ color: ACCENT }}>→</span>
      </a>
    </div>
  );
}

/* ---------- autonomy ladder ---------- */

function AutonomyLadder() {
  return (
    <div className="grid grid-cols-1">
      {autonomy.map((a, i) => (
        <motion.div
          key={a.n}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: i * 0.07, ease: easeOut }}
          className={`grid grid-cols-[auto_1fr] md:grid-cols-[64px_180px_1fr_auto] items-center gap-x-4 gap-y-1 px-5 md:px-7 py-4 ${
            i > 0 ? "border-t" : ""
          } border-black/[0.06] hover:bg-[#FAFAF9] transition-colors`}
          style={{ paddingLeft: `calc(1.25rem + ${i * 10}px)` }}
        >
          <div
            className="w-9 h-9 rounded-full grid place-items-center text-[14px] font-semibold mono shrink-0"
            style={{ background: `${ACCENT}18`, color: ACCENT }}
          >
            {a.n}
          </div>
          <div className="text-[15px] font-semibold">{a.level}</div>
          <div className="text-[13px] text-black/55 col-span-2 md:col-span-1">{a.behavior}</div>
          <div className={`${serif.className} text-[15px] text-black/50 col-span-2 md:col-span-1 md:text-right`}>{a.ex}</div>
        </motion.div>
      ))}
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
            className="w-full max-w-[1020px] bg-[#141414] text-white rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-4 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]"
          >
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/talo-logo-mark.png" alt="Talo" width={329} height={140} className="h-7 w-auto" priority />
            </Link>

            <nav className="hidden lg:flex items-center gap-5 text-[12.5px] text-white/65">
              <a href="#problem" className="hover:text-white transition-colors">The problem</a>
              <a href="#how" className="hover:text-white transition-colors">How it works</a>
              <a href="#evidence" className="hover:text-white transition-colors">Evidence</a>
              <a href="#jobs" className="hover:text-white transition-colors">Jobs</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-white/55 pr-1">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ADE80" }} /> Talo online
              </span>
              <Link
                href="/hire"
                className="bg-white text-[#141414] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-white/90 hover:scale-[1.04] active:scale-[0.97] transition-all whitespace-nowrap"
              >
                Give Talo a job →
              </Link>
            </div>
          </motion.div>
        </header>

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className={`${card} mt-8 md:mt-12 relative overflow-hidden`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 px-6 md:px-10 lg:px-14 py-12 md:py-16 lg:py-20 items-center">
            {/* LEFT */}
            <motion.div initial="hidden" animate="show" variants={heroStagger}>
              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-black/45 bg-[#F3F2EF] border border-black/[0.06] rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} /> AI Employee for Ecommerce
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.5, ease: easeOut }}
                className="leading-[0.98] tracking-[-0.02em] mt-5"
              >
                <span className="block text-[38px] sm:text-[48px] lg:text-[56px] font-semibold">Give Talo a job.</span>
                <span className={`${serif.className} block text-[40px] sm:text-[50px] lg:text-[58px]`} style={{ color: ACCENT }}>
                  It gets it done.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, ease: easeOut }}
                className="text-[14.5px] leading-[1.65] text-black/55 mt-5 max-w-[460px]"
              >
                Talo is the AI employee that investigates what&apos;s wrong with your ecommerce business — and tells you
                exactly why, <span className="font-semibold text-black/80">with evidence</span> — instead of another
                dashboard you have to interpret yourself.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }} className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/hire"
                  className="bg-[#141414] hover:bg-black text-white text-[13px] font-semibold px-6 py-3.5 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all"
                >
                  Give Talo your first job →
                </Link>
                <a href="#how" className="text-[13px] font-semibold text-black/70 hover:text-black transition-colors px-2">
                  See a real investigation
                </a>
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }} className="mt-8">
                <div className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-black/35">Investigates across</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {sources.map((t) => (
                    <span key={t} className="text-[11.5px] text-black/55 bg-[#F3F2EF] border border-black/[0.06] rounded-full px-3 py-1.5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
              className="relative lg:pl-4"
            >
              <HeroInvestigation />
            </motion.div>
          </div>
        </motion.section>

        {/* PROBLEM */}
        <motion.section id="problem" {...revealProps} className="scroll-mt-28 mt-10 md:mt-16 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06]">
            <h2 className="text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em] font-semibold">
              Your business already has enough dashboards.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {dashboards.map((d, i) => (
              <div
                key={d.name}
                className={`px-6 py-7 ${i % 4 !== 3 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                  i < 2 ? "border-b md:border-b-0" : ""
                } border-black/[0.06]`}
              >
                <div className="text-[14px] font-semibold">{d.name}</div>
                <div className="text-[12.5px] text-black/45 mt-1.5 leading-relaxed">
                  tells you <span className="text-black/70">{d.tells}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-black/[0.06]">
            <div className="px-6 lg:px-8 py-8 lg:border-r border-black/[0.06]">
              <p className="text-[15px] leading-[1.7] text-black/65">
                None of them tell you <span className="font-semibold text-black">why</span> something went wrong, or{" "}
                <span className="font-semibold text-black">what to do about it</span>.
              </p>
              <p className="text-[15px] leading-[1.7] text-black/65 mt-4">
                So someone on your team spends <span className="font-semibold text-black">8–10 hours a week</span> manually
                stitching it together — reconciling payouts, chasing fee discrepancies, digging through spreadsheets to
                explain a number that doesn&apos;t look right.
              </p>
            </div>
            <div className="px-6 lg:px-8 py-10 flex items-center bg-[#141414]">
              <p className={`${serif.className} text-[26px] md:text-[32px] leading-[1.25] text-white`}>
                You don&apos;t have a data problem. You have an{" "}
                <span style={{ color: ACCENT }}>investigation problem.</span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* SOLUTION / POSITIONING */}
        <motion.section {...revealProps} className="mt-10 md:mt-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-6 lg:px-10 py-10 lg:border-r border-black/[0.06]">
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">Not a dashboard</div>
              <h2 className="text-[26px] md:text-[34px] leading-[1.12] tracking-[-0.02em] font-semibold mt-4">
                Talo doesn&apos;t show you metrics.{" "}
                <span style={{ color: ACCENT }}>It goes and finds the answer.</span>
              </h2>
              <p className="text-[15px] leading-[1.7] text-black/60 mt-5 max-w-[560px]">
                Talo is an AI employee, not a dashboard. Ask it a real question — &quot;why did my profit drop,&quot;
                &quot;why was my payout short,&quot; &quot;find where I&apos;m losing money&quot; — and it investigates across
                every system your business runs on.
              </p>
              <p className="text-[15px] leading-[1.7] text-black/60 mt-4 max-w-[560px]">
                It comes back with a finding, the evidence behind it, and{" "}
                <span className="font-semibold text-black/80">what it already did</span> (or recommends doing) about it.
              </p>
            </div>
            <div className="px-6 lg:px-10 py-10 bg-[#FAFAF9]">
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">Systems it runs on</div>
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {sources.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-[14px] text-black/70">
                    <span className="w-6 h-6 rounded-full bg-white border border-black/[0.08] grid place-items-center text-[11px]" style={{ color: ACCENT }}>
                      ✓
                    </span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* HOW IT WORKS — THE INVESTIGATION */}
        <motion.section id="how" {...revealProps} className="scroll-mt-28 mt-10 md:mt-16 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06] flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">How it works</div>
              <h2 className="text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em] font-semibold mt-3">
                Watch Talo work a real job.
              </h2>
            </div>
            <div className={`${serif.className} text-[18px] text-black/50 md:text-right`}>
              &quot;Why did my profit drop last month?&quot;
            </div>
          </div>
          <InvestigationFlow />
        </motion.section>

        {/* EVIDENCE */}
        <motion.section id="evidence" {...revealProps} className="scroll-mt-28 mt-10 md:mt-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-6 lg:px-10 py-10 lg:py-14 lg:border-r border-black/[0.06] flex flex-col justify-center">
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">Trust</div>
              <h2 className="text-[26px] md:text-[34px] leading-[1.12] tracking-[-0.02em] font-semibold mt-4">
                Talo shows its work. <span style={{ color: ACCENT }}>Every time.</span>
              </h2>
              <p className="text-[15px] leading-[1.7] text-black/60 mt-5 max-w-[460px]">
                No black-box answers. Every finding comes with the underlying numbers, so you can ask &quot;how do you
                know?&quot; and actually get shown.
              </p>
            </div>
            <div className="px-6 lg:px-10 py-10 lg:py-14 bg-[#FAFAF9] flex items-center justify-center">
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

        {/* FIVE KILLER JOBS */}
        <motion.section id="jobs" {...revealProps} className="scroll-mt-28 mt-10 md:mt-16 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06]">
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">V1 scope</div>
            <h2 className="text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em] font-semibold mt-3">
              Start with five jobs. Nail them completely.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((j, i) => (
              <motion.div
                key={j.n}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: easeOut }}
                whileHover={{ y: -4 }}
                className={`px-6 py-8 group hover:bg-[#FAFAF9] transition-colors border-black/[0.06] ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i % 2 === 0 ? "md:border-r lg:border-r" : ""} border-b`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[11px] mono font-semibold text-black/30">{j.n}</div>
                  <span className="w-7 h-7 rounded-full border border-black/[0.08] grid place-items-center text-[11px] group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    →
                  </span>
                </div>
                <div className="text-[17px] font-semibold mt-4 leading-snug tracking-[-0.01em]">&quot;{j.q}&quot;</div>
                <div className="text-[13px] text-black/50 mt-2.5 leading-relaxed">{j.d}</div>
              </motion.div>
            ))}
            <div className="px-6 py-8 flex flex-col justify-center bg-[#141414] text-white border-b border-black/[0.06]">
              <div className="text-[13px] leading-relaxed text-white/70">
                Every job runs the same way:
                <span className="text-white font-semibold"> investigate, gather evidence, explain the finding, recommend or take action.</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* AUTONOMY LADDER */}
        <motion.section id="autonomy" {...revealProps} className="scroll-mt-28 mt-10 md:mt-16 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06]">
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">Trust progression</div>
            <h2 className="text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em] font-semibold mt-3">
              You control how much Talo does on its own.
            </h2>
          </div>
          <AutonomyLadder />
          <div className="px-6 lg:px-8 py-6 border-t border-black/[0.06]">
            <p className={`${serif.className} text-[18px] md:text-[20px] text-black/55`}>
              Talo starts as an analyst. <span className="text-black">You decide when it becomes an operator.</span>
            </p>
          </div>
        </motion.section>

        {/* COMPARISON */}
        <motion.section {...revealProps} className="mt-10 md:mt-16 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06]">
            <h2 className="text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.02em] font-semibold max-w-[820px]">
              Talo isn&apos;t trying to replace your tools. It&apos;s trying to replace{" "}
              <span style={{ color: ACCENT }}>the person stitching them together.</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-[1fr_1.2fr_1.4fr] px-6 lg:px-8 py-3.5 border-b border-black/[0.06] text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40 bg-[#FAFAF9]">
                <div>Tool</div>
                <div>Their promise</div>
                <div style={{ color: ACCENT }}>Talo</div>
              </div>
              {comparison.map((r, i) => (
                <div
                  key={r.tool}
                  className={`grid grid-cols-[1fr_1.2fr_1.4fr] px-6 lg:px-8 py-4 items-center text-[13.5px] ${
                    i > 0 ? "border-t" : ""
                  } border-black/[0.06] hover:bg-[#FAFAF9] transition-colors`}
                >
                  <div className="font-semibold pr-4">{r.tool}</div>
                  <div className="text-black/50 pr-4">{r.promise}</div>
                  <div className="font-medium">{r.talo}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ATTACK THE LABOR */}
        <motion.section {...revealProps} className="mt-10 md:mt-16 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06]">
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">Attack the labor</div>
            <h2 className="text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em] font-semibold mt-3">
              Replace the 10 hours, not the software.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* before */}
            <div className="px-6 lg:px-8 py-8 lg:border-r border-black/[0.06]">
              <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-black/40">Before Talo — a typical week</div>
              <div className="mt-5 rounded-2xl border border-black/[0.06] overflow-hidden mono">
                {laborWeek.map((r, i) => (
                  <div key={r.day} className={`flex items-center gap-4 px-4 py-3 text-[13px] ${i > 0 ? "border-t" : ""} border-black/[0.05]`}>
                    <span className="w-10 font-semibold text-black/40">{r.day}</span>
                    <span className="w-10 font-semibold" style={{ color: RED }}>{r.h}</span>
                    <span className="text-black/60">{r.task}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-[13px] font-semibold">
                = <span style={{ color: RED }}>9 hours/week</span> of manual investigation
              </div>
            </div>

            {/* after */}
            <div className="px-6 lg:px-8 py-8 bg-[#141414] flex flex-col justify-center">
              <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/40">With Talo</div>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-[56px] md:text-[72px] font-semibold leading-none mono" style={{ color: ACCENT }}>37</span>
                <span className="text-[18px] md:text-[22px] font-semibold text-white leading-tight">
                  jobs completed<br />this week.
                </span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[12.5px] text-white/50">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ADE80" }} />
                Talo, working while you slept.
              </div>
            </div>
          </div>
        </motion.section>

        {/* PRICING */}
        <motion.section id="pricing" {...revealProps} className="scroll-mt-28 mt-10 md:mt-16 overflow-hidden">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06] flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-black/40">Pricing</div>
              <h2 className="text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em] font-semibold mt-3">
                Priced like an employee, not a seat.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((p, i) => (
              <motion.div
                key={p.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                className={`px-6 py-8 flex flex-col border-black/[0.06] ${i % 4 !== 3 ? "lg:border-r" : ""} ${
                  i % 2 === 0 ? "md:border-r lg:border-r" : ""
                } ${i < 2 ? "border-b md:border-b lg:border-b-0" : ""} ${i === 2 ? "border-b md:border-b-0" : ""} ${
                  p.highlight ? "bg-[#141414] text-white" : "hover:bg-[#FAFAF9] transition-colors"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase">{p.name}</div>
                  {p.highlight && (
                    <span className="text-[9.5px] font-semibold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full" style={{ background: ACCENT }}>
                      Popular
                    </span>
                  )}
                </div>
                <div className="mt-5">
                  <span className="text-[28px] font-semibold tracking-tight mono">{p.price}</span>
                  <span className={p.highlight ? "text-white/40 text-[14px]" : "text-black/40 text-[14px]"}>{p.per}</span>
                </div>
                <p className={`text-[13px] leading-relaxed mt-4 flex-1 ${p.highlight ? "text-white/60" : "text-black/55"}`}>
                  {p.features}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="px-6 lg:px-8 py-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-black/55">Not sure where you fit? Start with a free investigation.</p>
            <Link
              href="/hire"
              className="bg-[#141414] hover:bg-black text-white text-[13px] font-semibold px-6 py-3 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all whitespace-nowrap"
            >
              Start with a free investigation →
            </Link>
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section {...revealProps} className="mt-10 md:mt-16 text-center px-6 py-14 md:py-20">
          <h2 className="leading-[1.05] tracking-[-0.02em]">
            <span className="block text-[30px] md:text-[46px] font-semibold">Stop asking which dashboard</span>
            <span className="block text-[30px] md:text-[46px] font-semibold">has the answer.</span>
          </h2>
          <p className={`${serif.className} text-[22px] md:text-[28px] text-black/55 mt-5`}>
            Just tell Talo what needs to get done.
          </p>
          <Link
            href="/hire"
            className="mt-8 inline-flex bg-[#141414] hover:bg-black text-white text-[13.5px] font-semibold px-8 py-4 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all"
          >
            Give Talo a job →
          </Link>
        </motion.section>

        {/* FOOTER */}
        <motion.footer {...revealProps} className="mt-4 md:mt-5 mb-6 rounded-[32px] bg-[#0E0F10] overflow-hidden relative">
          <div className="relative px-6 md:px-10 pt-10 md:pt-12 pb-8 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8">
            <div>
              <Image src="/talo-by-abstrak-lockup.png" alt="Talo by Abstrak Labs" width={613} height={464} className="h-16 w-auto" />
              <p className="text-white/45 text-[13px] leading-relaxed mt-4 max-w-[300px]">
                Your AI employee for ecommerce. It investigates what&apos;s wrong — and shows you why.
              </p>
              <div className="text-white/35 text-[11px] mt-4">© 2026 Talo. All rights reserved.</div>
            </div>

            <div>
              <div className="text-white text-[12px] font-semibold uppercase tracking-[0.04em] mb-3">Product</div>
              <div className="flex flex-col gap-2 text-[12.5px] text-white/50">
                <a href="#how" className="hover:text-white transition-colors w-fit">How it works</a>
                <a href="#jobs" className="hover:text-white transition-colors w-fit">The five jobs</a>
                <a href="#pricing" className="hover:text-white transition-colors w-fit">Pricing</a>
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

          {/* wordmark bleed */}
          <div className="relative select-none pointer-events-none text-center leading-none font-semibold tracking-[-0.03em] text-[26vw] md:text-[18vw] lg:text-[220px] translate-y-[32%]">
            <span style={{ color: ACCENT, opacity: 0.1 }}>TALO</span>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
