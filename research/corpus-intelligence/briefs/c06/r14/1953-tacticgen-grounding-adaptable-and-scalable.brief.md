# arxiv-program/research/2026-09-21/arxiv-deep/1953-tacticgen-grounding-adaptable-and-scalable.md

## What it is (1-2 sentences)
Ledger digest of Xu et al. (2026) "TacticGen: Grounding Adaptable and Scalable Generation of Football Tactics" (arXiv:2604.18210; association football, not American). Verdict: ADAPT — the "prediction → generation" framing with inference-time classifier guidance ports to GSE as objective-steered game-script generation (e.g., "paths where the underdog covers") for derivative pricing and scenario content.

## Key metrics/methods (formulas where given, else "not specified")
- Multi-agent Diffusion Transformer: agent-wise self-attention (player-player cooperative/competitive dynamics) + context-aware cross-attention (game context, ball, temporal sequence).
- Inference-time classifier guidance: x_{t−1} ∼ p(x_{t−1}|x_t) tilted by ∇ log p(objective | x_t) — steer generation toward objectives specified by rules, natural language, or neural evaluators without retraining.
- Scaling laws claimed across model size, training duration, data volume.
- GSE port (GSE-TacticGen): tactical units = PLAYS; diffusion transformer over drive-level play descriptors + personnel + formation embeddings conditioned on game context; personnel/formations as "agents", unit-wise (offense/defense/special-teams) attention; classifier guidance toward betting objectives (TD drives, three-and-outs, spread-coverage scripts).

## Data sources named
3.3M+ annotated events and 100M tracking frames from top-tier soccer leagues; expert case study with Birmingham City FC staff. Project page: https://shengxu.net/TacticGen/. No code-release statement extracted.

## Findings (numbers and facts, not vibes)
- Claimed SOTA precision in player-trajectory prediction on the 3.3M-event/100M-frame corpus; scaling consistent with scaling laws; expert case study confirms realistic, strategically valuable tactics. Exact numeric tables not extracted from the ledger.
- Positioned vs TacticAI (corner-kick set pieces only) and TacEleven/GenTac (tied to curated text-to-trajectory conditioning sets) — TacticGen handles open-play continuous dynamics with free-form inference objectives.
- Adoption gate in ledger: guided hit rate ≥3× base rate on 2024 held-out drives AND sample entropy ≥70% of unconditional (no mode collapse); else keep guidance as a resampling filter on autoregressive outputs. GSE lacks the 100M-frame tracking scale (NGS much smaller); American football's discrete play structure requires the play-as-tactical-unit reframing.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Objective-steered generation: steer game scripts toward user betting objectives at inference (SCHEME)
- Conditional scenario distributions — "paths to the over hitting", shootout vs slugfest scripts — for derivative pricing and content (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — build GSE-TacticGen: drive-level diffusion transformer on nflverse 2015–2023 with classifier guidance toward betting objectives, gated on ≥3× guided hit rate with entropy ≥70% of unconditional on 2024 held-out drives.
