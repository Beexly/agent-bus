# arxiv-program/research/2026-09-21/arxiv-deep/1057-tournament-draw-uncertainty.md
## What it is (1-2 sentences)
Defines and estimates *draw uncertainty* — the standard deviation of a team's qualification probability across random tournament draws — for the Champions League old vs new format, disentangling the format's effect from the effect of inaccurate seeding. The new format cut draw uncertainty 53% on average, mostly by being robust to bad UEFA seeding rather than by a pure format advantage.
## Key metrics/methods (formulas where given, else "not specified")
- Draw uncertainty for team i: SD_i = √((1/D)Σ_d (q_id − q̄_i)²), q_id = qualification probability under draw d
- Estimation: D=1,000 random draws × 1,000 outcome simulations each (independent Poisson from Elo expectancies), bootstrap CIs
- Decomposition: re-run under perfect (Elo) seeding with no playoffs to isolate pure format effect
- Appendix integer program for constrained draw generation
## Data sources named
UEFA Champions League 2024/25 teams; Elo ratings as strength inputs; 1,000×1,000 simulated design
## Findings (numbers and facts, not vibes)
- New UCL format reduced draw uncertainty 53% on average for 2024/25
- Most of the reduction comes from robustness to inaccurate UEFA seeding; under perfect Elo seeding with no playoffs, the new format's pure advantage is much smaller ("the old format's problem wasn't the format, it was bad seeding")
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: futures pricing — draw uncertainty is a first-class, missing component of outright-price uncertainty; seeding-error vs format-effect attribution changes the story of post-draw price moves; draw-reaction content material (who gained/lost from a draw and why)
## Engine-actionable? (yes/no + one-line what)
Yes — compute per-team draw-uncertainty SDs alongside futures prices and replicate the seeding-error decomposition; gate: median team's SD > ~15% of its mean outright probability to ship the decomposition in the pricing pipeline.
