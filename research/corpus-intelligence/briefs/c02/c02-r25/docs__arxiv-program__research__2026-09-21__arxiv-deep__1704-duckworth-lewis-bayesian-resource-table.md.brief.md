# docs/arxiv-program/research/2026-09-21/arxiv-deep/1704-duckworth-lewis-bayesian-resource-table.md

## What it is (1-2 sentences)
A deep-read note on Bhattacharya, Ghosal & Ghosh (2018, arXiv:1810.00908), which builds a better cricket rain-rule resource table via Bayesian nonlinear regression with order-constrained priors that enforce exact monotonicity, beating the ICC Duckworth-Lewis table on first-innings score prediction. Ledger verdict: **ADAPT** — the monotonicity-prior construction and "resources remaining" framework port to GSE's live win-probability surfaces and weather-interrupted game adjustments.

## Key metrics/methods (formulas where given, else "not specified")
- Likelihood: R̄(u,w) ~ N(m(u,w;θ), σ²/n_uw) (Eq. 4); mean function m(u,w;θ) = a_w(1 − e^{−b_w u}) (Eq. 5), θ = {(a_w,b_w), w = 0..9}.
- Monotonicity priors (Eq. 7): a_0 ~ U(0,A_0), b_0 ~ U(0,B_0), a_{w+1}|· ~ U(0,a_w), b_{w+1}|· ~ U(0, a_w b_w/a_{w+1}), 1/σ² ~ Ga(a,b); proven (Appendix B) to enforce monotonicity with probability 1.
- D/L base: R(u,w) = a_w(1 − e^{−b_w u}) (Eq. 1); P(u,w) = R(u,w)/R(50,0) (Eq. 2); target reset T per Eq. 3.
- Inference: JAGS (Gibbs for σ², slice-within-Metropolis-Hastings for a_w, b_w); 20k burn-in + 30k samples; posterior medians; vague hyperparameters A_0=2000, B_0=100, a=b=0.1.
- Missing R̄(u,w) imputed from normal posterior predictive under MAR.
- Evaluation metric: RSS_u = Σ_w Σ_i (R^A − R^P)² (Eq. 8), comparing Bayesian vs D/L via RSS ratios across u = 30..1 with posterior densities of the ratio.

## Data sources named
- 947 ODI first innings, 2005–2017, from cricsheet.org (full 50-over innings only; over-by-over runs/wickets).
- Aggregated to R̄(u,w) over 500 (u,w) cells; 26.8% of cells unobserved.
- Baseline: ICC D/L percentage resource table.

## Findings (numbers and facts, not vibes)
- [OTHER] RSS ratio (Bayes/D/L) < 1 in the majority of overs-left scenarios u=30 down to u=1 — "statistically significant in majority of the portions"; Bayesian table predicts first-innings totals better, especially with many overs left.
- [OTHER] The fitted Bayesian table is monotone in both dimensions by construction; the D/L table is flat at 11.9% for 8 wickets lost across u=50..15 and 4.7% for 9 wickets.
- [OTHER] The naive nonparametric empirical table is non-monotone with wild values (e.g., 101.71% at 47 overs/3 wickets, 53.67% at 13 overs/0 wickets) plus 26.8% missing cells — motivating the constrained Bayesian approach.
- [OTHER] Tail-state table differences are large: 10 overs/9 wickets = 18.12% (Bayesian) vs 4.70% (D/L).
- [OTHER] Limitations in-file: evaluation is in-sample (same 947 matches fit and compared); MAR assumption untestable in extreme states; D/L parameters never public, so the "beats D/L" claim is against the table, not the method.
- [TRUST-SIGNAL] The acceptance gate defined in the note is quantitative: adopt only if out-of-sample RMSE beats the unconstrained table by ≥ 2%, monotonicity holds exactly, and implied win probabilities are calibrated (ECE ≤ 0.02) — a calibration-gating discipline directly relevant to GSE's live engine.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the monotone-constrained Bayesian table construction is a reusable recipe anywhere GSE needs a bivariate surface that must be monotone (win probability in score differential; weather penalty in wind speed); the calibration gate (ECE ≤ 0.02) models how to trust a live surface.
- OTHER: the "resources remaining" framework maps to expected remaining scoring given (time left, score differential, timeouts, field position) — the core of a live win-probability engine — and to fair evaluation of suspended/lightning-delayed games.
- COACHING (mild): INFERENCE — timeouts as a resource dimension in the state table mirrors coaching decision value (timeout leverage), though the file does not discuss coaching.

## Engine-actionable? (yes/no + one-line what)
Yes — port the Eq. 7 order-constrained prior construction to fit a monotone Bayesian win-probability/resource surface on nflverse (minutes remaining × score differential × timeouts), with the note's ≥2% RMSE-improvement and ECE ≤ 0.02 gates before any live use.
