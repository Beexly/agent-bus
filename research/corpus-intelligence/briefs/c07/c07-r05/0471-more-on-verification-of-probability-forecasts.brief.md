# arxiv-program/research/2026-09-21/arxiv-deep/0471-more-on-verification-of-probability-forecasts.md

Source paper: Foulley (2021), arXiv:2106.14345v2. Ledger verdict: ADAPT — adopt the full verification suite as the standard GSE-vs-market diagnostic; the Poisson-ELO scoreline model itself duplicates Dixon-Coles.

## What it is (1-2 sentences)
A pedagogical verification toolbox for football WDL probability forecasts: Murphy calibration-refinement, likelihood-base, and Yates Brier-score decompositions plus reliability diagrams, logistic-calibration α/β testing, and discrimination diagnostics, illustrated on 4 seasons of UCL group-stage forecasts (Poisson-ELO vs bookmaker odds). The ledger adapts the verification machinery only — the Poisson-ELO model duplicates the already-inventoried Dixon-Coles/Poisson family.

## Key metrics/methods (formulas where given, else "not specified")
- Murphy CR: E[S(P,X)] = UNC − RES + REL; empirical: REL = S(p) − S(x̂), RES = S(x1_N) − S(x̂), UNC = S(x1_N); binning via fixed intervals, quantile intervals, isotonic PAV.
- Likelihood-base: E[S] = Var(P) − Var_X[E_P(P|X)] + E_X[(E_P(P|X) − X)²] (REF/DIS/CB2).
- Yates: E[S] = UNC − 2Cov(P,X) + Var_X[E_P(P|X)] + E_X[Var_P(P|X)] + [E(P)−E(X)]² (UNC/−2COV/VPB/VPW/RIL).
- Brier skill: BSS = 1 − BS/BS_ref = (RES − REL)/UNC.
- Logistic calibration: logit[Pr(X_i=1)] = α + β logit(p_i); Wald/LR tests of α=0, β=1 (patterns: α>0/β=1 concave under-forecasting; α<0/β=1 convex over-forecasting; β>1 sigmoid; β<1 inverse-sigmoid).
- Discrimination: Wilcoxon/KS tests, Harrell C-statistic (AUC) on forecasts conditional on X=0 vs X=1; Spiegelhalter Brier-score calibration test.

## Data sources named
UEFA Champions League group-stage matches 2017–2020, N=384 (377 unique probability profiles); Poisson loglinear model on ELO differentials (standardized r_i = (ELO_i − 1800)/150); bookmaker 3-way odds from OddsPortal (avg of 10–12 bookmakers), de-vigged p_{m,j} = o_{m,j}⁻¹/Σ_k o_{m,k}⁻¹. No download URL stated; no code.

## Findings (numbers and facts, not vibes)
- HWIN (UNC=0.2458): model BRS 0.1849, skill 24.8%, REL 4.7% of UNC, RES 29.5%; odds BRS 0.1732, skill 29.5%, REL 4.9%, RES 34.5%.
- DRAW (UNC=0.1875): model skill 1.4%, RES 6.7%; odds skill 3.0%, RES 4.9% — near-climatological, "unforecastable."
- AWIN (UNC=0.2158): model skill 21.2%, RES 24.9%; odds skill 27.3%, RES 31.9%.
- Logistic calibration (model): HWIN α̂=−0.259 (p=0.030), β̂=1.113 (p=0.382) — over-forecasting of home wins; AWIN well calibrated.
- Discrimination C-statistic: HWIN model 0.795 vs odds 0.820; DRAW 0.622 vs 0.624; AWIN 0.789 vs 0.820.
- Yates (model HWIN): −2COV −0.1190 (−48.4% of UNC), VPB 5.8%, VPW 16.8%, RIL 1.0%.
- Goal correlation: model ρ12 = −0.19 vs observed −0.235, 95% CI (−0.394,−0.062).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the full decomposition + logistic-calibration + discrimination suite becomes the standard diagnostic of GSE probabilities vs de-vigged market probabilities — it catches resolution gaps and systematic over/under-forecasting that raw Brier hides.
- OTHER: NFL has no draws (~0.5% ties); apply to cover/no-cover, over/under, win/lose; the draw-lesson analog is that low-resolution outcome categories (pushes, exact-score tail props) will show the same near-climatological signature.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the three Brier decompositions + weekly logistic-calibration monitor (alert if Wald rejects α=0 or β≠1) + discrimination dashboard on GSE vs de-vigged market probabilities over ~1,900 nflverse games (2020–2026); adopt as standard diagnostic if it reveals an actionable deficiency Brier-only reporting misses.
