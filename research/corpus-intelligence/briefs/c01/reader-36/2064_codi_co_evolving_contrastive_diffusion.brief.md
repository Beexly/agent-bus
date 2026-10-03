# arxiv-program/research/2026-09-21/arxiv-deep/2064-codi-co-evolving-contrastive-diffusion.md

## What it is (1-2 sentences)
A research ledger (completed 2026-09-22) distilling Chaejeong Lee et al.'s CoDi paper (arXiv:2304.12654, ICML 2023) on mixed-type tabular synthesis: two physically separated diffusion models (Gaussian for continuous, categorical for discrete) that co-evolve by conditioning on each other's perturbed states, bound together with a triplet contrastive loss. The ledger's verdict is ADAPT, with an explicit fallback hierarchy: TabDDPM (ledger 2062) first, CoDi only if TabDDPM under-captures continuous–discrete interactions.

## Key metrics/methods (formulas where given, else "not specified")
- Co-evolving conditioning: reverse p_θC(x_{t-1}^C | x_t^C, x_t^D) and p_θD(x_{t-1}^{D_i} | x_t^{D_i}, x_t^C) — each step conditions on BOTH models' previous-step outputs.
- Contrastive triplet loss: L_CL(A,P,N) = Σ max{d(A_i,P_i) − d(A_i,N_i) + m, 0} (Eq. 16). Anchor = real sample; positive = one-step-estimated x̂_0^+ conditioned on true counterpart (Eqs. 17–18: x̂_0^{C+} = (x_t^C − √(1−ᾱ_t) ε_θC(x_t^C,t|x_t^D))/√ᾱ_t); negative = x̂_0^− conditioned on a NEGATIVE condition built by shuffling the counterpart block across rows (Method 3: permute whole discrete/continuous blocks between records, preserving within-block pairing). Distance: Euclidean for continuous, cross-entropy for discrete.
- Combined losses: L_C = L_{Diff_C} + λ_C L_{CL_C}, L_D = L_{Diff_D} + λ_D L_{CL_D}, 0<λ<1 (Eqs. 19–20).
- Preprocessing: min-max scaler to [−1,1] continuous, one-hot discrete; U-Net-style fully-connected net, 4 blocks with skip connections, sinusoidal time embedding, condition projected to half input dim and concatenated. Time embedding: t_emb = FC²(ReLU(FC¹(Emb(t)))) (Eq. 21).
- Evaluation: TSTR (train classifier/regressor on fake, validate on real train, test on real test; 5 fake samples × best-hyperparameter search); coverage diversity (Naeem et al. 2020: fraction of fake samples with a real sample in their 5th-nearest neighborhood); wall-clock sampling time for 10K fakes (mean ± std over 5 runs).

## Data sources named
- 11 real-world tabular benchmark datasets (UCI-style): Bank, Heart, Seismic, Stroke, CMC, Customer, Faults, Obesity, Absent, Drug, Insurance, plus Car/Clave/Nursery/Phishing for the discrete-space experiment. Public.
- Code: https://github.com/ChaejeongLee/CoDi.
- GSE implementation target (ledger spec): nflverse game-level table (2015–2025) — continuous = EPA/play, success rates, pace, market numbers; discrete = venue type, surface, weather bin, rest category, division/game-script regime. Contrastive negative example: shuffle discrete blocks across games (attach a dome-game weather block to an outdoor-game efficiency vector).
- Proposed fix: replace paper's min-max with quantile transform for long-tailed NFL margin/EPA features.

## Findings (numbers and facts, not vibes)
- TSTR quality (Table 1, CoDi vs STaSy vs Identity=real): Binary F1 0.4726 / 0.4559 / 0.4154 (synthetic beats real — ledger flags TSTR-with-best-hyperparameters inflates the protocol); Binary AUROC 0.8106 / 0.7961 / 0.8119; Multi-class macro F1 0.6221 / 0.6078 / 0.6514; Multi-class AUROC 0.8026 / 0.7997 / 0.8230; Regression R² 0.4794 (ONLY positive among 9 methods; Identity 0.6673; STaSy −1.3200; all GAN baselines −inf or ≤ −0.07); RMSE 0.6477 vs Identity 0.3593.
- Diversity coverage (Table 2): CoDi 0.6931 (best), STaSy 0.5771, TableGAN 0.5759, TVAE 0.3903, CTGAN 0.3834, RNODE 0.3841, OCT-GAN 0.2547, MedGAN 0.0155, VEEGAN 0.0019.
- Sampling time for 10K fakes (Table 3): CoDi 0.5187s vs STaSy 4.6417s (~9× faster; smaller per-model dims + U-Net skips); RNODE 103.14s; OCT-GAN 0.6008s; TVAE 0.0140s (fast but low diversity).
- Discrete-space ablation (Table 4): discrete-space diffusion beats continuous-space on all 4 discrete-only datasets — e.g., Phishing F1 0.931±0.012 vs 0.915±0.008, coverage 0.644 vs 0.127 (continuous model collapses category counts, Fig. 6).
- Negative-sampling ablation (Table 5): Method 3 (whole-block shuffle) best — Heart F1 0.872±0.039 / coverage 0.949±0.012; Faults 0.715±0.046; Insurance R² 0.575±0.398. Methods 1–2 show unstable triplet-loss curves (Fig. 8).
- Contrastive-learning ablation (Table 6): CL improves F1 on Bank (0.566 vs 0.527), Seismic (0.305 vs 0.210), Faults, Obesity; diversity on Heart (0.949 vs 0.879), Stroke (0.919 vs 0.651); Absent R² −0.026→0.095.
- Baselines beaten: MedGAN, VEEGAN, CTGAN (binary F1 0.3432), TVAE (0.3188), TableGAN (0.4078), OCT-GAN (0.3814), RNODE (0.3208).
- Paper limitations noted in ledger: no head-to-head vs TabDDPM exists in either paper; random splits only (no temporal evaluation); cruder min-max preprocessing than CTGAN's VGM; two models + triplet loss = more hyperparameters (λ_C, λ_D, margin m) and a more fragile training loop; inapplicable to pure-continuous or pure-discrete tables; no privacy analysis.
- Acceptance gate set for GSE: ADOPT CoDi over TabDDPM if real+CoDi-synthetic beats real+TabDDPM-synthetic by ≥0.002 log-loss on held-out 2024 NFL season OR ties within 0.001 while cross-type correlation MAE is ≥10% lower; REJECT if neither holds or training instability across 2+ seeds. 3 seeds each; 5% TVD marginal-fidelity rule from ledger 2062.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — synthetic data generation machinery for engine augmentation (game-level tables). No direct behavioral, coaching, OL, or trust-signal content; it is a generative-modeling method paper applied to generic tabular data.

## Engine-actionable? (yes/no + one-line what)
Yes — the method gives GSE a principled way to synthesize game-level rows that preserve weather/venue × efficiency interactions (wind bin × passing EPA, dome × kicking) for backtest augmentation, with the concrete one-step triplet-negative construction (cross-game discrete-block shuffling) and a pre-registered 10%-correlation-improvement gate versus TabDDPM.
