# arxiv-program/research/2026-09-21/arxiv-deep/1481-dynamic-quantification-of-player-value-for.md
## What it is (1-2 sentences)
A stat.ME paper (Rosenof, 2024) on H-scoring: a dynamic draft algorithm for head-to-head fantasy basketball category leagues that re-optimizes strategy parameters (category weights, flex shares) via gradient descent for every candidate pick, beating static G-score ranking lists in simulation — with category punting emerging as learned behavior. Ledger verdict: ADAPT to NFL DFS lineup construction.
## Key metrics/methods (formulas where given, else "not specified")
- X(j): category-total differential distribution given strategy params j; W(j): win probs = CDF at 0; V(j): format objective.
- Team differential: X(j) = N(Xs + Xp + Xδ − XOm, 2N + (N−K−1)Xσ²); future-pick term Xδ(j) from multivariate-normal model (γ=0.25, ω=0.7 fit empirically).
- Category win probs: wc = ½[1 + erf(μ/(σ√2))].
- Objectives: Each Category V = Σc wc; Most Categories V = Σ over 256 winning scenarios Πc[f(s,c)wc + (1−f)(1−wc)] + ½·ties; tipping-point-weighted gradients T(j,c₁).
- Positional structure via modified Jonker-Volgenant assignment (scikit-learn); Adam optimization of j with jC re-normalized to sum 1.
- Auction extension: cash-equivalence via replacement-player + cash-level sweep; pruned scenario tree = 634 multiplications, a 69% reduction.
## Data sources named
- Simulated NBA fantasy seasons 2004-05 through 2023-24 (20 seasons); weekly performances sampled from actual historical weeks (≥10 weeks required, injured weeks excluded); 12 teams × 13 players; 20-week seasons; 1000 simulated seasons per draft seat; positional eligibility from Yahoo fantasy basketball. No code stated.
## Findings (numbers and facts, not vibes)
- Each Category: H0 mean season-win rate 21.8% vs 8.3% random-chance baseline (seat means 15.6%–31.7%); worst cell 3.2% (2013-14, pick 11).
- Most Categories: 37.7% mean (seat means 32.9%–46.1%).
- Emergent soft-punting: ~20% of category weights below 0.95 (≈1–2 punted categories at ~75% weight); rarely pushes any category to 100%.
- Calibration: expected vs actual category win rates match closely above ~10%; below, over-predicts assists/3s/blocks, under-predicts turnovers/FT%.
- Turnovers NOT down-weighted by default (gradient analysis shows turnovers ≈ as important as other counting stats) — contrary to analyst folk wisdom.
- ω/γ empirical fits: slopes 0.37 (R² 47%) and 0.87 (R² 46%) vs assumed 0.25/0.7.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (DFS: dynamic lineup optimizer — map categories → stat differentials vs field, draft picks → lineup slots, salary cap replaces positional structure via knapsack/ILP)
- OTHER (game theory: soft-punting / contrarian differentiation should emerge from tipping-point gradients rather than being hand-coded — test whether the optimizer learns to fade chalk)
- OTHER (robustness: replace equal-variance assumption with player-specific engine variances; Gaussian copula for week-to-week stat correlations; upside-quantile GPP objective)
## Engine-actionable? (yes/no + one-line what)
yes — adapt H-scoring to NFL DFS (`gse_hscore.py`): per-candidate gradient descent on V = P(lineup cashes)/expected GPP payout against ownership-weighted field; adopt if backtest shows ≥2× cash-rate baseline improvement over static projection rankings.
