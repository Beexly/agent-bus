# arxiv-program/research/2026-09-21/arxiv-deep/1144-genetic-algorithm-fantasy-football-trades.md
## What it is (1-2 sentences)
Full-ledger read of arXiv:2511.17535 (Parshall, Ali, Zimmerman 2025; JAIR Vol. 4 Art. 6): a genetic algorithm that generates multi-player fantasy football trades improving projected totals for both sides while secretly biasing the initiator's gains toward playoff weeks (15–17) via a total-conserving temporal reweighting. Verdict: ADAPT — architecture and playoff-weighted cost function directly adaptable to a GSE season-long trade analyzer; ESPN-projection dependency and single-league demo to be replaced.

## Key metrics/methods (formulas where given, else "not specified")
- Season score: S(R) = Σ_{w=w_c..17} L(R,w), L(R,w) = optimal weekly lineup score.
- Unweighted gains: g_a = S(T'_a) − S(T_a), g_b = S(T'_b) − S(T_b).
- Playoff weighting (W_p = {15,16,17}): g_aw = Σ_{w∈W_p} α_p·l_{a,w} + Σ_{w∉W_p} α_n·l_{a,w}, α_p = 1.2 default; α_n = (n_p + n_n − α_p·n_p)/n_n (chosen so g_aw = g_a when per-week gains constant — "deceptive fairness").
- Cost (minimize): c = −(α·g_aw + β·g_b − γ·|g_aw − g_b|), subject to g_a > 0, g_b > 0, |P_a|,|P_b| ≤ m = 3.
- GA: population 100, 5000 generations; hybrid elitism (top 15 overall + top 2 per trade partner); 6 mutation operators — keep-same (0.2), add/remove player, combine trades, exchange player, add-from-other-trade, spawn-new (0.16 each); duplicate pruning; cost-threshold filtering (0.3 probabilistic retention); truncation to 100.
- Five configs: Default (α=1, β=1, γ=0.25, playoff 1.2); High Playoff Bias (1.5); User Gain Emphasis (α=1.2); Opponent De-emphasis (β=0.8, γ=0.3); Fairness Emphasis (γ=0.4). Baselines: random trades, unweighted GA (playoff weight 1.0).

## Data sources named
- One 12-team ESPN fantasy league, Weeks 8–17 of the 2025 NFL season; player weekly projections p_{i,w} from ESPN (unofficial Python ESPN API; rate-limited, no SLA).
- Roster slots: 1 QB / 2 RB / 2 WR / 1 TE / 1 FLEX / 1 K / 1 D/ST; bye gaps filled with best available free agent's projection.
- Code: https://github.com/epparshall/Fantasy_Trade_Genetic_Optimizer.

## Findings (numbers and facts, not vibes)
- Default: top trade cost −30.55 → +14.32 pts initiator / +15.06 opponent (Gainwell, Vidal, Bowers for Drake Maye, Tyler Warren).
- High Playoff Bias: best cost −38.68, +20.01 initiator (Pollard, Vidal, Bowers for Maye, Dak Prescott, Warren).
- User Gain Emphasis: best cost −41.55, +17.95 vs +20.69 opponent (Vidal, Harvey, Pollard for Maye, Texans D/ST, Prescott).
- Opponent De-emphasis: best initiator gain +22.44 vs +10.82 (Gadsden II, Skattebo, Gainwell for Josh Downs, Ricky Pearsall, Saquon Barkley); avg g_a 10.51.
- Fairness Emphasis: best cost −38.52, +20.01 vs +18.94 (Vidal, Bowers, Pollard for Maye, Njoku, Texans D/ST).
- Across runs: g_a ∈ [0.01, 25.35], g_b ∈ [0.01, 29.38]; multi-player trades dominated single-player swaps on cost efficiency; QBs (Maye, Prescott), RBs (Pollard, Barkley), D/ST (Texans) were frequent leverage points.
- No out-of-sample validation; projections are both optimizer input and evaluation metric (never checked against realized scores); single league, single season, author as initiator; no uncertainty modeling; opponent-acceptance model naive (g_b > 0 ⇒ accept).
- Acceptance gate in file: backtest projected-vs-realized trade gains at r ≥ 0.5, runtime <10s, ≥70% of recommendations keep g_a > 0 under projection noise.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: season-long fantasy product gap — a GSE trade analyzer with playoff-bias and fairness dial; complements ledger 1141 (rotisserie win-probability roster objective).
- OTHER (methodological): total-conserving temporal reweighting ("deceptive fairness") as a general design pattern; learned record-aware temporal weights via a "playoff leverage index" proposed as improvement experiment.
- QB-BEHAVIOR (weak): QBs (Drake Maye, Dak Prescott) were frequent trade leverage points — INFERENCE only, artifact of one league's rosters.

## Engine-actionable? (yes/no + one-line what)
Yes — port the GA trade-search with playoff-weighted cost function to a GSE season-long Trade Analyzer using GSE's own projections, adding Monte Carlo over projection uncertainty and a record-aware playoff leverage index, gated on r ≥ 0.5 backtest correlation.
