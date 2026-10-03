# docs/arxiv-program/research/2026-09-21/arxiv-deep/1510-denominator-gradient-injury-rates.md
## What it is (1-2 sentences)
Deep-read ledger entry on Ricou & Mahony (2026, arXiv:2608.11228v3): playing time tracks recent exposure in 15 men's and women's football leagues, so dividing injury counts by recorded minutes divides away part of the exposure-injury association — quantified via the "denominator gradient" gamma. Verdict: ADAPT; replacement for rejected pediatric ACWR study [1491]; fills the causal_injury lane.

## Key metrics/methods (formulas where given, else "not specified")
- Denominator identity: b_off = b_app - gamma, where gamma = slope of log(recorded minutes) on recent exposure.
- Poisson log E[y] = log(m) + a + b*x vs per-appearance logistic; identifying comparison = fixed-90 vs recorded-minutes offset (only offset changes).
- Negligible threshold: gamma < 0.05 (at gamma=0.05 measured attenuation ratio 1.20, ~4.1% of rate ratio).
- Gamma fitted as OLS of log recorded minutes on previous-seven-day club minutes per 90, weekly/half-weekly calendar-phase terms, player-clustered SEs; 1,000 player-resamples for intervals.
- Attenuation-vs-gamma traced by sweeping a floor on recorded minutes (Figure 2).

## Data sources named
Retrospective observational cohort from public records: 88,573 appearances by 1,208 established EPL players (1 Jul 2017-7 Apr 2025); replication on 628,487 men's + 29,799 women's appearances across 15 European leagues; women's data from Soccerdonna match reports; derived de-identified data at DOI 10.5281/zenodo.21940596; analysis code at github.com/Gustolandia/football-denominator-gradient.

## Findings (numbers and facts, not vibes)
- Reference cohort: changing only the offset moved the seven-day rate ratio from 1.27 (95% CI 1.11-1.44, fixed-90) to 1.09 (0.95-1.25, recorded minutes) — log-scale attenuation 0.151 (0.140-0.163); two-thirds of the excess association above the null lost (0.09 of 0.27 survives).
- Outcome truncation explains ~none of it (-0.095% of attenuation; gamma 0.303 -> 0.304 with truncation removed). Exposure dependence explains it: pooled gamma = 0.303; within starters, attenuation all but vanishes (delta = 0.139, 0.128-0.150).
- Gradient across leagues: 0.431-0.655 men's (median 0.536), 0.444-0.647 women's (median 0.466) — all above 0.05 in all 15 leagues.
- Restricting to starters brought gamma below threshold in 8/8 men's leagues (0.020-0.031) but only 5/7 women's (Spain bound 0.050, Sweden 0.058). Adjusting for role instead of restricting left 0.071 of the 0.151 attenuation (6x what restriction leaves).
- Negative control (31-37 days prior): gradient 0.201, ratio 1.99 vs 2.01. Independent-source attribution: 24 of 27 resolved same-day records confirmed (88.9%).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: workload-normalized injury-rate methodology (availability sub-model guardrail); the gamma regression is a cheap audit tool for any per-snap injury-rate claim.
- OTHER: NFL caveat stated in file — starter/substitute stratification is soccer-shaped; NFL analogue needs snap-share-decile stratification and league-specific verification.

## Engine-actionable? (yes/no + one-line what)
yes — add the gamma regression (OLS of log snaps on prior-N-game workload, player-season-clustered SEs) as a reporting discipline: if gamma lower bound > 0.05, report injury risk per game instead of per snap, or restrict to every-down players and re-verify.
