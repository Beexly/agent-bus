# docs/reasoning/narrative-contract-2026-09-27.md
## What it is (1-2 sentences)
A one-night measurement study on a "narrative contract" signal family: whether a roster's mean player salary (APY) predicts the home team's edge. It reports out-of-sample validation and the exact steps to promote the family from STORED to LIVE in the prediction engine — a promotion that was built, reverted (to avoid breaking locked tests), and fully documented for later.
## Key metrics/methods (formulas where given, else "not specified")
- Two variants: on-field (APY of players actually on the field) vs roster-level (mean APY of season roster).
- Honesty bars: `|r| >= 0.08` and `|slope| > se`, checked on a 2025 holdout (285 games), trained on 2018-2024 (1,942 games).
- Results: on-field holdout r = +0.151125, slope +0.034161, se +0.013283; roster-level holdout r = +0.112232, slope +0.051235, se +0.026966. Both clear both bars; f1 = 0; only failure is f3 (no week-3 row, so STORED not LIVE).
- The validated `nfl_id -> gsis_id` crosswalk made 2018-2024 roster-joinable (before: only 2023-2025 joinable, i.e., 2 training seasons).
- Week-3 application (BUF vs LAC, game 2026_03_LAC_BUF): `signed = clip((intercept + slope * x) - 0.5) * 2` clamped to [-1, 1], with intercept 0.5414884844705745, slope 0.15808219460661174, x = APY gap (-0.131M; BUF 5.311M vs LAC 5.442M). p_home = 0.520809, signed = +0.041619, points contribution = 0.0012485727537787205 (= 0.03 prior * signed), moving edge from 0.30259224777263855 to 0.30384082052641725.
- Definitional limit: on-field variant can never produce a week-3 value (unplayed game has no participation row); roster-level is computable because the 2026 roster is published by nflverse (2,997 rows kept, 2 refused for blank gsis_id).
- Promotion steps documented: add `"narrative_contract"` to the `LiveEdgePart["family"]` union in `packages/prediction-engine/src/reasoning/live-edge-registry.ts`; prior 0.03 (already carried, not a ninth prior); append LIVE_EDGE_PARTS entry; update `LAC_BUF_PARTS` with signed 0.04161909179262402 and points 0.0012485727537787205; set `LAC_BUF_EDGE = 0.30384082052641725`; add registry row with signed_source formula/intercept/slope; regenerate `week3-engine-readings.jsonl`; update count assertions 8 → 9; `tsc --noEmit` + `vitest run src/reasoning/`.
## Data sources named
nflverse (2026 season roster data, 2,997 rows), the validated `nfl_id -> gsis_id` crosswalk, 2018-2025 training/holdout game history.
## Findings (numbers and facts, not vibes)
- Train-to-holdout drop is large: roster-level in-sample r = 0.279 falls to 0.112 out of sample (still clears the 0.08 bar).
- Promotion was built, ran, and reverted: it broke 4 tests + 1 typecheck (`live-edge-registry.test.ts` part-count assertion, `part-reading.test.ts` "eight live parts and four dark candidates" assertion, the closed 8-family `LiveEdgePart` union, `part-selector.ts` shared path). Registry reverted to 8 rows; edge recomputes exactly to 0.30259224777263855.
- BUF vs LAC (week 3): 57 BUF players with a contract vs 51 LAC players; mean APY gap -0.131M favors LAC slightly.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Roster-payroll-as-signal validated out of sample: mean roster APY clears honesty bars as a home-edge feature — TRUST-SIGNAL (a measured, holdout-validated feature with exact promotion spec).
- Train-to-holdout halving of r (0.279 → 0.112) — TRUST-SIGNAL (calibration caution: in-sample figures overstate strength; out-of-sample only).
- Exact promotion recipe including precision note (getting `points` wrong = 1.2e-7 edge error caught by tests) — OTHER (engineering workflow: promotion-as-code with test-locked assertions).
## Engine-actionable? (yes/no + one-line what)
Yes — complete promotion recipe exists (formula, fitted intercept/slope, prior, test updates) to wire `narrative_contract` as the 9th live edge family; the only missing step is a reviewed change the author deliberately deferred.
