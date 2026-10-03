# arxiv-program/research/2026-09-21/arxiv-deep/1060-entropy-multi-bracket-portfolio-strategies.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:2308.14339v3 (Brill, Wyner & Barnett), "Entropy-Based Strategies for Multi-Bracket Pools" — rigorous multi-entry portfolio optimization theory for bracket pools/DFS: submit an entropy-controlled portfolio trading off expected score against outcome-space coverage, not N copies of the best single entry. The ledger adapts it as a portfolio layer on GSE's DFS lineup generator.
## Key metrics/methods (formulas where given, else "not specified")
- Objectives over a portfolio of K entries: E[max_k score_k], P(win), E[profit].
- Entropy-controlled strategy families: parametrized distributions over brackets with tunable entropy H; low-dimensional search over the entropy parameter rather than the full portfolio space.
- Central rule: optimal portfolio entropy increases in (number of entries K, opponent-field entropy).
- Validation: synthetic bitstring and Pick Six environments; March Madness with double Monte Carlo B1=250 outer / B2=100 inner replications on 2021 FiveThirtyEight Elo-implied probabilities. Authors' code: https://github.com/snoopryan123/entropy_ncaa (stated in ledger).
## Data sources named
2021 FiveThirtyEight Elo-implied March Madness win probabilities; synthetic bitstring and Pick Six environments. Public code at https://github.com/snoopryan123/entropy_ncaa.
## Findings (numbers and facts, not vibes)
- N best single entries by EV is suboptimal; entropy-controlled low-dimensional strategy families capture the expected-score/coverage tradeoff.
- The paper assumes true outcome probabilities and opponent strategy are known — both must be estimated in practice (GSE: calibrated GSE probabilities + opponent entropy from historical ownership).
- The ledger notes the map's gap list explicitly flags DFS-specific optimization literature as absent — this paper fills exactly that gap; the repo has deep DFS practice work but no academic contest-theory foundation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (DFS): the paper GSE's DFS lane was missing — replace "generate top-N lineups by EV" with "generate the max-expected-maximum portfolio at entropy target H*", setting H* from contest parameters (field size, payout structure, estimated opponent entropy); salary-cap-constrained entropy families need re-derivation for NFL DFS.
- OTHER (bracket product): the March Madness machinery ports directly to any GSE bracket-pool offering.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the entropy-targeted portfolio-selection layer on top of GSE's existing lineup generator with opponent entropy estimated from historical ownership; numeric gate: entropy-targeted portfolios must show higher realized maximum score (or simulated win rate vs historical fields) than the top-N-by-EV baseline at equal entry counts over a season of DK/NFL slates.
