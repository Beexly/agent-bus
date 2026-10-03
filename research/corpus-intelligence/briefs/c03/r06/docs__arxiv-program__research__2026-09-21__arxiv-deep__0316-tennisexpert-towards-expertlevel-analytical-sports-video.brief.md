# docs/arxiv-program/research/2026-09-21/arxiv-deep/0316-tennisexpert-towards-expertlevel-analytical-sports-video.md
## What it is (1-2 sentences)
Deep-read ledger of Liu et al. (2026, arXiv:2603.13397v2): introduces TennisVL (471.9-hour tennis commentary benchmark, 202 matches) and TennisExpert, a framework combining a video semantic parser (scoreboard OCR, GRU event spotting, RF-DETR detection + homography) with hierarchical memory (short-term FIFO K=4 rallies + deterministic long-term stat consolidation) feeding a fine-tuned Qwen3-VL-8B to generate expert-level analytical tennis commentary. Verdict ADAPT — the hierarchical-memory architecture is a transferable design pattern for NFL broadcast-film analysis and automated commentary; the tennis parser, dataset, and LLM-synthesized ground truth do not transfer.

## Key metrics/methods (formulas where given, else "not specified")
- Ct = MLLM(Vt, Mt, Ht) (Eq. 1); short-term memory St = {(Vi,Mi,Ci) | i=t−K,..,t−1}, K=4 (Eq. 2); long-term Lt = Φ(Lt−1, Mt−K), deterministic consolidation; objective log p(Ct|Vt,Mt,Ht) = Σⱼ log pθ(wj | w<j, Zv, Zs) (Eq. 3).
- Parser: scoreboard OCR per rally st=(ρA,ρB,v); GRU event detector Edit Score 81.2; RF-DETR player/ball detection + court keypoints + homography.
- Qwen3-VL-8B, SFT 3 epochs, lr 1×10⁻⁵, cosine, 4× H200 GPUs, BF16, vision encoder/projector frozen.
- Efficiency: ~14k tokens O(1) vs O(T) dense video; ~20 GB VRAM; MLLM inference <2 s; parser up to 40 FPS on single GPU.
- Evaluation: BLEU-4, METEOR, ROUGE-L, CIDEr + LLM-judged (accuracy, coherence, excitement, professionalism, pacing, total).

## Data sources named
- TennisVL: 202 matches, 471.9 hours YouTube broadcast video (2019–2025, 1280×720, 25–30 FPS), 40,523 rally clips (avg 7.68 s), avg commentary 31.42 words, 94 players, 162,503 shots; audio-based rally segmentation (racquet-impact signatures, crowd/announcer-noise augmentation); commentary synthesized by Gemini 3 Pro from WhisperX transcripts + TennisAbstract shot data + score context; human review of 2,000 random pairs (>95% acceptance); match-level split 182/35,687 train, 20/4,836 test.
- Code/data: https://github.com/LZYAndy/TennisExpert (stated in paper; verify license/contents before use).

## Findings (numbers and facts, not vibes)
- TennisExpert: BLEU-4 7.98, METEOR 31.54, ROUGE-L 29.16, CIDEr 43.71, LLM total 88.05 (Acc 15.79, Coh 19.29, Exc 16.84, Pro 16.73, Pac 19.40).
- Best proprietary zero-shot (Gemini-3-Pro): 1.78 / 20.02 / 17.41 / 10.11 / total 59.89; GPT-5.2 total 56.59.
- Ablation (fine-tuned): Vt alone 42.74 total → Vt+Mt 73.74 → +St 85.97 → +St+Lt 88.05 (CIDEr 7.86 → 24.15 → 41.92 → 43.71) — structured metadata and memory contribute the bulk of the gain.
- Critical caveat (paper's Section 9): ground-truth commentary is LLM-synthesized (Gemini 3 Pro), not human-written — the model learns to imitate an LLM's synthesis; metric gains partly measure LLM-to-LLM style matching, not expert judgment; factual reliability of tactics/stats unmeasured.
- Parser is tennis-specific (court keypoints, tennis scoreboard grammar, serve/rally structure); no direct NFL transfer — an NFL port needs a from-scratch parser (down/distance, formations, play segmentation).
- No forecasting content — commentary/understanding system only, not a prediction model.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hierarchical memory (St short-term FIFO + Lt deterministic consolidation) as MLLM context — OTHER (NFL film-room architecture: recent-play memory + game-state consolidation for automated breakdown narration)
- Ablation: Vt+Mt 73.74 vs Vt alone 42.74 — structured metadata dwarfs raw-video gains — OTHER (charting/metadata matters more than pixels; relevant to GSE film pipeline)
- LLM-synthesized ground truth = style-matching ceiling, not expert judgment — TRUST-SIGNAL (ground-truth validity; human-preference loop needed for real quality)
- Paper-suggested improvement: human-preference pairwise fine-tuning over supervised imitation — OTHER (content quality lane)

## Engine-actionable? (yes/no + one-line what)
Yes — port the architecture to NFL broadcast film as a content/film-analysis lane: NFL semantic parser (play segmentation, scorebug OCR, snap-to-whistle event detection) + hierarchical memory (recent-play FIFO + game-state consolidation) feeding an open MLLM, with HUMAN-written analyst commentary as training targets (not LLM-synthesized), deployed offline for breakdown scripts and X/TikTok narration.
