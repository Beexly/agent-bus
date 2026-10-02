# docs/math/GSE_PROPRIETARY_METRIC_BIBLE.md
## What it is (1-2 sentences)
The canonical definition document (updated 2026-07-06, Slice 1+) for the GSE proprietary metric system: a shadow-only math grammar, 17+ governed metrics with birth certificates, core math utilities, a source-rights/payload-rights layer, a metric-asset graduation ladder, and the full verification receipt log (2026-07-04 through 2026-07-07). Nothing here is a production scoring hookup, public probability claim, or live data product — all metrics are SHADOW with `INTERNAL` API exposure.

## Key metrics/methods (formulas where given, else "not specified")
- Data Reliability Index (Slice 1 formula):
  ```
  freshness_score = 1.00 if age <= 0.5TTL; 0.65 if 0.5TTL < age <= TTL; 0.15 if age > TTL; 0.00 if missing
  coverage_score = min(1, source_count / expected_source_count)
  rights_cleanliness = 1.00 approved/allowed; 0.60 benchmark_only/manual_review/restricted; 0.00 permission_required/blocked/excluded/unknown
  contradiction_penalty = min(0.50, 0.20 * contradiction_count)
  missing_penalty = min(0.40, 0.08 * missing_required_fields)
  DRI = 100 * clamp(0.38*freshness_score + 0.22*coverage_score + 0.20*provider_trust_score + 0.20*rights_cleanliness - contradiction_penalty - missing_penalty, 0, 1)
  ```
  Output grades: HIGH / MEDIUM / LOW / BLOCKED. Feeds no-bet pressure, API warnings, content approval. Note: the doctrine's older `0.40/0.25/0.20/0.15` + separate rights penalty was superseded by this `0.38/0.22/0.20/0.20` build-slice contract (retained as calibration history).
- Protected basis expansion: `phi(x) = [x, x^2, x^3, max(0,x-k1)^3, max(0,x-k2)^3, max(0,x-k3)^3, log(1+abs(x)), sigmoid(a*x)]` — raw features harder to reverse-engineer.
- Core math grammar: bounded/score clamps, `sigmoid`, `logit`, `softplus`, z-scores, weighted means, empirical Bayes shrinkage.
- Metric inventory (all SHADOW): Data Reliability Index, Market Gravity Index, Stale Line Risk Score, Market Mirage Score, GSE Expected Completion, QB Burden Index, Role Volatility Index, Calibration Integrity Grade (ECE, Brier risk, reliability slope, settled-sample support, bucket coverage), Drift Pressure Index (PSI, Brier delta, calibration-error delta, schema change rate, prediction-volume shift, model disagreement), Conformal Uncertainty Width (interval width, p90 width, empirical coverage, target-coverage gap), No-Bet Pressure (wraps existing `computeNoBetStrength()`), Playable Window Score, Portfolio Fit Score (exposure concentration, correlation risk, duplicate thesis risk, liquidity, bankroll fit), GSE Signal Score, Receiver Difficulty Index, Expected YAC, YAC Creation (actual-minus-expected residual, shrunk receiver YOE prior), Rush Environment Index, Expected Rush Yards, Rush Over Expected (actual-minus-expected residual, shrunk rusher RYOE prior).
- Graduation ladder: SHADOW → content aggregate approval → APPROVED_FOR_API, blocked by source rights, missing model card, insufficient sample, failed validation, or drift (statuses: BLOCKED_SOURCE_RIGHTS / BLOCKED_MODEL_CARD / BLOCKED_SAMPLE / BLOCKED_VALIDATION / BLOCKED_DRIFT / REVIEW_READY / APPROVED_FOR_CONTENT / APPROVED_FOR_API). SHADOW metrics cannot be exposed through API routes.
- Validation ladder: directional unit test → synthetic fixtures → historical walk-forward → segment calibration → baseline comparison → drift report → shadow board impact → public/API approval. No metric leaves SHADOW without model card + source card + validation card + drift card.

## Data sources named
- Source-rights policies: `nflverse` (approved_open_license — modeling/validation/derived allowed, raw API blocked by default, attribution required); `the-odds-api` (approved_api — modeling BLOCKED (`model_training_allowed: false`), validation/derived-API allowed, raw blocked).
- Payload field kinds: DERIVED_METRIC, PUBLIC_DRIVER, AGGREGATE_SUMMARY, RAW_SOURCE_VALUE (fail-closed), PROTECTED_WEIGHT (fail-closed), PROVIDER_IDENTIFIER, plus UNSUPPORTED_PROBABILITY_CLAIM (blocks smuggling decision quality into probability claims).
- All metric outputs carry source-policy evidence; `probability` is always `null` on market/decision metrics; `confidenceScore` always means evidence quality, never win probability.

## Findings (numbers and facts, not vibes)
- QB Burden Index: contextual QB burden independent of QB quality — uses expected-completion difficulty, pressure, throw depth, down-distance friction, OL disruption proxy, receiver separation deficit proxy, time-to-throw stress proxy, weather penalty, pass-rate pressure (QB-BEHAVIOR, OL). Manual-review source posture raises uncertainty; blocked modeling posture forces BLOCKED with high uncertainty.
- Role Volatility Index: snap-share movement, target/carry/route opportunity movement, depth-chart shock, injury/return uncertainty, teammate role shock, sample size, usage freshness (COACHING/OTHER). Stale usage evidence forces BLOCK band + `roleSignalAllowed: false`.
- Expected Completion: air yards, yards to go, red-zone flag, sideline proxy, pressure proxy, weather penalty, time-to-throw proxy, shrunk QB/receiver/defense priors — returns completion probability + separate evidence confidence (QB-BEHAVIOR).
- Receiver Difficulty Index rises when expected completion falls, air yards rise, separation/cushion proxies worsen, contested-catch/sideline proxies rise; low samples shrink receiver prior toward neutral (OTHER/SCHEME).
- Rush Environment Index rises with lighter boxes, OL continuity, run-direction leverage, run-friendly game script; falls with heavy boxes, down-distance stress, weather (OL/SCHEME).
- Verification scale: final logged prediction-engine run PASS — 107 files, 885 tests; full all-workspaces aggregate PASS — 670 files, 8,239 tests; guardrails PASS (trust-gate over 1,139 files, 3,145 tracked files secret-scanned); no TS escape hatches (`as any`, `@ts-ignore`, etc.) found in scans.
- Public GSE Signal Score grades: HARD_PASS / PASS / WATCH / LEAN / SPEAK / STRONG (OTHER: decision-quality grade vocabulary, `probability: null`).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QBI separates QB context-burden from QB talent (pressure, throw depth, OL disruption, separation deficit, time-to-throw stress, weather) — QB-BEHAVIOR / OL.
- Rush Environment Index weights box pressure, OL continuity, down-distance stress — OL / SCHEME.
- Receiver Difficulty + YAC Creation residuals with shrinkage priors — SCHEME / OTHER (catch-difficulty and yards-after-catch skill separation).
- RVI tracks snap-share/usage shocks, depth-chart shock, injury/return uncertainty — COACHING.
- Source-rights/payload-rights gates with fail-closed defaults and `probability: null` discipline — TRUST-SIGNAL (no-claim governance in code).

## Engine-actionable? (yes/no + one-line what)
Yes — wire the residuals (yac-creation, rush-over-expected), QBI burden-vs-talent split, REI context, and RVI volatility gates as governed SHADOW primitives feeding No-Bet Pressure and Playable Window Score; nothing promotes without the validation ladder + model/drift/source cards.
