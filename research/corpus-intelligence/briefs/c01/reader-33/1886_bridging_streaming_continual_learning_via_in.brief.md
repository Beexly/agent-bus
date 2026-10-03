# docs/arxiv-program/research/2026-09-21/arxiv-deep/1886-bridging-streaming-continual-learning-via-in.md
## What it is (1-2 sentences)
Ledger on a position paper (Lourenço, Gama, Xing, Marreiros 2025, arXiv:2512.11668v1) arguing large in-context tabular models (TabPFN-style) unify Stream Learning and Continual Learning: keep parameters FIXED, treat the input context as the learnable object — regime adaptation = choosing which past weeks enter the context. Verdict: ADAPT — replace weekly model retraining with context construction; needs a TabPFN-vs-GBM bake-off on NFL data.

## Key metrics/methods (formulas where given, else "not specified")
- No new algorithm or equations in the paper. Two principles named (not operationalized): distribution matching (current distribution = plasticity; prior distributions = stability) and distribution compression (diversification to avoid redundancy + retrieval to re-activate relevant past data).
- Sketch mechanisms listed: histograms, wavelets, count-min sketches, reservoir/coreset sampling (fixed-size guarantees); retrieval = neighborhood-based selection around query, referee meta-models, repository matching on drift.
- Cited capacity claim: modern LTMs handle contexts "exceeding 500K samples and 50K features."
- GSE prototype spec in file: off-the-shelf TabPFN; context = (a) plasticity slice — trailing 8 weeks, all games; (b) stability slice — diversification-sampled historical games (k-means/coreset, one exemplar per cluster, capped ~500 games); (c) retrieval slice — cosine-similar historical games (same-QB-tier or same-spread-band). TabPFN constraints: ≤~100 features, numeric; categorical team IDs need target-encoding. Weekly update = context rebuild, zero training. Calibration: temperature scaling on TabPFN outputs mandatory.

## Data sources named
No new experiments — this is a synthesis paper. Empirical anchor is cited prior work [62] (authors' own): TabPFN + inference-time sketching on streaming benchmarks NOAA, SmartMeter, Electricity, Rialto, Posture, CoverType, PokerHand — reported to "consistently outperform" Adaptive Random Forest and Streaming Random Patches. No sizes, schemas, splits given in this paper.

## Findings (numbers and facts, not vibes)
- Zero new numbers in this paper; the only quantitative claim is imported from [62]: TabPFN + sketching "consistently outperforms" ARF/SRP on the 7 streaming benchmarks (margins not reproduced — treat as pointer, not evidence).
- No experiments, no equations, no code/data stated. Context construction is hand-wavy per the ledger.
- Ledger limitations noted: ignores calibration (LTM in-context probabilities not shown calibrated — GSE needs Brier/log-loss); TabPFN's in-context strength is on small tabular datasets; sketch failure mode (silently dropping regime-relevant examples) unaddressed.
- Natural ALTERNATIVE to ledgers 1882–1885 (which assume retrain/refit the same parametric model).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: architectural alternative — regime change (new OC, QB injury) handled by shifting the context's recency-vs-diversity balance (a single scalar) instead of a refit pipeline.
- OTHER: proposed improvement experiment — learn the context-composition policy via exponential-weights over 3–4 fixed sketch policies updated weekly by Brier; meta-weights double as a readable regime indicator for the dashboard.
- OTHER: reproducible test gate — ADOPT iff on 2020–2025 walk-forward: TabPFN Brier within 0.003 of GBM baseline, ECE ≤ 0.03 after temperature scaling, post-regime-change recovery within 3 weeks on ≥60% of labeled episodes, inference <60 s CPU.

## Engine-actionable? (yes/no + one-line what)
yes — prototype TabPFN weekly win-probability predictor with trailing-8-week + coreset + retrieval context (zero-training weekly updates), then run the specified walk-forward Brier/ECE bake-off vs the GBM baseline; ~2 days prototype + sketch builder.
