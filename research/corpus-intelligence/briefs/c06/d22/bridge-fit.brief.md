# reasoning/bridge-fit.md
## What it is (1-2 sentences)
A GSE reasoning trace documenting a logistic-regression "bridge" model — a first directional home-win probability built from leak-free prior features, fit on 6,955 pre-2025 games and scored on 285 sealed 2025 games.
## Key metrics/methods (formulas where given, else "not specified")
- Method: logistic regression on leak-free prior features. Fit set: 6,955 games from seasons before 2025. 36 earlier games skipped (a prior feature missing). All 285 sealed 2025 games emitted a probability; none were clamped.
- 2025 Brier of this probability against home wins: 0.2237.
- Spread-bucket table scored on same 285 games: Brier 0.2120 — the bridge does NOT beat that table.
- Coefficient sign inspection via `homeSign` (sign of each fitted coefficient, not assigned by hand): Dome and neutral came out negative; scoring and rest features came out positive.
## Data sources named
- None named — refers to the GSE game trace itself (6,955 pre-2025 games, 285 sealed 2025 games, 36 skipped for missing prior feature).
## Findings (numbers and facts, not vibes)
- Fit N = 6,955 (every row, "the sample count on every row is 6,955").
- Sealed 2025 evaluation N = 285 games; all 285 emitted probabilities; none clamped.
- 36 earlier games skipped due to missing prior feature.
- Bridge Brier (2025, home wins): 0.2237 vs spread-bucket table Brier on same 285 games: 0.2120 — spread-bucket table wins by 0.0117 Brier points.
- Dome and neutral fitted coefficients are negative (against home win probability, INFERENCE: direction implied by negative sign).
- Scoring and rest features have positive coefficients (favoring the team with the rest/scoring edge, INFERENCE: direction implied by positive sign).
- The bridge is "the first directional probability the trace can read" — explicitly "not a claim about a book."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Sealed 2025 holdout (285 games, unclamped probabilities, leak-free prior features) → TRUST-SIGNAL (leak-free backtesting discipline).
- Brier benchmarked head-to-head vs spread-bucket table on identical sealed games → OTHER (calibration evaluation method).
- Dome/neutral coefficient signs discovered, not hand-assigned → OTHER (honest empirical result: dome/neutral hurts home edge, INFERENCE).
- Rest features positive → OTHER (rest-day effect corroborates environment-calibration.md's +0.411 margin slope).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt as a calibration benchmark recipe: any new model must beat both this bridge's 0.2237 Brier and the spread-bucket table's 0.2120 on the same sealed 2025 game set, with leak-free priors and unclamped outputs.
