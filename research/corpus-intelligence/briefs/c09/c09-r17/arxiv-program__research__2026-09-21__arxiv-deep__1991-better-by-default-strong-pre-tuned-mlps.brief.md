# arxiv-program/research/2026-09-21/arxiv-deep/1991-better-by-default-strong-pre-tuned-mlps.md
## What it is (1-2 sentences)
Full-paper research ledger on Holzmüller, Grinsztajn, Steinwart (2024) "Better by Default: Strong Pre-Tuned MLPs and Boosted Trees on Tabular Data" (arXiv:2407.04491), verdict ADAPT, lane nas_automl. It argues meta-tuned default hyperparameters (RealMLP-TD + tuned GBDT defaults) plus algorithm selection over defaults beats per-dataset HPO on the time-accuracy tradeoff; the ledger prescribes deriving GSE's own meta-tuned defaults on temporally-disjoint NFL data and running HPO only where it provably wins.
## Key metrics/methods (formulas where given, else "not specified")
- RealMLP/RealMLP-TD: improved MLP (one-hot encoding, robust scaling, smooth clipping) with meta-tuned defaults; tuned defaults (TD) tables for XGBoost, LightGBM, CatBoost (Tables C.1–C.3): trends = row subsampling in all tuned defaults, 1000 estimators fixed, hist method for XGBoost.
- No equations stated in extracted text. Comparison axis: time-accuracy tradeoff (not accuracy alone); honest meta-generalization via disjoint meta-train (118 datasets) → meta-test (90 datasets, deliberately more extreme).
## Data sources named
Meta-train benchmark: 118 datasets; meta-test: 90 disjoint datasets; plus Grinsztajn et al. (2022) GBDT-friendly benchmark. Medium-to-large tabular datasets (1K–500K samples), classification + regression. Exact numeric tables not extractable from this read — verify from PDF before citing magnitudes.
## Findings (numbers and facts, not vibes)
- RealMLP has "favorable time-accuracy tradeoff compared to other neural baselines and is competitive with GBDTs in terms of benchmark scores".
- "A combination of RealMLP and GBDTs with improved default parameters can achieve excellent results without hyperparameter tuning".
- Tuned defaults "cannot match HPO on average" but "outperform the library defaults on the meta-test benchmark".
- "Algorithm selection over default methods provides a better time-performance tradeoff than HPO."
- (INFERENCE: quantitative magnitudes were not extractable from this read; the ledger flags that tables rendered as figures.)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — tabular AutoML / model-defaults policy lane: immediately applicable to GSE's GBDT + AutoGluon zoo; connects to ledger 1985 (TabRepo).
## Engine-actionable? (yes/no + one-line what)
yes — wire RealMLP-TD + paper TD defaults as new model defaults (2–3 days), derive GSE-TD defaults meta-tuned on 2015–2020 seasons validated on 2021–2025 (1 week); ADOPT iff paper-TD beats library defaults by ≥0.002 log-loss with no search and selection-over-defaults reaches within 0.002 of HPO at ≤20% compute.
