# docs/arxiv-program/research/2026-09-21/arxiv-deep/1191-player-team-heterogeneous-interaction-graph.md
## What it is (1-2 sentences)
Deep read of Wang et al. (KDD '25, arXiv:2507.10626v1) presenting HIGFormer: a heterogeneous player–player interaction graph + team win-rate graph fused via transformer for pre-match soccer outcome prediction. Verdict in-file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Per-match heterogeneous directed graph: 46 player nodes with 10 key-event-count features (duel, foul, free kick, goalkeeper leaving the line, interruption, offside, others on the ball, pass, save attempt, shot); 2 edge types {pass-related, defense-related}.
- Heter. Transformer (TokenGT extension, Laplacian eigenvectors + trainable node/edge embeddings) + Heter. GCN (GAT with per-edge-type weight matrices), fused by MoE gating [p^i_glo, p^i_loc] = Softmax(Gating(X_V^i)).
- Team Interaction Network: directed team graph with head-to-head winning-rate edges, homogeneous GAT encoder.
- Prediction: ŷ^i = σ(f_MLP(r^i − b^i)) where r^i, b^i are AvgPool of home/away player embeddings over last T=10 matches; loss = MSE on ordinal targets (win=1, draw=0.5, lose=0); two-stage training (Adam, lr 1e−3, 2,328 + 2,134 steps).
## Data sources named
WyScout Open Access Dataset (Pappalardo et al. 2019): 1,941 matches, 7 competitions, 3,293 players, 154 teams, 3,251,294 events; time-ordered 80/20 split per division; label split train [695, 397, 460], test [177, 80, 132] (win/draw/lose, home perspective).
## Findings (numbers and facts, not vibes)
- HIGFormer accuracy (Win/Draw/Lose/Avg): 57.96 / 24.53 / 68.25 / 52.19 — best total accuracy; beat DraftRec 48.33, RNN 47.30, P-Graph 47.69, MLP 46.79, T-Graph 46.92.
- Ablation: removing Player Interaction Network drops to 52.87/32.08/52.87/48.59; cross-entropy instead of ordinal MSE → 51.16 avg; one-stage training → 47.95.
- Player-evaluation: swapping L. Messi into Real Betis raises predicted win% by +7.14; into low-ranked Celta Vigo only +1.49.
- Attention analysis: midfielders and defenders get most attention; goalkeepers least.
- Limitations named in-file: draw prediction poor (24.53%), attacking edges excluded, no calibration metrics reported.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: event-typed player-interaction graphs (pass/rush/pressure/coverage edges) as a model of on-field behavior rather than aggregate stats.
- SCHEME: team–team competition-history graph (head-to-head win rate) encoding matchup/scheme dynamics.
- COACHING: coaching-intent signals via player-embedding what-if swaps (e.g., Messi substitution experiments).
- OTHER: NFL-transfer blueprint — nflverse + FTN charting graph, margin-based ordinal buckets (no NFL draws), with temperature scaling/Venn-Abers added since the paper omits calibration.
## Engine-actionable? (yes/no + one-line what)
yes — reimplement the three-component architecture on nflverse/FTN event graphs as an NFL outcome model, with calibration added and an acceptance gate of beating nfelo accuracy by ≥1.5pp with ECE no worse.
