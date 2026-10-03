# arxiv-program/research/2026-09-21/arxiv-deep/1569-cyclists-fatigue-recovery-dynamics-pacing.md
## What it is (1-2 sentences)
Experimental Modeling of Cyclists Fatigue and Recovery Dynamics Enabling Optimal Pacing in a Time Trial (arXiv:2007.05507, Ashtiani et al. 2020). Fits a two-tank Critical Power/Anaerobic Work Capacity fatigue model with an experimentally measured asymmetric recovery law to a subject across 13 lab visits, then computes a dynamic-programming optimal pacing policy that beat the subject's own strategy by ~7.3% on a 10.3 km time trial.
## Key metrics/methods (formulas where given, else "not specified")
- AWC = (P−CP)·Δt; dW/dt = −(P−CP) for P>CP; dW/dt = −(P_adj−CP) for P<CP; P_adj = aP+b (recovery power-level law, fitted from interval tests; SmO₂ plateau ⇒ recovery depends on power level, not duration).
- P_max(t) = a₁W²(t) + a₂W(t) + CP (quadratic max-power envelope, replaces constant-800W assumption); DP optimal control min ∫dx/v(x) on 32-velocity × 100-energy grid, 100 m steps, <60 s runtime.
- Numbers: Sub 9 CP=234 W, AWC=9758 J; baseline 41:17 vs optimal 38:15 (3:02, ≈7.3% improvement); recovery rate < expenditure rate (a<1); concave P_max(W) (a₁<0).
## Data sources named
Lab experiments (Clemson/Furman), 9 subjects, CompuTrainer ergometer + Moxy NIRS SmO₂; 10.3 km Caesars Head route simulated. No public code/data.
## Findings (numbers and facts, not vibes)
- The optimal policy inserted low-power recovery intervals that regenerated the anaerobic reserve, enabling higher late-race power — the subject's own strategy never went to very low power.
- Single-subject calibration (models reported for Sub 9 only); lab ergometer ≠ field; W is a performance reservoir, not an injury predictor.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: player work-capacity state dynamics — the CP/AWC two-tank with asymmetric recovery is the canonical quantitative fatigue formalism for snap-load / load-management modeling.
- COACHING: optimal pacing with recovery inserts → snap-count and load-management policy for practice/game exertion budgets (INFERENCE).
- TRUST-SIGNAL: concave P_max(W) "explosiveness ceiling" feature for injury-risk and 4th-quarter performance-decline models (backtest-gated).
## Engine-actionable? (yes/no + one-line what)
Yes — build per-position-group work-capacity state W via NGS exertion proxy (dW=±(P−CP)/(P_adj−CP) switching) feeding availability/injury-risk and DFS value models; ADOPT if 2024 backtest beats rolling-load baseline by ≥2 AUC points on soft-tissue injuries with recovery < expenditure confirmed.
