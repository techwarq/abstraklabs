"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as agentRuns from "../../lib/api/agentRuns";
import type { AgentRun, RunStep } from "../../lib/api/types";
import { toolLabel } from "../../lib/api/registry";

const ACCENT = "#719DF4";
const PINK = "#E0568A";

const TERMINAL = new Set(["completed", "failed", "cancelled"]);
const POLL_MS = 2500;

function stepLine(step: RunStep): string | null {
  switch (step.type) {
    case "tool_call_started":
      return `Calling ${toolLabel(String(step.payload.toolId))}…`;
    case "tool_call_result":
      return step.payload.ok
        ? `${toolLabel(String(step.payload.toolId ?? ""))} finished`
        : `${toolLabel(String(step.payload.toolId ?? ""))} failed`;
    case "completed":
      return "Finishing up…";
    default:
      return null;
  }
}

export default function WorkingView({
  title,
  brief,
  runId,
  onNewTask,
}: {
  title: string;
  brief: string;
  runId: string;
  onNewTask: () => void;
}) {
  const [run, setRun] = useState<AgentRun | null>(null);
  const [approving, setApproving] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const poll = useCallback(async () => {
    try {
      const r = await agentRuns.getRun(runId);
      setRun(r);
      if (TERMINAL.has(r.status) && timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    } catch {
      // transient network error — next tick retries
    }
  }, [runId]);

  useEffect(() => {
    poll();
    timer.current = setInterval(poll, POLL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [poll]);

  const handleApprove = async (approved: boolean) => {
    if (!run) return;
    setApproving(true);
    try {
      await agentRuns.approveRun(runId, run.iterationsUsed, approved);
      await poll();
    } finally {
      setApproving(false);
    }
  };

  const handleCancel = async () => {
    setCancelling(true);
    try {
      await agentRuns.cancelRun(runId);
      await poll();
    } finally {
      setCancelling(false);
    }
  };

  const terminal = run ? TERMINAL.has(run.status) : false;
  const lastApprovalStep = run?.steps.filter((s) => s.type === "approval_requested").slice(-1)[0];

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="px-6 lg:px-10 pt-6 pb-2 text-[13px] font-semibold text-black/70">{title}</div>

      <div className="flex-1 overflow-y-auto px-6 lg:px-10 py-4">
        <div className="max-w-[680px] mx-auto space-y-5">
          <div className="rounded-2xl bg-white/70 border border-black/[0.06] p-4 text-[13px] leading-relaxed">
            {brief}
          </div>

          <div className="rounded-2xl border border-black/[0.06] bg-white p-4">
            <div className="flex items-center gap-2 text-[13px] font-medium text-black/70">
              {!run ? (
                <>Loading…</>
              ) : run.status === "completed" ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Agent finished
                </>
              ) : run.status === "failed" ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  Agent failed
                </>
              ) : run.status === "cancelled" ? (
                <>Cancelled</>
              ) : run.status === "waiting_for_user" ? (
                <>Waiting for your approval</>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" className="animate-spin">
                    <path d="M21 12a9 9 0 1 1-9-9" />
                  </svg>
                  Agent is working
                </>
              )}
              {run && (
                <span className="text-black/30">
                  · step {run.progressCurrent}/{run.progressTotal}
                </span>
              )}
            </div>

            {run && run.steps.length > 0 && (
              <div className="mt-3 space-y-2">
                {run.steps.map((s) => {
                  if (s.type === "error") {
                    return (
                      <div key={s.seq} className="text-[12.5px] text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                        ⚠ {String(s.payload.message ?? "Non-fatal error — retrying")}
                      </div>
                    );
                  }
                  const line = stepLine(s);
                  if (!line) return null;
                  return (
                    <div key={s.seq} className="flex items-center gap-2.5 text-[13px] text-black/60">
                      <span className="w-[15px] h-[15px] rounded-full border-2 border-black/15 shrink-0" />
                      {line}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {run?.status === "waiting_for_user" && lastApprovalStep && (
            <div className="rounded-2xl border-l-[3px] bg-white p-4" style={{ borderColor: PINK }}>
              <div className="text-[11px] tracking-[0.1em] uppercase font-bold mb-1.5" style={{ color: PINK }}>
                Approval needed
              </div>
              <div className="text-[13.5px] leading-relaxed">
                This run wants to use <strong>{toolLabel(String(lastApprovalStep.payload.toolId))}</strong> with:
              </div>
              <pre className="mt-2 text-[11.5px] bg-black/[0.03] rounded-lg p-3 overflow-x-auto">
                {JSON.stringify(lastApprovalStep.payload.input ?? {}, null, 2)}
              </pre>
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  disabled={approving}
                  onClick={() => handleApprove(true)}
                  className="text-white text-[12.5px] font-semibold px-4 py-2 rounded-full disabled:opacity-40"
                  style={{ background: ACCENT }}
                >
                  Approve
                </button>
                <button
                  type="button"
                  disabled={approving}
                  onClick={() => handleApprove(false)}
                  className="text-[12.5px] font-semibold px-4 py-2 rounded-full border border-black/10 text-black/60 disabled:opacity-40"
                >
                  Deny
                </button>
              </div>
            </div>
          )}

          {run?.status === "completed" && (
            <div className="rounded-2xl text-white p-4 text-[13px] leading-relaxed font-medium" style={{ background: ACCENT }}>
              ✓ {run.resultSummary ?? "Done."}
            </div>
          )}

          {run?.status === "failed" && (
            <div className="rounded-2xl bg-red-50 text-red-700 p-4 text-[13px] leading-relaxed font-medium">
              {run.failureReason ?? "The run failed."}
            </div>
          )}

          {run?.status === "cancelled" && (
            <div className="rounded-2xl bg-black/[0.04] text-black/60 p-4 text-[13px] leading-relaxed font-medium">
              This run was cancelled.
            </div>
          )}
        </div>
      </div>

      <div className="px-6 lg:px-10 pb-6 pt-2">
        <div className="max-w-[680px] mx-auto flex justify-end gap-2">
          {terminal ? (
            <button
              type="button"
              onClick={onNewTask}
              className="text-white text-[12.5px] font-semibold px-5 py-2.5 rounded-full"
              style={{ background: ACCENT }}
            >
              Start a new task →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleCancel}
              disabled={cancelling}
              className="text-[12.5px] font-semibold px-5 py-2.5 rounded-full border border-black/10 text-black/60 disabled:opacity-40"
            >
              {cancelling ? "Cancelling…" : "Cancel run"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
