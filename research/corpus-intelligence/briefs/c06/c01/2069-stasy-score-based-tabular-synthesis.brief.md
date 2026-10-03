# arxiv-program/research/2026-09-21/arxiv-deep/2069-stasy-score-based-tabular-synthesis.md
## What it is (1-2 sentences)
STaSy applies score-based generative models (SDEs, Song et al. 2021) to tabular synthesis with T=50 diffusion steps: a self-paced learning (SPL) curriculum with a closed-form soft record-weighting rule stabilizes denoising score matching on heterogeneous rows, and probability-flow-ODE exact log-probabilities identify poorly-modeled records for targeted fine-tuning. It won the quality/diversity/time "trilemma" vs 7 baselines (CTGAN, TVAE, TableGAN, OCT-GAN, RNODE, MedGAN, VEEGAN) on 15 real datasets — strength concentrated on small (1.2–1.6K rows) and severely imbalanced (99.7/0.3) tables, the NFL-analogous regime.
## Key metrics/methods (formulas where given, else "not specified")
- Forward SDE dx = f(x,t)dt + g(t)dw; denoising score matching (Eq. 6); reverse SDE + probability-flow ODE dx = [f(x,t) − ½g(t)²∇_x log p_t(x)]dt with Hutchinson trace estimation for exact log p
- SPL (Eq. 13/15, Theorem 1): v_i* = 1 if l_i ≤ Q(α); 0 if l_i ≥ Q(β); (l_i−Q(β))/(Q(α)−Q(β)) otherwise; schedule α = α0 + log(1+c((e−1)/S)(1−α0)), S=10,000, β0 ≥ 0.8 (≥80% records train from start)
- Fine-tuning (Algorithm 1): compute per-record exact log p under the PF ODE; retrain with DSM loss on records with log p(x_i) < τ_i
- Preprocessing: min-max continuous, one-hot categorical (weakest point — needs replacing); sampling via probability flow (best) or predictor-corrector solvers; score net with Squash/Concat/Concatsquash layers
## Data sources named
15 public datasets (UCI/Kaggle): 7 binary (Credit 264.8K, Default 24K, HTRU 14.3K, Magic 15.2K, Phishing 8.8K, Shoppers 9.8K, Spambase 3.7K), 6 multi-class (Bean 10.8K, Contraceptive 1.2K, Crowdsource 8.6K, Obesity 1.6K, Robot 4.4K, Shuttle 46.4K), 2 regression (Beijing PM2.5 15.2K, News 31.6K); TSTR protocol with DecisionTree/AdaBoost/LR/MLP/RF/XGBoost, 5 repeats
## Findings (numbers and facts, not vibes)
- Trilemma (avg): STaSy quality 0.733 / diversity 0.658 / runtime 10.663s; CTGAN 0.569/0.352/0.704s; TVAE 0.521/0.564/0.100s
- Aggregate TSTR: F1 0.792, AUROC 0.925, weighted F1 0.801, R² 0.350, RMSE 4071.643 — STaSy best on all five
- TSTR highlights: Credit 0.794±0.035 (synthetic beats real-data training 0.775±0.071); Shuttle 0.865±0.072 (Naïve 0.791 — biggest SPL+fine-tuning gain +0.074); Crowdsource 0.743±0.104 (smallest class 79 records); Contraceptive 0.451±0.017
- Median test log-probability: STaSy 131.734 vs w/o fine-tuning 129.293 vs RNODE 59.327
- Coverage: STaSy 0.658 vs CTGAN 0.352; but Credit coverage only 0.014, Default 0.101 — diversity still collapses on the hardest imbalanced sets
- Ablation: full STaSy beats all three ablations on all 7 reported datasets — both SPL and fine-tuning contribute
- Sensitivity: SDE type dataset-dependent (sub-VP Spambase, VE Crowdsource/Beijing); recommended α0∈{0.2,0.25}, β0∈{0.9,0.95}
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: synthetic NFL data — wrap STaSy's SPL + log-probability fine-tuning training strategy around a better backbone; replace one-hot/min-max with TabRep roots-of-unity encodings + quantile transforms; generate synthetic team-game seasons on nflverse rows 2015–2024 (~2,700 rows, the "small heterogeneous table" regime); improvement: difficulty-aware SPL with a football prior (down-weight high-variance games initially, then let the quantile rule take over)
## Engine-actionable? (yes/no + one-line what)
Yes — build the SPL + fine-tuning wrapper (~4 engineer-days) and test real+synthetic vs Naïve diffusion on held-out 2024; gate: log-loss ≥0.003 better AND rare-regime coverage +10% relative with no column-fidelity regression AND median 2024 log-probability exceeds Naïve; reject if SPL weights collapse to near-uniform.
