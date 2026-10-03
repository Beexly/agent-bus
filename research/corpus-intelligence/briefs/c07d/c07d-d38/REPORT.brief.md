# engine/research/2026-09-13/symbolic-regression/REPORT.md
## What it is (1-2 sentences)
Prototype report from GSE's machine-discovery lane (2026-09-13), testing whether symbolic regression (`gplearn`) can discover compact, predictive formulas from nflverse NFL play-by-play that no human designed. Honesty policy: null results reported as null; every claim backed by held-out-seasons evaluation.

## Key metrics/methods (formulas where given, else "not specified")
Method: symbolic regression via `gplearn` (pure Python, free). Function set: {+, −, ×, ÷(protected), √|·|, log|·|, |·|, −, 1/·, max, min, sin, cos}. Search budget: population 3,000 × 150 generations × 2 seeds per target, tournament size 50, parsimony 0.0001. (Early small-budget run collapsed to degenerate constants from over-aggressive parsimony on a flat MSE landscape — budget scaled up ~40× before drawing conclusions.) Features standardized; formulas converted back to raw football units with sympy. Baselines: constant predictor (train mean / base rate). Reference: `HistGradientBoosting` (bounds how much signal exists at all).

Targets:
- Target A — play EPA from pre-snap features only (no leakage: down, distance, yardline, time remaining, quarter, score differential, shotgun, no-huddle). Play type (run/pass) deliberately excluded (decided at/after the snap). Train n=165,330 plays / holdout n=82,261.
- Target B — drive ends in score (TD/FG = 1) from drive-start state (yardline, time, quarter, score diff, down, distance). Time-censored drives ("End of half") excluded. Train n=22,810 drives / holdout n=11,271. Base rate 40.8%.

Data: nflverse play-by-play parquet, seasons 2020–2025, from `github.com/nflverse/nflverse-data` (release tag `pbp`). Train: 2020–2023. Holdout: 2024–2025 (never seen during search).

Formulas discovered:
1. Best GP formula example (Target A, raw units) — degenerate near-constant dressed in `log(min(...))`/`sin(...)` scaffolding:
   `log(-Min(-0.761, sin((0.9983*down - 1.9888)/(2.0609*shotgun - 1.2792)), 0.8244*Max(-1.492, 0.2445*ydstogo - 2.0664)))`
2. Best discovered formula (Target B, raw football units, sympy-simplified, seed 42):
   `score_drive ≈ sin( | −0.2007·ydstogo + min(0.0446·yardline_100 − 2.3621, 0.2007·ydstogo − 1.0574) + 1.0574 |^0.5 )`
   (GP raw form: `sin(sqrt(min(X_yardline, X_ydstogo) − X_ydstogo))` on standardized features. Both seeds independently converged on the same structural family.)

## Data sources named
- nflverse play-by-play parquet (`github.com/nflverse/nflverse-data`, release tag `pbp`), seasons 2020–2025. Free, no account.
- Reproducibility scripts: `prep.py` (builds datasets from `data/pbp_*.parquet`), `discover.py` (original full discovery; Target A completed, Target B killed mid-run by a service restart — superseded), `discover_b.py` (Target B rerun with per-seed checkpoints `ckpt_b_seed*.pkl`), `assemble_b.py` (builds `formulas_b.csv`), `formulas_a.csv` / `formulas_b.csv` (top formulas with holdout numbers), `discovery.log` / `discovery_b.log` (run logs), `wpa2.py` (queued follow-up: WPA² win-leverage protocol — not yet run).
- Environment: `python3 -m venv .venv && .venv/bin/pip install pandas scikit-learn gplearn pyarrow sympy`.

## Findings (numbers and facts, not vibes)
- Target A (play EPA from pre-snap state): NULL (confirmed).
  - Dumb baseline (train mean): holdout R² 0.0000.
  - Best GP-discovered formula (2 seeds × 3,000 pop × 150 gen): holdout R² −0.0222.
  - Gradient-boosting reference: R² 0.0078.
  - All top-5 "discoveries" were cosmetic rewrites of the same constant prediction — identical R² and MAE.
  - Football translation: the strongest single linear correlate (|r| = 0.022, distance) explains 0.05% of EPA variance. 99%+ of play EPA is decided after the snap — by execution, not situation. Even a 3,000-tree gradient booster explains 0.8%.
- Target B (drive scores from drive-start state): INTERESTING (not a breakthrough).
  - Dumb baseline (base rate 40.8%): holdout AUC 0.5000.
  - Best GP-discovered formula (seed 42): AUC 0.5818.
  - Runner-up (seed 7, independent run): AUC 0.5661.
  - Gradient-boosting reference: AUC 0.6268.
  - Correction note: an early aborted run logged HGB AUC 0.5645 — a measurement bug (`predict()` class labels instead of `predict_proba()`); the correct reference is 0.6268, and both CSVs carry the corrected number.
  - The formula captures only ~65% of the ranking signal a plain gradient booster finds ((0.5818−0.5)/(0.6268−0.5)).
  - Football translation: scoring chance is governed by a *min-bottleneck* between field position and distance — the drive is only as promising as the worse of (how far from the end zone) and (how much is needed on this down) — passed through a saturating squashing function (the `sin(√|·|)` wrapper is the GP's way of building a sigmoid-like saturator). No widely-used football metric has this exact min-bottleneck structure; expected-points models are smooth everywhere, while the machine chose a hard kink.
- Verdict: Target A NULL (confirmed twice, plus 3,000-tree GBM at R² 0.008); Target B INTERESTING (novel min-bottleneck formula, stable across seeds and held-out seasons); no breakthrough — nothing beats standard ML or changes how football should be measured today.
- "What I'd try next" (5 items): (1) richer targets with real signal — EPA²/WPA²-style leverage targets (variance more predictable than mean; a big play's leverage is largely situational), 4th-down go/for-go decision surfaces, red-zone TD rate; (2) richer pre-snap-legal features — personnel groupings, pre-snap motion, defensive box count, spread/total (market-implied team strength); (3) longer evolution + PySR (Julia; better constant optimization and multi-objective search); (4) use discovered forms as features — plug the min-bottleneck term into a GBM and test whether it adds anything over raw features (the real commercial test); (5) symbolic distillation of HGB — fit HGB first, then symbolic regression against its predictions (smooth target, strong gradient).
- The "Verdict" and "Next steps" reproducibility-section stubs are empty placeholders ("(filled after the run completes)") — stale, since the run did complete; flag as doc hygiene gap (INFERENCE).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (QB-behavioral profiles / calibration lane): The Target A null is a hard quantitative bound on what pre-snap situation can ever explain: |r|=0.022 max single-feature correlation, R² < 0.008 even for GBM, 99%+ of play EPA decided after the snap. Any QB-behavioral profile claiming to predict play EPA from situation alone is overfit — execution features (post-snap) are mandatory. This is a guardrail for QB models, not a feature.
- OTHER (calibration/sizing): The min-bottleneck formula (AUC 0.5818 vs 0.5, vs HGB 0.6268) is a candidate feature for drive-scoring / win-probability models — the commercial test is item 4: plug it into a GBM and check added value over raw features. Feeds the machine-discovery → feature-wiring lane.
- OTHER (trust-target intake): The report's honesty protocol (null reported as null, held-out-seasons eval, measurement-bug correction documented) is the template for trust-target admission standards — CONTRADICTION flag vs the sewer-dive video claims (85% accuracy retracted, unverified $4,800): the same leakage discipline distinguishes real from marketing.
- COACHING: Item (1) names 4th-down go/for-go decision surfaces and red-zone TD rate as the next rich targets — directly adjacent to coaching-tendency modeling.
- SCHEME: The min-bottleneck structure (hard kink between field position and distance, not smooth like EP models) is a novel functional form worth testing as a feature in bigger models; the saturating `sin(√|·|)` wrapper is a machine-built sigmoid substitute.

## Engine-actionable? (yes/no + one-line what)
Yes — test the min-bottleneck formula as a GBM feature for drive-scoring (item-4 commercial test), and treat the Target A null as a hard bound: situational pre-snap features can explain at most ~0.8% of play EPA.
