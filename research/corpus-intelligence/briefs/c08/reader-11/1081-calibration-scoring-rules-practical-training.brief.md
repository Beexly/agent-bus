# docs/arxiv-program/research/2026-09-21/arxiv-deep/1081-calibration-scoring-rules-practical-training.md

## What it is (1-2 sentences)
Ledger of arXiv:1808.07501v2 (Spencer Greenberg, calibration_uncertainty lane, verdict ADAPT). It introduces a "Practical" transform of proper scoring rules that stays proper while making scores human-legible: 0 points = random guess, positive iff correct, bounded losses, capped confidence.

## Key metrics/methods (formulas where given, else "not specified")
Practical transform (eq. 9): S*(p,c) = S_max·(S(p,c)−S(p_rand,c))/(S(p_max,1)−S(p_rand,1)), proved proper on [p_rand,p_max]. Log specialization with s_max=10, p_max=0.99, s_min = −((10·log(99/50))/log(50)) = −57.26893683880667, δ=0.4 interval expansion, c=100 (Distance rule) / c=ln(100)=4.60517 (Order-of-Magnitude rule). Prediction-interval rules S_dist / S_mag are admittedly improper (centrality bonus) — traded off for UX. Proposed numeric gate: Spearman rank correlation ≥ 0.95 vs raw log score with worst loss capped at s_min (−57.27).

## Data sources named
No formal dataset. Evidence is the author's calibration-training program user testing — sample sizes, protocols, and statistics not reported (file flags these as anecdotal).

## Findings (numbers and facts, not vibes)
- Practical log rule yields: 0 points for a random guess, positive points iff correct, max loss floored at −57.26893683880667, max 10 points for a correct 99% forecast.
- The transform is base-independent in the binary case (reduces to a linear transform of the log score).
- Distance/Order-of-Magnitude interval rules fix five defects of the linear (eq. 7) and log (eq. 8) interval rules (blowups, incomparable β levels, no "no information" zero, sign/correctness mismatch, no centrality credit) at the cost of properness, which the author explicitly concedes.
- Parameters (s_max=10, p_max=0.99, δ=0.4, c=100) are set by anecdotal user testing, not validated optima.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: forecaster-calibration scoring layer — proper bounded rule for analyst pick-confidence and range forecasts; calibration training for analysts/cappers.
- OTHER: public-facing forecaster leaderboard design (0 = random guess, sign = right/wrong).

## Engine-actionable? (yes/no + one-line what)
Yes — implement the Practical log rule (s_max=10, p_max=0.99) as GSE's analyst forecaster-leaderboard and calibration-training scorer, gated on Spearman ≥ 0.95 rank preservation vs raw log score.
