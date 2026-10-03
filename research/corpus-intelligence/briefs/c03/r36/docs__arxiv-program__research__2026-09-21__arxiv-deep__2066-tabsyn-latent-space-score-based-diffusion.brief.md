# docs/arxiv-program/research/2026-09-21/arxiv-deep/2066-tabsyn-latent-space-score-based-diffusion.md
## What it is (1-2 sentences)
Deep read of arXiv:2310.09656 (Zhang et al. 2023, Amazon Science) — TabSyn: score-based diffusion in a Transformer VAE latent space for mixed-type tabular data, the ledger's benchmark champion of the tabular-synthesis lane. Verdict: ADAPT — primary candidate for NFL production synthetic-season backbone.
## Key metrics/methods (formulas where given, else "not specified")
- Two-stage: tabular VAE (column tokenizer d=4; 2-layer Transformer encoder/decoder D=128; β-VAE loss ℒ = ℓ_recon + βℓ_kl with adaptive β: βmax=0.01, β←0.7β on recon-loss plateau, floor βmin=1e−5) + latent VE-SDE score diffusion (z_t = z_0 + σ(t)ε; reverse SDE Eq. 6; score-matching loss ℒ = E‖ε_θ(z_t,t)−ε‖²; 5-layer SiLU denoising MLP)
- Proposition 1 (proved): linear noise schedule σ(t)=t makes Euler one-step reverse error exactly 0 → best quality at <20 NFEs (vs STaSy 50–200, TabDDPM ~1000)
- Metrics: column density error (KS numeric / TVD categorical), pair correlation error (Pearson / contingency), C2ST, α-precision/β-recall, DCR privacy, MLE (XGBoost trained on synthetic, tested real)
## Data sources named
Six public tabular datasets (Adult, Default, Shoppers, Magic, Beijing, News — UCI-style, mixed numeric/categorical); code at https://github.com/amazon-science/tabsyn. NFL translation proposed: nflverse team-game table 2015–2025 (~30 columns).
## Findings (numbers and facts, not vibes)
- Column density error: TabSyn avg 1.08% vs best-baseline avg 14.52% → paper claims 86.0% error reduction (e.g., News: 1.64 vs STaSy 6.89, TabDDPM 78.75 — total baseline collapse)
- Pair correlation error: avg 1.73 vs best generative baseline TabDDPM 5.34 → 67.6% reduction
- MLE (XGBoost on synthetic, tested real): avg gap to Real-trained 7.23% (TabDDPM 19.14%, SMOTE 9.39%); Adult AUC .915, Shoppers .920, Magic .938
- Ablation: latent space is the key — TabSyn-DDPM 1.02/2.15 beats TabDDPM-in-data-space 1.75/3.01; one-hot diffusion worst (5.59/6.92)
- Speed: best quality at <20 NFEs; Adult sampling wall-clock 1.784s vs TabDDPM 28.92s (93% reduction); same hyperparameters on all 6 datasets, no per-dataset tuning (Appendix G.1)
- Imputation bonus: unconditional TabSyn as an inpainting imputer beats XGBoost trained on real data on 4/6 target-imputation tasks (Default AUC 87.2 vs 77.0)
- Privacy: DCR 51.20%/52.90% (50% = ideal, no memorization)
- Limitations: unconditional generation only (needs conditional extension for NFL rare regimes); latent dim = M×d grows with feature count; no time structure; i.i.d. framing
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Tabular VAE latent diffusion as synthetic-season generator → OTHER
- Regime-prompt conditioning proposal (learned "regime prompt" vector for blowouts/snow games) → OTHER
- No-tuning robustness (Appendix G.1) as operational advantage → OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — adopt TabSyn (start from amazon-science/tabsyn repo) as the production synthetic-season backbone: VAE tokenizer on nflverse team-game rows + linear-schedule latent diffusion, extended with regime-conditioning for rare-tail oversampling; ~4 engineer-days with gates (column-density error ≤50% of TabDDPM; real+synthetic GBDT log-loss ≥0.003 better on held-out 2024).
