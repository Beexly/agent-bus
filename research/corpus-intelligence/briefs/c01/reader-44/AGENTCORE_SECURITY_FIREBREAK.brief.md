# fable/aws/AGENTCORE_SECURITY_FIREBREAK.md

## What it is (1-2 sentences)
Default-deny security firebreak governing any future AgentCore use: global rules, per-agent tier caps, the permission source of truth, and rollback steps.

## Key metrics/methods (formulas where given, else "not specified")
- Global rules: no deploy permission, no paid-resource permission, no external-source automation, no publishing authority, no restricted-source retrieval, no secret-reading authority, no production write authority by default; no secrets in memory; no model-edge claims without measured evidence; all tool use logged; owner approval required for any write outside docs/evidence lanes. No formulas.
- Agent tiers: JARVIS/CIO tiers 0–1 until owner approval; TAL/data-reliability 0–1 (source changes need legal/source-owner review); SCOUT/model-picks 0–1 (model runtime needs owner approval); legal/source-risk sentinel tier 0 only; calibration auditor 0–1 (promotion needs owner approval); market forensic agent 0–1 (live mode disabled by default); content/briefing agent tier 0 only (publishing needs owner approval); partner-demo agent 0–1; revenue/pricing agent tier 0 only (billing changes prohibited); GitHub triage agent tier 0 only unless GitHub auth and owner approval exist.
- Rollback: disable env gate, revoke tool token, remove route/job binding, preserve audit log.

## Data sources named
- Permission source of truth: `docs/fable/aws/AGENT_TOOL_PERMISSION_MATRIX.md`, `docs/fable/aws/AGENT_EVALUATION_RUBRICS.md`, `apps/web/lib/fable/aws-decision-engine.ts`. No data sources named.

## Findings (numbers and facts, not vibes)
- Everything agentic is default-deny with tier caps; nothing in this file authorizes spend, deployment, publishing, or data movement.
- "No model-edge claims without measured evidence" is the stated rule — directly relevant to how engine claims must be treated before promotion (echoes the WIRE-FIRST doctrine and audit-receipt standard).
- Calibration auditor requires owner approval for promotion; market-forensic agent's live mode remains disabled by default.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pure governance; no QB, coaching, OL, scheme, or trust-signal content → tag: OTHER. Its one engine-adjacent rule ("no model-edge claims without measured evidence") is a process constraint, not intelligence.

## Engine-actionable? (yes/no + one-line what)
No — governance-only; useful only as a pointer to where model-edge claims require measured evidence before any engine promotion.
