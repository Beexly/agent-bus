# arxiv-program/research/2026-09-21/arxiv-deep/1848-rl-feature-engineering-transformation-graph-khurana.md
## What it is (1-2 sentences)
RL feature engineering (arXiv:1709.07150, Khurana et al., IBM): a transformation graph (DAG of dataset nodes × transforms) compactly enumerates compositional feature search, and Q-learning learns a budget-aware exploration policy over it — trained on 48 datasets, transferred to 24 unseen ones. Adjudicated ADAPT: the compositional-search formalism is the lane's missing piece, with a sports transform library and a policy trained on GSE's season history.
## Key metrics/methods (formulas where given, else "not specified")
- Transformation graph: root D₀; hierarchical nodes D_j = T(D_i); sum nodes D_{i,j} = D_i + D_j; height-h complete graph over t transforms has ~t^{h+1}−2 nodes.
- MDP: state s_i = (G_i, b_ratio) with 9 factors (node accuracy, transform avg reward, times-used on path, recency of gains, depth, budget fraction, feature-count ratio, is-selector, data types); reward r_i = best-accuracy improvement of G_{i+1} over G_i; cumulative R = Σ γ^j r_{i+j}, γ = 0.99.
- Q(s,c) = w_c·f(s) (RL1, action-dependent weights) vs w·f(s) (RL2); update w ← w + α(r + γ·max Q − Q)·f, α = 0.05, ε-greedy ε = 0.15. Transform library: Log, Square, Square Root, Product, ZScore, Min-Max, TimeBinning, Aggregation, Temporal/Spatial aggregates, k-term frequency, Sum, Difference, Division, Sigmoid, BinningU/D, NominalExpansion, Sin, Cos, TanH.
## Data sources named
48 training + 24 non-overlapping test datasets (UCI, OpenML, LibSVM, Kaggle), 148–50,000 rows, 4–10,936 features; RF (Weka defaults) + 5-fold stratified CV; comparators base / expansion-reduction / random / Tree-Heur (Cognito). No public code.
## Findings (numbers and facts, not vibes)
- **23.8% median error reduction** over base across the 24 test datasets at B_max = 100 steps.
- RL policies **4–8× more efficient** than handcrafted BFS/DFS/global at finding the optimal node (6-transform, h_max=4 graph); RL1 more data-efficient than RL2.
- Table 1 standouts: Amazon Employee 0.712→0.806; Bikeshare DC 0.393→0.798 (Exp-Red 0.693, Tree-Heur 0.790); AP_Omentum_Ovary (10,936 features) 0.615→0.820; OpenML 616 0.343→0.559; loses to expand-reduce on one dataset.
- Feature selection as a graph transform improves final gain by **51%**; h_max = 4 optimal for the majority, h_max = 6 deterioration (over-composition); Bikeshare DC: 4 min 40 s for 100 nodes, single thread @ 2.8 GHz. Different algorithms yield different optimal features — FE is model-dependent.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Formalized compositional feature search replacing analyst trial-and-error; the 9 state factors and b_ratio (weekly compute budget) map directly onto GSE's weekly workflow.
- (TRUST-SIGNAL) INFERENCE — adding the file's proposed 10th state factor (temporal leakage risk from feature lineage) bakes leakage avoidance into the exploration policy itself, so feature selection is auditable by construction.
## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-RLFE" over the nflverse game table (sports transform library: rolling means/stds, league z-scores, opponent differentials, sigmoid of spreads, week-of-season sin/cos, Elo-deltas) with a leakage-risk state factor; adopt only if 2024 held-out log-loss improves ≥0.003 with zero leakage-audit failures.
