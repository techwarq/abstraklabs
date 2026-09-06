import { apiFetch } from "./client";
import type { AgentRun } from "./types";

export function startRun(agentId: string): Promise<{ id: string; status: string }> {
  return apiFetch<{ id: string; status: string }>("/api/agent-runs", {
    method: "POST",
    body: JSON.stringify({ agentId }),
  });
}

export function getRun(runId: string): Promise<AgentRun> {
  return apiFetch<AgentRun>(`/api/agent-runs/${runId}`);
}

export function approveRun(runId: string, iteration: number, approved: boolean): Promise<AgentRun> {
  return apiFetch<AgentRun>(`/api/agent-runs/${runId}/approve`, {
    method: "POST",
    body: JSON.stringify({ iteration, approved }),
  });
}

export function cancelRun(runId: string): Promise<AgentRun> {
  return apiFetch<AgentRun>(`/api/agent-runs/${runId}/cancel`, {
    method: "POST",
  });
}
