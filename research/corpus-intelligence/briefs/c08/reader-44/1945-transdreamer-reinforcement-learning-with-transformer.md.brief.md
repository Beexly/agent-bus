# docs/arxiv-program/research/2026-09-21/arxiv-deep/1945-transdreamer-reinforcement-learning-with-transformer.md

## What it is (1-2 sentences)
Deep-ledger summary of Chen et al. (2022, arXiv:2202.09481, NeurIPS 2021 Deep RL Workshop): TransDreamer replaces Dreamer's RNN-based RSSM world model with a Transformer State-Space Model (TSSM) that attends directly over the full history of past latent states and actions, using a myopic-posterior trick to keep training parallelizable; tested on Hidden Order Discovery memory tasks vs Dreamer. Verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- TSSM: h_t = f_transformer(z_{1:t−1}, a_{1:t−1}) vs RSSM h_t = f_gru(h_{t−1}, z_{t−1}, a_{t−1}).
- Myopic representation model: q(z_t | x_t) ≈ q(z_t | h_t, x_t) — posterior independent per timestep so one transformer forward pass yields all h_{1:t} (breaks the purple-arrow feedback loop of Fig. 1).
- Rest follows Dreamer: world-model learning → actor-critic in imagination → environment interaction; same ELBO + λ-return objectives as ledger 1942.
- Training stabilizers: prioritized replay toward nonzero-reward trajectories; imagination from a subset K of start states (transformer memory cost forces fewer imagined trajectories); transformer frozen during agent training.

## Data sources named
Custom Hidden Order Discovery tasks (2D Minigrid 8×8, 3D Unity first-person; 4/5/6 colored balls, +3 reward per correct ball, 100-step episodes, partial observability); DMC and Atari tasks as memory-free controls; code built on the DreamerV2 codebase (public mirror github.com/weiqinchen7/transdreamer).

## Findings (numbers and facts, not vibes)
- 2D 4-ball: mean episode reward ~7 (TransDreamer) vs ~4 (Dreamer); success rate 23% vs 7%. Outperforms Dreamer in all configurations, 2D and 3D; comparable on memory-free DMC/Atari controls.
- World-model quality: lower or comparable foreground MSE; more accurate nonzero-reward prediction; longer contexts help TransDreamer more, while "Dreamer's reward prediction does not improve much as the context increases."
- Limitations: memory cost forces subset-K imagination (throughput hit); myopic posterior discards history in the encoder; gains shown only on toy memory tasks, not complex stochastic multi-agent dynamics.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: long-memory simulation backbone — TSSM attends directly to early-game states ("this team abandoned the run in Q1", "blitz package changed after halftime") at Q4 simulation time, where an RSSM compresses the first three quarters into a fixed vector. Folds into GSE-Dream (ledger 1942) as a backbone variant.
- SCHEME: INFERENCE — drive-level summary tokens with full attention within drives / sparse attention across drives is a natural NFL encoding of scheme evolution over a game.
- OTHER: myopic-posterior parallelization trick is reusable engineering for any transformer world model on NFL play sequences.

## Engine-actionable? (yes/no + one-line what)
Yes — fold TSSM in as a candidate backbone in the GSE-Dream three-way comparison (RSSM-GRU vs TSSM-transformer vs IRIS token-LM, ledger 1944) on the nflverse 2015–2024 protocol, gated on ≥10% better 2nd-half log-likelihood given 1st-half context while staying within 2× RSSM sampling throughput (ledger §11–13).
