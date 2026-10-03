# arxiv-program/research/2026-09-21/arxiv-deep/2064-codi-co-evolving-contrastive-diffusion.md
## What it is (1-2 sentences)
A ledger (read 2026-09-22) on the CoDi paper (Lee, Kim, Park 2023, ICML): two physically separated diffusion models (Gaussian for continuous columns, categorical for discrete columns) that co-evolve by conditioning on each other's perturbed states and are bound by a triplet contrastive loss to preserve the joint distribution of mixed-type tabular data. Ledger verdict: ADAPT as a fallback if TabDDPM under-captures continuous–discrete interactions in NFL game tables.
## Key metrics/methods (formulas where given, else "not specified")
Triplet contrastive loss L_CL(A,P,N) = Σ max{d(A_i,P_i) − d(A_i,N_i) + m, 0} (Eq. 16); final losses L_C = L_{Diff_C} + λ_C L_{CL_C}, L_D = L_{Diff_D} + λ_D L_{CL_D}, 0<λ<1 (Eqs. 19–20); co-evolving reverse p_{θC}(x_{t-1}^C | x_t^C, x_t^D), p_{θD}(x_{t-1}^{D_i} | x_t^{D_i}, x_t^C). Evaluation: TSTR sampling quality (F1/AUROC, R²/RMSE), coverage diversity (Naeem et al. 2020: fraction of fake samples with a real sample in their 5th-nearest neighborhood), wall-clock sampling time for 10K fakes.
## Data sources named
11 public UCI-style benchmark tabular datasets (Bank, Heart, Seismic, Stroke, CMC, Customer, Faults, Obesity, Absent, Drug, Insurance; plus Car/Clave/Nursery/Phishing for the discrete-space ablation). NFL translation mapped in the ledger: continuous = EPA/play, success rates, pace, market numbers; discrete = venue type, surface, weather bin, rest category, outcome regime. 8 baselines: MedGAN, VEEGAN, CTGAN, TVAE, TableGAN, OCT-GAN, RNODE, STaSy. Code: https://github.com/ChaejeongLee/CoDi.
## Findings (numbers and facts, not vibes)
- Binary F1: CoDi 0.4726 vs STaSy 0.4559 vs Identity(real) 0.4154; binary AUROC 0.8106 vs 0.7961 vs 0.8119.
- Regression R²: CoDi 0.4794 (only positive among 9 methods); STaSy −1.3200; all others ≤ −0.07 or −inf.
- Coverage diversity: CoDi 0.6931 (best) vs STaSy 0.5771, CTGAN 0.3834, VEEGAN 0.0019.
- Sampling time (10K fakes): CoDi 0.5187s vs STaSy 4.6417s (~9× faster); RNODE 103.14s; TVAE 0.0140s (fast, low diversity).
- Negative-sampling ablation: whole-block shuffle (Method 3) best — Heart F1 0.872±0.039 / coverage 0.949±0.012; other methods show unstable triplet-loss curves.
- Contrastive learning adds: Bank F1 0.527→0.566, Seismic 0.210→0.305, Stroke coverage 0.651→0.919.
- Not compared against TabDDPM (both ICML-adjacent 2022; no head-to-head exists).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: synthetic NFL game-table generation with preserved cross-type correlations (weather/venue categories × continuous efficiency metrics, e.g., wind bin × passing EPA, rest-days bin × rushing efficiency) — could feed QB behavioral profiling or coaching-tendency studies with regime-realistic synthetic games.
- TRUST-SIGNAL: the paper's own adversarial note is a trust signal — TSTR-with-best-hyperparameters lets synthetic beat real (binary F1 0.4726 vs Identity 0.4154), so generator protocols can flatter; judge generator claims by baseline-vs-baseline comparisons, not synthetic-vs-real.
## Engine-actionable? (yes/no + one-line what)
yes — adopt as fallback synthesizer if TabDDPM fails the cross-type correlation fidelity gate: pre-registered acceptance test is cross-type correlation MAE ≥10% better than TabDDPM on nflverse 2018–2024 game rows; ~1 week build, trigger-only (not built yet).
