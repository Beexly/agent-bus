# arxiv-program/research/2026-09-21/arxiv-deep/0505-graph-encoding-and-neural-network-approaches.md

## What it is (1-2 sentences)
arXiv:2308.11142v1 (Tracy, Xia, Rasla, Wang, Singh, 2023) encodes volleyball rallies as temporal graphs (ball contacts as nodes, directed sequential edges, previous-round context nodes) and tests GCN/graph-GRU/graph-Transformer against Transformer/CNN baselines on rally winner, set location, and hit outcome prediction. Verdict: ADAPT the temporal event-graph encoding for NFL drive modeling — with strict pre-play features and season/game holdouts, since the paper's own leakage controls are undocumented.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified — no equations: neither the graph convolution, gated update, nor edge self-attention is formalized.
- Graph construction: each ball contact = node; consecutive contacts (pass→set→hit→block) get directed edges forming the rally's temporal chain.
- Context augmentation: set prediction adds previous round's hit/block nodes; hit prediction adds previous round's block node.
- Architectures: GCN (1 graph-conv + global pooling + 3 dense layers); Graph GRU (gated graph conv + pooling + 2 dense); Graph Transformer (custom edge self-attention conv + pooling + 2 dense). Baselines: standard Transformer, CNN on flat encodings.
- Metrics reported: accuracy, AUC, Brier score, MAE (rally); categorical accuracy (set/hit).
- Port spec from ledger: NFL drive as temporal graph — plays as nodes (down, distance, yardline, play type, EPA), directed edges between consecutive plays, previous-drive terminal nodes (punt/TD/FG/turnover) as context; start with 1 graph-conv + pooling + dense in PyTorch Geometric.

## Data sources named
VREN NCAA/professional volleyball rally data (as stated). Exact sample sizes, date ranges, leagues/seasons, train/test splits, hyperparameters NOT stated. Access not stated (no URL).

## Findings (numbers and facts, not vibes)
- Rally prediction (accuracy/AUC/Brier/MAE): College Transformer baseline 74.38/0.82/0.18/0.34; College Graph Transformer 81.15/0.87/0.15/0.27. Professional baseline 80.00/0.85/0.16/0.32; Professional Graph Transformer 81.15/0.87/0.16/0.27.
- Set-location accuracy: College — Transformer 54.65, CNN 57.43, GCN 59.10, Graph Transformer 56.57; Professional — 51.65, 53.30, 59.10, 56.57.
- Hit accuracy college (blocked included): 71.28, 72.04, 69.64, 73.31; (excluded): 80.68, 80.68, 80.10, 86.41. Professional included: 73.63, 74.73, 69.64, 73.31; excluded: 86.36, 86.36, 80.10, 86.39.
- RED FLAGS: several GNN scores exactly identical across college/professional splits (GCN set 59.10 twice; Graph Transformer rally 81.15 twice) — consistent with reporting errors or leakage. Train/test split methodology, temporal ordering, and CV not stated — the 81.15% rally accuracy is uninterpretable.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] Drive-as-temporal-graph encoding is a new representation for GSE's drive-outcome modeling (gse-lab drive work currently uses flat aggregations): plays as nodes with down/distance/yardline/play-type/EPA, directed edges, previous-drive terminal nodes as context — targets (a) drive ends in points, (b) drive EPA total bucketed.
- [COACHING] The learned-drive-memory upgrade: replace hand-built context with a GRU over drive-graph embeddings within a game, yielding an interpretable "game script memory" artifact for content.
- [OTHER] Methodological warning for any adaptation: strict pre-play features only (no post-snap info), season holdouts (train ≤2022, validate 2023, test 2024–2025), never split drives from the same game across train/test; adopt only if graph model beats flat-feature GBM by ≥0.01 AUC AND ≥0.005 log-loss on holdout in both seasons separately.

## Engine-actionable? (yes/no + one-line what)
Yes — port the temporal event-graph encoding to NFL drives (PyTorch Geometric, strict pre-snap features, season-blocked holdouts) and test vs GSE's flat-feature drive baseline; do not adopt the paper's numbers on faith given the leakage red flags.
