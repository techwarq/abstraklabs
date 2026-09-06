"use client";

import type { Checklist } from "../../lib/api/types";
import { toolLabel } from "../../lib/api/registry";

const ACCENT = "#719DF4";

function formatCents(cents: number | null) {
  if (cents == null) return "—";
  return `$${(cents / 100).toFixed(2)}`;
}

export default function ChecklistReview({
  checklist,
  estimatedTotalCents,
  onConfirm,
  onStop,
  submitting,
}: {
  checklist: Checklist;
  estimatedTotalCents: number | null;
  onConfirm: () => void;
  onStop: () => void;
  submitting: boolean;
}) {
  return (
    <div className="flex-1 flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-[640px]">
        <div className="rounded-[24px] bg-white shadow-[0_10px_34px_-10px_rgba(20,20,20,0.18)] overflow-hidden">
          <div className="px-6 pt-5 pb-4 border-b border-black/[0.06]">
            <div className="text-[11px] tracking-[0.1em] uppercase font-bold" style={{ color: ACCENT }}>
              Ready to build
            </div>
            <div className="text-[15px] font-semibold leading-snug mt-1">{checklist.expected_output}</div>
          </div>

          <div className="px-6 py-4 space-y-4">
            <div>
              <div className="text-[11px] tracking-[0.06em] uppercase text-black/40 font-semibold mb-1.5">Inputs</div>
              <ul className="text-[13px] text-black/70 space-y-1">
                {checklist.inputs.map((input, i) => (
                  <li key={i}>• {input}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.06em] uppercase text-black/40 font-semibold mb-1.5">Tools required</div>
              <div className="flex flex-wrap gap-1.5">
                {checklist.required_tools.map((id) => (
                  <span key={id} className="text-[11.5px] font-medium bg-black/[0.04] px-2.5 py-1 rounded-full">
                    {toolLabel(id)}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.06em] uppercase text-black/40 font-semibold mb-1.5">Assumptions</div>
              <ul className="text-[12.5px] text-black/50 space-y-1">
                {checklist.assumptions.map((a, i) => (
                  <li key={i}>• {a}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-5 pt-1 text-[12.5px]">
              <span className="text-black/50">
                Risk: <span className="font-semibold text-black/80 capitalize">{checklist.risk_level}</span>
              </span>
              <span className="text-black/50">
                Est. time: <span className="font-semibold text-black/80">{checklist.estimated_hours}h</span>
              </span>
              <span className="text-black/50">
                Est. cost: <span className="font-semibold text-black/80">{formatCents(estimatedTotalCents)}</span>
              </span>
            </div>
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
              type="button"
              onClick={onConfirm}
              disabled={submitting}
              className="text-white text-[12.5px] font-semibold px-5 py-2 rounded-full transition-all disabled:opacity-40"
              style={{ background: ACCENT }}
            >
              {submitting ? "Building…" : "Build agent →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
