# arxiv-program/research/2026-09-21/arxiv-deep/1926-distributional-reinforcement-learning-with-quantile-regression.md

## What it is (1-2 sentences)
Ledger digest of Dabney et al. (2018) "Distributional Reinforcement Learning with Quantile Regression" (arXiv:1710.10044, QR-DQN). Verdict: ADAPT — the simplest distributional critic without a fixed return support, adapted as GSE's default quantile-regression stake-sizing critic with CQL offline pessimism.

## Key metrics/methods (formulas where given, else "not specified")
- Z_θ(x,a) = 1/N Σ_{i=1}^N δ_{θ_i(x,a)}; each θ_i estimates fixed quantile τ̂_i = (τ_{i−1}+τ_i)/2, τ_i = i/N; experiments use N=200 quantiles.
- Loss: quantile Huber loss ρ^κ_τ(δ) = |τ − 1{δ<0}| · ℒ_κ(δ)/κ on pairwise TD-errors δ_{ij} = r + γθ_j(x′,π(x′)) − θ_i(x,a).
- Proposition 2: Π_{W1}T^π is a γ-contraction in d̄_∞ (maximal ∞-Wasserstein): d̄_∞(Π_{W1}T^πZ_1, Π_{W1}T^πZ_2) ≤ γ d̄_∞(Z_1, Z_2).
- GSE port: MLP(state) → N=50 quantile locations per stake action (0/0.25/0.5/1/2u); quantile Huber loss κ=1 on pairwise TD-errors; CQL log-sum-exp penalty on quantile means; policy = greedy on mean with CVaR_0.25 drawdown-aware variant.

## Data sources named
ALE Atari-57 (public), 200M frames; baselines C51, DQN, Double DQN, Prioritized Replay, Dueling. Best-agent protocol: 500K eval frames every 1M training frames, ε=0.001, up to 30 random no-ops.

## Findings (numbers and facts, not vibes)
- Best-agent, 57 games (mean / median / games>human / games>DQN): QR-DQN 915% / 211% / 41 / 54 vs C51 701% / 178% / 40 / 50 — "qr-dqn outperforms all previous agents in mean and median human-normalized score."
- Online protocol: similar sample-complexity improvement to prioritized replay, plus better final performance.
- Sobering: "Even at 200 million frames, there are 10% of games where all algorithms reach less than 10% of human."
- Authors flag Double-DQN-style overestimation bias as unaddressed (suggested future work).
- Adoption gate in ledger: must match best of C51/IQN heads on 2024 ROI within 1pp with lowest seed-variance AND quantile ECE ≤ 0.05; else keep the winning head. Effort ~1.5 weeks.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Full return-distribution critic for stake sizing — mean plus inter-quantile range as the uncertainty bar (OTHER)
- CVaR_0.25 policy variant for drawdown-aware staking weeks (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — implement QR-DQN (N=50 quantile locations per discrete stake action, Huber κ=1, CQL penalty) as the default distributional critic on GSE logged picks 2021–2024, vs scalar-CQL/C51/IQN heads and fractional-Kelly.
