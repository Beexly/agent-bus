# docs/arxiv-program/research/2026-09-21/arxiv-deep/0812-deep-generative-models-synthetic-financial-data.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2512.21798 (Hounwanou & Gaba, 2025): benchmarks TimeGAN vs VAE vs ARIMA-GARCH on synthetic S&P 500 daily log-returns with a fidelity → utility → robustness evaluation scaffold (distributional fit, downstream portfolio/risk task performance, seed stability). Verdict: ADAPT — TimeGAN is the strongest generator and the three-axis evaluation scaffold transfers to synthetic sports-season augmentation for GSE backtests; paper's own numbers treated as architecture guidance, not gospel, due to internal inconsistencies.
## Key metrics/methods (formulas where given, else "not specified")
- TimeGAN (RNN + adversarial + supervised/unsupervised losses) and VAE (Kingma & Welling) vs ARIMA-GARCH baseline.
- Fidelity: KS statistic, Wasserstein distance, mean DTW distance, KDE overlays, ACF/volatility clustering.
- Utility: Markowitz min_w w'Σw s.t. w'1=1, w'μ=μ*_p (Lagrangian closed form w* = Σ^{−1}(λμ/2 + γ1/2)); GARCH(1,1) σ²_t = ω + α₁ε²_{t−1} + β₁σ²_{t−1}; VaR_α = μ_t + z_α·σ_t; ES_α = μ_t − σ_t·φ(z_α)/α; rolling backtest Sharpe/Sortino/MaxDD.
- Robustness: multiple seeds for weight stability (qualitative only).
## Data sources named
S&P 500 daily closes Jan 2000–Jun 2024 (~6,150 days), log-returns r_t = ln(P_t/P_{t−1}), ADF-tested, standardized, 80/10/10 time-ordered split. INTEGRITY FLAG in file: §3.1 claims "only the index" yet Tables 2/6 report per-asset weights (AAPL 0.12/0.11, MSFT 0.10/0.09, GOOGL 0.08/0.08, AMZN 0.09/0.10, TSLA 0.07/0.06, SPY 0.54/0.56 real vs synthetic) with no described multi-asset dataset; hyperparameter contradiction (§3.2.1 vs Appendix Table 7); no significance tests; no repo URL despite claim.
## Findings (numbers and facts, not vibes)
- Real S&P stats: mean 0.00041, std 0.0127, skew −0.45, kurtosis 7.88.
- Fidelity (KS / Wasserstein / mean DTW): ARIMA-GARCH 0.128/0.0047/0.243; VAE 0.095/0.0031/0.187; TimeGAN 0.062/0.0018/0.132 (best).
- Risk (vol / VaR_0.95 / ES_0.95): real 1.27%/−2.11%/−2.88%; TimeGAN 1.30%/−2.05%/−2.79% (within ~4%); VAE 1.19%/−1.92%/−2.63% — VAE tail-blind.
- Backtest (train-on-synthetic → test-on-real): real-trained Sharpe 0.89/Sortino 1.31/MaxDD 23.4%; TimeGAN-trained 0.84/1.26/25.1%; VAE-trained 0.78/1.14/27.6%.
- File proposes GSE adaptation: TimeGAN on nflverse play-by-play 2020–2025 (play-level, not game-level — 17-game seasons too coarse) with conditional team-strength embeddings; validate via translated three axes; gates: synthetic score-differential KS < 0.10 and must beat naive bootstrap resampling; calibrator trained on synthetic within 0.005 Brier of real-trained on 2025 holdout; use cases: calibration augmentation and Kelly drawdown stress tests; effort ~1–2 weeks play-level prototype.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Synthetic season/play-stream generation for engine stress-testing and Kelly drawdown stress tests (OTHER: synthetic-data lane — new capability, complements ledger-0810 bandit work).
- Fidelity→utility→robustness evaluation scaffold as a template for validating any synthetic data (TRUST-SIGNAL).
- Tail-fidelity ranking (TimeGAN > VAE on tails) relevant to blowout/upset-scenario generation (OTHER).
- Ledger's own caveat: 272-game NFL season is the opposite data regime from 6k-point finance series — game-level synthesis not defensible (TRUST-SIGNAL).
## Engine-actionable? (yes/no + one-line what)
Yes — prototype play-level TimeGAN on nflverse play-by-play for synthetic-season stress tests, gated on beating bootstrap resampling and matching the Brier bar.
