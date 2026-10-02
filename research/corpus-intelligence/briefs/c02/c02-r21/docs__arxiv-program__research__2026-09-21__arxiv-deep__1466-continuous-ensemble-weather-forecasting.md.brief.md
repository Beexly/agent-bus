# docs/arxiv-program/research/2026-09-21/arxiv-deep/1466-continuous-ensemble-weather-forecasting.md
## What it is (1-2 sentences)
Andrae et al. (ICLR 2025, arXiv:2410.05431v2) build a single conditional diffusion model that forecasts ensemble weather at arbitrary continuous lead times, using correlated/fixed noise across lead times to produce temporally coherent trajectories; their ARCI hybrid (autoregressive 24h anchors + continuous diffusion interpolation) beats pure autoregressive rollout on 10-day skill at 4× sampling speed. The corpus reader verdict is ADAPT — transfer the coherent multi-horizon trajectory method to GSE's game-outcome ensembles, not the weather model itself.
## Key metrics/methods (formulas where given, else "not specified")
- Conditional diffusion model: (initial state, continuous lead time t) → state distribution at lead t. 3.5M-param U-Net, 32 base filters, attention at 16×32, Fourier time/noise embeddings (32 frequencies → 128-dim encoding).
- Coherence trick: correlated or fixed noise across lead times → each ensemble member traces a plausible continuous path instead of independent per-lead draws.
- ARCI: autoregressive 24-hour "anchor" forecasts + continuous diffusion interpolation between anchors; headline config ARCI-24/6h.
- Training: AdamW, Xavier uniform init, cosine LR decay (peak 5e-4), weight decay 0.1, 1,000 warmup steps, 300 epochs, batch 256, dropout 0.1; ~2 days on an A100 40GB.
- Metrics: RMSE, CRPS, spread/skill ratio (SSR; 1.0 = perfectly calibrated spread).
## Data sources named
- WeatherBench ERA5 reanalysis at 5.625° resolution: z500 (geopotential), t850 (850 hPa temp), t2m (2m temp), u10/v10 (10m winds). Splits: train 1979–2015, validation 2016–2017, test 2018. Public via WeatherBench.
- Baselines: AR-6h (pure 6-hour autoregressive diffusion rollout), AR-24h, deterministic references.
- Code: https://github.com/martinandrae/Continuous-Ensemble-Forecasting.
## Findings (numbers and facts, not vibes)
- [OTHER] Day-10 z500: ARCI 765.6 RMSE / 355.2 CRPS / 0.93 SSR vs AR-6h 811.8 / 391.9 / 0.88.
- [OTHER] Day-10 t850: ARCI 3.29 / 1.63 / 0.95 vs AR-6h 3.39 / 1.69 / 0.92. ARCI raises SSR toward 1.0 (better calibrated spread) while winning on RMSE/CRPS at long leads.
- [OTHER] Sampling cost for a ten-day 6-hourly ensemble member: AR-6h 32 s vs ARCI 8 s (4× faster).
- [OTHER] Limitations: ERA5 is a model product (ground truth inherits assimilation biases); 5.625° is coarse; fixed-noise coherence is a sampling heuristic with no physical-constraint guarantee between anchors; single test year (2018).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] Coherent in-game win-probability trajectories: fixed-noise sampling across continuous lead times gives monotone-coherent WP paths (e.g., (game state, τ ∈ [0,60 min]) → score-differential distribution) — a live-WP engine design borrowed from this paper; the file notes no existing GSE ledger covers continuous-lead-time coherent trajectory ensembles.
- [SCHEME] ARCI-style anchors at quarter boundaries with interpolation between them — a concrete architecture pattern for the live engine (reader acceptance gate: ≥5% CRPS improvement at 30/60-min leads vs per-horizon baselines, ≥95% of members monotone-coherent).
- [TRUST-SIGNAL] INFERENCE: SSR calibration discipline (spread/skill ratio toward 1.0) is the calibration-quality metric GSE should track on any ensemble; tagged [TRUST-SIGNAL].
- [OTHER] Reader's improvement experiment: condition the diffusion on pregame spread/total and test market-consistency of the in-game trajectory ensemble to the closing line — one model serving both live-betting WP and pregame pricing.
## Engine-actionable? (yes/no + one-line what)
yes — Build the small continuous-lead-time diffusion/MLP ensemble on nflverse play-by-play (2022–2024: train ≤2022, validate 2023, test 2024) with quarter-boundary ARCI anchors and fixed-noise coherent trajectories, gated on ≥5% CRPS gain at 30/60-min leads and ≥95% trajectory coherence.
