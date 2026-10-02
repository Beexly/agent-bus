# arxiv-program/research/2026-09-21/arxiv-deep/0254-a-derivation-of-the-pythagorean-wonloss.md
## What it is (1-2 sentences)
A full-paper read of Miller (2007), a rigorous first-principles derivation of baseball's Pythagorean won-loss formula from independent Weibull-distributed per-game runs, with empirical fitting on 2004 American League data. Verdict was REJECT: the NFL analog (point-differential win expectancy) is a decades-old known quantity and the derivation adds no estimable parameter, data, or edge to GSE's rating stack.
## Key metrics/methods (formulas where given, else "not specified")
- Weibull pdf: f(x; alpha, beta, gamma) = (gamma/alpha)*((x-beta)/alpha)^(gamma-1)*e^(-((x-beta)/alpha)^gamma), x >= beta; beta fixed at -0.5 (continuity correction), shared shape gamma, team-specific scales.
- Pythagorean formula: W% = RS_obs^gamma / (RS_obs^gamma + RA_obs^gamma); derived form: (RS-beta)^gamma / ((RS-beta)^gamma + (RA-beta)^gamma) (Theorem 2.2 via P(X > Y) for independent Weibulls, Lemma 2.1).
- Fitting per team: (a) least squares on binned run distributions (3 free params alpha_RS, alpha_RA, gamma); (b) maximum likelihood.
- Validation: chi-squared GOF of fitted Weibulls (bins [0,1)...[12,inf), 20 df, 95% threshold 31.41); modified chi-squared independence test of RS vs RA on 12x12 table with structural zeros on diagonal (df = (12-1)^2 - 12 = 109) using Bishop-Fienberg iterative proportional fitting for expected counts (Eq. 3.7).
## Data sources named
2004 American League season, all 14 teams' game-by-game runs scored/allowed (public baseball data read from the web). No code or data link. National League left as an exercise.
## Findings (numbers and facts, not vibes)
- Fitted exponent: LS mean gamma = 1.79 (SD 0.09, median 1.79); ML mean gamma = 1.74 (SD 0.06, median 1.76) — both within noise of empirical best 1.82.
- Win-total accuracy: LS mean signed error +0.19 wins (SD 5.69), mean absolute error 4.19 (SD 3.68, median 3.22); ML mean signed error -0.13 (SD 7.11), MAE 5.77 (SD 3.85, median 6.04) — accurate to ~4 games per 162-game season.
- GOF: Weibull marginals pass at 95% for all teams except Blue Jays (chi2 41.18 vs 41.14 threshold — bare miss); independence passes except White Sox (near-misses waved through with a multiple-comparisons argument).
- Author's own caveat: football's 16-game season is too short for this analysis (basketball/hockey suggested instead) — a direct admission of non-transferability to NFL.
- Validation is fully in-sample: no train/test split, no out-of-sample win prediction ever tested.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (theoretical statistics): win-expectancy from point differential — duplicate concept already in the inventoried ratings family (Massey, Sagarin, Elo, SRS).
- TRUST-SIGNAL: the in-sample-only validation and the author's own 16-game-season caveat are cautions against over-claiming distributional derivations on short NFL seasons.
## Engine-actionable? (yes/no + one-line what)
No — REJECT; theoretical nicety about baseball run distributions, no NFL estimation technique, 17-game seasons break the asymptotics per the author's own admission.
