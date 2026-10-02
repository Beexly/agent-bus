# docs/arxiv-program/research/2026-09-21/arxiv-deep/1644-localized-conformal-prediction.md

## What it is (1-2 sentences)
Deep-read ledger (ADAPT verdict) of Leying Guan (2023, JMLR), "Localized Conformal Prediction" — weighting calibration scores by a localizer H(x, X_i) so prediction intervals are valid marginally AND tighter where the test point's neighborhood is predictable, with a strategic adjusted quantile level that preserves the finite-sample coverage guarantee.

## Key metrics/methods (formulas where given, else "not specified")
- Localized weights: w_i(x) ∝ H(x, X_i) (localizer, e.g., Gaussian kernel or k-NN weights).
- Naive plug-in Q_{1−α}(Σ_i w_i(x) δ_{E_i}) is INVALID (can undercover arbitrarily badly); the valid version uses a data-dependent adjusted level α̃(x) computed from the weighted calibration distribution (paper's Lemma/Theorem).
- Guarantee: finite-sample marginal coverage ≥ 1−α under exchangeability + approximate conditional coverage when H concentrates and the score law is locally smooth.
- Practical variant: sample-splitting LCP (split off a tuning fold) since full LCP reweights per test point (O(n) per point).
- Report per-game effective sample size (Σw)²/Σw²; flag games where localization starves the calibration set.

## Data sources named
Methodology paper — simulated regression settings (Example 4.1, settings A–D with designed heteroskedasticity, n in the hundreds, nominal 95% intervals) plus real-data illustrations; no GSE data used.

## Findings (numbers and facts, not vibes)
- Example 4.1 (coverage / mean length), standard CP → localized: Setting A 0.95/2.77 → 0.94/2.27 (~18% narrower); B 0.95/3.14 → 0.95/3.01; C 0.95/4.26 → 0.95/3.15 (~26% narrower); D 0.94/3.81 → 0.94/3.86 (no gain — localization does not help everywhere).
- Localization materially tightens intervals under strong heteroskedasticity while holding coverage.
- Limitations: O(n) per test point; the localizer H is a free consequential choice (too narrow → variance/tiny effective sample; too wide → back to marginal); conditional coverage is approximate, not guaranteed; Mondrian/stratified conformal may be simpler for discrete buckets; the naive weighted quantile is the implementation trap.
- Ledger verdict: ADAPT — implements the sample-splitting variant with the paper's adjusted (not naive) quantile level, localized on game-context features.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Marginal coverage hides subgroup failure" → localization on (total, spread, weather, rest, QB tier) gives intervals valid overall AND tighter where predictable — TRUST-SIGNAL (calibration credibility: interval width that adapts to game context rather than one-size-fits-all).
- Up to ~35% width reduction at equal coverage (file's verdict cites Example 4.1; the section-7 table shows 18–26%) — OTHER (interval construction quality).
- Effective-sample-size guard ((Σw)²/Σw² < 50 → fall back to Mondrian stratification) — TRUST-SIGNAL (honest self-diagnostic for when the localization is data-starved).
- Composable with CQR ([1639]) and residual-QRF ([1642]); learned localizer from QRF leaf co-occurrence as the improvement experiment — OTHER (engine architecture: adaptive-localization pipeline).

## Engine-actionable? (yes/no + one-line what)
yes — Implement sample-splitting LCP with the paper's adjusted quantile level, localized on game-context features (total/spread/weather/rest buckets), with the effective-sample-size guard; accept if worst-stratum coverage gap shrinks ≥30% vs marginal CQR at ≤105% mean width, else fall back to Mondrian stratification (the file's own spec and gate).
