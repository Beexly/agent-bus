# ops/BAYESIAN_CALIBRATION_R_AND_D.md
## What it is (1-2 sentences)
Offline R&D doc specifying Bayesian calibration methods (MAP Platt, hierarchical beta-binomial, temperature scaling, isotonic, empirical-Bayes hierarchical logistic) for the GSE pick-confidence pipeline, with an explicit recorded decision that production eligibility stays frequentist (Brier, ECE, Murphy reliability) until a versioned holdout bake-off wins.
## Key metrics/methods (formulas where given, else "not specified")
- MAP Platt: `sigmoid(A·logit(p)+B)`, Gaussian priors A~N(1,1), B~N(0,1); Newton-IRLS with gradient g = X′(p−y) + Σ₀⁻¹(θ−θ₀), Hessian H = X′WX + Σ₀⁻¹; Laplace posterior precision = H at MAP.
- Hierarchical: score s = logit(clip(p_raw)); P(y=1) = sigmoid(A·s + B + u_g), u_g ~ Normal(0, τ²), τ via Empirical Bayes clamped [0.05, 2.0]; non-centered z_g ~ Normal(0,1), u_g = τ·z_g.
- Selection rule: smooth global rescale → MAP Platt IRLS; monotone bias weird shape → true PAVA isotonic; thin tails → Platt/Temperature; hierarchical markets (sport|market) → Platt/logistic + EB-τ.
- Gate: bake-off must beat Raw/Temperature/Platt/isotonic baselines on time-holdout Brier/ECE + Murphy reliability before `CALIBRATION_ADJUSTMENTS_ENABLED` can flip (founder policy).
## Data sources named
- Canonical WIN/LOSS maps from `calibration-metrics` + `CalibrationEligibility`; code under `apps/web/lib/calibration/` (bayes-bins.ts, platt-map.ts, offline-bakeoff.ts, hierarchical-eb-tau.ts).
## Findings (numbers and facts, not vibes)
- Production eligibility as of doc date is still driven by frequentist live maps; Bayesian tools are R&D artifacts only, apply path OFF.
- Dirichlet-process mixture clustering explicitly excluded from production path.
- Integrity constraints: no fabricated ROI/PROVEN claims from R&D numbers; demo cockpit N≈120 is not a publish sample; ACI conformal-abstain is show/abstain only, not a publish gate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration infrastructure for prediction confidence — governs whether GSE publishes confidence-adjusted projections.
## Engine-actionable? (yes/no + one-line what)
Yes — follow the bake-off gate before enabling any Bayesian confidence map in production; use the stated selector table when calibrating engine probabilities per market.
