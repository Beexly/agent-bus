# docs/arxiv-program/research/2026-09-21/arxiv-deep/0336-mvueval-towards-multivideo-understanding-evaluation-for.md
## What it is (1-2 sentences)
Ledger for Peng et al. (2025), arXiv:2511.07250v2 — MVU-Eval, a 1,824-QA benchmark over 4,959 videos testing 26 multimodal LLMs on 8 multi-video understanding tasks (perception + reasoning). Verdict: ADAPT — reuse its 8-task taxonomy and leakage-removal QC pipeline to build GSE's own multi-angle NFL clip evaluation, and do not trust off-the-shelf MLLMs for cross-angle play analysis until they clear a bar no current model clears.
## Key metrics/methods (formulas where given, else "not specified")
- Metric: zero-shot multiple-choice accuracy (exact option-letter match via regex extraction), overall and per-task. Protocol: 32 frames/video, longer side ≤720px, patch 28×28.
- Benchmark design: 8 tasks — Perception (Object Recognition 126, Spatial Understanding 179, Counting 227, Comparison 135) and Reasoning (Knowledge-Intensive Reasoning 281, In-Context Learning 164, Retrieval-Augmented Generation 339, Temporal Reasoning 373). Avg 4.7 videos/question, up to 13.
- QC pipeline: rule-based video-pair sampling → auto QA generation (MLLM reject sampling + templates; Jaccard similarity on captions for RAG pair sampling) → leakage removal (content: strip descriptive text from options; format: regenerate until no-video accuracy ≈ random chance) → difficulty filtering (drop questions Gemini 2.5 Pro + Gemini 2.0 Flash + Qwen2.5-VL-72B all answer correctly) → human verification (~563 more removed) → option rebalancing (final A 25.5%, B 25.8%, C 22.7%, D 20.4%). Yield: 4,187 → 1,824 pairs (46% retained).
- Validation of benchmark: no-video baseline 16.0% (below random 26.0%, models refuse to answer); human expert ceiling 93.6% via two-phase consensus (majority ≥3/5).
## Data sources named
Kinetics-400, nuScenes, ScanNet, FineDiving (sports), YouCook2, Vchitect-2.0, DREAM-1K, plus 130 manually curated Kling.AI video-editing comparison samples. Human faces / copyright-sensitive content excluded. Benchmark to be released at https://github.com/NJU-LINK/MVU-Eval.
## Findings (numbers and facts, not vibes)
- Overall: best closed Gemini 2.5 Pro 58.4%; best open Qwen2.5-VL-72B 57.1%; human 93.6%; random 26.0% — a ~35-point gap to human; most open models <50%.
- Per-task bests: OR GPT-4o 54.7; SU GPT-4o 57.7; Counting Gemini 1.5 Pro 66.1; Comparison Qwen2.5-VL-72B 77.8; KIR Gemini 2.0 Flash 53.7; ICL Gemini 1.5 Pro 47.6; RAG Video-XL-2-8B 48.7; TR Gemini 2.5 Pro 83.1. No single model leads everywhere — capabilities imbalanced.
- Scaling: Qwen2.5-VL 3B→72B 46.2→57.1; InternVL3 8B→38B→78B 41.7→48.4→50.6. Small Qwen2.5-VL-3B (46.2) beats larger LLaVA-OneVision-7B (40.4).
- Accuracy declines as video count rises; VideoLLaMA3-7B improves to 32 frames then degrades at 64 (token overload); resolution improves to 720, degrades at 960.
- Input format (Qwen2.5-VL-7B): native multi-video 51.9 vs multi-image 45.2 vs merged-video 44.6 (−7.3 pp for naive merging).
- Information ablation (VideoLLaMA3-7B): multi-video 47.5; text-description 41.0 (−6.5); multi-image 34.6 (−12.9); single-video 24.9 (−22.6); no-video 16.0 (−31.5).
- Failure modes: (1) object status/function; (2) spatial understanding across camera angles on the same vehicle; (3) domain knowledge + filtering irrelevant videos; (4) temporal/causal "what" vs "why"; (5) instruction-following (LLaVA-Video-7B: >98% free-form paragraphs ignoring option-letter instruction).
- Paper's motivating application is cross-angle sports analytics, but sports coverage is thin (FineDiving diving only) — asserted, not evaluated.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 35-point MLLM-vs-human gap on multi-video reasoning → any MLLM clip analyst must be gated on an NFL evaluation set before production use; deterministic pipelines preferred meanwhile: OTHER
- Reusable QC recipe (leakage removal, difficulty filtering vs strong models, human utility verification, option rebalancing) for any GSE QA set over the clip library: OTHER
- 8-task taxonomy maps to NFL multi-angle work: SU = broadcast + all-22 + end-zone complementary views of the same play; TR = drive sequencing across clips; KIR = penalty/rule judgments with rulebook + video: SCHEME
- Format fragility (merged-video −7.3 pp; instruction-following failures penalizing models) → production clip tasks need strict input-format and format-compliance gates: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — build a GSE-MVU (NFL) 200–500 QA-pair evaluation set over multi-angle clips (broadcast + all-22 + end-zone) using the paper's 8-task taxonomy and QC pipeline, and gate every MLLM clip deployment on it (proposed bar: ≥70% overall, ≥60% on Spatial Understanding and KIR subtasks — a bar no current model clears).
