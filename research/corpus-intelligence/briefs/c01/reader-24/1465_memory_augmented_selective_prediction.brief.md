# arxiv-program/research/2026-09-21/arxiv-deep/1465-memory-augmented-selective-prediction.md
## What it is (1-2 sentences)
Ledger note for arXiv:2601.22570v1 (Sarkar, Li, Cheng, Mishra, Vasconcelos; ICLR 2026), "MA-PaPSP": a training-free, plug-and-play selective-prediction (abstention) gate that corrects a black-box model's confidence by contrastive normalization against nearest-neighbor proxy embeddings retrieved from an external memory bank. Verdict: ADAPT — a new capability for GSE (retrieval-based confidence gate over the pick engine); no overlap with existing abstention/conformal lanes.

## Key metrics/methods (formulas where given, else "not specified")
Pipeline (training-free, base model treated as black box):
1. Take the base model's input/output embedding (e.g., VLM embedding of image + generated caption).
2. Retrieve nearest-neighbor proxy embeddings from an external memory bank (CC12M + CC3M + SBU-1M image-text pairs; asserted no overlap with eval sets).
3. Compute raw base-model confidence plus a contrastive normalization term from retrieved proxies — calibrated against what the memory bank says "similar inputs" look like.
4. Threshold the normalized score for the coverage/risk trade-off.
- Exact contrastive score/normalization forms are in Sec. 3 of the paper (ledger does not transcribe them).
- Metric throughout: **AURC** (Area Under the Risk-Coverage curve), lower is better.
- Assumptions: memory bank covers the input distribution; embedding distance correlates with task difficulty/reliability; base confidence is systematically miscalibrated in a neighborhood-correctable way.

## Data sources named
- Eval: MS-COCO (captioning), Flowers-102 (fine-grained classification), UCF-101 (video action recognition), SugarCrepe (compositional language).
- Memory bank: CC12M + CC3M + SBU-1M public web-scale image-text corpora. Code: https://github.com/kingston-aditya/MA-PaPSP.

## Findings (numbers and facts, not vibes)
AURC (lower = better), large-model results:
- MS-COCO (Cider risk): 0.136 → **0.109**; Flowers-102: 0.074 → **0.063**; UCF-101: 0.113 → **0.088**; SugarCrepe: 0.078 → **0.062**.
- Ablation (proxy + contrastive vs base confidence): MS-COCO 0.109 vs 0.160; Flowers 0.063 vs 0.172; SugarCrepe 0.062 vs 0.204.
- Gains consistent across modalities and base models. Baselines: softmax/entropy confidence, energy scores, recent selective-prediction methods.
- Limitations: "no overlap" between bank and eval sets is asserted but near-duplicates in web-scale corpora are possible (contamination would inflate gains); retrieval quality depends on domain coverage; AURC gains are vs weak confidence baselines in some settings; per-instance retrieval compute cost not benchmarked.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: directly ports to GSE as a confidence/abstention layer over the pick engine — memory bank of historical NFL game states (engine feature vector + realized outcome + whether the pick was correct); at prediction time retrieve k nearest historical game-states and contrastively correct model confidence; abstain or down-weight stake below a coverage threshold.
- OTHER: fits the engine's research→wire→weight→calibrate sequence as a gate on top of calibration (complements the 2026-09-21 cqr.ts conformal audit); acceptance = ≥10% relative AURC reduction and higher ROI at matched coverage on 2024 test (index on ≤2022, tune threshold on 2023).
- OTHER: improvement experiment — distill the memory bank into a parametric residual-neighborhood gate (predict correctness from confidence + neighbor accuracy + neighbor distance + matchup features) to remove per-instance retrieval latency.
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content.

## Engine-actionable? (yes/no + one-line what)
Yes — build the historical-game-state kNN memory bank and the contrastive confidence correction as a training-free abstention/stake-down-weight gate; validate on GSE pick logs 2022–2024 (fit ≤2022, tune 2023, test 2024) with AURC and realized ROI at 80% coverage vs raw-confidence abstention.
