# arxiv-program/research/2026-09-21/arxiv-deep/0334-pixels-or-positions-benchmarking-modalities-in.md
## What it is (1-2 sentences)
Ledger deep-read of arXiv:2511.12606v3 ("Pixels or Positions? Benchmarking Modalities in Group Activity Recognition"). It builds SoccerNet-GAR — synchronized broadcast video + player-tracking for 87,939 World Cup 2022 football events — and benchmarks video vs tracking classifiers with a novel role-aware graph network, finding tracking beats video by 16.9 pp balanced accuracy with 479x fewer parameters. Verdict in the file: ADAPT for GSE's NGS-replacement / play-classification lane.

## Key metrics/methods (formulas where given, else "not specified")
- Role-aware graph per frame: nodes = players + ball, 8-dim node features (pitch x,y; velocity vx,vy; ball z-height; one-hot entity type home/away/ball). Players grouped into 4 tactical roles (goalkeeper/defender/midfielder/forward); within-team edges connect adjacent tactical lines; ball connects to all entities. Missing entities get sentinel coords (-2.0 normalized), excluded from message passing.
- Tracking backbone: 20-layer DeepGCN with GIN layers (sum aggregation, ReLU, residual, layer norm), 8-dim -> 128-dim node embeddings, mean pooling per frame, temporal MaxPool, 2-layer MLP head (hidden 256). Total 180K parameters.
- Video backbone: pretrained VideoMAE-B / VideoMAEv2-B (86.3M params), frame embeddings -> temporal neck (pooling/TCN/attention/BiLSTM) -> 2-layer MLP softmax. Cross-entropy loss; imbalance handled by weighted random sampling (4,000 samples/class/epoch).
- Primary metrics: balanced accuracy (avg per-class recall), macro F1; efficiency: 479x parameter ratio, 7x GPU-hour ratio.
- Temporal aggregation ablated: MaxPool, Attention, TCN, BiLSTM. Graph operators ablated: GIN, GraphConv, EdgeConv, GATv2, GEN, GraphSAGE. Connectivity ablated: none, fully connected, distance r=15m, KNN k=8, ball-distance r=20m, ball-KNN k=8, positional.

## Data sources named
- SoccerNet-GAR (new, paper-created): 87,939 events from 64 matches of 2022 FIFA World Cup, 4.5s windows centered on event timestamps, T=16 samples at 30 fps with 9-frame interval (~3.3 fps effective). Splits: 45 train / 9 val / 10 test matches (62,159 / 12,091 / 13,689 events).
- Raw tracking + event annotations: PFF FC (now Gradients Sports). Tracking: 2D player positions + 3D ball at 30 fps; players complete in 99.9% of frames, ball visible 93.4%. Video: 720p edited broadcast.
- Code: github.com/drishyakarki/pixels vs positions (verify URL verbatim; check licensing of underlying PFF FC/Gradients Sports data before commercial use).

## Findings (numbers and facts, not vibes)
- Main: tracking GIN+MaxPool+positional edges (180K params, 4 V100 GPU-hours): 77.8% balanced accuracy / 57.0% macro F1 vs best video (VideoMAEv2-B finetuned, 86.3M params, 28 GPU-hours): 60.9% / 50.1%. Tracking wins +16.9 pp balanced accuracy, +6.9 pp macro F1, 479x fewer params, 7x less training time.
- Per-class: tracking better on 9/10 classes. GOAL 73.3% vs 16.7% (+56.7 pp); HIGH PASS 83.3% vs 41.7% (+41.7 pp); TACKLE 54.0% vs 32.2%; OUT 94.2% vs 75.8%. Video better only on HEADER (66.3% vs 65.2%). FREE KICK vs PASS confusion: 498 tracking / 470 video misclassifications of FREE KICK as PASS.
- Graph operators: GIN 77.8 +/-0.7% (best, lowest variance); GraphSAGE 75.9 (2.3x params); GATv2 61.8; EdgeConv 55.6 — learned-adaptive edges underperform fixed tactical structure.
- Connectivity: positional 77.8% > fully connected 71.4% > no-edges 68.9%. Poorly chosen message passing adds nothing over independent node processing.
- Temporal: MaxPool 77.8% best balanced accuracy; Attention/TCN slightly higher macro F1 at 2x params; BiLSTM (350K) worst at 75.3%.
- Data scaling: tracking hits 67.0% with only 5 training matches; both plateau ~35 matches (78.5% vs 62.4%); gap narrows 25.4 pp (5 matches) -> 16.1 pp (35).
- Video finetuning matters: VideoMAE-B +20.6 pp (34.6->55.2%), VideoMAEv2-B +11.6 pp (49.3->60.9%).
- Windows are non-causal (centered, include post-event frames); 646:1 class imbalance (PASS 65.4%, GOAL 188 events 0.2%). GOAL test F1 only 47.0% even for tracking.
- NFL port spec in file: nflverse play labels 2020-2025 + 10Hz tracking windows, 7-10 play classes, replace soccer roles with NFL position groups (OL/QB/skill/DL/LB/DB), causal pre-snap->event windows, ~200K params, 3-4 weeks effort. Acceptance gate: beat no-edges baseline by >=5 pp balanced accuracy AND fully-connected by >=3 pp on held-out 2025 plays.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: NGS-replacement architecture — positions beat pixels for group activity recognition; play classification (run/pass/screen/play-action/RPO/sack) should run on tracking, video only where tracking absent.
- SCHEME: role-aware edge grammar is the portable insight — tactical-line edges (OL<->QB<->skill; DL<->LB<->DB) encode scheme structure directly; fixed roles beat learned-adaptive edges (GIN 77.8% vs GATv2 61.8%), i.e., hardcode football structure, don't let the net discover it.
- OTHER: evaluation protocol — balanced accuracy + macro F1 over play classes, 5 seeds, data-scaling curve; 5 matches gets 67% already, so prototype fast.
- OTHER (methodological): non-causal window warning — any tracking-based classifier must use past-only windows for deployment; the paper's centered windows leak the future.

## Engine-actionable? (yes/no + one-line what)
YES — adopt the NFL role-aware graph classifier (GIN + positional/edge-grammar + temporal MaxPool, ~200K params) as the play-classification backbone on NGS-style tracking, per the file's acceptance gate (beat no-edges by >=5 pp and fully-connected by >=3 pp on held-out 2025 data).
