# arxiv-program/research/2026-09-21/arxiv-deep/1944-transformers-are-sample-efficient-world-models.md
## What it is (1-2 sentences)
IRIS (arXiv:2209.00588, ICLR 2023): a sample-efficient world model built as an autoregressive transformer over discrete tokens — a VQ-VAE-style discrete autoencoder tokenizes observations, a GPT-like transformer models interleaved frame/action/reward tokens, and an actor-critic is trained purely on imagined rollouts. First method above human-level mean on the Atari 100k benchmark without lookahead search.

## Key metrics/methods (formulas where given, else "not specified")
- Tokenizer: z_t^k = argmin_i ‖y_t^k − e_i‖_2, y_t = CNN(x_t) ∈ R^{K×d}, codebook E ∈ R^{N×d}; autoencoder loss L = ‖x−D(z)‖_1 + ‖sg(E(x))−E(z)‖²_2 + ‖sg(E(z))−E(x)‖²_2 + L_perceptual (L1 + VQ commitment + perceptual, straight-through estimator)
- World model: GPT-like transformer over (z_0^1..z_0^K, a_0, r_0, d_0, z_1^1..z_1^K, a_1, …); CE loss for next-token (transition) and termination predictors; MSE/CE for reward predictor
- Hyperparameters (Table 3): L=20 timesteps, embedding dim D=256, M=10 layers, 4 attention heads, weight decay 0.01, embedding/attention dropout 0.1
- RL objective: maximize E_π[Σ_{t≥0} γ^t r_t] with π trained exclusively on imagined trajectories; real environment used only to improve the world model
- Demonstration: after 120 games of training on Pong, the world model reenacts a test trajectory "pixel perfect", including scoreboard-update mechanics
- Metrics: mean/median/IQM of human-normalized scores, #superhuman games, 5 seeds

## Data sources named
Atari 100k benchmark (Kaiser et al. 2020): 26 Atari 2600 games, 100k environment steps per game (≈2 hours real-time), image observations, discrete actions, scalar rewards, termination flags. No external dataset — agent collects its own experience. Code: https://github.com/eloialonso/iris (stated).

## Findings (numbers and facts, not vibes)
- IRIS achieves mean human-normalized score 1.046, median 0.289, superhuman on 10 of 26 games — "setting a new state of the art for methods without lookahead search" (paper claims).
- Next-best mean in the table 0.616; next-best superhuman count 6; surpassed SimPLe, DER, OTRainbow, DrQ, SPR, CURL variants.
- Paper-stated transfer insight: plays are already discrete tokens (play type, formation, result), so the VQ-VAE tokenizer problem disappears for football — the token-LM framing is arguably MORE natural for NFL than for Atari.
- Limitations noted: VQ tokenizer brittleness (codebook collapse); long-horizon sparse-reward games (Frostbite) remain weak — NFL full-game credit assignment is similarly hard; policy is trained for control, not unbiased simulation (for pricing we want the generator, not the agent); transformer imagination is O(L²) per rollout vs RSSM's O(L).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: "GSE-IRIS" — tokenize each play as a discrete multi-token tuple (play_type, formation_family, direction, rusher/receiver bucket, yardage bucket, EPA bucket, score_event, turnover flag), ~2–5k vocabulary; GPT-style transformer (causal LM) on nflverse play sequences 2006–2025 with next-token CE + per-play score/termination heads, conditioned on a pregame matchup embedding prepended as context; autoregressively sample full games (~170 play-tokens) 100k times per matchup to get score distributions. Hierarchical extension: drive-level summary token every drive (result, points, plays, starting field position) with an auxiliary drive-outcome head for long-range structure.
- OTHER: alternative world-model backbone (discrete tokens + GPT) vs the Dreamer RSSM line (ledgers 1942/1943) — competing solutions; acceptance test pits them against each other.

## Engine-actionable? (yes/no + one-line what)
yes — build the token-autoregressive play-level game simulator and ADOPT it as the primary simulator iff on 2024 held-out its one-step-ahead log-likelihood is ≥5% better than the RSSM variant AND final-score TVD ≤5%/week AND kickoff WP ECE ≤0.03; the drive-level hierarchy is the tail-calibration (comeback regime) improvement experiment.
