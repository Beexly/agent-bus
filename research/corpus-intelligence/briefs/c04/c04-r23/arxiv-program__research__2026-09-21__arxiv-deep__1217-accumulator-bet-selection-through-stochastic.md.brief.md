# docs/arxiv-program/research/2026-09-21/arxiv-deep/1217-accumulator-bet-selection-through-stochastic.md
## What it is (1-2 sentences)
Deep-read ledger of Dehouche (2020), arXiv:2004.08607, which uses Stochastic Diffusion Search (SDS) to optimize soccer accumulator (parlay) bet selection on one season of European soccer data and compares against single bets. Verdict: ADAPT strictly as a negative-control research framework — reimplement the accumulator-vs-singles comparison on GSE's calibrated probabilities to produce honest evidence for GSE's public anti-parlay stance, never to promote parlays.
## Key metrics/methods (formulas where given, else "not specified")
Bi-objective optimization: Objective 1 maximize Π o_i (product of decimal odds over selected legs); Objective 2 maximize Π p_i (product of estimated win probabilities); scalarized with minimum-probability constraint Π p_i ≥ p_min = 25%. Solved with Stochastic Diffusion Search. Intra-bookmaker dominance pruning reduces decision variables by 64% on average; inter-bookmaker pruning by 19%. SDS hyperparameters tuned on same season: minexp = 2, maxtime = 600 seconds. Two variants: single-bookmaker and multi-bookmaker (best-odds) with inter-bookmaker pruning. Baseline: single bets. Stakes appear to be Kelly-style fractions of bankroll.
## Data sources named
2015–2016 season, four leagues (LaLiga, Premier League, Serie A, Bundesliga). Five bookmakers: Bet365, Betway, Gamebookers, Interwetten, Ladbrokes. Match results and odds from football-data.co.uk (public). Win probabilities estimated by the Betegy service (external, proprietary methodology).
## Findings (numbers and facts, not vibes)
- Single-bet baseline: average odds 2.87, average probability 36%, average stake 27.3%, total gains 30.1%.
- Accumulator: average odds 83.1, average probability 4.7%, average stake 3.02%, total gains 37.6%.
- Inter-bookmaker pruning variant: average odds 90.2, average probability 4.2%, average stake 4.1%, total gains 12.9%.
- Only four winning accumulators produced the reported 37.6% total gains — the headline rests on 4 wins at ~4.7% hit rate (extreme variance, per the reader's interpretation).
- Limitations flagged: SDS hyperparameters tuned on the test season (data snooping); one season only, no held-out validation; Betegy probabilities an unexamined black box; leg independence false for same-weekend soccer; no statistical significance testing; stake sizing under-described.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Accumulator "outperformance" is driven by extreme variance (4 wins at ~4.7% hit rate), supporting GSE's public stance against "whalelays" — citable negative-control evidence for steering followers to singles [OTHER]
- Proposed replication on GSE's calibrated NFL probabilities with proper held-out seasons to produce honest "we optimized parlays as hard as possible and singles still won risk-adjusted" content [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the accumulator-vs-singles comparison as an internal research notebook (not a product) using GSE calibrated NFL probabilities, proper tune/test season splits, and full calibration analysis, to generate risk-adjusted ROI/Sharpe/max-drawdown evidence backing the singles-first editorial stance.
