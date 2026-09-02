"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });

type Msg = { role: "user" | "agent"; text: string; meta?: string };

const ACCENT = "#92A9E1";

const LEADS_API = "https://agents-api.sonalinayak0804.workers.dev/api/leads";

export default function HireClient() {
  const [input, setInput] = useState("");
  const [taskText, setTaskText] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);

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
    setTaskText(text);
    setInput("");
    setTimeout(() => taRef.current?.focus(), 50);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(LEADS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, work_description: taskText }),
      });
      if (!res.ok) {
        setError(res.status === 400 ? "Please enter a valid email." : "Something went wrong — try again.");
        return;
      }
      setSent(true);
    } catch {
      setError("Couldn't reach the server — check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#EFEEEC] text-[#141414] flex flex-col">
      <div className="fixed inset-0 bg-lines-soft pointer-events-none opacity-[0.7]" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-3 md:px-5 w-full flex-1 flex flex-col">
        {/* NAV — dark floating pill */}
        <header className="sticky top-3 md:top-4 z-50 pt-3 md:pt-4 flex justify-center">
          <div className="w-full max-w-[980px] bg-[#141414] text-white rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-4 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/talo-logo-mark.png" alt="Talo" width={329} height={140} className="h-7 w-auto" priority />
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
          <div className="w-full max-w-[680px]">
            <div className="text-center">
              <div
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold px-3.5 py-1.5 rounded-full mb-6"
                style={{ background: "#EEF1FB", color: "#5B6FCB" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                Not live yet — tell us your task, get 50% off Talo
              </div>
              <h1 className="text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] font-semibold">
                What do you want to <span className={serif.className} style={{ color: ACCENT }}>get done?</span>
              </h1>
              <p className="text-[14px] leading-relaxed text-black/50 mt-4 max-w-[460px] mx-auto">
                Describe it in plain English. We&apos;ll get back to you with scope, time, cost — and 50% off early access.
              </p>
            </div>

            {messages.length > 0 && (
              <div className="mt-8 space-y-3 max-h-[32vh] overflow-y-auto">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`text-[12.5px] leading-relaxed p-4 rounded-2xl ${
                      m.role === "user"
                        ? "bg-[#141414] text-white ml-10 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.25)]"
                        : "bg-white mr-10 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.1)]"
                    }`}
                  >
                    <div className="text-[10px] tracking-[0.1em] uppercase opacity-55 mb-1">{m.role === "user" ? "You" : "Talo · Worker"}</div>
                    <div className="whitespace-pre-wrap">{m.text}</div>
                    {m.meta && <div className="text-[10px] tracking-[0.08em] uppercase mt-2 opacity-55">{m.meta}</div>}
                  </div>
                ))}
                {sent && (
                  <div className="text-white text-[12.5px] p-4 rounded-2xl text-center font-semibold" style={{ background: ACCENT }}>
                    ✓ Task received — we&apos;ll email you at {email} within hours with your 50% off access.
                  </div>
                )}
              </div>
            )}

            <div className="mt-8">
              <div className="relative rounded-[28px] bg-white shadow-[0_4px_24px_-8px_rgba(20,20,20,0.1)] focus-within:shadow-[0_10px_34px_-10px_rgba(20,20,20,0.18)] transition-shadow">
                <textarea
                  ref={taRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSend();
                  }}
                  placeholder="Describe your task… e.g., I need 1,000 companies matching these criteria and their decision makers with verified emails"
                  rows={4}
                  className="w-full bg-transparent border-0 p-5 pr-16 text-[13.5px] leading-relaxed placeholder:text-black/30 outline-none focus:outline-none focus:ring-0 resize-none appearance-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  aria-label="Send task"
                  className="absolute right-3.5 bottom-3.5 w-11 h-11 rounded-full grid place-items-center text-white transition-all hover:scale-[1.06] active:scale-[0.95] disabled:hover:scale-100 disabled:bg-black/10 disabled:text-black/30"
                  style={!input.trim() ? undefined : { background: ACCENT }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between px-4 mt-2 text-[11px]">
                <span className="text-black/35 hidden sm:inline">Press ⌘+Enter to send · Plain English is fine</span>
                <span className="text-black/25 ml-auto">{input.length}/1000</span>
              </div>

              {messages.length > 0 && !sent && (
                <form onSubmit={handleSubmitEmail} className="mt-4 rounded-2xl bg-white shadow-[0_4px_24px_-8px_rgba(20,20,20,0.1)] p-4">
                  <div className="text-[10.5px] tracking-[0.08em] uppercase font-semibold">Where should we deliver?</div>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="flex-1 rounded-full bg-[#F5F4F1] px-4 py-2.5 text-[12.5px] outline-none placeholder:text-black/30 focus:bg-[#EFEEEA]"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-[#141414] text-white text-[11.5px] font-semibold px-6 py-2.5 rounded-full hover:bg-black hover:scale-[1.03] active:scale-[0.97] transition-all disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {submitting ? "Sending…" : "Confirm →"}
                    </button>
                  </div>
                  {error ? (
                    <div className="text-[10.5px] text-red-500 mt-2">{error}</div>
                  ) : (
                    <div className="text-[10.5px] text-black/40 mt-2">We&apos;ll confirm scope, time &amp; cost before starting. No spam.</div>
                  )}
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
            <span>© 2026 Talo by Abstrak Labs</span>
            <span className="hidden sm:inline">Give us the work. We&apos;ll get it done.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
