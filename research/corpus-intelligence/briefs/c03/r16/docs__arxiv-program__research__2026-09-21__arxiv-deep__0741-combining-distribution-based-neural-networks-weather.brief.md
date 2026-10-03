# docs/arxiv-program/research/2026-09-21/arxiv-deep/0741-combining-distribution-based-neural-networks-weather.md
## What it is (1-2 sentences)
A deep-read ledger of arXiv:2103.14430 (Clare, Jamil, Morcrette 2021), which trains per-variable ResNets to output full predictive PDFs as 100-bin softmax distributions and stacks them with a shallow CRPS-trained network for weather forecasting. Verdict in file: ADAPT — only the binned-softmax head + shallow stacking architectural pattern transfers to GSE's game-total/margin modeling; the weather application and the paper's statistically flawed uncertainty calculation are not adopted.

## Key metrics/methods (formulas where given, else "not specified")
- Softmax binned PDF: p_k = exp(z_k)/Σ_j exp(z_j) over K=100 bins.
- CRPS for binned forecasts: Σ over bins of (CDF_forecast − CDF_obs)² × bin width; stacking network trained to minimize CRPS of the combined distribution.
- Stacking: shallow net (2×36 ReLU + softmax) over concatenated member 100-bin outputs; each ResNet emits 32 dropout-sampled distributions.
- NOT ADOPTED: the paper's "confidence interval" divides the distribution SD by √100 (bins) — a misuse of standard-error-of-the-mean that yields nominal 95%/99% intervals containing only ~14–20% of outcomes. Flagged as a critical statistical flaw.

## Data sources named
WeatherBench / ERA5 reanalysis 1979–2018 (5.625° grid, 32×64), variables Z500 and T850, 3-day and 5-day horizons; baselines Scher & Messori, "dressed ERA", operational IFS CRPS values from literature. Code: github.com/mc4117/ResNet_Weather.

## Findings (numbers and facts, not vibes)
- Stacked-network test CRPS (2017–2018): Z500: 211 (3-day), 1500 (5-day); T850: 1.22 (3-day), 1.69 (5-day).
- Scher & Messori Z500 benchmarks: 526 and 707 — the stacked model beats them substantially.
- T850 references: dressed ERA 1.44/1.18, operational IFS 0.98; stacked model (1.22/1.69) sits between.
- Within-1σ containment: 64.7%, 71.2%, 67.3%, 71.2%; within-2σ: 93.6%, 94.0%, 94.0%, 94.2% — approximately Gaussian-consistent, modestly under-dispersed at 1σ.
- Compute: each ResNet ~12 hours; stacking network ~30 min on RTX6000 (2 GPUs, 48GB).
- Fixed time splits: 1979–2011 train, 2011 validation, 2012–2016 stack-train, 2017–2018 test.
- The file proposes a bin-adaptive variant for sports: quantile-spaced bins concentrated at key betting numbers (41/44/47/51 for totals, 3/7/10 for spreads) instead of uniform binning.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Binned-softmax distribution heads + CRPS-trained shallow stacking transfer to game-total/margin probabilistic models — a new capability vs GSE's current point+interval outputs.
- [OTHER] Key-number bin placement (3/7/10 spreads; 41/44/47/51 totals) concentrates resolution where betting value lives.
- [OTHER] Reproducible test gate: ≥3% CRPS improvement over Gaussian baseline on 2024 NFL totals before adoption.

## Engine-actionable? (yes/no + one-line what)
Yes — prototype a 60-bin softmax distribution head over totals [20,80] with a 2×36 ReLU stacking net, gated on ≥3% CRPS gain vs the Gaussian baseline.
