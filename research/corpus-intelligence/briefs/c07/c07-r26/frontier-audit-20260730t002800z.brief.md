# ops/audit/FRONTIER_AUDIT_20260730T002800Z.md
## What it is (1-2 sentences)
Re-audit (2026-07-30, branch `feat/frontier-a-plus-audit-fix` vs main at `548480a`) of the Sports frontier workspace against a 12-domain product-law/trust-gate matrix, scored self A++ after merging the audited branch.

## Key metrics/methods (formulas where given, else "not specified")
- Method-tag honesty: `uniformMethodTags` requires every aggregated line tagged before continuity claims propagate; `method-continuity.ts` enforces sameMethodOrRefuse; ClosingArchive persists methodTag/modelVersion and re-emits; `computeContinuousClvObservation` — continuous CLV cannot claim across untagged/mixed methods.
- Method tags stamped: gamma, kalshi, model_prior, odds two-way, demo; raw-implied left untagged; `shin_devig_v1` added to the `FairMethodTag` union.
- Cron auth: **18/18** `/api/cron/*` routes gated by dual-secret `cronAuthError` (401 unauthorized).
- Tests: `method-tag-honesty.test.ts` (10 cases); package 51/51 green; CI jobs: `guard:ai-council` workspace + lint.

## Data sources named
None external (audit of repo state and CI).

## Findings (numbers and facts, not vibes)
- All 12 domains SHIPPED (1.1 product law/trust-gate, 1.1 AI Council, 1.2 cron dual-secret + all cron auth, 1.3 method-tag density/continuity/continuous-CLV/fair-method-shin, 1.4 selective-gate/prefire/LIVE_BOARD-off honesty, 1.5 feed/Stripe handlers, 1.6 rights export, 1.7 crypto honesty, 1.8 board honest-empty, 1.9 CI, 1.10 partner sportsbook CPA, 1.11 credentials/open-ledger, 1.12 optical CV/HEOS/Phase C parked); optical CV / HEOS / Phase C remain founder-gated (parked unless founder says YES).
- Gaps fixed in this loop: CI workspace root + unused-vi lint, aggregate partial-tag leak, ClosingArchive tag persistence + continuous CLV path, Kalshi/odds/demo tag stamping, shin devig in fair-method union.
- Remaining founder items: production CRON_SECRET / Neon / Stripe / Upstash secrets, LIVE_BOARD / PUBLISH_LEDGER reveal decisions, Phase C paid odds, #226 HEOS.
- World-class bar checklist: public handlers refuse-default; board never lies under LIVE_BOARD off; FIRE preflight refuses cleanly; no silent TODO on P0/P1 critical path; audit files committed.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Continuous-CLV measurement discipline with method-tag provenance (no claims across untagged/mixed methods) — **TRUST-SIGNAL**
- sameMethodOrRefuse continuity enforcement and refuse-default public handlers — **TRUST-SIGNAL**
- shin devig (`shin_devig_v1`) as a tagged fair-probability method — **SCHEME** (devig method inventory)
- Cron auth, CI gates, rights export, parked CV lanes — **OTHER**

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the method-tag-continuity + continuous-CLV measurement discipline (persist method tags with every line/projection; never claim performance across mixed/untagged methods) and inventory `shin_devig_v1` as a devig candidate.
