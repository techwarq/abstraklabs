"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type Msg = { role: "user" | "agent"; text: string; meta?: string };

const ACCENT = "#92A9E1";

export default function HireClient() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const examples = [
    "Find 500 US SaaS companies, their founders, funding and LinkedIn",
    "Collect 1,200 profiles matching our ICP - enrich emails",
    "Research 15 competitors - pricing, features, positioning",
    "Extract 10,000 products from 8 marketplaces into a sheet",
  ];

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { role: "user", text };
    const len = text.length;
    const hours = Math.max(2, Math.min(12, Math.round(len / 45) + 3));
    const mins = [12, 30, 42, 15, 0][hours % 5];
    const cost = hours * 10 + (mins > 0 ? 1 : 0) * 2;
    const timeStr = `${hours}h ${String(mins).padStart(2, "0")}m`;
    const agentMsg: Msg = {
      role: "agent",
      text: `Got it. We'll handle it.\n\nTask: "${text.slice(0, 140)}${text.length > 140 ? "…" : ""}"\n\nEstimated: ${timeStr} → $${cost} at $10/hr. We'll verify scope and confirm before starting. Where should we deliver the result?`,
      meta: `${timeStr} · $${cost} · $10/hr`,
    };
    setMessages((m) => [...m, userMsg, agentMsg]);
    setInput("");
    setTimeout(() => taRef.current?.focus(), 50);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#EFEEEC] text-[#141414] flex flex-col">
      <div className="fixed inset-0 bg-lines-soft pointer-events-none opacity-[0.7]" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-3 md:px-5 w-full flex-1 flex flex-col">
        {/* NAV — dark floating pill */}
        <header className="sticky top-3 md:top-4 z-50 pt-3 md:pt-4 flex justify-center">
          <div className="w-full max-w-[980px] bg-[#141414] text-white rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-4 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/abstrak-logo-mark.png" alt="Abstrak Labs" width={126} height={40} className="h-7 w-auto" priority />
            </Link>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-white/55">
                <span className="w-1.5 h-1.5 bg-[#4ADE80] rounded-full animate-pulse" /> Agents online
              </span>
              <Link
                href="/"
                className="bg-white text-[#141414] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                ← Back to site
              </Link>
            </div>
          </div>
        </header>

        <div className="relative z-10 flex-1 flex items-center justify-center p-6 lg:p-10">
          <div className="w-full max-w-[720px] rounded-[22px] bg-white border border-black/[0.06] shadow-[0_2px_16px_-4px_rgba(20,20,20,0.06)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-black/[0.06] bg-[#F5F4F1] text-[11px] tracking-[0.04em] uppercase">
              <span className="font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} /> New task
              </span>
              <span className="text-black/40">$10 / hour · No subscription</span>
            </div>

            <div className="px-6 lg:px-8 py-9 text-center border-b border-black/[0.06]">
              <h1 className="text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.02em] font-semibold">
                What do you want to
                <br />
                <span style={{ color: ACCENT }}>get done?</span>
              </h1>
              <p className="text-[13px] leading-relaxed text-black/50 mt-3 max-w-[440px] mx-auto">
                Describe it in plain English. We figure out the workflow and deliver the result.
              </p>
            </div>

            {messages.length > 0 && (
              <div className="px-6 lg:px-8 py-6 space-y-3 max-h-[32vh] overflow-y-auto border-b border-black/[0.06] bg-[#FAFAF9]">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`text-[12.5px] leading-relaxed p-4 rounded-xl ${
                      m.role === "user" ? "bg-[#141414] text-white ml-8" : "bg-white border border-black/[0.06] mr-8"
                    }`}
                  >
                    <div className="text-[10px] tracking-[0.1em] uppercase opacity-55 mb-1">{m.role === "user" ? "You" : "Abstrak · Worker"}</div>
                    <div className="whitespace-pre-wrap">{m.text}</div>
                    {m.meta && <div className="text-[10px] tracking-[0.08em] uppercase mt-2 opacity-55">{m.meta}</div>}
                  </div>
                ))}
                {sent && (
                  <div className="text-white text-[12.5px] p-4 rounded-xl text-center font-semibold" style={{ background: ACCENT }}>
                    ✓ Task received — we&apos;ll email you at {email} within hours to confirm scope &amp; start.
                  </div>
                )}
              </div>
            )}

            <div className="p-6 lg:p-8">
              <label className="text-[10.5px] tracking-[0.08em] uppercase font-semibold text-black/50">Your task</label>
              <div className="mt-2 rounded-xl border border-black/[0.1] bg-[#F5F4F1] focus-within:border-black/25 focus-within:bg-white transition-colors overflow-hidden">
                <textarea
                  ref={taRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSend();
                  }}
                  placeholder="Describe your task… e.g., I need 1,000 companies matching these criteria and their decision makers with verified emails"
                  rows={4}
                  className="w-full bg-transparent p-4 text-[13px] leading-relaxed placeholder:text-black/30 outline-none resize-none"
                />
                <div className="flex items-center justify-between px-3 py-2.5 border-t border-black/[0.06] bg-white text-[11px]">
                  <span className="text-black/40 hidden sm:inline">Press ⌘+Enter to send · Plain English is fine</span>
                  <div className="flex items-center gap-3 ml-auto">
                    <span className="text-black/30 hidden sm:inline">{input.length}/1000</span>
                    <button
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="text-white font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-[1.03] active:scale-[0.97] disabled:hover:scale-100 disabled:bg-black/10 disabled:text-black/30"
                      style={!input.trim() ? undefined : { background: ACCENT }}
                    >
                      Send →
                    </button>
                  </div>
                </div>
              </div>

              {messages.length === 0 && (
                <div className="mt-5">
                  <div className="text-[10.5px] tracking-[0.08em] uppercase text-black/40 font-medium">Try an example</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {examples.map((ex) => (
                      <button
                        key={ex}
                        onClick={() => setInput(ex)}
                        className="text-left text-[11.5px] leading-snug rounded-full border border-black/[0.08] bg-white hover:border-black/20 hover:bg-[#F5F4F1] px-3.5 py-2 transition-colors max-w-full"
                      >
                        &quot;{ex}&quot;
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.length > 0 && !sent && (
                <form onSubmit={handleSubmitEmail} className="mt-6 rounded-xl border border-black/[0.06] bg-[#F5F4F1] p-4">
                  <div className="text-[10.5px] tracking-[0.08em] uppercase font-semibold">Where should we deliver?</div>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="flex-1 rounded-full border border-black/[0.1] bg-white px-4 py-2.5 text-[12.5px] outline-none placeholder:text-black/30 focus:border-black/25"
                    />
                    <button
                      type="submit"
                      className="bg-[#141414] text-white text-[11.5px] font-semibold px-6 py-2.5 rounded-full hover:bg-black hover:scale-[1.03] active:scale-[0.97] transition-all"
                    >
                      Confirm →
                    </button>
                  </div>
                  <div className="text-[10.5px] text-black/40 mt-2">We&apos;ll confirm scope, time &amp; cost before starting. No spam.</div>
                </form>
              )}

              <div className="text-[10.5px] tracking-[0.06em] uppercase text-black/35 text-center mt-6">
                $10 / hour · Pay for the work, not the software · Response within hours
              </div>
            </div>
          </div>
        </div>

        <footer className="relative z-10 pb-6">
          <div className="rounded-[22px] bg-white border border-black/[0.06] px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] tracking-[0.04em] text-black/45">
            <span>© 2024 Abstrak Labs — Digital Labor</span>
            <span className="hidden sm:inline">Give us the work. We&apos;ll get it done.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
