# arxiv-program/research/2026-09-21/arxiv-deep/0203-svibench-a-dynamic-microworld-for-strategic.md
## What it is (1-2 sentences)
SVI-Bench (arXiv:2605.31529v2, Pan et al. 2026) is a 9-task, four-pillar benchmark measuring strategic video intelligence in basketball, soccer, and hockey (no American football); the deep-read verdict is ADAPT — not the benchmark itself, but its data-engine pattern, its T5 outcome-forecasting eval protocol with calibration-error reporting, and its human-vs-model calibration findings.

## Key metrics/methods (formulas where given, else "not specified")
- Corpus: ~35K hours broadcast video, ~15M timestamped play-by-play records, ~15K hours commentary (Whisper ASR), ~23K postgame recaps, ~103K box scores; 64 leagues, 2018–2025; temporally aligned and cross-referenced via shared game/player identifiers.
- Data engine: (1) temporal alignment to play-by-play game clocks, (2) cross-modal entity resolution into identity graphs, (3) LLM-assisted instance generation, (4) three-stage QC (auto consistency, task filters, expert review).
- T5 Outcome Forecasting: 114K MCQs, 3–15 min observation windows, target events beyond the window, targets referenced by indirect descriptions to block shortcuts; metric = accuracy + calibration error (CE), CE = 0 perfect.
- Finetuned Qwen3-VL 8B on T5: 44.8% accuracy, CE 0.01 (zero-shot 36.9%, CE 0.23); GPT-5.2 zero-shot 38.2% (CE 0.28) with a 28-point confidence–accuracy gap; humans 58.9%.
- No equations stated beyond definitional metric descriptions.

## Data sources named
Code: github.com/texaser/svi-bench (MIT); data: huggingface.co/datasets/mvpgroup/svi-bench under gated-access agreement; paper: svi-bench.github.io/paper.pdf.

## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] Horizon overconfidence: as temporal distance to the target event grows, model accuracy drops 91% → 45% while model confidence barely moves (98% → 94%) — an overconfidence gap widening with horizon; the model does not adjust confidence for longer-horizon uncertainty.
- [TRUST-SIGNAL] Humans "not only outperform models but also know when they are uncertain": T2 human accuracy 30% at low confidence → 90% at high; T5 50% → 100%; models do not show this pattern.
- [SCHEME] Oracle experiment (GPT-5.2 + play-by-play instead of video): 41.9% vs 38.1% video-only on T5 basketball — only +4.2 points; "accurate perception alone is insufficient for strong forecasting."
- [OTHER] Capability cliff: best-model per pillar, normalized 0–100 — T2 73.91% (finetuned LLaVA-Video-7B) → T9 ~5%; finetuning gains at perception do not transfer to higher pillars.
- [OTHER] T1 identity axis weakest: finetuned LLaVA-Video-7B scores 2.17 overall but only 1.11 on identity ("struggles to identify who is involved and why").

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the T5 eval protocol for GSE forecasting (MCQ outcome questions over fixed observation windows with target events beyond the window, calibration error reported alongside accuracy) and add horizon-stratified calibration analysis (confidence–accuracy gap binned by temporal distance to event, targeting the human monotonic-confidence pattern).
