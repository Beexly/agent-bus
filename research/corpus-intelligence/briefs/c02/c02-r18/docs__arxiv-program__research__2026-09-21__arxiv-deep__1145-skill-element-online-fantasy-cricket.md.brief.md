# docs/arxiv-program/research/2026-09-21/arxiv-deep/1145-skill-element-online-fantasy-cricket.md

## What it is (1-2 sentences)
Deep read (ledger #1145) of arXiv:2512.22254 (Sarkar et al., 2025) testing whether online fantasy cricket is skill vs chance via 15 team-selection strategies simulated across IPL 2024 under two contest payoff structures. Verdict in file: ADAPT — not for the legal finding, but for the contest-structure-dependent strategy results: high-variance strategies win top-heavy contests, consistent deterministic strategies win flat-payout contests.

## Key metrics/methods (formulas where given, else "not specified")
- 15 strategies in 3 families: Variable (Random 1/2, Fav Team, Allrounder Select All, Career Averages, Tournament Stats, Popularity), Deterministic (Career Points, TOPSIS×3, Mean-Var Optimization), Learning/Deterministic form-based (MA5 = avg points last 5 matches, MA1 = last match, Allrounder Pref).
- 8 metrics (Win% Best Rank, Win% Average Rank, mean/median average points, average rank, best rank), normalized to (0,1); composite "Average 4" = mean of 4 key metrics.
- Metric normalization: x'_ij = (x_ij − (min_i x_ij − 1))/(max_i x_ij − min_i x_ij + 2); rank-based metrics flipped via 1 − x'.
- Dynamic tournament: 100 iterations × bootstrap-sampled matches; agent reweighting via softmax w_i = e^{x_i/25}/Σ_j e^{x_j/25}, agents_i = round(w_i × 1500); 6 repetitions averaged.
- Money game: Mega Contest (1,500 agents, entry 500; pool 5.3 lakh ≈ 70% of 7.5 lakh collected; top 60% paid; 1st prize 50,000, steep drop-off) vs 4x-or-Nothing (entry 100; flat 400 prize to top 20%; pool 80%).
- GSE spec in file: codify contest-aware DFS doctrine — classify contests top-heavy vs flat; GPP lineups maximize ceiling (stacks, low-ownership pivots), flat contests maximize floor/median (form-weighted MA5 analogue); validate on historical DraftKings NFL data 2023–2024; effort ~1 week.

## Data sources named
- IPL 2024: 74 scheduled matches, 71 completed (3 abandoned); 22 Mar–22 May 2024; scorecards via CricBuzz API (RapidAPI); career stats via ESPNcricinfo; selection pool = playing XI + impact players (lineups known ~30 min before match); 15 strategies × 100 agents per match.
- No real-platform data — all payoffs simulated; single IPL season, no out-of-tournament validation.

## Findings (numbers and facts, not vibes)
- Points/ranks: variable strategies took rank 1 in ~95% of matches but Win%(Average Rank) ≈ 0 (Random 1: Win% Best Rank 23.944%, Win% Average Rank 0.000%); deterministic strategies had the best average rank in ~89% of matches; MA5 Win%(Average Rank) 21.127% (highest). [OTHER: variance-vs-consistency tradeoff]
- Average-4 ranking: Career Averages 1st, then Tournament Stats, MA5 — all beating Random 1. [OTHER: strategy ranking]
- Mega Contest: MA5 consistently high across all metrics; Random 1 highest maximum payoff but strongly negative mean/median; MA1, Mean-Var, Allrounder Pref, Career Points, TOPSIS Synthesis, Popularity Selection had NEGATIVE maximum payoffs (every agent lost money). [OTHER: payoff structure effects]
- 4x-or-Nothing: MA5's MINIMUM payoff was positive — every MA5 agent profited; Career Averages/Tournament Stats risky (large negative minimums) but competitive means. [OTHER: flat-contest strategy]
- Dynamic tournament: Mega converged to variable strategies + MA5 as only strong deterministic survivor; 4x converged in 3–5 iterations to a single dominant strategy (most often MA5 or MA1). [OTHER: population adaptation]
- Popularity Selection performed poorly in both contests — popularity was driven by weak strategies' picks (caution about ownership-based selection). [OTHER: ownership/consensus caution]
- Limitations: simulated payoffs only; credit-price constraint non-binding (max price 9, 11 players always fit under 100); tie-breaking by entry order arbitrary; equal strategy representation distorts Popularity result; "skill" conclusion overstated; cricket-specific.
- Adoption gate in file: ADOPT only if backtest reproduces the crossover (ceiling wins GPPs, median wins flat) with significance over ≥1 season and ≥10% ROI difference between matched/mismatched strategy-contest pairs.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Contest-structure → lineup-variance doctrine (GPP = ceiling, flat = floor): [OTHER — DFS contest strategy]
- MA5 recent-form dominance in flat contests supports form-weighted projection inputs: [OTHER — feature weighting]
- Popularity-selection failure as caution against consensus/ownership-driven selection: [OTHER — ownership leverage]
- Softmax population dynamics as ownership-modeling lens (opponent pool adapts toward past winners' strategies): [OTHER — game theory]

## Engine-actionable? (yes/no + one-line what)
yes — Formalize and backtest the contest-aware DFS doctrine (ceiling-optimized lineups for GPPs, floor/median-optimized for flat contests) on DraftKings NFL 2023–2024 data, adopting into the product only if the crossover reproduces with ≥10% ROI difference; plus the softmax population-adaptation experiment for ownership-aware leverage.
