# ops/PLATT_IRLS_INVESTIGATION.md
## What it is (1-2 sentences)
Design memo for the Platt scaling calibrator under investigation: a logistic-map re-scaling of raw model probabilities fitted with MAP priors via iteratively reweighted least squares (IRLS/Newton), with a diagnostic read of the fitted A and B coefficients.

## Key metrics/methods (formulas where given, else "not specified")
Model:
p_cal = σ(A · logit(p_raw) + B)
MAP prior A ~ N(1,1), B ~ N(0,1).
IRLS / Newton: each iteration on logistic NLL + Gaussian prior:
- Gradient g = X'(p−y) + Σ₀⁻¹(θ−θ₀)
- Hessian H = X'WX + Σ₀⁻¹, W = diag(p(1−p))
- θ ← θ − H⁻¹g
Diagnostic read: A < 1 → raw overconfident, compress toward 0.5; A > 1 → sharpen (use carefully); B ≠ 0 → global under/over shift.
Code: `platt-scaling.ts`; diagnostics: `platt-irls-investigate.ts`.
Product law: Apply OFF until Murphy RES improves and holdout floors pass — "Platt is not a PROVEN unlock."

## Data sources named
None — calibration math only, no external data.

## Findings (numbers and facts, not vibes)
- The Platt scaling investigation exists as R&D code with a stated interpretation key for A and B (a compact diagnostic for overconfidence vs bias)
- Explicit product law: calibration maps stay OFF and do not unlock PROVEN pricing until Murphy RES improves and holdout floors pass — calibration is not allowed to substitute for resolution (echoes the MATRIX audit's "Maps do NOT invent RES")

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pure calibration machinery.
- TRUST-SIGNAL (minor): the read-table (A<1 = overconfident → compress toward 0.5; B≠0 = global shift) is a clean diagnostic idiom for published-vs-true probability gaps — the same A/B readout could be run on any engine probability feed (e.g., B2B `/api/v1/probabilities`) to distinguish overconfidence from systematic bias.

## Engine-actionable? (yes/no + one-line what)
No — calibration R&D doctrine, already owned by the calibration pipeline (see ORBIT_UNLOCK's CIR calibrator); no new signal.
