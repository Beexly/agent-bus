# arxiv-program/research/2026-09-21/arxiv-deep/1523-enforcing-tail-calibration.md
## What it is (1-2 sentences)
Ledger brief of arXiv:2506.13687 (Wessel et al., 2026) on enforcing tail calibration when training probabilistic forecast models, via loss-function adaptations (weighted scoring rules, miscalibration penalties). The ledger verdict is ADAPT: add threshold-weighted CRPS (twCRPS) as a tail-emphasis term in the engine's training loss and use TMCB as a tail diagnostic, not as the primary penalty.

## Key metrics/methods (formulas where given, else "not specified")
- LS = −log f(y) (Eq. 1); CRPS = ∫[F − 1{y≤x}]²dx (Eq. 2); optimum-score estimator θ̂ = argmin n⁻¹ΣS(F_θ,x_i,y_i) (Eq. 3).
- cLS (Eq. 10); twCRPS = ∫[F − 1{y≤x}]²w(x)dx (Eq. 11); CRPS + γ·twCRPS = twCRPS with weight 1 + γ·1{z>t} (strictly proper when the base score is strictly proper; twCRPS with w=1{z>t} alone is proper but NOT strictly proper, so it must be summed with the base score).
- Probabilistic calibration: P(F(Y)≤u) = u (Eq. 4); tail calibration: P(F_t(Y)≤u, Y>t)/E[1−F(t)] = u (Eq. 5), decomposing into occurrence (Eq. 6: P(Y>t) = E[1−F(t)]) and severity (Eq. 7: CPIT uniformity | Y>t); diagnostic R̂_t(u) (Eq. 8), decomposition (Eq. 9): R̂_t(u) = Ô·Ĥ_{z_t}(u) (occurrence ratio Ô times conditional-PIT uniformity).
- MCB (Eq. 13): MCB = ∫|Ĥ_z − u|du — Wasserstein-1 distance of PIT values from uniform. TMCB (Eq. 15): TMCB = ∫|R̂_t(u) − u|du, estimated via |Ô·z_(i),t − i/n|; TMCB → MCB as t → −∞.
- Three loss adaptations: (1) weighted score S̄ + γS̄_w (CRPS+γ·twCRPS with w(z)=1{z>t}, or log score + γ·censored-likelihood); (2) MCB penalty S̄ + γ·MCB; (3) TMCB penalty S̄ + γ·TMCB.
- γ swept: EMOS γ∈{1,…,20}, DRN/CGM γ∈{1,2,5,10,20}. γ has no absolute scale — must be tuned empirically.
- Tail-calibration diagnostic: R̂_t(u) vs u plot.

## Data sources named
- Simulation: Y|μ~N(μ,1), μ~N(0,1), threshold t=3.29 (95th percentile); mixture of F1 (unfocused, probabilistically calibrated but not tail-calibrated) and F2 (tail-calibrated, wrong scale below 0), n=100,000.
- Real: UK wind speeds, 10m, MOGREPS-G ensemble interpolated to 124 synoptic stations; train 1 Apr 2019–31 Dec 2020, test 1 Jan 2021–31 Mar 2022; covariates = ensemble mean/SD + sin/cos(day-of-year); extreme threshold 12.5 m/s (~97.5th percentile).
- Models: EMOS (truncated normal, semi-local, 4 station clusters), DRN (neural EMOS, 100 fits), CGM (conditional generative, 250 samples, 100 fits).
- Code: https://github.com/jakobwes/Enforcing-tail-calibration. Data: UK Met Office MOGREPS-G + station observations (via Met Office).

## Findings (numbers and facts, not vibes)
- Simulation: ML mixing parameter â = 0.726 (log score 1.51 vs 1.53/1.58 for the components) — neither calibrated nor tail-calibrated; MCB penalty drives â→1 (recovers calibrated F1); TMCB and cLS penalties drive â→0 (recover tail-calibrated F2).
- EMOS (γ=5): TMCB penalty → TMCB skill +65.36%, but CRPS skill −4.77% and MCB skill −187.19% (large absolute tail gain, moderate absolute overall loss); twCRPS → TMCB +44.81%, CRPS −0.09%, MCB −13.55% — gentler trade-off. MCB skill of −187.19% is the headline cost of the TMCB penalty on EMOS.
- DRN (100 fits, averaged, γ=5): baseline models have near-identical CRPS/PIT but wildly varying tail calibration from training randomness alone — a tail-calibration instability finding; TMCB penalty → TMCB +2.33%, MCB −15.83%; twCRPS → TMCB +48.90%, MCB +10.17%, CRPS −0.11%; MCB penalty → MCB +40.97% but TMCB −59.08% (penalizing overall miscalibration actively destroys tail calibration).
- CGM (γ=5): TMCB penalty → TMCB +56.88%, CRPS −0.98%, MCB −42.35%; twCRPS → TMCB +49.28%, CRPS −0.15%, MCB +1.15%; baseline CGM tails systematically too light.
- Penalizing CPIT-uniformity alone (ignoring the occurrence ratio Ô) "severely deteriorates" all other metrics by shifting density past the threshold — over-predicting extremes (Appendix C; this is the Forecaster's-dilemma lesson on intensity-vs-occurrence).
- Improvement scales with baseline tail miscalibration: well tail-calibrated models can be *hurt* by the penalty (Figs. 8, 11) — blind application is harmful; diagnostic-first workflow required.
- Assumptions/notes: forecasts continuous; exchangeability of forecast-observation pairs for diagnostics; miscalibration penalties are differentiable approximations (CGM needs PIT/CPIT smoothing for gradients); penalty terms computed on training data can overfit calibration itself (EMOS MCB unstable at large γ — train-set improvement not reflected in test); no leakage (temporal train/test split; semi-local EMOS clusters from training data).
- Appendices: A (model details), B (sample-based CRPS form), C (CPIT-MCB penalty, Eq. 18, with the overprediction-exceedances failure mode).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL (calibration/sizing program):** The paper documents exactly the failure mode the engine's current calibration cluster has — trained on CRPS/log-loss with binned ECE checks, i.e., "calibrated overall, miscalibrated in tails." The actionable mechanism: add twCRPS with w(margin)=1{|margin|>10} (blowout tail) to the training loss with γ swept on a validation season, keeping the base score so the sum stays strictly proper. Expected outcome per the paper: ~45–49% TMCB skill improvement with CRPS degradation ≤0.15%.
- **OTHER (calibration/sizing program):** The "diagnostic-first" rule is load-bearing — penalties can hurt already-calibrated models (Figs. 8/11), so the TMCB diagnostic at thresholds {7, 10, 14} points margin must gate application, per-component. The CPIT-only penalty failure mode (Appendix C, Eq. 18) is a never-do: never penalize conditional-PIT uniformity without the occurrence ratio.
- **OTHER (calibration/sizing program):** The DRN finding that 100 identical-CRPS fits had wildly different tail calibration from training randomness alone is a direct input to the engine's model-selection procedure: tail metrics must be part of fit selection, not just CRPS, or production picks inherit invisible tail noise.
- Pairs with ledger 1521 (CPIT post-processing fixes tails after the fact; this paper fixes the training objective itself) and ledger 1520 (rankECE reports the number; TMCB reports the tail number).

## Engine-actionable? (yes/no + one-line what)
**Yes** — add CRPS+γ·twCRPS (γ swept, w=1{|margin|>10}) to the probabilistic training loss and put the TMCB diagnostic (Eqs. 8–9, 15) at margin thresholds {7,10,14} into the weekly calibration report; gate the penalty per-component on baseline TMCB; never train on the CPIT-only penalty. Acceptance gate: TMCB skill ≥30% at t=10 with CRPS skill change ≥−1% on a holdout season.
