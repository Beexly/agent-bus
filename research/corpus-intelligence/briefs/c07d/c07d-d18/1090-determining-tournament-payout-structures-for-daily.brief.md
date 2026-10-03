# research/2026-09-21/arxiv-deep/1090-determining-tournament-payout-structures-for-daily.md
## What it is (1-2 sentences)
Research note on arXiv:1601.04203v2 (Jain & Saha 2016): a two-stage constrained-optimization framework for DFS tournament payout design — fit a power-law "ideal" payout curve via binary search, then bucket/round it into legal payouts (monotone, minimum payout, nice round amounts, contiguous equal-payout buckets) minimizing squared distance to the ideal. Verdict: ADAPT as GSE contest/product-design IP (pick'em pools, subscriber tournaments, leaderboard payouts), not engine IP.

## Key metrics/methods (formulas where given, else "not specified")
- Ideal payout: `π_i = E + (P1 − E)/i^α`, where E = entry fee (minimum payout), P1 = first prize, i = place.
- Budget identity: `B − N·E = Σ_{i=1..N} (P1 − E)/i^α` (B = total prize pool, N = paid places); RHS strictly decreasing in α → binary search finds α.
- Optimization: minimize `Σ_i (p_i − π_i)²` subject to `Σ_i p_i = B`; `p_1 ≥ p_2 ≥ … ≥ p_N` (monotonicity); `p_i ≥ E`; `p_i` ∈ nice-number set; constant payout within each of r contiguous buckets.
- Three algorithms: (a) exact DP over bucket boundaries and payout values — time `O(rN³B log²B)`, space `O(rN²B logB)` (impractical at scale); (b) integer linear program; (c) four-stage production heuristic (Yahoo's deployed version: greedy bucket formation + local adjustments + extra-winner redistribution).
- Metrics: power-law goodness-of-fit p-values (Figure 3); heuristic solution cost vs exact optimum on small instances; runtime.

## Data sources named
- Real tournament payout tables scraped/analyzed by the authors (several real DFS tournaments; not a public dataset).
- Experimental contest set: Yahoo contests of various sizes + one DraftKings contest with 125,000 winners.
- No player-performance data; no ML; optimization-only.

## Findings (numbers and facts, not vibes)
- Power-law fit across Figure 3 real tournaments: average p-value .237 — fit not rejected (paper's claim).
- Experimental hardware: 2.6 GHz Intel Core i7, 16 GB RAM.
- Production heuristic runtime: under 1.5 seconds even on the hardest contests tested.
- DraftKings 125,000-winner contest: heuristic solution cost 78.7k, runtime 1,700 ms, zero extra winners added (no places added beyond N).
- Exact DP complexity `O(rN³B log²B)` time / `O(rN²B logB)` space — motivates the heuristic.
- No code or dataset released; paper alone.
- No train/test split (not a learning paper); validation is algorithmic: power-law fit, heuristic-vs-exact cost, runtime.
- Limitations: power-law ideal validated on a small set of observed tournaments — if operator conventions change, the "ideal" may not hold; nice-number set hand-chosen; squared-distance objective is a modeling choice, not derived from player-behavior data (no A/B or elasticity evidence the shape maximizes entries/revenue); optimizes a fixed contest, not an operator's contest portfolio; nothing about player skill distributions or payout-driven entry behavior.
- GSE overlap: fills Gap 10 of the existing-research map ("DFS-specific optimization literature — contest-theory/ownership-game equilibrium papers absent"); repo's DFS work (2026-09-13-dfs/, weekly DFS packets) is player-selection/strategy focused — no payout-structure theory. No duplication.
- Repro test spec: synthetic contest B=$10,000, N=1,000, E=$10, P1=$2,000; pass = constraints exact, heuristic within 5% of exact optimum on N≤200, sub-second runtime.
- Effort: 1–2 days to implement and unit-test the heuristic; validated against exact DP on small pools.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: This is contest-economics/product IP, not engine prediction IP. It serves GSE's revenue/product lane: if/when GSE runs subscriber tournaments, pick'em pools, or leaderboard contests with payouts, the two-stage power-law + bucketing framework is the operator-side standard to implement. The improvement experiment (replace squared-distance-to-ideal with a player-behavior objective — discrete-choice/entry-elasticity model fit to contest fill rates, optimizing expected revenue/entries) connects to the DFS product program's contest-design side, not the engine.
- TRUST-SIGNAL: The power-law fit (avg p-value .237 across real tournaments) is a trust-relevant empirical regularity of DFS operator behavior — knowing what "natural" payout shapes players accept informs prize-pool messaging and contest copy, but the file gives no elasticity evidence, so this is UNCERTAIN for revenue optimization.

## Engine-actionable? (yes/no + one-line what)
Yes, but product-side not engine-side — bank the two-stage framework (binary-search α for the power-law ideal, then the four-stage bucketing heuristic with constraints Σ p_i = B, monotonicity, p_i ≥ E, nice numbers, r contiguous buckets) as GSE contest-design IP for future subscriber tournaments; 1–2 days to implement with exact-DP validation on small pools.
