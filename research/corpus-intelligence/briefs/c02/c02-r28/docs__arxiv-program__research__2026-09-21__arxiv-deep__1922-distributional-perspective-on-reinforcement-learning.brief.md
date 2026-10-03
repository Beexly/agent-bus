# docs/arxiv-program/research/2026-09-21/arxiv-deep/1922-distributional-perspective-on-reinforcement-learning.md

## What it is (1-2 sentences)
Foundational distributional-RL paper: models the full distribution of the random return via the categorical C51 algorithm (51-atom softmax over fixed return support) instead of only its expectation, with distributional-Bellman theory and evaluation on 57 Atari games (arXiv:1707.06887, 2017).

## Key metrics/methods (formulas where given, else "not specified")
- Distributional Bellman operator: TZ(x,a) =^D R(x,a) + γ Z(X′,A′), equality in distribution; γ-contraction in maximal Wasserstein form (policy evaluation); NOT a contraction in total variation, KL, or Kolmogorov distance; control (optimality) operator is NOT a contraction in any distribution metric (stability in control is empirical, not guaranteed)
- Categorical parametrization: Z_θ(x,a) = z_i w.p. p_i(x,a) = exp(θ_i(x,a))/Σ_j exp(θ_j(x,a)); support z_i = V_min + i·Δz, Δz=(V_max−V_min)/(N−1), N=51, V_max=−V_min=10
- Categorical projection + loss: (ΦT̂Z_θ(x,a))_i = Σ_{j=0}^{N−1} [1 − |[T̂z_j]^{V_max}_{V_min} − z_i|/Δz]_0^1 · p_j(x′,π(x′)) (Eq. 7); cross-entropy loss vs projected target; greedy policy w.r.t. E[Z_θ]
- TensorFlow implementation trains at ~75% of DQN speed for N=51

## Data sources named
Arcade Learning Environment (ALE), 57 Atari 2600 games; 5 training games for hyperparameter selection (Seaquest, Asterix, Pong, Venture, Private Eye), 52 testing games; DQN preprocessing (84×84 grayscale, 4-frame stacks); γ=0.99. No code URL stated in the paper.

## Findings (numbers and facts, not vibes)
- [OTHER] Over 57 games (mean %human / median %human / games > human baseline / games > DQN): C51 (ε=0.01): 701% / 178% / 40 / 50; DQN: 307% / 118% / 33 / 43; Dueling: 373% / 151% / 37 / 50; Prioritized: 434% / 124% / 39 / 48; Prioritized Dueling: 592% / 172% / 39 / 44; UNREAL: 880% / 250% / (counts not reported).
- [OTHER] Within 50M frames, C51 outperformed a fully trained (200M-frame) DQN on 45 of 57 games (3-seed average comparison).
- [OTHER] Atom ablation (5 training games, 5M frames, ε=0.05): more atoms always increase performance; 51-atom version beats DQN in all 5 games; Seaquest reaches state-of-the-art; even the 1-parameter Bernoulli variant beats DQN in 3/5 games.
- [OTHER] Sparse-reward games (Venture, Private Eye): strong performance — value distributions propagate rarely occurring events better.
- [OTHER] Pong: learned distribution is bimodal, reflecting intrinsic unobservable randomness of reward timing.
- [OTHER] Stochastic-execution ALE variant (action rejected w.p. 0.25): C51 obtains mean and median score improvements (exact percentages garbled in ar5iv conversion; direction favors C51).
- Limitation stated in file: main-table results use best-evaluation-score reporting (favors lucky seeds), partially mitigated by the 3-seed average comparison.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Distributional critic (N=51 atoms over weekly-ROI support) for the staking module: greedy w.r.t. a risk-adjusted statistic (CVaR_0.2 or mean − λ·std) encoding drawdown aversion directly — OTHER
- Sparse-event propagation property (Venture/Private Eye) → rare tail events in short NFL seasons propagate through distributional targets better than expectation-only critics — OTHER
- Bimodal return distribution finding → P(weekly loss > 5u) style calibrated risk reporting from the critic, independent of the staking policy — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — Build an offline C51-style distributional staking critic (51-atom ROI support, CVaR-adjusted greedy policy, CQL-style conservative regularizer) on logged 2022–2024 picks; adopt iff it beats fractional-Kelly ROI by ≥2pp on the 2024 holdout with max drawdown no worse than baseline.
