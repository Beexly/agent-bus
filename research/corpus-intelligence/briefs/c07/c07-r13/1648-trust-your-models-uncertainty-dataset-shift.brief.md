# arxiv-program/research/2026-09-21/arxiv-deep/1648-trust-your-models-uncertainty-dataset-shift.md
## What it is (1-2 sentences)
A large-scale benchmark (Google Research, NeurIPS 2019) testing whether predictive-uncertainty methods — vanilla, temperature scaling, MC-dropout, ensembles, SVI — retain calibration as dataset shift intensifies across image, text, and ad-click modalities. Verdict: ADOPT as GSE's calibration-under-shift evaluation doctrine.
## Key metrics/methods (formulas where given, else "not specified")
- Brier score: BS = |Y|⁻¹Σ_y(p(y|x,θ) − δ(y−y_n))² = |Y|⁻¹(1 − 2p(y_n|x,θ) + Σ_y p(y|x,θ)²); proper scoring rule with Brier calibration/refinement decomposition (DeGroot & Fienberg; Bröcker).
- ECE = Σ_b |acc_b − conf_b|·(n_b/n) over confidence bins; also NLL, accuracy/AUC, predictive entropy.
- Methods compared: vanilla softmax, temperature scaling (Guo et al. 2017 post-hoc), MC-dropout, deep ensembles, SVI, last-layer SVI/dropout; hyperparameters via Bayesian optimization.
## Data sources named
MNIST (LeNet, rotation/translation shift; OOD Not-MNIST); CIFAR-10 (ResNet-20) and ImageNet (ResNet-50) with 80 corruptions (16 types × 5 intensities, Hendrycks & Dietterich 2019; OOD SVHN); 20 Newsgroups (LSTM; shifted = odd classes; OOD One Billion Word Benchmark); Criteo Display Advertising (37M examples, 13 numerical + 26 categorical features; shift via categorical token reassignment). Code: github.com/google-research/google-research (uq_benchmark_2019).
## Findings (numbers and facts, not vibes)
- Temperature scaling FAILS under shift: on Criteo it has a WORSE Brier score than vanilla — post-hoc calibration on validation actually HARMS calibration under shift; ECE "increases significantly" on CIFAR-10/ImageNet as shift grows.
- Deep ensembles consistently best across metrics and modalities under shift (accuracy AND ECE AND Brier); most gains achieved with only 5 models (50 helps marginally).
- Dropout beats temperature scaling and last-layer methods; LL-SVI/LL-Dropout often worse than vanilla on shifted/OOD data.
- SVI: worst i.i.d. accuracy on MNIST but best Brier under heavy shift (less confidently wrong); on Criteo "challenging to train and uniformly performed poorly."
- OOD: most methods are confidently wrong (low entropy + high confidence); ensembles show high accuracy AND high entropy on OOD.
- Limitations: classification-only (no regression analog); synthetic shift; no conformal methods (2019 timing); ECE itself estimator-noisy under shift.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: temperature scaling validated only on i.i.d. backtests is an untested trust claim; "i.i.d. calibration does not transfer" is the governing doctrine for GSE's calibration library.
- OTHER: model-parliament ensembles are the most shift-robust uncertainty method — evidence for ensemble-based game probabilities; shift dimensions named (season phase, QB changes, weather regime) map directly to GSE calibration strata.
## Engine-actionable? (yes/no + one-line what)
Yes — extend the calibration bakeoff with a shift-stress harness (calibrate weeks 1–12, evaluate weeks 13–18 + playoffs; pre/post QB-injury splits) and retire any post-hoc calibrator that scores worse-than-vanilla Brier under shift.
