# docs/arxiv-program/research/2026-09-21/arxiv-deep/1171-anomaly-detection-ensemble-evidence-theory.md
## What it is (1-2 sentences)
Deep read of Arevalo et al. (2022, arXiv:2212.12092) on ensemble classification fused with Dempster–Shafer/Yager evidence theory, using fusion conflict as a signal to detect unknown/anomalous conditions on the Tennessee Eastman chemical-process benchmark. Verdict in-file: ADAPT — the conflict-as-anomaly trigger maps to GSE's pick-selection/abstention lane.
## Key metrics/methods (formulas where given, else "not specified")
- Evidence mass per classifier: m = [p_1·w_1, …, p_n·w_n, U], U = 1 − p·w (weights from F1 + class specialization + diversity; optional pre-cut of weak classifiers).
- Uncertainties: UQ_P = Π_i(1−P_i); UQ_DS = b_k (Dempster–Shafer conflict mass); UQ_Y = q(φ) (Yager conflict on universal frame).
- Anomaly rule: anomaly ⟺ (UQ_DS > τ_DS^max) AND (UQ_Y > τ_Y^max).
- Pool selection: combined expert-diversity strategy over performance + class specialization + diversity + pre-cut; ensemble sizes 2–10 tested.
## Data sources named
Tennessee Eastman simulation benchmark (Downs & Vogel; Chen 2019 dataset, IEEE DataPort): 52 input variables, 21 fault cases + normal, 480 training samples/case, 960 test samples/fault case (160 normal + 800 faulty); hard faults 3, 9, 15, 21. Train/val split 70/30.
## Findings (numbers and facts, not vibes)
- Easy cases: best individuals ~0.94–0.95 F1; selected ensembles 0.97 (multiclass), 0.98–0.99 (binary).
- Hard multiclass ECs ~0.22–0.23 F1 vs individuals 0.50–0.58 (ensemble hurts when base classifiers are poor); hard binary ECs ~0.62–0.63 vs 0.50–0.58 (helps).
- Cost: EC M5 vs H5-2 comparable avg F1 (0.62 vs 0.63) at 1.9% vs 92.9% relative inference time (~1/50th cost).
- Anomaly FDR across all faults: M3 87.97% vs DPCA-DR 83.51%, PCA 76.68%, AE 76.56%, AAE 78.55%, MOD-PLS 83.83%; M3 on hard faults 91.88/90.75/91.25/94.13% vs best literature (AAE ~34%, MOD-PLS 72.66%).
- Poor-classifier ECs (trained on (0,3), F1 0.20–0.30) had poor anomaly detection (0.03–0.24 F1) — poor classifiers add fusion noise.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: per-game DS/Yager conflict between component-model forecasts as a "regime anomaly" signal — abstain or shrink stake when ensemble disagreement crosses calibrated thresholds.
- OTHER: ensemble pool selection (performance + specialization + diversity + pre-cut) for GSE sub-model construction.
## Engine-actionable? (yes/no + one-line what)
yes — build a per-game ensemble-conflict monitor (UQ_P and DS conflict from component probs) and abstain/cap stakes on high-conflict games once flagged games show worse trailing Brier.
