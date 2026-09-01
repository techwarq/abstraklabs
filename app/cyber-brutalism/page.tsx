"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const VIOLET = "#6C4FF5";
const LIME = "#C6FF3D";
const INK = "#101113";

/* ---------- tiny icon set (hand-drawn line icons, mockup style) ---------- */

function IconLayers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="4" width="12" height="12" />
      <rect x="8" y="8" width="12" height="12" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 12.5l3 3 6-6.5" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  );
}
function IconGrid() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3.5" y="3.5" width="6" height="6" />
      <rect x="14.5" y="3.5" width="6" height="6" />
      <rect x="3.5" y="14.5" width="6" height="6" />
      <rect x="14.5" y="14.5" width="6" height="6" />
    </svg>
  );
}

const principles = [
  { icon: IconLayers, title: "Work over tools", desc: "You get the result. Not another dashboard to learn." },
  { icon: IconCheck, title: "Human verified", desc: "Every output is checked before it reaches you." },
  { icon: IconClock, title: "Pay for time", desc: "$10/hour, tracked to the second. No subscriptions." },
  { icon: IconTarget, title: "No prompting", desc: "Describe the task in plain English. We do the rest." },
  { icon: IconGrid, title: "Full transparency", desc: "Live progress, budget caps, no surprise bills." },
];

const work = [
  { n: "01", ref: "MARKET_SCAN", title: "500-Company Market Research", cat: "Research" },
  { n: "02", ref: "LEAD_ENGINE", title: "Lead Enrichment", cat: "Data" },
  { n: "03", ref: "PROFILE_PULL", title: "LinkedIn Data Collection", cat: "Lead Generation" },
  { n: "04", ref: "COMPETITOR_MAP", title: "Competitor Research", cat: "Analysis" },
];

const deliverFormats = ["GOOGLE SHEETS", "EXCEL", "CSV", "PDF", "NOTION", "SLACK"];

/* ---------- interactive bits ---------- */

function SysClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!now) return <span className="tabular-nums">--:--:--</span>;
  return <span className="tabular-nums">{now.toUTCString().slice(17, 25)}</span>;
}

function SubscribeForm() {
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
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex border border-black/15 bg-white">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER EMAIL"
          className="mono text-[11px] tracking-[0.08em] uppercase placeholder:text-black/35 bg-transparent px-3 py-3 flex-1 min-w-0 outline-none"
        />
        <button
          type="submit"
          className="shrink-0 mono text-[11px] tracking-[0.14em] uppercase font-bold px-4 py-3 text-white transition-colors"
          style={{ background: VIOLET }}
        >
          Subscribe →
        </button>
      </div>
      {sent && <div className="mono text-[10px] text-black/45 mt-2">Opening your mail client…</div>}
    </form>
  );
}

/* ---------- abstract decorative render (stand-in for hero artwork) ---------- */

function HeroRender() {
  const blocks = [
    { c: "bg-black", cls: "left-[8%] top-[18%] w-[26%] h-[30%] opacity-90" },
    { c: "bg-black/70", cls: "left-[30%] top-[10%] w-[18%] h-[20%]" },
    { style: { background: VIOLET }, cls: "left-[46%] top-[24%] w-[22%] h-[24%] opacity-90" },
    { style: { background: VIOLET }, cls: "left-[64%] top-[12%] w-[12%] h-[14%] opacity-60" },
    { style: { background: LIME }, cls: "left-[58%] top-[46%] w-[14%] h-[12%]" },
    { c: "bg-black/10", cls: "left-[12%] top-[52%] w-[20%] h-[18%] border border-black/30" },
    { c: "bg-white", cls: "left-[36%] top-[50%] w-[16%] h-[16%] border border-black/20" },
    { c: "bg-black/85", cls: "left-[70%] top-[58%] w-[16%] h-[20%]" },
    { c: "bg-black/5", cls: "left-[20%] top-[8%] w-[10%] h-[10%] border border-dashed border-black/25" },
  ];
  return (
    <div className="relative w-full h-[220px] sm:h-[260px]">
      {blocks.map((b, i) => (
        <div
          key={i}
          className={`absolute ${b.c ?? ""} ${b.cls}`}
          style={b.style}
        />
      ))}
      <div className="absolute left-[6%] top-[6%] w-3 h-3 border-l border-t border-black/40" />
      <div className="absolute right-[6%] bottom-[6%] w-3 h-3 border-r border-b border-black/40" />
    </div>
  );
}

function WorkRender({ n }: { n: string }) {
  return (
    <div className="relative w-full h-[150px] overflow-hidden" style={{ background: "#0B0C0E" }}>
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundSize: "18px 18px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
        }}
      />
      <div
        className="absolute -right-6 -bottom-8 w-28 h-28 rotate-12 opacity-80"
        style={{ background: n === "01" || n === "03" ? VIOLET : LIME }}
      />
      <div className="absolute left-3 top-3 mono text-[9px] tracking-[0.14em] text-white/50">REF_{n}</div>
      <div className="absolute right-3 top-3 mono text-[9px] tracking-[0.14em] text-white/30">// SCN</div>
      <div className="absolute left-3 bottom-3 mono text-[26px] font-bold text-white/10 leading-none">{n}</div>
    </div>
  );
}

/* ---------- page ---------- */

export default function CyberBrutalism() {
  return (
    <main className="min-h-screen bg-[#F4F3F1] text-[#101113] selection:bg-[#6C4FF5] selection:text-white">
      <div className="max-w-[1440px] mx-auto border-x border-black/[0.09] bg-[#F4F3F1] relative">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-[#F4F3F1]/92 backdrop-blur-[10px] border-b border-black/[0.09]">
          <div className="px-6 lg:px-8 h-[56px] flex items-center justify-between gap-6">
            <Link href="/" className="shrink-0 flex items-center gap-1.5 leading-none">
              <span style={{ color: VIOLET }}>✦</span>
              <span className="mono text-[13px] font-bold tracking-[-0.01em]">ABSTRAK_</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 mono text-[10.5px] tracking-[0.14em] uppercase text-black/55">
              <Link href="/work" className="hover:text-black transition-colors">Work</Link>
              <a href="#services" className="hover:text-black transition-colors">Services</a>
              <Link href="/philosophy" className="hover:text-black transition-colors">About</Link>
              <a href="#freelancers" className="hover:text-black transition-colors">Freelancers</a>
              <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3 mono text-[9.5px] tracking-[0.14em] uppercase text-black/45">
              <span>SYS.TIME</span>
              <span className="font-bold text-black/70"><SysClock /></span>
              <span className="text-black/25">UTC+0</span>
            </div>

            <Link
              href="/hire"
              className="shrink-0 bg-black text-white mono text-[11px] tracking-[0.12em] uppercase font-bold px-4 py-2.5 hover:bg-[#111] transition-colors"
            >
              Hire a worker <span className="ml-1">↗</span>
            </Link>
          </div>
        </header>

        {/* QUICK FACTS STRIP */}
        <div className="hidden lg:grid grid-cols-4 border-b border-black/[0.09] mono text-[9px] tracking-[0.14em] uppercase text-black/40">
          {["$10/HR", "NO SUBSCRIPTION", "HUMAN-VERIFIED", "5-STEP PROCESS"].map((t, i) => (
            <div key={t} className={`px-6 py-2 flex justify-between ${i < 3 ? "border-r border-black/[0.09]" : ""}`}>
              <span>{t}</span> <span style={{ color: VIOLET }}>+</span>
            </div>
          ))}
        </div>

        {/* HERO /01 */}
        <section className="border-b border-black/[0.09] relative">
          <div
            className="hidden lg:block absolute left-3 top-10 mono text-[9px] tracking-[0.3em] uppercase text-black/25"
            style={{ writingMode: "vertical-rl" }}
          >
            DIGITAL LABOR, REIMAGINED
          </div>
          <div className="hidden lg:block absolute left-3 bottom-4 mono text-[9px] text-black/25">2026</div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 px-6 lg:px-10 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r border-black/[0.09]">
              <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">/01</div>
              <h1 className="display-brutalist text-[42px] sm:text-[56px] lg:text-[66px] leading-[0.85] tracking-[-0.045em] mt-3">
                DIGITAL
                <br />
                LABOR <span style={{ color: VIOLET }}>REIMAGINED.</span>
              </h1>
              <div className="mono text-[11.5px] tracking-[0.14em] uppercase font-bold mt-5" style={{ color: VIOLET }}>
                AI workers. Human verified. $10/hour.
              </div>
              <p className="text-[14px] leading-[1.6] text-black/65 mt-4 max-w-[480px]">
                Abstrak Labs pairs autonomous AI agents with human quality checks to handle research, data and
                repetitive digital work — start to finish, billed to the second.
              </p>

              <div className="mt-7 flex gap-3">
                <Link
                  href="/work"
                  className="text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3 transition-colors hover:opacity-90"
                  style={{ background: VIOLET }}
                >
                  Explore work →
                </Link>
                <Link
                  href="/philosophy"
                  className="bg-white border border-black/15 hover:border-black mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3 transition-colors"
                >
                  View manifesto ⤢
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 bg-white">
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.09] mono text-[10px] tracking-[0.16em] uppercase">
                <span>&gt; AGENT_STATUS</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: LIME }} /> ACTIVE
                </span>
              </div>
              <div className="p-5">
                <HeroRender />
              </div>
              <div className="flex items-center justify-between px-5 py-3 border-t border-black/[0.09] mono text-[10px] tracking-[0.16em] uppercase text-black/45">
                <span>TASK_ID: 0x4F2A</span>
                <span>WORKERS: 12 ONLINE</span>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES /02 */}
        <section className="border-b border-black/[0.09] bg-white">
          <div className="px-6 lg:px-8 py-4 border-b border-black/[0.09] mono text-[10px] tracking-[0.16em] uppercase text-black/40">
            /02 &nbsp; WHY ABSTRAK LABS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-black/[0.09]">
            {principles.map((p) => (
              <div key={p.title} className="px-6 py-7">
                <div className="text-black/80">
                  <p.icon />
                </div>
                <div className="mono text-[11px] tracking-[0.1em] uppercase font-bold mt-4">{p.title}</div>
                <div className="mono text-[11px] leading-relaxed text-black/50 mt-2">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTED WORK /03 */}
        <section id="services" className="border-b border-black/[0.09]">
          <div className="px-6 lg:px-8 py-6 border-b border-black/[0.09] bg-white flex items-end justify-between gap-6">
            <div>
              <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">/03 &nbsp; SELECTED WORK</div>
              <h2 className="pixel-head text-[20px] md:text-[26px] leading-[0.9] tracking-[-0.02em] mt-2">REAL TASKS. REAL DELIVERABLES.</h2>
            </div>
            <Link href="/work" className="hidden md:inline-flex mono text-[10px] tracking-[0.14em] uppercase font-bold border border-black/15 px-3 py-1.5 hover:bg-black hover:text-white transition-colors">
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.09]">
            {work.map((w) => (
              <Link key={w.n} href="/work" className="bg-white group">
                <WorkRender n={w.n} />
                <div className="px-4 py-3.5">
                  <div className="mono text-[11px] font-bold tracking-[0.02em] uppercase">{w.ref}</div>
                  <div className="mono text-[10.5px] text-black/50 mt-1 flex items-center justify-between">
                    <span>{w.cat}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* /04 /05 /06 */}
        <section id="freelancers" className="border-b border-black/[0.09] bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.09]">
            {/* /04 START YOUR PROJECT */}
            <div className="px-6 lg:px-8 py-8 flex flex-col justify-center">
              <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">/04</div>
              <h3 className="pixel-head text-[22px] leading-[0.95] tracking-[-0.02em] mt-2">LET&apos;S GET TO WORK.</h3>
              <p className="mono text-[11.5px] leading-relaxed text-black/55 mt-3">
                This isn&apos;t outsourcing. It&apos;s a faster way to get the boring, repetitive work done.
              </p>
              <Link
                href="/hire"
                className="mt-5 inline-flex w-fit bg-black text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-5 py-3 hover:bg-[#111] transition-colors"
              >
                Let&apos;s build ↗
              </Link>
            </div>

            {/* /05 TASK STATUS */}
            <div className="px-6 lg:px-8 py-8">
              <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">/05 &nbsp; TASK STATUS</div>
              <div className="mt-4 space-y-3 mono text-[11px]">
                {[
                  { l: "RESEARCH", v: 100 },
                  { l: "VERIFY", v: 100 },
                  { l: "ENRICH", v: 62 },
                ].map((r) => (
                  <div key={r.l}>
                    <div className="flex justify-between text-black/55">
                      <span className="tracking-[0.1em] uppercase">{r.l}</span>
                      <span className="font-bold text-black/80">{r.v}%</span>
                    </div>
                    <div className="h-[5px] bg-black/[0.08] mt-1">
                      <div className="h-full" style={{ width: `${r.v}%`, background: VIOLET }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mono text-[11px] mt-4 text-black/55">
                <span>TIME: <span className="font-bold text-black">4H 12M</span></span>
                <span>COST: <span className="font-bold text-black">$42</span></span>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 mono text-[10px] tracking-[0.14em] uppercase font-bold px-3 py-1.5" style={{ background: LIME }}>
                <span className="w-1.5 h-1.5 bg-black rounded-full" /> Agents operational
              </div>
            </div>

            {/* /06 SUBSCRIBE */}
            <div id="contact" className="px-6 lg:px-8 py-8">
              <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">/06 &nbsp; SUBSCRIBE TO UPDATES</div>
              <p className="mono text-[11.5px] leading-relaxed text-black/55 mt-3">
                New worker types, pricing changes and product updates. No spam.
              </p>
              <SubscribeForm />
            </div>
          </div>
        </section>

        {/* DELIVERED YOUR WAY /07 */}
        <section className="border-b border-black/[0.09]">
          <div className="px-6 lg:px-8 py-4 mono text-[10px] tracking-[0.16em] uppercase text-black/40">
            /07 &nbsp; DELIVERED YOUR WAY
          </div>
          <div className="flex flex-wrap gap-px bg-black/[0.09] border-t border-black/[0.09]">
            {deliverFormats.map((f) => (
              <div key={f} className="bg-white px-6 py-4 flex-1 min-w-[140px] flex items-center gap-2 mono text-[11px] tracking-[0.1em] uppercase font-bold text-black/60">
                <span style={{ color: VIOLET }}>▪</span> {f}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white">
          <div className="px-6 lg:px-8 py-3 flex items-center justify-between border-b border-black/[0.09] mono text-[10px] tracking-[0.14em] uppercase text-black/50">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: LIME }} /> Agents online — working now
            </span>
            <span className="hidden sm:inline text-black/35">Remote-first</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 lg:px-8 py-9">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-1.5">
                <span style={{ color: VIOLET }}>✦</span>
                <span className="mono text-[13px] font-bold">ABSTRAK_</span>
              </div>
              <div className="mono text-[10px] text-black/40 mt-2">Digital labor. $10/hour.</div>
            </div>
            <div>
              <div className="mono text-[10px] tracking-[0.14em] uppercase font-bold text-black/40">Navigation</div>
              <div className="mt-3 space-y-1.5 mono text-[11.5px]">
                <div><Link href="/work" className="hover:text-black text-black/65">Work</Link></div>
                <div><a href="#services" className="hover:text-black text-black/65">Services</a></div>
                <div><Link href="/philosophy" className="hover:text-black text-black/65">About</Link></div>
                <div><Link href="/hire" className="hover:text-black text-black/65">Hire a worker</Link></div>
              </div>
            </div>
            <div>
              <div className="mono text-[10px] tracking-[0.14em] uppercase font-bold text-black/40">Resources</div>
              <div className="mt-3 space-y-1.5 mono text-[11.5px]">
                <div><Link href="/#faq" className="hover:text-black text-black/65">FAQ</Link></div>
                <div><Link href="/work-guarantee" className="hover:text-black text-black/65">Work Guarantee</Link></div>
                <div><Link href="/#pricing" className="hover:text-black text-black/65">Pricing</Link></div>
              </div>
            </div>
            <div>
              <div className="mono text-[10px] tracking-[0.14em] uppercase font-bold text-black/40">Contact</div>
              <div className="mt-3 space-y-1.5 mono text-[11.5px]">
                <a href="mailto:hello@abstraklabs.com" className="hover:text-black text-black/65 block">hello@abstraklabs.com</a>
                <div className="text-black/40">Reply within hours.</div>
              </div>
            </div>
          </div>

          <div className="px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-black/[0.09] mono text-[9.5px] tracking-[0.14em] uppercase text-black/35">
            <span>© 2026 Abstrak Labs — Digital Labor</span>
            <span>Node: ABSTRAK_01</span>
          </div>

          <div
            className="px-6 lg:px-8 py-2.5 flex items-center justify-between mono text-[10px] tracking-[0.16em] uppercase font-bold text-white"
            style={{ background: `linear-gradient(90deg, ${VIOLET}, #4A34C4)` }}
          >
            <span>&gt; Connection secure</span>
            <span>$10/HR</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
