# arxiv-program/research/2026-09-21/arxiv-deep/1948-mastering-atari-with-discrete-world.md
## What it is (1-2 sentences)
Full-text read of arXiv:2010.02193 (Hafner et al., 2020 — DreamerV2): replaces the Gaussian stochastic state of the RSSM world model (PlaNet/DreamerV1) with a vector of categorical latents trained via straight-through gradients plus KL balancing, achieving human-level Atari performance learned purely inside a separately trained world model. Ledger frames it as the GSE-Dream upgrade: game states are multimodal (3rd-and-long → conversion, sack, or turnover), and categoricals capture discrete regimes where Gaussians blur them.
## Key metrics/methods (formulas where given, else "not specified")
- Straight-through: sample = onehot_sample + probs − sg(probs) (Bengio et al. 2013).
- KL balancing: L_KL = α·KL(sg(q)‖p) + (1−α)·KL(q‖sg(p)), **α = 0.8**, scaled by β = 0.1 (Atari) / 1.0 (continuous control).
- ELBO: reconstruction + reward log-likelihoods − β·L_KL.
- RSSM: deterministic h_t recurrent; prior p(ẑ_t|h_t) predicts posterior q(z_t|h_t,x_t) without the image; behavior learned in imagination via REINFORCE + straight-through world-model gradients.
## Data sources named
Atari benchmark (55 games, sticky actions, 200M steps) vs IQN, Rainbow (same budget), SimPLe; humanoid stand-up/walking from pixels only. No code URL stated in extracted text.
## Findings (numbers and facts, not vibes)
- (Paper claims.) First agent with human-level Atari performance (55 games) learned purely inside a separately trained world model; "surpasses the final performance of the top single-GPU agents IQN and Rainbow" at the same budget.
- Humanoid stand-up/walking solved from pixels only.
- SimPLe comparison discounted (easier 36-game subset, fewer steps); per-game scores in Table K.1.
- Ledger's adoption gate: ADOPT categorical latents if (B) beats (A) on 2024 TVD/ECE, or matches them while showing multimodal next-play-EPA predictions (Hartigan dip test p<0.05 on ≥20% of 3rd/4th downs).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: world-model architecture for simulating game sequences (nflverse play-by-play) — latent-regime modeling, not a QB/coaching/OL profile per se.
- QB-BEHAVIOR (INFERENCE): multimodal latents are the natural representation for QB decision regimes on high-leverage downs (conversion/sack/turnover as discrete outcomes); a categorical RSSM trained on play sequences could be probed for QB-specific regime transition behavior.
## Engine-actionable? (yes/no + one-line what)
Yes — replace Gaussian latents in the GSE-Dream RSSM with a vector of categoricals (e.g., 32×32) + KL balancing α=0.8, train on nflverse 2006–2025 play sequences, and run the head-to-head Gaussian-vs-categorical test with a multimodality probe on 3rd/4th downs; also KL balancing (α=0.8) is kept regardless since prior accuracy is what simulation consumes.
