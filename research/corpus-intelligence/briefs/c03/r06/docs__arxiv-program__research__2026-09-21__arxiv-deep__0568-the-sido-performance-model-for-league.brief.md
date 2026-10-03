# docs/arxiv-program/research/2026-09-21/arxiv-deep/0568-the-sido-performance-model-for-league.md

## What it is (1-2 sentences)
Deep-read ledger of arXiv:2403.04873 (Zhang & Naidu 2024) introducing SIDO, a hierarchical-Bayesian player-attribution framework for League of Legends that decomposes a player's gold/damage impact into own, ally, and enemy effects, validated with the discrimination/independence/stability metric-quality discipline (Franks et al. 2016). Verdict: ADAPT — the attribution algebra is sport-agnostic; port the own/ally/enemy structure to NFL player evaluation and adopt the three meta-metrics as GSE's metric-QC standard.

## Key metrics/methods (formulas where given, else "not specified")
- Player model (Eq. 1): gold_pg = β_0 + b_c + b_p + ε_pg (b_p = skill metric). Damage model (Eq. 2): dmg_pg = β_0 + β_dmgt x_pg + b_c + b_p + ε_pg (x_pg = damage taken, controlling aggression).
- Ally models (Eq. 3): residualize each ally via re-fit player models (AXE approximation), sum residuals Δ = Σ_a(Y_ag − E[Y_ag]), then Δ = β_0 + b_c + b_p + ε_g; enemy models: same on enemies, metric = −b_p.
- Priors: β_0∼N(0,1); b_c∼t_3(0,φ), b_p∼t_3(0,τ); φ,τ∼HalfC(0.5); σ∼HalfC(0.3) (t_3 for outlier-robust random effects, half-Cauchy scales).
- Champion proficiency heuristic (Eq. 4): δ_pc = (1/n_pc)Σ_{g∈G_pc}(Y_pg − β̂_0 + b̂_c), centered/scaled.
- Meta-metrics (Franks et al. 2016): discrimination (fraction of between-player variance not due to sampling noise), independence (fraction of variance uncorrelated with other metrics, via Gaussian copula), stability (concordance index of pairwise orderings across time windows).

## Data sources named
- Riot API solo-queue games, top-1000 accounts (Grandmaster/Challenger) on NA/KR/EUW, patches 13.14–13.18 (July 18–Sep 27, 2023). Filters: ≥50 games/role/account, champions played by ≥30 accounts, disconnects removed (<500 damage by 7 min). Pro labels: players on top-level NA/EU/KR/CN pro teams. No code repository listed; Riot API at developer.riotgames.com.

## Findings (numbers and facts, not vibes)
- SIDO separates pros from non-pros across ALL roles (most FDR-significant in 0–7 and 7–15 min); basic-average shows smaller, less consistent differences; Plus-Minus shows small inconsistent differences, often scoring pros below average.
- Gold differential predicts winners: 69% (0–7 min), 79% (7–15), 83% (15–25); damage: 63%, 73%, 72%.
- SIDO player model has lower RMSE than basic-average on held-out patches 13.10/13.11 despite lower discrimination — shrinkage trades discrimination for accuracy.
- Meta-metrics: discrimination — Top EUW 0–7 min gold: player SIDO 0.77/BA 0.87, ally SIDO 0.30/Plus-Minus 0.00, enemy SIDO 0.46/Plus-Minus 0.01; independence: Plus-Minus ~0.98–1.00, BA ~0.06–0.09, SIDO ~0.48–0.68; stability (concordance): gold player SIDO 0.53–0.75, ally/enemy SIDO 0.47–0.65.
- Authors' honesty rule: low ally/enemy discrimination → use 5-category bucketing (high/low positive, neutral, low/high negative) instead of continuous scores.
- Role insights: support pros differentiate via enemy damage prevented; jungle pros' biggest edge is enemy gold prevented in 7–15 min (LCK 0.17, LEC 0.12); bot-lane pro edge ~2:1 technical-vs-teamplay, jungle ~1:2, others ~1:1.
- Pro-account counts (Table 2): EUW Top 18/15, Jungle 22/21, Mid 16/15, Bot 25/22, Support 12/10; KR 13/13, 19/19, 18/18, 17/17, 16/15; NA 10/10, 4/4, 5/5, 9/8, 12/9 (accounts/players; not exhaustive).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Own/ally/enemy attribution structure: QB-BEHAVIOR (QB's own production vs effect on teammates' EPA as distinct effects) and OTHER (edge rusher's effect on opposing QB EPA).
- "Attribute overlap to the ally, not the player" conservative residualization: TRUST-SIGNAL (bias-control discipline for credit assignment).
- Bucketing rule for low-discrimination components: TRUST-SIGNAL (publish categories, not continuous numbers, when discrimination is low).
- Per-teammate-pair effects (QB–WR chemistry as random interaction) as improvement experiment: QB-BEHAVIOR (stack/correlate signal for DFS/betting).
- Extension: corpus has adjusted-plus-minus inventoried but no hierarchical-Bayesian own/ally/enemy split and no discrimination/independence/stability QC discipline.

## Engine-actionable? (yes/no + one-line what)
Yes — fit own/ally/enemy hierarchical models for NFL skill positions on nflverse (start with QB teammate-EPA effects and edge-rusher opponent-dropback-EPA effects) and adopt discrimination/independence/stability as the mandatory metric-QC gate for every new advanced metric; adoption gate: own-effect model beats raw EPA/dropback on out-of-sample RMSE with discrimination ≥0.5 and stability concordance ≥0.6.
