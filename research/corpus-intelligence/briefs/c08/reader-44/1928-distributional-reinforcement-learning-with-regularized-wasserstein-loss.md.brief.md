# docs/arxiv-program/research/2026-09-21/arxiv-deep/1928-distributional-reinforcement-learning-with-regularized-wasserstein-loss.md

## What it is (1-2 sentences)
Deep-ledger summary of Sun et al. (2022, arXiv:2202.00769): SinkhornDRL, a distributional RL algorithm that minimizes the entropically regularized Wasserstein (Sinkhorn) divergence between current and Bellman-target return distributions — uniquely supporting multi-dimensional rewards — evaluated on 55 Atari games vs C51, QR-DQN, and MMD-DQN. Verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Loss = Sinkhorn divergence S_ε(μ,ν): entropic-regularized optimal-transport distance interpolating Wasserstein (ε→0) and MMD-like behavior (ε→∞), computed via Sinkhorn matrix-scaling iterations.
- Theorem 1: Sinkhorn distributional Bellman operator is contractive with factor Δ̄_ε(γ,α) > γ^α — slower contraction than MMD-DQN, explaining slower early training.
- Propositions 1/2: sum-invariance and scale-sensitivity of the divergence in the RL setting.
- Hyperparameters: ε (regularization strength), L (Sinkhorn iterations), N (sample count); sensitivity ablations on Breakout and Seaquest. Return distribution represented by samples (no fixed quantiles/atoms → avoids quantile crossing).
- Validation: 40M training frames, 3 seeds, human-normalized scores (HNS); metrics mean, median, IQM (5%–95%); 6-game multi-dim reward decomposition vs MMD-DQN (Appendix M).

## Data sources named
ALE (Arcade Learning Environment), 55 Atari 2600 games; code at github.com/datake/SinkhornDistRL.

## Findings (numbers and facts, not vibes)
- 55 Atari games: SinkhornDRL "achieves state-of-the-art performance in terms of mean, median, and IQM (5%) of HNS across most training phases" vs C51, QR-DQN, MMD-DQN; highest count of best and second-best per-game scores (Table 3, 3 seeds).
- Caveat: slower early-phase convergence on mean HNS, attributed to the weaker contraction factor (Theorem 1).
- Multi-dimensional rewards: "significantly outperforms MMD-DQN by leveraging its ability to capture richer data geometry" (6 games).
- Compute: +20% average cost vs MMD-DQN. Limitations: extra hyperparameters; theoretical-to-practical connection "remains elusive"; multi-dim tested on only 6 games vs one baseline; 40M-frame budget (not 200M).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: only method in the lane handling vector-valued returns — GSE's staking decision is inherently multi-objective (weekly profit, max drawdown, CLV jointly determined by the stake vector); optimizing scalar profit alone can select stakes with bad drawdown tails. No repo work models joint outcome distributions.
- TRUST-SIGNAL: INFERENCE — risk-price dial (scalarization weights over the learned joint distribution) gives an honest, explainable staking policy for public write-ups.
- OTHER: CQL-penalized offline critic architecture (paired with ledger 1923) is directly reusable.

## Engine-actionable? (yes/no + one-line what)
Yes — train a SinkhornDRL critic on GSE's offline weekly data with a 3-dim reward vector (settled profit, −intra-week drawdown, mean CLV), scalarizing at decision time with a user-set risk price, gated on Pareto-dominating the best scalar policy on ≥2 of {ROI, max drawdown, CLV} on 2024 holdout (ledger §11–13 spec, ~3 weeks).
