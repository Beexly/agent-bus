# docs/arxiv-program/research/2026-09-21/arxiv-deep/0909-playerank-soccer-player-ranking-ml.md
## What it is (1-2 sentences)
Full-text read of arXiv:1802.04987v3 (Pappalardo et al., 2019, "PlayeRank"), a soccer player-rating framework that learns event-importance weights from a team-outcome linear SVM (no ground truth for individual quality exists), then scores individuals by dot product r(u,m) = (1/R)Σ w_i x_i, with k-means role detection from average field position and EWMA form aggregation. Verdict: ADAPT — portable to an NFL "win-contribution" player rating for props/DFS form features.

## Key metrics/methods (formulas where given, else "not specified")
- (1) r(u,m) = (1/R)Σ w_i x_i ∈ [0,1]; (2) goal-adjusted r* = α·norm_goals + (1−α)·r; (3) EWMA r̄(u,m_g) = β·r(u,m_g) + (1−β)·r̄(u,m_{g−1}); (4) k-silhouette s_k(c) = (d̄_k − d̄_i)/max(d̄_i,d̄_k); (5) NRMSE between competition-specific and global weights; (6) spatial search score z(u,M,Q) = s(u,Q)·r̄(u,M); (7) versatility V(u,M) = −(Σ_i p_i log p_i)/log k.
- Learning: aggregate player feature vectors to team level p_T^m = Σ_{u∈T} p_u^m; train linear SVM on binary match outcome o_T^m ∈ {1: win, 0: non-win}; extract classifier weights w.
- Role detection: k-means (k=8, Hartigan–Wong) on each player-match's center of performance (mean event coordinates); soft/hybrid assignment via k-silhouette (δ_s=0.1 → ~5% hybrids); player belongs to a role's ranking if ≥40% of matches carry that role.
- Goals deliberately excluded from features (they're the outcome being classified — would leak).

## Data sources named
Wyscout soccer logs: 31,496,332 events, 19,619 matches, 296 clubs, 21,361 players, 18 competitions, four seasons. 76 features = type × subtype × tag combinations, normalized [0,1]. Goalkeepers excluded. Proprietary; code promised but not verified.

## Findings (numbers and facts, not vibes)
- Team-outcome SVM: AUC 0.89, F1 0.81, accuracy 0.82 vs majority baseline (AUC 0.50, F1 0.48, acc 0.62).
- Top weights: assists, key passes, shot accuracy; strong negative weights for red/yellow cards, especially hand/violent fouls.
- Weight stability: mean NRMSE ~6% across competitions; 16/18 <7%; Euro 2016 17%, World Cup 2018 20%. Role-specific NRMSE 8–15%.
- Role detection: k=8 best, silhouette 0.43; scouts validated the 8 roles.
- Ratings: μ=0.39, ~94% within μ±2σ; excellent (r>μ+2σ) = 5%; only 11% of players achieve excellence ≥ once; excellence in ≤21% (Neymar) / 9% average of performances. Top players are excellent *more often*, not always excellent.
- Scout concordance: c_maj = 68%, c_una = 74% (random = 50%); rank gap ≥20: c_maj=86%, c_una=91%. PlayeRank beats PSV by +16% relative / +13% absolute, Flow Centrality by +30% relative / +21% absolute.
- Versatility: Sergi Roberto 0.45 (most), Neymar 0.016 (least).
- Limitations: soccer only; no NFL validation; linear rating ignores interactions; no off-ball actions; scout gold standard weak (3 scouts, 211 pairs).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — NFL "win-contribution" player rating: per-player-per-game feature vectors from nflverse (targets, air yards, YAC, carries, pressures allowed, tackles, INTs, penalties, etc.), aggregated to team vectors, logistic/SVM on binary win, weights w extracted, individual rating r(u,m) = w·x with EWMA form rating r̄ — feeds prop model as matchup-adjusted quality features. Caveat (from paper's own logic): NFL has ~150 plays/game vs ~1,628 soccer events, so per-game ratings will be noisier; 80/20 + walk-forward design required.
- SCHEME — role detection via k-means on average event position → NFL role clusters (slot vs outside WR, box vs deep safety) for role-based leaderboards; role leaderboards feed weekly DFS packet write-ups (standing format).
- TRUST-SIGNAL — INFERENCE: the "exclude the outcome from the features" leakage discipline is the reusable trust lesson; validate the team-outcome model first (gate AUC ≥ 0.80) before porting weights to individuals.
- QB-BEHAVIOR — INFERENCE: per-game QB rating r̄ as a form feature is a direct QB-behavior signal for props, though the paper itself is position-agnostic.

## Engine-actionable? (yes/no + one-line what)
Yes — prototype PlayeRank on nflverse 2020–2025 with gate: team-outcome AUC ≥ 0.80 on 2024–2025 AND r̄ adds ΔR² ≥ 0.01 (p < 0.05) for next-game fantasy points in ≥3 of 5 skill positions.
