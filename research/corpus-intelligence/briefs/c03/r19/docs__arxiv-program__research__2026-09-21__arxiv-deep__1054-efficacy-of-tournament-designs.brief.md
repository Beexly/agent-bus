# docs/arxiv-program/research/2026-09-21/arxiv-deep/1054-efficacy-of-tournament-designs.md
## What it is (1-2 sentences)
Deep read of arXiv:2103.06023v4 (Sziklai, Biró, Csató) — a one-million-replications-per-cell simulation study comparing tournament formats (Swiss, knockout, round-robin) on how well the final ranking recovers the true strength ranking (inversion counts), under six win-probability models.
## Key metrics/methods (formulas where given, else "not specified")
- Efficacy metric: inversion count between true ranking and tournament-produced ranking; also the probability one design beats another on inversions.
- One million replications per (design, model) cell; designs: knockout, round-robin, Swiss (various rounds), with/without seeding.
- Six win-probability models: parametric skill-gap levels skill=1, 5, 10 (true strengths s_1>s_2>…>s_n) plus three empirical calibrations (chess, soccer, tennis); full comparison matrices in appendices.
## Data sources named
No empirical match data — pure simulation; only pre-calibrated empirical probability models (chess, soccer, tennis).
## Findings (numbers and facts, not vibes)
- Five-round Swiss beats knockout on inversion count with probability: 0.6350 (skill=1), 0.9044 (skill=5), 0.9379 (skill=10); under empirical models: 0.5598 (chess), 0.6676 (soccer), 0.7095 (tennis).
- Realistic seeding improves efficacy by at most ~3% — far less than intuition suggests.
- Swiss-system tournaments generally outperform equal-match-count alternatives at recovering the full ranking.
- Limitations: no real tournament data; six models may not span real upset dynamics (no favorite-longshot bias); inversion count weights all rank errors equally while GSE cares more about top ranks (winner, qualification cutoffs).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Format choice dominates seeding choice for ranking fidelity — do not overweight draw/seed news in futures pricing (OTHER)
- Seeding worth ≤3% = a citable prior / regularization target for futures models (OTHER)
- Format-faithful bracket simulation (not generic Monte Carlo) for tournament outright/qualification probabilities — reusable harness (OTHER)
- Swiss-format formats (new UCL, chess, esports) give GSE a head start on formats competitors treat as black boxes (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — Port the design taxonomy (knockout/Swiss/round-robin generators + seeding rules) into the simulation module and reprice a recent tournament outright market format-faithful vs naive; numeric gate: format-faithful must differ materially on at least one team's price and backtest better against the realized outcome distribution.
