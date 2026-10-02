# engine/research/2026-09-13/symbolic-regression/REPORT.md
## What it is (1-2 sentences)
Prototype report on machine discovery of NFL predictive metrics via symbolic regression (gplearn, 3,000 population × 150 generations × 2 seeds per target): Target A (play EPA from pre-snap state) was a confirmed NULL, Target B (drive scores from drive-start state) yielded a novel min-bottleneck formula worth testing as a feature.
## Key metrics/methods (formulas where given, else "not specified")
Function set {+, −, ×, ÷(protected), √|·|, log|·|, |·|, −, 1/·, max, min, sin, cos}; tournament size 50, parsimony 0.0001 (early small-budget run collapsed to degenerate constants — scaled ~40× before conclusions); baselines = constant predictors; reference = HistGradientBoosting.
Target A best formula (raw units): `log(-Min(-0.761, sin((0.9983*down - 1.9888)/(2.0609*shotgun - 1.2792)), 0.8244*Max(-1.492, 0.2445*ydstogo - 2.0664)))` — a degenerate near-constant (R² −0.0222).
Target B best formula (sympy-simplified, seed 42): `score_drive ≈ sin(|−0.2007·ydstogo + min(0.0446·yardline_100 − 2.3621, 0.2007·ydstogo − 1.0574) + 1.0574|^0.5)`; GP raw form `sin(sqrt(min(X_yardline, X_ydstogo) − X_ydstogo))` on standardized features — a min-bottleneck passed through a sigmoid-like saturator.
## Data sources named
nflverse play-by-play parquet 2020–2025 (github.com/nflverse/nflverse-data, tag `pbp`), free, no account. Train 2020–2023, holdout 2024–2025. Target A: n=165,330 plays train / 82,261 holdout. Target B: n=22,810 drives train / 11,271 holdout; base rate 40.8%.
## Findings (numbers and facts, not vibes)
- Target A holdout R² (2024–2025): dumb baseline 0.0000; best GP formula −0.0222; gradient-boosting reference 0.0078. Strongest single linear correlate (|r|=0.022, distance) explains 0.05% of EPA variance. Conclusion: pre-snap situation explains <1% of play EPA — 99%+ decided after the snap; expected-points models are zero-sum calibrated, so average EPA in any pre-snap situation is ≈ 0 by construction.
- Target B holdout AUC (2024–2025): baseline 0.5000; best GP formula 0.5818 (seed 42); runner-up 0.5661 (seed 7); HGB reference 0.6268. (Early HGB 0.5645 was a measurement bug — `predict()` instead of `predict_proba()`; corrected number in both CSVs.)
- The GP formula captures ~65% of the ranking signal a plain gradient booster finds ((0.5818−0.5)/(0.6268−0.5)); both seeds converged on the same structural family.
- Football reading: scoring chance governed by a min-bottleneck between field position and distance — "your drive is only as promising as the worse of (how far you are from the end zone) and (how much you need on this down)" — no widely-used football metric has this hard-kink structure.
- Next steps listed: richer targets (EPA²/WPA² leverage, 4th-down decision surfaces, red-zone TD rate), richer features (personnel, motion, box count, spread/total), PySR, plug discovered forms as GBM features, symbolic distillation of HGB predictions.
- Repro scripts named: prep.py, discover.py, discover_b.py, assemble_b.py, wpa2.py (queued follow-up, not yet run).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Null result on pre-snap EPA predictability — TRUST-SIGNAL, SCHEME
- Novel min-bottleneck formula as a candidate feature — OTHER
- Symbolic distillation of black-box models for interpretable formulas — TRUST-SIGNAL
- Held-out-seasons validation + honesty policy (nulls reported as null) — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — plug the min-bottleneck term into a GBM as a feature and test lift over raw features (the report's stated commercial test); adopt EPA²/WPA² leverage and red-zone TD rate as the next machine-discovery targets.
