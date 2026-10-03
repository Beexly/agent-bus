# arxiv-program/research/2026-09-21/arxiv-deep/1491-acwr-injury-children.md
## What it is (1-2 sentences)
A sports-medicine paper (Wang et al., 2020) testing whether acute:chronic workload ratio (ACWR) variants predict musculoskeletal pain in 1,660 Danish schoolchildren aged 6–17 — finding injury risk rises only minimally over a wide activity range, but the pediatric pain outcome has no transfer path to NFL player availability. Ledger verdict: REJECT for GSE purposes.
## Key metrics/methods (formulas where given, else "not specified")
- ACWR variants: coupled 4-wk = wk₀/mean(wk₀…wk₋₃); uncoupled 4-wk = wk₀/mean(wk₋₁…wk₋₃); uncoupled 5-wk = wk₀/mean(wk₋₁…wk₋₄); EWMA variants tried and dropped (much poorer fit).
- GAMM (winner): logit(P(injury)) = s(ACWR) + b_individual, s = thin-plate spline k=7; AICs (uncoupled 5-wk): GLM 80,931; GLMM 77,956; GAM 80,891; GAMM 77,927 (best).
- Load = weekly parent-SMS count of leisure + school activity sessions; outcome = parent-reported musculoskeletal pain (not physician-diagnosed, not time-loss).
## Data sources named
- CHAMPS-DK cohort: 1,660 children aged 6–17, mean 3.8 years follow-up (Nov 2008–Jun 2014), 286,536 child-weeks, 11,458 (4%) with injury; not publicly available (CHAMPS Steering Committee on request). Analyses in R 3.6.0 (lme4, mgcv, gamm4); no code link.
## Findings (numbers and facts, not vibes)
- Best model uncoupled 5-week GAMM: predicted injury risk ~3% for ACWR 0.8–1.5; minimum 1.5% at ACWR=0 (RR vs ACWR=1: 0.5); maximum 6% at ACWR=5 (RR vs ACWR=1: 2.2) — "only doubled despite a quintupling of activity".
- GLMM for contrast: exponential rise to 24% at ACWR 9.3 with unrealistically narrow CIs.
- Girls at significantly higher risk than boys at ACWR>2 (gender p=0.047).
- Headline: "Increases in physical activity in children are associated with much lower injury risks compared to previous results in adults" — explicitly non-transferable to adults.
- Trial sample-size calc: 11,000 participants (5,500/group) to detect doubling-activity effect in an RCT.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (no overlap: GSE has no training-load data for NFL players and no player-availability sub-model; nothing to build on — REJECT stands)
## Engine-actionable? (yes/no + one-line what)
no — REJECT: pediatric pain outcome and session-count load have no NFL analogue in GSE's data; replacement read in this lane is ledger 1510.
