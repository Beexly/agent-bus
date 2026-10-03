# arxiv-program/research/2026-09-21/arxiv-deep/2062-tabddpm-modelling-tabular-data.md
## What it is (1-2 sentences)
Research ledger on TabDDPM (arXiv:2209.15421), a denoising-diffusion model for mixed-type tabular data with parallel Gaussian diffusion (numerical) and multinomial diffusion (categorical) on one joint representation; verdict ADAPT as GSE's synthetic-season augmentation method.
## Key metrics/methods (formulas where given, else "not specified")
- TabDDPM loss (Eq. 3): L_t^TabDDPM = L_t^simple + (Σ_i L_t^i)/C (MSE for Gaussian term, KL terms for multinomial terms averaged over C categorical features); shared MLP reverse model with 128-dim sinusoidal time embeddings; hyperparameters tuned via Optuna (50 trials) guided by ML efficiency vs CatBoost.
- Evaluation: ML efficiency (train classifier/regressor on synthetic, test on real test set, F1 for classification / R² for regression); privacy via DCR (distance to closest record) and black-box membership-inference ROCAUC.
## Data sources named
15 public UCI/OpenML tabular benchmarks (Adult 26,048 train rows, California Housing 13,209, Diabetes 491, Insurance 856, etc.); code at https://github.com/yandex-research/tab-ddpm; baselines TVAE, CTGAN, CTABGAN, CTABGAN+, SMOTE.
## Findings (numbers and facts, not vibes)
- Fidelity avg ranks (lower better): categorical JS divergence — TabDDPM 1.62 (best); numerical Wasserstein — SMOTE 1.67, TabDDPM 1.93; correlation-matrix L2 — TabDDPM 1.73 (best).
- ML efficiency (tuned CatBoost): TabDDPM best-or-tied-best on majority of 15 sets (e.g., AD 0.795±.001, HI 0.722±.001 vs Real 0.724); CTABGAN+ collapses on several sets (CA 0.525, KI 0.444).
- Privacy: black-box attack ROCAUC mostly ≈0.51–0.57 (near random) vs SMOTE 0.610–0.999; DCR TabDDPM beats SMOTE on all 16 sets (e.g., AD 0.295 vs 0.082). No time-ordered splits in any benchmark (i.i.d. only).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: synthetic tabular augmentation for GSE's small-sample regime (272 games/season) — game-level synthetic seasons for training spread/total models, with a fidelity gate (per-feature TVD ≤5%) before production use.
## Engine-actionable? (yes/no + one-line what)
Yes — build TabDDPM augmentation over nflverse game-level aggregates (real + 3–5 synthetic seasons per real season) with acceptance gate: ≥0.003 log-loss improvement on a held-out real season plus fidelity TVD ≤5% on ≥90% of features.
