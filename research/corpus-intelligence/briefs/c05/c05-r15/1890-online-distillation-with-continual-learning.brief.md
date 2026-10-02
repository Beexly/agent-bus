# arxiv-program/research/2026-09-21/arxiv-deep/1890-online-distillation-with-continual-learning.md
## What it is (1-2 sentences)
Deep read of Jouyon et al. (2023), arXiv:2304.01239 — online distillation (ARTHuS: fast student trained on a slow frozen teacher's pseudo-labels) extended with continual-learning methods for cyclic domain shifts, benchmarked on day/night driving video segmentation. Ledger verdict: ADAPT — maps to GSE as a teacher-student weekly update where the monthly full-history teacher distills soft targets into a fast weekly student, with MIR replay + RWalk regularization preserving cyclic (seasonal-regime) knowledge.
## Key metrics/methods (formulas where given, else "not specified")
- Methods: replay buffer selection f_S ∈ {FIFO, Uniform, Prioritized, MIR (maximally-interfered retrieval)} × update f_U ∈ {Uniform, Prioritized}; regularizers MAS, LwF, ACE, RWalk (Riemannian walk: EWC-style Fisher penalty Σ_i F_i(θ_i − θ*_i)² + parameter-distance penalty). Best: MIR+ACE and MIR+RWalk.
- Metrics: mIoU, mIoU-NDS, FWT (forward transfer), BWT (backward transfer), Final-BWT (retention across cycles), on 20- and 40-sequence streams.
## Data sources named
Long untrimmed driving videos (day/night, city/countryside alternations), concatenated into 20- and 40-sequence streams; code: github.com/Houyon/online-distillation-cl.
## Findings (numbers and facts, not vibes)
- MIR+ACE (20/40 seq): mIoU 25.6/25.5, BWT 30.8/29.4 — best overall; MIR+RWalk: Final-BWT 30.1/30.8 — best retention.
- Baseline FIFO no-CL: mIoU 23.4/24.2, BWT 17.7/13.9, Final-BWT 21.9/19.9; uniform replay alone nearly matched the best combos (mIoU 25.5/25.0, BWT 30.6/28.8).
- Memoryless 18.4/19.4; MAS 14.0/14.0 and LwF 15.7/15.9 — both WORSE than memoryless; RWalk alone 18.3/19.3 (regularizer-only weak).
- Baseline forgets at the second cycle's domain shift (Fig. 3); MIR+RWalk stays stable.
- Robust claim per ledger: "MIR-family replay + light regularization ≫ baseline," not "ACE beats RWalk" (25.6 vs 25.5 vs 25.2 mIoU within noise).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Replay-buffer + MIR selection as cyclic-regime memory (December/playoff knowledge preserved into next season) — OTHER (engine architecture / online learning).
- Teacher-student soft-target distillation for calibration-preserving weekly refits — TRUST-SIGNAL (calibration preservation across updates).
- BWT/FWT regime-cycle metrics as audit metrics for seasonal regime retention — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — implement teacher-student weekly update: fast weekly student trained on the monthly teacher's soft probabilities, MIR-style cyclic replay buffer across regime strata, RWalk-style drift penalty on top features; gate on December-regime Brier ≥0.003 improvement with ECE not degrading >0.003.
