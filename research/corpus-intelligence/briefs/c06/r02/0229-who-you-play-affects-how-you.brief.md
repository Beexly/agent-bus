# arxiv-program/research/2026-09-21/arxiv-deep/0229-who-you-play-affects-how-you.md
## What it is (1-2 sentences)
A full-depth research note on Luo & Krishnamurthy (2023, arXiv:2303.16741v1) proposing GATv2-TCN — a graph attention network over dynamic player-interaction graphs combined with temporal convolution — to predict next-game-day player performance, validated on NBA data plus a 59-bet Underdog Fantasy case study. The note's verdict is ADAPT: port the graph-attention-over-opponent idea to NFL player-prop modeling (GATv2 on an NFL matchup graph), rebuilding the dataset from nflverse rather than adopting the NBA setup.
## Key metrics/methods (formulas where given, else "not specified")
- Dynamic graphs: one snapshot per game day; complete graph among all players of both teams who played >=10 minutes; adjacency a_ij^(t) in {0,1}.
- Node features: 13 stats (PTS, AST, REB, TO, STL, BLK, PLUS_MINUS, TCHS, PASS, DIST, PACE, USG_PCT, TS_PCT) concatenated with learned team embedding (dim 2) + position embedding (dim 2): g_i^(t) = [f_i^(t)||team_i||pos_i].
- GATv2: e(g_i,g_j) = a^T LeakyReLU(W[g_i||g_j]); alpha_ij = softmax over neighborhood; h_i = sigma(sum_j alpha_ij W g_j); H=4 heads, output dim 32.
- Temporal conv: Y^(t) = Phi * ReLU(H^(t)) over t0=10 prior representations, output dim 64, then FC to target; Adam 1e-3, weight decay 1e-3; forward-fill missing values; input seq 10, output 1.
- Metrics: RMSE, MAE, MAPE, CORR (Fisher-z averaged); chronological 50/25/25 split; baselines N-BEATS, DeepVAR, TCN, ASTGCN.
## Data sources named
NBA.com official API via swar/nba_api (boxscoretraditionalv2, boxscoreplayertrackv2, boxscoreadvancedv2, leaguegamefinder, roster endpoints); 2022-23 NBA regular season 2022-10-18 to 2023-01-20: 691 games, 92 game days, 582 players, 30 teams. Code/data: https://anonymous.4open.science/r/NBA-GNN-prediction.
## Findings (numbers and facts, not vibes)
- GATv2-TCN: RMSE 2.222, MAE 1.642, MAPE 0.513, CORR 0.508 — best RMSE/MAE/CORR; vs ASTGCN (2.293/1.699/0.455/0.453, MAPE best), TCN (2.414/1.780/0.551/0.418), DeepVAR (2.896/2.151/1.754/0.396), N-BEATS (5.112/4.552/3.701/0.366). No CIs or significance tests stated.
- Betting case study: 35/59 correct (59.3% hit rate) on Underdog Fantasy 2023-01-20 — single day, no walk-forward, no ROI, no vig accounting (anecdotal).
- Interpretability: team embeddings clustered Knicks<->Trail Blazers and Grizzlies<->Hornets as stylistically similar; Suns-Warriors 2023-01-10 heatmap showed top inter-team attention to Bismack Biyombo and Stephen Curry; former teammates attended to old teams.
- Target ambiguity: 13 stats collected but final output dim stated as 6 — the exact 6 predicted metrics are unstated.
- Spectral GNNs (GCN/ChebyConv) fail on these cluster graphs (block-diagonal Laplacian, repeated eigenvalues) — the paper's justification for GATv2.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- SCHEME: nodes/edges map naturally to NFL matchups — WR/CB and pass-rusher/QB matchup graphs with weighted edges from FTN charting coverage data (the paper's admitted weakness is unweighted complete graphs).
- QB-BEHAVIOR: attention weights over opponent interactions could quantify QB decision context (who the defense keys on), a props-relevant signal.
- TRUST-SIGNAL: the 59-bet single-day case study is a textbook example of an anecdotal profitability claim — GSE's strategy evaluations must require walk-forward + ROI accounting, not single-day hit rates.
## Engine-actionable? (yes/no + one-line what)
yes — Build the NFL analog (GATv2+TCN on matchup graphs from nflverse + FTN charting coverage data) and adopt as GSE's prop-graph lane if it beats a TCN-only baseline by >=5% MAE reduction on 2024 WR receiving yards with no >10% MAPE deterioration.
