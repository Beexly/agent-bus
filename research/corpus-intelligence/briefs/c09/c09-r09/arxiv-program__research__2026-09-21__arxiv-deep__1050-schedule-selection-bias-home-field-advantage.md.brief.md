# arxiv-program/research/2026-09-21/arxiv-deep/1050-schedule-selection-bias-home-field-advantage.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:1806.08059v2 (Andrew T. Karl), "Avoiding Bias Due to Nonrandom Scheduling When Modeling Trends in Home-Field Advantage" — a methods paper showing that mixed/random-effects models of team strength absorb scheduling bias into home-field estimates, while fixed-effects models stay unbiased. The ledger gives a low-cost implementation rule for GSE's home-field estimation module.
## Key metrics/methods (formulas where given, else "not specified")
- Score-differential model: y_{ijt} = μ_t + α_i − α_j + ε_{ijt}, where μ_t = home-field advantage in season t, α_i = team effects.
- Mixed-effects variant: α_i ~ N(0, σ²); estimate of μ_t is biased when E[α_i | schedule_i] ≠ 0 (home-game assignment depends on team strength). Fixed-effects variant: α_i as free parameters; μ̂_t remains unbiased under nonrandom scheduling.
- Diagnostic: correlation between team strength and share of home games (and of rest/travel advantages) as a screening signal for bias risk.
- Simulation: true μ = 3; schedules generated with strength-dependent home/away assignment; μ̂ compared under mixed vs fixed specifications across sports.
## Data sources named
Six sports, seasons 2000–2017 (college football FBS, men's and women's college basketball among the named series; pro and college coverage) plus simulated schedules with known true HFA = 3. Code/data not stated. Paper notes its ad hoc diagnostics were superseded by arXiv:2003.08087 (follow-up read before productionizing the diagnostic).
## Findings (numbers and facts, not vibes)
- Simulation, true HFA = 3: mixed-effects estimates came out at 3.37 (FBS college football), 3.26 (men's college basketball), 3.13 (women's college basketball); fixed-effects recovered 3.00 exactly.
- Applied 2000–2017: apparent HFA trends can be artifacts of changing scheduling practices rather than real changes in the value of playing at home.
- Core lesson for GSE: any home-field estimate built on random/mixed team effects is vulnerable to schedule-selection bias; NFL schedules are deliberately nonrandom (strength-of-schedule balancing, primetime flexing, divisional rotation), so fixed-effects is the safe default for HFA work.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (engine architecture): GSE's home-field estimates feeding spread/total baselines must use fixed team effects, not random/mixed effects — a modeling-specification change, not new infrastructure.
- OTHER (engine governance): cheap nightly diagnostic — correlation between a team's estimated strength and its home-game share / rest-differential; if |correlation| is large, flag mixed-effects HFA as suspect and fall back to fixed effects.
- OTHER (calibration): historical HFA trend series should be recomputed with fixed effects; published trends may partly reflect scheduling-practice changes (neutral-site/international games) rather than real home advantage erosion.
## Engine-actionable? (yes/no + one-line what)
Yes — switch the HFA estimation module to fixed team effects and add the strength-vs-home-share nightly bias diagnostic; numeric gate: replicate on NFL 2020–2025 (mixed vs fixed HFA estimates must differ materially with the paper's simulation-consistent direction), and success criterion is fixed-effects HFA yielding ≥0.2-point lower MAE on closing-spread prediction.
