"use client";

import { useRef, useState } from "react";
import { Instrument_Serif } from "next/font/google";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });

const ACCENT = "#719DF4";

export default function ComposeStep({
  name,
  onSubmit,
  submitting,
}: {
  name: string;
  onSubmit: (brief: string) => void;
  submitting?: boolean;
}) {
  const [input, setInput] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);

  const trimmed = input.trim();
  const tooShort = trimmed.length > 0 && trimmed.length < 10;

  const handleSend = () => {
    if (!trimmed || tooShort || submitting) return;
    onSubmit(trimmed);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-[640px]">
        <div className="text-center mb-8">
          <h1 className="text-[30px] md:text-[38px] leading-[1.05] tracking-[-0.02em] font-semibold">
            Hey {name.split(" ")[0]}, what do you want to{" "}
            <span className={serif.className} style={{ color: ACCENT }}>get done?</span>
          </h1>
          <p className="text-[14px] leading-relaxed text-black/50 mt-3">
            Describe the work in plain English — we&apos;ll ask a few quick questions, then get started.
          </p>
        </div>

        <div className="relative rounded-[28px] bg-white shadow-[0_4px_24px_-8px_rgba(20,20,20,0.1)] focus-within:shadow-[0_10px_34px_-10px_rgba(20,20,20,0.18)] transition-shadow">
          <textarea
            ref={taRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSend();
            }}
            placeholder="e.g., I need 1,000 companies matching these criteria and their decision makers with verified emails"
            rows={4}
            autoFocus
            className="w-full bg-transparent border-0 p-5 pr-16 text-[13.5px] leading-relaxed placeholder:text-black/30 outline-none focus:outline-none focus:ring-0 resize-none appearance-none"
          />
          <button
            onClick={handleSend}
            disabled={!trimmed || tooShort || submitting}
            aria-label="Send task"
            className="absolute right-3.5 bottom-3.5 w-11 h-11 rounded-full grid place-items-center text-white transition-all hover:scale-[1.06] active:scale-[0.95] disabled:hover:scale-100 disabled:bg-black/10 disabled:text-black/30"
            style={!trimmed || tooShort || submitting ? undefined : { background: ACCENT }}
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
        <div className="text-center text-[11px] mt-2.5">
          {tooShort ? (
            <span className="text-amber-600">A little more detail helps — 10 characters minimum</span>
          ) : (
            <span className="text-black/35">Press ⌘+Enter to send · Plain English is fine</span>
          )}
        </div>
      </div>
    </div>
  );
}
