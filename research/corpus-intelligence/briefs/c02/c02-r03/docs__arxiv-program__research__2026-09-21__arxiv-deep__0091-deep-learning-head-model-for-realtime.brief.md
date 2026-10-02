# docs/arxiv-program/research/2026-09-21/arxiv-deep/0091-deep-learning-head-model-for-realtime.md
## What it is (1-2 sentences)
A deep-neural-network surrogate for finite-element head-model simulations that predicts peak brain strain (maximum principal strain, MPS) across 4124 brain elements from head-impact kinematics in under 0.001 s. The ledger verdict is REJECT: concussion biomechanics with no path into GSE's game-outcome engine.
## Key metrics/methods (formulas where given, else "not specified")
- Feature standardization: f̄(x,i) = (f(x,i) − mean_x(feature(x,i))) / std_x(feature(x,i)).
- EMA of signal derivative: y_i(n) = (1−a)·y_i(n−1) + a·(c_i(n) − c_i(n−1)), n ≥ 1, with smoothing a ∈ {1/SR, 1/(10·SR), 1/(100·SR)}, SR = 1 kHz; E_{a,i} = {min(y_i(n)), max(y_i(n))}.
- Label whitening: z_whitened(x,i) = (z_raw(x,i) − mean_x(z_raw(x,i))) / std_x(z_raw(x,i)), means/stds from training set.
- DNN: 160 input features → 300 ReLU → dropout 0.5 → 100 ReLU → dropout 0.5 → 20 ReLU → 4124 outputs; MSE loss, Adam, batch 128, L2. Labels log-transformed then per-element whitened before training.
- Feature set: 8 channels (angular velocity ωx,ωy,ωz, |ω| + angular acceleration αx,αy,αz, |α|; α via 5-point stencil derivative) × 20 time-domain features per channel = 160 features.
- Hyperparameter tuning criterion: RMSE ("more sensitive to large errors"); evaluation: MAE, RMSE, R², Spearman correlation per element; R² and RMSE of 95% MPS.
- Gaussian-noise data augmentation (std 0.01 and 0.02 × data std) tripled the training set.
## Data sources named
- HM (1422 impacts): simulated hybrid III ATD dummy-head impacts, velocities 2–8 m/s, with Y/Z axis-switching augmentation.
- CF1 (184 impacts): on-field college football impacts, original Stanford instrumented mouthguard.
- CF2 (118 impacts): on-field college football impacts, updated Stanford instrumented mouthguard.
- MMA (79 impacts): MMA head impacts, updated mouthguard. All on-field impacts video-confirmed.
- Ground truth: KTH finite-element head model, 4124 brain elements, peak MPS per element. Highest 95% MPS per dataset: HM 0.4423, CF1 0.5093, CF2 0.4184, MMA 0.7051.
- Access: proprietary Stanford mouthguard recordings; not public; no code/data released.
## Findings (numbers and facts, not vibes)
- Mixture task (all 1803 impacts, 70/15/15, 20 repeats): MAE mean 0.015, RMSE mean 0.025 (std 0.002), R² mean 0.837, Spearman mean 0.902; 95% MPS R² mean 0.897, RMSE mean 0.032. MAE < 0.03 in all tasks, smaller than strain differences between injury and non-injury cases.
- Basis task (HM only): R² mean 0.867, Spearman 0.931, 95% MPS R² 0.906. On-field CF1: R² 0.755; CF2: 0.670; MMA: 0.648 — MMA weakest.
- Abstract headline: full-brain MPS estimate in <0.001 s on Intel Core i5-6300U, average RMSE 0.025 (std 0.002 over 20 repeats).
- Feature analysis (Wilcoxon signed-rank): EMA-derivative features most predictive (p ≤ 0.001); angular acceleration slightly more predictive than angular velocity (p ≈ 0.083/0.084); time-history features > signal-value features (p ≤ 0.01); directional components > magnitudes (p ≤ 0.01).
- Angular-acceleration finding contradicts prior study [32] (which found angular velocity magnitude better correlated with MPS); authors attribute the difference to their time-history features.
- Limitations noted in the file: Y/Z axis-switching augmentation is physically suspect (neck rotation differs across planes, authors' own flag); HM data are unhelmeted ATD impacts; no NFL data; no axonal fiber strain (KTH version lacks fibers); random splits risk near-duplicate impacts across train/test.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: injury-biomechanics domain; no game-outcome, player-behavior, coaching, or scheme content. No usable GSE intelligence.
## Engine-actionable? (yes/no + one-line what)
No — REJECT at intake; concussion strain modeling has no path into GSE's prediction engine (the only transferable seed is the general "DNN surrogate for an expensive physics simulation" idea, and no such lane exists).
