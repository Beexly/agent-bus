# arxiv-program/research/2026-09-21/arxiv-deep/0404-functional-ratings-in-sports.md
## What it is (1-2 sentences)
Full-paper ledger read of Functional Ratings in Sports (arXiv:1908.00939v1): extends scalar least-squares team ratings (Stefani/Harville/Massey lineage) to functional ratings β_i(t) — team i's schedule-adjusted average point differential as a function of game time — fit on the 2018–19 NCAA D1 men's basketball season. Reader verdict: REJECT — no predictive validation whatsoever, and the functional twist has no NFL applicability (discrete scoring, 32 teams × 17 games).
## Key metrics/methods (formulas where given, else "not specified")
- Model: Xβ(t) = d(t), pointwise least squares per second: β_i(t) − β_j(t) = d(t); home variants d(t) = β_i(t) − β_j(t) + α(t) or + α_i(t)
- Constraint: Σ_i β_i(t) = 0 ∀t; L² objective ‖r(t)‖ = ∫₀ᵀ (Xβ(t) − d(t))ᵀ(Xβ(t) − d(t)) dt; solved independently per second, order-4 B-spline smoothing after
- Decomposition: β_i(t) = d̄_i(t) + sos_i(t) (average point differential + strength of schedule)
- Scalar rating: (∫₀ᵀ w(t)β_i(t)dt)/(∫₀ᵀ w(t)dt); model selection via per-second ANOVA F-tests (Harville & Smith style)
## Data sources named
2018–19 NCAA Division I men's college basketball season: 353 teams, 5,603 games; per-game scoring summaries scraped from Sports-Reference.com, ESPN.com, school sites; cross-validated against MasseyRatings.com complete game list; one game (Jackson State at Alabama A&M, 2019-01-05) had no scoring summary; no compiled dataset released
## Findings (numbers and facts, not vibes)
- Model selection: Model 1 vs 2 p-values consistently < 0.1 except first minute → constant home advantage needed; Model 2 vs 3 p-values consistently > 0.1 except first 20 s → team-specific home advantage rejected; Model 2 adopted
- Home-court effect: end-of-game ≈ 3 points (80% CI)
- Scalar ratings (w=1): Gonzaga 14.98 (#1), Duke 13.31 (#2), Virginia 12.99 (#3), North Carolina 12.77 (#4), Michigan 12.45 (#5), Michigan State 11.87 (#6); bottom Chicago State −12.89 (#353)
- End-of-game-only ranking reorders middling teams: Central Florida 8.16 (#22 → #40), Illinois 5.58 (#52 → #72), Stanford 1.78 (#132 → #92, +40), Northern Colorado −0.24 (#167 → #191)
- Strength of schedule scalar: Kansas 6.10 (#1), Michigan State 6.00, Purdue 5.91, Oklahoma 5.87, Duke 5.80; bottom Morgan State −5.01 (#353)
- Authors' own caveat: predicted game-flow curves "probably not the most accurate representation of an actual game" — cannot reproduce realistic scoring runs
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: descriptive curve-fitting reference only — duplicates the already-inventoried least-squares rating lineage (Massey, Sagarin, Colley, Harville, Stefani); the β = avg-differential + SOS decomposition is standard least-squares algebra already implicit in every Massey-style implementation
- OTHER (hypothetical): the functional-concurrent-regression-with-win-probability-link improvement experiment (curve shape predicting comeback probability beyond current margin) would be the only variant touching GSE's thin in-play lane — INFERENCE that it is likely null, per the paper's own caveats
## Engine-actionable? (yes/no + one-line what)
No — zero predictive validation, overtime data deleted (distorts close-game ratings), smoothing chosen by "trial and error," and NFL's discrete scoring with 8–10 scoring events per game makes the functional twist meaningless; kept in corpus only as a least-squares-rating reference.
