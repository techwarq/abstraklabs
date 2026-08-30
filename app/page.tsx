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
    <main className="min-h-screen bg-[#F5F5F3] text-black selection:bg-[#FF4B00] selection:text-white">
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />

      <div className="relative z-10 max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#F5F5F3]">
        {/* HEADER — slim sticky */}
        <header className="sticky top-0 z-50 bg-[#F5F5F3]/92 backdrop-blur-[10px] border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 h-[56px] flex items-center justify-between gap-6">
            <Link href="/" className="shrink-0 leading-none">
              <div className="text-[11px] font-bold tracking-[-0.02em]">ABSTRAK LABS</div>
              <div className="mono text-[9px] tracking-[0.18em] text-black/55 -mt-0.5">DIGITAL LABOR</div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 mono text-[10.5px] tracking-[0.14em] uppercase text-black/55">
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
                href="#cta"
                className="bg-black text-white mono text-[11px] tracking-[0.12em] uppercase font-bold px-4 py-2.5 hover:bg-[#111] transition-colors"
              >
                Hire a worker — $10/hr <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </header>

        {/* HERO — 60/40 */}
        <section className="border-b border-black/[0.08] bg-[#F5F5F3]">
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

              <h1 className="display-brutalist text-[38px] sm:text-[46px] lg:text-[54px] leading-[0.88] tracking-[-0.04em] mt-6">
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
                  href="#cta"
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

        {/* KEY VALUE STATEMENT */}
        <section className="border-b border-black/[0.08] bg-white">
          <div className="px-6 lg:px-10 py-8 text-center">
            <h2 className="display-brutalist text-[28px] md:text-[34px] leading-[0.9] tracking-[-0.03em]">
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

        {/* WHAT WE DO — 3×2 */}
        <section id="services" className="border-b border-black/[0.08] bg-white">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.08]">
            <h2 className="display-brutalist text-[26px] md:text-[34px] leading-[0.9] tracking-[-0.03em]">What do you need off your plate?</h2>
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

        {/* PORTFOLIO */}
        <section id="work" className="border-b border-black/[0.08] bg-[#F5F5F3]">
          <div className="px-6 lg:px-8 py-8 bg-white border-b border-black/[0.08]">
            <h2 className="display-brutalist text-[26px] md:text-[34px] leading-[0.9] tracking-[-0.03em]">Real work. Real deliverables.</h2>
            <p className="mono text-[11.5px] text-black/50 mt-2">A few examples of what we&apos;ve already handled.</p>
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

                <div className="mt-5 pt-4 border-t border-black/[0.08] flex items-end justify-between gap-4">
                  <div>
                    <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">Delivered</div>
                    <div className="mono text-[12px] font-bold mt-1">{p.delivered}</div>
                  </div>
                  <div className="flex gap-5 mono text-right">
                    <div>
                      <div className="text-[10px] tracking-[0.16em] uppercase text-black/40">Time</div>
                      <div className="text-[14px] font-bold mt-1">{p.time}</div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.16em] uppercase text-black/40">Cost</div>
                      <div className="text-[14px] font-bold mt-1 text-[#FF4B00]">{p.cost}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="border-b border-black/[0.08] bg-white">
          <div className="px-6 lg:px-8 py-8 border-b border-black/[0.08] text-center">
            <h2 className="display-brutalist text-[26px] md:text-[34px] leading-[0.9] tracking-[-0.03em]">
              You have the task.
              <br />
              We have the workers.
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-px bg-black/[0.08]">
            {[
              {
                n: "01",
                title: "Tell us what you need",
                quote: "Find 500 companies matching these criteria.",
                lines: ["No technical knowledge.", "No prompting.", "No setup."],
              },
              {
                n: "02",
                title: "We do the work",
                lines: ["Research", "Browse", "Extract", "Verify", "Organize"],
                list: true,
              },
              {
                n: "03",
                title: "You get the result",
                lines: ["Spreadsheet", "Dataset", "Report", "Research", "Completed workflow"],
                list: true,
              },
            ].map((s) => (
              <div key={s.n} className="col-span-12 md:col-span-4 bg-white px-6 py-7">
                <div className="mono text-[10px] tracking-[0.16em] font-bold text-[#FF4B00]">{s.n}</div>
                <h3 className="mono text-[12px] font-bold tracking-[0.08em] uppercase mt-2">{s.title}</h3>
                {s.quote && <div className="mono text-[11.5px] text-black/60 mt-3">“{s.quote}”</div>}
                <ul className="mt-4 space-y-1 mono text-[11.5px] leading-relaxed text-black/60">
                  {s.lines.map((l) => (
                    <li key={l} className={s.list ? "flex gap-2" : ""}>
                      {s.list && <span className="text-black/20">—</span>}
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="py-5 text-center mono text-[10px] tracking-[0.2em] uppercase font-bold border-t border-black/[0.08]">That&apos;s it.</div>
        </section>

        {/* WORKER TYPES */}
        <section className="border-b border-black/[0.08] bg-[#F5F5F3]">
          <div className="px-6 lg:px-8 py-6 bg-white border-b border-black/[0.08] flex items-center justify-between">
            <h2 className="display-brutalist text-[20px] md:text-[24px] tracking-[-0.02em]">Hire the work. Not the tool.</h2>
            <span className="hidden md:inline mono text-[10px] tracking-[0.14em] uppercase text-black/40">Powered by autonomous AI workers</span>
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
              href="#cta"
              className="mt-6 inline-flex bg-[#FF4B00] hover:bg-[#E84500] text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3 transition-colors"
            >
              Give us a task →
            </a>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="border-b border-black/[0.08] bg-white">
          <div className="px-6 lg:px-8 py-7 border-b border-black/[0.08]">
            <h2 className="display-brutalist text-[22px] md:text-[26px] leading-[0.9] tracking-[-0.02em]">Know what you&apos;re paying for.</h2>
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

        {/* FAQ */}
        <section id="faq" className="border-b border-black/[0.08] bg-[#F5F5F3]">
          <div className="px-6 lg:px-8 py-7 bg-white border-b border-black/[0.08]">
            <h2 className="display-brutalist text-[22px] md:text-[26px] tracking-[-0.02em]">FAQ</h2>
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
              href="mailto:hello@abstraklabs.com?subject=Task%20request%20—%20$10/hr"
              className="mt-6 inline-flex bg-[#FF4B00] hover:bg-[#E84500] text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-8 py-3.5 transition-colors"
            >
              Give us your task →
            </a>
          </div>

          {/* Footer — premium ABSTRAK LABS */}
          <div className="px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 mono text-[10px] tracking-[0.14em] uppercase text-black/40 border-b border-black/[0.08]">
            <span>© 2024 Abstrak Labs — Digital Labor</span>
            <span className="flex gap-5">
              <a href="#" className="hover:text-black">Privacy</a>
              <a href="#" className="hover:text-black">Terms</a>
              <a href="mailto:hello@abstraklabs.com" className="hover:text-black">hello@abstraklabs.com</a>
            </span>
          </div>

          <div className="bg-[#F5F5F3] px-6 lg:px-10 py-9 md:py-11 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-fine opacity-[0.16] pointer-events-none" />
            <div className="relative flex justify-center items-baseline gap-[0.06em] flex-wrap select-none">
              <span className="display-brutalist text-[13vw] md:text-[10vw] lg:text-[132px] leading-none tracking-[-0.05em] text-black opacity-[0.06]">ABSTRAK</span>
              <span className="display-brutalist text-[13vw] md:text-[10vw] lg:text-[132px] leading-none tracking-[-0.05em] text-[#FF4B00]">LABS</span>
            </div>
            <div className="relative mono text-[9px] tracking-[0.22em] uppercase text-black/30 text-center mt-3">Digital Labor — $10/hr — Give us the work. We’ll get it done.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
