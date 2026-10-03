# arxiv-program/research/2026-09-21/arxiv-deep/1708-decision-oriented-weather-benchmarking.md
## What it is (1-2 sentences)
An operational benchmarking protocol for AI weather models on the Indian monsoon: evaluate on decision-relevant metrics (miss rate, false alarm rate) rather than generic skill scores, initialize hindcasts to expose false alarms and misses, check probabilistic calibration via reliability diagrams, and blend models when no single one dominates. ADAPT as GSE's weather-feed vendor selection and calibration protocol.
## Key metrics/methods (formulas where given, else "not specified")
- Stakeholder-relevant index (local monsoon onset date per 4° cell) instead of generic fields
- Deterministic: MAE / miss rate / false alarm rate vs climatology baseline; probabilistic: Brier skill score, AUC, ranked probability skill score, reliability diagrams; fair BSS/RPSS for unequal ensemble sizes
- Multi-period out-of-sample evaluation (2019–2024, 1965–1978, 2004–2021) + live 2025 operational test
## Data sources named
Six open AIWP models (AIFS, FuXi, FuXi-S2S, GraphCast, GenCast, NeuralGCM) + ECMWF IFS NWP; ground truth IMD 1° rain-gauge gridded data (1901–2024); dissemination blending algorithm in companion paper (Aitken et al.)
## Findings (numbers and facts, not vibes)
- Deterministic: most models beat climatology by ~2 days MAE at 1–15-day leads in the core monsoon zone; IFS and GenCast retain skill to ~3 weeks on all three deterministic metrics
- Probabilistic: IFS ensemble + GenCast + NGCM skillful to 15 days; IFS and NGCM positive BSS aggregated over 1–30 days
- All ensemble models overconfident — predicted probabilities above observed frequencies; needs calibration/blending
- No single model dominates across metrics/regions/periods → operational choice was calibrated AIFS+NGCM blend
- FuXi-S2S: skillful deterministic but negative BSS at 15 days — deterministic/probabilistic skill can disagree
- Framework informed real 2025 dissemination to 38 million farmers; models captured anomalous early-onset-then-pause weeks ahead
- Limitations: tiny test samples (~6 recent out-of-sample events); some models partly in-sample (marked); GenCast excluded on compute cost
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: weather-pipeline operations — define GSE decision-relevant events per game (sustained wind >15 mph, active precipitation, wind chill <20°F, heat index >95°F); run operational-style hindcasts over 3+ seasons scoring miss rate and false alarm rate against station observations (not just temperature RMSE); reliability diagrams for probabilistic feeds; inverse-FAR-weighted multi-vendor blend; improvement: test whether decision-benchmarked feed improves downstream engine spread/total CLV/Brier on weather-affected games vs RMSE-best feed (closes the 1702→1708 loop; success = +1.5% CLV on weather-game subset)
## Engine-actionable? (yes/no + one-line what)
Yes — build weather/vendor_benchmark.py (~3–4 days): hindcast 2021–2024 game-days vs ASOS stadium obs, score event-MR/FAR and BSS; gate: blended feed reduces game-day weather-event FAR ≥20% vs current single feed with no MR increase on 2024 holdout; always keep the reliability-diagram calibration step.
