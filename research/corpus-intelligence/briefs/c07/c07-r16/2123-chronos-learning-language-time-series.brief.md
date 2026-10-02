# arxiv-program/research/2026-09-21/arxiv-deep/2123-chronos-learning-language-time-series.md

## What it is (1-2 sentences)
Full-paper read (ar5iv HTML) of Chronos (arXiv:2403.07815v2, Ansari et al., Amazon, 2024): time-series forecasting reframed as next-token prediction — mean-scaled, uniformly quantized series fed to a T5/GPT-2 trained with categorical cross-entropy, yielding a probabilistic zero-shot forecaster via autoregressive path sampling. Lane: timeseries_foundation. Ledger verdict ADAPT — probabilistic by construction (sampled paths, WQL-native), mapping directly onto GSE's calibration needs; borrow the tokenization + T5 recipe for a sports model and pair with covariate extensions (ChronosX), never deploy univariate-only Chronos for sports pricing.

## Key metrics/methods (formulas where given, else "not specified")
- Scaling: s = (1/C)Σ_{i=1}^C |x_i|; x̃_i = x_i/s (fallback for degenerate s=0).
- Quantization: q(x̃) = argmin_b |x̃ − c_b|, c_b uniformly spaced over [−15,15], B=4096 bins; out-of-range values clipped.
- Objective: θ* = argmin_θ −Σ_{t=1}^{H} log p_θ(z_{C+t} | z_{1:C+t−1}) (categorical cross-entropy on forecast-horizon tokens, with label smoothing). Inference: sample autoregressive paths (temperature/categorical), map tokens back to values, unscale → empirical predictive distribution; point forecast = median path.
- Models: Chronos-T5 Mini/Small/Base/Large (20M/46M/200M/710M), Chronos-GPT2 (90M). Training: 200K steps, batch 256, AdamW, LR 0.001→0 (linear decay), weight decay 0.01; context 512, horizon 64, vocab 4096.
- Augmentation: TSMixup — 10M mixup augmentations combining k∈{2,3} series with Dirichlet weights; 1M synthetic GP series via KernelSynth (1024 length, 9:1 real:synthetic sampling).
- Metrics: WQL over quantiles {0.1,…,0.9} (probabilistic), MASE vs seasonal-naive (point), aggregated by geometric mean relative to seasonal naive.

## Data sources named
Training: 28 datasets, ~890K univariate series, ~84B observations (energy, transport, nature, web, sales, economics/finance, healthcare, web/cloud ops, synthetic). Eval: 15 in-domain + 27 zero-shot datasets (Monash, GluonTS, LibCity, etc.). Code + weights + data: Hugging Face `autogluon/chronos-t5-mini/small/base/large`, `chronos-bolt-*` successors; training scripts in the autogluon Chronos repo. Baselines: local statistical (SeasonalNaive, AutoETS, AutoARIMA, Theta, CES, CrostonSBA, NPTS, DynamicOptimizedTheta), deep (DeepAR, PatchTST, TFT, TiDE), pretrained LLM-for-TS (llmtime via GPT-3.5, GPT-4).

## Findings (numbers and facts, not vibes)
- Zero-shot: Chronos models ranked 2nd–4th in probabilistic (WQL) rankings; Chronos-T5 (Large) ranked 2nd on point forecasting (MASE) — all zero-shot against models trained per dataset.
- In-domain: Chronos models beat almost all task-specific models on both WQL and MASE; the 710M model was best.
- Fine-tuning: fine-tuned Chronos-T5 (Small) was the best method on average across both metrics, beating supervised PatchTST/DeepAR — with far cheaper training than from-scratch.
- llmtime (GPT-3.5/4): far behind Chronos on both metrics — text-tokenization is a poor time-series tokenizer.
- TSMixup ablation: removing mixup/synthetic hurt zero-shot; synthetic GP data helped most on small-data regimes.
- Limitations from the ledger: no covariates (can't ingest weather, injuries, rest, line movement); mean scaling fragile on constant sequences; zero-shot results confound pretraining overlap (Wikipedia-style familiarity effects per 2609.10357); quantization caps precision — must validate the 4096-bin grain against spread-market granularity (~0.5 pt) and key numbers 3/7; autoregressive sampling latency for Sunday-morning odds refresh.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (probabilistic margin forecasting): Chronos-style generative distributions give *native* probabilistic outputs with a direct WQL/CRPS training signal — a new lane complementary to GSE's conformal post-hoc (Mimo CQR) calibration.
- TRUST-SIGNAL: the fine-tuning result (small fine-tuned Chronos beats big supervised models, cheaply) is directly relevant to GSE's per-season adaptation strategy; the 4096-bin quantization precision limit must be validated before any pricing use.

## Engine-actionable? (yes/no + one-line what)
Yes — 1-day zero-shot Chronos-T5-Small/Base baseline on weekly NFL team-margin series (2002–2024, WQL/MASE vs engine v5.2.7 margins), then fine-tune Chronos-T5-Small on the sports corpus (team margins, totals, player usage) and pair with ChronosX adapters for weather/rest/injury covariates, feeding sampled quantile paths into the moneyline/CLV pricing layer; ADOPT gate: fine-tuned Chronos beats engine margin MAE by ≥0.3 points AND WQL ≤0.95× seasonal-naive on 2021–2024, with 80%-interval empirical coverage within 5 pts of nominal.
