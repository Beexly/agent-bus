# arxiv-program/research/2026-09-21/arxiv-deep/0955-next-gen-scrapy-nfl-tracking-images.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:1906.03339 — "next-gen-scraPy: Extracting NFL Tracking Data from Images to Evaluate Quarterbacks and Pass Defenses" (Mallepalle, Yurko, Pelechrinis, Ventura, 2019). Builds a computer-vision pipeline to recover raw pass locations from NFL Next Gen Stats pass-chart images, then models league/QB/defense completion-percentage surfaces by field location and derives CPAE (completion percentage above expectation); verdict ADOPT.
## Key metrics/methods (formulas where given, else "not specified")
- Shrinkage surface (2-D Naive Bayes): P̂*_G(Complete|x,y) = [N_g·f̂_g(x,y)·P̂_g + N_Median·f̂_NFL(x,y)·P̂_NFL] / [N_g·f̂_g(x,y) + N_Median·f̂_NFL(x,y)] — weight shifts from league prior to group data as attempts N_g grow.
- CPAE_g = ∫_X∫_Y P̂*_{g,league}(Complete|x,y)·f̂_g(x,y) dx dy (spatial-density-weighted integral of above-league-average completion surface).
- League-wide completion: GAM for P(Complete|x,y) smooth in distance-from-LOS and distance-from-field-center; attempt density via 2-D KDE.
- Image pipeline: K-Means++ clustering to identify passes/field locations → DBSCAN noise removal; greedy record linkage validates against Big Data Bowl tracking.
## Data sources named
NGS pass-chart images scraped from nextgenstats.nfl.com (2017–2018, 500+ games); >27,000 passes modeled; validation via NFL Big Data Bowl tracking data (first six weeks of 2017). Code + dataset: https://github.com/ryurko/next-gen-scrapy.
## Findings (numbers and facts, not vibes)
- Scraped coordinate accuracy: median deviation 1.7 yards vs Big Data Bowl tracking.
- League-wide 2018: 66.5% of targets within 10 yards of LOS, 89.2% within 20; median predicted completion 76.8% (≤10 yd), 69.7% (≤20), 28.0% (beyond 20); deep middle 30.5% vs deep sidelines 22.7%.
- CPAE vs official NFL NGS CPAE: ρ = 0.81 (2017), 0.91 (2018) — achieved with a strictly weaker model (no play context: no down/distance/pressure/coverage).
- CPAE year-over-year stability: 0.41 (p < 0.05) across qualifying QBs.
- 2018 QB CPAE leaders: Brees +6.14%, Fitzpatrick +3.42%, Foles +3.42%, Wilson +3.39%, Ryan +3.22%, Wentz +3.08%; worst: Bortles −5.04%, Driskel −4.83%, Rosen −4.54%.
- 2018 defense CPAE (negative = better): Ravens −5.24%, Bears −2.43%, Rams −2.35%; worst: Buccaneers +6.89%, Falcons +4.31%; 4 of top 5 CPAE defenses made the 2018 playoffs.
- Defense surfaces agree with DVOA (2018 Bears −26.9% DVOA below-average allowed completion field-wide).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ρ = 0.91 match with official NGS CPAE from public data with a weaker model — TRUST-SIGNAL (open-data replication of a proprietary metric; verifiable benchmark)
- CPAE stability 0.41 year-over-year — QB-BEHAVIOR (QB accuracy is a persistent but noisy skill; selection bias caveat noted)
- Median coordinate deviation 1.7 yards — TRUST-SIGNAL (measurement accuracy of pass-location extraction)
- 4 of top 5 CPAE defenses made 2018 playoffs — SCHEME (pass-defense quality as playoff-correlated team signal)
- Defense surfaces agree with DVOA — OTHER (cross-validation of independent defensive metrics)
- League-wide completion-by-location profile (deep sidelines 22.7% vs deep middle 30.5%) — SCHEME (route/area value priors)
## Engine-actionable? (yes/no + one-line what)
yes — Replicate the open-data CPAE pipeline (league GAM + KDE + Naive Bayes shrinkage, §4 formulas) on nflverse pass data as a verifiable QB/defense benchmark; acceptance gate ρ ≥ 0.80 vs official NGS CPAE on a full season; improvement path: condition GAM on down/distance/pressure and test whether context-conditioned CPAE beats raw CPAE at predicting next-season EPA/dropback (paper impl spec §11–14, ~1 day core pipeline).
