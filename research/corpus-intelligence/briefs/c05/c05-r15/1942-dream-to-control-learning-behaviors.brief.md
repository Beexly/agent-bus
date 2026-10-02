# arxiv-program/research/2026-09-21/arxiv-deep/1942-dream-to-control-learning-behaviors.md
## What it is (1-2 sentences)
Deep read of Hafner, Lillicrap, Ba & Norouzi (2019), arXiv:1912.01603 — Dreamer: learn a latent world model (RSSM representation + transition + reward models) and learn behaviors purely in latent space by backpropagating analytic gradients of λ-return value estimates through imagined trajectories. Ledger verdict: ADAPT for the latent-dynamics machinery as an NFL game simulator; the actor-critic policy half is replaced with Monte-Carlo pricing.
## Key metrics/methods (formulas where given, else "not specified")
- Components: representation p(s_t|s_{t-1},a_{t-1},o_t); transition q(s_t|s_{t-1},a_{t-1}) (RSSM: deterministic recurrent core + stochastic state); reward q(r_t|s_t).
- λ-return target: V_λ(s_τ) ≐ (1−λ)Σ_{n=1}^{H−1}λ^{n−1}V_N^n(s_τ) + λ^{H−1}V_N^H(s_τ).
- ELBO terms: J_R^t = ln q(r_t|s_t); J_D^t = −β KL(p‖q) + observation reconstruction.
## Data sources named
DeepMind Control Suite (20 visual control tasks); 5×10^6 environment steps, 5 seeds; code stated at danijar.com/dreamer (TensorFlow Probability); DMC open source.
## Findings (numbers and facts, not vibes)
- After 5M steps: Dreamer average performance 823 across tasks vs PlaNet 332 vs D4PG 786 (D4PG needed 10^8 steps).
- Compute: ~33h per 10^6 env steps on 1× V100 + 10 CPUs vs 11h PlaNet, 24h D4PG-to-similar.
- Ablation: pixel reconstruction beat contrastive (solved ~half the tasks) and reward-prediction-alone (insufficient) for representation learning.
- RSSM produced accurate 45-step open-loop predictions given only actions (Fig. 5).
- Limitations noted: continuous Gaussian latents blur multimodal futures; DMC dynamics are smooth/Markovian unlike football's regime breaks (injuries, halftime, garbage time).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Latent game simulator rolling N=100k full-game trajectories in parallel for spread/total/exotic prop pricing — OTHER (pricing infrastructure).
- Discrete (categorical) latents for regime switching (garbage-time vs competitive script) — SCHEME.
- Halftime-adjustment and injury regime breaks flagged as the football-specific stationarity violation — COACHING.
## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-Dream": RSSM over nflverse play-by-play 2006–2025 (state = down/distance/yardline/score/timeouts), team-strength embeddings as global context, structured play-feature decoders (not pixels), N=100k parallel trajectories per matchup; gate on 2024: ≥5% better one-step log-likelihood than bootstrap baseline, final-score TVD within 5%/week, kickoff win-prob ECE ≤0.03.
