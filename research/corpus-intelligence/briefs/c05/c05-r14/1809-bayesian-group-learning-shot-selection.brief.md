# arxiv-program/research/2026-09-21/arxiv-deep/1809-bayesian-group-learning-shot-selection.md
## What it is (1-2 sentences)
Two-stage Bayesian method (Hu, Yang & Xue, arXiv:2006.07513) that models each NBA player's shot locations as a Log-Gaussian Cox Process estimated via INLA/SPDE, then clusters players into shot-selection archetypes with a Mixture of Finite Mixtures (MFM) that jointly estimates the number of groups K and assignments.
## Key metrics/methods (formulas where given, else "not specified")
- Stage 1: LGCP — shot locations ~ Poisson process with log-intensity = Gaussian process (Matérn covariance via SPDE).
- Stage 2: similarity sᵢⱼ = 1 − dᵢⱼ/max(d), dᵢⱼ = normalized ‖λ̂ᵢ − λ̂ⱼ‖₂; Fisher z-transform z = atanh(s); MFM with prior on K; collapsed MCMC + Dahl's partition summary.
- Assumptions: shot-attempt locations only (makes/misses, defenders, context ignored); one season fixes a player's style; two-stage (Stage-1 uncertainty not propagated).
## Data sources named
Simulation (75 players, 3 true groups, 50 replicates); NBA 2017–18 season, 191 players with >400 field-goal attempts, shot (x,y) locations (public via stats.nba.com / BigDataBall-style sources). No public code URL in text.
## Findings (numbers and facts, not vibes)
- Simulation mean Rand index: MFM 0.9988 vs K-means 0.9005, DBSCAN 0.7642, mean shift 0.7380; 42 of 50 replicates recovered the true 3 clusters.
- NBA 2017–18: 9 inferred groups; mean concordance Rand index across 50 chains: 0.948.
- File's ledger verdict: ADAPT (not ADOPT — no predictive evaluation, two-stage uncertainty gap); improvement path = single-stage joint model or propagating Stage-1 posterior uncertainty.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: player-archetype priors for low-sample shooters (rookies, role changes) — shrink shot-diet parameters toward the archetype posterior mean when a player's own sample is thin (<200 attempts in current role); output features P(player ∈ archetype k) and archetype-level 3P-rate/rim-rate priors.
- SCHEME: shot-diet structure informs prop projections (3P attempt rate).
## Engine-actionable? (yes/no + one-line what)
Yes — implement as GSE's probabilistic NBA player-archetype prior (LGCP per-player intensities → MFM archetypes; gate: replicate Rand ≥ 0.99 on simulation and concordance RI ≥ 0.90 on real data) to stabilize prop projections for thin-sample players.
