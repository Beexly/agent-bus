# arxiv-program/research/2026-09-21/arxiv-deep/2063-ctgan-conditional-gan-tabular.md
## What it is (1-2 sentences)
Xu et al. (2019, NeurIPS, arXiv:1907.00503): CTGAN, a conditional tabular GAN with mode-specific normalization (variational Gaussian mixture per continuous column) and training-by-sampling with log-frequency weighting to handle imbalanced categorical columns; file verdict is ADAPT the conditioning machinery, not the GAN backbone (superseded by diffusion per ledger 2062).
## Key metrics/methods (formulas where given, else "not specified")
- Mode-specific normalization: P(c_i) = Σ_k μ_k N(c_i; η_k, φ_k) (VGM); value assigned to mode with prob ρ_k = μ_k N(c_{i,j}; η_k, φ_k); represented as (one-hot mode indicator β_{i,j}, within-mode scalar α_{i,j} = (c_{i,j} − η_k)/(4φ_k)).
- Conditional generator: P(row) = Σ_k P_G(row|D_{i*}=k) P(D_{i*}=k); condition mask m_i^{(k)} = 1 iff i=i*, k=k*; generator loss adds cross-entropy between mask m_{i*} and generated one-hot d̂_{i*}.
- Training-by-sampling: pick discrete column uniformly, then value with PMF ∝ log-frequency (upweights rare categories).
- Networks: generator 2 hidden layers 256-wide, BN+ReLU, skip concatenations, tanh (α̂), Gumbel-softmax τ=0.2 (β̂, d̂); critic PacGAN pac=10, 2×256 leaky-ReLU(0.2)+dropout, WGAN-GP loss, Adam lr 2e-4. Batch 500, 300 epochs. TVAE companion: ELBO, 128-dim latents, Adam lr 1e-3.
- Likelihood-fitness on simulated oracles: L_syn = likelihood of T_syn under true oracle; L_test = likelihood of T_test under oracle S′ retrained on T_syn.
## Data sources named
SDGym benchmark: 7 simulated (Grid, Ring, GridR Gaussian mixtures; alarm, child, asia, insurance Bayesian networks from bnlearn.com) + 8 real (UCI: adult, census, covertype, intrusion, news; Kaggle credit; MNIST28 784-binary + label; MNIST12). Baselines: CLBN, PrivBN, MedGAN, VeeGAN, TableGAN, TVAE, Identity (returns T_train). Code: https://github.com/DAI-Lab/CTGAN, https://github.com/DAI-Lab/SDGym.
## Findings (numbers and facts, not vibes)
- CTGAN beats Bayesian-network baselines on 7/8 real datasets vs CLBN and 8/8 vs PrivBN (paper's ≥87.5% claim).
- Real data ML-efficacy (avg clf F1 / reg R²): Identity 0.743/0.14; CTGAN 0.469/−0.43 (63% of Identity F1); TVAE 0.519/−0.20.
- Ablation (absolute performance change): GMM5 −4.1%, GMM10 −8.6%, min-max −25.7% vs VGM; w/o training-by-sampling −17.8% (0% F1 on the imbalanced credit dataset — load-bearing); w/o conditional generator −36.5%; vanilla GAN −6.5%, WGANGP +1.75%, GAN+PacGAN −5.2%.
- 57/123 continuous columns multimodal; 636/1048 categorical columns have a >90% majority class (motivation numbers).
- CTGAN's generator never sees real data during training, so differential-privacy integration is easier than TVAE.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Conditional generation + log-frequency training-by-sampling as the controllable rare-outcome augmentation mechanism (upset covers, backup-QB games, extreme weather — all <10% categories) (OTHER)
- Mode-specific normalization for multimodal continuous features (margin, total, EPA differentials) (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — port the conditional-generator + training-by-sampling + VGM normalization onto the diffusion backbone to generate synthetic games conditioned on rare outcome regimes (e.g., "underdog covers by 7+") and rebalance spread-model training, with a ≥0.003 log-loss held-out gate.
