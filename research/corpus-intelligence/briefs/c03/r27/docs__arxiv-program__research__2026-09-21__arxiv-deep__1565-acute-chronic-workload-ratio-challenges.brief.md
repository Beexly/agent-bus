# docs/arxiv-program/research/2026-09-21/arxiv-deep/1565-acute-chronic-workload-ratio-challenges.md

## What it is (1-2 sentences)
Methodological critique (not an empirical study) of the acute:chronic workload ratio (ACRatio) paradigm endorsed by the IOC consensus for injury-risk monitoring. Diagnoses eight mathematical/statistical/causal flaws and prescribes repairs; corpus verdict ADAPT — GSE should use its uncoupled + continuous + time-matched design rules when building NFL workload/injury-risk features, never the IOC's naive ratio.

## Key metrics/methods (formulas where given, else "not specified")
- Coupled ACRatio ceiling proof: if inactive 3 weeks then workload WL1 in week 4, ACRatio = WL1/(WL1/4) = 4 regardless of WL1 magnitude — the metric cannot discriminate spike sizes at the top end.
- EWMA weight anomaly: with decay constant λ<0.5, weight at time 0 exceeds weights at subsequent days (Williams et al. constants 0.25 acute / 0.068 chronic over 28 days → initial load contributes 1.9× the day-28 load to the chronic weighted average); convergence requires ~50 burn-in days.
- Sparse-data-bias rule: ≥5 events per level of each covariate combination (Bennette & Vickers); model continuous (GAM/spline), discretize after fitting.
- Fixes: uncoupled ratio (acute excluded from chronic denominator); nested case-control matched on exposure time with censoring at matched injury time, case-crossover design, or planned-schedule proxies (fixes Tuesday-injury time-mismatch bias); instrumental variables — planned training schedule as instrument for actual activity, 2SLS estimator; g-methods (Robins) for time-varying confounding where exposure affects a confounder of its own future effect (aches/pains loop); recurrent-event models for subsequent injuries.

## Data sources named
No new dataset. Re-examined published studies: Hulin et al. 2014 cricket fast bowlers (n=28); Carey et al. 2017 Australian football (n=53); Hulin et al. 2016 rugby league (n unreported); Murray et al. 2017 (n=59 Australian footballers, EWMA comparison); Nielsen et al. review of 35 workload-injury studies (only 11 with n>150); Menaspà's 3-athlete training profiles (illustrative). Workload units: distance, weight lifted, session-RPE.

## Findings (numbers and facts, not vibes)
- Coupled ACRatio maximum = 4.0 by construction (worked proof); uncoupled version removes the ceiling and the spurious acute–chronic correlation.
- EWMA R² 0.21 → 0.87 (unweighted vs EWMA, n=59 Australian footballers, cited from Murray et al.) — motivation for EWMA, simultaneous with its initial-value bug being flagged.
- IOC model: "sweet spot 0.8–1.3 / danger zone >1.5" rests on the three small studies; the apparent risk increase is driven entirely by points at ACRatio=2.0 — below 2.0 there is no apparent relationship.
- Low-ACRatio "risk" is an artifact of time-mismatch bias: athletes injured early in a weekly block accumulate less acute load (worked Tuesday-injury example).
- The 50-day EWMA burn-in discards early-season data precisely when NFL injury risk is highest (preseason→week 1 ramp). INFERENCE: applying EWMA verbatim to NFL loses the highest-risk window.
- External validity caveat stated in file: all cited data are cricket/AFL/rugby/soccer; American-football collision load vs running load differs; no positional heterogeneity discussed.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Naive coupled ACWR binned into IOC tiers inherits a hard ceiling of 4 and an artifactual low-ratio risk bump → OTHER (injury/workload feature-design rules).
- Injured-Thursday players show spuriously low "acute" snap counts unless labels are time-matched (nested case-control) → TRUST-SIGNAL (injury labels must be exposure-matched or they poison any injury model).
- Discretize-before-modeling inflates false discovery and invites sparse-data bias (≥5 events per level×covariate rule) → OTHER (modeling discipline for all rare-event GSE features).
- IV (planned schedule) + g-methods (marginal structural models) for the soreness→load→injury feedback loop → OTHER (causal-inference tooling for injury overlay).

## Engine-actionable? (yes/no + one-line what)
Yes — build `gse-workload-risk` with UNCOUPLED continuous 7:28-day ratios, time-matched nested case-control labels, spline-fit risk curves (tiers only after fitting for display), and recurrent-injury covariates; acceptance gate: leave-one-season-out AUC ≥ 0.60 next-week injury + monotone risk below ratio 1.0 (no low-end artifact), bootstrap 90% CI on inflection point < 0.5 ratio units; never ship IOC 0.8–1.3/1.5 bins.
