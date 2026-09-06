"use client";

import type { AgentDefinition } from "../../lib/api/types";
import { toolLabel, skillLabel } from "../../lib/api/registry";

const ACCENT = "#719DF4";
const PINK = "#E0568A";

function formatCents(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function AgentReview({
  agent,
  onStart,
  onStop,
  submitting,
}: {
  agent: AgentDefinition;
  onStart: () => void;
  onStop: () => void;
  submitting: boolean;
}) {
  const { policy, tools, skills } = agent.definition;
  const hasApprovalGates = policy.approval_gates.length > 0;

  return (
    <div className="flex-1 flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-[640px]">
        <div className="rounded-[24px] bg-white shadow-[0_10px_34px_-10px_rgba(20,20,20,0.18)] overflow-hidden">
          <div className="px-6 pt-5 pb-4 border-b border-black/[0.06]">
            <div className="text-[11px] tracking-[0.1em] uppercase font-bold" style={{ color: ACCENT }}>
              Agent ready
            </div>
            <div className="text-[15px] font-semibold leading-snug mt-1">{agent.name}</div>
          </div>

          <div className="px-6 py-4 space-y-4">
            <div>
              <div className="text-[11px] tracking-[0.06em] uppercase text-black/40 font-semibold mb-1.5">Tools</div>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((t) => (
                  <span key={t.id} className="text-[11.5px] font-medium bg-black/[0.04] px-2.5 py-1 rounded-full">
                    {toolLabel(t.id)}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.06em] uppercase text-black/40 font-semibold mb-1.5">Skills</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span key={s.id} className="text-[11.5px] font-medium bg-black/[0.04] px-2.5 py-1 rounded-full">
                    {skillLabel(s.id)}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5 text-[12.5px]">
              <span className="text-black/50">
                Budget: <span className="font-semibold text-black/80">{formatCents(policy.max_budget_cents)}</span>
              </span>
              <span className="text-black/50">
                Max iterations: <span className="font-semibold text-black/80">{policy.max_iterations}</span>
              </span>
              <span className="text-black/50">
                Timeout: <span className="font-semibold text-black/80">{Math.round(policy.max_runtime_seconds / 60)}m</span>
              </span>
            </div>

            {hasApprovalGates && (
              <div className="rounded-xl px-3.5 py-3 text-[12.5px] leading-relaxed" style={{ background: `${PINK}14`, color: PINK }}>
                This run will pause for your approval before using: {policy.approval_gates.map(toolLabel).join(", ")}
              </div>
            )}
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
              onClick={onStart}
              disabled={submitting}
              className="text-white text-[12.5px] font-semibold px-5 py-2 rounded-full transition-all disabled:opacity-40"
              style={{ background: ACCENT }}
            >
              {submitting ? "Starting…" : "Start →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
