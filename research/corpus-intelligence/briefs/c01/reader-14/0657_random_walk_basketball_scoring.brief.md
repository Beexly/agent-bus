# arxiv-program/research/2026-09-21/arxiv-deep/0657-random-walk-basketball-scoring.md
## What it is (1-2 sentences)
Research ledger (ADAPT verdict) on Gabel & Redner, "Random Walk Picture of Basketball Scoring" (arXiv:1109.2825v2, J. Quantitative Analysis in Sports 2012) — a fresh-search replacement for REJECTed 1305.1998v1. It models basketball scoring as a Poisson-like antipersistent random walk with a small linear restoring force toward ties; the ledger's read is that the METHOD (not the basketball constants) ports to nflverse as a principled live win-probability / next-score model.

## Key metrics/methods (formulas where given, else "not specified")
- Scoring rate: temporally homogeneous Poisson-like, 0.03291 plays/sec (~94.78 scoring plays/game); inter-score intervals exponential with λ_tail = 0.048/sec; lag correlations C(n) < 0.03 (nearly memoryless), where C(n) = Σ_k (t_k − t̄)(t_{k+n} − t̄)/Σ_k (t_k − t̄)².
- Antipersistence: same team scores next with q = 0.348 (possession reverts); streak-length distribution Q(s) = q[w_1 Q(s−1) + w_2 Q(s−2) + w_3 Q(s−3) + w_4 Q(s−4)] matches data — streaks are pure randomness, no hot hand.
- Restoring force (Ornstein–Uhlenbeck-type): P(team with lead L scores next) = S(L) = 1/2 − 0.0022L (least-squares fit) — leaders coast, trailers press.
- Score-difference variance: σ² = 2Dt, D_fit = 0.0363 pts²/sec ≈ D_ap = 0.0383 from antipersistent-walk theory D_ap = (ℓ²/(2τ))·(q/(1−q)); diffusion ∂_t P = D_ap ∂²_Δ P.
- Full computational model: P_A = I_A − 0.152r − 0.0022Δ; P_B = I_B + 0.152r + 0.0022Δ, r = ±1 by who scored last; intrinsic strengths Bradley-Terry I_A = X_A/(X_A+X_B); team strengths ~ Gaussian(μ_X=1, σ²_X), σ²_X = 0.0083 fit by χ² matching of 4 observables (χ² = Σ_x (F_E(x) − F_S(x))²).
- Péclet number Pe = v²t/(2D) ≈ 0.55 — strength bias small vs stochastic fluctuations.
- End-of-game anomaly: last 2.5 min, score-diff distribution spikes at Δ=0 (urgency/fouling).
- Ledger's GSE port: estimate NFL analogues from nflverse (2015–2024) — scoring-event rate, q_NFL (expect <0.5, structural via kickoffs), restoring force via logistic regression P(next score | lead L) = 1/2 + a − bL; live model P(next score by A) = I_A − c_1·r − c_2·Δ with I_A from GSE's pregame rating; rest-of-game simulation → live win probability + live spread/total distributions; NFL Péclet number as a ceiling diagnostic for pregame ratings; improvement = bivariate smooth P(next score | lead, time remaining) for Q4.

## Data sources named
Play-by-play from all 6,087 NBA games, 2006/07–2009/10 (incl. playoffs), regulation only, overtime excluded; 20 seasons of win/loss records for strength fitting. Sources basketballvalue.com (pbp) and shrpsports.com (records) — both defunct/changed; ledger notes reproducibility from modern pbp. GSE port targets nflverse play-by-play 2020–2024.

## Findings (numbers and facts, not vibes)
- q = 0.348; 2.0894 pts/play; 94.78 plays/game; D_fit = 0.0363 vs D_ap = 0.0383 (close agreement).
- Restoring coefficient −0.0022 per point of lead; σ²_X = 0.0083 → ~2/3 of teams within 1 ± 0.09 intrinsic strength; Pe ≈ 0.55; "difficult to determine the superior team by observing a typical game."
- Winning team had better season record with probability 0.6777.
- All four observables' χ² minima in σ²_X ∈ [0.00665, 0.00895].
- Ledger's reproducible-test gates: restoring coefficient b significantly ≠ 0 (p < 0.01, expected sign b > 0) in NFL; live model must beat pregame-only naive baseline by log-loss ≥ 0.01 at Q1/Q2/Q3 checkpoints on 2023–2024.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — in-game/live modeling methodology: lead-dependent restoring force and possession-change antipersistence as structural terms for live win probability and live spread/total distributions; no direct QB/coaching/OL/scheme content.
- SCHEME (secondary, INFERENCE) — the restoring-force term captures scheme/game-state behavior (prevent defense, hurry-up, garbage-time dynamics); the ledger hypothesizes b > 0 in NFL via prevent defense / garbage-time effects, but this is untested.

## Engine-actionable? (yes/no + one-line what)
Yes — estimate the NFL antipersistence coefficient, scoring rate, and lead-dependent restoring force from nflverse, then build a rest-of-game simulation live model (P(next score) = I_A − c_1·r − c_2·Δ) for live win probability and live spread/total, gated on log-loss ≥ 0.01 improvement over pregame-only at Q1/Q2/Q3 checkpoints.
