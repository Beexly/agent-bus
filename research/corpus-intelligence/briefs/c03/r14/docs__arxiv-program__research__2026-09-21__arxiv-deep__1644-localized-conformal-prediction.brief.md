# docs/arxiv-program/research/2026-09-21/arxiv-deep/1644-localized-conformal-prediction.md
## What it is (1-2 sentences)
Deep read of Guan (2023), arXiv:2106.08460 (JMLR) — Localized Conformal Prediction: weight calibration scores by a localizer H(x, x′) emphasizing calibration points similar to the test point, with a data-dependent adjusted quantile level that restores the finite-sample marginal guarantee (the naive weighted quantile undercovers).
## Key metrics/methods (formulas where given, else "not specified")
- Weights: w_i(x) ∝ H(x, X_i) (localizer, e.g., Gaussian kernel or k-NN weights).
- Naive (INVALID): Q_{1−α}( Σ_i w_i(x) δ_{E_i} ) — can undercover arbitrarily badly.
- Valid: quantile at an ADJUSTED data-dependent level α̃(x) computed from the weighted calibration distribution (Lemma/Theorem exact adjustment).
- Guarantee: finite-sample marginal coverage ≥ 1−α under exchangeability; approximate conditional coverage when H concentrates on the relevant neighborhood and the score distribution is smooth in x.
- Practical variant: sample-splitting LCP (split off a tuning fold); full version is O(n) per test point.
- Diagnostic: effective sample size per point (Σw)²/Σw² — flag games where localization starves the calibration set.
- Metrics: empirical coverage + mean interval length (nominal 95% intervals in simulations).
## Data sources named
Simulated regression settings (Example 4.1, four heteroskedastic settings A–D, n in the hundreds) plus real-data illustrations; no public code URL in the full text. Transfer: GSE game features (total, spread, weather bucket, rest differential, QB tier) as the localization space.
## Findings (numbers and facts, not vibes)
- Example 4.1 (coverage / mean length), standard CP vs localized: Setting A: 0.95/2.77 → 0.94/2.27 (~18% narrower); Setting B: 0.95/3.14 → 0.95/3.01; Setting C: 0.95/4.26 → 0.95/3.15 (~26% narrower); Setting D: 0.94/3.81 → 0.94/3.86 (no gain — localization doesn't help everywhere).
- The level-adjustment machinery is subtle; the tempting naive implementation undercovers — implementation risk is the paper's own warning.
- No data-driven localizer-selection theory: too narrow → high variance; too wide → back to marginal.
- Conditional coverage is approximate, not guaranteed; Mondrian (stratified) conformal gives exact stratum guarantees and may be simpler for discrete buckets.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Answers "marginal coverage hides subgroup failure" (e.g., shootouts vs defensive grinds): TRUST-SIGNAL — calibration trust for published intervals by game context.
- Complementary to CQR ([1639]) and residual-QRF ([1642]); improvement experiment fuses [1642]×[1644] via leaf-co-occurrence learned localizer: TRUST-SIGNAL — ensemble calibration stack.
## Engine-actionable? (yes/no + one-line what)
Yes — implement sample-splitting LCP for margin/total intervals with the paper's ADJUSTED quantile level (not the naive weighted quantile), localized on game-context features, reporting effective sample size per game; acceptance gate = worst-stratum coverage gap shrinks ≥30% vs marginal CQR at ≤105% mean width, else fall back to Mondrian stratification.
