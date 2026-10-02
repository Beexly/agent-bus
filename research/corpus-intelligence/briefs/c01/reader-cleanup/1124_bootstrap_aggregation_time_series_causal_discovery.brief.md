# arxiv-program/research/2026-09-21/arxiv-deep/1124-bootstrap-aggregation-time-series-causal-discovery.md

## What it is (1-2 sentences)
arXiv:2306.08946v2 (Bootstrap Aggregation for Time Series Causal Discovery) proposes Bagged-PCMCI+: resample time series via moving-block bootstrap, re-run PCMCI+ causal discovery per replicate, and aggregate graphs by edge-wise majority vote with bootstrap edge frequencies as confidence scores. Verdict: ADAPT — a directly usable robustness upgrade for GSE's causal-discovery work on time-series data, citing (not duplicating) Garrett's WIP CEPT.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified — no novel equations. Procedure: for b = 1..B, draw moving-block bootstrap sample (resample moving-window indices, not raw time points, preserving lag structure), run PCMCI+ → graph G_b; final edge type = majority vote over {G_b}; confidence(e) = frequency of edge e across runs (stability measures, NOT calibrated probabilities).
- Guidance: B ≥ 100; B = 50–200 similar broad performance in the example; increasing B from 25 → 500 reduced frequency error ~10% but increased un-parallelized runtime ~20×.
- Implementation spec: tigramite (PCMCI+ reference) + moving-block bootstrap wrapper; cycle-breaking post-pass (drop lowest-confidence edges in cycles, since edge-wise aggregation can create cyclic graphs); embarrassingly parallel across replicates.
- Improvement path: weighted voting by per-run model fit (conditional-independence test p-value profile or BIC score) instead of one-graph-one-vote, to sharpen confidences and reduce cycles.

## Data sources named
Synthetic structural causal processes only: lagged + contemporaneous links, nonlinearities, non-Gaussian noise, high autocorrelation; varying N (variables), T (sample length), τmax (max lag). Also tested with PC and LPCMCI variants. No public dataset, no code stated, no real-data demonstration.

## Findings (numbers and facts, not vibes)
- Bagging improves adjacency and contemporaneous-orientation precision/recall vs single-run PCMCI+; gains largest for short samples, many variables, high autocorrelation — the hard regime.
- Confidence-frequency MAE: slightly below 3% for lagged/all links, ~7% for contemporaneous links.
- B = 50–200 gave similar performance; recommended B ≥ 100. Runtime scales ~20× from B=25 → B=500 un-parallelized for ~10% frequency-error reduction.
- Acknowledged: edge-wise aggregation can create cyclic graphs; confidence frequencies are stability measures, not calibrated causal probabilities; high compute cost (100+ discovery runs).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Discovery complement to GSE's existing causal-ESTIMATION work (ledgers 0142, 0265, 0272, 0771, 1121, 1122): graph discovery first, effects second — a distinct sub-task, cite Garrett's WIP CEPT, do not duplicate.
- [COACHING] Use case: discover causal structure in team/season time series — e.g., which lineup-usage, pace, and matchup variables drive EPA; momentum/regime questions; injury→performance pathways. Data: nflverse weekly team-level series (2015–2024); player-weekly series for lineup questions.
- [OTHER] Gate: adopt only if bagged-PCMCI+ (B=100) beats single-run PCMCI+ on adjacency F1 by ≥10% relative on a semi-synthetic NFL test (real 2015–2022 team-week series with injected known links) with contemporaneous-orientation precision ≥ single-run's; otherwise skip the compute bill (~2 engineer-weeks).

## Engine-actionable? (yes/no + one-line what)
Yes — wrap GSE's time-series causal discovery (tigramite PCMCI+) in a moving-block bootstrap + majority-vote protocol (B=100) for momentum/lineup/EPA-driving structure discovery, subject to the ≥10% adjacency-F1 gate on semi-synthetic NFL data.
