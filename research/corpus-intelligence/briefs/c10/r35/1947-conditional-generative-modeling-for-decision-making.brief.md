# arxiv-program/research/2026-09-21/arxiv-deep/1947-conditional-generative-modeling-for-decision-making.md
## What it is (1-2 sentences)
Deep-read ledger of Ajay et al. (Decision Diffuser, ICLR 2023, arXiv:2211.15657): reframes sequential decision-making as conditional generative modeling — a return/constraint-conditioned diffusion model over STATE sequences only, with inverse-dynamics action recovery, sidestepping value-function estimation. Verdict in file: ADAPT — the most GSE-shaped diffusion formulation in the lane; inverse-dynamics head irrelevant for pricing, dropped.

## Key metrics/methods (formulas where given, else "not specified")
- Training objective (Eq. 4): max_θ E_{τ~D}[ log p_θ(x_0(τ) | y(τ)) ], with x_k(τ) ≐ (s_t,…,s_{t+H−1})_k (noisy state sequence)
- Classifier-free guidance sampling: ε_θ(x_k,k) + ω(ε_θ(x_k,y,k) − ε_θ(x_k,k)), ω = guidance scale; plus low-temperature sampling
- Inverse dynamics: a_t ≐ f_φ(s_t, s_{t+1})
- GSE spec in file: state-only diffusion over game-state sequences (down/distance/yardline/score-diff/time per play, no play-type tokens); y = normalized final margin, total points, binary flags (key injury, weather bucket); train conditional + unconditional; two sampling modes — unbiased (ω=0, temp 1.0) for pricing distributions, conditional (ω>0) for exotic-prop pricing; test-time composition of multiple conditions (margin AND total AND weather) for stress scenarios

## Data sources named
Offline D4RL datasets (locomotion, Kitchen, Kuka block stacking); 2D navigation toy for constraint composition. Code: github.com/anuragajay/decision-diffuser; project page anuragajay.github.io/decision-diffuser. Proposed GSE data: nflverse 2006–2025 games.

## Findings (numbers and facts, not vibes)
- Decision Diffuser "performs better than both TD learning (CQL) and Behavioral Cloning (BC) across D4RL locomotion tasks, D4RL Kitchen tasks and Kuka Block Stacking tasks" (paper claims)
- Med-Expert HalfCheetah: BC 55.2, CQL 91.6, IQL 86.7, DT 86.8, TT 95, MOReL 53.3, Diffuser 79.8, DD 90.6±1.3
- Med-Expert Hopper: BC 52.5, CQL 105.4, IQL 91.5, DT 107.6, TT 110.0, MOReL 108.7, Diffuser 107.2, DD 111.8±1.8
- Constraint composition: single-constraint training → combined-constraint satisfaction at test time (qualitative, Fig. 2, 2D toy only)
- Limitations noted in file: return conditioning cannot invent better-than-dataset play (pricing tail-event ceiling); low-temp sampling trades diversity for return — pricing needs the full distribution (temp 1.0 / ω→0); ω is a sensitive knob; constraint composition unproven at NFL complexity

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Conditional simulation without retraining (condition on final margin, injuries, weather): OTHER (game-simulation/pricing engine — tail-scenario and exotic-prop pricing capability no current GSE component has)
- State-only diffusion (smoother states vs discrete high-frequency actions): OTHER (modeling choice for game-state sequences)
- Test-time constraint composition: OTHER (joint "snow game + divisional underdog + backup QB" stress scenarios without combinatorial model explosion)

## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-DecisionDiffuser" (state-only conditional diffusion over nflverse game-state sequences, drop inverse dynamics), adopt iff 2024 held-out unconditional TVD ≤5%/week and ECE ≤0.03 AND conditioning shifts sampled margins ≥5 points in the conditioned direction without collapsing diversity (sampled std ≥80% of unconditional); reject if conditioning doesn't steer or unconditional quality trails the 1946 Diffuser variant.
