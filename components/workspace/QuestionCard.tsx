"use client";

import { useState } from "react";

const PINK = "#E0568A";
const ACCENT = "#719DF4";

export default function QuestionCard({
  brief,
  questions,
  onAnswer,
  onStop,
  submitting,
}: {
  brief: string;
  questions: string[];
  onAnswer: (answers: { question: string; answer: string }[]) => void;
  onStop: () => void;
  submitting: boolean;
}) {
  const [values, setValues] = useState<string[]>(() => questions.map(() => ""));

  const allAnswered = values.every((v) => v.trim().length > 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allAnswered || submitting) return;
    onAnswer(questions.map((q, i) => ({ question: q, answer: values[i].trim() })));
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-[640px]">
        {brief && (
          <div className="mb-4 opacity-45 pointer-events-none select-none text-[12.5px] leading-relaxed line-clamp-2">
            {brief}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="rounded-[24px] bg-white shadow-[0_10px_34px_-10px_rgba(20,20,20,0.18)] border-l-[3px]"
          style={{ borderColor: PINK }}
        >
          <div className="px-6 pt-5">
            <div className="text-[11px] tracking-[0.1em] uppercase font-bold" style={{ color: PINK }}>
              Question{questions.length > 1 ? "s" : ""}
            </div>
          </div>

          <div className="px-6 pt-2 pb-4 space-y-4">
            {questions.map((q, i) => (
              <div key={i}>
                <div className="text-[15px] font-semibold leading-snug mb-2">{q}</div>
                <input
                  type="text"
                  value={values[i]}
                  onChange={(e) => setValues((v) => v.map((val, idx) => (idx === i ? e.target.value : val)))}
                  placeholder="Type your answer…"
                  autoFocus={i === 0}
                  className="w-full bg-black/[0.03] border-0 rounded-xl px-3.5 py-2.5 text-[13.5px] placeholder:text-black/35 outline-none focus:outline-none focus:ring-1 focus:ring-black/10"
                />
              </div>
            ))}
          </div>

          <div className="px-5 py-3 border-t border-black/[0.06] flex items-center justify-between">
            <button
              type="button"
              onClick={onStop}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-black/50 hover:text-black/80 px-3.5 py-1.5 rounded-full border border-black/10 transition-colors"
            >
              <span className="w-2 h-2 rounded-[2px] bg-current" /> Stop
            </button>
            <button
              type="submit"
              disabled={!allAnswered || submitting}
              className="text-white text-[12.5px] font-semibold px-5 py-2 rounded-full transition-all disabled:opacity-40"
              style={{ background: ACCENT }}
            >
              {submitting ? "Sending…" : "Continue →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
