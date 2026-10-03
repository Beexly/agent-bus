# arxiv-program/research/2026-09-21/arxiv-deep/1946-planning-with-diffusion-for-flexible-behavior.md
## What it is (1-2 sentences)
Full-paper research ledger on Janner, Du, Tenenbaum, Levine (2022) "Planning with Diffusion for Flexible Behavior Synthesis" (arXiv:2205.09991), verdict ADAPT. It treats diffusion-over-full-trajectories (Diffuser) as a joint whole-game simulation primitive for GSE — non-autoregressive, long-horizon coherent, with test-time conditioning via inpainting (clamp played prefix → principled live in-game simulation) and return-guidance for tail scenarios.
## Key metrics/methods (formulas where given, else "not specified")
- Diffusion training objective: L(θ) = E_{i,ε,τ^0}[ ‖ ε − ε_θ(τ^i, i) ‖² ], i ~ U{1..N}, ε ~ N(0,I); reverse covariances follow the Nichol & Dhariwal cosine schedule.
- Guided sampling (control-as-inference): p̃_θ(τ) = p(τ | O_{1:T}=1) ∝ p(τ)·p(O_{1:T}=1 | τ), p(O_t=1) = exp(r(s_t,a_t)); guide gradients = ∇J(μ) from a return predictor J_φ trained on noisy trajectories.
- Planning as inpainting: clamp s_0, s_T (or any timesteps) during denoising for goal-conditioned plans from undirected data; warm-start (forward-diffuse previous plan a few steps, re-denoise) for ~10× faster planning.
- Architecture: 1D-temporal-conv U-Net over trajectories τ = (s_0, a_0, …, s_T, a_T); planning horizon set by input dimensionality, not architecture.
## Data sources named
D4RL Maze2D, block-stacking (10,000 PDDLStream demonstration trajectories), D4RL locomotion (HalfCheetah/Hopper/Walker2d). No code URL stated in paper (ledger notes github.com/jannerm/diffuser exists publicly but records only what the paper states: not stated).
## Findings (numbers and facts, not vibes)
- Maze2D: Diffuser 113.9±3.1 (U-Maze), 121.5±2.7 (Medium), 123.0±6.4 (Large) — over 100 in all sizes, beating the reference expert; large-maze best baseline 58.6.
- Multi-goal: Diffuser matches single-task performance with no retraining; best model-free baseline (IQL + HER) drops substantially. MPPI with ground-truth dynamics performs poorly — "highlights the difficulty posed by long-horizon planning even when there are no prediction inaccuracies".
- Block stacking: Diffuser 58.7±2.5 (unconditional), 45.6±3.1 (conditional) vs BCQ 0.0/0.0, CQL 24.4/0.0 (100 = perfect).
- Warm-start: performance "suffers only minimally even when using one-tenth the number of diffusion steps".
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — simulation backbone lane (game simulation, live pricing via inpainting); complements autoregressive/RSSM backbones (1942–1945) with jointly-coherent whole-game generation.
## Engine-actionable? (yes/no + one-line what)
yes — build "GSE-Diffuser" (1D-temporal-conv U-Net over padded play-state sequences trained on nflverse 2006–2025; inpaint played prefix for live simulation); ADOPT iff 2024 held-out final-score TVD ≤5%/week, WP ECE ≤0.03, and throughput ≥1k games/minute/GPU.
