# docs/ops/archive/root-museum/CODEX_PHASE_4_BRIEF.md
## What it is (1-2 sentences)
Codex handoff brief (dated 2026-05-22) for Phase 4 of the Galaxy Sports Edge master plan: eight major deliverables turning the platform from "transparent picks service" into "tool the user becomes sharper with" — calibration training, Edge Lab tool expansion, GitHub Issues for the model, Model Court Q&A, Chrome extension, public stats CSVs, reproducibility receipts, affiliate deeplinks — with a 12-condition verification gate.
## Key metrics/methods (formulas where given, else "not specified")
- Model Court cost/latency targets: under $0.05/query, under 3s p50, under 6s p95; cache per (gameId, questionHash) 7 days; quotas FREE 3/day, PRO 30/day, ELITE unlimited.
- Calibration training: slider 50%-95% default 50%; weekly insight job Saturdays for users with 20+ estimates/week; per-band/per-sport/per-pick-kind calibration deltas; opt-IN default.
- Gate conditions: Model Court citations on ≥80% of FREE-tier queries; Edge Lab all 9 tools functional with URL-hashable state; ≥5 model issues filed and triaged; calibration training ≥10 active opted-in users with weekly insights.
## Data sources named
None new — builds on Phase 3 surfaces (canonical pick history, Loss Autopsy schema, Model Journal, pre-mortem pipeline, public ledger).
## Findings (numbers and facts, not vibes)
- Phase 4 scoped at 4-6 weeks, 10 PR splits (PR-4.1 through PR-4.10).
- Step 1 is the single biggest content-policy decision: whether `PERFORMANCE_STATS_ENABLED` flips false→true (owner-only, DEC-OPEN-E).
- Phase 3 prerequisites listed (11 verification-gate conditions, read-only Game Rooms, Studio v0, bots in production, 4+ Model Journal entries, 10+ loss autopsies, pre-mortem pipeline); escalate to stuck-queue if untrue.
- Technical conventions: no new LLM vendors (Claude API only, DEC-020); compliance scanner on every AI-generated surface output; privacy default opt-IN.
- Explicit non-scope: anti-Galaxy model, programmable DSL, B2B widgets, live war room, cross-sport correlation, trust toolkit packaging, native mobile.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: trust-gate flip decision for PERFORMANCE_STATS_ENABLED; loss leaderboard as anti-marketing; "fade me" badge publishing weakest factor categories; compliance scanner on all AI surfaces; opt-IN privacy defaults.
- OTHER: personal calibration training as a user-facing trust surface; Kelly sizer / hedge / arbitrage / CLV tracker tool conventions — FREE except backtesting + bankroll persistence, never call Galaxy's published confidence as a Kelly input, no auto-execution.
## Engine-actionable? (yes/no + one-line what)
No — archived Phase 4 product-plan handoff; the user-facing trust surfaces (ledger flip, Model Court quotas, Edge Lab conventions) are standing context, not engine math.
