# arxiv-program/research/2026-09-21/arxiv-deep/1491-acwr-injury-children.md
([1491] Injury risk increases minimally over a large range of changes in activity level in children — arXiv:2010.02952v2, Wang et al. 2020)

## What it is (1-2 sentences)
Tests which acute:chronic workload ratio (ACWR) variants and model classes (GLM vs GAM, with vs without random effects) best predict musculoskeletal pain in 1,660 Danish schoolchildren — finding injury risk rises only minimally across a wide ACWR range, far less than in adults. Ledger verdict: **REJECT** — pediatric cohort, parent-reported pain outcome, and session-count load data have no transfer path to NFL availability modeling (replaced in the same lane by ledger 1510).

## Key metrics/methods (formulas where given, else "not specified")
- ACWR = acute load (index-week activity frequency) / chronic load (mean of prior weeks).
- Variants: coupled 4-week = **wk₀/mean(wk₀…wk₋₃)**; uncoupled 4-week = **wk₀/mean(wk₋₁…wk₋₃)**; uncoupled 5-week = **wk₀/mean(wk₋₁…wk₋₄)**. EWMA variants tried and dropped (much poorer fit — Table S1 EWMA AICs).
- Model: **GAMM: logit(P(injury)) = s(ACWR) + b_individual**, s = thin-plate spline (k=7), random intercept for individuals; logit link; gender added as fixed effect in winning model. Also fit: GLM, GLMM, GAM. Model selection by AIC on common index weeks.
- AICs (Table 2, uncoupled 5-week): GLM **80,931**; GLMM **77,956**; GAM **80,891**; GAMM **77,927** (best — random effects dominate; spline adds little once random intercept is in).
- Assumptions: (1) session counts proxy tissue load; (2) parent SMS reports are valid injury/pain measures; (3) missing weeks imputable by resampling-with-matching; (4) prognostic (not causal) interpretation.
- Sensitivity analyses excluding ACWR=0 and ACWR=1 weeks; randomized-trial sample-size calculations in appendix.

## Data sources named
CHAMPS-DK (Childhood Health, Activity, and Motor Performance School Study Denmark): prospective cohort, **1,660** Danish schoolchildren aged 6–17, followed mean **3.8 years** (Nov 2008–Jun 2014), **286,536** child-weeks, **11,458 (4%)** with injury. Load = weekly count of leisure-time + school activity sessions via weekly parent SMS. Outcome = parent-reported musculoskeletal pain in the index week (not physician-diagnosed, not time-loss). Mean 1.6 (SD 1.1) leisure sessions/week; 91% of participants reported pain at some point. Not publicly available (CHAMPS Steering Committee on request). Analyses in R 3.6.0 (lme4, mgcv, gamm4); no code link.

## Findings (numbers and facts, not vibes)
- Best model: uncoupled 5-week GAMM. Predicted injury risk ~3% for ACWR 0.8–1.5; minimum **1.5%** at ACWR=0 (RR vs ACWR=1: **0.5**); maximum **6%** at ACWR=5 (RR vs ACWR=1: **2.2**) — "only doubled despite a quintupling of activity".
- Contrast: GLMM (no spline) predicted exponential rise to **24%** at ACWR 9.3 with unrealistically narrow CIs — a modeling artifact the GAMM's shrinkage avoids; the AIC comparison is the evidence that the flexible+sparse model wins.
- Girls at significantly higher risk than boys at ACWR>2 (gender p=**0.047**).
- Trial sample-size calc: **11,000 participants (5,500/group)** to detect the doubling-activity effect in a simple RCT.
- Paper's headline: "Increases in physical activity in children are associated with much lower injury risks compared to previous results in adults."
- Limitations (authors + ledger): very few weeks at high ACWRs (wide CIs above ACWR 3); load definition lumps heterogeneous sports/durations; pain ≠ diagnosed/time-loss injury; no held-out validation (AIC-only selection); "findings may not be generalizable to specific sporting contexts"; ACWR has "serious limitations for assessing causality"; the cohort is children 6–17 — physiologically and contextually unlike NFL athletes.
- GSE data reality (ledger §10): GSE has no player-availability/injury sub-model in the repo corpus, but also has no practice/training-load data for NFL players (no session counts, no GPS) — nothing to build the exposure side on.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER — injury/availability lane (negative result, recorded to prevent re-work):** The methodological residue is the only portable part: (1) uncoupled ratios beat coupled ones (avoiding numerator-in-denominator autocorrelation — a mechanism that would apply to any future NFL workload feature built from snap/practice counts); (2) random intercepts dominated model fit (AIC 77,956 vs 80,931 — individual frailty matters more than functional form), which is the same lesson as player-level random effects in any availability model; (3) the GLMM's explosive 24%-at-9.3-ACWR artifact is a cautionary tale for trusting parametric extrapolation in injury models — TRUST-SIGNAL for any future GSE availability work. None of the empirical risk numbers transfer (pediatric pain ≠ NFL time-loss injury).

## Engine-actionable? (yes/no + one-line what)
**No** — REJECT: no NFL transfer path; if an availability model is ever built, reuse only the methodological cautions (uncoupled ratios, random intercepts, distrust parametric tails).
