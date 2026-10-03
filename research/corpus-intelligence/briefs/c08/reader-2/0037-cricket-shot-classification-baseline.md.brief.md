# docs/arxiv-program/research/2026-09-21/arxiv-deep/0037-cricket-shot-classification-baseline.md
## What it is (1-2 sentences)
Ledger read of arXiv:2510.09187v1 (Sungwoo Kang, 2025): a comprehensive baseline study re-implementing seven prior deep-learning approaches for cricket shot classification on the CricShot10 dataset under one standardized protocol. **Verdict in file: REJECT** — cricket broadcast-video classification with no NFL transfer.
## Key metrics/methods (formulas where given, else "not specified")
No equations stated in the paper ("No equations stated"). Methods: LRCN, CNN+RNN, attention Bi-LSTM, ViT+GRU hybrid, CNN-GRU variants, VGG16-GRU transfer, and the proposed EfficientNet-B0 + bidirectional GRU + temporal attention. Validation: single stratified 70/15/15 split (seed 27) on 1,894 clips; metrics accuracy + weighted precision/recall/F1. Headline finding: prior reported 93–99.2% accuracy re-implements at 10.6–57.7% under the unified protocol — attributed to dataset splits, evaluation code, and unspecified implementation details.
## Data sources named
CricShot10 (Sen et al. 2021, sourced from original authors): 1,894 video clips, 10 batting techniques, ~3.2 s/clip, 1280x720, 180–200 samples/class. Code stated public: https://github.com/hpicsk/CricShot10_Baselines.
## Findings (numbers and facts, not vibes)
- Best (EfficientNet-B0+GRU, this work): accuracy 92.25%, precision 92.27%, recall 92.25%, F1 92.13%.
- Others: Dilated CNN-GRU 57.67%; Custom CNN-GRU 55.82%; CNN-RNN 55.63%; VGG16-GRU Final8 55.29%; VGG16-GRU Frozen 48.94%; LRCN 46.03%; Attention Net 40.49%; VGG16-GRU Final4 26.46%; ViT-GRU Hybrid 10.56% (accuracy, 1.12% precision — near chance; file flags likely implementation failure, not architectural verdict).
- Reported-vs-reimplemented gap: 96%→46.0% (Kumar/Balaji LRCN), 99.2%→55.6% (Bhat et al.), 93%→57.7% (Sen et al.).
- GSE has no broadcast-video analysis lane; no tracking coordinates or game-state context in the paper.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: reproducibility caution — re-implement/baseline published sports-ML methods under GSE's own backtest before trusting reported accuracy (reported overstated re-implemented performance by 35–45 points). File notes this discipline already exists in GSE's benchmark-completeness audit.
- OTHER: no QB-BEHAVIOR, COACHING, OL, SCHEME connections; cricket shot-type classification has no mapping to NFL tasks.
## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict; no implementation warranted (no video lane, no cricket data, no transferable task). Only residue is a research-hygiene caution already covered by the benchmark lane.
