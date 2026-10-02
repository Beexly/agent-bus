# arxiv-program/research/2026-09-21/arxiv-deep/2122-timesfm-decoder-only-foundation-model.md
## What it is (1-2 sentences)
TimesFM (Google, 2024): a decoder-only foundation model for time-series forecasting — input patching (patch 32 → tokens via InputResidualBlock), causal stacked Transformer, output patches (128) decoded autoregressively, random patch masking exposing all context lengths 1..512 — pretrained on ~100B+ timepoints (Google Trends, Wikipedia pageviews, synthetic ARMA/seasonal/trend generators, M4, electricity, traffic, weather). Zero-shot best or within significance of supervised SOTA on Monash, Darts, and Informer ETT.
## Key metrics/methods (formulas where given, else "not specified")
- f: y_{1:L} → ŷ_{L+1:L+H}; input token t_j = InputResidualBlock(patch ⊙ mask) + PE_j; causal Transformer; ŷ_{pj+1:pj+h} = OutputResidualBlock(o_j)
- TrainLoss = (1/N)Σ_j MSE(ŷ, y) (Eq. 5) — point forecasts only; quantile heads future work
- Sizes: 200M (20L/1280d/16h) / 70M / 17M; training: 16 TPUv5e × 2 days (200M); random masking r∈[0,p−1] of first patch
- Assumes: univariate only; no covariates; MSE Gaussian noise; context ≤512
## Data sources named
Pretraining: Google Trends (~22k queries, ~0.5B pts), Wikipedia pageviews (~300B pts), 3M synthetic series (ARMA, seasonal sines, trends with change-points, steps), M4, Electricity, Traffic, Weather; eval: Monash (18 datasets), Darts (8 series), Informer ETT (ETTm1/m2/h1/h2); code: only llmtime referenced (paper planned open weights release)
## Findings (numbers and facts, not vibes)
- Monash (scaled MAE, geometric mean): TimesFM best overall; slightly better but within significance of N-BEATS; outperforms supervised DeepAR; improves on llmtime (GPT-3.5) by >25%
- Darts: within significance of best (llmtime, seasonal ARIMA); Informer ETT: TimesFM best; supervised PatchTST within significance
- Ablations: performance improves monotonically with size/FLOPS; synthetic data addition helps (Fig 3d)
- Limitations: MSE-only (no calibrated uncertainty — unsuitable as-is for a picks engine); no covariates (weather/injuries/lines not consumable); context 512 pts vs NFL's 17-game seasons (needs cross-season design); results as relative rankings from figures, no absolute MAE tables
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the canonical architecture to copy for a GSE sports-sequence foundation model — NFL corpus (weekly team EPA/success/margin/pace, 2002–2024, ~50k–200k univariate windows + NCAA margins + market lines) + sports-calibrated synthetic ARMA regime-shift generators; copy TimesFM exactly with input patch 8, output patch 16, ~12 layers/1024d, but add a multi-quantile output head (10 quantiles) instead of MSE; serve weekly batch (Tuesday + Sunday morning); improvement: synthetic-real pretraining curriculum — regime-shift synthetic generators teach faster adaptation to new coaching staffs/QBs
## Engine-actionable? (yes/no + one-line what)
Yes — build sports-TimesFM (~3–5 weeks corpus + harness, 1–2 weeks quantile head + serving); gate: on 2022–2023 walk-forward holdout, ≥0.005 lower mean CRPS than naive seasonal-margin baseline AND beats it in both seasons; reject on any leakage-audit flag.
