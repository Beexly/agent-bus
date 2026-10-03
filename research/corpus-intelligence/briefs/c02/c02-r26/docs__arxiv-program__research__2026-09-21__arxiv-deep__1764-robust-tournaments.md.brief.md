# docs/arxiv-program/research/2026-09-21/arxiv-deep/1764-robust-tournaments.md
## What it is (1-2 sentences)
Ledger 1764 deep-reads Drugov & Ryvkin (2026, arXiv:2507.16348v1), a pure economic-theory paper characterizing the prize structure that maximizes minimum effort in a rank-order tournament when the designer knows nothing about the noise distribution except an upper bound on its Shannon entropy. Verdict REJECT: it is principal-side prize-design theory (for contest operators), with no player-side payout-exploitation method, no sports data, and nothing implementable for GSE's DFS operation.
## Key metrics/methods (formulas where given, else "not specified")
- Max-min: choose the prize vector maximizing the worst-case (over noise distributions with entropy ≤ H̄) minimum effort; solved via the dual, which induces an exponential noise distribution.
- Robust prize: p_k − p_{k+1} ∝ 1/k (asymptotically harmonic prize differentials); p_n = 0 (last place gets nothing); p_1 is a distinct top prize.
- Induced worst-case noise: exponential with rate e^{−H̄}.
- Gini coefficient of the prize profile → 1/2 as the number of participants n → ∞.
- Assumptions: rank-order tournament; effort is costly and unobservable; noise entropy bounded; designers maximize minimum effort (not total output or participation).
## Data sources named
No dataset — pure economic theory. Motivation cites tennis and poker prize inequality as empirical context, but uses no sports data.
## Findings (numbers and facts, not vibes)
- No numerical results; the harmonic schedule and Gini → 1/2 are asymptotic theoretical results; proofs only, no empirical validation. (OTHER)
- The harmonic-schedule benchmark idea (flag contests whose payouts deviate sharply from harmonic as potentially mispriced) was considered in the ledger and rejected: deviation from a robust-design benchmark does not imply player-exploitable edge, and the paper gives no method to convert deviation into a lineup decision. (OTHER)
- The ledger's GSE-overlap note: the corpus has DFS payout-structure work (1601.04203); this paper only tells designers how to make structures unexploitable — the opposite of the player-side exploitation lane. (OTHER)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No substantive intelligence findings for NFL/fantasy/props operation; the paper is designer-side and its objective (max-min effort) does not map to DFS player behavior or lineup construction (OTHER).
- The only candidate diagnostic (harmonic-payout benchmark for contest selection) was explicitly rejected in the ledger as too thin and non-exploitable (OTHER).
## Engine-actionable? (yes/no + one-line what)
No — principal-side prize-design theory with no player-side exploitation method; no implementable artifact for contest selection or lineup construction.
