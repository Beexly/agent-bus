# docs/arxiv-program/research/2026-09-21/arxiv-deep/0365-generalized-visual-relation-detection-with-diffusion.md

## What it is (1-2 sentences)
Generalized Visual Relation Detection with Diffusion Models (arXiv:2504.12100, Gao et al. 2025): Diff-VRD, a generative (conditional diffusion) approach to open-vocabulary visual relation detection that models relations as continuous embeddings and rounds them to a 4,858-word external vocabulary, evaluated on HOI and scene-graph stills datasets.

## Key metrics/methods (formulas where given, else "not specified")
- Forward diffusion: x_t = √(ᾱ_t) x_0 + √(1−ᾱ_t) ε_t; simplified objective L_simple = E[Σ_{t=2}^T ‖x_0 − f_θ(x_t,t)‖² + ‖Emb_φ(v) − f_θ(x_1,1)‖² − log p_θ(v|x_0)] (Eq. 7).
- Matching: S[i,j] = cos(Emb_φ(v_i), y_so^(j)) (Eq. 9); multi-round Hungarian bipartite matching; cost C = −1_{h_j≠∅} S[σ(j),j] (Eq. 11).
- Aux matching supervision: L_match = E_{t}[BCE(Sigmoid(S_t/κ), M)] (Eq. 12); total L = L_simple + λL_match, λ = 1.0, κ = 0.05.
- Architecture: DETR detector → 6-layer Transformer decoder denoiser (8 heads, hidden 512; 2-layer MLPs 2048) conditioned on CLIP visual + text features via cross-attention; T = 2,000 diffusion steps; 40,000 training steps; L = 32 sequence length; batch 128; lr 1e-4; inference 50 DDIM steps.
- Proxy evaluation innovation: T2I (text-to-image) retrieval and SPICE PR curves for models richer than their annotation labels.

## Data sources named
- HICO-DET: 37,633 train / 9,546 test images; 117 interaction categories, 80 object categories.
- V-COCO: 2,533 train / 2,867 val / 4,946 test images; 26 interaction categories.
- Visual Genome (VG): 108,073 images; 150 object / 50 predicate categories, 70/30 train/test.
- Predicate vocabulary V: 4,858 words/phrases from image-caption verbs (POS tagger, frequency > 0.5) plus Stanford Scene Graph Parser predicate words; CLIP-initialized embeddings.
- No code URL in the extracted text; no sports data anywhere.

## Findings (numbers and facts, not vibes)
- HICO-DET conventional HOI recall (Table I): Diff-VRD (V/V) R@5 17.28 / R@10 21.52 / R@15 23.49 vs closed-set UPT 52.30/64.35/69.71; vs zero-shot GEN-VLKT 0.71/1.22/1.59, THID 1.99/3.32/4.36, CLIP baseline 1.21/2.72/3.08. Testing with C_r instead of V jumps R@5 to 25.23; training on narrow C_r collapses it to 4.92. [OTHER]
- T2I retrieval on HICO-DET (Table II): Diff-VRD R@1 11.13 / R@5 32.00 / R@10 45.07 vs UPT 7.20/22.03/33.76 — +11.31 pp R@10 over UPT; beats GT-annotations-as-query (7.97 R@1) — generating relations beyond GT retrieves better than the GT labels themselves. [OTHER, TRUST-SIGNAL]
- SGG on VG (Table IV, Diff-VRD on IEtrans): T2I retrieval R@1 17.72 / R@5 36.71 / R@10 46.52 vs IEtrans 12.12/28.49/37.73 (+8.79 pp R@10). Conventional SGG metrics dip slightly (mean recall 33.0/38.0 vs IEtrans 35.8/39.1 PredCls) because VG has one predicate per pair. [OTHER]
- Ablations: matching supervision lifts HOI R@5 16.14→21.83 but hurts T2I R@1 11.37→8.67 (diversity suppression); L = 16/32/48 → R@5 21.38/21.83/22.60; more relations-per-pair K (1→8) hurts SGG recall but improves diversity. [OTHER]
- Failure mode: "person booze wine_glass" — predictions from pure visual info, not interaction (conditional features ignore context), acknowledged in §V-A. [TRUST-SIGNAL]
- Compute: 4×2080Ti training; inference 50 DDIM steps/image, latency unreported. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Design pattern for GSE sports scene understanding: open-vocabulary generative relation labeling (QB–receiver interactions, blocker–defender engagements) via embedding generation + rounding to a curated sports predicate vocabulary, instead of forcing a fixed taxonomy — sports action vocabularies are semantically ambiguous exactly as the paper frames it. (SCHEME, OTHER)
- Proxy-evaluation transfer: when GSE generates multi-label event descriptions richer than annotator labels, evaluate via T2I-style retrieval (do generated triplets retrieve the right clip?) and SPICE PR curves — solves the "model richer than labels" measurement problem. (TRUST-SIGNAL, OTHER)
- Stills-only prototype with no sports validation and 50-step diffusion inference — adopt as concept/eval-method, not a pipeline. (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes, as design pattern only — adopt the generative open-vocab relation decoding and the T2I-retrieval/SPICE proxy evaluation for GSE's scene-understanding labeling, but do not build the diffusion pipeline (no sports evidence, no latency numbers).
