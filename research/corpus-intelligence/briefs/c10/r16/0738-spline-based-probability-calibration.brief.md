# arxiv-program/research/2026-09-21/arxiv-deep/0738-spline-based-probability-calibration.brief.md
## What it is (1-2 sentences)
Deep read of Lucena (2018), arXiv:1809.07751: SplineCalib — non-parametric logistic regression of calibration-set outcomes on natural-cubic-spline expansions of model scores, with a compact-logit pre-transform for overconfident models, a one-vs-rest multi-class extension, and a cross-validated variant that conserves training data. Verdict ADAPT as a direct upgrade over Platt/isotonic for GSE's probability outputs.
## Key metrics/methods (formulas where given, else "not specified")
- Loss: J(f) = −Σ_i [y_i log f(x_i) + (1−y_i) log(1−f(x_i))] + ½ λ ∫ f''(t) dt (Eq. 1).
- Algorithm 1: sample 200 knots from unique score values; expand into natural cubic spline basis N_1=1, N_2=x, N_{k+2}(x)=d_k(x)−d_{K−1}(x) with d_k(x)=[(x−φ_k)_+^3 − (x−φ_K)_+^3]/(φ_K−φ_k); CV-L2 logistic regression over λ choosing λ* by CV log-loss; f(z)=logistic(X_natural(z)·β̂).
- Compact logit (Algorithm 2): G_ε(x) = ((1−2ε)/(2 log((1−ε)/ε)))·log(x/(1−x)) + ½ for x∈[ε,1−ε], x otherwise; ε = 10^(r−1), r = ⌊log10(min(1−p_i))⌋.
- Multi-class (Algorithm 3): fit per one-vs-rest column then renormalize f_i(x_i)/Σ_j f_j(x_j).
- Cross-validated calibration (Algorithm 4): 5-fold models, stack out-of-fold predictions into calibration set, fit calibrator, train final model on full data.
- Code: `ml-insights` package (`pip install ml_insights`), notebooks at https://github.com/numeristical/introspective.
## Data sources named
MIMIC-III ICU mortality (59,726 stays, public); UCI Adult/Census Income (32,561 train / 16,281 test, public); CIFAR-10 (50,000/10,000, public, Keras example CNN trained 800 epochs).
## Findings (numbers and facts, not vibes)
- MIMIC-III RF log-loss: uncalibrated 0.2525, isotonic 0.2592, Platt 0.2535, SplineCalib 0.2442 (best).
- Adult NB log-loss: uncalibrated 0.7448, isotonic 0.3976, Platt 0.4287, SplineCalib 0.4032, SplineCalib-compact-logit 0.3934 (best calibrated).
- CIFAR-10 CNN (800 epochs): log-loss uncalibrated 0.4361, clipped 0.4150, SplineCalib 0.3633; accuracy 87.64% → 87.88%.
- Cross-validated variant: log-loss 0.3704 → 0.3286; accuracy 88.86% → 89.04%.
- Key claim: 40k-train + 10k-calibrate calibrated model beat the uncalibrated model trained on full 50k — calibration "worth it" vs more training data.
- SplineCalib is NOT in GSE's existing-research calibration map (Platt and isotonic are, and are the baselines this paper beats) — extension, not duplicate.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: smoother, data-adaptive replacement for GSE's existing Platt/isotonic post-hoc calibrators on win-probability/spread/total outputs; plus a multi-class scheme GSE currently lacks.
- OTHER: improvement experiment — fit separate spline calibrators per conditioning bin (favorite/underdog, home/away, high/low total) as a Mondrian-style combination, testing whether miscalibration is regime-dependent.
- OTHER: paper reports no CIs on log-loss gains; CIFAR accuracy gains are small (+0.24pp, +0.18pp); no time-series validation — NFL non-stationarity requires time-ordered splits.
## Engine-actionable? (yes/no + one-line what)
Yes — build a stateless post-hoc SplineCalib layer (200-knot natural-spline CV-logistic + compact-logit variant) on GSE win/spread/total probabilities over rolling 2–3-season time-ordered windows; acceptance: ≥1% relative log-loss reduction vs current calibrator on BOTH spread and total markets with no ROI regression on posted picks.
