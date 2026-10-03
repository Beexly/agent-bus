# arxiv-program/research/2026-09-21/arxiv-deep/1305-multi-scale-graph-wavenet-wind-speed-forecasting.md
## What it is (1-2 sentences)
A graph-neural-network wind-speed forecasting method (arXiv:2109.15239v1, Rathore et al. 2021): Multi-Scale Graph WaveNet with a learnable adjacency matrix over weather stations plus dilated causal convolutions for temporal modeling. Verdict ADAPT — the ledger calls it the most directly production-relevant wind-forecasting method in its wave for stadium weather networks.
## Key metrics/methods (formulas where given, else "not specified")
- Learnable adjacency: A = Softmax(E·Eᵀ), E = learned node embeddings (C-dimensional hyperparameter) — discovers station-to-station influence from data instead of using geographic distance.
- Temporal: dilated 1-D causal convolutions with exponentially increasing dilation (up to 8), residual + skip connections per layer, inception-style multi-scale stack.
- Architecture: stacked spatiotemporal layers with skip connections to the output layer.
- Targets: wind speed at each station at 6-, 12-, 18-, 24-hour horizons.
- Reported improvement: 4–5% over state-of-the-art methods on all four horizons.
## Data sources named
Real wind-speed measurements from five Danish cities (Esbjerg, Aalborg, Aarhus, Odense, Roskilde), years 2000–2010 (public meteorological records); no code stated.
## Findings (numbers and facts, not vibes)
- Outperforms state-of-the-art wind-speed forecasting methods on all four horizons (6/12/18/24h) by 4–5%.
- The single learnable adjacency matrix is credited with explaining the relative importance of neighboring stations better than fixed geographic graphs.
- Limitations per ledger: only five stations in one small country (dense, flat terrain); hourly-scale data — gust extremes not modeled; no exogenous NWP features; learned adjacency may overfit small networks.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Stadium wind forecasting for totals — OTHER (weather/environment lane, not a player intelligence tag)
## Engine-actionable? (yes/no + one-line what)
yes — Reimplement with NFL stadiums (or nearby mesonet stations) as graph nodes, forecast 6–24h ahead, and feed the wind distributions into the totals model's weather features, targeting the paper's 4–5% improvement bar over persistence/AR baselines.
