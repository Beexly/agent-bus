# docs/arxiv-program/research/2026-09-21/arxiv-deep/0677-bye-bye-bye-advantage-estimating-the.md

## What it is (1-2 sentences)
Ledger of arXiv:2408.10867 (Lopez & Bliss 2024), "Bye-Bye, Bye Advantage" — Bayesian state-space estimation of rest-differential effects (MNF/Mini/Bye) in the NFL, testing whether the 2011 CBA (bye-week practice eliminated) killed the bye advantage and whether betting markets price rest correctly. Ledger verdict: ADAPT — the categorical MNF/Mini/Bye specification (with the 2011 structural break) is a directly adoptable, mispriced schedule feature family for GSE's spread model.

## Key metrics/methods (formulas where given, else "not specified")
- E[Y_{s,ij}] = θ_{s,i} − θ_{s,j} + μ_{HA,s} + α_MNF·I(MNF) + α_Mini·I(Mini) + α_Bye·I(Bye) (Model 1; Model 2 splits α_Bye,pre·I(S≤2010) + α_Bye,post·I(S≥2011)).
- Team strength: θ_{(s,i)} ~ N(γ·θ_{(s−1,i)}, σ²_teamstrength); home advantage trend: μ_{HA,s} = (α_HA_Trend·s + α_HA_Intercept)·I(HA).
- Models 3/4 identical with Z_{s,ij} = pregame point spread as outcome.
- Priors: θ_2002 ~ N(0, σ²), σ ~ HalfNormal(0,5²), γ ~ Uniform(0,1), rest α ~ N(0,5²).
- Fit in Stan: 4 chains × 3000 iterations, 1000 burn-in, weakly informative priors; model comparison via LOO ELPD; posterior P(α_Bye,post < α_Bye,pre) computed directly.

## Data sources named
5,679 NFL regular-season games, 2002–2023 (256/season 2002–2020, 272 in 2021/2023, 271 in 2022). Game info from internal NFL sources (authors are NFL employees, disclosed); point spreads from nflreadR (aggregate of sportsbooks). 52 games (0.9%) dropped for unclassifiable rest (COVID/weather reschedules). Rest edges: MNF 410 away/290 home, Mini 526, Bye 593. Code + data: https://github.com/ThompsonJamesBliss/restadvantageinamerfootball.

## Findings (numbers and facts, not vibes)
- Bye effect on point differential: pre-2011 +2.21 pts/game (95% CI 0.61–3.80, P(>0)=99.6% — "as beneficial as home field"); post-2011 +0.31 (CI −1.01 to 1.64, P(>0)=67.9%); P(decline)=96.6%.
- Market pricing of bye (Model 4): +0.39 pre (CI 0.00–0.78) → +0.97 post (CI 0.65–1.28), P(increase)=98.8% — markets now OVERVALUE the bye by ~0.66 pts vs reality (+0.31).
- Mini: PD +0.48 (CI −0.65 to 1.57, n.s.); market −0.06 (P(>0)=31.8%).
- MNF: PD +0.14 (CI −0.86 to 1.18, n.s.); market +0.37 (CI 0.14–0.61, P=99.9%) — market prices a nonexistent MNF edge.
- Home advantage 2023: PD +1.65, market +1.74 (markets near-perfect on HA); HA declined ~1 pt/game over the period.
- Postseason bye still real: 2011–2023, 34-10 SU (+7.34 avg PD), 21-22-1 ATS.
- Bye cover rates: 2002–2010 home 55.8%/away 56.9% → 2011–2023 home 44.6%/away 52.7% (edge flipped to anti-bye).
- Rest category definitions (from ledger): MNF = ≥1-day diff with disadvantaged team ≤6 days rest; Mini = one team 9–11 days rest with ≥2-day diff; Bye = did not play prior week.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Post-2011 bye market overvaluation (~0.66 pts gap between market +0.97 and reality +0.31) → anti-bye fade as a betting angle: OTHER
- Market prices a nonexistent MNF edge (+0.37 vs +0.14 real, n.s.) → second mispricing angle: OTHER
- Rest-differential categories (MNF/Mini/Bye ±1 home/away symmetric) as schedule features known pre-game: OTHER
- Home-advantage decline (~1 pt/game over 2002–2023) and markets being near-perfect on HA: OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — add I(MNF)/I(Mini)/I(Bye) rest indicators plus the market's implied rest valuation as spread-model features, re-estimated on 2015–2024, and run an anti-bye fade on teams getting >0.97 pts of market bye credit (adopt permanently if replication confirms post-2011 bye PD <1.0 with market pricing ≥0.5 pts above it).
