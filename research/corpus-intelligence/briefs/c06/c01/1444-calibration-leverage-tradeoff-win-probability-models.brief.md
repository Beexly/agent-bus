# arxiv-program/research/2026-09-21/arxiv-deep/1444-calibration-leverage-tradeoff-win-probability-models.md
## What it is (1-2 sentences)
Builds an exactly solvable Markov win-probability model for T20 cricket chases (backward induction over the acyclic (balls, wickets, runs-required) state graph), uses its martingale property for exact leverage/WPA attribution, then diagnoses why it is systematically miscalibrated — proving exact attribution and calibrated probability are mutually exclusive on the same state object, with unmodelled 3–5-event sequential scoring dependence as the mechanism.
## Key metrics/methods (formulas where given, else "not specified")
- Recursion V(s) = Σ_o p_o(s)·V(s'_o), verified to machine precision 10⁻⁹; martingale: E[V(next)|s]=V(s)
- Leverage: swing(s) = Σ_o p_o(s)|V(s'_o)−V(s)| (conditional MAD); LI normalized so average delivery = 1 (reference 0.0170 WP/ball)
- WPA: ΔV to batsman, −ΔV to bowler, zero-sum per ball; telescopes to y − V(first ball); state-conditional de-drifting (WP bins width 0.02)
- One-ball distribution p_o(s) from RRR bins (6) × wickets × innings phase, two-level Dirichlet-style shrinkage, exponential recency weights (half-life 0.75 seasons)
- Permutation decomposition separating innings heterogeneity from sequential dependence; paired match-clustered bootstrap on log-loss differences
## Data sources named
IPL ball-by-ball 2008–2026 (Cricsheet-derived), second-innings chases: 1,162 chases, 130,029 legal deliveries; train = all but 2024–2026 (112,019 balls); held-out = 2024–2026 (18,010 balls, 164 matches, realized win rate 0.498)
## Findings (numbers and facts, not vibes)
- Held-out: RRR Markov+era 0.1489/0.4741/0.1310 (Brier/log loss/ECE); logistic on RRR alone 0.1404/0.4379/0.0773 — beats the full Markov model; XGBoost full 0.1490/0.4607/0.0847
- Unconstrained XGBoost on identical (b,w,r) beats exact Markov by 0.094 nats (CI [0.026,0.174]); striker balls-faced +0.0004 nats (CI [−0.0032,+0.0035]) — decisive null
- Calibration gap worst at RRR 10–12: −0.112 (18%-rated chases won 29%); held-out trough −0.267 at RRR 8–10
- Permutation decomposition: heterogeneity explains ~18%; residual 3–5-ball scoring persistence (lag-1 excess +0.036, lag-3 +0.021, lag-5 +0.008; null by lag 10–20); wickets anti-cluster (lag-1 −0.009)
- Block bootstrap K=20 reduces slice gap 0.0613→0.0451 (26%), 6/6 seeds, saturating at K≈20
- Leverage: death-over mean LI 1.59 (final over 2.67); Dhoni clutch +0.018/ball (CI [+0.004,+0.032]); era drift correction −0.057 nats (CI [−0.079,−0.035])
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: two-surface architecture — fitted/calibrated WP surface for reported probabilities and pick math; exact-martingale surface for clutch/player attribution (QB leverage, high-leverage moment content) with published error bounds; permutation decomposition of NFL play-level residuals to separate drive momentum from game heterogeneity
- OTHER: explicit error-bound publishing discipline for attribution surfaces; proposed third surface: regime-switching (hidden hot/cold) generative model as future build
## Engine-actionable? (yes/no + one-line what)
Yes — build exact-martingale NFL WP surface (time/score/down/distance/field/timeouts) + fitted reporting surface on nflverse (3–5 days + 2 days diagnostics); gate: exact surface shows over-dispersion signature (fitted beats it by ≥0.02 ECE held-out) AND permutation decomposition finds lag-1..3 dependence AND leverage separates clutch roles — else one surface suffices.
