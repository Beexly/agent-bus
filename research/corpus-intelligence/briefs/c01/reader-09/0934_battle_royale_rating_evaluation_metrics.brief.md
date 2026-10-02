# arxiv-program/research/2026-09-21/arxiv-deep/0934-battle-royale-rating-evaluation-metrics.md
## What it is (1-2 sentences)
Full read of Dehpanah et al. (2021, arXiv:2105.14069) comparing evaluation metrics (accuracy, MAE, Kendall's tau, MRR, AP, NDCG) for rating systems (Elo, Glicko, TrueSkill) extended to team battle royale on PUBG duo data. Ledger verdict: ADAPT — NDCG is the most reliable evaluator, robust to new-player influx.

## Key metrics/methods (formulas where given, else "not specified")
- NDCG = Σ_{i=1}^{N} [1/log₂(i+1) · 1/(1+error_i)] / IDCG (paper's winner; reliable once new-player share <80% vs MAE's <55%)
- MAE = (1/N)Σ|R^pred_i − R^obs_i|; Kendall τ = (n_c − n_d)/(N 2); MRR = (1/N)Σ 1/(1+error_i); AP = (1/N)Σ P(i)·1/(1+error_i)
- Team Elo: team μ = Σ member μ; Pr(t_i wins,F) = Σ_{j≠i}(1+e^{(μ_j−μ_i)/D})⁻¹ / (N 2), D=400; update μ′ = μ + K[R′ − Pr], K=10, R′_{t_i} = (N−R^obs_{t_i})/(N 2); members get contribution-weighted shares w_{p_j} = μ_j/μ_{t_i}
- Glicko extended similarly (team σ = sum of member σ — statistically questionable, noted as wart); TrueSkill standard non-draw updates, β=4.16, τ=0.833
- Three setups: all players, best players (top 1000 by final rating, >10 games), frequent players (>100 games)

## Data sources named
- Public Kaggle PUBG duo-match dataset: >25,000 matches, >825,000 unique players; in-game stats (kills, distance) unused — ranks only

## Findings (numbers and facts, not vibes)
- NDCG was the only metric that (a) stayed reliable under new-player influx (robust below 80% new-player share vs MAE's 55%), (b) distinguished rating systems from the PreviousRank baseline across all three setups, (c) showed the clearest system separation
- Accuracy settled ≈2.5% on all-players and could not separate systems from PreviousRank on best players; Kendall's tau judged inappropriate (ignores deviations, pairwise agreement only); AP severely underestimates predictive power (≈0.55%)
- TrueSkill showed a real frequent-player decay visible in MRR, AP, and NDCG alike (beaten by PreviousRank at high game counts); Elo/Glicko improved on frequent players
- Limitations noted in ledger: figure-only reporting (numbers approximate); best-player selection used final ratings (selection bias); Glicko team-σ raw sum questionable

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — evaluation methodology for rating systems; directly relevant to engine model-selection discipline (NDCG vs accuracy/Brier for power-ranking comparisons)
- TRUST-SIGNAL — honest labeling of when metric comparisons are trustworthy (new-player/rookie contamination thresholds map to debut-QB caution)

## Engine-actionable? (yes/no + one-line what)
Yes — adopt NDCG (1/log₂(i+1) position weights) as the primary model-comparison metric for weekly power rankings instead of accuracy alone, and trust comparisons only once low-observation snaps are <60% (rookies get league-median prior, Glicko-style high σ)
