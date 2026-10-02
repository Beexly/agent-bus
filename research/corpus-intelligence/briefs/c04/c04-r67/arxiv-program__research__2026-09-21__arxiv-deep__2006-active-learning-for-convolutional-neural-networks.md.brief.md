# arxiv-program/research/2026-09-21/arxiv-deep/2006-active-learning-for-convolutional-neural-networks.md
## What it is (1-2 sentences)
The core-set active-learning paper (Sener & Savarese, 2018, arXiv:1708.00489, ICLR 2018): redefines batch AL as core-set selection — choosing labeled points so a model trained on the subset is competitive on the whole dataset — with a covering-radius loss bound and a greedy 2-OPT k-center solver. Reader verdict is ADAPT as a cheap coverage-guarantee layer ("every game archetype within δ of a charted game"), explicitly not as a standalone acquisition strategy.
## Key metrics/methods (formulas where given, else "not specified")
- Risk decomposition (Eq. 3): population risk ≤ generalization error + training error + core-set loss, where core-set loss = |avg loss over full set − avg loss over labeled subset| (Eq. 4).
- Theorem 1 bound: core-set loss ≤ δ(λ^l + λ^ηLC) + √(L²log(1/γ)/(2n)) with probability ≥ 1−γ (given λ^l-Lipschitz loss, λ^η-Lipschitz regression functions, δ-cover of the data, zero training error on the core-set).
- Minimizing the bound ⟺ k-center (minimax facility location, Eq. 5): min_{s¹:|s¹|≤b} max_i min_{j∈s¹∪s⁰} Δ(x_i,x_j); greedy furthest-first (Algorithm 1) gives a 2-OPT solution.
- Robust k-center (Algorithm 2): MIP feasibility program (Eq. 6) with outlier allowance Ξ (up to Ξ points uncovered), binary-searched between the greedy radius and its half; Ξ = 1e-4 × n.
- Distance Δ: l₂ distance between final fully-connected layer activations. Lemma 1: a ReLU/max-pool CNN with l₂ loss is (√(C−1)/C · α^{n_c+n_fc})-Lipschitz in the input.
## Data sources named
- CIFAR-10, CIFAR-100, SVHN (standard splits); VGG-16, He initialization, RMSProp lr 1e-3, TensorFlow, trained from scratch after each AL iteration; fully-supervised and weakly-supervised (Ladder networks) regimes; 5 random initializations; accuracy vs. labeled count. No code stated in paper.
- Baselines: Random; Best Empirical Uncertainty (max-entropy/BALD/Variation Ratios); DBAL (MC dropout); Best Oracle Uncertainty (uses labels, an upper bound); k-Median cluster centers; BMDR; CEAL.
## Findings (numbers and facts, not vibes)
- "Our algorithm outperforms all other baselines in all experiments; for the case of weakly-supervised models, by a large margin" (Figures 3–4) — attributed to better feature spaces giving "accurate geometries."
- CIFAR-100 weaker than CIFAR-10/SVHN: bound scales with number of classes C.
- k-Medoids ineffective: "cluster centers are likely the points which are well covered with initial iid samples... fails to sample the tails of the data distribution."
- Oracle uncertainty and DBAL beat empirical uncertainty, but random still beats them in batch setting — "due to the correlation in the queried labels."
- t-SNE (Figure 5): coreset queries "evenly cover the space"; uncertainty-oracle queries "fail to cover the large portion of the space."
- MIP refinement gives "a small but important accuracy improvement" over greedy 2-OPT (Figure 6, CIFAR-100).
- Runtime (Table 1, b=5k, |s⁰|=10k, seconds on i7-5930K/64GB): distance matrix 104.2, greedy 2.0, MIP/iteration 7.5, MIP total 244.03, total 360.23.
- Limitations in file: NO uncertainty by design (the paper's own open problem); theory uses l₂ loss while experiments use cross-entropy; zero-training-error assumption unrealistic; MIP refinement expensive and needs Gurobi; geometry depends on representation quality; i.i.d. vision benchmarks, no temporal structure.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- k-center-greedy charting over game embeddings ("chart a set of games such that every game archetype is within δ of a charted game") as a pre-filter inside uncertainty-driven AL pipelines — INFERENCE from the file's GSE spec; OTHER.
- Uncertainty-weighted k-center (Δ' = Δ/(1+U) with predictive entropy, shrinking the covering radius in uncertain regions) as the fix to the paper's stated open problem — INFERENCE from the file's improvement experiment; OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Deploy k-center-greedy as a coverage pre-filter in the charting queue (budget b = weekly charting capacity; embeddings from the engine's final layer), iff at 20% charting budget it beats random by ≥0.005 log-loss on the 2024 holdout; standalone use rejected unless the game-embedding manifold proves meaningful.
