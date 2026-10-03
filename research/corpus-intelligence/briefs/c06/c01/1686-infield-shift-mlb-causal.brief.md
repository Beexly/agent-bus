# arxiv-program/research/2026-09-21/arxiv-deep/1686-infield-shift-mlb-causal.md
## What it is (1-2 sentences)
Estimates the causal effect (ETT) of MLB's infield shift on change in run expectancy via three estimators with different identifying assumptions — k:1 propensity matching, IPTW, and 2SLS IV with a team's season-to-date shift propensity as a preference-based instrument. All three agree the shift was effective vs left-handed batters (~10⁻² runs per targeted PA, ≈10⁻¹ runs/game at peak — a real but imperceptible advantage); only IV finds an effect vs righties.
## Key metrics/methods (formulas where given, else "not specified")
- Estimand: ETT = E[Y^{t=1}−Y^{t=0}|T=1]; outcome ΔRE = RE_final − RE_initial + Δscore per PA
- Matching: k:1 NN on linear propensity score, caliper 0.15 SD, 3:1 ratio, ≤5 re-uses, exact year match, run by batter handedness; linear-regression outcome + g-computation, robust SEs
- IPTW: Horvitz–Thompson weighting-by-the-odds for ETT; 10,000 bootstraps
- IV: instrument = fielding team's season-to-date shift propensity; 2SLS per year, weighted average over years by treated-PA share (allows instrument×year interaction)
- IV identification: relevance, effective random assignment, exclusion, no IV effect modification; balance: max |SMD| < 0.05
## Data sources named
MLB Statcast (public) via Petti & Gilani scraper, 2015–2022, pitch-level aggregated to PA; covariates: handedness, launch speed/angle/spray angle cumulative summaries, wOBA/BABIP/BB/K, pitcher release metrics, team shift rate, year; no analysis code linked
## Findings (numbers and facts, not vibes)
- Shift effective vs LHB: 95% CI upper bounds <0 in every method; point estimates lower for LHB than RHB in all methods; RHB: only IV suggests non-zero effect
- Magnitude: most conservative ≈10⁻² runs per targeted LHB PA; LHB ≈35–39% of team PAs; shift used in up to 55% of those at peak → at most ≈10⁻¹ expected runs/game suppressed
- First stage: F = 1.18×10⁵ unconditioned; partial F = 5.74×10⁴ conditional (year + pitcher measures)
- 0.25-SD caliper without replacement would have dropped 29,788/149,288 ≈ 20% of treated LHB observations
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: triangulation blueprint for causal evaluation of NFL strategic/rule interventions from observational data — e.g., 2023+ kickoff rule change effect on touchback rate/field position/scoring (matching/IPTW on kick covariates + IV with kicker-team historical touchback propensity + DiD across the 2023 boundary); preference-based instrument ports to NFL coaching tendencies (coach's historical 4th-down aggressiveness as instrument for a go-for-it decision); improvement: doubly robust / double-ML ETT with cross-fitted nuisances; estimate the ATE for the policy question
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the triangulation template on nflverse kickoff plays 2020–2024 (~2 weeks); gate: IPTW and IV sign agreement, post-weighting |SMD|<0.1, first-stage partial F>100, placebo-year (2021) ETT 95% CI covering 0; reject if estimators disagree in sign or placebo fails.
