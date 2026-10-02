# arxiv-program/research/2026-09-21/arxiv-deep/0787-bayesian-forecast-combination-time-varying.md

## What it is (1-2 sentences)
Paper ledger for arXiv:2108.02082v3 (Li, Kang, Li 2021) proposing FEBAMA — forecast-combination weights via softmax of a linear function of time-varying time-series features, fit by maximizing Bayesian log predictive score. Verdict: ADAPT — regime-dependent ensemble weighting scheme portable to GSE model blending with sports-native regime features.

## Key metrics/methods (formulas where given, else "not specified")
- Combined density p(y_t|Y_{t−1},ℳ) = Σ_i w_{i,t} p(y_t|Y_{t−1},M_i)
- Weight equation (Eq. 4): w_{i,t} = exp(x_t'β_i) / (1 + Σ_{j=1}^{m−1} exp(x_t'β_j))
- Log score LS(Y_T,M) = Σ_t log p(y_t|Y_{t−1},M) (Eq. 2); pool LS = Σ_t log[Σ_i w_{i,t} p(y_t|Y_{t−1},M_i)] (Eq. 5)
- Log posterior (Eq. 7): log p(β|Y_T,X_T,ℳ) = const + Σ_t log[Σ_i w_{i,t} p(y_t|…)] + log p(β); MAP via BFGS, priors N(0, σ²=10³)
- Metropolis acceptance (Eq. 10) for variable-selection indicators; MASE (Eq. 11) for point forecasts
- Validation: DM tests, MCB rank tests at 95%

## Data sources named
- S&P 500 daily log returns 2010-01-04 to 2019-09-18 (2,443 days; 1,193 one-step density forecasts evaluated); M3 competition monthly (1,428 series, 18-step horizon)
- R package "febama" (github.com/lily940703/febama); R tsfeatures package; ReliefF pre-screening

## Findings (numbers and facts, not vibes)
- S&P out-of-sample avg log score: FEBAMA −1.2770, FEBAMA+VS −1.2740 vs GP −1.2950, OP −1.3036, SA −1.3067 — FEBAMA top-two in all 4 model combos, MCB-significant at 95% vs all benchmarks
- In-sample S&P: FEBAMA best LS in all 4 combos; DM significant at 90% in 3/4 (p = 0.1749, 0.0326, 0.0821, 0.0075)
- M3 monthly: LS — SA −3.529, OP −3.542, GP −3.546, FEBAMA −3.377, FEBAMA+VS −3.320; MASE — SA 2.249, OP 2.224, GP 2.233, FFORMA 2.217, FEBAMA 2.206, FEBAMA+VS 2.192; FEBAMA+VS best LS in 9/11 combos; DM-significant at 95% in 7/11 combos both metrics
- Interpretability example: garch_r2 coefficient +12.96 for GARCH model drives its weight peaks; high entropy → higher SV-model weight in volatile 2015
- Leakage caveats in file: hyperparameter (feature count, window=100) tuned on in-sample LS; OP/GP jury-rigged for multi-step (unfair to baselines)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ensemble regime-weighting doctrine (weight trend models in high-volatility weeks) — OTHER
- Feature-conditioned softmax weighting of GSE constituent models by market-regime features (spread bucket, rest, weather, line-move disagreement, ATS volatility) — OTHER
- Variable-selection ranking of regime features per model (FEBAMA+VS) — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — build regime-dependent softmax ensemble blender over GSE's models fit on sports regime features with ≥2% log-loss improvement gate on 2024 weeks-10–18 walk-forward.
