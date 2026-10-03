# arxiv-program/research/2026-09-21/arxiv-deep/1952-learning-to-simulate-complex-physics.md
## What it is (1-2 sentences)
Deep read of Sanchez-Gonzalez et al. (DeepMind/Stanford, 2020), arXiv:2002.09405 — Graph Network-based Simulators (GNS): encode-process-decode over a particle graph with M rounds of learned message passing, trained single-step, rolling out thousands of timesteps across fluids/rigid/deformable materials. Ledger verdict: ADAPT — players as particles, interactions as message passing; the natural inductive bias for NGS tracking data (22 interacting agents).
## Key metrics/methods (formulas where given, else "not specified")
- G^0 = Encoder(X); G^{m+1} = MessagePass(G^m), m=0…M−1; Y = Decoder(G^M); X_{t+1} = Integrator(X_t, Y).
- Training: single-step L2 loss on predicted accelerations with input noise corruption.
- Key empirical findings: the MAIN determinants of long-term rollout performance were (1) number of message-passing steps M and (2) training-data noise corruption — NOT other hyperparameters.
## Data sources named
Particle physics datasets Water-3D, Goop-3D, Sand-3D, rigid/deforming solids; community reference implementations exist; code not stated in extracted text.
## Findings (numbers and facts, not vibes)
- One GNS model was SOTA vs prior learned simulators (DPI, CConv) across fluids, rigid solids, deformable materials.
- Generalizes from thousands of training particles/timesteps to different initial conditions, thousands of timesteps, and ≥10× particle counts at test time.
- Exact MSE numbers not extracted (figure-based reporting).
- Stated limitation: football players have intent/assignments/adversarial objectives — message passing captures interaction but not strategic intent; GNS predicts positions, so GSE needs a discrete event head (scores, turnovers).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Within-play tracking simulator: nodes = 22 players (+ball) with (x,y,vx,vy,team,role) at 100ms frames, kNN/radius graph rebuilt each frame, plus an event head (tackle/catch/incompletion/turnover) — OTHER (tracking simulation).
- Intent-conditioned message passing: condition node updates on play-design embedding (play concept codebook) so blockers block and receivers run routes — SCHEME / OL (line assignments) / QB-BEHAVIOR (route structure).
- Interaction structure as inductive bias vs flat-vector game-state ledgers — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-GNS": NGS tracking 2018–2023 single-step training with input noise corruption, M∈{1,3,10} ablation, autoregressive full-play rollouts feeding the game-level simulator; gate: rollout endpoint error beats no-interaction baseline by ≥20% on 2024 held-out plays AND event-head ECE ≤0.05; play-call conditioning required before production.
