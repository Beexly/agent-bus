# arxiv-program/research/2026-09-21/arxiv-deep/1924-decision-transformer-reinforcement-learning-via-sequence-modeling.md
## What it is (1-2 sentences)
The Decision Transformer paper (Chen et al., 2021, arXiv:2106.01345) reduces offline RL to conditional sequence modeling: a causally masked GPT autoregressively models (return-to-go, state, action) trajectories, and at test time one conditions on a desired return to generate the actions achieving it — no value functions or policy gradients. Reader verdict is ADAPT for GSE's weekly stake-sizing decisions.
## Key metrics/methods (formulas where given, else "not specified")
- Returns-to-go: R̂_t = Σ_{t′=t}^{T} r_{t′}; trajectory τ = (R̂_1, s_1, a_1, R̂_2, s_2, a_2, …, R̂_T, s_T, a_T) (Eq 2).
- Tokenization: last K timesteps → 3K tokens (one per modality); modality-specific linear embeddings + layer norm; learned per-timestep embedding per token (one timestep = three tokens).
- Training loss: average over timesteps of CE (discrete) / MSE (continuous) between predicted â_t and dataset a_t given history (R̂_{≤t}, s_{≤t}, a_{<t}).
- Inference: seed with target return and start state; execute generated action, then R̂_{t+1} ← R̂_t − r_t; repeat.
- Context lengths: K=30 (K=50 for Pong); full episode for Key-to-Door.
- %BC diagnostic: behavior cloning on top X% of timesteps by episode return, X∈{10,25,40,100}.
## Data sources named
- Atari: 1% DQN-replay dataset (Agarwal et al. 2020) on Breakout, Qbert, Pong, Seaquest; D4RL continuous control (HalfCheetah/Hopper/Walker medium/medium-replay/medium-expert + sparse-reward 2D Reacher); Key-to-Door gridworld (1K and 10K random-walk trajectories).
- Code: project page https://sites.google.com/berkeley.edu/decision-transformer; datasets public (D4RL, DQN replay).
- Baselines: CQL, REM, QR-DQN, BC (identical architecture minus return conditioning), %BC sweep, MLP K=1 ablation, random.
## Findings (numbers and facts, not vibes)
- Atari 1% DQN-replay (Table 1, 4 games): DT "competitive with CQL in 3 out of 4 games and outperforms or matches REM, QR-DQN, and BC on all 4 games."
- D4RL (Table 2): DT "outperforms conventional RL algorithms on almost all tasks."
- Key-to-Door (Table 6), 1K random trajectories: DT 71.8% vs CQL 13.1%, BC 1.4%, %BC 69.9%, random 3.1%; 10K trajectories: DT 94.6% vs CQL 13.3%, BC 1.6%, %BC 95.1%, random 3.1%.
- Return conditioning (Figure 4): "On every task, the desired target returns and the true observed returns are highly correlated"; on Pong/HalfCheetah/Walker "almost perfectly match"; on Seaquest DT extrapolates beyond the dataset's max episode return when prompted higher.
- Context ablation (Table 5): K=1 "significantly worse" than K=30 on Atari (Breakout 267.5±97.5 for full DT).
- Caveats in file: conditioning on unachievable target returns in stochastic settings can produce incoherent actions; no uncertainty quantification on generated actions; DT lacks TD's stitching ability.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Return-conditioned sequence modeling for stake sizing — OTHER.
- Return-conditioning fidelity diagnostic (prompted-target vs achieved-return correlation, paper's Figure 4) as the gate for whether the mechanism works — OTHER.
- Trajectory formulation (one episode = one season of weekly slates; state = edges, CLV, bankroll, week, exposure; action = stake buckets) — INFERENCE from the file's GSE spec; OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Build season-episode trajectory dataset from GSE logged picks 2019–2024 and test a 4–6-layer GPT staking policy on 2024; adopt iff it beats fractional-Kelly ROI by ≥2pp with no worse max drawdown and prompted/achieved return correlation ≥0.5.
