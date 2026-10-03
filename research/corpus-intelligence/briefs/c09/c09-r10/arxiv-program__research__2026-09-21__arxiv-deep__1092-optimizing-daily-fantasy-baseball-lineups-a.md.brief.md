# arxiv-program/research/2026-09-21/arxiv-deep/1092-optimizing-daily-fantasy-baseball-lineups-a.md
## What it is (1-2 sentences)
Deep-read ledger of Grody, Bansal & Ashqar 2411.11012 (PuLP binary integer program maximizing projected FanDuel MLB fantasy points under salary/position constraints). Verdict: REJECT — a naive maximize-projected-points IP with inconsistent data descriptions, misnamed metrics, and no contest-level validation; strictly dominated by ledger 1091 (1604.01455).
## Key metrics/methods (formulas where given, else "not specified")
- Objective: max Σ_p proj_p · x_p, x_p ∈ {0,1}, subject to Σ salary_p · x_p ≤ cap and positional requirements
- Diversification: crude exposure-cap iteration loop (remove capped-exposure player, re-solve); no covariance/ownership/variance modeling
## Data sources named
Described inconsistently: "SaberSim data from 2019"; 408 players over June 1–11 in one section vs a 30-day span in results; schema player/projected points/actual points/salary; data not public; authors state they lacked historical contest access.
## Findings (numbers and facts, not vibes)
- Generated lineups averaged 144.6 projected points vs hindsight-optimal actual 251.9 — a 107.3 gap dominated by projection error, not optimizer quality
- Average per-player projection 8.41 vs actual 9.55; average salary ~$3,903
- Reports "10.510" as "mean squared error" but describes it as average actual-minus-projection difference (apparently MAE, misnamed); reports "0.19" as "R-mean-squared," a nonstandard/undefined metric
- No time-ordered backtest against any baseline optimizer; maximizing mean projection is documented in the file as known-suboptimal for GPPs (see ledger 1091)
- Replaced by ledger 1300 in the same lane
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (DFS optimizer — rejected; negative example). No content on QB behavior, coaching, OL, trust signals, or scheme.
## Engine-actionable? (yes/no + one-line what)
No — REJECT; the only salvageable element (a 10-line exposure-cap diversifier) is superseded by ledger 1091's portfolio-theory/overlap-cap optimizer.
