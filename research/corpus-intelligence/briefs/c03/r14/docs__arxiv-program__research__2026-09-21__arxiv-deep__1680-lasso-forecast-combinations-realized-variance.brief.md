# docs/arxiv-program/research/2026-09-21/arxiv-deep/1680-lasso-forecast-combinations-realized-variance.md
## What it is (1-2 sentences)
Deep read of Audrino et al. (2016), arXiv:1610.02653 — instead of selecting one lasso penalty λ, combine forecasts across a grid of λ values (L=20) with BIC-based posterior-like weights; applied to realized-variance forecasting of 10 international stock indices, with the ordered lasso dominating and the combination gain honest but non-significant.
## Key metrics/methods (formulas where given, else "not specified")
- Combination (eq. 6–7): log RV̂_{t+h}^{(i)} = Σ_{m=1}^{L} w_m · log RV̂_{t+h,λ_m}^{(i)}, w_m = exp(−0.5·BIC_{λ_m}) / Σ_m exp(−0.5·BIC_{λ_m}); BIC_{λ_m} = n·log(Loss_{λ_m}) + df_{λ_m}·log(n), df = number of nonzero coefficients.
- Ordered lasso (eq. 5): least squares + λΣ(β⁺+β⁻) s.t. β⁺_{ij,1}≥β⁺_{ij,2}≥…≥0, β⁻_{ij,1}≥β⁻_{ij,2}≥…≥0 (monotone lag decay via PAVA).
- Hierarchical lasso (eq. 4): group-lasso penalty λΣ‖β_{ij,(l:p)}‖₂ over nested lag blocks — lag l′ selected only if all lower lags selected.
- Grid: L=20 log-spaced λ from 0 to λ_max (all-zero solution); direct (not iterated) multi-step forecasts (h ∈ {1,2,3,6}); expanding-window out-of-sample Feb 2008–Apr 2016.
- Evaluation: MAFE; Model Confidence Set (75%, 5000 bootstraps).
## Data sources named
Monthly log-realized variance of 10 international stock indices, Jan 2000–Apr 2016 (out-of-sample Feb 2008–Apr 2016, includes the GFC); 16 methods (4 estimators × {FC, no-FC} × {univariate, multivariate}); daily-data robustness vs the HAR (Corsi 2009) benchmark.
## Findings (numbers and facts, not vibes)
- Ordered lasso dominates: best in-sample fit everywhere and lowest MAFE at every horizon — Table 5: h=1: 0.514; h=2: 0.599; h=3: 0.639; h=6: 0.698 (best column at all horizons).
- Forecast combination (BIC-weighted across λ grid) slightly improves MAFEs at all horizons — but the Model Confidence Set retains BOTH combined and non-combined ordered lasso at every horizon: the gain is NOT statistically significant. Honest negative result.
- Horizon pattern: univariate models win at h=1,2 (best AFE for 8/10 indices); multivariate (spillover) models win at h=3 (8/10) and h=6 (7/10) — spillovers have long-term forecasting power; holds in the GFC subperiod and on daily data.
- Combined ordered lasso is competitive with the HAR benchmark on daily data but does not beat it.
- BIC weights concentrate heavily on the best model — in practice close to model selection, which limits the hedging benefit.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- BMA-over-hyperparameter hedge (λ as prior hyperparameter): OTHER — cheap robustness add-on for any regularized GSE component (calibration models, feature-selection regressions); BIC-weight across the already-computed regularization path.
- The negative result deprioritizes hyperparameter ensembling relative to diversity and factor-aware weighting (ledgers 1675–1679): OTHER — prioritization evidence for the ensemble budget.
- Horizon rule (lean models short horizons, cross-entity structure long horizons) aligns with ledgers 1675/1679: OTHER — single-game forecasts stay lean; multi-week/futures ensembles are where cross-team structure earns its keep.
## Engine-actionable? (yes/no + one-line what)
Marginal yes — apply BIC-weighted λ-grid averaging to regularized sub-models as a near-free robustness layer, and apply the horizon rule (lean for single-game, multivariate cross-team for futures); but do not make hyperparameter ensembling a research priority given the non-significant gain.
