# arxiv-program/research/2026-09-21/arxiv-deep/1702-decision-calibration-weather-forecasts.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2512.14779 (Raeth & Ludwig, 2025), which compares ECMWF IFS ENS vs ArchesweatherGen ML weather models not on forecast skill (CRPS) but on a decision-calibration framework (cost gap between forecast-anticipated and observed decision costs) across frost, heat, and wind-power decision tasks. Verdict ADAPT: GSE should select and train weather inputs by decision cost on staking/lineup tasks, not by CRPS.
## Key metrics/methods (formulas where given, else "not specified")
- Bayes decision rule δ_c(F_x) = argmin_a E_{Y~F_x}[c(a,Y)] (Eq. 1); expected cost C_exp (Eq. 2); observed cost C_obs (Eq. 3); cost gap C_gap = |C_exp − C_obs| (Eq. 4); Monte-Carlo expectation ≈ (1/M)Σ_i c(a,Ŷ^(i)) (Eq. 6).
- Frost cost: binary protect/not, threshold θ, asymmetric ratio c∈(0,1), missed protection c·10 vs unnecessary (1−c)·10; heat task same structure; wind dispatch: 11 actions, linear under-delivery penalty slope u-pen, power law α=0.1, cut-in 3 / rated 13 / cut-off 23 m/s.
- Key structural insight: miscalibration only changes decisions where cost functions cross; elsewhere calibration is irrelevant. Binary threshold tasks (frost/heat) deviate most from CRPS rankings; uniform-punishment tasks (wind) deviate least.
## Data sources named
WeatherBench dataset (50-member ensembles, 2021, Europe, 1.5° resolution, 2m temp / 10m wind, leads 1–15 days); IFS HRES analysis and ERA5 as ground truth; ArchesweatherGen public model; EMODnet offshore wind-farm grid points.
## Findings (numbers and facts, not vibes)
- Frost: CRPS/PIT/SSR similar between models, yet decision-level rankings change as threshold θ rises; forecast-level detail invisible to global metrics changes conclusions. (COACHING — no; OTHER: decision-level model evaluation)
- Heat: Arches improves over IFS at high θ (tail events); per-grid-point maps show geographic ranking variation lost in spatial aggregation — Arches better in Mediterranean than central Europe. (OTHER: weather-source selection)
- Wind power: at the decision-relevant 1-day lead, Arches is slightly worse on CRPS/SSR but better on decision calibration and yields lower observed costs — "from an economic perspective, Arches is the better model." (OTHER: weather-source selection)
- Model rankings can flip between forecast-level and decision-level evaluation and across tasks.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Frost ranking flips at decision level: OTHER (evaluation methodology)
- Heat geographic ranking variation lost in aggregation: OTHER (stadium-specific weather feed selection)
- Wind: CRPS loser is the economic winner: OTHER (weather input selection for betting decisions)
- Calibration matters only where cost functions cross: OTHER (staking-threshold design — engine edge near stake/no-stake boundary is where calibration work pays)
## Engine-actionable? (yes/no + one-line what)
yes — implement decision-calibrated weather-source selection (C_gap/C_obs on stake/no-stake, totals lean, DFS swap tasks) and train the weather-to-adjustment mapping on decision loss rather than CRPS.
