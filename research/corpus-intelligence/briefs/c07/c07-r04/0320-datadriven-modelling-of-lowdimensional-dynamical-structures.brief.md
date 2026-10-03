# arxiv-program/research/2026-09-21/arxiv-deep/0320-datadriven-modelling-of-lowdimensional-dynamical-structures.md
## What it is (1-2 sentences)
Tests whether Neural Ordinary Differential Equations (NODEs) can learn the low-dimensional dynamical structure of complex, non-cyclic full-body movement (baseball pitching) and predict the full motion from only its initial segment, without predefined order parameters or stationarity assumptions. Verdict recorded in the file: ADAPT — pitching domain doesn't transfer, but the method (transformer-encoded latent space + neural-ODE flow predicting full motion from ~8% initial conditions) is directly portable to NFL tracking-data trajectory forecasting.

## Key metrics/methods (formulas where given, else "not specified")
(1) dẑ(t)/dt = f_θ(z(t), t) — latent evolution as deterministic neural ODE flow, f_θ a 3-layer MLP (2 hidden × 128 units, tanh). (2) L = λ_recon L_recon + λ_KL L_KL, with λ_recon = 1.0, λ_KL = 1×10⁻³ (KL regularizes latent posterior toward standard normal). (3) R²(t) = 1 − SS_res(t)/SS_ori(t) — time-resolved coefficient of determination. Architecture: transformer encoder (3 layers, 8 heads, dim 256, causal mask) maps full sequence x_{0:T−1} ∈ R^{T×45} to K=12 latent points in d=3 dimensions; z_0 encodes ~the first 8% of motion and is the ODE initial condition; MLP decoder (2 hidden × 256 units ReLU, linear output) reconstructs 45-D joints. Training: Adam, LR 1×10⁻⁴, batch 32, 1500 epochs, NVIDIA T4, features standardized, 10-fold CV per pitcher. Baseline: training-mean predictor.

## Data sources named
Lab mocap baseball pitching: 8 collegiate pitchers (174.1 ± 4.1 cm, 74.91 ± 3.8 kg, 19.87 ± 1.0 yr, >10 yr experience), 16 optical cameras at 200 Hz, 15 joints → 45-D per frame; 968 pitches total (per-pitcher: 105/450, 100/396, 81/488, 137/513, 140/447, 115/503, 140/359, 150/391 pitches/frames). Onset = lead-knee vertical velocity dropping below 5% of max; end = ball release (max right-wrist velocity); no temporal normalization (real physical time). Dataset + code public: https://github.com/takamido/NODE_baseball_pitching.

## Findings (numbers and facts, not vibes)
- Mean RMSE across pitchers over the full prediction interval: 66.1 ± 15.7 mm
- Mean R² over entire motion: 0.46 ± 0.20; over second half: 0.49 ± 0.20 ("R² > 0.45")
- Headline: ~50% of variance in the latter half of the motion explained from only the initial ~8% of the sequence
- NODE prediction mitigates late-phase error growth that the training-mean baseline suffers (Figure 2)
- Generated motions capture trial-to-trial variability from subtle preparatory-phase differences, but reconstructed motions are more stereotyped than ground truth (~50% of variance dropped — deterministic model averages away functional variability)
- No cross-pitcher evaluation (per-pitcher models only); expert-only sample (novices likely worse); point predictions only, no uncertainty

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — latent-dynamics trajectory forecasting method (a deterministic complement to the diffusion-trajectory family already in the corpus, 2503.18589); directly applicable to NGS tracking-data player-trajectory prediction (initial 0.5 s of a play → full trajectory), expected-YAC modeling, and anomaly/broken-tackle detection from trajectory deviation.

## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL player-trajectory predictor: transformer encoder → low-dim latent ODE → decoder on NGS 10-Hz tracking (ball-carrier + nearest defenders), conditioned on down/distance/formation, gated on beating constant-velocity extrapolation by ≥15% RMSE on held-out games.
