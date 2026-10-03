# arxiv-program/research/2026-09-21/arxiv-deep/0890-rugby-union-bradley-terry-multiple-outcomes.md
## What it is (1-2 sentences)
Ledger brief for Hamilton & Firth (2021, arXiv:2112.11262v1, University of Warwick): maximum-entropy extension of Bradley–Terry from binary outcomes to arbitrary finite outcome sets, demonstrated on English schoolboy rugby. Verdict: ADAPT — the principled template for GSE's ordinal markets (margin bands, totals bands, alt lines).

## Key metrics/methods (formulas where given, else "not specified")
- Multi-outcome BT: p^{ij}_{a,b} ∝ π_i^a π_j^b, normalized over the finite outcome set (teams i,j with strength parameters π; outcome scores a,b).
- Log-linear form: log p^{ij}_{a,b} = a·θ_i + b·θ_j − log Z_{ij} (+ home effect), θ = log π.
- Estimated via log-linear models (R package gnm).
- Symmetric prior: notional wins/losses against a dummy team, prior weight 4 — regularization toward parity.
- Rugby implementation: outcome categories (wide/narrow win, draw, narrow/loss) × try-bonus outcomes; preferred model shares team strengths across result and try-bonus processes (tested against the separated alternative); home advantage as an additive term, constant across teams.

## Data sources named
- Daily Mail Trophy (English schools rugby), 2015/16–2017/18 seasons; 2017/18: 102 teams, 436 matches; competition-published results.
- Schema: date, home/away teams, points scored, outcome category, try bonus (yes/no), home indicator.

## Findings (numbers and facts, not vibes)
- 2017/18: 102 teams, 436 matches. Preferred model: shared team strengths across result and try-bonus outcomes. Prior weight 4.
- Ranking disagreement vs the competition's incumbent ranking method: mean absolute ~8 places, max 28 places, ~0.4 league points per match — modeling choices materially change published rankings.
- Explicitly retrodictive: no out-of-sample forecasting, no odds test claimed; forecasting use needs walk-forward validation.
- Choosing the outcome scores (a,b) is a modeling decision the paper does not fully automate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the corpus's only principled ordinal-rating construction — natural companion to 0885 (spread CDF) and 0884 (Elo theory); foundation for coherent alternative-spread/total fair pricing (coherent probabilities across all bands, unlike independent per-line models).
- OTHER: home-advantage handled as an additive constant term — relevant modeling choice for NFL home-field prior structure.

## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL ordinal rating model (margin bands + totals bands) using the p ∝ π_i^a π_j^b MaxEnt form with shared team strengths, notional-games prior (start weight 4), and a home-advantage term, estimated via Poisson log-linear GLM; numeric gate: 2025 walk-forward held-out log-likelihood beats binary-BT baseline by ≥0.01 per game with reliability slope 0.9–1.1.
