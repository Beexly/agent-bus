# docs/arxiv-program/research/2026-09-21/arxiv-deep/1055-paradox-of-tournament-seeding.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2011.11277 (László Csató): proves that under UEFA-style coefficient-based seeding, a team can be punished with a worse seed for performing better in qualification, and proves the max-of-lower-ranks coefficient remedy restores monotonicity. Verdict ADAPT: the paper's real GSE value is as a template for incentive-compatibility auditing of any competition format GSE prices or writes about.
## Key metrics/methods (formulas where given, else "not specified")
- Paradox construction: explicit example where team A outranks team B in qualification but c_A < c_B puts A in a worse pot
- Remedy: adjusted coefficient c̃_i = max{c_j : rank_j ≥ rank_i}; proved monotone in qualification rank (pot assignment can never worsen with better qualification)
- Incentive-compatibility condition: no team can improve its draw by worsening its qualification result
- No empirical estimation — pure theory; real-world frequency of the paradox unquantified
## Data sources named
Theoretical paper; illustrative examples from UEFA competition seeding only. No dataset, no code.
## Findings (numbers and facts, not vibes)
Proved: a higher-ranked qualifier can receive a worse seed (and harder draw) than a lower-ranked qualifier under coefficient seeding — violates incentive compatibility. Proved: the max-coefficient remedy restores monotonicity. No numeric headline results (theoretical). Limitations: theoretical illustration, not an empirical prevalence study; the max-coefficient remedy is one of several possible fixes and UEFA has not adopted it; scope is UEFA coefficient seeding only. Mechanism-design auditing of competition formats is absent from the corpus (the gap list's contest-theory item covers DFS equilibria, not seeding) — novel coverage.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: incentive-compatibility audit of competition formats — property-test seeding/draw rules for monotonicity before simulating or pricing draw-dependent markets (group winners, qualification, outrights)
- OTHER: draw-simulation correctness — simulators must implement actual pot-allocation rules including coefficient quirks, not idealized seeding
- OTHER: content edge — format-design paradoxes as high-engagement explainable content for X/YouTube
## Engine-actionable? (yes/no + one-line what)
yes — Encode each priced competition's seeding/draw rules as functions and property-test monotonicity by brute force over result scenarios (apply to UCL, World Cup qualifying, one more); standing pre-pricing check if any realizable violation is found.
