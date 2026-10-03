# arxiv-program/research/2026-09-21/arxiv-deep/1641-conformal-prediction-for-time-series-enbpi.md
## What it is (1-2 sentences)
ADAPT-ledgered deep read of arXiv:2010.09107 (Chen Xu, Yao Xie, TPAMI 2021) — EnbPI, a no-data-splitting conformal prediction-interval method for time series using bootstrap ensemble LOO residuals and a sliding residual window, with coverage guarantees under stationarity/mixing and empirical recovery after change points.
## Key metrics/methods (formulas where given, else "not specified")
- LOO ensemble predictor: f̂_{-i}^{φ} = φ({f̂^b : i ∉ S_b}), φ = mean; B = 20–50 suggested, 25 used
- Residuals: ε̂_i = Y_i − f̂_{-i}^{φ}(X_i); interval C_t = [f̂(X_t) + q̂_β(ε̂-window), f̂(X_t) + q̂_{1−α+β}(ε̂-window)], β ∈ [0,α] chosen to minimize width (asymmetric quantile)
- Sliding residual window (batch size s = 1), no calibration split — all data trains AND calibrates; theory: coverage → 1−α asymptotically without exchangeability
- Code: https://github.com/hamrel-cxu/EnbPI
## Data sources named
2018 hourly solar radiation (Atlanta + 9 California cities, 10 series); 2019 hourly Austin wind power; 11 ambient sensor series; change-point simulation T=600 with mean/variance change at 60%, retrain after 60 post-change points, residual window T′=100; train ratios 0.10/0.19/0.28, α = 0.1
## Findings (numbers and facts, not vibes)
- Atlanta solar, train-ratio 0.10 (scarce data): EnbPI coverage 0.893 (SE 1.8e-3) vs. AdaptCI 0.828, J+aB 0.747, QOOB 0.684, ICP 0.646, Weighted ICP 0.608 — the no-splitting design dominates exactly when data is scarce
- Train-ratio 0.19: EnbPI 0.897 vs. AdaptCI 0.891 (gap closes with more data); train-ratio 0.28: EnbPI 0.905 vs. AdaptCI 0.909
- Change-point simulation: sliding window re-covers faster than fixed-window methods after the change; retraining after 60 post-change points restores nominal coverage
- Limitations noted: asymptotic theory only (finite-sample coverage empirical); window length T′ is an untuned knob; sliding window discards all old residuals even in stable regimes; B=25 × weekly refits is compute-heavy
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- EnbPI fills the no-split time-series gap in GSE's calibration stack (existing: split-conformal conformal-calibration.ts, CQR cqr.ts, ACI aci-durable.ts): OTHER
- Signature early-season win (0.893 vs. 0.646 for ICP at 10% train ratio) maps directly to GSE weeks 1–4 scarce-data regime: TRUST-SIGNAL
- Bootstrap-ensemble machinery is half-built already (GSE's model-parliament.ts): OTHER
- Regime-weighted sliding-window improvement proposed: weight residuals by recency AND regime similarity (same-QB, same-weather-bucket games upweighted), borrowing from localized conformal [1644]: SCHEME
- Acceptance gate: full-season coverage within ±2pp of nominal AND mean width ≤ split-conformal baseline; weeks-1–4 coverage must beat ICP by ≥3pp; fallback to SPCI [1642] if B=25 refits exceed compute budget: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — implement EnbPI as GSE's early-season/scarce-data interval method for margin/total calibration (B=25 bootstrap LOO ensemble, sliding residual window, asymmetric β-optimized quantile), gated on the weeks-1–4 coverage-vs-ICP win.
