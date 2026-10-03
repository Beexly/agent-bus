# docs/arxiv-program/research/2026-09-21/arxiv-deep/0411-adjusting-for-scorekeeper-bias-in-nba.md
## What it is (1-2 sentences)
Deep read (arXiv:1602.08754v2, van Bommel & Bornn) of scorekeeper bias in NBA box scores: a two-part model (team-level generosity/bias regressions + pass-level L2-regularized logistic "contextual" model on SportVU tracking) showing subjective assists are systematically inflated/deflated by the home team's scorekeeper even after controlling for play context.

## Key metrics/methods (formulas where given, else "not specified")
- Team level: AR/BR modeled with intercept + home + team + opponent + scorekeeper generosity (β_G) + bias (β_B) terms; R² = 0.279 (AR) / 0.228 (BR).
- Contextual model: L2-penalized logistic regression, P(recorded assist | potential assist); λ by 100-fold CV; evaluated by 10-fold CV on out-of-sample mean log-likelihood and misclassification.
- Potential assist definition: completed pass → shooter scores FG within 7 s of receipt, possession maintained (no rebounds/turnovers/extra passes); inbounds excluded.
- Covariates: team/opponent/scorekeeper indicators, passer, passer position, possession duration, dribbles, shooter travel distance, pass distance, nearest-defender distances (passer at release, shooter at catch), passer zone, shooter zone, passer×shooter zone interaction.

## Data sources named
ESPN box scores 2015–16 NBA; STATS SportVU tracking for 1,227 of 1,230 regular-season games (25 Hz, X/Y of 10 players + X/Y/Z of ball + event annotations); 82,493 potential assists, 54,111 (65.59%) recorded. One tracking game public via EPVDemo GitHub. No code link stated.

## Findings (numbers and facts, not vibes)
- 10-fold CV (mean log-likelihood / misclassification): full contextual −0.176 / 0.066; no-scorekeeper −0.182 / 0.070; no-context −0.638 / 0.344; intercept-only −0.644 / 0.344 — prior best practice barely beat an intercept.
- Scorekeeper coefficient correlation between team-level and contextual models: 0.892 (generosity), 0.597 (bias).
- Scorekeeper bonus spread: −3.44 (Utah home) to 2.32 (Pelicans home); at 22.05 assists/game avg this is a 5.76 assists/game swing — "substantial."
- Position effect: PG +3.76% vs C −4.01% recorded-assist probability (7.77% spread; possibly unmeasured pass quality).
- Extremes: Clippers scorekeeper most consistent (home variance 1.09, away 1.21); Houston most accurate by mean |distance| from zero (1.06 / 0.997); Pelicans most unpredictable (4.03 / 4.54).
- Limitations: scorekeeper effect identified only at home with a single common home effect — may be a team-specific home effect, not scorer bias; one season only; random (not chronological) CV folds.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — crew/stadium/data-provider random-effect debiasing of subjective NFL charting stats (solo/assisted tackles, pressures, drops, broken tackles) before they enter GSE models: P(credited | potential) = logit⁻¹(context + crew/stadium random effects).
- OTHER — extend the same machinery to NFL referee crews: crew random effects on holding/PI call probability conditional on game context, feeding drive-outcome and penalty-expectation models (direct market relevance).

## Engine-actionable? (yes/no + one-line what)
Yes — fit hierarchical logistic crew/stadium debias on charted tackles/pressures (2022–23 train, 2024 test); adopt as a preprocessing layer if ≥1% held-out log-loss improvement and significant crew variance (LRT p<0.05).
