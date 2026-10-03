# arxiv-program/research/2026-09-21/arxiv-deep/1943-mastering-diverse-domains-through-world.md

## What it is (1-2 sentences)
Ledger digest of Hafner et al. (2023/2024) "Mastering Diverse Domains through World Models" (arXiv:2301.04104, DreamerV3). Verdict: ADAPT — the policy/imagination half is out of scope for pricing, but the robustness toolkit (categorical latents, symlog/twohot for heavy-tailed targets, KL balancing, continue predictor) is the engineering core for a trainable latent NFL simulator.

## Key metrics/methods (formulas where given, else "not specified")
- RSSM world model: h_t = f_φ(h_{t−1}, z_{t−1}, a_{t−1}); z_t ~ q_φ(z_t|h_t,x_t); ẑ_t ~ p_φ(ẑ_t|h_t); r̂_t ~ p_φ(r̂_t|h_t,z_t); ĉ_t ~ p_φ(ĉ_t|h_t,z_t) (continue flag); x̂_t ~ p_φ(x̂_t|h_t,z_t).
- World-model loss (Eq 2): L(φ) = E_qφ[ Σ_t (β_pred L_pred + β_dyn L_dyn + β_rep L_rep) ], β = (1, 1, 0.1); L_dyn, L_rep = max(1, KL[…]) — free bits clipped below 1 nat ≈ 1.44 bits; stop-gradient KL balancing.
- symlog(x) = sign(x)·ln(|x|+1) (Eq 9); symexp(x) = sign(x)·(exp(|x|)−1); symexp-twohot loss L(θ) = −twohot(y)^T log softmax(f(x,θ)) (Eq 11) — categorical cross-entropy regression, scale-invariant.
- Categorical latents (straight-through gradients) mixed with 1% uniform; critic/reward heads zero-initialized; model sizes 12M–400M params.
- GSE port (GSE-Dream): categorical latents 32×32 for turnover/garbage-time multimodality; symlog on EPA/yardage/score-diff inputs; symexp-twohot on score/EPA predictor; continue predictor for drive/game termination via logistic regression; fixed-hyperparameter discipline across teams/seasons.

## Data sources named
8 online-RL benchmark domains, 150+ tasks: Atari-57 (200M steps), Atari100k (400K), ProcGen (50M), DMLab (100M), Minecraft (100M, MineRL v0.4.4), visual control (1M), proprioceptive control (1M), BSuite. Single Nvidia A100 per run.

## Findings (numbers and facts, not vibes)
- One fixed hyperparameter configuration outperforms tuned per-domain experts across 150+ tasks (paper claims).
- Atari 200M: beats MuZero with "only a fraction of the computational resources", beats Rainbow/IQN; Atari100k new SOTA beating transformer-based IRIS; ProcGen beats tuned PPG and Rainbow; DMLab new SOTA vs baselines given 10× data advantage (1B vs 100M); visual control SOTA vs DrQ-v2/CURL; proprioceptive SOTA vs D4PG/DMPO/MPO.
- Minecraft: first algorithm to collect diamonds from scratch without human data or curricula; at 100M steps diamonds in 0.4% of episodes; 100% of Dreamer agents obtain ≥1 diamond vs 0% of baselines.
- Compute: Minecraft 100M steps = 8.9 GPU-days at 200M params; DMLab 100M = 2.9 GPU-days.
- Ablations: world-model KL objective is the most important component, followed by return normalization and symexp twohot.
- Adoption gate in ledger: variant (B, full toolkit) must improve one-step-ahead log-likelihood ≥10% over variant (A, naive Gaussian+MSE) on 2024 held-out plays AND reach TVD ≤5%/week, kickoff WP ECE ≤0.03. REJECT if no significant gain after ≤2 weeks tuning.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Categorical latents for multimodal game states (4th-down decisions, turnover regimes, garbage-time scripts) (SCHEME, OTHER)
- Continue predictor for drive/game termination — correct full-game rollouts (OTHER)
- Team-conditional prior over latents for matchup strength instead of rediscovering it from score context (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the DreamerV3 robustness toolkit (categorical latents, symlog/twohot, KL balancing + free bits, continue predictor) into the GSE-Dream latent simulator stack per the nflverse 2015–2024 A/B test.
