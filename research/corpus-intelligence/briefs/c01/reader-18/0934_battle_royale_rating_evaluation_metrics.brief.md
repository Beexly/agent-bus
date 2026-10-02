# arxiv-program/research/2026-09-21/arxiv-deep/0934-battle-royale-rating-evaluation-metrics.md
## What it is (1-2 sentences)
A 2021 arXiv paper (2105.14069, Dehpanah et al.) comparing evaluation metrics — accuracy, MAE, Kendall's tau, MRR, AP, NDCG — for rating systems (Elo, Glicko, TrueSkill, plus a PreviousRank baseline) on >25,000 PUBG duo matches, testing under three player-setups (all players, best players, frequent players).

## Key metrics/methods (formulas where given, else "not specified")
- Elo (extended to team battle royale): team rating μ_{t_i} = Σ_j μ_j (sum of member ratings); win prob Pr(t_i wins,F) = Σ_{j≠i}(1+e^{(μ_{t_j}−μ_{t_i})/D})^{−1} / (N choose 2), D=400; normalized rank score R′_{t_i} = (N−R^obs_{t_i})/(N choose 2); update μ′_{t_i} = μ_{t_i} + K[R′_{t_i} − Pr(t_i wins,F)], K=10; member shares weighted by contribution w_{p_j} = μ_j/μ_{t_i}.
- Glicko extension: team μ = Σμ_j, team σ = Σσ_j (raw sum, not quadrature); win prob via 10^{−g(√(σ²_{t_i}+σ²_{t_j}))(μ_{t_i}−μ_{t_j})/400} normalized over pairs; coefficient 0.0057565 in the μ update.
- TrueSkill: standard non-draw updates μ′_i = μ_i + (σ²_i/c)·N(t/c)/Φ(t/c), c = √(2β²+σ²_i+σ²_j), β=4.16, τ=0.833. Defaults: 1500 (Elo/Glicko), 25 (TrueSkill).
- Metrics: MAE = (1/N)Σ|R^pred_i − R^obs_i|; Kendall τ = (n_c − n_d)/(N 2); MRR = (1/N)Σ 1/(1+error_i); AP = (1/N)Σ P(i)·1/(1+error_i); NDCG = Σ_{i=1}^{N} [1/log_2(i+1) · 1/(1+error_i)] / IDCG. IR metrics use 1/(1+error) dampening on rank deviation.

## Data sources named
Kaggle PUBG duo matches dataset: >25,000 matches, >825,000 unique players, chronologically ordered; only ranks used (kills/distance stats available but unused).

## Findings (numbers and facts, not vibes)
- Accuracy (all players): rises then flat ≈2.5% once new-player share <60%; Elo/Glicko/TrueSkill indistinguishable; all beat PreviousRank. Best players: ≈5% (≈2×) but cannot separate any rating system from PreviousRank.
- MAE (all players): settles ≈14.5 once new share <40%; Elo slightly best. Best players: TrueSkill 16.5→13.5 (only system improving vs all-players); Elo/Glicko stuck ≈14.5. Frequent players: only TrueSkill corrects downward; Elo/Glicko worse than in the new-player-contaminated all-players setup.
- Kendall's tau: negative at start (predicted/observed in opposite order) under new-player load; fails to separate systems from PreviousRank — authors conclude tau is inappropriate for this task.
- MRR: all-players steady ≈14% once new share <70%. Frequent players: Elo/Glicko flat; TrueSkill peaks ≈16% at game 40 then decays to ≈14.5%; PreviousRank beats Elo and Glicko here.
- AP: all-players ≈0.55% once new <60% (hit-based precision weighting crushes values); TrueSkill beaten by PreviousRank on frequent players.
- NDCG (winner): reliable once new-player share <80% (vs MAE's 55% threshold) — far more robust to new-player influx; clearest system separation and best at showing superiority over PreviousRank across all three setups. Best players: much higher NDCG, systems ≫ PreviousRank, clear ordering. Frequent players: Elo/Glicko correctly higher than all-players; TrueSkill decays and is beaten by PreviousRank (a real TrueSkill signal, appearing in MRR/AP/NDCG alike).
- Best-player setup selection caveat: top-1000 selected by *final* rating, then evaluated on first 10 games — mild selection bias (post-hoc information).
- "Best" thresholds: 10 games enough to judge best players, 100 for frequent players.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Evaluation methodology: NDCG with position weights is the empirically most reliable metric for judging ranking/rating systems under influx of new entities — directly applicable to GSE's weekly power rankings and model selection.
- (OTHER) Member-contribution-weighted team aggregation (w_{p_j} = μ_j/μ_team) as a formula for rolling player-level ratings (e.g., QB ratings) up to team level.
- (OTHER) New-entity protocol: model comparisons only trusted once <60% of observations come from low-observation players; rookies/debuting QBs get median prior + high uncertainty (Glicko-style).
- (QB-BEHAVIOR) No QB content — esports rating systems only. INFERENCE: contribution-weight concept could extend to weighting a QB's share of team rating by snap share.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt NDCG (1/log₂(i+1) position weights) as the primary model-selection metric for weekly power rankings and rating-system comparisons, replacing accuracy-only evaluation; test player-aggregated team ratings with contribution weights on 2022–2025 data.
