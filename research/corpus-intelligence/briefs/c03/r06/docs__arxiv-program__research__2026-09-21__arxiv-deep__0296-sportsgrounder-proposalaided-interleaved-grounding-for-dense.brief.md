# docs/arxiv-program/research/2026-09-21/arxiv-deep/0296-sportsgrounder-proposalaided-interleaved-grounding-for-dense.md
## What it is (1-2 sentences)
Deep-read ledger of Li et al. (2026, arXiv:2608.07932v2, Proc. ACM Multimedia '26): a dense sports video reasoning framework that fuses an open-vocabulary object detector (OV-DINO, top-K proposals) with a global ViT through an Interleaved Grounding Fusion (IGF) mechanism, plus an Action-Aware Supervision (AAS) head to fight language bias, trained with Mixed Preference Optimization (MPO). Verdict ADAPT — the IGF architecture is the blueprint for a football-video Q&A engine; do not adopt the LMM weights.

## Key metrics/methods (formulas where given, else "not specified")
- Proposal branch: OV-DINO decoding M=900 queries; domain-guided top-K selection via cross-modality similarity S = ℱ_c(Q_sf) ⊗ E_t^⊤; retain K=15 queries.
- IGF (Eq. 5): H_vis = [Z̃_1^vit ⊕ Z̃_1^obj ⊕ … ⊕ Z̃_T^vit ⊕ Z̃_T^obj] — frame-by-frame interleaving of global features with hybrid entity tokens (bbox-coordinate text embedding concatenated with projected semantic vector, Eq. 4).
- AAS: final EOS hidden state → softmax action head (Eq. 6); masked CE loss ℒ_act (Eq. 7) with task-conditional indicator; ℒ_SFT = ℒ_vqa + λℒ_act, λ=0.1.
- Stage 3 MPO: ℒ_MPO = ℒ_p + αℒ_q + βℒ_g (Eq. 11); DPO-style preference loss with margin τ, β=0.1 (Eq. 12). Backbone: InternVL3.5-2B; LoRA SFT 3 epochs.
- Datasets: SoccerNet 26k QA (25k train/1k test, 17 action classes) + FineSports 24k QA (23k train/1k test, 24 action labels); 4-option multiple-choice, top-1 accuracy metric.

## Data sources named
- SoccerNet (soccer clips) and FineSports (basketball ≤8-frame sequences) — programmatically generated QA, models trained independently per dataset.
- OV-DINO (open-vocabulary visual expert), InternVL3.5-2B backbone; baselines: Qwen3-VL-2B-Instruct, VideoLLaMA3-2B, MiniCPM-V 4.0.
- No code/GitHub link in the paper; model/data release status unclear.

## Findings (numbers and facts, not vibes)
- SoccerNet overall accuracy: SportsGrounder 51.8% vs MiniCPM-V 4.0 47.5, InternVL3.5-2B 43.7, Qwen3-VL-2B 42.3, VideoLLaMA3-2B 38.6; with bbox-as-text prompt injection MiniCPM-V reaches 49.1, InternVL3.5 45.2.
- FineSports overall: 53.6% vs MiniCPM-V 48.2, InternVL3.5 44.8.
- Subtasks (SoccerNet): Action 42.5 vs 41.2; Team 71.2 vs 64.1; Jersey 33.4 vs 37.8 (MiniCPM-V wins — OCR scales with params); Spatial 54.2 vs 46.8.
- Ablation: IGF-only 47.2 overall / 38.4 Action; +AAS → 48.9 / 40.8 (+2.4 Action); +MPO → 49.6 (Spatial +4.4 vs baseline); full 51.8.
- Absolute accuracies of 38–54% on 4-choice QA show how hard dense sports VQA is — SOTA is wrong nearly half the time; Jersey-number task 33.4% vs 25% chance.
- Prompt injection (bboxes as text) consistently DEGRADES Action accuracy across baselines (temporal-attention distraction); SportsGrounder's visual-level fusion avoids this.
- λ=0.1, K=15, τ/β=0.1 are empirical, not swept; conference MM '26 is Nov 2026 (after the read date) — treat as preprint, peer review pending.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- IGF interleaved fusion beats naive bbox-as-text prompting — OTHER (football-video Q&A architecture: auto-tagging plays, "who blew the coverage" from All-22)
- Fine-grained identity (jersey OCR 33.4%) remains unsolved even at SOTA — TRUST-SIGNAL (accuracy ceiling; human-in-the-loop requirement)
- Complementary to McByte++ (tracking gives trajectories; SportsGrounder gives question-answering over video) — OTHER (video understanding lane)
- Action-Aware Supervision head (+2.4 pp Action) regularizes hidden states against language bias — OTHER (anti-hallucination training design)

## Engine-actionable? (yes/no + one-line what)
Yes — replicate the IGF fusion architecture on NFL All-22 with a football domain vocabulary (K=22, not 15) and AAS head on route/coverage classes, as the grounded-VQA engine behind automated play-tagging and telestrated breakdown narration — with human-in-the-loop required given ~50% accuracy.
