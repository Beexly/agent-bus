# arxiv-program/research/2026-09-21/arxiv-deep/1124-bootstrap-aggregation_time_series_causal_discovery.md
## What it is (1-2 sentences)
Deep read of "Bootstrap Aggregation for Time Series Causal Discovery" (arXiv:2306.08946v2): moving-block bootstrap + edge-wise majority voting (Bagged-PCMCI+) to stabilize causal graph discovery on autocorrelated, short time series. Verdict in-file: **ADAPT** — adopt the bootstrap + majority-vote protocol with B≥100 guidance, not its uncalibrated confidence interpretation.
## Key metrics/methods (formulas where given, else "not specified")
- Procedure: for b=1..B, draw moving-block bootstrap sample (resample moving-window sample indices, retaining lag structure), run PCMCI+ → graph G_b; final edge type = majority vote over {G_b}; confidence(e) = edge frequency across runs.
- No novel equations. Assumptions: moving-block bootstrap preserves temporal dependence; edge-wise aggregation acceptable post-processing; discovery-algorithm output is the right aggregation unit. Also tested with PC and LPCMCI variants.
## Data sources named
- Synthetic structural causal processes only (lagged + contemporaneous links, nonlinearities, non-Gaussian noise, high autocorrelation; varying N variables, T sample length, τmax max lag). No public dataset; no code stated.
## Findings (numbers and facts, not vibes)
- Bagging improves adjacency and contemporaneous-orientation precision/recall; gains largest for short samples, many variables, high autocorrelation — the hard regime.
- B=50–200 gave similar broad performance; paper recommends B≥100. Confidence-frequency MAE: slightly below 3% for lagged/all links, ~7% for contemporaneous links. B 25→500 reduced frequency error ~10% but increased un-parallelized runtime ~20×.
- Limitations: synthetic-only validation; edge-wise aggregation can create cyclic graphs (needs cycle-breaking post-pass); confidence frequencies are stability measures, not calibrated causal probabilities; high compute (100+ discovery runs); no code.
- GSE use case: causal structure in team/season time series — which lineup-usage, pace, matchup variables drive EPA; momentum/regime questions; injury→performance pathways. Implementation: tigramite (PCMCI+ reference) + moving-block bootstrap wrapper, B=100, cycle-breaking post-pass, on nflverse weekly team-level series 2015–2024; ~2 engineer-weeks.
- Gate: adopt if bagged-PCMCI+ beats single-run PCMCI+ on adjacency F1 by ≥10% relative on semi-synthetic NFL test (real 2015–2022 team-week series with injected known links), with contemporaneous-orientation precision ≥ single-run's.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: discovering which lineup-usage/pace/matchup variables causally drive EPA is a coaching-tendency discovery tool; momentum/regime questions and injury→performance pathways inform coaching narratives.
- SCHEME: causal graph of pace/matchup/personnel drivers of EPA feeds scheme-tendency profiles.
- OTHER: causal discovery is the discovery complement to existing causal-estimation ledgers (0142, 0265, 0272, 0771, 1121, 1122); cite WIP CEPT, do not duplicate.
## Engine-actionable? (yes/no + one-line what)
yes — wrap tigramite PCMCI+ in a moving-block bootstrap (B=100) with cycle-breaking and majority vote to discover causal drivers of team EPA on nflverse weekly series, gated on ≥10% relative adjacency-F1 gain over single-run PCMCI+ on semi-synthetic NFL data.
