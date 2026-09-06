"use client";

import { useMemo, useState } from "react";
import ComposeStep from "./ComposeStep";
import QuestionCard from "./QuestionCard";
import ChecklistReview from "./ChecklistReview";
import AgentReview from "./AgentReview";
import WorkingView from "./WorkingView";
import * as builder from "../../lib/api/builder";
import * as agentRuns from "../../lib/api/agentRuns";
import { getCachedEmail } from "../../lib/api/session";
import { ApiError } from "../../lib/api/client";
import type { AgentDefinition, Checklist } from "../../lib/api/types";

type Phase = "compose" | "clarifying" | "checklist" | "agent-review" | "running";

export default function HireWorkspaceClient() {
  const name = useMemo(() => getCachedEmail()?.split("@")[0] ?? "there", []);

  const [phase, setPhase] = useState<Phase>("compose");
  const [brief, setBrief] = useState("");
  const [checklistId, setChecklistId] = useState<string | null>(null);
  const [pendingQuestions, setPendingQuestions] = useState<string[]>([]);
  const [checklist, setChecklist] = useState<Checklist | null>(null);
  const [estimatedTotalCents, setEstimatedTotalCents] = useState<number | null>(null);
  const [agentDefinition, setAgentDefinition] = useState<AgentDefinition | null>(null);
  const [runId, setRunId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setPhase("compose");
    setBrief("");
    setChecklistId(null);
    setPendingQuestions([]);
    setChecklist(null);
    setEstimatedTotalCents(null);
    setAgentDefinition(null);
    setRunId(null);
    setError("");
  };

  const applyBuilder1Response = (res: Awaited<ReturnType<typeof builder.submitGoal>>) => {
    setChecklistId(res.id);
    if (res.status === "ready" && res.checklist) {
      setChecklist(res.checklist);
      setEstimatedTotalCents(res.estimatedTotalCents);
      setPhase("checklist");
    } else {
      setPendingQuestions(res.pendingQuestions ?? []);
      setPhase("clarifying");
    }
  };

  const handleBriefSubmit = async (text: string) => {
    setBrief(text);
    setError("");
    setSubmitting(true);
    try {
      const res = await builder.submitGoal(text);
      applyBuilder1Response(res);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong — try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleAnswer = async (answers: { question: string; answer: string }[]) => {
    if (!checklistId) return;
    setError("");
    setSubmitting(true);
    try {
      const res = await builder.answerQuestions(checklistId, answers);
      applyBuilder1Response(res);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong — try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBuildAgent = async () => {
    if (!checklistId) return;
    setError("");
    setSubmitting(true);
    try {
      const agent = await builder.buildAgent(checklistId);
      setAgentDefinition(agent);
      setPhase("agent-review");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong — try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleStartRun = async () => {
    if (!agentDefinition) return;
    setError("");
    setSubmitting(true);
    try {
      const run = await agentRuns.startRun(agentDefinition.id);
      setRunId(run.id);
      setPhase("running");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong — try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (phase === "compose") {
    return (
      <div className="flex-1 flex flex-col">
        <ComposeStep name={name} onSubmit={handleBriefSubmit} submitting={submitting} />
        {error && <div className="text-[11.5px] text-red-500 text-center pb-4">{error}</div>}
      </div>
    );
  }

  if (phase === "clarifying") {
    return (
      <div className="flex-1 flex flex-col">
        <QuestionCard
          brief={brief}
          questions={pendingQuestions}
          onAnswer={handleAnswer}
          onStop={reset}
          submitting={submitting}
        />
        {error && <div className="text-[11.5px] text-red-500 text-center pb-4">{error}</div>}
      </div>
    );
  }

  if (phase === "checklist" && checklist) {
    return (
      <div className="flex-1 flex flex-col">
        <ChecklistReview
          checklist={checklist}
          estimatedTotalCents={estimatedTotalCents}
          onConfirm={handleBuildAgent}
          onStop={reset}
          submitting={submitting}
        />
        {error && <div className="text-[11.5px] text-red-500 text-center pb-4">{error}</div>}
      </div>
    );
  }

  if (phase === "agent-review" && agentDefinition) {
    return (
      <div className="flex-1 flex flex-col">
        <AgentReview agent={agentDefinition} onStart={handleStartRun} onStop={reset} submitting={submitting} />
        {error && <div className="text-[11.5px] text-red-500 text-center pb-4">{error}</div>}
      </div>
    );
  }

  if (phase === "running" && runId) {
    return <WorkingView title={brief.slice(0, 60)} brief={brief} runId={runId} onNewTask={reset} />;
  }

  return null;
}
