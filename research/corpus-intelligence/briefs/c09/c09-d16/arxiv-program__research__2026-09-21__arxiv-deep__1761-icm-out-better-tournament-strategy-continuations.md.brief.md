# arxiv-program/research/2026-09-21/arxiv-deep/1761-icm-out-better-tournament-strategy-continuations.md
## What it is (1-2 sentences)
Deep read of arXiv:2608.09586v1 (Li & Huang, 2026), which introduces Strategic-Continuation Optimization (SCO) — pricing tournament decisions by backward-induction continuation values instead of the Independent Chip Model (ICM) — and shows SCO earns $214.33 more prize equity per hand in a three-player jam/fold poker tournament ($1M prize pool).
## Key metrics/methods (formulas where given, else "not specified")
- ICM equity: E_i = Σ_k P_i(finish k)·prize_k (Malmuth-Harville stack-share recursion)
- SCO value: V(s,a) = Σ_{s'} P(s'|s,a)·C(s'), C(s') = expected prize equity from state s' under optimal subsequent play (backward induction)
- Comparison: mean absolute value error of ICM vs SCO continuation values = $9,036 across 2,838 state–seats (on $1M pool)
- Policy delta: SCO shifts jam frequency by 14.08% average (32.42% at the button) vs ICM-priced ranges
- Head-to-head: SCO favored in 2,433 of 2,838 matched decision units (85.7%); fully enumerated 946 states × 3 seats, opponents = solver policies + LLMs + threshold players
## Data sources named
None — computational game-theory paper, no historical dataset. "Data" = exhaustive enumeration of 946 tournament states; opponent models built by solvers and two LLMs.
## Findings (numbers and facts, not vibes)
- ICM mean absolute value error vs SCO continuation values: $9,036 per state–seat on a $1M pool
- SCO jam-frequency shift: 14.08% average, 32.42% at the button
- SCO prize-equity gain: +$214.33 per hand on average
- SCO favored in 2,433 of 2,838 matched decision units (85.7%)
- Ordering robust to LLM and threshold-player opponents
- ICM flaws diagnosed: reads only stack sizes; omits action order, blind obligations, seat rotation, elimination pressure of big stack on short stacks
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Tournament-equity architecture — the template for converting a DFS lineup's score distribution into expected prize given a payout ladder; directly informs GPP construction optimization
## Engine-actionable? (yes/no + one-line what)
yes — Build a DFS continuation-value pricer: expected prize = Σ_s P(lineup scores s)·payout(rank(s vs field)); replace "max expected score" with "max expected prize" in GPP construction via SCO-style local search (the ledger's §11 gives a 1-week spec: pricer ~150 lines + audit mirroring the paper's $214/hand gap test)
