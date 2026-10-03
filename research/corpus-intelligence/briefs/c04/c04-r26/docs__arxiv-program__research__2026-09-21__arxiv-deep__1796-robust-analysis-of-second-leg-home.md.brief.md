# docs/arxiv-program/research/2026-09-21/arxiv-deep/1796-robust-analysis-of-second-leg-home.md
## What it is (1-2 sentences)
Deep read of Geenens & Cuddihy (2017), "Robust Analysis of Second-Leg Home Advantage in UEFA Football" (arXiv:1701.07555v2). Verdict: ADAPT — the transferable asset is the method (nonparametric win-probability curves with valid Wilson CIs), not the soccer finding; it exposes how a misspecified logistic link can hide a real effect.

## Key metrics/methods (formulas where given, else "not specified")
- Nadaraya-Watson kernel regression: p̂_h(x) = ΣK((x−Xᵢ)/h)Yᵢ / ΣK((x−Xᵢ)/h) (Gaussian kernel, h₀ = 0.525 by AIC).
- Predictor: X = log(C₂/C₁) — log-ratio of team strength indices; log-ratio justified algebraically (ℝ⁺,×).
- Three pointwise 95% CIs for p(0) built on local equivalent sample size nhf̂_h(x)/R(K): Wald-type (3.6), conditional Wilson (3.8), conditional Agresti-Coull (3.9).
- Bandwidth for intervals chosen by novel bootstrap selector (B = 5,000 resamples, Yᵢ* ∼ Bernoulli(p̂_{h₀}(Xᵢ)), fixed design): maximize estimated coverage.
- Coverage-error rate (3.10): P(p(x) ∈ CI_Wa) = 1 − α + O(nh⁵ + h² + (nh)⁻¹).

## Data sources named
- 1,353 two-legged UEFA knockout ties, Champions League + Europa League, 2009/10–2014/15 (from 4,160 matches; group-stage and single-leg ties removed); 84 ties went to extra time.
- Kassies (2016) UEFA coefficient database (public website). No code repo linked; R package `np` used for h₀.

## Findings (numbers and facts, not vibes)
- SLHA estimate: p̂_{h₀}(0) = 0.539; 95% CI = [0.504, 0.574] (h = 0.873 Wald / 0.854 Wilson & AC); all three CIs agree to 4 decimals; 1/2 excluded → significant second-leg home advantage.
- Excluding 84 extra-time ties: p̂ = 0.540 — effect is not an extra-time artifact.
- Confounding confirmed: P(X > 0) = 752/1353 = 0.556, Wilson CI [0.529, 0.582] — stronger teams are preferentially seeded to second-leg-home; conditioning on strength is mandatory.
- Logistic foil: α̂ = 0.088, β̂ = 0.770; implied 95% CI for p(0) = [0.491, 0.552] ∋ 1/2 — MISSES the effect; goodness-of-fit rejects logistic (deviance p ≈ 0.001; le Cessie–van Houwelingen p = 0.06). Nonparametric CI length 0.070 vs logistic 0.061 — flexibility costs almost no precision.
- Simulation coverage (nominal 95%, n=1000, p ≈ 0.953): Wald 0.860, Wilson 0.958, Agresti-Coull 0.961; n=250: Wald 0.796 (!), Wilson 0.940, AC 0.939. Scenario 2 (n=1350, mimicking real data): Wald 0.934, Wilson 0.953, AC 0.955.
- Bandwidth finding: coverage-optimal h (≈0.86) > estimation-optimal h₀ (0.525); naive undersmoothing (h = h₀n^{−2/15} = 0.2) would produce severely under-covering intervals.
- GSE implementation spec in file: (1) NW estimates of P(home win | spread/Elo differential) with conditional Wilson 95% bands overlaid on the engine's parametric logistic mapping — where the curve exits the band, the link is misspecified; (2) situational HFA decomposition via additive NW on rest differential, altitude/dome, division rivalry. Cost ~2 days.
- Gate: ADOPT nonparametric HFA correction if Brier improves ≥0.002 on 2023–2024 home-win probabilities AND ≥1 spread region shows significant miscalibration; REJECT if logistic stays inside bands everywhere (still a useful audit).
- Improvement experiment in file: band width → fractional-Kelly down-weighting on thin-data situational spots; test backtest Sharpe vs flat Kelly.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Nonparametric conditional win-probability curve P(home win | strength differential) with valid uncertainty bands: OTHER (home-field/calibration methodology — a statistical-audit tool for the engine, not a QB/coaching/OL/scheme finding).
- Situational HFA decomposition (rest differential, dome/altitude, division rivalry) as data-driven alternative to fixed HFA constants: OTHER (situational/venue effects — adjacent to SCHEME matchups but filed as OTHER since it is venue/context, not scheme design).
- Log-ratio strength measure X = log(C₂/C₁) as natural scale for positive strength indices: OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — run the nonparametric HFA diagnostic (NW + Wilson bands on P(home win | spread/Elo diff), 2010–2025 NFL) to audit the engine's logistic link, and extend to situational HFA decomposition.
