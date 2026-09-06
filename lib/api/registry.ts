// Mirrors GET /api/registry/tools and /api/registry/skills — small, stable
// catalog, hardcoded rather than fetched on every load.
export const TOOL_LABELS: Record<string, string> = {
  web_search: "Web Search",
  http_fetch: "HTTP Fetch",
  web_scrape: "Web Scrape",
  email_send: "Send Email",
  pdf_create: "Create PDF",
  composio_action: "Composio Action",
  browser_automate: "Browser Automate",
};

export const SKILL_LABELS: Record<string, string> = {
  react_loop: "ReAct Loop",
  planning: "Planning",
  checkpointing: "Checkpointing",
  human_approval_gate: "Human Approval Gate",
};

export function toolLabel(id: string): string {
  return TOOL_LABELS[id] ?? id;
}

export function skillLabel(id: string): string {
  return SKILL_LABELS[id] ?? id;
}
