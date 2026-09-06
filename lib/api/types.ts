export type Checklist = {
  status: string;
  inputs: string[];
  expected_output: string;
  recommended_skills: string[];
  required_tools: string[];
  assumptions: string[];
  risk_level: string;
  estimated_hours: number;
};

export type Builder1Response = {
  id: string;
  status: "awaiting_clarification" | "ready" | string;
  goalText: string;
  pendingQuestions?: string[];
  checklist: Checklist | null;
  riskLevel: string | null;
  estimatedHours: number | null;
  estimatedTotalCents: number | null;
};

export type AgentDefinition = {
  id: string;
  name: string;
  status: string;
  version: number;
  definition: {
    schema_version: string;
    goal: string;
    system_instructions: string;
    skills: { id: string; version: string; config?: Record<string, unknown> }[];
    tools: { id: string; version: string; config?: Record<string, unknown> }[];
    memory: { scopes: string[]; retention: string; max_items: number };
    policy: {
      max_iterations: number;
      max_runtime_seconds: number;
      max_budget_cents: number;
      midpoint_progress_ratio: number;
      approval_gates: string[];
      allowed_risk_level: string;
    };
    metadata: Record<string, unknown>;
  };
  validatedAt: string;
};

export type RunStep = {
  seq: number;
  type: "tool_call_started" | "tool_call_result" | "completed" | "error" | "approval_requested" | string;
  payload: Record<string, unknown>;
  createdAt: string;
};

export type AgentRun = {
  id: string;
  status: "queued" | "running" | "waiting_for_user" | "completed" | "failed" | "cancelled" | string;
  progressCurrent: number;
  progressTotal: number;
  iterationsUsed: number;
  approvedBudgetCents: number;
  actualCostCents: number | null;
  failureReason: string | null;
  resultSummary: string | null;
  steps: RunStep[];
};
