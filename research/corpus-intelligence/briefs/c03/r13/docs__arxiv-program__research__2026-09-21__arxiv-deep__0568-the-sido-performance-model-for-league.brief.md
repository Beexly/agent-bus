# docs/arxiv-program/research/2026-09-21/arxiv-deep/0568-the-sido-performance-model-for-league.md
## What it is (1-2 sentences)
A research-ledger deep read of arXiv:2403.04873 — the SIDO hierarchical-Bayesian player-attribution framework for League of Legends, which decomposes individual skill into own, ally, and enemy effects on resource statistics via mixed-effects regressions, validated with Franks et al. (2016) discrimination/independence/stability meta-metrics. Verdict: ADAPT — port the own/ally/enemy attribution algebra and the three meta-metrics to NFL player evaluation.
## Key metrics/methods (formulas where given, else "not specified")
- Player model (own): gold_pg = β_0 + b_c + b_p + ε_pg (Eq. 1); b_p (player random effect) is the skill metric. Damage model adds damage-taken covariate x_pg (Eq. 2).
- Ally model: Δ = β_0 + b_c + b_p + ε_g (Eq. 3), where Δ = Σ_a(Y_ag − E[Y_ag]) is the sum of allies' residualized production (AXE approximation for the re-fit); b_p = player's collective impact on all allies.
- Enemy model: same on enemies; metric = −b_p (reducing enemy output is positive skill).
- Priors: β_0∼N(0,1); b_c∼t_3(0,φ), b_p∼t_3(0,τ); φ,τ∼HalfC(0.5); σ∼HalfC(0.3).
- Champion proficiency heuristic: δ_pc = (1/n_pc)Σ(Y_pg − β̂_0 + b̂_c) (Eq. 4).
- Meta-metrics: discrimination (fraction of between-player variance not due to sampling noise), independence (variance fraction uncorrelated with other metrics, Gaussian copula), stability (concordance index of pairwise orderings across patch windows).
- Conservative attribution rule: overlap between player and ally effects is attributed to the ally, not the player.
## Data sources named
Solo-queue games from the Riot API (developer.riotgames.com); top-1000 accounts (Grandmaster/Challenger) on NA/KR/EUW, patches 13.14–13.18 (July 18–Sep 27, 2023); filters ≥50 games/role/account, champions played by ≥30 accounts; pro labels = players on top-level NA/EU/KR/CN pro teams. Role-stratified (top/jungle/mid/bot/support).
## Findings (numbers and facts, not vibes)
- SIDO separates pros from non-pros across ALL roles (large positive differences, most FDR-significant in 0–7 and 7–15 min); basic-average (BA) shows smaller, less consistent differences and fails for jungle/support; Plus-Minus shows small inconsistent differences, often scoring pros below average — insufficient evidence it differentiates at all. 15–25 min differences weaker.
- Discrimination (gold, Top EUW 0–7): player SIDO 0.77/BA 0.87; ally SIDO 0.30/Plus-Minus 0.00; enemy SIDO 0.46/Plus-Minus 0.01. Analogous damage tables.
- Independence: Plus-Minus ~0.98–1.00, BA ~0.06–0.09 (support ~0.18–0.22), SIDO ~0.48–0.68.
- Stability (concordance): gold player SIDO 0.53–0.75 (BA 0.62–0.82); ally/enemy SIDO 0.47–0.65; damage player 0.60–0.76, ally/enemy 0.50–0.65.
- SIDO player model has lower out-of-sample RMSE than BA on held-out patches 13.10/13.11 despite lower discrimination — shrinkage trades discrimination for accuracy.
- Gold differential predicts winners: 69% (0–7 min), 79% (7–15), 83% (15–25); damage: 63%, 73%, 72%.
- Role insights: support pros differentiate via enemy damage prevented; jungle pros' biggest edge is enemy gold prevented in 7–15 min (LCK 0.17, LEC 0.12); bot-lane pro edge ~2:1 technical-vs-teamplay, jungle ~1:2, others ~1:1.
- Pro-account linking counts: EUW — Top 18/15, Jungle 22/21, Mid 16/15, Bot 25/22, Support 12/10 (accounts/players); KR — 13/13, 19/19, 18/18, 17/17, 16/15; NA — 10/10, 4/4, 5/5, 9/8, 12/9.
- Authors warn low ally/enemy discrimination means these should be 5-category buckets, not continuous scores.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hierarchical own/ally/enemy attribution algebra for skill positions (OTHER — player-evaluation framework).
- Franks discrimination/independence/stability meta-metrics as a metric-QC gate (TRUST-SIGNAL).
- Honesty rule: low-discrimination components get categorical buckets, not continuous rankings (TRUST-SIGNAL).
- QB→specific-WR per-pair random interaction chemistry extension, proposed as a DFS "stack" signal (QB-BEHAVIOR).
- Jungle/support pro edges via enemy-effect (prevention) metrics — analogue: pass-rusher effect on opposing QB EPA, QB effect on teammates' EPA (SCHEME).
## Engine-actionable? (yes/no + one-line what)
Yes — implement own/ally/enemy hierarchical-Bayesian attribution for QBs (effect on teammates' EPA) and edge rushers (effect on opponent dropback EPA) on nflverse play-by-play, gating continuous publication behind discrimination ≥0.5 / stability ≥0.6 and bucketing weaker components.
