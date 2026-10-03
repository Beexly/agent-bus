# docs/arxiv-program/research/2026-09-21/arxiv-deep/1311-simultaneous-estimation-ballpark-effects-team-defense.md
## What it is (1-2 sentences)
Wu, Yan & Chen (arXiv:2603.21163v2, stat.AP, 2026): simultaneously estimates MLB ballpark effects and team defensive quality from Statcast total-bases residuals in one weighted least-squares regression, yielding a "Defensive Bases Saved" (DBS) metric plus a standardized uncertainty index — and the new park estimates beat official MLB park factors on a home–away consistency test. Ledger verdict: ADAPT (replacement for REJECT 1101; ledger number 1311 is PROVISIONAL pending coordinator confirmation).
## Key metrics/methods (formulas where given, else "not specified")
- Two stages: (1) Total Bases Residual TBR = `R_i = TB_i − μ_g(i)`, where μ_g(i) is expected total bases given the batted ball's exit-velocity/launch-angle group; (2) WLS: TBR ~ ballpark indicators + defensive-team indicators (weighted), estimating both effects simultaneously; standardized index with 95% uncertainty intervals.
- Assumptions: EV/LA fully capture quality of contact; park and defense effects additive and separable on the TBR scale; weights handle heteroskedasticity.
- External validity: home–away consistency check; DBS benchmarked against OAA and Def via correlation.
## Data sources named
Statcast batted-ball data, 2015–2024; each batted ball carries exit velocity (EV), launch angle (LA), observed total bases, ballpark, and fielding team. Code available on GitHub; data public via Baseball Savant.
## Findings (numbers and facts, not vibes)
- Average 95% interval half-widths: 19.97 standardized points for park factors, 30.84 for defense. (OTHER — quantified estimation uncertainty scale)
- DBS correlates with Outs Above Average (OAA) at 0.5327 on average, vs 0.4409 with the Def metric — DBS tracks the Statcast gold standard more closely. (OTHER — defense-metric benchmarking)
- Where TBR-based ballpark estimates disagree with official MLB park factors, home–away scoring patterns of teams and their opponents are more consistent with the new estimates — an external validity win over the official factors. (OTHER — venue-effect measurement)
- Limitations: additivity assumption (park × defense interactions ignored), EV/LA measurement error, weighting-scheme dependence, MLB-specific. (OTHER — caveat)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The transferable asset is the venue-vs-personnel joint decomposition: the ledger prescribes porting the recipe to NFL — per-play expected-points residuals conditional on down/distance/field position, then joint WLS estimation of stadium effects and team unit effects, validated against market-implied venue adjustments via the same home–away consistency test. (OTHER)
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content in this file.
## Engine-actionable? (yes/no + one-line what)
yes — Build a GSE "Stadium Factor" index: compute per-play residuals vs pre-play expectation, jointly estimate stadium and unit effects via WLS with 95% intervals, and validate with the home–away consistency test where estimates disagree with market-implied venue adjustments (per ledger §11–14).
