# research/ip/GSE_METRIC_IP_LEDGER.md
## What it is (1-2 sentences)
2026-07-06 ledger of local NFL proprietary metric slices (birth certificates, shadow lifecycle, exposure posture) plus the test evidence run that keeps every metric SHADOW/INTERNAL/NOT_READY. Compatibility primitives live in `packages/prediction-engine/src/nfl/`; governed foundation metrics in `packages/prediction-engine/src/metrics/`.
## Key metrics/methods (formulas where given, else "not specified")
No formulas given. Doctrine: no number enters GSE unless grounded, testable, source-rights-clean, commercially useful, and able to explain drivers without exposing protected weights. Guardrails: every metric has a birth certificate; returns drivers + source-policy metadata; source policy fail-closes via `validateGseMetric`; validation methods explicit before review-ready; drift evaluated locally with PSI thresholds; private tracking outputs and unlicensed model outputs are forbidden inputs; metrics deterministic, pure TypeScript.
## Data sources named
None named as sources (metrics do not use live feeds; validation fixtures are synthetic/local).
## Findings (numbers and facts, not vibes)
- 11 implemented metric birth certificates, ALL status SHADOW: `gse-xcomp` (passing, score_band), `gse-receiver-difficulty` (receiving, grade_only), `gse-xyac` (receiving, score_band), `gse-rush-environment` (rushing, score_band), `gse-qb-burden` (passing, grade_only), `gse-role-volatility` (role, driver_only), `stale-line-risk-score` (market, score_band), `market-mirage-score` (market, score_band), `qb-burden-index` (passing, score_band), `role-volatility-index` (role, score_band), `playable-window-score` (decision, score_band).
- Evidence-card fixture coverage (2026-07-06): SLRS, QBI, RVI, PWS fixture cards preserve SHADOW lifecycle, INTERNAL API exposure, NOT_READY licensing, draft-first model cards, active drift review (4 files, 26 tests passed).
- Validation-split fixtures: RVI role-stability and PWS decision-window splits preserve SHADOW/INTERNAL/NOT_READY and `publicApiAllowed: false` (first focused run caught dirty clean fixtures; repaired, 3 files, 16 tests passed).
- Payload-envelope fixtures: MMS, SLRS, QBI, RVI, PWS (GSS) approve only derived scores, bands, summaries, confidence meaning, market-interpretation allowance, public drivers — while blocking protected weights, raw values, provider IDs, unsupported probability claims, uncleared fallback source fields (prediction-engine 6 files, 31 tests; app bridge 1 file, 4 tests passed).
- Full-suite counts at evidence: prediction-engine 99 files/850 tests; segmented workspace 661 files/8196 tests; app bridge 538 files/7111 tests; root typecheck/lint/guardrails green; no TS escape hatches found in new files.
- Market Mirage Score is explicitly defined as a SHADOW market-integrity risk metric — NOT win probability, expected value, confidence, betting advice, or a pick trigger; fail-closes stale/blocked market signals, blocked source posture, high no-bet pressure, high drift pressure, high calibration debt.
- Next review gates: keep fixtures local until real historical inputs have source-rights evidence; source-rights adapters from the web source registry before any customer surface; drift cards from real historical distributions before any public metric card; keep protected components out of public API payloads; MMS needs source-rights-reviewed historical market-mirage validation before promotion; do not treat adapter success as promotion evidence.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- `gse-qb-burden` / `qb-burden-index` (passing family, QB load construct) — QB-BEHAVIOR
- `gse-xcomp` (passing, completion-above-expectation construct) — QB-BEHAVIOR
- `gse-receiver-difficulty` and `gse-xyac` (receiving family) — OTHER (receiving efficiency constructs; engine ingestion candidates)
- `gse-rush-environment` (rushing family) — OL (run-environment construct, likely OL/run-blocking adjacent)
- `gse-role-volatility` / `role-volatility-index` (role family) — OTHER (role-stability construct; snap/usage volatility driver for projections)
- `stale-line-risk-score`, `market-mirage-score` (market family) — TRUST-SIGNAL (market-integrity / stale-odds risk constructs)
- `playable-window-score` (decision family) — OTHER (decision-gating construct)
- All 11 shadow, internal, not-ready; drift under PSI-threshold review — TRUST-SIGNAL (honest calibration-state labeling, matches wire-before-publish doctrine)
## Engine-actionable? (yes/no + one-line what)
Yes — this is the authoritative inventory of GSE's 11 shadow metrics and their promotion gates; Role Volatility / Role Volatility Index is the most directly engine-actionable construct (snap-usage/role-stability as a projection driver), pending real historical validation fixtures with source-rights evidence.
