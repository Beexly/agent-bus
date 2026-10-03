# docs/arxiv-program/research/2026-09-21/arxiv-deep/1059-nba-player-fatigue-schedule-effects.md
## What it is (1-2 sentences)
Ledger read of Austin Stephen, Matthew Yep, Grace Fain, "Tired of Misattribution: Modeling Player Fatigue in the NBA" (arXiv:2112.14649v1): a deliberately skeptical three-part observational study (workload proxies, Kawhi Leonard load-management case study, structural schedule-fatigue regressions) asking whether schedule-based fatigue proxies predict NBA game outcomes. Verdict: ADAPT as weak-but-useful discipline.
## Key metrics/methods (formulas where given, else "not specified")
OLS regressions of game net rating on fatigue proxies: rest differential, travel distance/direction, back-to-back and 3-in-4 indicators. No explicit equation given (stated verbally). Target: game net rating. Tooling: nbastatR, airball, NBAr R packages; Second Spectrum player distance data.
## Data sources named
NBA seasons via nbastatR; Second Spectrum tracking distance data.
## Findings (numbers and facts, not vibes)
- Significant schedule coefficients: rest differential **+0.35 game net rating per additional rest day**; three-hour westward travel **−1.740**; third game in four days **−1.290**.
- Structural model explains **under 0.1% of residual variance (R² < 0.001)** — schedule fatigue is real but tiny at game level.
- Most fatigue proxies show negligible or ambiguous relationships (the paper's headline null/discipline result).
- FLAW flagged in-file: using end-of-season net rating as a regressor leaks future information — GSE must re-estimate on pre-game ratings only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: rest/travel fatigue priors for game models (NBA first; NFL transfer possible); calibration-discipline device (null prior bar: every fatigue claim must beat the "<0.1% variance" baseline).
## Engine-actionable? (yes/no + one-line what)
yes — add rest-differential, westward-travel-hours, and 3-in-4 indicators to the NBA game model as wide-variance Bayesian priors using the paper's coefficients, gated behind a rolling-origin log-loss/Brier test on ≥2 held-out seasons (re-estimated leakage-free on pre-game ratings).
