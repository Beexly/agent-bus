# docs/arxiv-program/research/2026-09-21/arxiv-deep/1990-model-based-asynchronous-hyperparameter-neural-architecture-search.md
## What it is (1-2 sentences)
Ledger note on arXiv:2003.10865 (Klein et al., 2020): model-based asynchronous hyperparameter + neural-architecture search combining async Hyperband scheduling (no sync-point waiting) with a joint Gaussian-process surrogate over (configuration × fidelity) and free "fantasizing" of pending evaluations.
## Key metrics/methods (formulas where given, else "not specified")
- Objective: x* ∈ argmin f(x), observed y_i = f(x_i) + ε_i, ε_i ~ N(0, σ²).
- Bracket sampling: P(s) ∝ (K+1)/(K−s+1) · η^(K−s), halving rate η = 3 in experiments.
- Surrogate: joint GP with exponential-decay kernel across resource levels (models cross-fidelity correlation vs BOHB's independent TPE per fidelity); pending evaluations marginalized over GP posterior predictive ("fantasizing", nearly free while kernel hyperparameters fixed).
- Metric: immediate regret r_t = y_t − y* vs wall-clock time; mean ± SEM across runs.
## Data sources named
No sports data. Benchmarks: tabular data tasks, image classification, NAS-Bench-101. Comparators: random search, standard BO, ASHA, Hyperband, BOHB, async-HB variants.
## Findings (numbers and facts, not vibes)
- No exact numbers extracted (regret curves in figures): method shows strong anytime performance across tabular, image, and NAS benchmarks.
- ASHA "slower at promoting any configuration to higher resources" and "may initially promote suboptimal ones."
- Ranking correlations between architectures at <100 epochs vs full 200 epochs are small (citing Dong et al.); random NAS configs are often decent — early-fidelity promotion decisions are noisy.
- GP surrogate scales cubically (fine at hundreds of configs; needs sparse approximations at thousands).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: HPO scheduler — async offseason search over (config × training-seasons fidelity) with heterogeneous runtimes (CatBoost fast, FT-Transformer slow), eliminating worker idle time from sync halving.
- OTHER: composes with ledger 1986 (FastBO efficient points as fidelity rungs), 1987 (CQR as GP-surrogate replacement), 1988 (1-epoch baseline it must beat).
## Engine-actionable? (yes/no + one-line what)
Yes — spec: async offseason HPO service with N workers pulling (config, fidelity) tasks, fidelity r = training seasons (2 → 4 → 8 → full); adopt iff async reaches sync-BOHB final log-loss in ≤60% of wall-clock time with 8 workers AND beats ledger-1988's 1-epoch baseline final log-loss by ≥0.001. INFERENCE: effort ~1-2 weeks.
