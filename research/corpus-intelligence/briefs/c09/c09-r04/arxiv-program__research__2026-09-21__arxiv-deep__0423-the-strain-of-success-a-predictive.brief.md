# arxiv-program/research/2026-09-21/arxiv-deep/0423-the-strain-of-success-a-predictive.md
## What it is (1-2 sentences)
An injury-risk → squad-selection → expected-points simulation loop for soccer (arXiv:2402.04898v1, Everett et al. 2024): XGBoost injury classifier from workload features, Maher-style Poisson match model on summed VAEP team strength, and MCTS squad optimization to reduce injuries without losing expected points; Motif verdict ADAPT for NFL load management with survival modeling and strict temporal validation.
## Key metrics/methods (formulas where given, else "not specified")
- Expected points: V(C,t) = 3·Pr(win|C) + Pr(draw|C)
- MDP Bellman: V(s) = max_a (R(s,a) + γ Σ_{s'} Pr(s'|s,a) V(s')); MCTS with UCB1 + progressive widening; rollouts simulate first three transitions with injuries, then assume none; injury length sampled from Gaussian
- Injury model: XGBoost classifier, per-player injury risk for upcoming match from workload features
- Match model: team strength = sum of selected players' VAEP; Poisson scorelines
## Data sources named
English Premier League 2017/18–2018/19, 760 games; StatsBomb event data (workload features); Transfermarkt injury records (reporting inconsistency flagged); VAEP player values; code at https://github.com/Sentient-Sports/Strain-of-Success
## Findings (numbers and facts, not vibes)
- Injury model log loss: 0.1676 ± 0.0005 vs heuristic baseline 0.1700 ± 0.0002; injury base rate ~4%
- Match model: player-level 0.915 ± 0.020; team-level 0.910 ± 0.018
- Season simulation: expected points difference MCTS vs greedy strongest-eleven −0.1% ± 0.3 (null result on points, statistically indistinguishable from zero)
- Squad injuries reduced ~5%; top-11 player injuries reduced ~13%; expected-points variance reduced 17%
- Predicted vs actual team injuries: mean percentage difference ~14%; Pearson r = 0.77, p < 0.01
- Financial simulation: 11% lower injured-player wage waste, ~£700,000 per club (Man United £1.88m, Man City £1.80m) — reader notes this is simulation output stacked on model assumptions, not measured saving
- Reader's limitations: random shuffled CV for the injury model (leaks future info, injuries are temporally clustered); Gaussian injury duration misspecified (non-negative, right-skewed); MCTS rollout truncation biases risk estimates; Transfermarkt data quality weak; 760 games / 2 seasons small at 4% base rate; NFL transfer needs different features (17-game season, hard cap, practice-vs-game load split)
- GSE overlap: new capability — fills named map gap 9 (player-level causal/predictive injury-effect estimation is thin); no injury-prediction content exists in GSE corpus
- Reader's improvement: competing-risks survival model separating load-driven (soft-tissue) from load-independent (contact) injuries, since the optimizer can only act on the former
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: Load-management / rest-vs-play decisions (veterans in low-leverage weeks, short-week Thursdays) as an MDP over playoff-seeding value
- OTHER: Injury-risk modeling — per-player game-miss probability from trailing workload (snaps, touches, rest days, travel, surface, age, prior injuries)
- OTHER: DFS signals — rest recommendations as fade/buy signals
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL injury-risk model (nflverse snaps + injury reports, chronological validation) feeding a weekly load-management/rest recommendation, gated on beating a snap-count heuristic by ≥0.005 Brier on a chronological holdout with ≥2× base rate in the top risk decile
