# arxiv-program/research/2026-09-21/arxiv-deep/1470-sportu-sports-understanding-benchmark.md
## What it is (1-2 sentences)
SPORTU is a large-scale multimodal sports-understanding benchmark for MLLMs: 900 text MCQs (5 sports) + 1,701 slow-motion video clips with 12,048 QA pairs (7 sports), all expert-annotated, evaluating a slate of open and proprietary models. Key findings: rationale-first (CoT) prompting *hurts* accuracy; no model averages above 3/5 on open-ended G-Eval; question-understanding failures and hallucination dominate errors.
## Key metrics/methods (formulas where given, else "not specified")
- SPORTU-text: 900 MCQs; SPORTU-video: 1,701 clips / 12,048 QA pairs (10,973 MCQ + 1,075 open-ended); difficulty 25.36% easy / 50.22% medium / 24.42% hard; 300 multi-angle scenes
- Evaluation: zero-shot and five-shot, direct-answer vs rationale-first orderings; frame sampling 10 (GPT/Claude) / 16 (most open) / 100 (VideoChat) / whole video (Gemini); open-ended scored by G-Eval (GPT-4o judge, validated vs humans r=0.41)
- Annotation: 9 experts (2 intercollegiate athletes 12+ yrs, 7 players 5+ yrs)
## Data sources named
Public: github.com/chili-lab/SPORTU (dataset + eval code)
## Findings (numbers and facts, not vibes)
- SPORTU-text best: GPT-4o 71.00% (five-shot CoT)
- SPORTU-video direct-answer: Qwen2-VL-72B 70.94%; Claude 3.5 Sonnet 70.18%; GPT-4o hard-video 57.84%
- Rationale-first harms accuracy (Claude example: 52.57% direct vs 39.32% rationale-first)
- Open-ended: GPT-4o G-Eval 1.84; no model averaged above 3
- Frame-sampling differences confound the leaderboard; G-Eval/human r=0.41 is modest; American-football coverage depth unclear; contamination not audited
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evaluation harness for GSE's video/content pipeline (auto-telestration, clip description model selection); operational prompting rule — direct-answer first, rationale only on demand; add a GSE NFL broadcast-speed clip split (coverages, blitzes, route concepts) since slow-motion clips are an artificial regime
## Engine-actionable? (yes/no + one-line what)
Yes — pull SPORTU + annotate an NFL broadcast-speed split (~1 week), then route video models into the content pipeline only if ≥65% NFL-split MCQs AND open-ended G-Eval ≥2.5; improvement: fine-tune an open 7B video model on NFL annotations and test cost parity vs Claude 3.5 Sonnet.
