# arxiv-program/research/2026-09-21/arxiv-deep/2109-attention-driven-multimodal-alignment-for-long-term-action-quality-assessment.md

## What it is (1-2 sentences)
A research ledger (completed 2026-09-22) distilling Xin Wang et al.'s "Attention-Driven Multimodal Alignment for Long-term Action Quality Assessment" (Applied Soft Computing; arXiv:2507.21945v1): LMAC-Net, which uses K=5 learnable "atomic pattern" queries per modality (RGB, optical flow, audio) plus an attention-center consistency loss forcing all modalities to attend to the same temporal segments, with two-level scoring (segment scores → softmax-weighted overall). Verdict: ADAPT — the cross-modal temporal alignment machinery and interpretable segment-level scoring transfer to NFL drive/game analysis, but the exact-consistency assumption must be relaxed for football's cross-modal lead-lag structure.

## Key metrics/methods (formulas where given, else "not specified")
- Multimodal local query encoder: per modality m, stacked Transformer decoders with K=5 learnable queries. Per layer i: q̂_k^{(m,i)} = p_k^{(m,i−1)} + q_k^{(m,i)} (Eq. 4); cross-attention over T temporal segments with learnable temperature τ (init 0.07): α_{k,t} = exp(q̃_kᵀv_t/τ)/Σ_j exp(q̃_kᵀv_j/τ) (Eq. 6); update p_k^{(m,i)} = Σ_j a_{k,j} v_j + p_k^{(m,i−1)} (Eq. 7); FFN + multi-head self-attention across queries; concatenate per-modality query features p_k = [p_k^{RGB}, p_k^{Flow}, p_k^{Audio}] (Eq. 8).
- Two-level scoring: linear regression per query → K segment scores ŝ_k; final Ŝ = Σ_k w̃_k ŝ_k with w̃ = softmax(w), w ∈ ℝ^K learnable (Eq. 9–10).
- Composite loss L = λ_1 L_score + λ_2 L_feature (Eq. 11); L_score = MSE (Eq. 12); L_feature = L_rank + L_sparsity + L_consistency (Eq. 13). Attention center ᾱ_k^m = Σ_t t·α_{k,t}^m (Eq. 14). L_rank: hinge enforcing ᾱ_1^m < ᾱ_2^m < … < ᾱ_K^m with margin d plus boundary terms (Eq. 15). L_sparsity = Σ|t − ᾱ_k^m|·α_{k,t}^m (Eq. 16). L_consistency = Σ_t Σ_{i<j} ‖ᾱ_t^{m_i} − ᾱ_t^{m_j}‖² (Eq. 17).
- Config: 2 stacked decoders per branch, 8 heads, 2 layers; output dim 512; dropout 0.1 (RG) / 0.2 (Fis-V); AdamW, lr 9e-4 (RG) / 9e-5 (Fis-V), cosine decay, batch 32; single NVIDIA GPU (PyTorch).
- Validation metric: Spearman rank correlation, Fisher-z averaged across actions (Eq. 18).
- GSE improvement experiment: lag-aware consistency loss — replace ‖ᾱ^{m_i} − ᾱ^{m_j}‖² with learned per-modality-pair temporal offset δ_{ij}: ‖ᾱ^{m_i} − (ᾱ^{m_j} + δ_{ij})‖², δ learned with L1 penalty toward 0. Captures football's audio-lead/lag structure (crowd reacts after a catch; cadence precedes the snap). The learned δ matrix itself becomes a GSE finding.

## Data sources named
- RG (rhythmic gymnastics): 1,000 videos (250 each: ball, clubs, hoop, ribbon), ~1m35s @ 25 fps; labels = difficulty, execution, final scores. Split: 200 train / 50 test per type.
- Fis-V (figure skating): 500 short-program videos, ~2m50s @ 25 fps; labels = TES and PCS from nine international judges. Split: 400 train / 100 test.
- Features from prior multimodal AQA work (fine-tuned backbones); labels normalized to [0,1]. Public datasets via the cited repos.
- Code: not stated (no repo URL found).
- GSE adaptation: treat a DRIVE as the "long video" — segments = plays; modalities = tracking features, broadcast-video features, audio (crowd), text (pbp). Targets: drive EPA total (regression) or drive outcome (TD/FG/punt/turnover). Test dataset: 2022–2024 NFL drives with tracking + video + audio proxy + pbp text; train 2022, val 2023, test 2024 (time-ordered).

## Findings (numbers and facts, not vibes)
- RG average Spearman: LMAC-Net 0.840 vs PAMFN (2108 paper) 0.819 vs GDLT (unimodal SOTA) 0.765. Fis-V average: 0.850 (TES 0.811, PCS 0.881) vs PAMFN 0.822 vs GDLT 0.820.
- Efficiency (Table 4): 0.419G FLOPs, 8.95M params, 4 ms inference — "substantially lower than PAMFN" (18.06M, 33 ms), "nearly on par with some unimodal methods."
- Ablation (Table 5, RG avg / Fis-V avg): concat baseline 0.676 / 0.731 → +MLQE 0.730 / 0.765 → +L_rank 0.731 / 0.779 → +L_sparsity 0.735 / 0.779 → +L_consistency (full) 0.797 / 0.808. (Ledger flags: ablation-run numbers are lower than headline 0.840/0.850 — configuration differences unexplained in extracted text; treat effect sizes as approximate. The ranking of components is the stable finding; consistency loss is the single biggest contributor.)
- Paper's claim: two-level scoring gives interpretability "for free."
- Ledger's leakage critique: assumption (3) — modalities SHOULD attend to identical segments — is the weak point for football: crowd audio spikes BEFORE the visible play (anticipation); exact-center consistency loss could destroy cross-modal lead-lag structure. Recommendation: asymmetric or lag-tolerant consistency loss rather than the paper's exact-center matching.
- Other limitations: small datasets, judge-score targets (bias unexamined), no cross-dataset test, artistic judged sports; but the alignment losses are task-agnostic sequence machinery.
- GSE acceptance gate (pre-registered): ACCEPT if LMAC-Net-style model beats concat baseline by ≥0.04 Spearman on 2024 drives AND the consistency-loss ablation shows positive contribution ≥+0.01 (proving alignment, not just more parameters, does the work). REJECT if no gain over concat or the consistency ablation is negative (modalities genuinely disagree in time — then the paper's core assumption fails for football and the lane stops). Baselines: (a) concat-features baseline (paper's own), (b) per-play EPA sum (the "no-model" baseline).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — multimodal temporal-alignment machinery for drive-level modeling. The two-level scoring readout ("the 3 plays that decided the drive, according to each modality") is a film-room content product; the learned per-play weights w̃_k could also serve as a play-importance feature for engine weighting. No direct QB/coaching/OL/trust-signal content.

## Engine-actionable? (yes/no + one-line what)
Yes — the attention-center consistency loss plus learnable per-query segment scoring is directly implementable as a drive-level model over tracking/video/audio/pbp modalities (plays as segments, ~100 lines for the loss functions), with a pre-registered ≥0.04 Spearman-over-concat acceptance gate and a lag-aware δ_{ij} improvement that turns audio-visual lead-lag into a measurable GSE finding.
