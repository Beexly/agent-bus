# docs/arxiv-program/research/2026-09-21/arxiv-deep/1111-deep-ai-fantasy-football-language.md

## What it is (1-2 sentences)
Ledger of arXiv:2111.02874v1 (Baughman et al. 2021, verdict ADAPT with heavy caveats). Describes a production-scale NLP pipeline for fantasy football (ingest → entity extraction → doc2vec → boom/bust/hidden-injury/meaningful-touches classifiers → projection adjustment) — a reference architecture for GSE's news-to-projection lane, with proprietary omissions limiting reproducibility.

## Key metrics/methods (formulas where given, else "not specified")
Pipeline: 50,000 sources → NER (13 entity types) → doc2vec embeddings (94 GB training text) → deep classifiers (reported 98 layers) for four labels → projection adjustment: fit 24 PDFs per player, 1,000 Monte-Carlo draws, display 15th/85th percentiles. Label equations, loss functions, and the 24-PDF fitting procedure are not given ("not stated in paper" at re-implementable fidelity — trade-secret omissions). Adoption gate in file: combined projections must beat GSE baseline RMSE by ≥0.1 on a full 2025-season backtest with p<0.05 (paired Diebold-Mariano).

## Data sources named
Claimed ingestion: 50,000 sources, 2.3M articles/videos/podcasts daily, 100+ GB total. Training: 2015–2016 archive; 2017 test; 2018 deployment (ESPN scale, claimed). Entity detector: 1,200 documents, 3 annotators, 14% entity density, 70% annotator agreement. No code or data released — proprietary.

## Findings (numbers and facts, not vibes)
- Entity detector: precision 79%, recall 73%, F1 76%.
- Classifiers: bust accuracy 55%; boom 67%; hidden injury 77% (PPV 68.1%); meaningful touches 91.4%; bust NPV 85.5% against a real-world bust base rate of 12%.
- Projection RMSE: ESPN 6.81, Watson-adjusted 6.92, combined 6.78 — the Watson-adjusted standalone is WORSE than ESPN's own; only the combined wins.
- Other claims: 88.2% of projections within 10 points, 71% within 7; 90% boom-or-close when predicted boom, 78% bust-or-close when predicted bust.
- Doc2vec analogies: player-team 100%, team-location 93.48%, player keyword 80%, team/location keyword 74%.
- Red flags noted in file: bust accuracy 55% barely exceeds the 12%-base-rate trivial regime; 98-layer depth claim implausible; 2018 deployment claims unverifiable.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: hidden-injury classifier (77% accuracy, 68.1% PPV) as an availability-signal feed — treat as intelligence input, not ground truth, given circularity caveats elsewhere in this batch.
- OTHER: end-to-end news-to-projection reference architecture (ingest → NER → embeddings → label heads → projection blend) for GSE's text-as-features lane.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the pipeline shape (beat-writer RSS + X + podcast transcripts → fine-tuned transformer NER → calibrated classifier heads blended into projections as a shrinkage prior) as GSE's news-to-projection reference, with published label definitions and a ≥0.1 RMSE improvement gate before any deployment claim.
