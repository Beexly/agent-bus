# commercial/COMMERCIAL_EXECUTION_LEDGER.md

## What it is (1-2 sentences)
A dated (2026-07-06, with a 2026-07-05 update section) commercial work ledger for the Galaxy Sports Edge web app: a table of work items with status/evidence/next-gate, plus a verification contract and a long update log of shipped shadow-mode commercial, media-revenue, API, AWS, and proprietary-metric slices. Almost nothing is live — the vast majority is "complete" in shadow/local-only form behind owner-gates.

## Key metrics/methods (formulas where given, else "not specified")
No statistical formulas are given in this file. Named governed SHADOW metrics (each with a birth certificate, tests, metric bible entry at `docs/math/GSE_PROPRIETARY_METRIC_BIBLE.md`):
- YAC Creation (`yac-creation-gse`), Rush Environment Index (`rush-environment-index`), Expected Rush Yards (`expected-rush-yards-gse`), Rush Over Expected (`rush-over-expected-gse`) — built on "expected-residual doctrine"; receiver/rusher residual rollups via `buildMetricResidualRollups` (play-level residuals + player-season summaries).
- Stale Line Risk Score (`packages/prediction-engine/src/metrics/market/stale-line-risk-score.ts`).
- QB Burden Index (`packages/prediction-engine/src/metrics/passing/qb-burden-index.ts`) — explicitly NOT quarterback quality, win probability, confidence, or pick actionability; exposes public drivers only, keeps protected weights/proxy transforms/source-posture scaling private.
- Role Volatility Index (`packages/prediction-engine/src/metrics/role/role-volatility-index.ts`) — not player quality; stale usage and blocked source-policy posture disable role-signal use.
- Calibration Integrity Grade (`.../metrics/calibration/calibration-integrity-grade.ts`).
- Drift Pressure Index (`.../metrics/calibration/drift-pressure-index.ts`, 224 lines) — returns pressure + downstream veto recommendation.
- Conformal Uncertainty Width (`.../metrics/calibration/conformal-uncertainty-width.ts`, 279 lines) — wraps rolling Mondrian conformal interval reports, returns width/coverage pressure; blocks narrow under-covering intervals as unsafe evidence.
- No-Bet Pressure (`.../metrics/decision/no-bet-pressure.ts`) — reuses `computeNoBetStrength()`, keeps `probability: null`.
- Playable Window Score (`.../metrics/decision/playable-window-score.ts`) — window closes on stale/blocked market signals, blocked source-policy posture, high no-bet pressure, drift pressure, or calibration debt.
- Portfolio Fit Score (`.../metrics/decision/portfolio-fit-score.ts`).
- Market Mirage Score (`.../metrics/market/market-mirage-score.ts`) — market-integrity metric; stale/blocked market signals block market interpretation.
Supporting infra named: metric evidence-card generators (`generateMetricModelCard`, `generateMetricDriftCard`), metric source-policy generator from registry-shaped fixtures aligned to the canonical web source-rights registry, package-owned payload-envelope filtering (`filterProprietaryMetricPayloadEnvelope`), `filterApiV1MetricPayloadFields`, idempotency replay simulation (duplicate successful requests return the stored envelope without a second quota debit; denied requests do not create reusable success records), metric historical distribution/drift adapters (CIG/PFS/DPI/CUW), metric historical validation adapter (NBP; RVI/PWS/MMS), metric validation split fixtures (PASS/WATCH/FAIL_CLOSED outcomes), composed metric payload-envelope fixtures with safe/unsafe fixture coverage (safe = derived scores, bands, summaries, confidence meaning, public drivers; unsafe = protected weights, raw source values, provider IDs, unsupported probability claims, uncleared fallback source fields), and a non-executable API v1 live-route promotion packet requiring 10 review gates (owner approval, durable persistence, route exposure, abuse-response, payload-envelope consumption, OpenAPI/security, rate-limit policy, rollback plan, boundary exception, raw-key absence).

## Data sources named
- `docs/media/*` (media revenue docs), `apps/web/lib/media-revenue/*` (first-month content queue fixtures: 90 local content drafts, 30 manual partner-outreach batches, 300 outreach targets), `apps/web/lib/revenue/*`, `docs/aws/*` + `infra/aws-shadow/*` (local-only AWS compatibility indexes), `docs/gse/NO_BET_GOVERNOR_METHODOLOGY.md`, `docs/math/GSE_PROPRIETARY_METRIC_BIBLE.md`, `docs/math/GSE_SHADOW_METRIC_EVIDENCE_REPORTS.md`, `docs/api/API_V1_LIVE_ROUTE_PROMOTION_PACKET.md`, `docs/api/API_V1_SHADOW_ROUTE_REPLAY.md`, `docs/api/API_V1_ABUSE_RESPONSE_FIXTURES.md`, `docs/ops/LOCAL_REVIEW_QUEUE_PERSISTENCE_SIMULATOR.md`, `docs/ops/LOCAL_REVIEW_QUEUE_BLOCKER_REPORT.md`, `docs/aws/AWS_PUBLIC_CASE_STUDY_ROUTE.md`, `docs/media/FIRST_MONTH_CONTENT_QUEUE_FIXTURES.md`, `docs/media/FIRST_MONTH_REVIEW_QUEUE_EXPORT.md`. No external commercial data providers named.

## Findings (numbers and facts, not vibes)
- Ledger table has 38 work-item rows. Items explicitly "not live": partner/offer live registry, affiliate links, AWS live resources (local-only), and the B2B Evidence API is in shadow mode (promotion packet blocked until durable persistence, route exposure, abuse-response, payload-envelope, OpenAPI/security, rate-limit, rollback, boundary, and raw-key evidence are reviewed).
- Safety guardrails complete: `commercial-copy-scan`, `no-unsupported-performance-claims`, `no-raw-ngs-export`, `partner-offer-compliance-scan`, `api-payload-rights-scan`, `openapi-security-scan`, pricing copy hardening.
- Guardrail behavior verified in log: first no-bet-governor test failed because high modeled edge still produced `PLAY` under calibration drift and calibration debt; policy cap now prevents PLAY/LEAN when probability claims are unearned and hard-passes DRIFTING/BLOCKED calibration.
- Six commercial routes passed source-level launch safety tests and rendered HTTP 200 in desktop/mobile Playwright screenshots under a local Next dev server; no production preview opened, no live provider wired.
- Test-count trajectory recorded across the build: e.g. all-workspaces tests grew from 653 files / 8152 tests (AWS case-study route entry) to 669 files / 8235 tests (DPI entry) and 670 files / 8239 tests (CUW entry); prediction-engine went from 93 files / 817 tests (SLRS) to 107 files / 885 tests (CUW); app full tests 538 files / 7111 tests.
- Verification contract for every commercial slice: files changed, tests run, guardrails run, claim-safety boundary, any live integration intentionally not added.
- Explicit claim-safety boundary: no affiliate links, sponsor claims, traffic claims, revenue claims, win-rate claims, ROI claims, or live partner integrations added; no pick publication, probability claim activation, model-version promotion, pricing, betting, schema, route exposure, live API, paid service, or production gate flipped. All locks (publish/send/route/live/affiliate/sponsor/database) remained closed throughout.
- Next overall gate stated: owner-reviewed API route design remains blocked; next safe local work is Source Trust Score, source-policy receipts for future metric families, or owner-reviewed production preview QA.
- INFERENCE: this ledger documents a deliberately frozen commercial posture — everything commercial was built shadow/local-only with claim-safety fencing, pending owner decisions that (per this file) had not yet been made.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB Burden Index shadows a QB passing-context metric exposing only public drivers — TRUST-SIGNAL (metric designed so calibration/governance claims stay private), QB-BEHAVIOR (passing-context decomposition).
- YAC Creation, Rush Environment Index, Expected Rush Yards, Rush Over Expected on expected-residual doctrine with play-level residual rollups — OTHER (rushing-metric architecture worth mining for analogous passing residual models).
- Stale Line Risk Score: stale market snapshots hard-block market-signal use — TRUST-SIGNAL (market-integrity gating pattern).
- Conformal Uncertainty Width wraps rolling Mondrian conformal interval reports — OTHER (uncertainty-quantification method reusable for projection intervals).
- Verification contract + 10-gate promotion packet + all-locks-closed posture — OTHER (governance pattern; mirrors the public/private fence doctrine).

## Engine-actionable? (yes/no + one-line what)
yes — mine the four-metric YAC/Rush shadow stack and QBI/REI residual-rollup architecture as templates for engine metric design, and adopt the evidence-card/drift-card/birth-certificate discipline for every engine metric.
