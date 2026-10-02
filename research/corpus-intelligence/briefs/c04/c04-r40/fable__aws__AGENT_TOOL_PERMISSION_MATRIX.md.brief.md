# docs/fable/aws/AGENT_TOOL_PERMISSION_MATRIX.md
## What it is (1-2 sentences)
A governance table defining allowed vs. prohibited tools, data access, write/deploy access, spend authority, memory policy, human approval gates, and rollback paths for 10 named agent roles (JARVIS/CIO, TAL, SCOUT, Legal/source-risk sentinel, Calibration auditor, Market forensic agent, Content/briefing agent, Partner-demo agent, Revenue/pricing agent, GitHub triage agent). Dated 2026-07-03. Hard default: no agent can deploy, spend, publish, scrape restricted sources, store secrets in memory, or claim model edge without measured evidence.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas or numeric thresholds. It is a policy matrix, not a quantitative method.

## Data sources named
"evidence docs and local reports", "source metadata only", "approved fixtures and reports", "rights docs", "approved prediction/outcome windows", "fixture/approved odds only", "evidence summaries", "synthetic or approved aggregate data", "cost/pricing docs", "docs and git status". No live external data sources.

## Findings (numbers and facts, not vibes)
- 10 agent roles covered; every row has an explicit rollback path.
- Zero deploy access across all 10 roles; zero spend authority across all 10 roles.
- SCOUT (model/picks) may read approved fixtures/reports and write experiment logs only; prohibited from model deploy and betting automation; human gate: owner for model runtime.
- Calibration auditor is prohibited from production model promotion; human gate: owner for promotion; rollback: keep previous model version.
- Market forensic agent may only use fixture/approved odds; prohibited from paid odds/live market calls without approval.
- Content/briefing agent may only draft (never publish) and may not make unsupported claims.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings: OTHER (infra governance; no sports content).

## Engine-actionable? (yes/no + one-line what)
No — it is internal org/governance policy, not engine modeling material. (INFERENCE: the SCOUT/calibration/market-forensic constraints confirm the repo's hard separation between prediction research and any live betting automation, which is a compliance boundary, not an engine feature.)
