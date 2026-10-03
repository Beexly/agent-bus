# docs/arxiv-program/research/2026-09-21/arxiv-deep/0018-model-based-restricted-shapley-value-shot-actions.md

## What it is (1-2 sentences)
A 2026 arXiv paper (arXiv:2603.11016v3) proposing a model-based restricted Shapley value (PRSV) to fairly attribute the value of shot-ending soccer actions among players in a passing network, with bootstrap standard errors and a studentized contribution statistic for cross-player comparison. The corpus reader's verdict is ADAPT: the soccer xGA application is not portable, but the four-part attribution recipe (model-based worth + restricted coalition support + bootstrap SEs + studentization) ports directly to NFL play/drive credit assignment across blockers, route-runners, and ball-carriers.

## Key metrics/methods (formulas where given, else "not specified")
- xGA worth model: XGBoost (beat binary-regression cloglog in Cefis & Carpita 2025) predicting P(goal | shot + action features). Coalition worth υ(S) = Σ in-sample xGÂ over observed actions with those players; unobserved-but-compatible coalitions υ(S*) = single out-of-sample xGÂ prediction.
- Restricted Shapley: φ_i^R(υ) = Σ_{C∈C_i} w_i(C)[υ(C∪{i}) − υ(C)], weights w_i(C) = [c!(n−c−1)!/n!]/Σ_{C∈C_i}[c!(n−c−1)!/n!] normalized over the restricted support (Myerson-style; efficiency lost, symmetry/marginality preserved).
- Bootstrap SEs (B=1,000) of φ̂_i^R; bootstrap mean; PRSV_i = φ̂_i^R / SE(φ̂_i^R) — studentized, dimensionless, signal-to-noise: PRSV_i = φ_i^R/σ_i + ε_i/σ_i + o_p(1).
- Worth equations: xGÂ_h = P̂(Y_h=1|X_h); worth via in-sample sums for observed coalitions / out-of-sample single predictions for unobserved.

## Data sources named
- Ad-hoc ETL dataset: all shot-ending actions from Italian Serie A 2022/23 (20 teams × 38 matches), 8,421 shot actions.
- WhoScored (pass counts, player counts, avg pass distance, first-pass coordinates, player IDs/roles, timing — scraped), Understat via worldfootballR (shot X/Y, angle, situation, shot type, binary outcome, home/away, assist-man), Sofifa (offensive performance index from 29 KPIs via PLS-SEM, match-dated).
- Dataset "ad hoc"; no code released; no data download offered; reproducibility partial in principle (public sources), not in practice.

## Findings (numbers and facts, not vibes)
- xGA model diagnostics (bootstrap SEs 0.003–0.033): sensitivity 0.79, specificity 0.62, F1 0.28, precision 0.17, MCC 0.24, AUC 0.79, Brier 0.07. Feature importance: X (proximity) dominant, then shot angle; home/away and playersNb near zero. — SCHEME
- PRSV leaders (B=1,000): Osimhen 4.84 (192 actions), Giroud 3.81 (142), Leão 3.44 (201), Tomori 2.95 (defender), De Ketelaere 2.70, Díaz 2.48, Kvaratskhelia 1.53, Anguissa 1.48; negatives: Messias −4.39, Rrahmani −3.62, Bennacer −3.19, Lobotka −2.11. — COACHING
- PRSV vs Understat xGChain: Spearman ρ_S = 0.38 (Milan), 0.42 (Napoli) — moderate, indicating different dimensions rather than redundancy. — TRUST-SIGNAL
- PRSV vs finishing (G90−xG90): Leão top-right on both; De Ketelaere/Díaz/Tomori/Giroud high PRSV but negative finishing; Messias/Bennacer the opposite — contribution and finishing are separable. — OTHER
- Observed coalition cardinalities skew small (3–7 players typical) vs theoretical distribution peaking at 9–10 — the empirical justification for the restriction step. — OTHER
- Dataset descriptive stats: X mean 85.31, Y 50.84, shot angle 33.77°, passNb 6.47, playersNb 4.87, avg_pass_distance 27.28, plPerformanceIndex 84.81; situation 73% open play, 9% free kick, 1% penalty, 17% other; 54% home; 10% goals. AC Milan case: 505 shot actions, 414 observed coalitions (+1,800 out-of-sample); Napoli: 519 actions, 410 observed (+1,834 out-of-sample). — OTHER
- Limitations: in-sample xGA for observed-coalition worth vs out-of-sample for unobserved (asymmetric); shot-ending actions only; passing-network coalitions miss off-ball contributions; goalkeepers and penalties excluded; single season, two-team PRSV case study; no causal interpretation — PRSV is descriptive. — TRUST-SIGNAL

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The core gap this fills is player-level credit assignment with uncertainty quantification: GSE's EPA/xFP/CPOE assigns value to plays/units, not to individual players within a cooperative action — the bootstrap-SE + studentization step makes cross-player comparisons honest — COACHING, TRUST-SIGNAL.
- The NFL port sketched in the file: worth function = engine's existing EPA machinery on drives/plays; coalitions = players involved in execution (ball-carrier, blockers, route-runners from charting/tracking); start with rushing plays (cleaner participation sets) — OL, QB-BEHAVIOR, SCHEME.
- The empirical justification for restriction (observed coalitions skew far smaller than theoretical) applies directly to NFL: only a tiny subset of 11-man participation patterns is ever observed — SCHEME.
- The author's own suggested extension — replace passing-network coalitions with tracking-derived participation (off-ball runs, blocks sustained) — is exactly the NGS-tracking-based participation definition GSE could use once available — SCHEME.

## Engine-actionable? (yes/no + one-line what)
Yes — port the restricted-Shapley + bootstrap-SE + studentized-PRSV recipe to NFL rushing-play credit assignment on charted data (acceptance: bootstrap rank stability ≥0.8 across halves), with PRSV rankings informing OL/blocker valuation independent of box-score stats.
