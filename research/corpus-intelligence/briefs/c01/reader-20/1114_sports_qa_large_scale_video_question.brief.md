# arxiv-program/research/2026-09-21/arxiv-deep/1114-sports-qa-large-scale-video-question.md
## What it is (1-2 sentences)
Deep read of Li et al., "Sports-QA: A Large-Scale Video Question Answering Benchmark for Complex and Professional Sports" (arXiv:2401.01505v5): a 94k-QA-pair benchmark over eight sports plus Adaptive Focal Attention (AFA), a temporal attention mechanism adaptively fusing multiple focal lengths. Verdict in-file: **ADAPT** — AFA and the dataset-construction protocol are portable to GSE film/tracking analysis; the QA benchmark itself is not a GSE product.
## Key metrics/methods (formulas where given, else "not specified")
- AFA(q_j) = Σ_{f∈F} α_f Σ_{i∈D_j^f} softmax_i(q_j^T k_i / √d) v_i, with D_j^f = {i : |i−j| ≤ f} and Σ_f α_f = 1; convex combination of windowed attention over focal lengths.
- Final focal lengths: {3, 9, 80} frames; mixing weights α_f learned. Backbone: video transformer encoder, hidden dim 512, 50 epochs, Adam, lr 1×10⁻⁴, batch size 16. Baselines: prior video-QA models; Qwen2.5-3B zero-shot vs fine-tuned.
## Data sources named
- Sports-QA (new): 5,967 videos, 94,073 QA pairs, eight sports/events; split 60/20/20 by video. Question-type counts: descriptive 48,268; temporal 39,643; causal 4,676; counterfactual 1,486 (1.6%). Open-ended answers collapsed to 191-class classification (classes with <30 samples dropped). GitHub: https://github.com/HopLee6/Sports-QA (not independently verified).
## Findings (numbers and facts, not vibes)
- Main (BERT-scored): baseline 57.9 accuracy / 23.9 F1; with AFA 59.1 / 25.4 → +1.2pp accuracy, +1.5pp F1; AFA helps temporal/causal questions most.
- Qwen2.5-3B: zero-shot 27.77% → fine-tuned 63.71% — fine-tuning dominates; base LLM knows little about fine-grained sports video.
- Caveats: collapsing to 191 classes discards the hardest open-ended tail (reported accuracy is on the easy-ified task); counterfactual slice is only 1,486 pairs; no NFL/American-football evaluation; video licensing unresolved for commercial use.
- GSE adaptation: nflverse play-by-play + NGS tracking sequences (10 Hz) as the "video" (no broadcast footage, sidesteps licensing); AFA focal lengths scaled to football time ({5, 25, 100} frames ≈ {0.5s, 2.5s, 10s}); task = play-outcome QA (EPA-bucket classification, "what happens next", counterfactual blitz probes) for coaching-content generation; ~2–3 engineer-weeks prototype.
- Gate: adopt if AFA beats standard attention by ≥1.5pp accuracy AND ≥1.0pp macro-F1 on 2024 holdout EPA-bucket task (train ≤2023).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: play-outcome QA and counterfactual "what if the blitz had come" probes over tracking data can generate coaching-content (scheme/blitz-analysis narratives).
- SCHEME: temporal multi-scale attention over tracking sequences is a scheme-analysis primitive (route development vs line-of-scrimmage chaos).
- OTHER: film/tracking analysis capability — new capability, no overlap with existing ledgers.
## Engine-actionable? (yes/no + one-line what)
yes — prototype AFA-style multi-focal attention (focal lengths {5,25,100} frames) over NGS tracking sequences for play-outcome EPA-bucket prediction, gated on ≥1.5pp accuracy / ≥1.0pp macro-F1 over standard attention on 2024 holdout.
