# arxiv-program/research/2026-09-21/arxiv-deep/1546-predicting-cricket-outcomes-using-bayesian-priors.md
## What it is (1-2 sentences)
Predicting Cricket Outcomes using Bayesian Priors (arXiv:2203.10706, Quazi et al. 2022; replaces rejected 1539). Models each player's score vs a specific opponent as a Gamma distribution (moment-matching + 5% tail constraint), aggregates via stratified team sampling and 10,000 Monte Carlo replications into team win probabilities; validated by predicting IPL 2020 entirely from 2008–2019 data.
## Key metrics/methods (formulas where given, else "not specified")
- Runs ~ Gamma(α,β): α = Average/β; β chosen from 50,000 candidates in [0.01,5000] such that P(X > Highest score) ≤ 0.05. Win prob = fraction of 10,000 Monte Carlo replications won.
- IPL 2020 from 2008–2019 data: first three table positions 100% correct, 4 of top 5 correct; title Mumbai Indians 73%, Delhi Capitals 27% (actual: Mumbai beat Delhi). CWC 2023 prospective: India 24% title, South Africa 21%, Australia 8%, Pakistan 47% conditional on semifinal. No Brier/log-loss reported; no formal baseline (no Elo/odds comparison).
## Data sources named
Web-scraped espncricinfo: 11,000+ ODI innings (Jan 1999–Jun 2020), 195 players; IPL 2008–2019 from cricimetric.com, 130+ players, 8 teams. Data: github.com/mquazi/cricket_2020.
## Findings (numbers and facts, not vibes)
- Genuine out-of-sample (n=1 season) validation is the paper's real strength; India 89.1% simulated vs England vs 59.7% historical since 1999.
- File's adversarial notes: no posterior inference despite the title (parameters from moment/tail matching); only batting modeled (no bowling); independence across players ignores partnerships; 5% tail rule and β grid arbitrary; CWC 2023 predictions never scored.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: opponent-specific player fantasy-point distributions (WR yards vs coverage-shell-specific CB matchup) aggregated into lineup-score distributions is the NFL translation.
- OTHER: DFS GPP simulation methodology — lineup construction under salary-cap/positional constraints via stratified sampling + 10,000 Monte Carlo replications into win probability vs field.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the opponent-specific player-distribution + Monte Carlo aggregation pattern (NOT the literal estimation): hierarchical Bayesian gamma with partial pooling across opponents; ADOPT only if it beats pooled gamma on 2025 held-out log-likelihood by ≥3%.
