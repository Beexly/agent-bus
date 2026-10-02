# docs/arxiv-program/research/2026-09-21/arxiv-deep/2130-fine-tuning-large-time-series-model-sff.md
## What it is (1-2 sentences)
Ledger deep-read of arXiv:2606.08578v1 (SFF authors, 2026) on Smoothed Full Fine-tuning — interpolating pretrained weights with a fresh random initialization before fine-tuning to escape sharp pretraining minima. Verdict: ADOPT — a two-line change validated across 8 large time-series models × 9 datasets; proposed as the default fine-tuning protocol for every GSE sports-TSFM adaptation.
## Key metrics/methods (formulas where given, else "not specified")
- Θ₃ = α·Θ₁* + (1−α)·Θ₂, where Θ₁* = pretrained weights, Θ₂ = fresh random initialization, α ∈ {0.3, 0.5, 0.7, 0.9} selected on validation (GSE spec narrows to α ∈ {0.5, 0.7} for small validation windows).
- Intuition: pretrained weights sit in a sharp minimum of the pretraining loss; interpolating toward random init moves the start out of the sharp basin while retaining most pretrained knowledge, settling in a flatter minimum of the target loss.
- Cost: one extra forward-free arithmetic op; fine-tuning proceeds normally from Θ₃.
- Metric in paper: MSE (and MAE) on standard forecasting horizons.
## Data sources named
9 forecasting benchmarks (standard long/short-horizon: ETT family, Electricity, Weather, Traffic, etc.). 8 large time-series models (LTSMs): Timer, TimesFM, MOMENT, UniTS, Moirai, Chronos, TTMs, Sundial. Code: https://github.com/Meteor-Stars/SFF.
## Findings (numbers and facts, not vibes)
- SFF reduces MSE by 3% on average and up to 6.5% versus ordinary full fine-tuning, aggregated across models and datasets.
- Gains consistent across architectures (encoder-only MOMENT, decoder-only TimesFM, tokenized Chronos, any-variate Moirai) — the effect is not architecture-specific.
- α sensitivity: best α varies by dataset/model; the 4-point grid suffices.
- Caveats: with small sports validation windows (one season), α selection itself can overfit — prefer α=0.5–0.7 fixed or nested validation; 3% average gain is modest and may drown in season-to-season variance — needs multi-season aggregation to detect; no probabilistic-metric evaluation in the paper (MSE only), so CRPS/WQL analog still needs verification on sports data.
- Proposed GSE acceptance gate: ADOPT SFF as default if it beats standard full-FT on MSE in the majority of test seasons with no CRPS regression >1%; hard REJECT if α-selection validation shows grid choice flipping sign across seeds (selection noise > effect).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Default protocol for every sports-TSFM fine-tune (Chronos, Moirai, Lag-Llama, TimesFM backbones): OTHER.
- Ablation harness: always run standard full-FT alongside SFF on seasonal holdout and log the delta to build GSE-internal evidence base: OTHER.
- Combine with adapters: SFF the backbone, then train ChronosX-style adapters on top; test additive vs. redundant gains: OTHER.
- α-schedule improvement: anneal from low α (exploration) to high α (exploitation) across fine-tuning epochs — a "smoothing curriculum" vs fixed-α SFF: OTHER.
- No QB, coaching, OL, trust-signal, or scheme content present.
## Engine-actionable? (yes/no + one-line what)
Yes — make SFF (Θ₃ = αΘ₁* + (1−α)Θ₂, α∈{0.5,0.7} selected on validation season) the default initializer for all sports-TSFM fine-tunes with an ablation harness logging the SFF-vs-standard-FT delta on every seasonal holdout (<1 engineer-week to integrate).
