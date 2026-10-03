# arxiv-deep/0745-conformal-predictive-systems-covariate-shift.md
## What it is (1-2 sentences)
Read-and-ledger of Jonkers, Van Wallendael, Duchateau & Van Hoecke (2024), "Conformal Predictive Systems Under Covariate Shift" (arXiv:2404.15018): weights calibration conformity scores by the estimated test-vs-calibration covariate likelihood ratio ŵ(x) to restore valid conformal predictive distributions (WSCPS) when exchangeability breaks under covariate shift. Verdict: ADAPT with one flagged caveat — the probabilistic-validity claim is still a CONJECTURE (3.5), empirically supported but unproved.

## Key metrics/methods (formulas where given, else "not specified")
- Likelihood ratio: `w(x) = dP_test/dP_cal`.
- WSCPS predictive distribution: `Q̂(y|x_{n+1}) = Σ_i p_i^w(x_{n+1})·1{C_i ≤ C(x_{n+1},y)} + ...`, with normalized weights `p_i^w ∝ ŵ(x_i)`.
- Likelihood ratio estimated via a probabilistic classifier (test-vs-calibration discriminator).
- Assumption: **covariate shift only** — P(Y|X) is invariant, only P(X) changes; the likelihood ratio is estimable (needs overlap/support).
- Conjecture 3.5 (UNPROVED): the WSCPS output is asymptotically uniformly distributed (probabilistically valid) under consistent ŵ estimation. The coverage guarantee under estimated weights is approximate.
- Comparators: unweighted CPS (coverage breaks under shift), oracle weights. Metrics: empirical coverage at nominal 80%, CRPS of predictive distributions, interval width.

## Data sources named
- (1) Airfoil self-noise (UCI): N=1,503, 5 covariates; splits 25/25/50 train/calibration/test; synthetic shift induced by exponential tilting w(x)=exp(xᵀβ) with β=(−1,0,0,0,1).
- (2) Synthetic Kang–Schafer-style setup (classic covariate-shift benchmark): 1,000 trials.
- Base regressors: simple regression models (CPS layer is model-agnostic).
- Code: https://github.com/predict-idlab/crepes-weighted (Python, extends the `crepes` conformal package).
- Validation: 1,000 Monte Carlo trials per setup; fresh 25/25/50 splits each trial; shift strength fixed; coverage and CRPS averaged over trials.

## Findings (numbers and facts, not vibes)
- Airfoil under shift: unweighted CPS coverage collapses below nominal; **WSCPS restores average coverage to the desired 80%** and slightly improves (lowers) CRPS vs. unweighted CPS.
- Kang–Schafer: same pattern — coverage restored, CRPS competitive-to-better.
- The headline is restoration-to-nominal rather than a percentage improvement; interval widths remain reasonable (no blowup reported). Only 80% nominal level tested.
- Limitations: (a) weight estimation is the whole game — a bad test-vs-calibration discriminator gives bad weights and no validity; the paper's shifts are clean exponential tilts, far tidier than NFL regime drift. (b) Assumes P(Y|X) invariance — in the NFL, a QB change arguably changes P(Y|X) itself (concept drift), which WSCPS does not handle. (c) Small datasets (N=1,503) — weight-estimation variance at GSE scale (~hundreds of games) is a real concern. (d) Conjecture 3.5 unproved — validity rests on empirical evidence + conjecture, not a theorem.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **COACHING + QB-BEHAVIOR (OTHER — regime-drift handling):** Directly targets GSE's known regime problem (the cqr.ts audit; the standing non-stationarity concern). The ledger's implementation spec builds a **regime discriminator**: logistic regression distinguishing "current-regime games" (last 4 weeks) from the calibration window (trailing 2 seasons) on covariates including **QB identity flags** (QB-BEHAVIOR program: starting-QB changes are explicit shift episodes), injury counts, weather, home/away, line movement; its predicted odds become ŵ(x) in a weighted conformal interval layer for totals/spreads. Shift episodes for evaluation are defined as weeks following a starting-QB change or head-coach firing — this makes the coaching-tendencies program and QB-behavioral profiles the *detection surface* for the shift machinery.
- **CALIBRATION/SIZING (OTHER):** WSCPS is the interval/uncertainty layer behind the publish gate (ledger 0701): when calibrated intervals stay valid during drift episodes, the entropy-based publish rule keeps meaning something; when P(Y|X) itself drifts (limitation (b)), the acceptance gate (WSCPS still miscalibrated during episodes ⇒ concept drift) tells the engine to widen rather than pretend.
- **TRUST-SIGNAL (OTHER):** Coverage restoration during regime episodes is a trust precondition: a trust surface that quotes intervals calibrated on a stale regime will break exactly when users need it most. WSCPS offers the mechanism to keep quoted uncertainty honest through drift.
- UNCERTAIN: whether NFL regime changes are covariate shift (fixable) or concept drift (not fixable by weighting) — the paper's own P(Y|X)-invariance assumption is the crux, and QB changes plausibly violate it; the ledger's acceptance gate (reject if WSCPS still miscalibrated during episodes) is the empirical test.
- CONTRADICTION: none; complements ledger 0701 (fixed-rate reject) and the CQR conformal work; fills a gap the existing-research map explicitly lacked (no covariate-shift-aware conformal).

## Engine-actionable? (yes/no + one-line what)
**Yes, conditional** — build the regime discriminator (last-4-weeks vs trailing-2-seasons) and a weighted conformal interval layer for totals/spreads; ADOPT only if episode-conditional coverage lands within 3pp of nominal without >10% width inflation, REJECT if effective calibration sample collapses (<30%) or concept drift dominates. ~1 week; crepes-weighted port.

Referenced files/papers/datasets: UCI Airfoil self-noise; Kang–Schafer benchmark; `crepes` / crepes-weighted (predict-idlab); corpus cross-refs: CQR conformal audit (cqr.ts), ledger 0700/0701, existing-research-map.md.
