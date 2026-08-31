"use client";

import { useState, useRef } from "react";
import Link from "next/link";

type Msg = { role: "user" | "agent"; text: string; meta?: string };

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
    <main className="min-h-screen bg-[#EDE8D0] text-black flex flex-col">
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.18]" />
      <header className="relative z-10 border-b border-black/[0.08] bg-[#EDE8D0]/90 backdrop-blur-[8px] sticky top-0">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 h-[56px] flex items-center justify-between border-x border-black/[0.08]">
          <Link href="/" className="leading-none">
            <div className="text-[11px] font-bold tracking-[-0.02em]">ABSTRAK LABS</div>
            <div className="mono text-[9px] tracking-[0.18em] text-black/55 -mt-0.5">DIGITAL LABOR</div>
          </Link>
          <div className="flex items-center gap-3 mono text-[10px] tracking-[0.14em] uppercase">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-black/60">
              <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" /> Agents online
            </span>
            <Link href="/" className="border border-black/15 bg-white px-4 py-2 hover:border-black transition-colors">
              ← Back to site
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10 flex-1 flex items-center justify-center p-6 lg:p-10">
        <div className="w-full max-w-[760px] border border-black/[0.08] bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-3 border-b border-black/[0.08] bg-[#EDE8D0] mono text-[10px] tracking-[0.16em] uppercase">
            <span className="font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#92A9E1] rounded-full" /> New task
            </span>
            <span className="text-black/40">$10 / hour · No subscription</span>
          </div>

          <div className="px-6 lg:px-8 py-8 text-center border-b border-black/[0.08]">
            <h1 className="display-brutalist text-[26px] md:text-[32px] leading-[0.9] tracking-[-0.03em]">
              What do you want to
              <br />
              <span className="text-[#92A9E1]">get done?</span>
            </h1>
            <p className="mono text-[12px] leading-relaxed text-black/55 mt-3 max-w-[460px] mx-auto">
              Describe it in plain English. We figure out the workflow and deliver the result.
            </p>
          </div>

          {messages.length > 0 && (
            <div className="px-6 lg:px-8 py-6 space-y-4 max-h-[32vh] overflow-y-auto border-b border-black/[0.08] bg-[#EDE8D0]/40">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`mono text-[12.5px] leading-relaxed p-4 border ${m.role === "user" ? "bg-black text-white border-black ml-8" : "bg-white border-black/[0.08] mr-8"}`}
                >
                  <div className="text-[10px] tracking-[0.14em] uppercase opacity-60 mb-1">{m.role === "user" ? "You" : "Abstrak · Worker"}</div>
                  <div className="whitespace-pre-wrap">{m.text}</div>
                  {m.meta && <div className="text-[10px] tracking-[0.12em] uppercase mt-2 opacity-60">{m.meta}</div>}
                </div>
              ))}
              {sent && (
                <div className="bg-[#92A9E1] text-white mono text-[12px] p-4 text-center font-bold">
                  ✓ Task received — we&apos;ll email you at {email} within hours to confirm scope & start.
                </div>
              )}
            </div>
          )}

          <div className="p-6 lg:p-8">
            <label className="mono text-[10px] tracking-[0.16em] uppercase font-bold text-black/60">Your task</label>
            <div className="mt-2 border border-black/[0.12] bg-[#EDE8D0] focus-within:border-black focus-within:bg-white transition-colors">
              <textarea
                ref={taRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSend();
                }}
                placeholder="Describe your task… e.g., I need 1,000 companies matching these criteria and their decision makers with verified emails"
                rows={4}
                className="w-full bg-transparent p-4 mono text-[13px] leading-relaxed placeholder:text-black/30 outline-none resize-none"
              />
              <div className="flex items-center justify-between px-3 py-2 border-t border-black/[0.08] bg-white mono text-[10px]">
                <span className="text-black/40 hidden sm:inline">Press ⌘+Enter to send · Plain English is fine</span>
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-black/30 hidden sm:inline">{input.length}/1000</span>
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="bg-[#92A9E1] hover:bg-[#7E9AD1] disabled:bg-black/10 disabled:text-black/30 text-white font-bold tracking-[0.14em] uppercase px-6 py-2.5 transition-colors"
                  >
                    Send →
                  </button>
                </div>
              </div>
            </div>

            {messages.length === 0 && (
              <div className="mt-5">
                <div className="mono text-[10px] tracking-[0.14em] uppercase text-black/40">Try an example</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {examples.map((ex) => (
                    <button
                      key={ex}
                      onClick={() => setInput(ex)}
                      className="text-left mono text-[11px] leading-snug border border-black/[0.08] bg-white hover:border-black hover:bg-black hover:text-white px-3 py-2 transition-colors max-w-full"
                    >
                      “{ex}”
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.length > 0 && !sent && (
              <form onSubmit={handleSubmitEmail} className="mt-6 border border-black/[0.08] bg-[#EDE8D0] p-4">
                <div className="mono text-[10px] tracking-[0.16em] uppercase font-bold">Where should we deliver?</div>
                <div className="mt-2 flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 border border-black/[0.12] bg-white px-3 py-2.5 mono text-[12px] outline-none placeholder:text-black/30 focus:border-black"
                  />
                  <button type="submit" className="bg-black text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-2.5 hover:bg-[#111]">
                    Confirm →
                  </button>
                </div>
                <div className="mono text-[10px] text-black/40 mt-2">We&apos;ll confirm scope, time & cost before starting. No spam.</div>
              </form>
            )}

            <div className="mono text-[10px] tracking-[0.12em] uppercase text-black/30 text-center mt-6">
              $10 / hour · Pay for the work, not the software · Response within hours
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-black/[0.08] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-3 flex items-center justify-between mono text-[10px] tracking-[0.14em] uppercase text-black/40 border-x border-black/[0.08]">
          <span>© 2024 Abstrak Labs — Digital Labor</span>
          <span className="hidden sm:inline">Give us the work. We&apos;ll get it done.</span>
        </div>
      </footer>
    </main>
  );
}
