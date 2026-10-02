# docs/ai/jarvis/JARVIS_AGENT_COUNCIL.md
## What it is (1-2 sentences)
The governed roster for the Jarvis Agent Council (`apps/web/lib/jarvis/agent-council.ts`): 23 seats across 6 departments, each a role with charter, authority tier, escalation path, and routing rules — no seat autonomous, `externalActionsAllowed: false` on every seat, and the owner the only actor who can approve externally visible actions (status: LIVE IN CODE as of 2026-06-12).
## Key metrics/methods (formulas where given, else "not specified")
- Not specified (governance, not modeling). Structural facts: authority tiers 0–4 (0 = Read Only, 1 = Draft Only, 2 = Safe Internal Action manual, 3 = Approval Required reserved, 4 = Human Only/Owner); seat statuses DRAFT_ONLY / MANUAL / NOT_WIRED; 13 routing rules testable via `ROUTING_RULES`; 10 non-negotiable guardrails.
## Data sources named
- Code modules: `apps/web/lib/jarvis/agent-council.ts` (roster, authoritative), `routing-rules.ts` (13 rules), `ledger-types.ts` (handoff + subagent run ledger types), `capability-registry.ts`, `apps/web/lib/cockpit/agents.ts`, `apps/web/__tests__/jarvis-agent-council.test.ts`; cockpit UI at `/cockpit/agents`.
- Handoff ledger and subagent-run ledger are `not_connected` until a database migration is run — no entries simulated.
## Findings (numbers and facts, not vibes)
- 23 seats total: DRAFT_ONLY 6 (JARVIS, SCOUT, TAL, SARAH, AVA, BOBBY), MANUAL 3 (LEDGER, AUDIT, METER), NOT_WIRED 14; 6 seats correspond to registered cockpit agents and the Prisma `OperatorAgent` enum; 17 seats are designed roles human-run or not yet wired.
- AUDIT independence: AUDIT does not report to or receive review from SCOUT, DELTA, PRISM, or ASCEND — pick and metric builders are never the final judge of display safety.
- ASCEND is a standing subagent under PRISM: proposes GSE improvement experiments continuously; AUDIT reviews calibration impact; JARVIS escalates meaningful scoring changes to Owner.
- SCOUT subagent templates: injury-context, schedule-spot, odds-movement annotator, weather/context, team-news. TAL: schema-drift, ingestion-freshness, failed-test summarizer, adapter-health. AVA: newsletter-draft, blog-outline, short-form copy. GAUGE: claims-QA, layout-QA, number-consistency, broken-link. PRISM: metric-prototype, validation-check, feature-gap hunter, ASCEND template, stat-modeling.
- Routing rules include: `pick-research` → SCOUT → DELTA → TAL → JARVIS → Owner; `stat-rd` → PRISM → ASCEND → AUDIT → JARVIS → Owner; `settlement` → LEDGER → AUDIT → JARVIS; `public-content` → AVA → QUILL → GAUGE → JARVIS → Owner.
- Escalation: most seats → JARVIS (recommends, never decides) → OWNER; direct-owner-escalation seats: AUDIT, METER, RELAY, PILOT, CHAIN, FLARE, PULSE, MINT, QUILL.
- Implementation status: roster, departments, tiers, escalation arrays, ASCEND, subagent templates, routing module, ledger types, GUARDRAILS, cockpit UI all DONE; handoff ledger DB store, subagent run ledger DB store, and live agent handoff execution all NOT_WIRED.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- AUDIT independence (builders never judge their own calibration/display safety) → TRUST-SIGNAL
- ASCEND standing improvement-experiment loop gated by AUDIT review → TRUST-SIGNAL (governed model-improvement loop)
- SCOUT subagent templates (injury-context, weather/context, team-news, odds-movement) → OTHER (org design relevant to engine context feeds)
- Everything else (tiers, routing, escalation) → OTHER (governance)
## Engine-actionable? (yes/no + one-line what)
yes — PRISM/ASCEND + AUDIT is the standing experiment-and-review loop the engine improvement pipeline plugs into.
