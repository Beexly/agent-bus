# arxiv-program/research/2026-09-21/arxiv-deep/0454-disentangled-interleaving-variational-encoding.md
## What it is (1-2 sentences)
Full deep-read of Wong, Cheu, Chiam & Srinivasan (2025), arXiv:2501.08710v2 ("DeepDIVE"): a VAE where reconstruction + forecasting + classification objectives provably form a single non-conflicting ELBO, with the latent space disentangled into supervised "marginal" dims (via a Naïve-Bayes-derived loss) and unsupervised "conditional" dims. Verdict in file: ADAPT the disentangled marginal/conditional latent-space design as a representation template for GSE's multi-output engine, but replace the Naïve-Bayes loss and RBF prior with standard supervised contrastive objectives.
## Key metrics/methods (formulas where given, else "not specified")
- Standard VAE: log p_θ(x) = L(θ,φ;x) + D_KL(q_φ(z|x)‖p_θ(z|x)); L(θ,φ;x) = E_q[log p_θ(x|z)] − D_KL(q_φ(z|x)‖p_θ(z))
- Proposition 1: log p_θ(x,y) = L(θ,φ;x,y) + D_KL(q_φ(a,b|x)‖p_θ(a,b|x,y)); L(θ,φ;x,y) = E[log p_θ(y|a,b,x)] (forecast loss) + E[log p_θ(x|a,b)] (reconstruction loss) − D_KL(q_φ(a,b|x)‖p_θ(a,b)) — reconstruction + forecasting still lower-bound the joint log-likelihood, so the objectives are non-conflicting by construction
- Latent z=[a‖b]: b = marginal dims supervised by sequence-level labels via Naïve-Bayes-derived loss (independence among marginal dims conditional on input); a = conditional dims; fusion via cross-attention
- Theorem 1: under mixture-of-log-concave prior, KL(q‖p) upper-bounded by a function minimized by the cross-entropy-loss minimizer → justifies RBF components + cross-entropy with interleaving training; prior weights p_θ(k) ≈ n_k/n
- Validation: RRSE for reconstruction and forecasting, mean ± std over 30 runs; disentanglement via Mutual Information Gap (MIG); baselines DeepDIVE-(a) (conditional only), DeepDIVE-(b) (marginal only), β-TCVAE; SOTA table vs TLAE, DsaNet, AutoCTS, LightCTS
## Data sources named
Two public time-series datasets, no sports data: Gait (GaitMotion 2023, Zhang et al.: 6 accelerometer/gyroscope channels, input window 1000, prediction window 800, split 8:1:1; n_2=2 marginal dims: gait type Normal/Stroke/Parkinson's, binned stride length 0–13); Electricity (UCI ElectricityLoadDiagrams20112014, Lai et al. 2018 / Trindade 2015: 321 households, input window 168, horizon 24, split 3:1:1; n_2=3 marginal dims: hour of day, month, day of week). No code/repository stated.
## Findings (numbers and facts, not vibes)
- Gait (30 runs): DeepDIVE recon RRSE 11.1627 (std 4.8e-2), forecast 16.0582 (3.7e-2), MIG 0.0473 — vs (a) 11.8835/16.4434/MIG 0.0155; (b) 28.2268/27.7309/0.0464; β-TCVAE 29.3563/33.7654/0.0081. Full model best on all three
- Electricity: DeepDIVE recon 1.5803 (3.6e-4), forecast 0.0998 (7.1e-5) — vs (a) 2.5562/0.1062; (b) 7.4779/0.1048; β-TCVAE 8.6409/0.1048
- SOTA (electricity, horizons 3/6/12/24): DeepDIVE 0.0887/0.0911/0.0995/1.0000 — vs AutoCTS 0.0743/0.0865/0.0932/0.0947; LightCTS 0.0736/0.0831/…. DeepDIVE competitive short-horizon but collapses at horizon 24 (RRSE 1.0000 = no better than mean baseline) — the paper's "comparable to SOTA" claim holds only for short horizons
- The Naïve conditional-independence assumption among marginal dims is violated by the data (paper's own Fig. 2: gait type and stride length are correlated); Assumption 2 (representative training distribution) explicitly fails on gait yet results reported anyway
- 30-run stds are tiny (1e-4–1e-5); electricity forecast gains vs (a) are modest in absolute terms (0.0998 vs 0.1062)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Single shared encoder for win-prob + spread + total + props heads with one combined ELBO-style loss → one representation feeding all engine outputs — OTHER
- Disentangled factors ≈ interpretable matchup archetypes; supervised marginal dims could use NFL regime labels (weather bucket, QB tier, rest differential, home/away) — OTHER
- Replace Naïve-Bayes marginal loss with supervised contrastive loss (assumption-free); or learn marginal dims via VQ-VAE codebook instead of hand labels — OTHER
- Horizon-24 collapse warns multi-task sharing can hurt the primary objective — gate on per-head baselines — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — Prototype a DeepDIVE-style encoder (trailing N weeks of nflverse team features → z=[a‖b], b supervised by regime labels) with forecast heads for win prob/spread/total on a single combined loss, gated on 2024–2025 walk-forward beating the non-disentangled shared-encoder baseline by ≥0.003 Brier or ≥0.1 pts MAE vs close with ≥2× MIG; ~2 weeks effort.
