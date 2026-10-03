# docs/arxiv-program/research/2026-09-21/arxiv-deep/0061-predicting-soccer-matches-with-complex-networks.md

## What it is (1-2 sentences)
A 2024 arXiv paper (arXiv:2409.13098v1, Baratela et al.) testing whether passing-network topology (centrality metrics on player passing graphs) predicts soccer match winners as well as box-score stats, finding that network-only models match stats-only models and fusing both gains +3.5pp accuracy / +0.05 AUC. The corpus reader's verdict is ADAPT: port the fusion blueprint and centrality metric set to NFL target networks as a time-ordered ablation experiment, not the soccer model itself.

## Key metrics/methods (formulas where given, else "not specified")
- Passing networks: player nodes (11/team; substitutes merged into replaced player), directed edges weighted by pass count, node positions = average field coordinates. Granularities: whole match vs. per-half.
- Network equations (as printed): Eq. 1 degree C_D(v) = deg(v)/(n−1); Eq. 2 closeness C_C(v) = (n−1)/Σ_u d(u,v); Eq. 3 betweenness C_B(v) = Σ_{s≠v≠t} σ_st(v)/σ_st; Eq. 4 eigenvector C_E(v) = x(v), Ax = λ_max x; Eq. 5 clustering C_tr(v) = 2T(v)/(deg(v)(deg(v)−1)); Eq. 6 avg shortest path ℓ = Σ_{s,t∈V} d(s,t)/(n(n−1)).
- Per network: min/max/mean/std of node metrics (degree, closeness, betweenness, eigenvector, clustering); avg shortest path and network centroid (x_c, y_c) as scalars.
- Stats features: GK saves, red/yellow cards, assists, shots, opponent shots, shots on target, passes, goals, opponent goals, possession, pass accuracy, GK-save accuracy, shots-on-target accuracy.
- Models: Logistic Regression, Random Forest, XGBoost (scikit-learn), Hyperopt tuning, stratified 10-fold CV, 30% test split. Interpretability: permutation importance + SHAP. Clustering: k-means k=2–7, elbow/silhouette/NMI ± PCA.
- Label construction: rolling average of each team's previous five matches (home team's five home matches; away team's five away matches); feature row = half home-team + half away-team; binary target = home win. Splits not stated as time-ordered — leakage risk if random.

## Data sources named
- Pappalardo et al. 2019 event dataset (Scientific Data 6:236, public): 1,941 matches — 2018 FIFA World Cup, UEFA Euro 2016, 2017–18 seasons of Spain, Italy, Germany, England, France. Main sample: draws removed → 1,470 binary matches. Schema: passes with player IDs and pitch coordinates, shots, cards, goals, GK saves, possession, pass accuracy. No code/repo link stated.

## Findings (numbers and facts, not vibes)
- Binary no-draws (Table I): Nets-only — LR 67.64%/0.75 AUC, RF 67.93%/0.74, XGB 66.18%/0.69. Stats-only — LR 65.12%/0.69, RF 66.86%/0.72, XGB 66.86%/0.69. Network features ≈ box-score stats. — SCHEME
- Mixed (Table II): LR 69.39%/0.75, RF 71.44%/0.77, XGB 66.18%/0.72 — mixed beats both single-source models (RF: +3.5pp accuracy, +0.05 AUC over stats-only). — SCHEME
- Granularity: per-half networks → AUC 0.72, F1 ≈ 75.5% vs whole-match AUC 0.70, F1 ≈ 74%. — SCHEME
- Top features: avg opponent goals in away matches; min clustering coefficient of away team 1H; max eigenvector centrality home 1H (playmaker proxy). Importance spread across both families; no single dominant feature. — SCHEME
- EPL position correlations (Fig. 2): degree r=−0.690 (p=0.000767); closeness −0.682 (p=0.000929); betweenness +0.671 (p=0.001199); eigenvector −0.521 (p=0.018); clustering −0.658 (p=0.0016); avg shortest path +0.659 (p=0.0016); centroid-X −0.733 (p=0.00023); centroid-Y +0.228 (p=0.333, ns — only non-correlating metric). Better teams: higher degree/closeness/clustering, lower average path length. — SCHEME
- Clustering: k=3 best, silhouette 0.173 (0.194 w/ PCA), NMI ≈ 0.03 (0.033) — inconclusive; no distinct league playing styles. — OTHER
- Draws included (Table III, 3-class): RF accuracy 71.44% → 55.03% (LR 69.39%→49.28%, XGB 66.18%→55.65%); still beats 33% random baseline. — TRUST-SIGNAL
- League-level: EPL most predictable (RF 80%), others 65–69% (single-league single-season slice — likely noise-assisted). — TRUST-SIGNAL
- Leave-one-league-out championship simulation (Appendix B): champions correctly predicted in England, Germany, France; within-2-positions: Spain 1 exact/4 ≤2, England 3/8, Italy 3/12, France 5/10, Germany 3/10. — OTHER
- Critical caveat: stratified 10-fold CV + 30% test with no stated time ordering — if random, rolling 5-match features include future matches (leakage); any GSE replication must be time-ordered. — TRUST-SIGNAL

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- GSE corpus gap: network topology is absent from the existing research map (NGS 27 metric families + STRAIN have no graph features) — this is a new capability class, not a duplicate — SCHEME.
- NFL analog: QB→receiver directed weighted target networks per game — compute degree/eigenvector/betweenness centrality of receivers, clustering of target distribution (concentrated hub vs. distributed offense) — feed alongside stats into outcome/spread models — QB-BEHAVIOR, SCHEME.
- The Fig. 2 pattern (better teams = shorter average path + higher clustering) yields an NFL hypothesis: offenses with high clustering + short paths (quick ball distribution through multiple hubs) outperform star-concentrated ones — testable against EPA/play — COACHING, SCHEME.
- Per-half beats whole-match → NFL mirror: per-quarter or per-half splits on target-network features — SCHEME.
- League-clustering inconclusiveness (NMI ≈ 0.03) cautions against team-archetype claims from clustering alone — TRUST-SIGNAL.
- Substitute-merging (suppressing in-game personnel changes) is the direct NFL analog of personnel-package changes — the NFL port should use dynamic node sets instead — SCHEME.

## Engine-actionable? (yes/no + one-line what)
Yes — build per-game QB→receiver target networks from NGS/tracking (degree, closeness, betweenness, eigenvector, clustering, avg path), fuse with existing game features in a time-ordered ablation, and adopt only if the mixed model beats stats-only by ≥2pp accuracy with McNemar p<0.05 on 2022–2025 NFL games.
