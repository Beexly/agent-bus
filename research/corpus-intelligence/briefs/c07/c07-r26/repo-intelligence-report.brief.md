# ops/archive/root-museum/REPO_INTELLIGENCE_REPORT.md
## What it is (1-2 sentences)
Deep intelligence audit (2026-06-01, branch `claude/trusting-ramanujan-mYK6E`) of the Beexly/Sports monorepo (Galaxy Sports Network prediction platform) under a strict Evidence Law (verified / inferred / recommended / unverified), covering the pick lifecycle, model register, odds integration, calibration semantics, model orchestration cost, compliance posture, and a 7-item risk register.

## Key metrics/methods (formulas where given, else "not specified")
- Scoring formula (`packages/prediction-engine/src/scoring.ts`): **consensus (max 30) + market depth (max 20) + edge (max 25) + volatility penalty (−15) + context (line movement, rest, schedule stress, H2H, venue form, cross-market, uncertainty) + flat +10 base, clamped 0–100**. Refuses below `MIN_PUBLISH_CONFIDENCE=50` or `MIN_BOOKMAKERS=2`. `MODEL_VERSION = "v5.0.0"` stamped on every pick.
- State machine: ingest odds → score → `GateDecision` (SCORING→PUBLISHED|GATED) → persist `Pick` (result=PENDING, `isBootstrap` per gate) → settle (worker) → record `PickSignalSnapshot` outcome → (if canonical+eligible) feed calibration.
- Calibration: `computeCalibration` buckets settled picks by confidence, computes observed-vs-expected win rate, delta, **Brier score**, emits review-only proposals at **n≥30 and |delta|≥0.12**; never mutates weights; `canApplyCalibrationAdjustments` hardcoded `false`.
- Core flaw (verified): calibration sets `expected = confidence/100`, but confidence is a 0–100 heuristic quality score, not a calibrated win probability — fine for moneyline, misleading for spread/total (priced ≈50%, confidence sits 65–90 → systemic false "overcalling", published publicly). Interim fix shipped: market-neutral `discrimination` metric (`improving | flat | inverted | insufficient-data`, high/low bucket win rates, spread, monotonicity); 6 new tests, calibration suite 52/52 green.
- Odds integration: `https://api.the-odds-api.com/v4`, region `us`, american odds; **7 sports × 3 markets** (h2h, spreads, totals); `FRESHNESS_THRESHOLD_MS = 1h`; `SourceCoverageReport` FRESH/AGING/STALE/MISSING/CONTRADICTORY; 15s timeout; quota headers `x-requests-remaining`/`x-requests-used`; exponential backoff + jitter honoring `Retry-After` on 429/5xx; `SourceSnapshot` stores raw provider payload + hash pre-normalization.

## Data sources named
- The Odds API (`api.the-odds-api.com/v4`) — sole odds provider (single-provider dependency flagged as a gap; recommended failover).
- `npm audit` output (13 vulns: 1 critical, 4 high; EOL deps eslint 8, glob 7, rimraf 3).

## Findings (numbers and facts, not vibes)
- Validation baseline: `npm install` exit 0 (593 pkgs); typecheck green across **9 workspaces** (strict, zero errors); tests green — apps/web **1,855** (run against a stub Prisma client — largest coverage blind spot), engine **197**, ingestion **17**, types **28**; surface: **48 API routes, 60 pages, 103 lib modules**, 3 workers, 6 packages.
- Settlement: `settle-picks` cron was a no-op — grading lived only in the long-running worker; addressed 2026-06-01 by extracting shared `settleSport()` into `@sports/ingestion-pipeline`, both worker and cron calling it; residual: "stale unsettled picks" alert still owed.
- Model orchestration: every Claude call goes through `apps/web/lib/claude-api/messages.ts` which hardcodes `claude-sonnet-4-6` (appears 15×); no Haiku/Opus tiering, no prompt caching; spend measured via `ClaudeApiCallRecord` + `ClaudeApiBudget` but not optimized.
- Compliance: `Promotion` model hard-gates public render on disclosure text + terms URL + responsible-gaming text + `status=ACTIVE` + `complianceStatus=APPROVED` + geo eligibility; "Risk free" banned; banned-phrase scan tests present. Gap: no documented legal review of the-odds-api data-licensing terms for commercial redistribution, no per-state operations matrix.
- Risk register R1–R7: R1 settlement SPOF (mitigated); R2 confidence-as-probability (trust); R3 stub-Prisma test blind spot; R4 npm vulns; R5 single provider + thin MIN_BOOKMAKERS=2; R6 Sonnet-only cost; R7 repo clutter (`_overnight_quarantine/`).
- Strengths to preserve: readiness/bootstrap-phase gating, immutable `PickSignalSnapshot`, server-side paywall, public loss-autopsy/journal surfaces, per-call cost ledger.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Confidence-as-heuristic vs. calibrated-win-probability semantics gap (published calibration) — **TRUST-SIGNAL**
- Immutable `PickSignalSnapshot` + bootstrap exclusion + human-gated calibration + server-side paywall — **TRUST-SIGNAL**
- Public accountability surfaces (loss autopsies, model journal) — **TRUST-SIGNAL**
- Scoring component weights (consensus 30 / depth 20 / edge 25 / volatility −15 / context / +10 base) and context factors (rest, schedule stress, H2H, venue form, line movement) — **SCHEME** (factor-weight inventory)
- Single-provider odds dependency, model-tiering cost waste, dependency vulns — **OTHER**

## Engine-actionable? (yes/no + one-line what)
Yes — persist a modeled win probability distinct from the heuristic confidence UX score, calibrate *that* with Brier (market-aware), and keep confidence as display/ranking score; also raise or penalize the MIN_BOOKMAKERS=2 thin-market floor.
