# docs/arxiv-program/research/2026-09-21/arxiv-deep/1904-learning-to-learn-kernels-variational-random.md

## What it is (1-2 sentences)
Meta-learning method (MetaVRF) that treats random Fourier feature bases ω as latent variables inferred variationally from the task support set plus LSTM-accumulated cross-task context, yielding task-adaptive kernels with a closed-form kernel-ridge base-learner and no gradient steps at meta-test (arXiv:2006.06707v2, 2020).

## Key metrics/methods (formulas where given, else "not specified")
- KRR closed form: α = Y(λI+K)⁻¹; Ŷ = f_α(X̃) = αK̃ (Eqs. 3–5)
- RFF map: z(x) = D^-1/2[cos(ω₁ᵀx+b₁),…,cos(ω_Dᵀx+b_D)] (Eq. 7); D=780 (vs 2048 for regular RFFs)
- ELBO: log p(y|x,S) ≥ E_{q_φ(ω|S)} log p(y|x,S,ω) − D_KL[q_φ(ω|S) || p(ω|x,S)] (Eq. 11)
- Context: [h^t, c^t] = g_LSTM(S̄^t, h^{t−1}, c^{t−1}) (Eq. 14); ω = ω_μ + ω_σ ⊙ ε, ε∼N(0,I)
- Inference network: 3-layer MLP(256); λ (ridge) meta-learned; vanilla and bidirectional LSTM variants

## Data sources named
Few-shot regression: sine y = A·sin(wx+b), A∈[0.1,5], w∈[0.8,1.2], b∈[0,π], x∈[−5,5], k∈{3,5,10} shots. Classification: Omniglot (5-way/20-way 1/5-shot), miniImageNet (5-way 1/5-shot), CIFAR-FS (5-way 1/5-shot); 3,000 test episodes with 95% CIs; WRN-28-10 pre-trained embeddings (640-d) for deep-embedding comparison. No code URL stated in the paper.

## Findings (numbers and facts, not vibes)
- [OTHER] miniImageNet 5-way 1-shot (shallow net): MAML 48.7 ± 1.8, ProtoNet 47.4 ± 0.6, RelationNet 50.4 ± 0.8, VERSA 53.3 ± 1.8, RFFs(2048d) 52.8 ± 0.9, MetaVRF w/o LSTM 51.3 ± 0.8, vanilla LSTM 53.1 ± 0.9, bi-LSTM 54.2 ± 0.8 (best; +1% over next best).
- [OTHER] miniImageNet 5-way 5-shot: RFFs 65.4 ± 0.9 vs MetaVRF bi-LSTM 67.8 ± 0.7.
- [OTHER] miniImageNet 5-way 1-shot (WRN-28-10 embeddings): LEO 61.76 ± 0.08, Meta-SGD 54.24, MetaVRF bi-LSTM 63.80 ± 0.05 (clear SOTA); 5-shot: TADAM 76.70 ± 0.30 vs MetaVRF bi-LSTM 77.97 ± 0.28.
- [OTHER] CIFAR-FS 5-way 5-shot: R2-D2 77.4 ± 0.2 vs MetaVRF bi-LSTM 76.5 ± 0.9 (competitive). Omniglot 5-way 1-shot: VERSA 99.7 ± 0.2 vs MetaVRF bi-LSTM 99.8 ± 0.1; 20-way 5-shot: MetaVRF 99.2 ± 0.2 vs best baselines ≈99.4 (within noise).
- [OTHER] Regression: MetaVRF fits the sine "well with only three shots" and beats MAML at k=3,5,10 (Figure 3 curves; no tabular MSE given).
- [OTHER] Ablations: bi-LSTM > vanilla LSTM > w/o LSTM consistently; MetaVRF(780d) beats plain RFFs(2048d) at every sampling rate tested (Figure 4) — adaptive kernels work at far lower sampling rates.
- [QB-BEHAVIOR] [COACHING] Robustness test: trained 20-way-5-shot → tested up to 100-way, retains 94% accuracy (Figure 5). INFERENCE: new-regime teams (rookie QB, new HC) are the GSE analog of few-shot tasks — support = first 2–4 games of the new regime.
- Limitation stated in file: no calibration metrics (accuracy only for classification; no NLL); λ meta-learned globally with no per-task noise modeling.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Closed-form KRR base-learner as a gradient-free few-shot head for fast weekly refits on new regimes (rookie QB, new HC spot starts) — QB-BEHAVIOR, COACHING
- LSTM cell state accumulating "distilled league knowledge" across sequentially ordered seasons — OTHER
- Adaptive spectral kernel at low sampling rate (780d beating 2048d vanilla RFFs) = cheaper weekly inference — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — Prototype a MetaVRF-style few-shot head (tabular embedding + D=780 RFF bases + closed-form KRR, LSTM context over seasons) for new-regime teams' first-4-game predictions, with the acceptance gate of beating the league-average prior by ≥0.01 Brier.
