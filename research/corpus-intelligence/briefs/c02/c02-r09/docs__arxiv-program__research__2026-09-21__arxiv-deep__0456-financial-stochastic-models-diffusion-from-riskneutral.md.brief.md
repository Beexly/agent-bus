# docs/arxiv-program/research/2026-09-21/arxiv-deep/0456-financial-stochastic-models-diffusion-from-riskneutral.md

## What it is (1-2 sentences)
A quantitative-finance paper by Ben Alaya, Kebaier & Sarr (2024, arXiv:2409.12783v1) building a generic framework to convert diffusion models from the risk-neutral measure (ℚ, used in derivative pricing) to the real-world measure (ℙ, used in risk management/forecasting) via Girsanov's theorem, demonstrated on a CIR++ default-intensity model for credit spreads. The corpus ledger verdict is REJECT — out of domain for GSE, with no transferable mechanism to sports prediction.

## Key metrics/methods (formulas where given, else "not specified")
- Generic RN→RW framework: from RN SDE dY_t = b(Y_t)dt + σ(Y_t)dW_t, the Lamperti transform φ(y)=∫dy/σ(y) gives dX_t = L(X_t)dt + ζdW_t with L = (b/σ − σ′/2)(φ⁻¹(·)).
- Theorem 2.1: RW drift = −ϑ[(X*_t − X_t) − α_t] (mean-reversion toward the RN path shifted by parametric calibration function α).
- Corollary 2.1.1: Y*_t = φ⁻¹(φ(Y_t) + ϑ∫_s^t α_u e^{−ϑ(t−u)} du); calibrating α_u forces the RW indicator to hit any prescribed curve.
- Theorem 3.1 (RW default intensity), Theorem 3.2 (RW term structure of credit spreads Sp*(t,T)), Theorem 3.3 (RW cumulative hazard rate Λ*(t,T)).
- Pipeline: Λ(t,T) = −ln[S(t,T)] via survival probabilities → infer Λ*(t,T) → RW credit-spread term structure.
- Monte Carlo validation: 20,000 draws, 1-week time step, 52 steps.

## Data sources named
- Crédit Agricole credit spreads, survival probabilities, default intensities, cumulative hazard rates as of 2024-01-01 (parameters from Alaya et al. 2024 companion paper, "global scenario", Table 4, Appendix B).
- Goldman Sachs 2024 Global Credit Outlook Euro-financial credit-spread forecasts (Q4 2023: 201/194/190/187/184 bp, translated to Crédit Agricole 5Y: 113/109/107/105/103 bp).
- EBA 2023 EU-wide stress test: +133 bp absolute stress for French financial counterparties rated 1–2 by ECAIs, applied as linear 1-year ramp.
- No sports data whatsoever.

## Findings (numbers and facts, not vibes)
- Forecast scenario: expectation of simulated 5Y spreads matches targets 113/109/107/105/103 bp "almost exactly"; 10th–90th percentile bands encompass the expectation. [OTHER]
- Stress scenario: targets c_i = 113 + 133·t_i (bp); simulated expectation again fits "almost perfectly"; term structure inverts as stress increases, matching observed stressed-market behavior. [OTHER]
- No baselines and no error metrics reported (no RMSE/MAE) — fit is by construction through α_u calibration, so numerical error is an unquantified calibration residual. [OTHER]
- The "exact fit to any curve" is by construction: α_u is calibrated to the targets; the results demonstrate the calibration machinery works, not predictive skill. No out-of-sample forecasting test was run. [OTHER]
- Single-issuer (Crédit Agricole), single-maturity (5Y) demonstration; EBA stress applied as illustrative linear ramp though regulators require instantaneous stress. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Every substantive finding tagged OTHER: the paper is quantitative-finance measure-change theory (risk-neutral → real-world conversion of a credit-spread diffusion) with zero sports content, zero sports data, and zero applicability to QB behavior, coaching, OL, scheme, or calibration trust signals. The file itself states: "the RN/RW distinction has no GSE analogue — GSE models real-world outcome probabilities directly from data and compares against market prices, with no risk-neutral pricing layer to convert from."

## Engine-actionable? (yes/no + one-line what)
no — rejected at triage; Lamperti/Girsanov/CIR++ machinery has no NFL input or output. INFERENCE: the only conceivable reversal is a future GSE bankroll-derivatives pricing product, which does not exist.
