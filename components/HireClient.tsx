"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });

const ACCENT = "#92A9E1";

const LEADS_API = "https://agents-api.sonalinayak0804.workers.dev/api/leads";

export default function HireClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [detailsConfirmed, setDetailsConfirmed] = useState(false);
  const [detailsError, setDetailsError] = useState("");

  const [input, setInput] = useState("");
  const [taskSent, setTaskSent] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const taRef = useRef<HTMLTextAreaElement>(null);

  const handleConfirmDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setDetailsError("");
    if (!name.trim()) return setDetailsError("Tell us your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setDetailsError("Enter a valid email.");
    setDetailsConfirmed(true);
    setTimeout(() => taRef.current?.focus(), 50);
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || submitting) return;
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(LEADS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, work_description: `Name: ${name.trim()}\n\n${text}` }),
      });
      if (!res.ok) {
        setError(res.status === 400 ? "Something's off with that submission — try again." : "Something went wrong — try again.");
        return;
      }
      setTaskSent(text);
      setSent(true);
      setInput("");
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
                {detailsConfirmed ? (
                  <>
                    Hey {name.trim().split(" ")[0]}, what do you want to{" "}
                    <span className={serif.className} style={{ color: ACCENT }}>get done?</span>
                  </>
                ) : (
                  <>
                    Who are we <span className={serif.className} style={{ color: ACCENT }}>talking to?</span>
                  </>
                )}
              </h1>
              <p className="text-[14px] leading-relaxed text-black/50 mt-4 max-w-[460px] mx-auto">
                {detailsConfirmed
                  ? "Describe it in plain English — we'll get back to you soon with 50% off early access."
                  : "So we know who to reach with your 50% off access."}
              </p>
            </div>

            {!detailsConfirmed && (
              <form onSubmit={handleConfirmDetails} className="mt-8">
                <div className="rounded-[28px] bg-white shadow-[0_4px_24px_-8px_rgba(20,20,20,0.1)] p-2 space-y-1.5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoFocus
                    className="w-full bg-transparent border-0 rounded-[22px] px-4 py-3.5 text-[14px] placeholder:text-black/30 outline-none focus:outline-none focus:ring-0 appearance-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-transparent border-0 rounded-[22px] px-4 py-3.5 text-[14px] placeholder:text-black/30 outline-none focus:outline-none focus:ring-0 appearance-none"
                  />
                  <button
                    type="submit"
                    className="w-full text-white font-semibold py-3.5 rounded-[22px] transition-all hover:scale-[1.01] active:scale-[0.98]"
                    style={{ background: ACCENT }}
                  >
                    Continue →
                  </button>
                </div>
                {detailsError && <div className="text-[11.5px] text-red-500 text-center mt-3">{detailsError}</div>}
              </form>
            )}

            {detailsConfirmed && sent && (
              <div className="mt-8">
                <div className="text-[12.5px] leading-relaxed p-4 rounded-2xl bg-[#141414] text-white ml-10 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.25)]">
                  <div className="text-[10px] tracking-[0.1em] uppercase opacity-55 mb-1">You</div>
                  <div className="whitespace-pre-wrap">{taskSent}</div>
                </div>
                <div className="text-white text-[13px] leading-relaxed p-4 rounded-2xl text-center font-semibold mt-3" style={{ background: ACCENT }}>
                  ✓ Got it, {name.trim().split(" ")[0]} — we&apos;ll get back to you at {email} soon with your 50% off access.
                </div>
              </div>
            )}

            {detailsConfirmed && !sent && (
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
                    disabled={!input.trim() || submitting}
                    aria-label="Send task"
                    className="absolute right-3.5 bottom-3.5 w-11 h-11 rounded-full grid place-items-center text-white transition-all hover:scale-[1.06] active:scale-[0.95] disabled:hover:scale-100 disabled:bg-black/10 disabled:text-black/30"
                    style={!input.trim() || submitting ? undefined : { background: ACCENT }}
                  >
                    {submitting ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="animate-spin">
                        <path d="M21 12a9 9 0 1 1-9-9" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between px-4 mt-2 text-[11px]">
                  <span className="text-black/35 hidden sm:inline">Press ⌘+Enter to send · Plain English is fine</span>
                  <span className="text-black/25 ml-auto">{input.length}/1000</span>
                </div>
                {error && <div className="text-[11.5px] text-red-500 text-center mt-2">{error}</div>}
              </div>
            )}

            {detailsConfirmed && (
              <div className="text-[10.5px] tracking-[0.06em] uppercase text-black/35 text-center mt-6">
                $10 / hour · Pay for the work, not the software · Response within hours
              </div>
            )}
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
