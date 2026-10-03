# docs/arxiv-program/research/2026-09-21/arxiv-deep/2182-empirical-evaluation-time-series-feature-sets.md
## What it is (1-2 sentences)
The only systematic empirical comparison of the seven major time-series auto-extraction libraries (hctsa, catch22, feasts, tsfeatures, Kats, tsfresh, TSFEL) across computation-time scaling, within-set redundancy, and a new directed cross-set behavioral-overlap metric S(T|B). It gives an evidence-based tooling choice for auto-extracting rolling-window features from team metric sequences.

## Key metrics/methods (formulas where given, else "not specified")
- Directed overlap metric: S(T|B) = mean_i max_j |Spearman ρ(f_i^T, f_j^B)| — mean over test features i of the max absolute Spearman correlation with any benchmark feature j, computed across ~800 series; high S(T|B) means test set T adds little beyond benchmark B
- Timing: median + IQR computation time per set over synthetic series lengths T=100–1000, 10 repeats
- Within-set redundancy: PCA on the feature-output matrix per set; PCs needed for 90% variance
- Behavioral similarity measured as correlated outputs across the Empirical 1000 series (~800 diverse series), not code inspection
- Unified computation via the R package theft; versions pinned (hctsa v1.06, catch22 v0.1.12, feasts v0.2.1, tsfeatures v1.0.2, tsfresh v0.18.0, TSFEL v0.1.4, Kats initial release)

## Data sources named
- Empirical 1000 dataset (Fulcher et al.): over 800 diverse real-world and model-simulated time series
- Synthetic Gaussian white-noise series (noisy sinusoids as check) for timing at lengths 100, 250, 500, 750, 1000
- Benchmark machine: 2019 MacBook Pro, Intel Core i7 2.6 GHz 6-core
- Repro code: https://github.com/hendersontrent/feature-set-comp

## Findings (numbers and facts, not vibes)
- Timing on 1000-sample series: catch22 < 10 ms; TSFEL 0.03 s; Kats 0.06 s; feasts 0.47 s; tsfresh 2.53 s; tsfeatures 6.18 s; hctsa 16.5 s — four orders of magnitude spread. Per-feature: catch22 and TSFEL ~10^-4 s; tsfeatures ~3 s per feature.
- Redundancy (PCA to 90% variance): highest for TSFEL and tsfresh — in TSFEL, 90% of variance across 390 features captured with just 4 principal components; catch22 (designed for low redundancy) the least redundant.
- Cross-set overlap: average best-match |ρ| vs hctsa benchmark — catch22 0.96, feasts 0.84, Kats 0.84, tsfeatures 0.88, TSFEL 0.88, tsfresh only 0.55; tsfresh is the most distinctive test set (S(tsfresh|B) = 0.25–0.5 for all other benchmarks).
- 128 tsfresh features had max |ρ| < 0.2 vs any hctsa feature; 118 of 128 (92%) were raw FFT coefficients (real/imaginary components and angles). S(TSFEL|tsfresh) = 0.5 (TSFEL computes absolute FFT magnitudes but not real/imag/angle components). tsfeatures↔feasts overlap S ≈ 0.82 both directions; Kats vs those ≈ 0.72.
- Failure rates: tsfresh 25.2% of features failed at T=100 (all FFT coefficients 51–99 components); Kats 3 Holt–Winters features failed on white noise; hctsa ~0.6–0.9% failed at short lengths.
- Caveat: no predictive task was evaluated — "distinctive" ≠ "predictively useful"; tsfresh's FFT-coefficient distinctiveness may add zero signal for NFL outcomes. Overlap numbers are on univariate uniformly-sampled series — multivariate/irregular series (play-by-play with irregular spacing) not covered.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Direct tooling choice for the engine's auto-feature pipeline: catch22 (pycatch22, 22 features, ~ms) for production rolling-window extraction over team EPA/success-rate/pressure sequences; tsfresh only for offline exploration with aggressive redundancy pruning. GSE's hand-built metrics are not covered — this is new capability, not duplication.
- OTHER: The directed overlap metric S(T|B) is reusable as a de-duplication audit — treat GSE's hand-built metric library as benchmark B and auto-extracted features as test T, keeping only genuinely new information (|ρ| threshold).
- SCHEME: rolling-window sequence features (EPA/play, dropback EPA, rush EPA, pressure rate, turnover margin over 8-game windows) feed team-strength dynamics that could surface scheme/coaching trajectory shifts — though the paper itself has no scheme content; flagged as INFERENCE-adjacent.
- INFERENCE: feature computation failure rates at short windows (tsfresh 25.2% at T=100) are directly relevant since NFL rolling windows are short (8–17 games).

## Engine-actionable? (yes/no + one-line what)
Yes — add a catch22 rolling-window auto-feature block (pycatch22 on lagged rolling windows of team metric sequences) into the feature pipeline with a walk-forward acceptance gate (log-loss improvement ≥ 0.003 vs hand-built baseline), and use S(T|B) to prune auto features against the hand-built library; ~2–3 engineer-days for the extractor plus an offline tsfresh exploration pass.
