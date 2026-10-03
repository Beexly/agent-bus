# arxiv-program/research/2026-09-21/arxiv-deep/0410-analyzing-ingame-movements-of-soccer-players.md

Source paper: Gyarmati & Hefeeda (2016), arXiv:1603.05583v1. Ledger verdict: ADAPT.

## What it is (1-2 sentences)
Large-scale mining of soccer players' movement patterns from sparse Opta event data (positions known only at ball events): mini-batch K-means clusters movement vectors, each player is profiled as a normalized cluster histogram, and cosine distance yields similar-player comps plus uniqueness/consistency scores. The ledger ports it as sparse-data role-archetype mining for NFL when NGS tracking is unavailable.

## Key metrics/methods (formulas where given, else "not specified")
- Movement vector: (x1, y1, x2, y2, T, s, b) — start/end positions, time, speed, ball-possession flag; speed = displacement / inter-event interval.
- Mini-batch K-means, K=200 clusters on 660,848 movement vectors (542 players).
- Player profile = normalized histogram of cluster assignments; similarity = cosine distance between profiles.
- Uniqueness: U_i = Σ_{j=1}^{M} d_ij, M=5 (sum of cosine distances to 5 nearest neighbors).
- Consistency: C_i^k = (1/N) Σ_t D(c_i^k, c_i^t) — average distance between period-k profile and all other periods' profiles.
- High-speed filter: movements at ≥14 km/h analyzed separately.

## Data sources named
Opta event data, 2012/13 La Liga: >300,000 passes, ~10,000 shots. Proprietary. Positions known only when a player participates in a ball-related event (sparse).

## Findings (numbers and facts, not vibes)
- 660,848 movement vectors, 542 players, mean 1,219 movements/player (max 4,998); mean movement length 19.4 m (max 100 m — the ledger flags this as a sparse-sampling artifact, not a real sprint).
- Ronaldo → Rubén Castro similar-player distance 0.079; market values €100M vs €4.5M (headline scouting claim).
- Top-10 uniqueness: Messi 0.860 uniqueness / 0.30 consistency (3,809 movements) vs Cristiano Ronaldo 0.55 / 0.51.
- No formal validation: no holdout, no expert-agreement study; K=200 arbitrary with no sensitivity analysis.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: sparse-event role archetype discovery — portable to WR/RB/TE comp-finding from nflverse play-by-play + charting where college/NFL tracking doesn't exist; archetype labels as target-share/YAC model features.

## Engine-actionable? (yes/no + one-line what)
Yes — build the per-player action-vector clustering port (K≈50) for draft-prospect and free-agent comps, gated on half-to-half ARI ≥ 0.5 and ≥0.02 out-of-sample R² lift on target-share regression; never present outputs as measured physical movement.
