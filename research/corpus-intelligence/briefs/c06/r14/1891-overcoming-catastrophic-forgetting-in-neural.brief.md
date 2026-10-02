# arxiv-program/research/2026-09-21/arxiv-deep/1891-overcoming-catastrophic-forgetting-in-neural.md

## What it is (1-2 sentences)
Ledger digest of Kirkpatrick et al. (2017) "Overcoming Catastrophic Forgetting in Neural Networks" (arXiv:1612.00796, EWC). Verdict: ADAPT — the founding continual-learning regularization method, adapted here as importance-weighted anchoring for weekly GBM refits plus a Fisher-overlap diagnostic for regime-shared vs regime-specific features.

## Key metrics/methods (formulas where given, else "not specified")
- EWC loss: ℒ(θ) = ℒ_B(θ) + Σ_i (λ/2)·F_i·(θ_i − θ*_{A,i})² (Eq. 3) — anchor each weight to its task-A value with stiffness ∝ diagonal Fisher information F_i.
- Bayesian derivation: log p(θ|D) = log p(D_B|θ) + log p(θ|D_A) − log p(D_B) (Eq. 2); Laplace approximation gives diagonal Gaussian posterior with precision = Fisher diagonal.
- Fisher ≈ −E[∇² log p] ≈ E[∇log p ∇log pᵀ]; diagonal only. Linear in parameters and examples (vs ELLA, which inverts parameter-dim matrices).
- GSE port: Σ_i (λ/2)·w_i·(s_i − s*_i)² with w_i = normalized per-feature importance (mean |SHAP| or split gain) in the reference model; overlap diagnostic = cosine similarity of per-feature importance vectors across regime strata (early/mid/late/playoff) to set per-feature λ; floor all w_i at small ε (overconfidence guard from Figure 3C).

## Data sources named
Permuted MNIST (784 pixels → digit class); Arcade Learning Environment / Atari 2600 (84×84×4 frame stacks → Q-values); 10 games at/above human DQN level.

## Findings (numbers and facts, not vibes)
- Permuted MNIST: plain SGD catastrophically forgets task A at the switch; uniform L2 preserves A but can't learn B; EWC learns B while holding A. Dropout-SGD degrades after ~2 permutations; EWC scales to many tasks with only modest error growth.
- Fisher overlap (Fig 2C): similar tasks (8×8 permuted patch) share weights at all depths; dissimilar tasks (26×26 patch) subdivide early layers but still share layers near the output.
- Atari: plain DQN total human-normalized clipped score stays < 1 (learns ≤1 game); EWC agent learns multiple games (10 games, EWC activated per game after 20M frames; Forget-Me-Not HMM for task inference; true-label control only modestly better). Still below 10 separate DQNs.
- Fisher validation (Fig 3C): inverse-Fisher-shaped perturbations least harmful, but nullspace perturbations hurt as much — the method is overconfident about which parameters are unimportant (the paper's stated chief limitation).
- Adoption gates in ledger: walk-forward 2020–2025; per-feature anchoring must beat global penalty on ≥2 of 4 metrics and plain refit on ≥3, worst-week Brier improving ≥0.002.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Importance-weighted anchoring as principled drift penalty for weekly engine refits (OTHER)
- Regime-shared vs regime-specific feature diagnostic — identify core features anchored across early/mid/late/playoff strata (OTHER)
- Overconfidence guard: a feature unimportant in September may matter in December (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — implement per-feature importance-weighted anchoring (Σ(λ/2)·w_i·(s_i−s*_i)², w_i from GBM gain/SHAP) in weekly GBM refits with the cosine-overlap diagnostic setting per-feature λ.
