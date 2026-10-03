# arxiv-program/research/2026-09-21/arxiv-deep/1798-gcn-wp-semi-supervised-graph-convolutional.md
## What it is (1-2 sentences)
GCN-WP (arXiv:2207.13191): a semi-supervised graph convolutional network that represents an entire esports league as a graph (team-game nodes linked to the team's previous game and to the opponent's game-node), trained on one league (LPL) and tested on another (LCS) — beating random forests and Elo-based SCOPE on accuracy. Adjudicated ADAPT: the league-graph structural primitive is new to the corpus; GSE needs a calibrated head and Brier/log-loss evaluation.
## Key metrics/methods (formulas where given, else "not specified")
- GCN layer: f(L⁽ⁿ⁾,A) = σ(D̂^{−1/2}ÂD̂^{−1/2}L⁽ⁿ⁾W⁽ⁿ⁾), Â = A + I (also tested Chebyshev-polynomial filters, degree 1; 1–2 hidden layers, 32/64/128 units, dropout 0.1–0.5).
- BuildLeagueGraph (Algorithm 1): one node per team-game; undirected edges to the opponent's node and to the team's previous-game node; homogeneous network justified by delta (team-minus-opponent) features; label timing offset by c convolutions to avoid leakage.
- Metric: accuracy only — no probabilities, no calibration (the paper's central weakness for GSE's probability lane).
## Data sources named
Oracle's Elixir League of Legends 2020 data (Tim Sevenhuysen, public blog dataset): train graph LPL (China), validation LCK (Korea), test LCS (North America); international tournaments excluded; 30+ team-game features (objectives, farm, gold/XP, fighting, vision) in raw and delta encodings. Code: fork of Kipf's GCN (TensorFlow).
## Findings (numbers and facts, not vibes)
- Test (LCS 2020) accuracy: GCN-cheby 1-layer + delta **0.619** (best); SCOPE (Elo) 0.597; RF lookback-5 + delta 0.578 ± 0.012; GCN-cheby 2-layer + delta 0.568; GCN 1-layer + delta 0.551; GCN-cheby 1-layer + raw 0.541.
- Delta features beat raw everywhere; 1-layer beats 2-layer (wider neighborhoods pull in opponents-of-opponents noise); Chebyshev beats spectral on delta (0.619 vs 0.551) — opposite of Kipf & Welling's original finding.
- SCOPE best params — LCS: K=40, cutoff 1600, reduction 0.1, MoV none, w₉₀=100, regression 0.4; LPL: K=40, cutoff 1700, reduction 0.5, MoV lin, w₉₀=500. Single season, single test league.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) League-as-graph ratings: neighborhood aggregation replaces hand-tuned recency weighting; cross-league transfer (train LPL → predict LCS) is the corpus's closest analogue to training on historical NFL and generalizing across eras.
- (SCHEME) INFERENCE — the graph edges encode opponent-strength structure directly (schedule/strength-of-schedule as learned neighborhood features); the improvement experiment's directed heterogeneous GCN with typed edges (self-temporal vs opponent vs divisional) is the structural-moat path.
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL team-game graph (32×17 nodes, delta EPA/success/explosiveness features) with a calibrated logistic head; adopt as a ratings/ensemble arm only if it beats the engine's win-probability model on 2023–2024 Brier by ≥0.003 with acceptable calibration.
