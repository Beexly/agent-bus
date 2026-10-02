# docs/arxiv-program/research/2026-09-21/arxiv-deep/1680-lasso-forecast-combinations-realized-variance.md
## What it is (1-2 sentences)
Deep read of Audrino et al. (arXiv:1610.02653): Lasso-based forecast combinations for realized variance — instead of selecting one lasso penalty λ, combine forecasts across a 20-point λ grid with BIC-based posterior-like weights, applied to monthly log-realized variance of 10 international stock indices. Verdict ADAPT, but as a cheap robustness device only — the combination gain itself is small and statistically non-significant.
## Key metrics/methods (formulas where given, else "not specified")
- Combination: log RV̂_{t+h}^{(i)} = Σ_{m=1}^{L} w_m · log RV̂_{t+h,λ_m}^{(i)}, w_m = exp(−0.5·BIC_{λ_m}) / Σ_m exp(−0.5·BIC_{λ_m}); BIC_{λ_m} = n·log(Loss_{λ_m}) + df_{λ_m}·log(n), df = nonzero count; L=20 log-spaced λ from 0 to all-zero solution.
- Ordered lasso: monotone non-increasing lag coefficients via Pool Adjacent Violators Algorithm (automatic lag selection).
- Hierarchical lasso: group-lasso over nested lag blocks — lag l′ selected only if all lower lags selected.
- Direct (not iterated) h-step forecasts, h ∈ {1,2,3,6}; expanding-window out-of-sample evaluation; Model Confidence Set (75%, 5000 bootstraps).
## Data sources named
10 international stock indices, monthly log-realized variance, Jan 2000–Apr 2016; out-of-sample Feb 2008–Apr 2016 (includes GFC); 16 methods (4 estimators × combination × univariate/multivariate); HAR benchmark (Corsi 2009) on daily data.
## Findings (numbers and facts, not vibes)
- Ordered lasso dominates: best in-sample everywhere and lowest MAFE at all horizons — h=1: 0.514; h=2: 0.599; h=3: 0.639; h=6: 0.698.
- λ-grid forecast combination slightly improves MAFE at all horizons, but MCS (75%, 5000 bootstraps) retains BOTH combined and non-combined ordered lasso at every horizon — the gain is NOT statistically significant (honest negative result).
- Horizon pattern: univariate wins at h=1,2 (best AFE for 8/10 indices); multivariate spillover models win at h=3 (8/10) and h=6 (7/10). Same pattern in the GFC subperiod and on daily data vs HAR (combined ordered lasso competitive with HAR but does not beat it).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- λ-grid combination gain is small and non-significant — honest negative result that usefully deprioritizes hyperparameter ensembling vs diversity/factor weighting (OTHER)
- Horizon rule: lean/univariate specs for short horizons; cross-entity structure pays at long horizons — for GSE: single-game forecasts stay lean, multi-week/futures ensembles earn cross-team structure (OTHER)
- BMA-over-hyperparameter device (λ as prior hyperparameter, softmax over −BIC/2) is nearly free on any glmnet-style regularization path (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes, low priority — apply BIC-weighted averaging across any regularized GSE component's fitted λ path instead of betting on a single CV/BIC-selected penalty, and run an MCS over GSE's method set as the paper's comparison standard.
