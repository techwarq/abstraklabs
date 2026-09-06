import { apiFetch } from "./client";
import type { AgentDefinition, Builder1Response } from "./types";

export function submitGoal(goal: string): Promise<Builder1Response> {
  return apiFetch<Builder1Response>("/api/builder1", {
    method: "POST",
    body: JSON.stringify({ goal }),
  });
}

export function getChecklist(id: string): Promise<Builder1Response> {
  return apiFetch<Builder1Response>(`/api/builder1/${id}`);
}

export function answerQuestions(
  id: string,
  answers: { question: string; answer: string }[]
): Promise<Builder1Response> {
  return apiFetch<Builder1Response>(`/api/builder1/${id}/answer`, {
    method: "POST",
    body: JSON.stringify({ answers }),
  });
}

export function buildAgent(checklistId: string): Promise<AgentDefinition> {
  return apiFetch<AgentDefinition>("/api/builder2", {
    method: "POST",
    body: JSON.stringify({ checklistId }),
  });
}
