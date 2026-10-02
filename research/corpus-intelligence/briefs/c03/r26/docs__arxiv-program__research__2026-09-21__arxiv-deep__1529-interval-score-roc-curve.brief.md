# docs/arxiv-program/research/2026-09-21/arxiv-deep/1529-interval-score-roc-curve.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2607.28178 ("An Interval–Score ROC Curve for Assessment, Calibration and Ensembling of Probabilistic Forecasts"). A graphical framework comparing interval forecasters via the mean-width vs. mean-miss-distance curve across coverage levels, with tangent calibration and convex-hull ensembling that reveals per-coverage dominance regimes scalar scores hide. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Tunable Interval Predictor (TIP): P(β,x)=[l_β(x),u_β(x)] with nesting property, merging at β=1 (point forecast); central intervals l_β=q_{β/2}, u_β=q_{1−β/2}.
- IS–ROC curve: β ↦ (MS^P(β), MAD^P(β)) — mean interval width vs. mean absolute miss distance.
- Interval score: IS^P(α,β)=MS^P(β)+(2/α)MAD^P(β); iso-score lines MAD=−(α/2)MS+(α/2)IS.
- Calibration: g(α)=argmin_β IS(α,β)=MS(β)+2/α·MAD(β) (Eq. 1); tangent method for convex curves; convex hull (Lemma A.1, randomized interpolating forecaster) + step calibration for non-convex curves.
- Quantile-level recalibration: τ̃=g(2τ)/2 for τ≤1/2 (Eq. 2) transforms the whole predictive distribution.
- Ensembling: global convex hull over convexified TIP curves — per coverage level α pick the TIP minimizing IS(α,g(α)); isotonic regression restores nesting.
- Theorems 2.9–2.13: oracle's curve is Pareto optimal (from IS propriety) and convex; non-uniqueness — symmetric distributions sharing the median generate the same curve (calibration-equivalence).
## Data sources named
Methodological paper; numerical illustrations only. Example 1: DGP N(0,1), forecasters Gaussian (oracle), Laplace(0,1), LogNormal(−0.2,1). Example 2: Bernoulli(0.5) covariate DGP mixing Laplace(0.3,0.6) and N(−0.3,2), forecasters F1, F2, oracle. No real datasets. Closed-form (S,MAD) tables for Normal/Lognormal/Exponential/Uniform in Appendix B.5. No code or data links stated.
## Findings (numbers and facts, not vibes)
- Example 1: Gaussian oracle dominates LogNormal; Gaussian and Laplace curves coincide exactly (Thm 2.13); tangent calibration of the Laplace TIP recovers the true Gaussian predictive distribution visually.
- Example 2: F1 better at small sharpness (median-centered intervals), F2 better at large sharpness; convexified hull strictly improves the combined frontier; step calibration restores the α↔β correspondence along hull segments.
- Forbidden triangular region below slope −1/2 from (0,MAD^G(1)) flags impossible frontiers — a useful diagnostic.
- No scalar metrics reported — graphical/methodological contribution; no real-data validation anywhere in the paper.
- Limitations: curve estimates are sample means, noisy at extreme β; calibration-equivalence means curves alone cannot identify the distribution; nesting can break under convexification (isotonic fix proposed, not demonstrated).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-coverage dominance regimes among competing interval forecasters that scalar scores (CRPS/MAE) average away — OTHER (model diagnostics)
- Tangent calibration g(α) + Eq. 2 quantile transform as a post-processing recalibration for published predictive distributions (spread, total) — TRUST-SIGNAL
- Global convex-hull ensembling: per-coverage-level best-sub-model selection (e.g., 80% intervals from model A, 95% from model B) — OTHER
- Conditional IS–ROC curves (paper's future work) conditioned on game-state covariates → regime-aware calibration, not one-size-fits-all — SCHEME
- No real-data validation; closed-form tables enable reimplementation but curve estimates carry sampling noise — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — compute empirical IS–ROC curves per engine sub-model on backtest for spread/total; where curves cross, build the global convex hull for per-α sub-model selection and apply tangent calibration to quantile forecasts (acceptance gate: crossing curves found or ≥3% reduction in 90% interval score on held-out games); improvement experiment: conditional IS–ROC curves by home/away, weather bin, playoff implications.
