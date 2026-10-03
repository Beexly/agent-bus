# arxiv-program/research/2026-09-21/arxiv-deep/1648-trust-your-models-uncertainty-dataset-shift.md
## What it is (1-2 sentences)
Large-scale benchmark (NeurIPS 2019, Google Research) of post-hoc and Bayesian uncertainty methods under dataset shift — the empirical finding is that temperature scaling does NOT survive shift (worse Brier than vanilla on Criteo), ensembles degrade most gracefully, and i.i.d.-validation calibration does not transfer. Verdict in file: ADOPT as GSE's calibration-under-shift evaluation doctrine.

## Key metrics/methods (formulas where given, else "not specified")
- Brier score (verbatim): `BS = |𝒴|⁻¹ Σ_y ( p(y|x_n,θ) − δ(y − y_n) )² = |𝒴|⁻¹( 1 − 2p(y_n|x_n,θ) + Σ_y p(y|x_n,θ)² )`
- Brier calibration/refinement decomposition (DeGroot & Fienberg; Bröcker).
- ECE = Σ_b (|acc_b − conf_b|)·(n_b/n) over confidence bins.
- Methods: vanilla (max softmax), temperature scaling (Guo et al. 2017, post-hoc on validation), MC-dropout, deep ensembles, SVI (Blundell et al.), last-layer SVI/dropout (LL-SVI, LL-Dropout).
- Metrics tracked: accuracy/AUC, Brier, NLL, ECE, predictive entropy, each as a function of shift intensity.
- Hyperparameters via Bayesian optimization (except ImageNet). Capacity control: doubled-filter vanilla/dropout models ruled out "ensembles just have more parameters" (no gain — Appendix C).

## Data sources named
- MNIST (LeNet): shift = rotation/translation intensity; OOD = Not-MNIST. 10 runs (SE shaded).
- CIFAR-10 (ResNet-20), ImageNet (ResNet-50): shift = 80 corruptions (16 types × 5 intensities, Hendrycks & Dietterich 2019); OOD = SVHN for CIFAR models; boxplots over the 16 corruption types per intensity.
- 20 Newsgroups (LSTM): in-distribution = 10 even classes, shifted = 10 odd classes; OOD = One Billion Word Benchmark.
- Criteo Display Advertising: 37M examples, 13 numerical + 26 categorical features; shift = random reassignment of categorical tokens with probability controlling intensity (simulates non-stationary hash/token drift).
- Code: https://github.com/google-research/google-research/tree/master/uq_benchmark_2019. Datasets: MNIST, CIFAR-10-C/ImageNet-C (Hendrycks), 20 Newsgroups, Criteo (Kaggle), SVHN, Not-MNIST (all public).

## Findings (numbers and facts, not vibes)
- Temperature scaling does NOT survive shift: on MNIST nearly all methods beat post-hoc temperature scaling in Brier under shift; on CIFAR-10/ImageNet its ECE "increases significantly as the shift increases"; on Criteo temperature scaling has a WORSE Brier score than vanilla — post-hoc calibration on the validation set actually HARMS calibration under dataset shift.
- Ensembles consistently best across metrics/modalities under shift (accuracy AND ECE AND Brier); most ensemble gains achieved with only 5 models (50 helps marginally).
- Dropout consistently beats temperature scaling and last-layer methods; LL-SVI/LL-Dropout often WORSE than vanilla on shifted/OOD data.
- SVI: worst i.i.d. accuracy on MNIST but best Brier under heavy shift (less confidently wrong); on Criteo SVI "proved challenging to train and uniformly performed poorly."
- OOD: most methods show low entropy + high confidence on fully OOD data ("confidently wrong"); ensembles have high accuracy AND high entropy on OOD.
- Brier is a proper scoring rule (optimum = perfect prediction) but over-emphasizes tail probabilities and is insensitive to rare-event probabilities (paper §3 discussion).
- Limitations: classification-only (GSE's margin/total targets are regression — the regression analogue of "temperature scaling fails under shift" needs its own validation); shift is synthetic (corruptions, token randomization); no conformal methods compared (2019 timing — no CQR/ACI ranking); ECE with fixed bins is estimator-noisy under shift.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL:** The paper converts a vague worry into an adoption-ready evaluation harness — "trust" here is literal: GSE's calibration library (`temperature-map.ts`, `platt-scaling.ts`, `isotonic-pava.ts`, `brier.ts`, `ece.ts`, `brier-ece.test.ts`, `calibration-map-bakeoff.ts`) implements exactly the post-hoc methods indicted under shift but validates them on i.i.d.-ish backtests only. Decision rule: any calibrator whose Brier under temporal shift is worse than vanilla gets flagged/retired — per the paper, shipping it is worse than shipping nothing. Serves the trust-target intake and calibration programs.
- **OTHER (calibration/sizing):** Shift-stress protocol maps directly: calibrate on weeks 1–12, evaluate on weeks 13–18 + playoffs (temporal shift); calibrate pre-QB-injury, evaluate post-injury; plus synthetic feature-noise shift à la Hendrycks. The "ensembles need only 5 members" result disciplines the cost of the model-parliament ensemble. Serves calibration/sizing program.
- **QB-BEHAVIOR:** The improvement experiment — shift-aware temperature fit as a FUNCTION of shift indicators (weeks-since-QB-change, December flag, weather bucket) instead of a scalar — is itself a QB-behavior-adjacent conditioning: calibration parameters that respond to QB-regime changes. Serves calibration program (secondary).
- **COACHING:** The Criteo token-drift shift analogue is coaching/scheme drift — GSE game features → cover/no-cover with shift = season phase, QB changes, weather regime. No direct coaching finding.

## Engine-actionable? (yes/no + one-line what)
Yes — extend the calibration bakeoff (`calibration-map-bakeoff.ts`) with temporal-shift stress dimensions (weeks 1–12 → weeks 13–18 + playoffs, pre/post-QB-injury), evaluating Brier/NLL/ECE across shift intensities for temperature scaling, Platt, isotonic, CQR, ACI, and ensembles; retire any calibrator that scores worse than vanilla under shift.
