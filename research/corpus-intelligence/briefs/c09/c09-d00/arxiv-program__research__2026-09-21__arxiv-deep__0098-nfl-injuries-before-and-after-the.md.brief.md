# arxiv-program/research/2026-09-21/arxiv-deep/0098-nfl-injuries-before-and-after-the.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:1805.01271 (Binney et al. 2018): mixed Poisson interrupted-time-series study of whether the 2011 NFL CBA's practice restrictions caused a sustained increase in injuries, using the Football Outsiders injury database (2007–2016). Verdict in the file: ADAPT — the Poisson ITS design is the template for structural-break testing of NFL regime changes in GSE backtests; the conditioning/non-conditioning injury taxonomy is reusable for injury-adjustment features.

## Key metrics/methods (formulas where given, else "not specified")
- Mixed Poisson interrupted time series at player-season level (R 3.3.2; SAS 9.4):
  ln(Y_ij) = ln(G_ij) + β0 + β1·t_ij + β2·CBA_ij + β3·PostCBA_ij + β4·Age_ij + b0i + e_ij,
  where t_ij = Year−2007; CBA_ij = 1 if ≥2011; PostCBA_ij = 0 for 2007–11 else Year−2011; ln(G_ij) = offset for games at risk; b0i = player random intercept.
- exp(β₂) = CBA level effect; exp(β₁) = pre-CBA annual trend; exp(β₁+β₃) = post-CBA annual trend.
- Deliberate use of counts rather than rates (practices fell → exposures fell → rates could rise even as counts fell).
- Rise/fall criterion: sustained change ≥1 injury per 1,000 athlete-exposures (≈6.7% count change) for ≥3 seasons.
- Conditioning-dependent injuries (soft-tissue: Achilles, calf, groin, hamstring, biceps/triceps, pectoral, quadriceps, ACL; 51-type taxonomy Table A1, classified by an NFL team physician) vs non-conditioning (fractures, high ankle sprains, face/eye/Lisfranc/organ/neck/rib trauma); non-ACL knee/ankle = "unknown".
- Three-mechanism framework (Table 1): fewer practices → (1) more rest → fewer injuries; (2) poorer conditioning → more injuries; (3) fewer exposures → fewer injuries — differential effects on conditioning vs non-conditioning counts.
- Four sensitivity analyses: include minor injuries; include preseason; reclassify knee/ankle unknown→non-conditioning; hamstrings only. Fit checked by summing predicted vs actual player-season counts per year; no holdout, inference via 95% CIs.

## Data sources named
Football Outsiders injury database (prospective since 2007; weekly injury reports + IR list + media supplements), 2007–2016: 19,803 player-seasons, 22,331 injuries. Analysis set: 7,425 regular-season game-loss non-head non-illness injuries. Excluded: 2,643 preseason (11.8%), 11,399 non-game-loss (51.0%), 685 head (4.1%), 179 illnesses (0.8%). Player-season covariates: age, height, weight, games played. No player-level download link stated; code not stated (R/SAS).

## Findings (numbers and facts, not vibes)
- Game-loss injuries: 701 (2007) → 804 (2016), +15%; minor injuries 754 (2007) → 1,169 (2012), +55%, then flat.
- Conditioning injuries: 197 (2007) → 271 (2011), +38%, then plateau 220–240/season (2012–2016); non-conditioning −37% in first 3 CBA years, back to historic levels 2014–2016.
- Table 2 rate ratios (counts): All — pre trend 1.03 (1.00–1.07), CBA 0.93 (0.83–1.03), post trend 1.03 (1.01–1.04); Conditioning — CBA 1.05 (0.87–1.27) ns; Non-conditioning — CBA 0.90 (0.69–1.16) ns. Games missed: All — CBA 0.90 (0.85–0.96); pre trend 1.13 (1.11–1.16) → post trend 1.04 (1.03–1.05).
- Hamstrings (Table 3): pre-CBA trend 1.12 (1.02–1.23) → post 0.96 (0.92–1.01); games-missed CBA effect 0.73 (0.61–0.88) — the one clearly beneficial signal.
- 2011-only conditioning bump consistent with post-lockout Achilles spike (12 ruptures in 29 days, Myer et al. 2011) — transient, not sustained.
- Conclusion: no sustained increase in conditioning or non-conditioning injuries post-2011 CBA. Headline null depends on the continued-trend counterfactual (models assuming no trends make the CBA look detrimental); concurrent safety changes (kickoff moved up, defenseless-player expansion) confound causal claims.
- Explicit corpus overlap (not duplication): repo's 2408.10867 found the bye-week advantage vanished post-2011 CBA — same regime change, performance effects vs injury burden; complementary.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: practice-load regime effects on player availability — the conditioning/non-conditioning taxonomy feeds weekly availability modeling (soft-tissue absences carry different predictive information than contact injuries; weight injury discounts by conditioning share of a team's inactive list).
- OTHER: the ITS Poisson design is the structural-break QA harness — test every suspected NFL regime change (2021 17-game season, 2023/2024 kickoff rules, the 2011 CBA itself in long backtests) on GSE backtest residuals via the same level-shift β₂ + trend-break β₃ parameterization.

## Engine-actionable? (yes/no + one-line what)
yes — Adopt the Poisson ITS parameterization as GSE's backtest structural-break harness (positive-control test: detect the 2011 bye-week regime effect from 2408.10867 on 2021 17-game-season breaks); port the conditioning/non-conditioning taxonomy into weekly injury-availability features.
