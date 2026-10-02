# arxiv-program/research/2026-09-21/arxiv-deep/2068-balanced-mixed-type-diffusion-fairness-guidance.md
## What it is (1-2 sentences)
Research ledger for Fair Tab Diffusion (arXiv:2404.08254), a latent diffusion model for mixed-type tabular data with multivariate classifier-free guidance (label + regime attributes), a security gate preventing sensitive guidance from distorting the label distribution, and a tunable balancing dial that rebalances the joint outcome×regime distribution from empirical to uniform. Ledger verdict: ADAPT the machinery (not the fairness framing) as GSE's rare-regime synthetic NFL data generator — INFERENCE: regime attributes = weather severity, rest category, prime-time, division game, dome/altitude; the balancing dial is the controlled way to oversample tail NFL regimes.
## Key metrics/methods (formulas where given, else "not specified")
- Multivariate guidance (Eq. 6): ε̄(z_t,c,S) = ε̂(z_t) + w_g(γ(z_t,c) + Σ_i μ(c,s^(i);w_s,λ)(ε̂(z_t,s^(i)) − ε̂(z_t))), with warm-up γ:=0 if t<δ, momentum ν_{t+1} = βν_t + (1−β)γ_t.
- Security gate: μ = φ where |ε̂(z_t,c) − ε̂(z_t,s)| < λ, else 0; φ = max(1, w_s|ε̂(z_t,c) − ε̂(z_t,s)|).
- Balancing dial (Eq. 8): y_k^balanced = y_k + d_k·i/10, i ∈ [0,10], d_k = ȳ − y_k (deviation of joint cell k from uniform).
- Guided x̂_0 estimate for discrete features (Eq. 7); loss ℒ_T = ℒ_G + (1/C)Σ_i ℒ^(i) (Gaussian + mean multinomial VLB terms).
- Fairness metrics: DPR = min/max selection rates across groups; EOR = min of TPR/FPR ratios across groups, both ∈ [0,1]. Backbone: MLP encoder + U-Net + Transformer posterior; numericals via quantile transform; categoricals one-hot. Code: https://github.com/comp-well-org/fair-tab-diffusion.
## Data sources named
- Adult (48,842 rows, 14 attrs; train 22,611), Bank Marketing (45,211 rows, 16 features; train 22,605), COMPAS (train 8,322); 50/25/25 train/val/test; all via OpenML (links in paper's Appendix A).
## Findings (numbers and facts, not vibes)
- Fidelity (Table 2, density/correlation error, lower better, means): TabSyn 1.5%/4.1% best; Ours 11.9%/18.3% — worse than TabSyn/TabDDPM (4.1%/6.6%) but competitive with STaSy (13.1%/17.4%); SMOTE 2.2%/4.8% but DCR shows copying.
- MLE AUC (Table 3, means): Real 89.1%; TabSyn 86.0%; TabDDPM 85.6%; Ours 84.7% (only 1.3% below TabSyn despite rebalanced distribution); DCR Ours 35.5%.
- Fairness (Table 4, means, higher better): Ours DPR/EOR 68.4%/71.4% vs Real 46.2%/40.2%, FairCB 56.0%/54.4%, all SOTA diffusion <50% (TabSyn 43.8%/38.6%).
- Composite score (0.5·AUC + 0.25·DPR + 0.25·EOR) optimal at balancing level 10 (Adult, Bank) / 9 (COMPAS).
- Appendix Table 7: sampling a training-size synthetic set takes 1213.9s for Ours vs 2.7s TabSyn, 25.1s STaSy, 118.9s TabDDPM — the paper's backbone is slow; the machinery should be ported onto a fast backbone. All numbers are the paper's claims, 3 random seeds.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — rare-regime data augmentation: multivariate guidance + Eq. 8 balancing dial for tail-regime oversampling (severe weather, short rest) without distorting the outcome distribution; pairs with TabSyn/TabRep backbones (ledgers 2066/2067).
## Engine-actionable? (yes/no + one-line what)
Yes — add the multivariate guidance head + balancing dial onto GSE's backbone generator with NFL regime attributes as conditioning columns, generating tail-regime synthetic seasons at i=10 mixed with empirical at low weight; adopt only if tail-slice log-loss improves ≥0.01 with overall log-loss degradation ≤0.001 and outcome-marginal drift ≤2% TVD; improvement experiment: make i a per-cell function of the model's validation ECE (ECE-proportional balancing as active learning).
