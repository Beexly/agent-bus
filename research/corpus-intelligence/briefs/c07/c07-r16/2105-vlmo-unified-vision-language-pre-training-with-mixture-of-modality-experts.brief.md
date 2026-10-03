# arxiv-program/research/2026-09-21/arxiv-deep/2105-vlmo-unified-vision-language-pre-training-with-mixture-of-modality-experts.md

## What it is (1-2 sentences)
Full-paper read (ar5iv HTML, 2111.02358v2 — note the ledger caught and corrected an earlier wrong ID 2111.11483 via the arXiv API) of VLMo (Microsoft, 2021): a single Transformer that serves BOTH as a dual encoder (linear-time retrieval) and a fusion encoder (deep cross-modal reasoning), via a Mixture-of-Modality-Experts (MoME) design plus a stagewise pre-training recipe that exploits abundant single-modality data. Ledger verdict ADAPT — one model for fast historical-play retrieval AND deep matchup reasoning, with a stagewise recipe (tracking-only → text-only → joint) that fits NFL data scarcity; needs a tracking modality expert added.

## Key metrics/methods (formulas where given, else "not specified")
- MoME block: H'_l = MSA(LN(H_{l−1})) + H_{l−1}; H_l = MoME-FFN(LN(H'_l)) + H'_l. FFN pool = {V-FFN (vision), L-FFN (language), VL-FFN (fusion)}; deterministic routing by modality and layer: image/text-only inputs use V/L experts throughout; image-text pairs use V+L in bottom layers and the VL expert in the top layers (top-2 base, top-3 large).
- Stagewise pre-training: (1) train V-FFN + shared attention on image-only data (BEiT masked image modeling); (2) freeze, train L-FFN on text-only data (MLM); (3) joint vision-language pre-training with three losses: image-text contrastive (ITC) + image-text matching (ITM) + MLM.
- Configs: Base = 12 layers, 768 hidden, 12 heads, FFN 3072; Large = 24 layers, 1024 hidden, 16 heads, FFN 4096; 224×224 images, 16×16 patches (ViLT-style, no object detector), RandAugment, BERT-uncased tokenizer, max text 40; 200k steps, batch 1024, AdamW (β1=0.9, β2=0.98), LR 2e-4 (base) / 5e-5 (large), 2.5k-step linear warmup + linear decay, weight decay 0.01. Base: ~2 days on 64×V100-32GB; Large: ~3 days on 128×V100-32GB.
- Dual-encoder mode: separate encoding, dot-product similarity (linear time); fusion mode: joint encoding, [T_CLS] → classifier.

## Data sources named
COCO, Visual Genome, SBU, Conceptual Captions (4M pairs) for base/large; 1.0B noisy web image-text pairs for VLMo-Large++ (200k steps @16k batch + 100k @32k); BEiT-style image-only corpus; large text corpus for MLM. Eval: VQA 2.0 (3,129-answer classification), NLVR2, COCO/Flickr30K retrieval (Karpathy split), ImageNet, ADE20K — all public. Code + pretrained models at https://aka.ms/vlmo (stated in paper).

## Findings (numbers and facts, not vibes)
- VQA test-dev/test-std: VLMo-Base 76.64/76.89 (vs ALBEF-Base 74.54/74.70, ViLT-Base 71.26, VILLA-Base 73.59/73.67); VLMo-Large 79.94/79.98; VLMo-Large++ 82.88/82.78 (vs Florence-Huge 80.16/80.36, SimVLM-Huge 80.03/80.34).
- NLVR2 dev/test-P: Base 82.77/83.34 (vs ALBEF-Base 80.24/80.50); Large 85.64/86.86; Large++ 88.62/89.54 (vs SimVLM-Huge 84.53/85.15).
- Retrieval: VLMo-Large++ COCO text-retrieval R@1/R@5/R@10 = 83.1/96.0/98.2, image-retrieval = 65.2/86.5/92.2 (vs Florence-Huge COCO TR 81.8/95.2, IR 63.2/85.7) — linear-time, beating fusion-rerank models; Flickr30K TR = 96.8/100.0/100.0, IR = 88.1/98.4/99.3.
- Ablations: stagewise image+text init NLVR2 82.09/82.49 vs image-only init 80.33/81.06; MoME 80.13/80.31 vs standard Transformer 78.81/79.27; all three losses (ITC+ITM+MLM) best.
- Also: ImageNet acc@1 85.5 (BEiT-Base 85.2, ViT-Base 83.6); ADE20K mIoU 53.4 (BEiT 52.8).
- Limitations from the ledger: only 2 modalities (tracking expert untested); NFL jargon-heavy text differs from caption text; Large++'s 1B noisy pairs carry unquantified label noise/web biases; expert routing is hand-designed top-K, not learned.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (multimodal play intelligence): dual-encoder mode = fast historical-play retrieval ("find plays like this 3rd-and-7 look"); fusion-encoder mode = deep matchup reasoning (clip + scouting text → prediction) — both from ONE model.
- SCHEME (INFERENCE): the stagewise recipe maps to NFL data reality — abundant tracking-only data (Big Data Bowl 2018–2022, masked-trajectory modeling) for the T-FFN expert, abundant text-only data (nflverse pbp, injury reports, beat-writer text) for L-FFN, scarce paired (play window, pbp text) data for joint training; a per-token learned expert router would double as an interpretable "which modality mattered" signal for matchup cards (the ledger's improvement experiment).

## Engine-actionable? (yes/no + one-line what)
Yes — single GSE multimodal Transformer with three experts (T-FFN tracking, V-FFN video, L-FFN text): stagewise pretrain (T expert on tracking-only masked-trajectory modeling, L expert on NFL text MLM, then joint contrastive+matching+MLM on paired play-window/pbp-text), serving dual mode (precomputed weekly play embeddings for a fast retrieval API) and fusion mode (on-demand matchup cards); ACCEPT gate: ≥3 points Recall@10 over the simpler joint-space baseline on 500 labeled concept queries AND ≥2% fusion-mode EPA MAE gain over tracking-only baseline on held-out seasons.
