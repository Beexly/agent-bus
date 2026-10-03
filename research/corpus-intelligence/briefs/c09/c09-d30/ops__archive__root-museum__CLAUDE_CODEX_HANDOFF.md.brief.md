# ops/archive/root-museum/CLAUDE_CODEX_HANDOFF.md
## What it is (1-2 sentences)
Read-only 2026-06-01 alignment synthesis reconciling ~15 overlapping Claude Code/Codex handoff docs against the verified repo state, labeling every claim `verified`/`inferred`/`unverified`/`conflict` and deduplicating open items by priority.
## Key metrics/methods (formulas where given, else "not specified")
No formulas; evidence-label taxonomy only (verified/inferred/unverified/conflict). Cites test counts: apps/web ~1,861, engine 213, ingestion 17, types 28 tests green; typecheck green across 9 workspaces; 48 API routes, 60 pages, 6 packages, 3 workers. Guardrail trust-gate ran clean over 269–271 files. 13 npm vulns (1 critical, 4 high). 15 required Vercel env vars.
## Data sources named
`apps/web/lib/brand.ts` (GSE naming), `_logs/DECISIONS.md`, `REPO_INTELLIGENCE_REPORT.md`, `docs/ops/decision-log.md` (46 KB), `docs/ops/GO_LIVE_RUNBOOK.md`, `docs/product/*-spec.md`, handoff.md, PHASE_9_REPORT.md, V6_HANDOFF.md, CODEX_FINAL*/CODEX_HANDOFF*.md, LAUNCH_TONIGHT.md, `apps/web/lib/pricing/pricing-phases.ts`, guardrail scripts trust-gate/model-freeze/draft-only.
## Findings (numbers and facts, not vibes)
- Core platform verified green: typecheck across 9 workspaces, full test suite green (apps/web ~1,861 · engine 213 · ingestion 17 · types 28); apps/web tests run against a stub Prisma (no live DB coverage).
- Kelly + Poisson engine helpers (`packages/prediction-engine/src/kelly.ts`, `poisson.ts`) exist and are exported but NOT wired into scoring; brand-safety linter reverted a Kelly stake UI.
- Reconciled pricing conflict: old docs say Pro $19/mo / Elite $49/mo; verified code now prices Founding ladder Pro $14.99/$99 · Elite $24.99/$179 (`pricing-phases.ts`, git 87f86d2); all $19/$49 references stale.
- Brand-name conflict verified: code + Codex docs ship "Galaxy Sports Edge/GSE/galaxysportsedge.com"; CLAUDE.md and `_logs/DECISIONS.md` say "GSN / Galaxy Sports Network" — same product, two names; GSE is shipped reality.
- Deploy/live status unconfirmed: two Codex docs claim production is live at galaxysportsedge.com, but no live infra was reachable; assume NOT confirmed-live.
- P0 blockers: Anthropic API key returns HTTP 401 (needs rotation); Neon/Upstash provisioning disputed (one doc says done, others say pending); `db:push` + one real ingestion cycle never confirmed; away-favored SPREAD settlement bug fixed in code but historical DB rows still mis-graded.
- Calibration semantics open: confidence currently treated as P(win); market-neutral `discrimination` metric added but a distinct modeled win-probability vs confidence UX score is still human-gated open.
- Referenced master plan `docs/galaxy-sports-edge-master-action-plan.md` verified MISSING from the repo though phase briefs cite it as source-of-truth.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: engine-ops audit trail (verified vs claimed state), pricing reconciliation data, calibration honesty posture (win on provable honesty: server-side paywall, immutable signal snapshots, published losses, no fabricated stats).
## Engine-actionable? (yes/no + one-line what)
Yes — records the calibrated/honest engine posture constraints (server-side gates, no fabricated stats) and the confidence≠P(win) open calibration gap that any QB/pick probability work must respect.
