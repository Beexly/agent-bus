# arxiv-program/research/2026-09-21/arxiv-deep/2188-tsflex-flexible-time-series-processing-feature-extraction.brief.md
## What it is (1-2 sentences)
Ledgered deep read of arXiv:2111.12429v2 (tsflex, SoftwareX, IDLab Ghent University). A production-ready MIT-licensed Python toolkit for sequence-index-typed strided-window time-series processing and feature extraction, with wrappers for tsfresh/TSFEL/scipy/sklearn feature functions. Verdict: ADOPT.
## Key metrics/methods (formulas where given, else "not specified")
- Architecture: `tsflex.processing` (SeriesPipeline of SeriesProcessor steps) + `tsflex.features` (FeatureCollection registry of FeatureDescriptors, each = series names + feature function + window + stride)
- Key design: window/stride typed as the sequence index (e.g. `window="5min"`, `stride="30s"` on DatetimeIndex), no fixed-sampling assumption; pandas-native; `make_robust` NaN-safe wrapper; multiprocessing + chunking + serialization
- No equations (software paper)
## Data sources named
Synthetic benchmark: 5-channel float32 DataFrame, 1 hour at 1000 Hz, no gaps; 20 fresh-process runs, profiled with VizTracer on Intel Xeon E5-2650 v2 / Ubuntu 18.04. Production citation: mBrain study real-time sensor pipelines. Code: https://github.com/predict-idlab/tsflex, `pip install tsflex`; paper version 0.2.3 (2021).
## Findings (numbers and facts, not vibes)
- Peak memory, sequential (MB): tsflex 1.3 ± 0.1; TSFEL 3.5 ± 0.3; seglearn 435.3 ± 1.5; tsfresh 3540 ± 13.9
- Runtime, sequential (s): tsflex 4.3 ± 0.1; TSFEL 16.4 ± 0.8; seglearn 9.2 ± 0.1; tsfresh 169.8 ± 1.6; multiprocessing: tsflex 0.7, TSFEL 2.1, tsfresh 98.5
- Paper claims: ~3× faster and ~2.5× less peak memory than closest competitor (TSFEL)
- Limitations: benchmark ran on synthetic regular data (flexibility advantages un-benchmarked); gap handling is the feature function's job (naive function on gapped data silently computes garbage without `make_robust`); pandas-based, not distributed; version drift (paper is v0.2.3, 2021)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bye-week gaps are exactly tsflex's index-based-window problem — standardized extraction layer for the rolling-window feature program (catch22, windowed tsfresh, windowed CNN features)
- OTHER: multi-window/stride registration in one pass enables a "scale-space" feature tensor per team-game (4/8/17-game windows) with learned per-scale attention — the ledger's improvement experiment
## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT as the extraction backbone: pip-install, build a FeatureCollection for gse-lab rolling features on game-date-indexed series, regression-test outputs against hand-rolled CSVs, gate on exact numerical match + ≥2× speedup + correct gap handling. (~2 engineer-days)
