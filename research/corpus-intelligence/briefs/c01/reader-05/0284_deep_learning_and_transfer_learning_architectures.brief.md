# arxiv-program/research/2026-09-21/arxiv-deep/0284-deep-learning-and-transfer-learning-architectures.md
## What it is (1-2 sentences)
A research-deep brief of arXiv:2405.02412v1 (Frees, Ravella & Zhang, Stanford 2024): a custom 1D CNN on recent-form windows forecasts next-gameweek Fantasy Premier League points, beating Ridge and LightGBM on both MSE and Spearman ranking, while a Longformer transfer model on Guardian news text adds no signal. Verdict: ADAPT — the CNN architecture ports directly to NFL fantasy/prop projections.
## Key metrics/methods (formulas where given, else "not specified")
- CNN loss: J_CNN = (1/B)·Σ(y−ŷ)² + λ₁(‖C‖₁+‖W¹‖₁) + λ₂(‖C‖₂²+‖W¹‖²₂), C = conv weights, W¹ = dense weights; architecture: one 1D conv layer → flatten → concat upcoming-match difficulty d → one dense hidden layer → output; Adam, early stopping (patience 20), ElasticNet regularization; 11 architecture iterations via grid search.
- GBM target: Θ_m = argmin_Θ Σ(−g_im − T(x_i;Θ))²; ensemble f_M(x) = η·Σ_m T(x;Θ_m). LightGBM optimum: 50 trees, depth 3, L2=10, 7 leaves, min 70 obs/leaf.
- Ranking metric: generalized Spearman ρ_s with tie handling. Transfer: Longformer regression head = scaled sigmoid to [−5, 24] FPL range over first 512 words of each of 3 most recent pre-kickoff Guardian articles + tabular window reworded as sentence (acknowledged "not ideal" hack).
- Design: separate models per position (GK/DEF/MID/FWD); player-wise train/val/test 60/25/15 stratified on avg_score (no leakage); benched (0-minute) players dropped.
## Data sources named
Tabular: vaastav/Fantasy-Premier-League scrape (EPL 2020-21, 2021-22); features: goals_scored, assists, total_points, minutes, influence/creativity/threat, ict_index, saves, bps, goals_conceded, clean_sheets, difficulty_gap, upcoming match difficulty d. Text: Guardian scrape (~950 articles/player, stdev ~900). Code: https://github.com/danielfrees/mlpremier.
## Findings (numbers and facts, not vibes)
- Holdout test MSE: Ridge 6.73 avg (GK 6.46 / DEF 7.20 / MID 6.08 / FWD 7.19); LightGBM 6.71 (6.22 / 7.24 / 6.11 / 7.28); CNN 5.83 (5.08 / 5.87 / 6.16 / 6.22); Transfer 9.10 (8.22 / 9.66 / 8.40 / 10.12).
- CNN ≈13% better avg MSE than best baseline (LightGBM), ≈30% better than prior best LSTM in literature (different seasons, same source).
- Optimal CNN windows: GK 6 wks (1 feature: points-only), DEF 9 (1), MID 3 (2: points + ?), FWD 9 (1) — past points + matchup difficulty sufficed; ict_index and minutes did not help the CNN.
- Spearman ρ holdout: CNN 0.70 GK / 0.57 DEF / 0.58 MID / 0.62 FWD vs Ridge/LightGBM 0.40–0.53 — CNN clearly best at ranking.
- Negative finding: Guardian news text carries no usable signal — transfer model worse than all baselines on every position (design flaws admitted: hacked regression head, one season, uncurated articles — weak evidence).
- Baseline feature importance: minutes, difficulty_gap, influence/creativity/threat, total_points; LightGBM GK values saves; forwards' goals_scored coefficient flips sign (goal-scoring not independent week-to-week).
- Outlier failure: worst CNN errors on 21-point blowups (hat tricks + bonus); model regresses to the typical 0–3 range.
- CNN learned filters ~near-zero, no consistent longitudinal pattern (Appendix A) — INFERENCE: it behaves as an adaptive exponential smoother, not a rich pattern extractor.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: INFERENCE — the finding that points-only recent-form windows beat richer feature sets suggests a per-position NFL forecaster (QB fantasy points) should benchmark a simple recent-points + matchup-difficulty baseline before adding features; directly relevant to QB projection and prop lines.
- OTHER: ranking-over-MSE doctrine — for fantasy/prop selection, Spearman rank quality (0.70 GK best case) matters more than MSE; suggests training directly for rank (the authors' Blondel-et-al differentiable-sorting proposal) for DFS top-decile hit rate.
- TRUST-SIGNAL: the failed news-text transfer is weak evidence only, but reinforces that uncurated article text adds no signal — curated beat-writer signal (GSE gap #12) remains untested, not refuted.
## Engine-actionable? (yes/no + one-line what)
Yes — port the 1D-CNN forecaster (past w weeks of PPR fantasy points + matchup difficulty from spread/total, per position group QB/RB/WR/TE, player-wise splits, Spearman evaluation) and adopt if it beats current NFL fantasy-points MSE by ≥5% with Spearman ρ ≥ 0.55 in ≥2 position groups.
