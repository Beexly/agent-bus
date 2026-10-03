# arxiv-program/research/2026-09-21/arxiv-deep/1642-sequential-predictive-conformal-inference-spci.md
## What it is (1-2 sentences)
ICML 2023 paper (Xu & Xie, arXiv:2212.03463) introducing SPCI — conformal prediction intervals for time series that model the CONDITIONAL distribution of the next residual given recent residual history via quantile regression forest, instead of EnbPI's unconditional residual distribution. ADAPT verdict in the source: the sharpest interval-narrowing idea in its wave — on real wind data it hit 95% coverage at less than half EnbPI's width (2.65 vs 6.38).
## Key metrics/methods (formulas where given, else "not specified")
- Interval: C_t = [ f̂(X_t) + Q̂_t(β̂), f̂(X_t) + Q̂_t(1 − α + β̂) ], with β̂ = argmin_β (Q̂_t(1−α+β) − Q̂_t(β)) (width-minimizing asymmetric-interval selection).
- Q̂_t(·) = QRF conditional quantile of residual ε_t given lag vector (ε̂_{t−1}, …, ε̂_{t−w}); residuals ε̂_t = Y_t − f̂(X_t).
- Theory: finite-sample marginal coverage ≥ 1−α under exchangeability; ASYMPTOTIC conditional coverage under stationarity/decaying dependence + QRF consistency (much stronger assumptions than ACI).
- Target α = 0.1 (90% intervals) throughout; metrics = empirical coverage + mean interval width.
## Data sources named
Simulations: nonstationary AR-type series, heteroskedastic series, drift-adjusted and change-adjusted variants. Real data: hourly wind power, electricity demand, solar radiation series. Code: https://github.com/hamrel-cxu/SPCI-code. Baselines: EnbPI, AdaptiveCI (ACI), NEX-CP.
## Findings (numbers and facts, not vibes)
- Simulations (coverage / width) — Nonstationary: SPCI 0.94 / 11.23 vs EnbPI 0.91 / 25.22 (SPCI less than half the width); Heteroskedastic: SPCI 0.89 / 24.09 vs EnbPI 0.92 / 25.84; Drift-adjusted: SPCI 0.90 / 3.43 vs NEX-CP 0.91 / 3.45; Change-adjusted: SPCI 0.90 / 4.18 vs NEX-CP 0.91 / 4.13.
- Real data (coverage / width) — Wind: SPCI 0.95 / 2.65 vs EnbPI 0.93 / 6.38 vs AdaptiveCI 0.95 / 9.34; Electricity: SPCI 0.93 / 0.22 vs EnbPI 0.91 / 0.32; Solar: SPCI 0.91 / 47.61 vs EnbPI 0.88 / 48.95 vs AdaptiveCI 0.96 / 56.34. SPCI is the width winner on every real dataset at valid coverage.
- Limitations: conditional coverage is asymptotic-only (thin in regime-shifting NFL seasons); QRF needs enough residual history (weak in weeks 1–6 — complements EnbPI, not a replacement); buys nothing if point-predictor errors are not autocorrelated; width-minimizing β̂ can yield asymmetric intervals (e.g., [−3, +10]); no delayed-feedback handling.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration math — "second-order" calibration layer forecasting the residual process itself (streaky offenses, weather regimes, QB-change flags as residual-volatility regimes), sitting above point forecasts, CQR, and ACI.
- SCHEME: the mechanism targets autocorrelation in engine errors that arise from persistent game-state regimes (weather, QB changes, post-bye chaos).
## Engine-actionable? (yes/no + one-line what)
Yes — build a residual-QRF layer on trailing margin/total residuals (lags w ∈ {4,8,16}, team-specific and league-pooled), gated on significant trailing-50-game residual lag-1 autocorrelation (|ρ̂| > 0.15); ADAPT only if coverage stays within ±2pp of nominal AND mean width ≤ 85% of the EnbPI baseline on 2024–2025 backtest (≥15% width reduction demanded).
