# arxiv-program/research/2026-09-21/arxiv-deep/1525-postprocessing-prediction-errors-m4.md
## What it is (1-2 sentences)
Deep read of arXiv:2608.10620 (Zaborowski, Lipiecki, Petropoulos, Weron): asks whether post-processing prediction errors can beat traditional Gaussian predictive distributions, and whether calibration should use in-sample residuals (cheap) or out-of-sample rolling-origin errors (expensive). Ledger verdict: ADAPT — the hybrid residual post-processing framework turns point forecasts into predictive distributions.

## Key metrics/methods (formulas where given, else "not specified")
- Four post-processors: HS (signed-error empirical quantiles: q̂^p = ŷ + Q_p({ε_t})); CP (absolute-error symmetric intervals: q̂^p = ŷ ∓ Q_{2p/2(1−p)}({|ε_t|})); QR/QRM (quantile ~ linear in point forecast, sorted to fix crossing); GARCH(1,1) with variance targeting (σ̂²=ω+αε²+βσ̂²; multi-step σ̂²=ω+(α+β)σ̂²; Gaussian quantiles).
- Model-specific horizon scaling: in-sample rescales (q̂^p − q̂^0.5) by ς̂_{τ|ξ}/ς̄^in_ξ; out-of-sample rescales by ς̂_{τ|ξ}/ς̂_{ξ+1|ξ} for h>1.
- Metric: CRPSS_h = [1−exp(mean ln rCRPS)]×100%, geometric mean over series; CRPS via 99 pinball quantiles; MCB rank tests (Koning et al. 2005).
- GSE transfer: build an HS post-processor over engine point forecasts (realized margin − engine spread residuals), default to in-sample calibration (~200× cheaper), QR variant only if HS underperforms; acceptance gate CRPSS>0 vs current intervals on 2022–2024 backtest with 90% coverage in [0.87,0.93]; 1 day effort.

## Data sources named
14,407 monthly M4 series (T=324 each, longest monthly M4 series; 4 flat series removed), categories Macro 3,818 / Micro 3,416 / Demographic 3,159 / Industry 2,333 / Finance 1,634 / Other 47. Test = last K=12 obs; 2,074,608 forecast–observation evaluations per method. Base point models: Theta, ETS, ARIMA (R forecast package). PostForecasts.jl (Lipiecki & Weron 2025).

## Findings (numbers and facts, not vibes)
- All 8 post-processing variants beat the benchmark on average; gains up to 4.6%: Theta QR_in 4.59%, ARIMA QR_in 4.53%, ETS HS_in 3.25% / CP_in 3.14%.
- In-sample beats out-of-sample in 11/12 model–method combos (largest gaps: HS on ETS +1.49pp, CP on ETS +1.35pp); sole exception QR on ETS (−1.78pp, out-of-sample better).
- In-sample advantage grows with horizon (Theta, ETS-HS/CP); GARCH declines with horizon, sometimes worse than benchmark at long h.
- MCB ranks: Theta → QR_in dominates; ETS → HS_in ≈ CP_in; ARIMA → QR_in ≈ GARCH_in; HS_in and QR_out beat benchmark for all three models.
- Compute: rolling-origin generation for out-of-sample calibration costs 180–215× more (Theta 8.4ms→1.8s, ETS 0.45s→83s, ARIMA 1.1s→3.3m); post-processing itself trivial (CP/HS 0.20ms, GARCH 2.2ms, QR 0.12s ≈ 600× CP/HS).
- No single method dominates: best method depends on base model and horizon. Monthly data only; out-of-sample calibration sets had 72 fewer pairs than in-sample (disclosed confound).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: engine uncertainty layer — in-sample-residual HS post-processing as the cheap default for point-forecast → predictive-distribution conversion; answers "how do we calibrate without refitting history"; complements CQR/conformal layers and CPIT alternative.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt HS_in post-processing (q̂^p = point + Q_p(in-sample residuals), horizon-rescaled) as the engine's default uncertainty layer for spread/total distributions; 1-day build with a crisp CRPSS>0 backtest gate.
