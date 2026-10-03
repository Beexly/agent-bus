# docs/arxiv-program/research/2026-09-21/arxiv-deep/1091-picking-winners-in-daily-fantasy-sports.md

## What it is (1-2 sentences)
Ledger of arXiv:1604.01455v3 (Hunter, Vielma, Zaman 2016, verdict ADAPT). Academic portfolio-theory formulation for DFS tournaments: maximize P(at least one of k entries wins) via mean/variance/correlation decomposition, operationalized as a sequential integer program with variance floors and overlap caps.

## Key metrics/methods (formulas where given, else "not specified")
- U(S) = P(∪_{i∈S} E_i); U nonnegative, monotone, submodular → greedy gives U(Sg)/U(S*) ≥ 1 − e^{−1}.
- Pairwise approximation U₂(S) = Σ_i P(E_i) − (1/2)Σ_{i≠j} P(E_i ∩ E_j); error bound 0 ≤ U(S) − U₂(S) ≤ 20c(kp)³.
- Sequential IP: maximize projected score s.t. variance ≥ floor, pairwise covariance/overlap ≤ caps with prior lineups, salary/position constraints. Type 4 stacking (correlated teammates) best; max overlap recommended 7 (very small slates) → 4 (slates with >9 games).
- Acceptance gate in file: ≥20% relative improvement in top-0.1% finishes vs independent-greedy baseline over 18 weeks.

## Data sources named
NHL: 38 DraftKings contests 2015-10-21 through 2015-12-31; projection models fit on 10,825 skater observations and 565 goalie observations (506 in win-probability models); DraftKings NHL lineup = 9 players, $50,000 cap. MLB extension: 10 contests May–June 2016, 200 lineups per contest. Projections from the authors' own regression models (appendix), not a commercial provider. Code: github.com/dscotthunter/Fantasy-Hockey-IP-Code, github.com/zlisto/dailyfantasybaseball; data not public.

## Findings (numbers and facts, not vibes)
- All solvers generated 100 lineups in under 4 minutes.
- NHL: Type 4 stacking best overall; overlap cap schedule 7 (small slates) → 4 (>9 games).
- MLB (10 contests, 200 lineups each): best ranks 1/47,916, 3/38,333, 7/38,333, 2/38,333 — outright wins and top-10 finishes in large-field GPPs.
- Optimal portfolios want high-mean, high-variance, low-correlation entries; expected value is a poor objective in top-heavy tournaments.
- Limitations flagged: Gaussian analysis is approximate; no ownership/duplicate-lineup modeling; NFL has different correlation structure (QB-WR stacking, bring-backs); no comparison vs modern commercial optimizer.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: formalizes stacking — Type 4 stacking (correlated teammates) as the NFL QB+WR/TE + bring-back analogue.
- OTHER: DFS portfolio optimization — variance-floor + overlap-cap sequential IP for GPP lineup construction; ownership-adjusted diversification improvement.

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the sequential IP (variance floor + overlap caps 4–6 for NFL main slates, QB/WR/TE stacks + bring-backs) to GSE's DFS optimizer; per-player variance model with position-prior shrinkage is the missing piece.
