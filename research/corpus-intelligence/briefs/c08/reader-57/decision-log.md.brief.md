# docs/ops/archive/dated/decision-log.md
## What it is (1-2 sentences)
An append-only operating log (~60 entries, 2026-05-22 through 2026-05-23) recording autonomous build decisions for Galaxy Sports Edge Phase 2/3/4 work: board APIs, gate decisions, correlation engine, Galaxy Studio, Model Journal, Model Court, bot outbox, Claude API budgets, synthetic monitoring, eval contracts, and compliance gates.

## Key metrics/methods (formulas where given, else "not specified")
- Verification numbers: Phase 3 Game Room slice landed 120 files / 1,456 tests green (lint, typecheck, build, full web suite).
- Synthetic monitoring: `prod-probe.mjs` with `PROD_PROBE_JSON=1` structured output; runner writes `.synthetic-monitoring/latest.json` + `runs/` history (git-ignored); trust-gate probes validate the bootstrap 503 envelope shape instead of treating all 503s as failures; local build-size budget 2 MB (`SYNTHETIC_BUILD_SIZE_BUDGET_BYTES`).
- Claude API cost policy: per-surface monthly budgets (`ClaudeApiCallRecord` + `ClaudeApiBudget`, seeded idempotently by migration), UTC current-month spend loader, red-threshold refusal before the external call, 24-hour operator override with decision-log reason via admin-only `/api/cockpit/api-costs/override`; direct-call guardrail `scripts/guardrails/claude-api-usage.mjs` rejects new direct Anthropic message calls outside the shared `apps/web/lib/claude-api/messages.ts` client.
- Methods named (not specified how): correlation engine typed query schema with sample-size rules; cross-sport correlation rows loaded only from published, non-bootstrap, settled picks with non-bootstrap `PickSignalSnapshot.eligibleForLearning=true`; gate decisions in a separate append-only `GateDecision` table (not nullable columns on `Pick` — many evaluated games never become picks; explicit `isBootstrap` flag).
- Model Journal: weekly seven-section draft structure, thin-week scope note, deterministic evidence bundle (settled canonical picks + loss autopsies, bootstrap/seed excluded), compliance scanner `scanModelJournalMarkdown()` with first-person confidence block.
- Bot outbox: draft-only planners with stable idempotency keys, entitlement + bootstrap blocks, no external delivery; rendered drafts scanned for compliance before marked postable (a platform block converts the whole event to non-posting audit items); Twitter/X + Discord templates normalized against mojibake.
- Calibration training: weekly Claude insight with deterministic thin-week fallback; output policy validation — generated text cannot become betting advice, a CTA, a comparison to other users, or banned positioning; failures recorded with `POLICY_*` error kinds.

## Data sources named
- nflverse (implicitly via schedule features context — not in this file). This file names no sports data sources; it names operational surfaces: `/api/board/state`, `/api/calibration`, `/journal/rss.xml`, `/cockpit/synthetic-monitoring`, `/api/health/synthetic-monitoring`, `/api/cockpit/journal/week-data`, `/api/room/[gameId]/model-court`, Studio templates (Newsletter Block, TikTok/Reels Script, YouTube Title Ideas).

## Findings (numbers and facts, not vibes)
- All ~60 entries are build/ops decisions from a two-day autonomous sprint (2026-05-22/23); the log is product-infrastructure, not sports analytics — no model results, no edge numbers, no performance metrics anywhere.
- Recurring doctrine across entries: fail-closed defaults, budget gates before external API calls, draft-only before delivery, compliance scan before success recording, admin-only operational routes.
- `GateDecision` was deliberately made a separate append-only table related to Game/Pick with multiple evaluations per game allowed (rollover path documented: drop FKs/indexes, drop table, drop enum — no production table rewritten).
- No picks, probabilities, or calibration numbers appear in this file.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The fail-closed/compliance doctrine (scanner-before-success, draft-only outbox, admin-only overrides with decision-log reasons) is a reusable operational template for the engine's honesty surfaces.
- [TRUST-SIGNAL] Thin-week honesty rules (explicit thin-week scope notes, bootstrap-gated 503 envelopes, deterministic evidence bundles excluding bootstrap/seed) align with the engine's no-fabrication posture.
- [OTHER] No QB/coaching/OL/scheme content; this file is pure product-ops history.

## Engine-actionable? (yes/no + one-line what)
No — it is two-day product-build operations history with no sports-analytics content; the only portable takeaway is the fail-closed/doctrine pattern (draft-only, scanner-before-success, separate append-only gate-decision table) already captured from stronger sources.
