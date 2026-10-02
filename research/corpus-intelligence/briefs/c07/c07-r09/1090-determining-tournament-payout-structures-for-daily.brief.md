# arxiv-program/research/2026-09-21/arxiv-deep/1090-determining-tournament-payout-structures-for-daily.md
## What it is (1-2 sentences)
Full read of arXiv:1601.04203v2 (Jain & Saha, 2016): a two-stage method for DFS tournament payout design — (1) fit an "ideal" power-law payout curve (validated against real tournaments), then (2) convert it into a legal operator structure (fixed pool, monotone decreasing, minimum payout, "nice" round amounts, contiguous equal-payout buckets) via exact DP/ILP or a production heuristic deployed at Yahoo. Verdict in file: **ADAPT** — sits in the corpus gap for DFS contest-theory; GSE-relevant for product/contest design, not engine prediction.

## Key metrics/methods (formulas where given, else "not specified")
- Ideal payout: π_i = E + (P1 − E)/i^α, where E = entry fee (minimum payout), P1 = first prize. Exponent α chosen so ideal payouts exactly exhaust the budget: B − N·E = Σ_{i=1..N} (P1 − E)/i^α (B = total prize pool, N = paid places); RHS strictly decreasing in α → binary search finds α.
- Bucketing: partition N places into r contiguous buckets, same "nice" (round) payout per bucket; payouts non-increasing, each ≥ E, total = B. Objective: minimize Σ_i (p_i − π_i)² (squared Euclidean distance to ideal).
- Algorithms: (a) exact DP over bucket boundaries and payout values — O(rN³B log²B) time, O(rN²B logB) space (impractical at scale); (b) integer linear program; (c) four-stage production heuristic used at Yahoo (greedy bucket formation + local adjustments + extra-winner redistribution).
- Assumptions: power law is the correct "natural" shape; entry fee E is a sensible minimum payout; nice-number payouts preferred by players; operator fixes N and B in advance.

## Data sources named
Real tournament payout data scraped/analyzed by authors (operator payout tables, not public); experimental contest set includes Yahoo contests of various sizes and one DraftKings contest with 125,000 winners. No player-performance data.

## Findings (numbers and facts, not vibes)
- Power-law fit across Figure 3 tournaments: average p-value .237 (fit not rejected) — empirical validation of the power-law ideal.
- Heuristic runtime: under 1.5 seconds on the hardest contests tested; on the DraftKings 125,000-winner contest: heuristic cost 78.7k, runtime 1,700 ms, zero extra winners (no places added beyond N).
- Experimental hardware: 2.6 GHz Intel Core i7, 16 GB RAM.
- Limitations: power-law validated on small set of observed tournaments; nice-number set hand-chosen; squared-distance objective is a modeling choice, not derived from player-behavior data (no A/B or elasticity evidence the shape maximizes entries/revenue); optimizes a fixed contest, not the operator's contest portfolio; nothing about player skill distributions or payout-driven entry behavior.
- Verdict: **ADAPT** (as contest-design IP, not engine IP); acceptance gate: reimplementation reproduces qualitative claims (binary-search power-law ideal; heuristic within 5% of exact optimum on small contests; sub-second runtime at N=100k scale).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Contest/product design — use the two-stage framework (power-law ideal via binary search on α + bucketing heuristic) for GSE-run contests, promotions, payout-structured leaderboards (weekly DFS packet contests, pick'em pools, subscriber tournaments); 1–2 days to implement and unit-test.
- OTHER: improvement experiment in file: replace squared-distance objective with a player-behavior objective — model entry volume as a function of payout shape (top-heaviness vs flatness) via discrete-choice/elasticity fit to historical contest fill rates, then optimize bucketed structure for expected revenue/entries rather than fidelity to a power law.

## Engine-actionable? (yes/no + one-line what)
Yes — bank as contest-design IP: reimplement the power-law-ideal + bucketing heuristic for any GSE-run payout-structured contest or leaderboard (no engine prediction use).
