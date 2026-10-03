# docs/arxiv-program/research/2026-09-21/arxiv-deep/1710-ohmicflow-extreme-weather.md
## What it is (1-2 sentences)
Li, Liu & Zhao (arXiv:2608.28598, 2026): OhmicFlow forecasts transit passenger flow under extreme weather using an Ohm's-law-inspired demand/impedance/flow decomposition; the transferable trick is the counterfactual "voltmeter" — re-running the model with disrupted inputs swapped for normal-weather references to infer latent demand. Verdict in ledger: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Ammeter: future-aware TFT-GAT spatiotemporal backbone predicting disrupted flow Î (quantiles 0.1/0.5/0.9).
- Voltmeter: weight-shared replica with disrupted travel time replaced by normal reference (10th percentile of historical same-hour travel time) → counterfactual latent demand Û.
- PTC thermistor: impedance R̂_k,t = R^b_k,t [1 + α_i,t (I^in_i,t/η_i,p)²] + 1; Ohmic consistency loss Î ≈ Û/R̂ + KCL inflow-conservation supervision + priors (U ≥ I); R ≥ 1.
- Future-aware attention over Ω = T_h ∪ T_f (no causal masking) so predictions consume anticipated warnings.
## Data sources named
- 10 years of Shenzhen Metro data, 17 extreme weather events (typhoons, rainstorms); per-OD: historical flow, anticipated weather W_t, anticipated disrupted travel time τ, expected normal flow (same weekday/hour, most recent undisrupted week), static station/OD features; chronological splits (Events 1–5, 6–10, 11–14).
## Findings (numbers and facts, not vibes)
- Beats all 9 baselines on all 3 settings: MAE gains 38.6%/18.0%/17.1%, RMSE 38.2%/13.1%/16.3%, sMAPE 31.8%/22.9%/19.0% over best baseline.
- Uncertainty: narrowest intervals (MPIW 13.40/12.12/12.82) with highest/near-highest coverage (PICP 93.6%/93.4%/94.8%).
- Ablation: Ohmic constraint is the main driver; gains scale with disruption severity (slopes < 1 vs vanilla).
- Transplanting Ohmic modules onto other backbones improves most of them.
- Worst forward-input perturbation degrades RMSE only 2.30% (weather timing) / 0.31% (travel time).
- Case studies (Typhoons Nida 2016, Saola 2023): captures anticipatory demand shifts before landfall warnings that baselines miss.
- Limitations: 17 events small; "anticipated" times approximated from historical analogs; no public code; Shenzhen data proprietary; normal-flow reference leaks some post-event info.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Counterfactual weather-neutral inference = weather-neutral team strength estimation: OTHER (weather modeling) — GSE's first counterfactual-weather-inference ledger entry.
- Weather-edge (factual − counterfactual) as betting-signal diagnostic and weather-line shopping: TRUST-SIGNAL (decomposing prediction into stable strength vs weather edge).
- Future-aware attention over forecast weather for predictions: SCHEME-adjacent INFERENCE — no causal masking so anticipated warnings enter the prediction; tagged OTHER (modeling architecture pattern).
## Engine-actionable? (yes/no + one-line what)
yes — build weather/counterfactual.py: train GSE's game model with weather features, then run each game twice (factual weather vs neutral 70°F/5mph/no-precip); counterfactual output = weather-neutral team strength for ratings, difference = weather edge for line shopping; adopt if counterfactual ratings beat factual by ≥ 0.3 MAE points on 2024 holdout with correct sign on ≥ 60% of extreme-weather games.
