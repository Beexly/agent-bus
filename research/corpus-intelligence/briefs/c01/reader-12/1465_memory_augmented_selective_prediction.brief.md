# arxiv-program/research/2026-09-21/arxiv-deep/1465-memory-augmented-selective-prediction.md

**Ledger:** [1465] (arXiv:2601.22570v1, ICLR 2026) — **Verdict in file: ADAPT**

## What it is (1-2 sentences)
A training-free, plug-and-play selective-prediction (abstention) gate: for each input, retrieve nearest-neighbor proxy embeddings from an external memory bank and contrastively normalize the base model's confidence against them, then threshold for the coverage/risk trade-off — requires no training and no access to model internals.

## Key metrics/methods (formulas where given, else "not specified")
- MA-PaPSP pipeline: (1) take base-model input/output embedding; (2) retrieve k-NN proxy embeddings from external memory bank; (3) compute contrastive normalization term from retrieved proxies to correct the base model's miscalibrated confidence; (4) threshold the normalized score. No gradients, no fine-tuning; black-box base model.
- Metric: AURC (Area Under the Risk-Coverage curve), lower is better. Exact normalization formulas in paper Sec. 3 (not restated in ledger).
- Assumptions: memory bank covers the input distribution; embedding distance correlates with task difficulty/reliability; base-model confidence is systematically miscalibrated in a neighborhood-correctable way.
- Code: https://github.com/kingston-aditya/MA-PaPSP.

## Data sources named
Eval: MS-COCO (captioning), Flowers-102, UCF-101 (video), SugarCrepe. Memory bank: CC12M + CC3M + SBU-1M image-text pairs (public; "no overlap" with eval sets asserted but not stress-tested).

## Findings (numbers and facts, not vibes)
- AURC reductions, large-model examples: MS-COCO 0.136→0.109; Flowers-102 0.074→0.063; UCF-101 0.113→0.088; SugarCrepe 0.078→0.062.
- Ablation (proxy + contrastive vs base): MS-COCO 0.109 vs 0.160; Flowers 0.063 vs 0.172; SugarCrepe 0.062 vs 0.204.
- Gains consistent across modalities and base models; paper warns web-scale memory banks may contain near-duplicates of eval images (contamination would inflate gains) and per-instance retrieval cost is not benchmarked.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: a retrieval-based abstention gate over frozen pick models — "knowing when to say no" — that ports directly to GSE as a confidence/abstention layer; GSE's corpus covers conformal prediction but nothing retrieval-based.
- OTHER (pick selection): build a memory bank of historical NFL game states (engine feature vector + realized outcome + pick correctness); at prediction time, correct model confidence with k-NN neighbor empirical accuracy and abstain/down-weight stake below a coverage threshold tuned on 2023–2024.

## Engine-actionable? (yes/no + one-line what)
Yes — implement a kNN-based confidence-correction gate over stored historical game-state vectors: abstain or down-weight stakes when neighbor-adjusted confidence falls below threshold; accept only if 2024 AURC drops ≥10% vs raw-confidence abstention at matched coverage.
