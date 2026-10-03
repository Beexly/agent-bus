# arxiv-program/research/2026-09-21/arxiv-deep/0674-application-of-the-pythagorean-expected.md
## What it is (1-2 sentences)
Deep-read ledger of Boudreaux et al. (arXiv:2201.01168, 2021) comparing contest-success functions (CSFs) from contest theory — restricted/optimized Tullock (classic Pythagorean), difference form, serial form — as estimators of MLB team quality via OLS with leave-one-out cross-validation. Verdict recorded as ADAPT — the serial CSF dramatically outperforms classic Pythagorean on LOOCV; test it as an alternative win-probability form in GSE ratings.
## Key metrics/methods (formulas where given, else "not specified")
- General Pythagorean (Tullock): EWP_{i,j} = rs_{i,j}^α / (rs_{i,j}^α + ra_{i,j}^α); James restricted α=2.
- Linearized Tullock: ln(1/EWP − 1) = α·ln(ra/rs).
- Difference form: EWP = 1/(1 + e^{α(ra−rs)}).
- Serial form: min(EWP, 1−EWP) = min(rs,ra)^α/(2·max(rs,ra)^α), estimated α=1.032; recovered via anonymity property.
- Estimation: each CSF transformed linear in noise parameter α, fit via OLS; LOOCV (train 389, validate 1, ×390) for predictive comparison.
- Proposed GSE adaptation: fit all three CSFs on NFL points-for/points-against (2015–2024, 320 team-seasons); adopt serial form if its LOOCV win-RMSE beats optimized Tullock by ≥0.2 wins with p<0.05. Proposed improvement experiment: hierarchical Bayes extension with team-season random effects on α plus schedule-strength adjustment (INFERENCE: untested proposal, not a paper result).
## Data sources named
- 390 MLB team-season observations (13 seasons × 30 teams, 2003–2015): season win proportion, runs scored, runs allowed, from ESPN (public).
- Summary: mean wins 80.98 (SD 11.15, range 43–105); mean runs scored 729.24 (SD 81.46); mean runs allowed 729.24 (SD 85.91).
- Proposed GSE data: NFL team seasons 2015–2024, points for/against.
## Findings (numbers and facts, not vibes)
- OLS estimates of α: Tullock 1.859 (t vs H0=0: 50.07***, vs H0=2: 3.79***), R²=0.866, RMSE 4.069/4.0722 wins; difference 0.00254 (t vs 0: 49.88***), R²=0.865, RMSE 4.081; serial 1.032 (t vs 0: 52.56***, vs 2: 49.31***), R²=0.877, RMSE 3.6836.
- LOOCV root MSE: Tullock 4.0836, difference 4.0926, serial 3.6964. LOOCV MAE: 3.2807, 3.2932, 2.9357.
- Serial reduces root MSE ~0.39 wins vs optimized Tullock — 5× the root-MSE reduction achieved by moving from James' restricted α=2 to the OLS-optimized α.
- Authors' claim: estimates of team win proportion typically within ~.025 units of true win proportion (~4 wins/162 games).
- Limitations recorded: MLB only — not tested in other leagues (authors flag NFL/NBA as future work); serial CSF is anonymous/symmetric — can't absorb sport-specific asymmetries (e.g., NFL home field, schedule strength) without modification; LOOCV within-sample in time (α estimated on full sample incl. future seasons); single-input (runs) model; NFL analog (points) is a coarser signal over 17 games vs 162.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Serial CSF LOOCV root MSE 3.6964 vs optimized Tullock 4.0836 (~0.39-win reduction, 5× the α=2→optimized gain) → OTHER (a superior functional form for points-based win probability — directly testable in GSE ratings; new territory for the corpus, no existing Pythagorean/CSF treatment per file).
- Estimated α=1.032 (serial) vs Tullock α=1.859 — both reject H0:α=2 at 49–52σ → TRUST-SIGNAL (James' α=2 restriction is decisively rejected on 390 team-seasons; exponent tuning matters).
- Serial form is anonymous/symmetric — can't absorb NFL home-field/schedule-strength asymmetries without modification → TRUST-SIGNAL (honest fit boundary for the NFL port).
- Proposed expected-wins-residual → second-half ATS test (file's reproducible-test criterion: residual predicts next-season win improvement with slope>0, p<0.05) → OTHER (regression-to-mean feature candidate; INFERENCE: test design proposed in file, not a paper result).
## Engine-actionable? (yes/no + one-line what)
yes — refit Tullock/difference/serial CSFs on NFL points for/against (2015–2024) and replace the ratings Pythagorean form with the serial CSF if it beats optimized Tullock by ≥0.2 LOOCV wins with p<0.05.
