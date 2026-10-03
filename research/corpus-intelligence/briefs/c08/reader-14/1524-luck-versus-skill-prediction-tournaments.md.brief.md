# docs/arxiv-program/research/2026-09-21/arxiv-deep/1524-luck-versus-skill-prediction-tournaments.md
## What it is (1-2 sentences)
Deep-read ledger entry on MacKay (2026, arXiv:2509.08744): expository/analytic paper on proper scoring rules, a luck-vs-skill decomposition of the Brier score, and a forecaster-comparison significance test, applied to a 2010 World Cup prediction tournament. Verdict: ADAPT — gives GSE the statistical test for "is our public edge real or luck?"

## Key metrics/methods (formulas where given, else "not specified")
- Brier S_B = -1/2 * sum(outcome - forecast)^2; log score S_L = log q_realized.
- Murphy decomposition: S_B = -f(1-f) + N^-1 sum N_mu (f - f_mu)^2 - N^-1 sum N_mu (q_mu - f_mu)^2 = -uncertainty + resolution - reliability.
- Luck/skill: S_B(q) = -p(1-p) + (2q-1)(X-p) - (p-q)^2 = entropy + exposure - penalty = uncertainty + luck + skill; exposure variance (2q-1)^2 p(1-p).
- Forecaster comparison: Delta = N^-1 sum (q'_i - q_i)(q'_i + q_i - 2X), approx normal, sigma^2 <= N^-2 sum (q'_i - q_i)^2; RMS forecast difference delta -> sd(Delta) < delta/sqrt(N).
- Novel "elliptical score": E_alpha(p) = r/sqrt(alpha(1-alpha)), r^2 = (1-alpha)p^2 + alpha(1-p)^2; spherical score is alpha=1/2.
- Epsilon-refinement: S_B = -f(1-f) + (2/N) sum eps_i(X_i-f) - (1/N) sum eps_i^2; optimal stake R = sum gamma_i(X_i-f).

## Data sources named
No formal dataset; worked examples: 6 forecasters x 1 match (Brazil-Ghana); York maths department World Cup/Euros prediction tournaments, 64 matches (2010 World Cup).

## Findings (numbers and facts, not vibes)
- Rule of thumb: over 100 questions with typical RMS forecast difference delta ~ 0.1, a mean Brier-score gap > 0.02 is ~2 sigma (>=95% confidence of a real skill difference) against typical scores ~ -0.25.
- 10%-off forecaster at p=0.5: penalty -0.01 vs exposure sigma 0.1 (10x larger); 100 questions needed for luck to shrink to 1 sigma (16% chance of beating the savant), 400 for 2 sigma (2%).
- 2010 World Cup: winner's margin 0.002 — "probably got lucky"; top 15-20 separated by <0.1; rankings confident only within +-3-5 places.
- Table 1: Brier penalizes forecaster D despite D's higher probability on the realized outcome (scores unrealized outcomes too); log score ranks A(0) > D(-0.60) > B=C(-0.69) > E(-1.10) > F(-infinity).
- Tournament design: winner-takes-all makes rewards a nonlinear function of a proper score -> improper (leaders hedge, trailers gamble); author switched to log score after 2014 with -infinity bankruptcies as a feature.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: no "we're sharper than the market" public claim until the score gap clears 2 sigma (0.02 over 100 games rule); no hit-streak promo post until the streak's luck probability is computed.
- OTHER: internal model-variant contests must use proper scores with advance timestamps, never winner-takes-all on raw PnL.
- OTHER: reproducible test spec — engine vs closing-line-implied probabilities 2022-2024 (~800 games), Delta series, delta/sqrt(N) bound.

## Engine-actionable? (yes/no + one-line what)
yes — add a "skill-vs-luck" panel to the weekly report: compute Delta (mean Brier/log-score difference engine vs market) with the delta/sqrt(N) bound; gate public edge claims on |Delta| > 2 sigma (est. 0.5 day effort).
