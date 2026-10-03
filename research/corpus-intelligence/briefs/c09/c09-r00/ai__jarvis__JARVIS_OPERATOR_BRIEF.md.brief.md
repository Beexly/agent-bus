# ai/jarvis/JARVIS_OPERATOR_BRIEF.md
## What it is (1-2 sentences)
Operator brief (2026-06-11) for Garrett on Jarvis's capabilities: 18 deterministic answer intents, a wiring score of 38/100 ("Early Stage"), and the structural owner-approval gates. Zero capabilities autonomous — intentionally.
## Key metrics/methods (formulas where given, else "not specified")
- Wiring score: 38/100 (status-weighted across 16 capabilities; ACTIVE=4 … NOT_WIRED=0).
- 8 of 16 capabilities exist in working form (5 DRAFT_ONLY + 3 MANUAL); 8 not functional (3 DESIGNED, 5 NOT_WIRED).
- Operating loop: SENSE/INTERPRET/DECIDE/EXPLAIN wired; ACT_SAFELY, AUDIT partial; REMEMBER, IMPROVE not wired.
- Agent council: 15 seats (6 cockpit agents DRAFT_ONLY, 3 MANUAL roles, 6 unwired); `externalActions: "NONE"`, `canExecute: false` everywhere.
- Performance display gate: win rate shown only when gate open AND canonical settled sample meets minimum (default 25); until then `actualWinRate` is null. 70% is a target, never a claim.
## Data sources named
None external — answers derive from OwnerSummary, capability registry, agent council, memory protocol, `/cockpit` surfaces.
## Findings (numbers and facts, not vibes)
- Deterministic build-order heuristic: MANUAL first, then DESIGNED, then NOT_WIRED; top items: (1) Settlement & Results (MANUAL, HIGH) — wire external score source for auto-settlement; (2) Performance Calibration (MANUAL, HIGH) — accumulate 25 canonical settled picks; (3) AI Ops/token discipline; (4) Revenue & Subscriptions — BOBBY churn/upgrade intelligence; (5) Market/Line Intelligence — build CLV tracking (open line, close line, result); (6) Agent Orchestration via BullMQ.
- Structural owner gates: PUBLIC_PICKS_ENABLED; PERFORMANCE_STATS_ENABLED + sample threshold; safety warnings only owner clears; all content publishing owner-only; settlement verification, pricing changes, new tool connections = owner decisions.
- Red lines: drafts only; no fake telemetry (AI Ops reports "not instrumented" until instrumented; no CLV figures without real instrumentation).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (ops): CLV tracking (open line, close line, result) named as the Market/Line Intelligence build item — relevant to engine calibration but purely internal state as of 2026-06-11.
## Engine-actionable? (yes/no + one-line what)
No — historical ops snapshot; the only carry-forward is the standing CLV-tracking intent, already internal doctrine.
