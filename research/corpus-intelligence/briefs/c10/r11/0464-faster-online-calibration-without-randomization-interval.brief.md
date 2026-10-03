# arxiv-program/research/2026-09-21/arxiv-deep/0464-faster-online-calibration-without-randomization-interval.md
## What it is (1-2 sentences)
Deep read of Gupta & Ramdas (2022), arXiv:2204.13087v2: a theory paper proving a deterministic online forecasting protocol (POTC-Cal) achieves O(1/T) calibration error on interval forecasts without randomization. Corpus verdict: ADAPT — the online recalibration layer is genuinely uncovered territory in GSE's stack, but proof-only with no sports data.
## Key metrics/methods (formulas where given, else "not specified")
Calibration error CE_T = Σ_i (N_i^T/T)·|M_i − p_i^T|; ε-calibration error ε-CE_T = max(CE_T − ε, 0). Theorem 1: POTC-Cal guarantees ε-CE_T ≤ m/T (deterministic O(1/T) rate) vs Theorem 3 lower bound Ω(1/√T) for any classical randomized point-forecasting strategy. POTC-Cal ("Predict-Then-Choose"): maintains 2ε-grid {M_1,…,M_m} ⊂ [0,1], tracks per-bin deficit/excess statistics, outputs single point or adjacent pair (interval width ≤ 2ε) per round; realized y_t selects which endpoint counts. Supporting: Lemmas 1, 2, 5 (conditions A/B); PI-F99 inequality; Bernoulli appendix with epoch schedule K_k = ⌈(0.85 log T_k/ε)²·(log log(T_k/2) + 0.72 log(5.2 m T_k²))⌉ giving E[ε-CE_T] ≤ O(poly log T / T), E[A^T] = T − O(poly log T), Pr(G) = 1 − O(1/T). Reference rate cited: Qiao & Valiant Ω(T^−0.472).
## Data sources named
None — no empirical dataset; fully adversarial online binary-forecasting protocol (proof-based). Extension to bounded [0,1]-valued outcomes given in appendices.
## Findings (numbers and facts, not vibes)
- Rate table (all theorems, not measurements): deterministic point forecasts Θ(1) (uncalibratable); classical randomized point forecasts Θ(1/√T) expected ε-calibration; POTC interval forecasts O(1/T) deterministic (ε-CE_T ≤ m/T).
- Paper's own open problems: matching lower bound for POTC, more than two choices per round, multidimensional forecasts (the latter is exactly what a multi-market engine needs).
- Caveats noted in the brief: interval outputs are awkward for GSE (cards, edge sheets, Kelly sizing all need point probabilities); no canonical collapse given; m/T bound scales with grid size m (fine grids weaken the constant); guarantee covers calibration, not sharpness (constant 0.5-forecaster is perfectly calibrated); adversarial ≠ NFL — practical advantage over running Platt/isotonic recalibrator is unquantified.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Deterministic O(1/T) online recalibration protocol for streaming probabilities (OTHER)
- GSE's existing calibration stack (CQR, Platt/isotonic, Venn-Abers, Mondrian conformal, Clopper-Pearson, ECE-by-slice) is all batch; online recalibration is uncovered territory (OTHER, TRUST-SIGNAL — calibrated probability claims)
- Interval-to-point collapse needed before touching published picks; interval width could serve as internal uncertainty signal (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
Yes — implement POTC-Cal (start ε = 0.025) as a parallel online recalibration layer on the chronological probability stream, backtest 2020–2025 NFL spread-cover probabilities vs raw stream and running-Platt baseline; adopt only if ε-CE ≤ 0.5× running-Platt's AND prediction SD ≥ 0.8× raw's AND Brier no worse than raw + 0.002.
