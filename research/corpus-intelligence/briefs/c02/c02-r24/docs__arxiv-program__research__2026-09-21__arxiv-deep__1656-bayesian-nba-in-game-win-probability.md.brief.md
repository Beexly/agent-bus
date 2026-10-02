# docs/arxiv-program/research/2026-09-21/arxiv-deep/1656-bayesian-nba-in-game-win-probability.md

## What it is (1-2 sentences)
A Bayesian in-game NBA home-team win-probability estimator: a dynamic beta prior elicited from 14 NBA experts is updated with binned play-by-play outcomes via posterior mean, then blended with a pregame probability through an optimized logistic-style blend. Corpus verdict: ADAPT — the expert-prior + optimized-blend architecture is the right live-WP upgrade for GSE's NFL engine, but the validation leakage (blend tuned on test seasons) and discontinuous binning must be fixed in the port.

## Key metrics/methods (formulas where given, else "not specified")
- Likelihood: Binomial(N_cell, p); prior Beta(α(t,ℓ), β(t,ℓ)) from expert poll at anchor (t,ℓ) points, interpolated.
- Posterior mean: p̂ = (n + α)/(N + α + β), for each elapsed second t = 0..2879 and score lead ℓ.
- Windowing: standard [t−3,t+3]×[ℓ−2,ℓ+2]; 3–1 minutes remaining: score width [ℓ−1,ℓ+1]; final minute: no score binning.
- Pregame/in-game blend (B3 specification): logit(p_blend) = −1.10633 − 0.02313·I0(ℓ) + 0.00027·t + 0.06618·|ℓ| − 0.00139·ℓ², coefficients optimized to minimize Brier score.
- Assumptions: exchangeability of games within a (t,ℓ) window; expert prior correctly centered; pregame probability (TeamRankings/Elo) well-calibrated; binning discontinuities negligible; no possession/clock-stoppage structure modeled.

## Data sources named
- ESPN NBA play-by-play, seasons 2012/13 through pre-COVID 2019/20 (postseason and bubble games excluded); training 7,376 games; test 2018/19 and 2019/20, each Q = 6,590,576 second-level observations.
- Expert prior: poll of 14 NBA experts (front-office associates among them); expert poll data not published.
- Pregame sources: TeamRankings and Elo win probabilities.

## Findings (numbers and facts, not vibes)
- Blend-model Brier: linear-time 0.1622; linear time+score 0.1613; quadratic (B3) 0.1598.
- Season/total Brier: dynamic Bayes 0.1663 / 0.1736 / 0.1697; adjusted dynamic Bayes (blended) 0.1568 / 0.1635 / 0.1598; ESPN 0.1550 / 0.1621 / 0.1582 — blended model within ~0.0016 of ESPN overall.
- Pregame source comparison (in-game Brier): TeamRankings pregame 0.2167 → in-game 0.1598; Elo pregame 0.2179 → in-game 0.1605.
- The ℓ² term captures garbage-time nonlinearity; the expert prior anchors early-game estimates where data are sparse.
- Validation leakage: blend coefficients (B3) were optimized on the same test seasons used for evaluation — reported Brier gains are optimistic; true out-of-sample performance unknown.
- Only time + score + pregame strength used; no pace, fouls, possession, or player-availability features.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Logistic blend of pregame WP and cell WP with features {t, |ℓ|, ℓ², I(ℓ=0), possession}, coefficients fit by minimizing Brier on a nested validation slice — OTHER (live-WP blending machinery).
- Expert-informed dynamic beta prior mapped through a prior-strength schedule (high early, decaying) for sparse early-game cells — TRUST-SIGNAL (calibration where data are thin; acceptance gate requires calibration slope in [0.95, 1.05]).
- Adding down/distance/timeout/possession features to the blend (proposed −0.002 Brier improvement) — SCHEME (game-state context features).
- Continuous kernel smoothing over (t,ℓ) to replace hard bins and fix window-edge discontinuities — OTHER (methodology fix).
- Proposed hierarchical team-specific prior strength for better early-game calibration in mismatches — QB-BEHAVIOR (INFERENCE: team-strength/mismatch handling likely folds in QB-quality differential as the dominant pregame term).

## Engine-actionable? (yes/no + one-line what)
Yes — build a live-WP blender: empirical WP per (time, score-differential, down/distance) cell with a decaying beta prior from the pregame model, blended via an NFL-adapted B3 logistic form on {t, |ℓ|, ℓ², I(ℓ=0), possession} fit with strictly nested temporal validation (2022–2024 test); ADAPT if it beats current live-WP Brier by ≥ 0.002 with calibration slope in [0.95, 1.05].
