# docs/engine/research/2026-09-13/symbolic-regression/TOURNAMENT_CHANGELOG_2026-09-13.md

## What it is (1-2 sentences)
A changelog of seven mandatory anti-overfitting fixes implemented in the MOVE-37 symbolic-regression tournament harness (`~/workspace/gse-discovery/tournament.py`) on 2026-09-13, each with the motivating bug, plus a smoke-test validation pass.

## Key metrics/methods (formulas where given, else "not specified")
- Affine calibration: pred_cal = slope × pred + intercept, fit on train via least squares, applied to test before R² comparison (baseline comparison rule).
- soft_target_transform(y, beta=0.9) = median + beta × (y − median), applied before SR on heavy-tailed targets (Vanneschi & Castelli 2021).
- Loss rule: heavy-tailed → log-cosh + soft target; bounded light-tail → MSE only (caller declares; no invented auto-threshold).
- GBM ceiling probe tiers: <0.03 → skip SR; [0.03, 0.05) → low-signal flag; [0.05, 0.15] → standard; >0.15 → SR + structure diagnostic. If OLS R² within 0.02 of GBM ceiling → "signal is primarily linear" reported.
- Gen-0 diagnostic: 1-generation probe (pop 2000, parsimony 0.001); train−test gap > 0.15 → attractor_suspect=True, auto-retry with soft-target regularization (beta=0.9).

## Data sources named
- Vanneschi & Castelli 2021 (soft target regularization reference)
- Internal: `~/workspace/gse-discovery/tournament.py`; baseline registry entries — nflfastR xPass (play_type target), B2 human heuristic + B3 GLI-0.1 (wpa2 target)

## Findings (numbers and facts, not vibes)
- Motivating calibration bug: raw B2 R² = −0.2755 vs calibrated 0.0531 — a 0.33 R² gap; scale-mismatched baselines are meaningless [TRUST-SIGNAL]
- Baseline registry: `play_type` → nflfastR xPass (SR on raw play-type ruled circular — residual-only); `wpa2` → B2 human heuristic + B3 GLI-0.1 (must be beaten affine-calibrated) [TRUST-SIGNAL]
- Validation smoke tests 2026-09-13 all pass: affine calibration, gate tiers (high tier + primarily-linear structure flag), row-alignment guard, baseline registry (play_type → residual-only), smooth-linear test (correctly flagged a linear formula's kink as decoration), live 1-generation gen-0 probe (no attractor: gap 0.0039) [TRUST-SIGNAL]
- `robust_symbolic_fit` backward-compatible: gained optional soft_target_beta (default None = off) [OTHER]
- Row-alignment guard raises AssertionError on any row-count/index mismatch instead of silently comparing misaligned frames [TRUST-SIGNAL]
- Smooth-linear simplification test: fits OLS on same features; if the smooth linear form wins/ties the discovered nonlinear formula (kink_is_decoration=True), the kink is decoration, not discovery [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Affine-calibrate-all-baselines rule, GBM ceiling probe, gen-0 attractor diagnostic, row-alignment guard, baseline registry, smooth-linear kink test → TRUST-SIGNAL (calibration/validation rigor is the content)
- log-cosh + soft-target defaults for heavy-tailed targets → SCHEME (modeling methodology)
- Baseline registry entries (xPass, B2/B3 heuristics) → OTHER

## Engine-actionable? (yes)
Port the affine-calibration-before-R²-comparison rule and GBM-ceiling-gate tiers into every model-evaluation module.
