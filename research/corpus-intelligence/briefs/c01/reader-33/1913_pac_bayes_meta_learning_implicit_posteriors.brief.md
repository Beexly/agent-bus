# docs/arxiv-program/research/2026-09-21/arxiv-deep/1913-pac-bayes-meta-learning-implicit-posteriors.md
## What it is (1-2 sentences)
Ledger on "PAC-Bayes Meta-Learning with Implicit Task-Specific Posteriors" / SImPa (Nguyen, Do, Carneiro 2020, arXiv:2003.02455v3) — meta-learning with PROVED generalization bounds at both levels of the bi-level objective (Theorem 2) plus best-in-lane calibration (ECE/MCE), using an implicit GAN-style generator posterior instead of inexpressive diagonal-Gaussian VI. Verdict: ADAPT — the meta-learning "certificate" for few-game adaptation with honest uncertainty.

## Key metrics/methods (formulas where given, else "not specified")
- Bi-level objective (Eq. 3): minimize PAC-Bayes upper bounds from Theorem 1 (lower, single-task) and Theorem 2 (upper, meta) instead of intractable true losses.
- Theorem 2 (novel): E over meta-posterior, task env, task posterior, validation data ≤ empirical + √(E_q(θ)[KL[q(w_i;λ_i)||p(w_i)]] + T²ln m_i^(v)/((T−1)ε)) / (2(m_i^(v)−1)) + √(KL[q(θ;ψ)||p(θ)] + T ln T/ε) / (2(T−1)), holding with probability ≥ 1−ε.
- Task-specific posterior q(w_i;λ_i) is implicit: w_i = G(z;λ_i), z∼p(z) (Eq. 10), sampled only, no analytic form. KL[q||p] estimated via compression lemma (Lemma 1): KL[Q||P] = sup_φ E_Q[φ(h)] − ln E_P[e^{φ(h)}], φ = neural net ω_i (Eq. 11–12); ω_0 itself meta-learned with MAML (Algorithm 1). Meta-posterior q(θ;ψ)=N(θ;μθ,σ₀I) (Eq. 9).
- No KL weighting factor to tune — only confidence parameter ε.
- Hyperparameters: T=20 tasks/update; σθ=σw=1; σ=10⁻⁶; ε=ε_i=0.1; generator 2 hidden layers (256→512), tanh output; φ-network inverted (512→256→128); 512 MC samples for KL lower-bound; Adam 10⁻⁴; lower-level GD lr 10⁻³ × 5 steps; test-time MC over task-specific posterior (32 samples).
- Loss ℓ: W×Y→[0,1] bounded (NLL clipped to [0,1]); KL-free warmup on 1000 tasks to avoid early-stage over-regularization.
- GSE impl spec: base net = small tabular MLP (2×64, game features → margin); generator 2-layer MLP over z∼U[0,1]¹²⁸ (~10K-param base → ~1–2M-param generator, tractable); tasks = historical team-seasons (support = first K games, query = remaining); 5 GD steps lower-level on Theorem 1 bound, upper-level on Theorem 2; MC mean+std → calibrated win probabilities; KL-free 1000-task warmup.

## Data sources named
- Regression (multi-modal, 5-shot): half sinusoidal (y=Asin(x+Φ)+ε, A∈[0.1,5], Φ∈[0,π]), half linear (y=ax+b+ε, a,b∈[−3,3]); noise N(0,0.3²); m_i^(t)=5, m_i^(v)=50; base net 2×40 ReLU; 1000 hold-out tasks vs MAML, PLATIPUS, BMAML (10 particles), ABML.
- Classification: Omniglot (4-block CNN, >1M test tasks); miniImageNet (4-block CNN 32 filters; WRN-extracted features); tiered-ImageNet (WRN features).
- No public SImPa code (paper "Work in progress"); implement from Algorithm 1.

## Findings (numbers and facts, not vibes)
- Multi-modal 5-shot regression: SImPa "much smaller MSE" than MAML/PLATIPUS/ABML, comparable NLL to non-parametric BMAML (exact MSE figure-only, not printed); best reliability diagram; smallest ECE and MCE; MAML deterministic → horizontal-line poorly calibrated reliability; PLATIPUS/ABML slopes near MAML (small diagonal covariances); BMAML slightly better.
- Omniglot standard CNN: SImPa 98.352 ± 0.005 vs MAML 97.143 ± 0.005, ABML 97.281 ± 0.004, BMAML 94.104 ± 0.008, Prototypical 96.359 ± 0.006.
- miniImageNet standard CNN: SImPa 51.72 ± 0.48 (1-shot, best) / 63.49 ± 0.40 (5-shot, second; MAML 63.15). Smallest ECE and MCE vs MAML/PLATIPUS/BMAML/ABML re-implementations.
- miniImageNet WRN features: SImPa 62.85 ± 0.56 (1-shot) / 77.65 ± 0.50 (5-shot), edging LEO (61.76 ± 0.08 / 77.59 ± 0.12) on both means.
- tiered-ImageNet: SImPa 70.26 ± 0.35 (1-shot, beats LEO 66.33 ± 0.05 — SOTA) / 80.15 ± 0.28 (5-shot, vs MetaOptNet 81.75).
- Cost (Appendix C): MAML 6 GPU-hours; ABML/BMAML/PLATIPUS ~30; SImPa >48 hours. Per-update O(125n′) vs O(100n) MAML, O(440n) VI. Generator explosion: 32,645-param base net requires 16.7M-param generator.
- Ledger inference: generator explosion is the scaling wall for deep base nets, but GSE's small tabular models (~10K params → ~1–2M generator) stay tractable.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration-first meta-learner — smallest ECE/MCE among all probabilistic meta-learners compared; reliability diagrams hugging the diagonal — directly serves the accuracy+calibration mandate.
- OTHER: PAC-Bayes bound (Theorem 2) certifies worst-case new-regime risk with probability 1−ε — the "meta-learning certificate" for early-season predictions; bounds are heuristic for GSE (i.i.d. assumptions violated by sequential sports data).
- OTHER: improvement experiment — SImPa-Lite with ALPaCA head (ledger 1907): keep implicit generator for feature extractor, replace generated last layer with closed-form Bayesian update; goal = ECE/MCE parity at <25% training cost.
- OTHER: reproducible test gate — ADOPT iff SImPa beats MAML on Brier by ≥0.02 on new-regime games at K∈{2,4} AND reduces ECE by ≥25% relative to MAML; else keep ledger-1912 MAML with 1910's uncertainty weighting.

## Engine-actionable? (yes/no + one-line what)
yes — implement SImPa (from Algorithm 1, no public code) as the certified, calibrated probabilistic few-shot win-probability meta-learner for new-regime teams (rookie QB, new HC), with test-time MC posterior width feeding honest uncertainty; ~4 engineering weeks offline training.
