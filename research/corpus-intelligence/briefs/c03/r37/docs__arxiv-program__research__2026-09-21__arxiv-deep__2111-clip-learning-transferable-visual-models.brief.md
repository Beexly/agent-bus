# docs/arxiv-program/research/2026-09-21/arxiv-deep/2111-clip-learning-transferable-visual-models.md
## What it is (1-2 sentences)
Deep-dive ledger on CLIP (Radford et al., OpenAI, ICML 2021, arXiv:2103.00020v1) — contrastive image-text pretraining on 400M web pairs enabling zero-shot transfer via natural-language class descriptions. Verdict: ADAPT; the foundational anchor of the multimodal_fusion lane, needing sports-domain contrastive fine-tuning and football-specific prompt templates.
## Key metrics/methods (formulas where given, else "not specified")
- InfoNCE-style symmetric cross-entropy over the N×N image-text similarity matrix; learnable temperature τ (init 0.07, logits clipped ≤100).
- Dual encoders (ResNet-50/101, RN50x4/x16/x64, ViT-B/32, B/16, L/14, L/14@336px + Transformer text encoder) → linear projection to shared embedding space.
- Zero-shot transfer: text encoder as hypernetwork generating classifier weights from language; cosine-similarity classifier on L2-normalized inputs/weights, no bias, temperature scaling.
- Prompt engineering + ensembling: default "A photo of a {label}." (+1.3% ImageNet); task-specific templates; 80-variant ensemble averaged in EMBEDDING space (+3.5%); combined ~+5 points average across 36 datasets.
- Training: 32 epochs, batch 32,768, Adam w/ decoupled weight decay, cosine schedule; RN50x64 = 18 days on 592 V100s; ViT-L/14 = 12 days on 256 V100s. Trained from scratch, linear (not nonlinear) projection head.
## Data sources named
WIT (WebImageText, 400M web (image, text) pairs, not released); evaluation on 30+ CV datasets (ImageNet, 27-dataset suite, ImageNetV2/A/R/Sketch, ObjectNet, ImageNet-Vid, YouTube-BB); public reproductions LAION-400M/2B; code + weights at github.com/OpenAI/CLIP.
## Findings (numbers and facts, not vibes)
- ImageNet zero-shot 76.2% top-1 (matches supervised ResNet-50 with 0 of its 1.28M labels), 95% top-5 (matches Inception-V4).
- vs. prior zero-shot (Visual N-Grams): ImageNet 11.5%→76.2%; aYahoo 95% error reduction; SUN 23.0→58.5 (more than doubled).
- Zero-shot CLIP beats a supervised linear classifier on ResNet-50 features on 16/27 datasets.
- Prompt engineering + ensembling ≈ +5 points average across 36 datasets (≈ gain of 4× compute, "free" when amortized); ensembling in embedding space costs a single classifier when amortized.
- Zero-shot CLIP substantially outperforms supervised baselines under natural distribution shift.
- Known weaknesses per ledger: polysemy breaks the paradigm ("crane" bird vs. machine; football is full of polysemy: "screen", "draw", "nickel", "dime", "boot"); bag-of-words behavior — weak at compositional/spatial relations ("blitzing linebacker BEHIND the defensive line"); zero-shot cosine similarities are not calibrated probabilities; web-training near-duplicates may inflate zero-shot numbers.
- Reproduction out of reach (592 V100s × 18 days) — adaptation must be fine-tuning, not retraining.
- GSE acceptance gate (pre-registered): fine-tuned ≥70% top-1 on held-out football concepts with prompt ensembling beating single prompts by ≥3 points; REJECT if <55%.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: 76.2% ImageNet zero-shot matches supervised ResNet-50 with zero labels — the foundation for zero-shot play-concept retrieval from broadcast frames.
- SCHEME: ImageNet 11.5%→76.2% vs Visual N-Grams; aYahoo 95% error reduction; SUN 23.0→58.5 — contrastive recipe beats generative-prediction recipe at scale.
- SCHEME: Polysemy breaks transfer ("screen", "draw", "nickel", "dime", "boot" in football) → per-concept prompt ensembles required.
- SCHEME: Bag-of-words failure on spatial relations ("blitzing linebacker BEHIND the defensive line") → compositional hard negatives experiment proposed.
- OTHER: Embedding-space prompt ensembling as amortized "free compute" (+5 pts, cost of a single classifier) — applicable to GSE retrieval/classification surfaces.
- OTHER: Distribution-shift robustness justifies one model across broadcast feeds (networks, angles, graphics overlays) without per-feed tuning.
- TRUST-SIGNAL: Cosine similarities are uncalibrated — never price or publish from raw similarity scores without calibration.
## Engine-actionable? (yes/no + one-line what)
Yes — contrastive fine-tune open CLIP weights on (broadcast-frame, pbp-text) pairs with football prompt-ensembles for zero-shot play-concept retrieval/classification (e.g. "cover-2 shell pre-snap", "mesh concept vs man coverage"), no per-concept labeling.
