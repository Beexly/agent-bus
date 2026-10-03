# docs/arxiv-program/research/2026-09-21/arxiv-deep/1949-offline-reinforcement-learning-as-one-big.md

## What it is (1-2 sentences)
Trajectory Transformer (arXiv:2106.02039, 2021): offline RL reduced to sequence modeling — a GPT-style transformer decoder (4 layers, 4 heads) trained by teacher forcing on per-dimension discretized (state, action, reward) token sequences, with beam search biased by cumulative predicted reward used as the planner.

## Key metrics/methods (formulas where given, else "not specified")
- Training: maximize E[Σ_t log P_θ(x_t | x_{<t})] over discretized trajectory tokens (teacher forcing)
- Discretization: (1) Uniform — bin width (max s^i − min s^i)/V; (2) Quantile — each token accounts for 1/V of empirical data mass
- Beam search: return argmax_{y ∈ Y_T} log P_θ(y | x) with reward-biased beam expansion (Algorithm 1); variations yield imitation (unbiased sampling), goal-reaching (condition on goal), and offline RL (reward-biased search)
- Key property (stated): joint state-action modeling biases generation toward in-distribution actions, removing the need for explicit pessimism/conservatism

## Data sources named
D4RL offline datasets (locomotion: HalfCheetah/Hopper/Walker2d/Humanoid; AntMaze), plus humanoid trajectories from a single policy for the prediction study. Code: trajectory-transformer.github.io.

## Findings (numbers and facts, not vibes)
- [OTHER] Long-horizon prediction: Trajectory Transformer has "substantially better error compounding" than the PETS feedforward Gaussian ensemble on length-100 humanoid trajectories; generated trajectories "visually indistinguishable" from real ones while the single-step model produces physically implausible predictions (Figure 3).
- [OTHER] Offline RL: "performs on par with or better than all prior methods" (BRAC, CQL, MBOP, Decision Transformer, BC) on locomotion; combined with DP, SOTA on sparse-reward long-horizon AntMaze.
- [OTHER] Discretization ablation: uniform ≈ quantile except HalfCheetah-Medium-Expert, where quantile achieves "more than twice" the return of uniform (large velocity range strands uniform bins).
- [SCHEME] Portability claim in file: the per-dimension discretization + GPT-over-trajectories recipe is directly portable to discrete play-by-play sequences — the discretization study is the distinctive contribution (vs 1944 IRIS's VQ tokens).
- Limitation stated in file: per-dimension discretization explodes vocabulary for high-dim states; beam search is a planner not a sampler (for pricing we need unbiased samples, not argmax); 4-layer transformer is small — NFL games run 150+ plays in token count.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Quantile (not uniform) discretization as the tokenization standard for play features — EPA/yardage are heavy-tailed exactly like HalfCheetah velocities, so uniform bins would strand tokens — SCHEME
- GSE-TT spec: quantile-tokenized play features interleaved as (state_t, play_descriptor_t, reward_t) tokens, 12+ layer GPT decoder on nflverse 2006–2025, ancestral sampling for full-game rollouts (beam search rejected for pricing, kept for "most likely game script" analysis content) — SCHEME
- Joint state-action modeling keeping samples in-distribution as a conservatism substitute for offline learning from logged picks — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — Adopt per-dimension quantile discretization as GSE's tokenization standard for any play-by-play transformer (adopter gate: quantile beats uniform by ≥5% log-likelihood on 2024 held-out plays); reject the Trajectory Transformer backbone for pricing if it trails the IRIS-style native-token model on two of three metrics, keeping only the discretization lesson.
