# arxiv-program/research/2026-09-21/arxiv-deep/0917-tenisrank-parametric-pagerank-tennis.md
## What it is (1-2 sentences)
Deep read of Aronson (2015 thesis, arXiv:1711.11122v1): "TenisRank" — a parametric edge-weighted PageRank for tennis (edge weight = aging × surface × tournament/round importance) tuned by greedy coordinate search, plus a logistic rating-difference → win-probability map. Verdict in file: ADAPT — the parametric edge weighting and rating→probability logistic both port to NFL power ratings and moneyline calibration.
## Key metrics/methods (formulas where given, else "not specified")
- W_edge = W_aging × W_surface × W_instance (multiplicative separability assumed); aging = exponential decay in years-back (3–5 yr windows); surface = 1 if match surface = target surface else tuned constant; instance = ATP-style round/tournament importance with tuned λ.
- Directed multigraph loser→winner; PageRank via scipy; P(victory) = logistic fit of hit-rate on ranking difference (a=45.321); decision-tree variants by surface × tournament type.
## Data sources named
tennis-data.co.uk: 923 tournaments 2000–2013, ~40,000 matches (surface, date, tournament type, round, set scores, pre-match ATP ranks; bookmaker odds collected but never used in evaluation). No public code; thesis with appendix algorithms.
## Findings (numbers and facts, not vibes)
- ATP baseline 2005–2013: 66.849%; plain PageRank beat ATP at US Open 2013 (72.72% vs 70.25%).
- Aging alone (3yr, λ=−5): +1.3pp vs ATP, +0.8pp vs PageRank; surface alone (0.5): +1.7pp vs ATP, +1pp vs PageRank.
- Combined (4yr, aging −5, surface 0.3, instance λ=1.7): ~70% hits, +3pp vs ATP, +2.2pp vs PageRank; ANOVA: ATP vs PageRank p=0.14 (n.s.), ATP vs parametric p=0.000024, PageRank vs parametric p=0.00079.
- Wins on every surface (grass best, ~+2pp vs ATP), top-10 matchups (+3pp), all 5 tournament types (Grand Slams ~74%).
- Limitations: bachelor's thesis; greedy search (local optimum); bookmaker odds never used — the market-efficiency test was skipped; new-player handling is a manual hack.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: NFL parametric PageRank — 32 team nodes, edge loser→winner, W_edge = W_recency × W_situation × W_importance with NFL analogs (exponential weekly decay; dome/outdoor + turf/grass match/mismatch — real NFL splits; playoff vs regular season, rest differential); P(victory) logistic on rating difference as a moneyline-probability converter, with decision-tree variants by dome/outdoor × playoff.
## Engine-actionable? (yes/no + one-line what)
yes — walk-forward weekly parametric PageRank on NFL 2015–2025 (tune 2015–2019, test 2020–2025); adopt if it beats Elo by ≥1pp SU accuracy or ≥2% log-loss (paired bootstrap p<0.05), or its P(win) mapping is better calibrated (lower ECE) than the moneyline-implied baseline.
