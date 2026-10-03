# arxiv-program/research/2026-09-21/arxiv-deep/1233-optimizing-daily-fantasy-baseball-lineups.md
## What it is (1-2 sentences)
Ledger of arXiv:2411.11012v1 (Grody, Bansal, Ashqar) — audit-mandated priority replacement for bogus slot 2603.04864v1: a PuLP binary integer program maximizing SaberSim projections to build FanDuel MLB lineups, plus a projection-accuracy audit and exposure-capped portfolio generation. Verdict: ADAPT for GSE's NFL DFS optimizer lane.

## Key metrics/methods (formulas where given, else "not specified")
- Binary IP: max Σ p_i x_i s.t. Σ s_i x_i ≤ 35,000 (salary cap), positional constraints, x_i ∈ {0,1}, 9 players; solved in Python/PuLP with default COIN-OR solver.
- Exposure cap: Σ_{lineups} x_{i,l} ≤ 25 for 100 lineups (worked example).
- Projection audit: compare SaberSim projection vs actual over sample.
- Proposed but untested: lineup stacking and 90th-percentile (upper-tail) projections for tournaments.

## Data sources named
SaberSim data, June 1–11, 2019, 408 players; per-player-slate fields: projection, actual fantasy points, salary, projection-minus-actual. No contest data (authors lacked access — no ROI results).

## Findings (numbers and facts, not vibes)
- Mean projection 8.41 vs mean actual 9.55 (projections biased low); mean salary ~$3,903; minimum actual −15.
- 30-day analysis: highest-projected lineup averaged 144.6 actual points; hindsight-optimal averaged 251.9; gap 107.3 points (~57% of ex-post optimum captured).
- Reported "mean squared error" 10.510 and "R-mean-squared" 0.19 — terminology nonstandard/likely wrong; ledger treats both as unreliable.
- Methodology weak: 11 days of data, no train/test split, no payout modeling, no variance/ownership/correlation modeling (maximizing mean projection is a cash-game objective misapplied to tournaments).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: PuLP/COIN-OR integer program as GSE's NFL DFS optimizer — ingest GSE projections + salaries + positions, generate N lineups iteratively with ~25% per-player exposure caps and a minimum-projected-points floor.
- OTHER: Promote the paper's untested proposals to first-class features: QB+pass-catcher stacking constraints and 90th-percentile upper-tail projections as the tournament objective (plain projection-maximization is the wrong objective for GPPs).
- OTHER: Standing optimizer diagnostic — log the projection-vs-actual gap per slate (the 107.3 analogue); A/B plain maximization vs tail+stacking variant on historical slates with archived payouts.

## Engine-actionable? (yes/no + one-line what)
yes — rebuild the PuLP/COIN-OR binary-IP optimizer for NFL DFS with exposure-capped portfolio generation, stacking constraints, and upper-tail projection objectives; the 144.6-vs-251.9 gap is a standing benchmark to beat.
