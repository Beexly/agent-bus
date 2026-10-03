# docs/arxiv-program/research/2026-09-21/arxiv-deep/0741-combining-distribution-based-neural-networks-weather.md
## What it is (1-2 sentences)
Ledger of arXiv:2103.14430 (Clare, Jamil, Morcrette 2021): ResNets that output a 100-bin softmax predictive distribution for weather variables, combined via a shallow CRPS-trained stacking network. Verdict ADAPT for the architecture pattern (binned-softmax head + stacked combination); the paper's own uncertainty quantification is flagged as statistically flawed and must not be imported.
## Key metrics/methods (formulas where given, else "not specified")
- Binned softmax PDF: p_k = exp(z_k)/Σ_j exp(z_j) over K=100 bins.
- CRPS on binned CDFs: Σ_bins (CDF_forecast − CDF_obs)² × bin width.
- Stacking: shallow net (two 36-unit ReLU layers + softmax) over concatenated 100-bin member outputs, trained minimizing CRPS on a separate stack split.
- Within-1σ/2σ containment check (paper's CI computation divides SD by √100 — a misuse of the standard-error formula; ledger warns DO NOT import).
## Data sources named
WeatherBench / ERA5 reanalysis (1979–2018, 5.625° grid), variables Z500 and T850, 3- and 5-day horizons; baselines from Scher & Messori, "dressed ERA", operational IFS literature values. Compute: ~12h per ResNet, ~30 min stacking, on RTX6000 (2 GPUs, 48GB).
## Findings (numbers and facts, not vibes)
- Stacked CRPS (2017–2018 test): Z500: 211 (3-day), 1500 (5-day); T850: 1.22 (3-day), 1.69 (5-day).
- Scher & Messori Z500 benchmarks: 526 and 707 — stacked model beats them substantially.
- T850 references: dressed ERA 1.44/1.18, operational IFS 0.98 — stacked model (1.22/1.69) lands between.
- Within-1σ containment: 64.7%, 71.2%, 67.3%, 71.2%; within-2σ: 93.6%, 94.0%, 94.0%, 94.2% — roughly Gaussian-consistent, mildly under-dispersed at 1σ.
- Nominal 95%/99% intervals from the paper's flawed CI formula contained only ~14–20% of outcomes.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Binned-softmax + shallow CRPS stacking pattern is a new capability candidate for GSE game-total/margin distributions (full PDF head instead of point + interval).
- [OTHER] Proposed bin-adaptive resolution: concentrate bins near key numbers (totals 41/44/47/51; spreads 3/7/10) rather than uniform bins — the paper's uniform binning wastes resolution on irrelevant tails.
- [TRUST-SIGNAL] Ledger's acceptance gate: adopt only if binned+stacked CRPS ≥3% better than Gaussian baseline on a 2024 holdout with no calibration degradation (PIT uniformity).
## Engine-actionable? (yes/no + one-line what)
Yes — add a 60-bin softmax distribution head for game totals and combine 2–4 feature-subset variants with a shallow CRPS-trained stacker; success gate is ≥3% CRPS improvement over the Gaussian baseline.
