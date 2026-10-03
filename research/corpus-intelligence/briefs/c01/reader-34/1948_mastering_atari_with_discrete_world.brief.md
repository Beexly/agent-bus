# arxiv-program/research/2026-09-21/arxiv-deep/1948-mastering-atari-with-discrete-world.md

## What it is (1-2 sentences)
Full-paper research ledger (verdict: ADAPT) on arXiv:2010.02193 (DreamerV2, Hafner et al., Google Research/DeepMind/U Toronto 2020) — replaces DreamerV1's Gaussian world-model latents with a vector of categorical latents trained via straight-through gradients plus KL balancing, and is specified into a "GSE-DreamV2" game-state simulation upgrade.

## Key metrics/methods (formulas where given, else "not specified")
- Three changes over DreamerV1: (1) categorical stochastic state z_t (vector of categorical variables, not diagonal Gaussian); straight-through gradients: sample = onehot_sample + probs − stop_grad(probs) (Bengio et al. 2013, Algorithm 1); (2) KL balancing: L_KL = α·KL(sg(q)‖p) + (1−α)·KL(q‖sg(p)), α=0.8, scaled by β=0.1 (Atari) / β=1.0 (continuous control); (3) behavior learning via actor-critic trained purely on imagined rollouts in compact latent space (actor via REINFORCE + straight-through world-model gradients; critic via TD on imagined rewards), world model trained separately from policy.
- RSSM: recurrent deterministic h_t; prior p(ẑ_t|h_t), posterior q(z_t|h_t,x_t), both categorical vectors. ELBO (Eq 2): reconstruction + reward log-likelihoods − β·L_KL. Image predictor: diagonal Gaussian likelihood, unit variance.
- GSE spec: 32 categoricals × 32 classes, KL balancing α=0.8, β tuned for football; train on nflverse 2006–2025 play sequences; keep symlog/twohot reward targets from ledger 1943.

## Data sources named
- Atari benchmark: 55 games, sticky actions, 200M steps (same compute/wall-clock as single-GPU baselines Dopamine IQN/Rainbow). Humanoid stand-up/walking from pixels only. SimPLe comparison discounted (easier 36-game subset). Per-game scores in Table K.1.

## Findings (numbers and facts, not vibes)
- Paper claims: first agent with human-level Atari performance (55 games, sticky actions, 200M steps) learned purely inside a separately trained world model; surpasses final performance of top single-GPU agents IQN and Rainbow at the same budget; humanoid solved from pixels only.
- Architecture lineage per ledger: 1942 (DreamerV1, Gaussian latents) → 1948/1956 (DreamerV2, categoricals + KL balancing) → 1943 (DreamerV3, kept categoricals, added symlog/twohot).
- Limitations (ledger): categoricals use biased straight-through gradients; codebook size (categoricals × classes) is a manually tuned hyperparameter; football game state is noisier/more continuous than Atari frames so the categorical advantage may shrink; the imagination actor-critic half of the paper does not transfer to GSE (GSE needs simulation, not the policy).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — World-model simulation layer: categorical latents fit game-state multimodality (3rd-and-long can become conversion, sack, or turnover — discrete regimes, not a Gaussian blob) better than Gaussians; ledger §14 proposes regime-labeled categorical dimensions (garbage time, two-minute drill, goal-line) as weakly-supervised interpretable latents doubling as readable game-state features for the content desk.
- OTHER — Acceptance gate specified: Hartigan dip test for multimodality on ≥20% of 3rd/4th downs (p<0.05), or beat Gaussian RSSM on 2024 TVD/ECE; KL balancing α=0.8 kept regardless.

## Engine-actionable? (yes/no + one-line what)
Yes — "GSE-DreamV2" swaps the Gaussian RSSM latents for categorical latents (32×32) with KL balancing α=0.8, trained on nflverse play sequences and gated on a multimodality probe of next-play EPA distributions.
