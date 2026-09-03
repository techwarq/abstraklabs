"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instrument_Serif } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });

const ACCENT = "#719DF4";
const INK = "#141414";

const portfolio = [
  {
    n: "01",
    title: "500-Company Market Research",
    request: "Find 500 SaaS companies in the US, including founders, funding, website and LinkedIn.",
    workflow: "RESEARCH → FILTER → VERIFY → ENRICH",
    delivered: "500 QUALIFIED COMPANIES",
    time: "6h 42m",
    cost: "$67",
  },
  {
    n: "02",
    title: "LinkedIn Data Collection",
    request: "Collect 1,200 profiles matching our ICP criteria.",
    workflow: "COLLECT → DEDUPLICATE → VERIFY → ENRICH",
    delivered: "1,200 PROFILES",
    time: "4h 12m",
    cost: "$42",
  },
  {
    n: "03",
    title: "Lead Enrichment",
    request: "Find 1,000 companies matching our criteria and enrich decision makers.",
    workflow: "RESEARCH → FILTER → VERIFY → ENRICH",
    delivered: "1,000 QUALIFIED LEADS",
    time: "5h 30m",
    cost: "$55",
  },
  {
    n: "04",
    title: "Competitor Research",
    request: "Research competitors, pricing, features and positioning.",
    workflow: "EXTRACT → COMPARE → ANALYZE → REPORT",
    delivered: "15 COMPETITOR REPORTS",
    time: "3h 15m",
    cost: "$32",
  },
];

const services = [
  {
    n: "01",
    title: "Research",
    desc: "Market & company intelligence",
    items: ["Market research", "Company research", "Competitor research", "Web research", "Tender / grant research"],
  },
  {
    n: "02",
    title: "Data",
    desc: "Clean, structured, usable data",
    items: ["Data collection", "Data entry", "Spreadsheet cleanup", "Deduplication", "Data enrichment"],
  },
  {
    n: "03",
    title: "Lead Generation",
    desc: "Prospects ready for outreach",
    items: ["Prospect research", "Company lists", "Decision-maker research", "Contact verification"],
  },
  {
    n: "04",
    title: "Browser Work",
    desc: "Repetitive web operations",
    items: ["Website research", "Information extraction", "Forms", "Portal workflows", "Monitoring"],
  },
  {
    n: "05",
    title: "Documents",
    desc: "High-volume document handling",
    items: ["PDF processing", "Invoice data", "Forms", "Record verification", "Document extraction"],
  },
  {
    n: "06",
    title: "Analysis",
    desc: "Research that drives decisions",
    items: ["Competitor analysis", "Pricing research", "Market intelligence", "Research reports"],
  },
];

const workers = [
  { name: "Researcher", meta: "Market research · company research · web research" },
  { name: "Data Worker", meta: "Extraction · cleaning · deduplication · enrichment" },
  { name: "Lead Generator", meta: "Prospects · ICP lists · decision makers" },
  { name: "Browser Operator", meta: "Websites · forms · portals · monitoring" },
  { name: "Analyst", meta: "Competitors · pricing · markets · reports" },
  { name: "Document Worker", meta: "PDFs · forms · invoices · records" },
];

const faqs = [
  { q: "What kind of work can you do?", a: "Research, data, lead generation, browser work, documents and analysis. If it's digital, repetitive, or involves moving information between places — we can likely handle it. Send the task if you're unsure." },
  { q: "Do I need technical knowledge?", a: "No. Describe the task in plain English. No prompts, no workflows to build, no software to learn. We figure out the workflow." },
  { q: "How does $10/hour work?", a: "You pay for active work time at $10/hour, tracked to the second. A 6h 42m job is $67. No subscription, no minimum, no seat fees." },
  { q: "What do I receive?", a: "The finished result — spreadsheet, dataset, report or completed workflow. Delivered as Google Sheet, Excel, CSV, PDF or your preferred format." },
  { q: "How long does a task take?", a: "Most tasks complete in 2–8 hours. Large jobs are batched and you pay only for work done. You'll see time tracked transparently." },
  { q: "Can you work with websites?", a: "Yes, for supported workflows — research, extraction, form workflows, portal updates and monitoring. Tell us the site and the task." },
  { q: "Can you handle large datasets?", a: "Yes. We handle thousands of rows — 1,000 leads, 10,000 products — by breaking work into verified batches and delivering one clean result." },
  { q: "What happens if something needs correction?", a: "We check output before delivery and handle corrections if the result doesn't meet the agreed requirements. Small fixes included." },
];

/* ---------- footer orbit glyphs ---------- */

function GlyphSheet({ color }: { color: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M3.5 10h17M10 10v10.5" />
    </svg>
  );
}
function GlyphCheck({ color }: { color: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 12.5l3 3 6-6.5" />
    </svg>
  );
}
function GlyphClock({ color }: { color: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
function GlyphDollar({ color }: { color: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5v11M15 9.2c0-1.2-1.3-2.2-3-2.2s-3 .9-3 2.2 1.3 1.9 3 2.2c1.7.3 3 1 3 2.3s-1.3 2.1-3 2.1-3-.8-3-2.1" />
    </svg>
  );
}

const orbitBadges = [
  { Glyph: GlyphSheet, color: "#719DF4", top: "2%", left: "16%", delay: 0 },
  { Glyph: GlyphCheck, color: "#4ADE80", top: "-4%", left: "68%", delay: 0.3 },
  { Glyph: GlyphDollar, color: "#F5A623", top: "48%", left: "2%", delay: 0.6 },
  { Glyph: GlyphClock, color: "#60A5FA", top: "42%", left: "84%", delay: 0.9 },
];

function FooterOrbit() {
  return (
    <div className="relative h-[190px] w-full overflow-hidden">
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/[0.14]"
        style={{ width: 420, height: 420 }}
      />
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/[0.12]"
        style={{ width: 320, height: 320 }}
      />
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/[0.1]"
        style={{ width: 230, height: 230 }}
      />

      {orbitBadges.map((b, i) => (
        <motion.div
          key={i}
          className="absolute w-11 h-11 rounded-2xl grid place-items-center backdrop-blur-sm"
          style={{ top: b.top, left: b.left, background: `${b.color}1F`, border: `1px solid ${b.color}40` }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        >
          <b.Glyph color={b.color} />
        </motion.div>
      ))}

      <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-16 h-16 rounded-full bg-white grid place-items-center shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] z-10">
        <Image src="/icon-mark-dark.png" alt="" width={40} height={48} className="h-7 w-auto" />
      </div>
    </div>
  );
}

function FooterSubscribeForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:hello@abstraklabs.com?subject=${encodeURIComponent(
      "Subscribe me to updates"
    )}&body=${encodeURIComponent(`Please add ${email} to product updates.`)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2.5 max-w-[380px]">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@email.com"
        className="text-[13px] bg-white/[0.06] border border-white/10 rounded-full px-4 py-3 flex-1 min-w-0 text-white placeholder:text-white/35 outline-none focus:border-white/25"
      />
      <button
        type="submit"
        className="shrink-0 bg-white text-[#141414] text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-white/90 hover:scale-[1.03] active:scale-[0.97] transition-all"
      >
        Sign up
      </button>
      {sent && <div className="text-[11px] text-white/40 sm:hidden">Opening your mail client…</div>}
    </form>
  );
}

/* ---------- reusable surface classes ---------- */

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

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  return (
    <main className="min-h-screen bg-[#EFEEEC] text-[#141414] selection:bg-[#719DF4] selection:text-white">
      <div className="fixed inset-0 bg-lines-soft pointer-events-none opacity-[0.7]" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-3 md:px-5">
        {/* NAV — dark floating pill */}
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

            <nav className="hidden lg:flex items-center gap-5 text-[12.5px] text-white/65">
              <a href="#difference" className="hover:text-white transition-colors">Difference</a>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#how" className="hover:text-white transition-colors">How it works</a>
              <a href="#services" className="hover:text-white transition-colors">What we do</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-white/55 pr-1">
                <span className="w-1.5 h-1.5 bg-[#4ADE80] rounded-full animate-pulse" /> Agents online
              </span>
              <Link
                href="/hire"
                className="bg-white text-[#141414] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-white/90 hover:scale-[1.04] active:scale-[0.97] transition-all whitespace-nowrap"
              >
                Hire a worker — $10/hr
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
              <motion.h1 variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }} className="leading-[0.98] tracking-[-0.02em]">
                <span className={`${serif.className} block text-[40px] sm:text-[50px] lg:text-[58px] text-black/70`}>
                  Have work to do?
                </span>
                <span className="block text-[38px] sm:text-[48px] lg:text-[54px] font-semibold">
                  Hire an AI <span style={{ color: ACCENT }}>Freelancer.</span>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, ease: easeOut }}
                className="text-[14.5px] leading-[1.65] text-black/55 mt-5 max-w-[440px]"
              >
                Research, data, lead generation, browser work, document processing and other repetitive digital
                tasks — <span className="font-semibold text-black/80">handled from start to finish.</span>
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }} className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/hire"
                  className="bg-[#141414] hover:bg-black text-white text-[13px] font-semibold px-6 py-3.5 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all"
                >
                  Give us a task →
                </Link>
                <a
                  href="#work"
                  className="text-[13px] font-semibold text-black/70 hover:text-black transition-colors px-2"
                >
                  View our work
                </a>
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: easeOut }} className="mt-7 flex flex-wrap gap-2">
                {["Research", "Data", "Lead Generation", "Browser Work", "Documents"].map((t) => (
                  <span key={t} className="text-[11.5px] text-black/55 bg-[#F3F2EF] border border-black/[0.06] rounded-full px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — floating browser mockup */}
            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
              className="relative lg:pl-4"
            >
              {/* ambient glow */}
              <div
                className="absolute -inset-8 rounded-[44px] blur-3xl opacity-70 -z-10 pointer-events-none"
                style={{ background: `radial-gradient(60% 60% at 50% 35%, ${ACCENT}66, transparent 72%)` }}
              />

              {/* gradient frame */}
              <div
                className="relative rounded-[28px] p-2.5 md:p-3 overflow-hidden shadow-[0_35px_70px_-20px_rgba(40,48,110,0.45)]"
                style={{ background: `linear-gradient(150deg, #4E5FBD 0%, ${ACCENT} 55%, #D6DDF3 100%)` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.5] mix-blend-overlay pointer-events-none"
                  style={{ background: "radial-gradient(120% 90% at 15% 0%, rgba(255,255,255,0.5), transparent 55%)" }}
                />

                <div className="relative rounded-[20px] bg-white border border-black/[0.06] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.06] bg-[#FAFAF9]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-3 text-[10.5px] text-black/35 bg-white border border-black/[0.06] rounded-full px-3 py-1 flex-1 text-center max-w-[220px]">
                      app.abstraklabs.com
                    </span>
                  </div>

                  <div className="px-5 py-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40">Customer request</div>
                    <span className="flex items-center gap-1.5 text-[10.5px] text-[#16A34A] font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" /> Worker online
                    </span>
                  </div>
                  <div className="mt-2 relative text-[13px] leading-[1.5] font-medium bg-[#F5F4F1] rounded-xl pl-4 pr-3.5 py-3.5 overflow-hidden">
                    <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: ACCENT }} />
                    &quot;Find 500 US SaaS companies, their founders, funding and LinkedIn.&quot;
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40">Worker activity</div>
                    <div className="text-[10px] font-semibold text-black/35">2/4 done</div>
                  </div>
                  <div className="mt-1.5 h-1 rounded-full bg-black/[0.06] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: ACCENT }}
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ duration: 0.8, delay: 0.75, ease: easeOut }}
                    />
                  </div>

                  <div className="mt-3 rounded-xl border border-black/[0.06] overflow-hidden">
                    {[
                      { n: "01", t: "Searching companies", status: "done" },
                      { n: "02", t: "Verifying websites", status: "done" },
                      { n: "03", t: "Matching founders", status: "active" },
                      { n: "04", t: "Enriching data", status: "queued" },
                    ].map((s, i) => (
                      <motion.div
                        key={s.n}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease: easeOut }}
                        className="flex items-center gap-3 px-3.5 py-2.5 border-b last:border-b-0 border-black/[0.05] text-[11.5px]"
                      >
                        <span className="relative w-[18px] h-[18px] shrink-0 grid place-items-center">
                          {s.status === "done" && (
                            <span className="w-[18px] h-[18px] rounded-full bg-[#141414] grid place-items-center">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12.5l4.5 4.5L19 7" />
                              </svg>
                            </span>
                          )}
                          {s.status === "active" && (
                            <>
                              <span className="absolute w-[18px] h-[18px] rounded-full animate-ping" style={{ background: ACCENT, opacity: 0.35 }} />
                              <span className="relative w-2.5 h-2.5 rounded-full" style={{ background: ACCENT }} />
                            </>
                          )}
                          {s.status === "queued" && <span className="w-[14px] h-[14px] rounded-full border-2 border-black/15" />}
                        </span>
                        <span className={s.status === "queued" ? "text-black/35" : s.status === "active" ? "font-semibold" : "text-black/60"}>
                          {s.t}
                        </span>
                        <span
                          className={`ml-auto text-[9.5px] font-semibold tracking-wide uppercase px-2 py-1 rounded-full ${
                            s.status === "done" ? "bg-black/[0.05] text-black/40" : s.status === "queued" ? "text-black/30" : "text-white"
                          }`}
                          style={s.status === "active" ? { background: ACCENT } : undefined}
                        >
                          {s.status === "done" ? "Done" : s.status === "active" ? "Working" : "Queued"}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.05, ease: easeOut }}
                    className="mt-4 rounded-xl overflow-hidden border border-black/[0.06]"
                  >
                    <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: ACCENT }}>
                      <span className="w-4 h-4 rounded-full bg-white/25 grid place-items-center shrink-0">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7" />
                        </svg>
                      </span>
                      <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-white">Delivered</div>
                    </div>
                    <div className="px-4 py-4" style={{ background: "#F5F4F1" }}>
                      <div className="text-[16px] font-semibold tracking-tight">500 qualified companies</div>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white rounded-lg py-2.5 border border-black/[0.06]">
                          <div className="flex items-center justify-center gap-1 text-black/35">
                            <GlyphClock color="currentColor" />
                            <span className="text-[9px] font-semibold uppercase">Time</span>
                          </div>
                          <div className="text-[12px] font-semibold mt-1">6h 42m</div>
                        </div>
                        <div className="bg-white rounded-lg py-2.5 border border-black/[0.06]">
                          <div className="flex items-center justify-center gap-1 text-black/35">
                            <GlyphDollar color="currentColor" />
                            <span className="text-[9px] font-semibold uppercase">Cost</span>
                          </div>
                          <div className="text-[12px] font-semibold mt-1" style={{ color: ACCENT }}>$67</div>
                        </div>
                        <div className="bg-white rounded-lg py-2.5 border border-black/[0.06]">
                          <div className="flex items-center justify-center gap-1 text-black/35">
                            <GlyphSheet color="currentColor" />
                            <span className="text-[9px] font-semibold uppercase">Output</span>
                          </div>
                          <div className="text-[10px] font-semibold mt-1 leading-tight">Spreadsheet</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* WHY ABSTRAK LABS — AI freelancer positioning */}
        <motion.section id="difference" {...revealProps} className={`scroll-mt-28 ${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="px-6 md:px-10 py-14 md:py-16 text-center border-b border-black/[0.06]">
            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] tracking-[-0.02em] font-semibold max-w-[720px] mx-auto">
              Hire an AI freelancer.
              <br />
              <span style={{ color: ACCENT }}>Not another AI tool.</span>
            </h2>
            <p className={`${serif.className} text-[18px] md:text-[22px] text-black/55 mt-5 max-w-[520px] mx-auto`}>
              You give it the job. The agent figures out how to get it done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Describe the task",
                statement: "Tell us what you need in plain English.",
                quotes: ["Find 1,000 qualified leads.", "Clean my CRM.", "Process 500 invoices."],
                closing: "No prompting. No workflows.",
              },
              {
                n: "02",
                title: "Your AI agent gets to work",
                statement: "We turn your request into a working agent.",
                quotes: ["It researches, browses, processes, verifies and completes the task."],
                closing: "You don't operate the agent. It does the work.",
              },
              {
                n: "03",
                title: "Get the result",
                statement: "See the work happen. Pay for the time used.",
                pill: "6h 42m → $67",
                closing: "Finished files, data, reports or results — delivered.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
                className={`px-7 md:px-8 py-9 md:py-10 ${i < 2 ? "md:border-r" : ""} ${i > 0 ? "border-t md:border-t-0" : ""} border-black/[0.06]`}
              >
                <div className="text-[11px] font-bold tracking-[0.08em] uppercase" style={{ color: ACCENT }}>
                  {s.n} — {s.title}
                </div>
                <div className="text-[15px] font-semibold mt-3 leading-snug">{s.statement}</div>

                {s.quotes && (
                  <div className="mt-4 border-l-2 border-black/[0.1] pl-3 space-y-1.5">
                    {s.quotes.map((q) => (
                      <div key={q} className={`${serif.className} text-[14px] text-black/50 leading-relaxed`}>
                        &quot;{q}&quot;
                      </div>
                    ))}
                  </div>
                )}

                {s.pill && (
                  <div className="mt-4 inline-block mono text-[12px] px-3 py-1.5 rounded-lg" style={{ background: "#EEF1FB", color: "#5B6FCB" }}>
                    {s.pill}
                  </div>
                )}

                <div className="text-[13px] font-semibold mt-4 leading-snug">{s.closing}</div>
              </motion.div>
            ))}
          </div>

          <div className="py-5 text-center text-[11px] tracking-[0.14em] uppercase font-semibold text-black/40 border-t border-black/[0.06]">
            No software to learn · No subscription · $10/hour
          </div>
        </motion.section>

        <motion.div {...revealProps} className="mt-4 md:mt-5 rounded-[22px] bg-[#141414] py-6 text-center">
          <div className="text-white text-[16px] md:text-[20px] tracking-[-0.02em] font-semibold">
            You buy the result. <span style={{ color: ACCENT }}>Not the software.</span>
          </div>
        </motion.div>

        {/* WHAT WE DO */}
        <motion.section id="services" {...revealProps} className={`scroll-mt-28 ${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06]">
            <h2 className="text-[24px] md:text-[30px] leading-[1.1] tracking-[-0.02em] font-semibold">What do you need off your plate?</h2>
            <p className="text-[13px] leading-relaxed text-black/50 mt-3 max-w-[560px]">
              Give us the boring, repetitive, research-heavy work your team doesn&apos;t want to spend hours doing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: easeOut }}
                whileHover={{ y: -4 }}
                className={`px-6 py-7 group hover:bg-[#FAFAF9] transition-colors ${i % 3 !== 2 ? "md:border-r" : ""} ${
                  i < 3 ? "border-b" : ""
                } border-black/[0.06]`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-[10px] tracking-[0.12em] text-black/30 font-semibold">{s.n}</div>
                  <span className="w-7 h-7 rounded-full border border-black/[0.08] grid place-items-center text-[11px] group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    →
                  </span>
                </div>
                <div className="text-[14px] font-semibold mt-3">{s.title}</div>
                <div className="text-[12px] text-black/45 mt-1">{s.desc}</div>
                <ul className="mt-4 space-y-1.5 text-[12.5px] leading-relaxed text-black/55">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-black/25">·</span> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PORTFOLIO */}
        <motion.section id="work" {...revealProps} className={`scroll-mt-28 ${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06] flex items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-black/40">Our work — Things we&apos;ve actually done</div>
              <h2 className="text-[24px] md:text-[30px] leading-[1.1] tracking-[-0.02em] font-semibold mt-2">
                Real work. Real deliverables.
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <div className="text-right">
                <div className="text-[10px] tracking-[0.1em] uppercase text-black/40">All Projects</div>
                <div className="text-[20px] font-semibold leading-none">04</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#141414] text-white grid place-items-center text-[11px]">→</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {portfolio.map((p, i) => (
              <motion.div
                key={p.n}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: easeOut }}
                whileHover={{ y: -4 }}
                className={`px-6 lg:px-8 py-7 ${i % 2 === 0 ? "lg:border-r" : ""} ${i < 2 ? "border-b" : ""} border-black/[0.06]`}
              >
                <div className="flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.06em] uppercase text-black/40">
                  <span className="bg-[#141414] text-white rounded-full px-2.5 py-1">Project {p.n}</span>
                  <span className="hidden sm:inline truncate text-black/35">{p.workflow}</span>
                </div>

                <h3 className="text-[16px] font-semibold tracking-tight mt-4 leading-tight">{p.title}</h3>

                <div className="mt-4 text-[10.5px] font-semibold tracking-[0.08em] uppercase text-black/40">Client request</div>
                <div className="text-[13px] leading-relaxed text-black/60 mt-1">&quot;{p.request}&quot;</div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="bg-[#F5F4F1] rounded-xl p-3">
                    <div className="text-[10px] uppercase text-black/40">Time</div>
                    <div className="text-[13px] font-semibold mt-1">{p.time}</div>
                  </div>
                  <div className="bg-[#F5F4F1] rounded-xl p-3">
                    <div className="text-[10px] uppercase text-black/40">Cost</div>
                    <div className="text-[13px] font-semibold mt-1" style={{ color: ACCENT }}>{p.cost}</div>
                  </div>
                  <div className="col-span-2 bg-[#F5F4F1] rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase text-black/40">Delivered</div>
                      <div className="text-[12px] font-semibold mt-1">{p.delivered}</div>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-white border border-black/[0.08] grid place-items-center text-[11px]">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* HOW IT WORKS */}
        <motion.section id="how" {...revealProps} className={`scroll-mt-28 ${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06] text-center">
            <h2 className="text-[22px] md:text-[28px] leading-[1.1] tracking-[-0.02em] font-semibold">
              You have the task. We have the workers.
            </h2>
            <p className="text-[12.5px] text-black/45 mt-3">Five steps. No mystery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5">
            {[
              { n: "01", t: "Tell us", d: "Describe what you need.", note: "“Find 500 companies matching these criteria.”" },
              { n: "02", t: "Get an estimate", d: "We ask questions and estimate the time/cost." },
              { n: "03", t: "Approve", d: "Authorize the maximum budget." },
              { n: "04", t: "We work", d: "Your AI freelancer gets started." },
              { n: "05", t: "Get it done", d: "Receive the finished work and pay only for actual time." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                className={`px-6 py-8 relative ${i < 4 ? "md:border-r" : ""} border-black/[0.06] ${i > 0 ? "border-t md:border-t-0" : ""}`}
              >
                <div className="text-[11px] font-semibold tracking-[0.08em]" style={{ color: ACCENT }}>{s.n}</div>
                <h3 className="text-[13px] font-semibold mt-2">{s.t}</h3>
                <p className="text-[12.5px] text-black/55 mt-2 leading-relaxed">{s.d}</p>
                {s.note && <p className="text-[11.5px] text-black/40 mt-2">{s.note}</p>}
                {i < 4 && (
                  <div className="hidden md:grid absolute top-1/2 -right-3.5 w-7 h-7 -translate-y-1/2 bg-white border border-black/[0.08] rounded-full place-items-center text-[11px] z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="py-5 text-center text-[11px] tracking-[0.1em] uppercase font-semibold border-t border-black/[0.06] text-black/50">
            That&apos;s it.
          </div>
        </motion.section>

        {/* YOU'RE ALWAYS IN CONTROL */}
        <motion.section {...revealProps} className={`${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.06]">
            <h2 className="text-[24px] md:text-[30px] leading-[1.1] tracking-[-0.02em] font-semibold">You&apos;re always in control.</h2>
            <p className="text-[13px] leading-relaxed text-black/50 mt-3 max-w-[640px]">
              We don&apos;t ask you to blindly pay for an AI and hope it works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-black/[0.06]">
              <div className="text-[11px] font-semibold tracking-[0.06em]" style={{ color: ACCENT }}>01 — SEE THE ESTIMATE</div>
              <p className="text-[12.5px] leading-relaxed text-black/60 mt-3">Before work starts, we&apos;ll ask the questions needed to understand your task.</p>
              <div className="mt-4 rounded-xl bg-[#F5F4F1] p-4 text-[12px] leading-relaxed">
                <div><span className="text-black/45 uppercase text-[10px]">Estimated:</span> <span className="font-semibold">4–6 hours</span></div>
                <div><span className="text-black/45 uppercase text-[10px]">Rate:</span> <span className="font-semibold">$10/hour</span></div>
                <div><span className="text-black/45 uppercase text-[10px]">Maximum:</span> <span className="font-semibold">$60</span></div>
              </div>
            </div>

            <div className="p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-black/[0.06]">
              <div className="text-[11px] font-semibold tracking-[0.06em]" style={{ color: ACCENT }}>02 — AUTHORIZE THE BUDGET</div>
              <p className="text-[12.5px] leading-relaxed text-black/60 mt-3">You approve the maximum amount before your AI freelancer starts.</p>
              <div className="mt-4 rounded-xl bg-[#141414] text-white text-[12px] leading-relaxed p-4 text-center font-semibold">
                You will only be charged for actual work performed.
              </div>
            </div>

            <div className="p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-black/[0.06]">
              <div className="text-[11px] font-semibold tracking-[0.06em]" style={{ color: ACCENT }}>03 — WATCH THE WORK</div>
              <p className="text-[12.5px] leading-relaxed text-black/60 mt-3">Your task dashboard shows:</p>
              <div className="mt-4 rounded-xl p-4 bg-[#F5F4F1]">
                <div className="text-[10.5px] tracking-[0.06em] uppercase font-semibold flex items-center gap-2">
                  Working <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" />
                </div>
                <div className="text-[12.5px] mt-2"><span className="text-black/45">Progress:</span> <span className="font-semibold">1,247 / 2,000</span></div>
                <div className="text-[12.5px] mt-1"><span className="text-black/45">Current cost:</span> <span className="font-semibold">$26.83</span></div>
                <div className="text-[12.5px] mt-1"><span className="text-black/45">Budget:</span> <span className="font-semibold">$60</span></div>
                <div className="text-[10.5px] text-black/40 mt-3">No mystery bill at the end.</div>
              </div>
            </div>

            <div className="p-6 lg:p-7">
              <div className="text-[11px] font-semibold tracking-[0.06em]" style={{ color: ACCENT }}>04 — GET THE RESULT</div>
              <p className="text-[12.5px] leading-relaxed text-black/60 mt-3">When the task is complete:</p>
              <div className="mt-4 rounded-xl bg-[#F5F4F1] p-4 text-[12px]">
                <div><span className="text-black/45 uppercase text-[10px]">Time:</span> <span className="font-semibold">4h 18m</span></div>
                <div className="mt-1"><span className="text-black/45 uppercase text-[10px]">Final cost:</span> <span className="font-semibold" style={{ color: ACCENT }}>$43.00</span></div>
                <div className="text-[12px] text-black/55 mt-3 leading-relaxed">You only pay for what was actually used.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-black/[0.06]">
            <div className="col-span-12 lg:col-span-4 bg-[#141414] text-white p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="text-[18px] leading-[1.1] tracking-[-0.02em] font-semibold" style={{ color: ACCENT }}>Not what you expected?</h3>
              <p className="text-[12.5px] leading-relaxed text-white/65 mt-3">Tell us what went wrong.</p>
            </div>
            <div className="col-span-12 lg:col-span-8 p-6 lg:p-8" style={{ background: ACCENT }}>
              <p className="text-[13.5px] leading-relaxed font-medium text-white">We&apos;ll review the original requirements and delivered work.</p>
              <p className="text-[13.5px] leading-relaxed font-semibold mt-2 text-white">If we didn&apos;t complete the agreed task correctly, we&apos;ll make it right — either by redoing the affected work at no additional charge or refunding the applicable amount.</p>
              <p className="text-[11px] leading-relaxed text-white/80 mt-4">Changes to requirements, incomplete instructions, or work completed according to the agreed scope aren&apos;t eligible for refunds.</p>
              <Link href="/work-guarantee" className="inline-block mt-4 text-[11px] tracking-[0.06em] uppercase font-semibold border border-white/40 rounded-full px-4 py-2 text-white hover:bg-white hover:text-[#141414] transition-colors">
                Read guarantee details →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* WORKER TYPES */}
        <motion.section {...revealProps} className={`${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="px-6 lg:px-8 py-6 border-b border-black/[0.06] flex items-center justify-between gap-4">
            <h2 className="text-[18px] md:text-[22px] tracking-[-0.02em] font-semibold">Hire the work. Not the tool.</h2>
            <span className="hidden md:inline text-[11px] tracking-[0.06em] uppercase text-black/40">Powered by autonomous AI workers</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {workers.map((w, i) => (
              <motion.div
                key={w.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: easeOut }}
                className={`px-6 py-5 ${i % 3 !== 2 ? "md:border-r" : ""} ${i < 3 ? "border-b md:border-b-0" : ""} border-black/[0.06]`}
              >
                <div className="text-[13px] font-semibold">{w.name}</div>
                <div className="text-[12px] leading-relaxed text-black/50 mt-1">{w.meta}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PRICING */}
        <motion.section id="pricing" {...revealProps} className="scroll-mt-28 rounded-[22px] mt-4 md:mt-5 bg-[#141414] text-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 px-6 lg:px-10 py-9 lg:py-12 items-center">
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-white/40">Pricing — Simple by design</div>
              <div className="text-[44px] md:text-[56px] leading-none tracking-[-0.03em] font-semibold mt-3">
                $10 <span className="text-white/40 text-[22px] align-middle">/</span> <span style={{ color: ACCENT }}>hour.</span>
              </div>
              <div className="text-[12.5px] leading-relaxed text-white/55 mt-4">
                No subscription. No minimum commitment. No software to learn.
              </div>
              <div className="mt-6 text-[11px] tracking-[0.06em] uppercase font-semibold text-white/60">Pay for the work. Not the software.</div>
              <Link
                href="/hire"
                className="mt-6 inline-flex bg-white hover:bg-white/90 text-[#141414] text-[13px] font-semibold px-6 py-3.5 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all"
              >
                Give us a task →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { l: "500 companies researched", t: "6h 42m", c: "$67" },
                { l: "1,000 leads enriched", t: "5h 30m", c: "$55" },
                { l: "10,000 products processed", t: "7h 50m", c: "$78" },
              ].map((r, i) => (
                <motion.div
                  key={r.l}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl bg-white/[0.06] border border-white/10 px-5 py-4"
                >
                  <div className="text-[11.5px] text-white/50 leading-tight">{r.l}</div>
                  <div className="text-[13px] font-semibold mt-2">
                    {r.t} <span className="text-white/30">→</span> <span style={{ color: ACCENT }}>{r.c}</span>
                  </div>
                </motion.div>
              ))}
              <div className="rounded-xl bg-white/[0.03] border border-dashed border-white/15 px-5 py-4 flex items-center justify-center text-center">
                <div className="text-[11.5px] text-white/45 leading-snug">Any size job — same simple rate.</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TRANSPARENCY */}
        <motion.section {...revealProps} className={`${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="px-6 lg:px-8 py-7 border-b border-black/[0.06]">
            <h2 className="text-[20px] md:text-[24px] leading-[1.1] tracking-[-0.02em] font-semibold">Know what you&apos;re paying for.</h2>
            <p className="text-[12px] text-black/45 mt-2">Every task has a clear scope, delivery and cost.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {[
              { label: "Task", desc: "What you asked us to do." },
              { label: "Work", desc: "What was executed." },
              { label: "Time", desc: "How long it took." },
              { label: "Delivery", desc: "What you received." },
              { label: "Cost", desc: "What you paid." },
            ].map((c, i) => (
              <div key={c.label} className={`px-6 py-6 ${i < 4 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r md:border-r-0" : ""} ${i < 3 ? "border-b md:border-b-0" : ""} border-black/[0.06]`}>
                <div className="text-[12.5px] tracking-[0.02em] font-semibold">{c.label}</div>
                <div className="text-[12px] leading-relaxed text-black/45 mt-2">{c.desc}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SEO HUB */}
        <motion.section {...revealProps} className={`${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="px-6 lg:px-8 py-7 border-b border-black/[0.06]">
            <h2 className="text-[18px] md:text-[22px] tracking-[-0.02em] font-semibold">Hire an AI freelancer by task</h2>
            <p className="text-[12px] text-black/45 mt-2">Choose the work you want to offload — each page explains the tasks, workflow, deliverables and cost.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/ai-freelancer", t: "Hire an AI Freelancer →", d: "General — research, data, leads, documents from $10/hr" },
              { href: "/ai-data-entry", t: "AI Data Entry Freelancer →", d: "PDF → Excel, spreadsheets, CRM entry" },
              { href: "/ai-research", t: "AI Research Freelancer →", d: "Market, company and competitor research" },
              { href: "/ai-lead-generation", t: "AI Lead Generation Freelancer →", d: "Prospect lists, ICP filtering, verification" },
              { href: "/ai-data-cleaning", t: "AI Data Cleaning Freelancer →", d: "Deduplication, normalization, hygiene" },
              { href: "/ai-crm-cleanup", t: "AI CRM Cleanup Freelancer →", d: "De-dupe contacts, normalize fields" },
              { href: "/ai-invoice-processing", t: "AI Invoice Processing Freelancer →", d: "Extract line items, reconcile totals" },
              { href: "/ai-ecommerce-operations", t: "AI E-commerce Operations Freelancer →", d: "Catalog cleanup, product data entry" },
              { href: "/ai-web-research", t: "AI Web Research Freelancer →", d: "Company & web research with citations" },
              { href: "/ai-document-processing", t: "AI Document Processing Freelancer →", d: "PDF extraction, forms, records" },
              { href: "/work", t: "Sample Workflows →", d: "CRM cleanup, invoices, catalog — see task, input, output, time & cost" },
            ].map((l, i, arr) => (
              <Link
                key={l.href}
                href={l.href}
                className={`p-5 hover:bg-[#FAFAF9] hover:-translate-y-0.5 transition-all border-black/[0.06] ${(i + 1) % 3 !== 0 ? "lg:border-r" : ""} ${
                  i % 2 === 0 ? "md:border-r lg:border-r-0" : ""
                } ${i < arr.length - (arr.length % 3 === 0 ? 3 : arr.length % 3) ? "border-b" : ""}`}
              >
                <div className="text-[12.5px] font-semibold">{l.t}</div>
                <div className="text-[12px] text-black/50 mt-1">{l.d}</div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section id="faq" {...revealProps} className={`scroll-mt-28 ${card} mt-4 md:mt-5 overflow-hidden`}>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 px-6 lg:px-8 py-7 border-b border-black/[0.06]">
            <h2 className="text-[26px] md:text-[30px] tracking-[-0.02em] font-semibold">FAQ</h2>
            <div>
              <div className="text-[12px] font-semibold">Most common questions</div>
              <div className="text-[11.5px] text-black/45">No worries, here you can find all the answers</div>
            </div>
          </div>
          <div className="divide-y divide-black/[0.06]">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-6 px-6 lg:px-8 py-4 text-left hover:bg-[#FAFAF9] transition-colors"
                  >
                    <span className="text-[13.5px] font-medium leading-snug">{f.q}</span>
                    <span
                      className="w-7 h-7 shrink-0 rounded-full grid place-items-center text-[14px] font-semibold text-white"
                      style={{ background: open ? INK : ACCENT }}
                    >
                      {open ? "×" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 lg:px-8 pb-5">
                          <div className="text-[13px] leading-relaxed text-black/60 bg-[#F5F4F1] rounded-xl p-4 max-w-[720px]">{f.a}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section id="cta" {...revealProps} className={`${card} mt-4 md:mt-5 text-center px-6 py-12 md:py-16`}>
          <h2 className="leading-[1.05] tracking-[-0.02em]">
            <span className="block text-[30px] md:text-[44px] font-semibold">What&apos;s the work</span>
            <span className={`${serif.className} block text-[30px] md:text-[44px]`}>you don&apos;t want to do?</span>
          </h2>
          <div className="text-[13px] text-black/55 mt-4">Send it to us.</div>
          <div className="text-[12px] tracking-[0.04em] leading-relaxed mt-5 text-black/60">
            <div>You explain it. We figure it out. <span className="font-semibold text-black">You get it done.</span></div>
          </div>
          <div className="text-[11px] tracking-[0.08em] uppercase font-semibold mt-5 text-black/40">$10 / hour</div>
          <Link
            href="/hire"
            className="mt-6 inline-flex bg-[#141414] hover:bg-black text-white text-[13px] font-semibold px-8 py-4 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all"
          >
            Give us your task →
          </Link>
          <div className="text-[11px] tracking-[0.06em] uppercase text-black/40 mt-4">
            $10/HR · SEE ESTIMATE FIRST · PAY FOR ACTUAL WORK ·{" "}
            <Link href="/work-guarantee" className="underline hover:text-black">
              WORK GUARANTEE
            </Link>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer {...revealProps} className="mt-4 md:mt-5 mb-6 rounded-[32px] bg-[#0E0F10] overflow-hidden relative">
          {/* SUBSCRIBE */}
          <div className="relative px-6 md:px-10 pt-10 md:pt-12 pb-6 md:pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div>
                <h3 className="text-white text-[26px] md:text-[32px] font-semibold tracking-[-0.02em]">
                  Get updates from Abstrak Labs
                </h3>
                <p className="text-white/45 text-[13px] leading-relaxed mt-3 max-w-[380px]">
                  New worker types, pricing changes and product updates — no spam, unsubscribe anytime.
                </p>
                <FooterSubscribeForm />
              </div>
              <FooterOrbit />
            </div>
          </div>

          {/* LINKS */}
          <div className="relative border-t border-white/[0.08] px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/talo-by-abstrak-lockup.png" alt="Talo by Abstrak Labs" width={613} height={464} className="h-16 w-auto" />
              <div className="text-white/35 text-[11px] mt-3">© 2026 Talo. All rights reserved.</div>
            </div>

            <div>
              <div className="text-white text-[12px] font-semibold uppercase tracking-[0.04em] mb-3">Useful links</div>
              <div className="flex flex-col gap-2 text-[12.5px] text-white/50">
                <Link href="/work-guarantee" className="hover:text-white transition-colors w-fit">Work Guarantee</Link>
                <Link href="/privacy" className="hover:text-white transition-colors w-fit">Privacy Policy</Link>
                <a href="#" className="hover:text-white transition-colors w-fit">Terms of Service</a>
              </div>
            </div>

            <div>
              <div className="text-white text-[12px] font-semibold uppercase tracking-[0.04em] mb-3">Contact</div>
              <div className="flex flex-col gap-2 text-[12.5px] text-white/50">
                <Link href="/work" className="hover:text-white transition-colors w-fit">Sample work</Link>
                <Link href="/hire" className="hover:text-white transition-colors w-fit">Hire a worker</Link>
                <a href="mailto:hello@abstraklabs.com" className="hover:text-white transition-colors w-fit">hello@abstraklabs.com</a>
              </div>
            </div>
          </div>

          {/* WORDMARK BLEED */}
          <div className="relative select-none pointer-events-none text-center leading-none font-semibold tracking-[-0.03em] text-[19vw] md:text-[13vw] lg:text-[168px] translate-y-[30%]">
            <span className="text-white/[0.05]">ABSTRAK </span>
            <span style={{ color: ACCENT, opacity: 0.1 }}>LABS</span>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
