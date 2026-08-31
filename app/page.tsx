"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  return (
    <main className="min-h-screen bg-[#F2F2F0] text-black selection:bg-[#FF4B00] selection:text-white">
      {/* Blueprint grid — inspo style: light gray 80px + orange dots */}
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.38]" />
      <div className="fixed inset-0 bg-grid-dots pointer-events-none opacity-[0.18]" style={{ backgroundPosition: "0 0" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#F5F5F3]">
        {/* HEADER — slim sticky */}
        <header className="sticky top-0 z-50 bg-[#F5F5F3]/92 backdrop-blur-[10px] border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 h-[56px] flex items-center justify-between gap-6">
            <Link href="/" className="shrink-0 leading-none">
              <div className="pixel-head text-[13px] tracking-[-0.02em] leading-none">ABSTRAK LABS</div>
              <div className="mono text-[9px] tracking-[0.18em] text-black/55 -mt-0.5">DIGITAL LABOR</div>
            </Link>

            <nav className="hidden lg:flex items-center gap-5 mono text-[10.5px] tracking-[0.14em] uppercase text-black/55">
              <Link href="/ai-freelancer" className="hover:text-black transition-colors">AI Freelancer</Link>
              <a href="#difference" className="hover:text-black transition-colors">Difference</a>
              <a href="#work" className="hover:text-black transition-colors">Work</a>
              <a href="#how" className="hover:text-black transition-colors">How it works</a>
              <a href="#services" className="hover:text-black transition-colors">What we do</a>
              <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
            </nav>

            <div className="flex items-center gap-3">
              <span className="hidden md:inline-flex items-center gap-1.5 mono text-[10px] tracking-[0.14em] uppercase text-black/60">
                <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" /> Agents online
              </span>
              <a
                href="/hire"
                className="bg-black text-white mono text-[11px] tracking-[0.12em] uppercase font-bold px-4 py-2.5 hover:bg-[#111] transition-colors"
              >
                Hire a worker — $10/hr <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </header>

        {/* Top BIO tags like inspo — subtle blueprint header */}
        <div className="hidden lg:grid grid-cols-4 border-b border-black/[0.08] mono text-[9px] tracking-[0.14em] uppercase text-black/30">
          <div className="px-6 py-2 border-r border-black/[0.08] flex justify-between">
            <span>BIO</span> <span className="text-[#FF4B00]">+</span>
          </div>
          <div className="px-6 py-2 border-r border-black/[0.08] flex justify-between">
            <span>BIO</span> <span className="text-[#FF4B00]">+</span>
          </div>
          <div className="px-6 py-2 border-r border-black/[0.08] flex justify-between">
            <span>BIO</span> <span className="text-[#FF4B00]">+</span>
          </div>
          <div className="px-6 py-2 flex justify-between">
            <span>BIO</span> <span className="text-[#FF4B00]">+</span>
          </div>
        </div>

        {/* HERO — 60/40 */}
        <section className="border-b border-black/[0.08] bg-[#F5F5F3] relative">
          <div className="absolute top-3 left-3 w-[6px] h-[6px] bg-[#FF4B00] hidden lg:block" />
          <div className="absolute top-3 right-3 w-[6px] h-[6px] bg-[#FF4B00] hidden lg:block" />
          <div className="grid grid-cols-12">
            {/* LEFT 60% */}
            <div className="col-span-12 lg:col-span-7 px-6 lg:px-9 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r border-black/[0.08]">
              <div className="inline-flex items-center gap-3 mono text-[10px] tracking-[0.16em] uppercase text-black/50 border border-black/[0.08] bg-white px-3 py-1.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#FF4B00] rounded-full" /> Digital labor on demand
                </span>
                <span className="hidden sm:inline text-black/20">|</span>
                <span className="hidden sm:inline">$10 / hour</span>
                <span className="hidden sm:inline text-black/20">|</span>
                <span className="hidden sm:inline">No subscription</span>
              </div>

              <h1 className="display-brutalist text-[44px] sm:text-[56px] lg:text-[68px] leading-[0.85] tracking-[-0.045em] mt-6">
                Give us the <span className="text-[#FF4B00]">work.</span>
                <br />
                We&apos;ll get it <span className="text-[#FF4B00]">done.</span>
              </h1>

              <p className="text-[14px] leading-[1.6] text-black/65 mt-5 max-w-[480px]">
                Research, data, lead generation, browser work, document processing and other repetitive digital tasks — handled from start to
                finish.
              </p>

              <div className="mt-5 mono text-[11.5px] leading-relaxed">
                <div className="text-black/60">Tell us what you need in plain English.</div>
                <div className="font-bold tracking-[0.08em] uppercase text-[11px] mt-1">We figure out the workflow. You get the result.</div>
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href="/hire"
                  className="bg-[#FF4B00] hover:bg-[#E84500] text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3 transition-colors"
                >
                  Give us a task →
                </a>
                <a
                  href="#work"
                  className="bg-white border border-black/15 hover:border-black mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3 transition-colors"
                >
                  View our work
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 mono text-[10px] tracking-[0.14em] uppercase text-black/45">
                <span className="border border-black/[0.09] bg-white px-2.5 py-1.5">Research</span>
                <span className="border border-black/[0.09] bg-white px-2.5 py-1.5">Data</span>
                <span className="border border-black/[0.09] bg-white px-2.5 py-1.5">Lead Generation</span>
                <span className="border border-black/[0.09] bg-white px-2.5 py-1.5">Browser Work</span>
                <span className="border border-black/[0.09] bg-white px-2.5 py-1.5">Documents</span>
              </div>
            </div>

            {/* RIGHT 40% — LIVE DELIVERY */}
            <div className="col-span-12 lg:col-span-5 bg-white">
              <div className="h-full border-t lg:border-t-0 border-black/[0.08] flex flex-col">
                {/* top bar */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-black/[0.08] mono text-[10px] tracking-[0.16em] uppercase">
                  <span className="font-bold">Live delivery</span>
                  <span className="flex items-center gap-1.5 text-[#16A34A]">
                    <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" /> Worker online
                  </span>
                </div>

                <div className="px-6 py-5 flex-1">
                  <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40 font-bold">Customer request</div>
                  <div className="mt-2 text-[13px] leading-[1.5] font-medium border border-black/[0.08] bg-[#F5F5F3] p-3.5">
                    “Find 500 US SaaS companies, their founders, funding and LinkedIn.”
                  </div>

                  <div className="mt-5 mono text-[10px] tracking-[0.16em] uppercase font-bold text-black/40">Worker activity</div>
                  <div className="mt-2 border border-black/[0.08]">
                    {[
                      { n: "01", t: "Searching companies", status: "done" },
                      { n: "02", t: "Verifying websites", status: "done" },
                      { n: "03", t: "Matching founders", status: "active" },
                      { n: "04", t: "Enriching data", status: "queued" },
                      { n: "05", t: "Validating results", status: "queued" },
                    ].map((s) => (
                      <div key={s.n} className="flex items-center gap-3 px-3.5 py-2.5 border-b last:border-b-0 border-black/[0.06] mono text-[11px]">
                        <span className="text-[10px] text-black/30 w-5">{s.n}</span>
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.status === "done" ? "bg-black" : s.status === "active" ? "bg-[#FF4B00] animate-pulse" : "bg-black/15"}`} />
                        <span className={s.status === "queued" ? "text-black/40" : s.status === "active" ? "font-bold" : "text-black/70"}>{s.t}</span>
                        <span className="ml-auto text-[10px] tracking-wide uppercase">
                          {s.status === "done" ? <span className="text-black/40">✓ Done</span> : s.status === "active" ? <span className="text-[#FF4B00]">● Working</span> : <span className="text-black/25">Queued</span>}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border border-black/[0.08] p-4">
                    <div className="mono text-[10px] tracking-[0.16em] uppercase font-bold text-[#FF4B00]">Delivered</div>
                    <div className="text-[18px] font-bold tracking-tight mt-1">500 qualified companies</div>

                    <div className="mt-4 grid grid-cols-3 gap-0 border border-black/[0.08] mono text-center">
                      <div className="py-3 border-r border-black/[0.08] bg-[#F5F5F3]">
                        <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Time</div>
                        <div className="text-[13px] font-bold mt-1">6h 42m</div>
                      </div>
                      <div className="py-3 border-r border-black/[0.08] bg-white">
                        <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Cost</div>
                        <div className="text-[13px] font-bold mt-1 text-[#FF4B00]">$67</div>
                      </div>
                      <div className="py-3 bg-white">
                        <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Output</div>
                        <div className="text-[11px] font-bold leading-tight mt-1">Spreadsheet + verified sources</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto bg-[#FF4B00] text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3 flex items-center justify-between">
                  <span>Task complete</span> <span>→ $67</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY VALUE STATEMENT — blueprint style */}
        <section className="border-b border-black/[0.08] bg-white relative">
          <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="px-6 lg:px-10 py-8 text-center">
            <h2 className="pixel-head text-[22px] md:text-[30px] leading-[0.9] tracking-[-0.02em]">
              You don&apos;t need another tool.
              <br />
              You need the <span className="text-[#FF4B00]">work done.</span>
            </h2>
            <div className="mono text-[11px] leading-relaxed text-black/55 mt-4 max-w-[420px] mx-auto">
              <div>No prompts.</div>
              <div>No workflows to build.</div>
              <div>No freelancers to manage.</div>
              <div className="font-bold text-black mt-2">Just give us the task.</div>
            </div>
          </div>
        </section>

        {/* COMPARISON — compact sophisticated */}
        <section id="difference" className="border-b border-black/[0.08] bg-[#F5F5F3]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 px-6 lg:px-9 py-7 bg-white border-b md:border-b-0 md:border-r border-black/[0.08]">
              <div className="mono text-[10px] tracking-[0.16em] uppercase font-bold text-black/40">Other AI tools</div>
              <div className="mono text-[10px] tracking-[0.14em] uppercase font-bold mt-5 text-black/50">You have to:</div>
              <ul className="mt-2 mono text-[12.5px] leading-relaxed space-y-1.5">
                <li>Prompt</li>
                <li>Configure</li>
                <li>Iterate</li>
                <li>Debug</li>
                <li>Manage</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 px-6 lg:px-9 py-7 bg-black text-white">
              <div className="mono text-[10px] tracking-[0.16em] uppercase font-bold text-white/40">Abstrak Labs</div>
              <div className="mt-5 mono text-[10px] tracking-[0.14em] uppercase font-bold text-white/50">You:</div>
              <div className="mono text-[13px] font-medium mt-1">Describe the task.</div>
              <div className="mt-5 mono text-[10px] tracking-[0.14em] uppercase font-bold text-[#FF4B00]">We:</div>
              <ul className="mt-1 mono text-[12.5px] leading-relaxed text-white/80 space-y-1.5">
                <li>Figure out the workflow</li>
                <li>Run the workers</li>
                <li>Verify the output</li>
                <li>Deliver the result</li>
              </ul>
            </div>
          </div>
          <div className="bg-black border-t border-white/10 py-5 text-center">
            <div className="display-brutalist text-white text-[16px] md:text-[20px] tracking-[-0.02em] leading-none">
              You buy the result. <span className="text-[#FF4B00]">Not the software.</span>
            </div>
          </div>
        </section>

        {/* WHAT WE DO — 3×2 — pixel header like MEDIA PRESENCE */}
        <section id="services" className="border-b border-black/[0.08] bg-white relative">
          <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.08]">
            <h2 className="pixel-head text-[22px] md:text-[28px] leading-[0.9] tracking-[-0.02em]">WHAT DO YOU NEED OFF YOUR PLATE?</h2>
            <p className="mono text-[11.5px] leading-relaxed text-black/55 mt-3 max-w-[560px]">
              Give us the boring, repetitive, research-heavy work your team doesn&apos;t want to spend hours doing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.08]">
            {services.map((s) => (
              <div key={s.n} className="bg-white px-6 py-7 group hover:bg-[#F5F5F3] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="mono text-[10px] tracking-[0.16em] text-black/30">{s.n}</div>
                  <span className="w-6 h-6 border border-black/[0.08] grid place-items-center mono text-[10px] group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    →
                  </span>
                </div>
                <div className="mono text-[11px] tracking-[0.16em] uppercase font-bold mt-3">{s.title}</div>
                <div className="mono text-[11px] text-black/50 mt-1">{s.desc}</div>
                <ul className="mt-4 space-y-1 mono text-[11.5px] leading-relaxed text-black/60">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-black/20">·</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO — inspo: pixel head, All Projects badge, < > arrows, blueprint corners */}
        <section id="work" className="border-b border-black/[0.08] bg-[#F5F5F3] relative">
          <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="hidden lg:flex absolute left-0 top-[220px] -translate-x-1/2 z-20 border border-black/[0.08] bg-white">
            <button className="w-7 h-7 grid place-items-center mono text-[12px] hover:bg-black hover:text-white transition-colors">‹</button>
            <button className="w-7 h-7 grid place-items-center mono text-[12px] border-l border-black/[0.08] hover:bg-black hover:text-white transition-colors">›</button>
          </div>
          <div className="px-6 lg:px-8 py-8 bg-white border-b border-black/[0.08] flex items-end justify-between gap-6">
            <div>
              <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">• Our work — Things we&apos;ve actually done</div>
              <h2 className="pixel-head text-[22px] md:text-[28px] leading-[0.9] tracking-[-0.02em] mt-2">
                REAL WORK.
                <br />
                REAL DELIVERABLES.
              </h2>
              <p className="mono text-[11px] text-black/50 mt-2">A few examples of what we&apos;ve already handled.</p>
            </div>
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <div className="text-right mono">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">All Projects</div>
                <div className="text-[20px] font-bold leading-none">04</div>
              </div>
              <div className="w-7 h-7 bg-black text-white grid place-items-center text-[10px]">→</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/[0.08]">
            {portfolio.map((p) => (
              <div key={p.n} className="bg-white px-6 lg:px-7 py-7">
                <div className="flex items-center gap-2 mono text-[10px] tracking-[0.14em] uppercase text-black/40">
                  <span className="bg-black text-white px-2 py-1">Project {p.n}</span>
                  <span className="hidden sm:inline truncate">{p.workflow}</span>
                </div>

                <h3 className="text-[15px] font-bold tracking-tight uppercase mt-4 leading-tight">{p.title}</h3>

                <div className="mt-4 mono text-[10px] tracking-[0.16em] uppercase font-bold text-black/40">Client request</div>
                <div className="mono text-[11.5px] leading-relaxed text-black/65 mt-1">“{p.request}”</div>

                <div className="mt-4 mono text-[10px] tracking-[0.16em] uppercase font-bold text-black/40">Workflow</div>
                <div className="mono text-[10px] tracking-[0.14em] font-bold mt-1">{p.workflow}</div>

                <div className="mt-5 grid grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08] mono text-[11px]">
                  <div className="bg-white p-3">
                    <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Time</div>
                    <div className="font-bold mt-1">{p.time}</div>
                  </div>
                  <div className="bg-white p-3 border-l border-black/[0.08]">
                    <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Cost</div>
                    <div className="font-bold mt-1 text-[#FF4B00]">{p.cost}</div>
                  </div>
                  <div className="bg-[#F5F5F3] p-3 border-t border-black/[0.08]">
                    <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Delivered</div>
                    <div className="font-bold text-[11px] leading-tight mt-1">{p.delivered}</div>
                  </div>
                  <div className="bg-white p-3 border-t border-l border-black/[0.08] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Output</div>
                      <div className="font-bold text-[10px] mt-1">Verified</div>
                    </div>
                    <span className="w-6 h-6 border border-black/[0.08] grid place-items-center text-[10px]">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS — 5 steps: Tell us → Estimate → Approve → We work → Get it done */}
        <section id="how" className="border-b border-black/[0.08] bg-white relative">
          <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.08] text-center">
            <h2 className="pixel-head text-[20px] md:text-[28px] leading-[0.9] tracking-[-0.02em]">
              YOU HAVE THE TASK.
              <br />
              WE HAVE THE WORKERS.
            </h2>
            <p className="mono text-[11px] text-black/50 mt-3">Five steps. No mystery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-black/[0.08]">
            <div className="bg-white px-6 py-7 relative">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">01</div>
              <h3 className="mono text-[12px] font-bold tracking-[0.08em] uppercase mt-2">Tell us</h3>
              <p className="mono text-[11.5px] text-black/60 mt-2 leading-relaxed">Describe what you need.</p>
              <p className="mono text-[11px] text-black/50 mt-2">“Find 500 companies matching these criteria.”</p>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-white border border-black/[0.08] grid place-items-center mono text-[10px] z-10">↓</div>
            </div>
            <div className="bg-white px-6 py-7 relative">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">02</div>
              <h3 className="mono text-[12px] font-bold tracking-[0.08em] uppercase mt-2">Get an estimate</h3>
              <p className="mono text-[11.5px] text-black/60 mt-2 leading-relaxed">We ask questions and estimate the time/cost.</p>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-white border border-black/[0.08] grid place-items-center mono text-[10px] z-10">↓</div>
            </div>
            <div className="bg-white px-6 py-7 relative">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">03</div>
              <h3 className="mono text-[12px] font-bold tracking-[0.08em] uppercase mt-2">Approve</h3>
              <p className="mono text-[11.5px] text-black/60 mt-2 leading-relaxed">Authorize the maximum budget.</p>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-white border border-black/[0.08] grid place-items-center mono text-[10px] z-10">↓</div>
            </div>
            <div className="bg-white px-6 py-7 relative">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">04</div>
              <h3 className="mono text-[12px] font-bold tracking-[0.08em] uppercase mt-2">We work</h3>
              <p className="mono text-[11.5px] text-black/60 mt-2 leading-relaxed">Your AI freelancer gets started.</p>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-white border border-black/[0.08] grid place-items-center mono text-[10px] z-10">↓</div>
            </div>
            <div className="bg-white px-6 py-7">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">05</div>
              <h3 className="mono text-[12px] font-bold tracking-[0.08em] uppercase mt-2">Get it done</h3>
              <p className="mono text-[11.5px] text-black/60 mt-2 leading-relaxed">Receive the finished work and pay only for actual time.</p>
            </div>
          </div>
          <div className="py-5 text-center mono text-[10px] tracking-[0.2em] uppercase font-bold border-t border-black/[0.08]">That&apos;s it.</div>
        </section>

        {/* YOU'RE ALWAYS IN CONTROL — payment + authorization + guarantee (product story, not legal) */}
        <section className="border-b border-black/[0.08] bg-[#F5F5F3] relative">
          <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.08] bg-white">
            <h2 className="pixel-head text-[22px] md:text-[30px] leading-[0.9] tracking-[-0.02em]">YOU&apos;RE ALWAYS IN CONTROL.</h2>
            <p className="mono text-[12px] leading-relaxed text-black/60 mt-3 max-w-[640px]">We don&apos;t ask you to blindly pay for an AI and hope it works.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08]">
            {/* 01 — SEE THE ESTIMATE */}
            <div className="bg-white p-6 lg:p-7">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">01 — SEE THE ESTIMATE</div>
              <p className="mono text-[12px] leading-relaxed text-black/70 mt-3">Before work starts, we&apos;ll ask the questions needed to understand your task.</p>
              <div className="mt-4 border border-black/[0.08] bg-[#F5F5F3] p-4 mono text-[11px] leading-relaxed">
                <div>
                  <span className="text-black/50 uppercase tracking-[0.14em] text-[10px]">Estimated:</span> <span className="font-bold">4–6 hours</span>
                </div>
                <div>
                  <span className="text-black/50 uppercase tracking-[0.14em] text-[10px]">Rate:</span> <span className="font-bold">$10/hour</span>
                </div>
                <div>
                  <span className="text-black/50 uppercase tracking-[0.14em] text-[10px]">Maximum:</span> <span className="font-bold">$60</span>
                </div>
              </div>
            </div>

            {/* 02 — AUTHORIZE */}
            <div className="bg-white p-6 lg:p-7">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">02 — AUTHORIZE THE BUDGET</div>
              <p className="mono text-[12px] leading-relaxed text-black/70 mt-3">You approve the maximum amount before your AI freelancer starts.</p>
              <div className="mt-4 bg-black text-white mono text-[11px] leading-relaxed p-4 text-center font-bold">You will only be charged for actual work performed.</div>
            </div>

            {/* 03 — WATCH THE WORK */}
            <div className="bg-white p-6 lg:p-7">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">03 — WATCH THE WORK</div>
              <p className="mono text-[12px] leading-relaxed text-black/70 mt-3">Your task dashboard shows:</p>
              <div className="mt-4 border border-black/[0.08] p-4 bg-[#F5F5F3]">
                <div className="mono text-[10px] tracking-[0.14em] uppercase font-bold flex items-center gap-2">
                  WORKING <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" />
                </div>
                <div className="mono text-[12px] mt-2">
                  <span className="text-black/50">Progress:</span> <span className="font-mono font-bold">1,247 / 2,000</span> <span className="text-black/40">completed</span>
                </div>
                <div className="mono text-[12px] mt-1">
                  <span className="text-black/50">Current cost:</span> <span className="font-bold">$26.83</span>
                </div>
                <div className="mono text-[12px] mt-1">
                  <span className="text-black/50">Budget:</span> <span className="font-bold">$60</span>
                </div>
                <div className="mono text-[10px] text-black/40 mt-3">No mystery bill at the end.</div>
              </div>
            </div>

            {/* 04 — GET THE RESULT */}
            <div className="bg-white p-6 lg:p-7">
              <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">04 — GET THE RESULT</div>
              <p className="mono text-[12px] leading-relaxed text-black/70 mt-3">When the task is complete:</p>
              <div className="mt-4 border border-black/[0.08] bg-white p-4 mono text-[11px]">
                <div>
                  <span className="text-black/50 uppercase tracking-[0.14em] text-[10px]">Time:</span> <span className="font-bold">4h 18m</span>
                </div>
                <div className="mt-1">
                  <span className="text-black/50 uppercase tracking-[0.14em] text-[10px]">Final cost:</span> <span className="font-bold text-[#FF4B00]">$43.00</span>
                </div>
                <div className="mono text-[11px] text-black/60 mt-3 leading-relaxed">You only pay for what was actually used.</div>
              </div>
            </div>
          </div>

          {/* Orange/black callout — NOT WHAT YOU EXPECTED? */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="col-span-12 lg:col-span-4 bg-black text-white p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="pixel-head text-[18px] leading-[0.9] tracking-[-0.02em] text-[#FF4B00]">NOT WHAT YOU EXPECTED?</h3>
              <p className="mono text-[12px] leading-relaxed text-white/70 mt-3">Tell us what went wrong.</p>
            </div>
            <div className="col-span-12 lg:col-span-8 bg-[#FF4B00] text-white p-6 lg:p-8">
              <p className="mono text-[13px] leading-relaxed font-medium">We&apos;ll review the original requirements and delivered work.</p>
              <p className="mono text-[13px] leading-relaxed font-bold mt-2">If we didn&apos;t complete the agreed task correctly, we&apos;ll make it right — either by redoing the affected work at no additional charge or refunding the applicable amount.</p>
              <p className="mono text-[10px] leading-relaxed text-white/80 mt-4">Changes to requirements, incomplete instructions, or work completed according to the agreed scope aren&apos;t eligible for refunds.</p>
              <Link href="/work-guarantee" className="inline-block mt-4 mono text-[10px] tracking-[0.14em] uppercase font-bold border border-white/30 px-3 py-1.5 hover:bg-white hover:text-[#FF4B00] transition-colors">
                Read guarantee details →
              </Link>
            </div>
          </div>
        </section>

        {/* WORKER TYPES — pixel like TESTIMONIALS inspo */}
        <section className="border-b border-black/[0.08] bg-[#F5F5F3] relative">
          <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="px-6 lg:px-8 py-6 bg-white border-b border-black/[0.08] flex items-center justify-between gap-4">
            <h2 className="pixel-head text-[18px] md:text-[22px] tracking-[-0.02em]">HIRE THE WORK. NOT THE TOOL.</h2>
            <span className="hidden md:inline mono text-[10px] tracking-[0.14em] uppercase text-black/40">• Powered by autonomous AI workers</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.08]">
            {workers.map((w) => (
              <div key={w.name} className="bg-white px-6 py-5">
                <div className="mono text-[11px] tracking-[0.14em] uppercase font-bold">{w.name}</div>
                <div className="mono text-[11px] leading-relaxed text-black/55 mt-1">{w.meta}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING — black strong */}
        <section id="pricing" className="border-b border-black/[0.08] bg-black text-white">
          <div className="px-6 lg:px-8 py-9 lg:py-10">
            <div className="mono text-[10px] tracking-[0.16em] uppercase text-white/40">Pricing — Simple by design</div>
            <div className="display-brutalist text-[44px] md:text-[56px] leading-none tracking-[-0.04em] mt-3">
              $10 <span className="text-white/40 text-[22px] align-middle">/</span> <span className="text-[#FF4B00]">hour.</span>
            </div>
            <div className="mono text-[11px] leading-relaxed text-white/55 mt-4">
              No subscription.
              <br />
              No minimum commitment.
              <br />
              No software to learn.
            </div>

            <div className="mt-6 mono text-[10px] tracking-[0.14em] uppercase font-bold text-white/60">Pay for the work. Not the software.</div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-[640px]">
              <div className="bg-black px-5 py-4">
                <div className="mono text-[11px] text-white/50 leading-tight">500 companies researched</div>
                <div className="mono text-[13px] font-bold mt-2">
                  6h 42m <span className="text-white/30">→</span> <span className="text-[#FF4B00]">$67</span>
                </div>
              </div>
              <div className="bg-black px-5 py-4">
                <div className="mono text-[11px] text-white/50 leading-tight">1,000 leads enriched</div>
                <div className="mono text-[13px] font-bold mt-2">
                  5h 30m <span className="text-white/30">→</span> <span className="text-[#FF4B00]">$55</span>
                </div>
              </div>
              <div className="bg-black px-5 py-4">
                <div className="mono text-[11px] text-white/50 leading-tight">10,000 products processed</div>
                <div className="mono text-[13px] font-bold mt-2">
                  7h 50m <span className="text-white/30">→</span> <span className="text-[#FF4B00]">$78</span>
                </div>
              </div>
            </div>

            <a
              href="/hire"
              className="mt-6 inline-flex bg-[#FF4B00] hover:bg-[#E84500] text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3 transition-colors"
            >
              Give us a task →
            </a>
          </div>
        </section>

        {/* TRANSPARENCY — pixel header like inspo */}
        <section className="border-b border-black/[0.08] bg-white relative">
          <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="px-6 lg:px-8 py-7 border-b border-black/[0.08]">
            <h2 className="pixel-head text-[20px] md:text-[24px] leading-[0.9] tracking-[-0.02em]">KNOW WHAT YOU&apos;RE PAYING FOR.</h2>
            <p className="mono text-[11px] text-black/50 mt-2">Every task has a clear scope, delivery and cost.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-black/[0.08]">
            {[
              { label: "Task", desc: "What you asked us to do." },
              { label: "Work", desc: "What was executed." },
              { label: "Time", desc: "How long it took." },
              { label: "Delivery", desc: "What you received." },
              { label: "Cost", desc: "What you paid." },
            ].map((c) => (
              <div key={c.label} className="bg-white px-6 py-6">
                <div className="mono text-[11px] tracking-[0.14em] uppercase font-bold">{c.label}</div>
                <div className="mono text-[11px] leading-relaxed text-black/50 mt-2">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO HUB — Hire by task (internal linking for SEO/AEO) */}
        <section className="border-b border-black/[0.08] bg-white">
          <div className="px-6 lg:px-8 py-7 border-b border-black/[0.08]">
            <h2 className="pixel-head text-[18px] md:text-[22px] tracking-[-0.02em]">HIRE AN AI FREELANCER BY TASK</h2>
            <p className="mono text-[11px] text-black/50 mt-2">Choose the work you want to offload — each page explains the tasks, workflow, deliverables and cost.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.08]">
            <Link href="/ai-freelancer" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold tracking-[0.04em]">Hire an AI Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">General — research, data, leads, documents from $10/hr</div>
            </Link>
            <Link href="/ai-data-entry" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI Data Entry Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">PDF → Excel, spreadsheets, CRM entry</div>
            </Link>
            <Link href="/ai-research" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI Research Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">Market, company and competitor research</div>
            </Link>
            <Link href="/ai-lead-generation" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI Lead Generation Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">Prospect lists, ICP filtering, verification</div>
            </Link>
            <Link href="/ai-data-cleaning" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI Data Cleaning Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">Deduplication, normalization, hygiene</div>
            </Link>
            <Link href="/ai-crm-cleanup" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI CRM Cleanup Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">De-dupe contacts, normalize fields</div>
            </Link>
            <Link href="/ai-invoice-processing" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI Invoice Processing Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">Extract line items, reconcile totals</div>
            </Link>
            <Link href="/ai-ecommerce-operations" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI E-commerce Operations Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">Catalog cleanup, product data entry</div>
            </Link>
            <Link href="/ai-web-research" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI Web Research Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">Company & web research with citations</div>
            </Link>
            <Link href="/ai-document-processing" className="bg-white p-5 hover:bg-[#F5F5F3] transition-colors">
              <div className="mono text-[11px] font-bold">AI Document Processing Freelancer →</div>
              <div className="mono text-[11px] text-black/60 mt-1">PDF extraction, forms, records</div>
            </Link>
            <Link href="/work" className="bg-[#F5F5F3] p-5 hover:bg-white transition-colors border border-black/10">
              <div className="mono text-[11px] font-bold">Sample Workflows →</div>
              <div className="mono text-[11px] text-black/60 mt-1">CRM cleanup, invoices, catalog — see task, input, output, time & cost</div>
            </Link>
          </div>
        </section>

        {/* FAQ — inspo: 3-col header with pixel FAQ, cube, Most Common Questions */}
        <section id="faq" className="border-b border-black/[0.08] bg-[#F5F5F3] relative">
          <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-[#FF4B00]/60 hidden lg:block" />
          <div className="grid grid-cols-12 bg-white border-b border-black/[0.08]">
            <div className="col-span-5 lg:col-span-4 px-6 lg:px-8 py-6 border-r border-black/[0.08] flex items-center">
              <h2 className="pixel-head text-[26px] md:text-[30px] tracking-[-0.02em]">FAQ</h2>
            </div>
            <div className="col-span-3 lg:col-span-4 px-6 py-6 border-r border-black/[0.08] hidden md:flex items-center justify-center">
              <div className="w-8 h-8 border border-black/[0.08] bg-[#F5F5F3] grid place-items-center">
                <div className="w-3 h-3 bg-black/10 rotate-45" />
              </div>
            </div>
            <div className="col-span-7 lg:col-span-4 px-6 py-6 flex flex-col justify-center">
              <div className="mono text-[11px] tracking-[0.14em] uppercase font-bold">• Most Common Questions</div>
              <div className="mono text-[10px] text-black/50">No worries, here you can find all the answers</div>
            </div>
          </div>
          <div className="bg-white divide-y divide-black/[0.08]">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-6 px-6 lg:px-8 py-4 text-left hover:bg-[#F5F5F3] transition-colors"
                  >
                    <span className="mono text-[12.5px] font-medium leading-snug">{f.q}</span>
                    <span
                      className={`w-7 h-7 shrink-0 grid place-items-center mono text-[13px] font-bold border ${open ? "bg-black text-white border-black" : "bg-[#FF4B00] text-white border-[#FF4B00]"}`}
                    >
                      {open ? "×" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 lg:px-8 pb-5">
                          <div className="mono text-[11.5px] leading-relaxed text-black/60 bg-[#F5F5F3] border border-black/[0.06] p-4 max-w-[720px]">{f.a}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA — dramatic minimal */}
        <section id="cta" className="bg-white">
          <div className="px-6 lg:px-8 py-10 md:py-14 text-center border-b border-black/[0.08]">
            <h2 className="display-brutalist text-[34px] md:text-[52px] leading-[0.85] tracking-[-0.04em]">
              What&apos;s the work
              <br />
              you don&apos;t want to do?
            </h2>
            <div className="mono text-[12px] text-black/55 mt-4">Send it to us.</div>
            <div className="mono text-[11px] tracking-[0.12em] uppercase leading-relaxed mt-5 space-y-1">
              <div>You explain it.</div>
              <div>We figure it out.</div>
              <div className="font-bold">You get it done.</div>
            </div>
            <div className="mono text-[10px] tracking-[0.16em] uppercase font-bold mt-5">$10 / hour</div>
            <a
              href="/hire"
              className="mt-6 inline-flex bg-[#FF4B00] hover:bg-[#E84500] text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-8 py-3.5 transition-colors"
            >
              Give us your task →
            </a>
            <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40 mt-4">
              $10/HR · SEE ESTIMATE FIRST · PAY FOR ACTUAL WORK ·{" "}
              <Link href="/work-guarantee" className="underline hover:text-black">
                WORK GUARANTEE
              </Link>
            </div>
          </div>

          {/* Footer — premium ABSTRAK LABS */}
          <div className="px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 mono text-[10px] tracking-[0.14em] uppercase text-black/40 border-b border-black/[0.08]">
            <span>© 2024 Abstrak Labs — Digital Labor</span>
            <span className="flex gap-5">
              <a href="/work-guarantee" className="hover:text-black font-bold">
                Work Guarantee
              </a>
              <a href="#" className="hover:text-black">Privacy</a>
              <a href="#" className="hover:text-black">Terms</a>
              <a href="mailto:hello@abstraklabs.com" className="hover:text-black">hello@abstraklabs.com</a>
            </span>
          </div>

          <div className="bg-[#F5F5F3] px-6 lg:px-10 py-9 md:py-12 overflow-hidden relative border-t border-black/[0.08]">
            <div className="absolute inset-0 bg-grid-fine opacity-[0.16] pointer-events-none" />
            {/* Inspo corner orange dots */}
            <div className="absolute top-3 left-3 w-[7px] h-[7px] bg-[#FF4B00]" />
            <div className="absolute top-3 right-3 w-[7px] h-[7px] bg-[#FF4B00]" />
            <div className="absolute bottom-3 left-3 w-[7px] h-[7px] bg-[#FF4B00]" />
            <div className="absolute bottom-3 right-3 w-[7px] h-[7px] bg-[#FF4B00]" />
            <div className="relative flex justify-center items-baseline gap-[0.06em] flex-wrap select-none">
              <span className="pixel-head text-[14vw] md:text-[11vw] lg:text-[142px] leading-none tracking-[-0.03em] text-black opacity-[0.07]">ABSTRAK</span>
              <span className="pixel-head text-[14vw] md:text-[11vw] lg:text-[142px] leading-none tracking-[-0.03em] text-[#FF4B00]">LABS</span>
            </div>
            <div className="relative mono text-[9px] tracking-[0.22em] uppercase text-black/30 text-center mt-4">Digital Labor — $10/hr — Give us the work. We’ll get it done.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
