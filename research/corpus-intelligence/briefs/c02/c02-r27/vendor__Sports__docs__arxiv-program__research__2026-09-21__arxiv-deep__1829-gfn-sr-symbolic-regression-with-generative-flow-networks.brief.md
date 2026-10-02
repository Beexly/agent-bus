# vendor/Sports/docs/arxiv-program/research/2026-09-21/arxiv-deep/1829-gfn-sr-symbolic-regression-with-generative-flow-networks.md

## What it is (1-2 sentences)
GFN-SR (Li, Marinescu, Musslick; arXiv:2312.00396) recasts symbolic regression as a GFlowNet problem — sampling expression trees with probability proportional to reward instead of maximizing expected reward — so it returns a diverse set of high-quality candidate equations rather than collapsing onto one mode, which is the failure mode of DSR under noise.

## Key metrics/methods (formulas where given, else "not specified")
- Sampling objective: π(s) ∝ R(s) over complete expression trees s, with learned partition function Z = Σ R.
- Vanilla reward: R(s) = 1/(1+RMSE(s)).
- Adaptive reward baseline (novel): R_B(s) with baseline B > 0 and scaling γ ∈ [0,1]; B initialized to the mean vanilla reward of the first batch and annealed toward the mean reward of top performers seen so far — concentrates sampling on modes without collapsing to one.
- Policy: LSTM forward policy P_F(·|s) = categorical over library tokens, fed one-hot parent+sibling tokens, with DSR-style in-situ constraint masking.
- Training: trajectory balance (TB) loss on trajectories τ = (s_0→…→s_n=s), pre-order node addition from empty tree s_0.
- Assumptions stated: DAG/tree construction covers the solution space; reward ∝ satisfaction; TB converges to π∝R; the baseline schedule doesn't distort mode ordering; most-frequent-sample is the right point estimate.

## Data sources named
No real datasets. Noiseless: Nguyen 12 benchmarks, 20 trials/method, ~25M expression evaluations per run per function. Noisy synthetic benchmark: 6 equations in 3 near-degenerate pairs (e.g., f_1 = x³+x²+x vs g_1 = sin(x)(√x+exp(x))), 40 points uniform per equation (20 train / 20 test), 10% Gaussian noise ε ∼ 0.1·N(0,Var(y)), 20 trials/method, ~25M evaluations each. Recovery = exact symbolic equivalence. Code: stated as future at github.com/listar2000/gfn-sr, not confirmed live.

## Findings (numbers and facts, not vibes)
- Noiseless Nguyen (Table 1): DSR leads most, but GFN-SR is competitive despite no return-maximization objective and is outright best on Nguyen-5 and Nguyen-12. [OTHER]
- Noisy 10% benchmark recovery rates, GFN-SR / DSR / BSR: f_1: 100/75/30; g_1: 15/5/5; f_2: 15/5/0; g_2: 95/40/90; f_3: 95/5/5; g_3: 85/90/75 — GFN-SR beats both competitors on 5 of 6 equations (loses only g_3 to DSR, 90 vs 85). [OTHER]
- Authors' diagnosis: DSR's return-maximization locks onto the wrong-but-high-reward mode of each near-degenerate pair; BSR's linear-mixture-of-trees form can't recover exactly. [OTHER]
- g_1 recovery is 15% even for the winner — near-degenerate pairs remain hard for everyone. [OTHER]
- Asymmetric recovery strictness (stricter for GFN-SR: ground truth must match the most frequently sampled post-training equations; for DSR/BSR any Pareto-frontier match counts) strengthens the claim, but the benchmark is author-designed; SRBench/Feynman and real-world noisy data explicitly listed as future work. [OTHER]
- 25M evaluations/run is a massive budget; no wall-clock comparison reported. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Diverse-candidates property → OTHER: generate 5–10 distinct near-equivalent "true QB efficiency" formulas and compare for cross-era stability, instead of one argmax that might be a noise artifact — directly serves QB metric invention. Tagged QB-BEHAVIOR because the prime GSE use is QB efficiency formula discovery.
- Philosophical complement to 1824 (DSR risk-seeking = exploit the best mode; GFN-SR = sample all good modes) → OTHER: run both, GFN-SR as the diversity generator, 1824-style search as the exploiter.
- Reward-shaping improvement experiment (R(s)·P_LM(s)^λ with a sports-corpus n-gram prior) → OTHER: fuses diversity with domain plausibility.
- Cross-season stability metric (rank correlation of candidate test-r between seasons) → TRUST-SIGNAL: a publishable robustness criterion for candidate metrics.

## Engine-actionable? (yes/no + one-line what)
yes — Reimplement GFN-SR-lite (PyTorch LSTM policy, TB loss, adaptive baseline) as GSE's diversity generator for metric discovery: sample ~200 post-training equations on nflverse QB-game data (target EPA/dropback), cluster by symbolic skeleton, keep medoids as the candidate metric set, and adopt iff a top-5 candidate beats DSR's single best by ≥0.02 test r with higher cross-season stability.
