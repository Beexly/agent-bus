# docs/arxiv-program/research/2026-09-21/arxiv-deep/1984-auto-sktime-automated-time-series-forecasting.md

## What it is (1-2 sentences)
An AutoML system for time series forecasting (arXiv:2312.08528, Zöller et al. 2023) that adapts model search to time series via per-family pipeline templates, a time-aware multi-fidelity budget (lookback-window expansion), and warm-starting HPO from prior runs. File verdict: ADAPT (mechanisms, not the system).

## Key metrics/methods (formulas where given, else "not specified")
- Pipeline templates: search space Λ_i = Λ_i^1 ∪ ... ∪ Λ_i^n ∪ {λ_{i,r}} per forecaster family (statistical/ML/DNN); CASH problem per template (Thornton et al. notation).
- Multi-fidelity budget: b ∈ [b_min, b_max], 0 < b_min < b_max ≤ 1; fidelity proxy f̃_D(·, b) with f̃(·, b_max) = f(·); budget maps to lookback window y_{i, T_i − l_b : T_i} (short recent window at low budget, expanding backward to full series at b_max). Successive halving (Jamieson & Talwalkar) allocates budgets.
- Warm-starting: Bayesian optimization initialized from prior optimization runs (meta-learning).
- Assumptions: short-window performance predicts full-window performance; prior runs' optima transfer across datasets.

## Data sources named
- 64 diverse real-world univariate/multivariate/panel time series (list in supplementary material); public datasets. 5-minute compute budget per evaluation (+60s grace, worst-result penalty for timeouts); 5 seeds each. Metric: MASE (point forecasts only).

## Findings (numbers and facts, not vibes)
- Table 1 mean MASE ± std, avg rank ± std, fit time: auto-sktime 1.59±1.61, rank 3.22±1.94, 326s — significantly best on MASE and rank. APT-TS 3.12±5.41 (4.51); AutoTS 4.26±10.94 (5.38); HyperTS 2.88±5.03 (4.57); pmdarima 2.63±3.21 (5.42); ETS 2.57±2.78 (5.82); PyAF 3.23±5.33 (5.38); AutoGluon 6.00±18.17 (rank 6.74); DeepAR 11.54±51.51 (7.23); TFT 9.80±50.62 (6.73). [OTHER]
- TFT/DeepAR "perform badly due to failures on many time series"; mean MASE dominated by explosive failures (DeepAR std 51.51) — median-based claims more honest. [TRUST-SIGNAL: headline AutoML rankings are mean-failure dominated; use medians]
- Under a 5-minute budget, AutoGluon-TS scores poorly (6.00 MASE) because its ensemble needs ~4h — AutoML comparisons are budget-sensitive; the "beats AutoGluon" headline is budget-conditional. [TRUST-SIGNAL]
- ETS and pmdarima reached better average MASE than AutoML tools on very few datasets; on median performance the AutoML tools outperform. [OTHER]
- Warm-start transferability across datasets is asserted more than ablated. [OTHER]
- No probabilistic/quantile output — point forecasts (MASE) only; no sports data; short-series behavior (17-game NFL seasons) untested. [OTHER]
- Proposed GSE acceptance gates: successive halving selects a config within 2% wQL of the full-evaluation winner using ≤40% of compute, AND warm-starting reaches from-scratch best within ≤50% of evaluations. Reject if low-fidelity winner disagrees with full-fidelity winner on >1 of 3 test seasons. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Lookback-window successive halving as fidelity schedule for GSE forecaster selection: evaluate candidate configs on recent 2 seasons → promote winners to 5 seasons → full history; warm-start each season's HPO from the previous season's trace — SCHEME (model-selection process design), OTHER (compute-efficiency mechanism)
- Regime-aware fidelity ladder: choose the low-fidelity window by detecting the most recent stable regime (post-coaching-change / post-QB-change break) rather than a fixed recency window — COACHING, QB-BEHAVIOR (structural breaks from coaching/QB changes invalidate fixed-recency evaluation windows)
- Budget-conditionality lesson: treat any model comparison without matched compute budgets as suspect — TRUST-SIGNAL
- No OL findings in the file.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the two mechanisms only (lookback-window successive halving + warm-start HPO store) as a wrapper around GSE's existing win-probability HPO and forecaster selection; do not adopt auto-sktime itself (point-forecast-only, weaker than AutoGluon-TS on uncertainty).
