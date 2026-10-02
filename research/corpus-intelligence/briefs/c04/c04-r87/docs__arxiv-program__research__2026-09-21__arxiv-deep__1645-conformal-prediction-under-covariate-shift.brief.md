# docs/arxiv-program/research/2026-09-21/arxiv-deep/1645-conformal-prediction-under-covariate-shift.md
## What it is (1-2 sentences)
Deep-read ledger of Tibshirani, Barber, Candès & Ramdas (arXiv:1904.06019, NeurIPS 2019), the foundational paper on conformal prediction under covariate shift: when the covariate distribution shifts between calibration and test but the conditional outcome law P(Y|X) is stable, reweighting calibration scores by the likelihood ratio w(x)=dP̃_X/dP_X restores the finite-sample coverage guarantee. Verdict in the file: ADAPT — the principled fix for GSE's regime-shift problem (early vs late season, QB-injury weeks, playoffs).

## Key metrics/methods (formulas where given, else "not specified")
- Weighted split conformal: nonconformity scores on calibration fold; weighted empirical distribution Σ_i p̃_i δ_{V_i} + p̃_{n+1} δ_∞ with p̃_i ∝ w(X_i) normalized INCLUDING the test point's weight; interval = weighted (1−α)-quantile.
- Theoretical backbone: weighted exchangeability (joint density factorizes as Π w_i(v_i)·g(v) with symmetric g); weighted quantile lemma: P{ V_{n+1} ≤ Quantile(β; Σ_i p̃_i δ_{V_i} + p̃_{n+1} δ_∞) } ≥ β; corollary: with correct weights, target marginal coverage ≥ 1−α.
- Effective sample size heuristic: n̂ = ‖w‖_1²/‖w‖_2².
- Practical weight estimation: probabilistic classification (e.g., logistic regression) distinguishing calibration vs test covariates.
- Assumptions: (i) P_{Y|X} invariant between calibration and test; (ii) w(x) known or well-estimated; (iii) absolute continuity (finite weights).

## Data sources named
Airfoil self-noise (UCI): 1,503 observations, 5 covariates (frequency, angle of attack, chord length, free-stream velocity, suction-side displacement thickness), target = sound pressure level. 5,000 random trials; shifted test set resampled with probabilities ∝ w(x)=exp(xᵀβ), β=(−1,0,0,0,1); nominal coverage 90%. R reproduction code: http://www.github.com/ryantibs/conformal/.

## Findings (numbers and facts, not vibes)
- Average empirical coverage over 5,000 trials (nominal 90%): no shift, ordinary split conformal 90.2% (sanity check); under shift, ordinary split conformal 82.2% (severe undercoverage); under shift, weighted with oracle weights 90.8% (coverage restored).
- The weighted histogram is more dispersed (reduced n̂); an n̂-matched unweighted comparison lines up closely — dispersion is the price of weighting, not a defect.
- Estimated weights (logistic classifier) perform close to oracle per the paper's follow-up discussion.
- File's acceptance gate for GSE: replicate on engine backtest — weighted coverage within ±2pp of nominal on the playoff-shift experiment while unweighted undercovers by ≥4pp, at mean width ≤130% of unweighted; REJECT weighting if n̂ < 50 (use shift as abstention signal instead).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: prediction-interval methodology / regime-shift calibration guardrail — no football behavior signal.
- TRUST-SIGNAL (secondary): the n̂ effective-sample-size guardrail is a trustworthiness check on whether a prediction should be published at all under shift.

## Engine-actionable? (yes/no + one-line what)
yes — build a shift detector + likelihood-ratio weighter (logistic calibration-games vs upcoming-slate on spread/total/weather/rest/QB-status covariates) that produces weighted split-conformal intervals for margin/total, with an n̂<100 fallback to unweighted + "too shifted to trust" flag; canonical use case: calibrate on regular season → predict playoffs; 2–4 day effort per the file's implementation spec.
