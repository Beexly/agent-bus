# arxiv-program/research/2026-09-21/arxiv-deep/0933-siamese-triplet-team-ranking.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2103.13736 — "Deep Similarity Learning for Sports Team Ranking" (Yazbek et al., 2021). Tests whether Siamese networks (contrastive and triplet loss) feeding LightGBM LambdaRank / XGBoost pairwise rankers improve end-of-season team ranking prediction in NBA (2014–2018) and Super 15 Rugby (2017–2020) vs the boosters alone; verdict ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Contrastive loss: J(θ) = (1−Y)(1/2)(D_{a,b})² + (Y)(1/2)(max(0, m−D_{a,b}))², Y=0 win / 1 loss; D_{a,b} = Euclidean distance between embeddings.
- Triplet loss: J(θ) = max(D(a,p) − D(a,n) + m, 0); anchor a, positive p (same class), negative n (different class).
- Gradient boosting updates: F_0(x) = argmin_γ Σ_i L(y_i, γ); pseudo-residuals r_im = −∂L/∂F_{m−1}; F_m = F_{m−1} + λ_m γ_m h_m(x).
- mAP = (1/N)Σ_i AP_i; Spearman r_s = 1 − 6Σd_i²/(n(n²−1)); nDCG_p = DCG_p/IDCG_p with DCG_p = Σ_i (2^{rel_i}−1)/log_2(i+1), relevance 15 (1st) → 1 (15th).
- Tally rank: predicted game similarity score added to a team's tally on predicted win, subtracted on loss; tallies sorted descending → standings.
- XGBoost pairwise log loss: F = −(1/N)Σ_i [y_i log(ŷ_i) + (1−y_i)log(1−ŷ_i)].
## Data sources named
Rugby4cast and Statbunker (rugby); basketball datasets from Thabtah et al. 2019 / Ahmadalinezhad et al. 2019. NBA 2014–2018 (2,460 games/season, 30 teams, 14 box-score features per side); Super 15 Rugby 2017–2020 (120 games/season, 15 teams, 38 seasonal team statistics).
## Findings (numbers and facts, not vibes)
- NBA: LightGBM(Triplet) SOTA-claimed — mAP 0.867±0.15, Spearman 0.870±0.11, NDCG 0.980±0.00; naive baseline mAP 0.704, r_s 0.640; plain XGBoost 0.857/0.900/0.976. Playoff hits: 8/8 East + 7/8 West.
- Rugby: XGBoost(Triplet) SOTA-claimed — AP 0.921±0.04, r_s 0.793±0.00, NDCG 0.982±0.03; naive AP 0.462. Plain LightGBM/XGBoost without SNN *lost to naive* on rugby (0.381/0.421 vs 0.462) — representation learning was load-bearing. Triplet > contrastive in both sports but margin "smaller than expected."
- No consistent winner across sports (LightGBM-Triplet wins NBA, XGBoost-Triplet wins rugby); huge error bars (e.g., NBA XGBoost-Contrastive mAP 0.745±0.26) make SOTA claims shaky.
- Paper's leakage flaw: end-of-season aggregate stats used to predict games *within* that same season — overstates true forecasting power.
- All six models missed Utah over Denver in 2017/18 (attributed to the Jazz draft).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SOTA-claimed triplet embeddings beat plain boosters, triplet > contrastive — OTHER (representation learning paradigm vs scalar ratings)
- Plain boosters losing to naive baseline on rugby; representation load-bearing — OTHER (model robustness / data regime sensitivity)
- End-of-season aggregates predicting same-season games = in-season leakage — TRUST-SIGNAL (validation hygiene flag: leakage overstates forecast power)
- No consistent best model across sports — OTHER (no free lunch; sport-specific validation required)
- Tally-rank aggregation is heuristic, not learned — OTHER (aggregation-layer opportunity)
## Engine-actionable? (yes/no + one-line what)
yes — Learn NFL team-strength embeddings via triplet loss (anchor, beat-team, lost-to-team) from nflverse 2015–2021, freeze, then augment the game-prediction stack with embedding distances; numeric gate: ≥0.008 log-loss improvement on 2022–2025 or embedding power ranking Spearman ≥0.75 vs final standings in ≥3 of 4 seasons (paper's file-level impl spec §11–14, effort ~1 week).
