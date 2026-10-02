# arxiv-program/research/2026-09-21/arxiv-deep/0630-video-action-recognition-in-sports.md
## What it is (1-2 sentences)
Ledger brief for arXiv:2206.01038v1 (Wu et al., 2022), a survey of video action recognition in sports covering datasets, method taxonomy (2D vs 3D vs transformer vs pose-GCN), and applications; it is the REPLACEMENT paper for the rejected 0620 under the replace-on-reject rule. Verdict: ADAPT — use as the dataset + architecture build menu for GSE's experimental video lane (auto-charting first, injury-hazard detection second).

## Key metrics/methods (formulas where given, else "not specified")
- Survey — no novel equations. Method taxonomy: 2D (TSN, TSM, CNN-LSTM/LRCN), 3D (C3D 8× 3×3×3 conv; I3D 9 3D inception + 4 3D conv; P3D factorized 2D+1D; SlowFast dual branches + lateral; TFCNet temporal-FC over SlowFast; TPN temporal pyramid), Transformers (TimeSformer, ViSwin/BEVT, VIMPAC), pose/skeleton (ST-GCN graph convolutions on joints).
- Synthesis conclusions: 3D models normally outperform 2D but cost more compute; transformers competitive with best 3D CNNs when pretrained at scale.
- Team-sports insight: actions involve multiple players + ball trajectory + interactions — requires tracking all agents and modeling interactions; individual sports need only person detection.

## Data sources named
- SoccerNet (2018): 500 full matches, 17,115 highlight annotations, event localization + classification (football).
- MultiSports (2021): 4 team sports, 66 action categories, spatio-temporal annotations.
- FineGym (2020): 288 fine-grained gymnastics categories. Diving48 (2018): 18k clips, 48 dive classes. FSD-10 (figure skating). Volleyball/Basketball datasets (Ibrahim et al., 2016): dive/screen/spike/set labels.
- Pretraining sets: Sports-1M, Kinetics-400/700, UCF101, HMDB51. Toolbox: https://github.com/PaddlePaddle/PaddleVideo (PaddlePaddle framework — maintenance risk noted; prefer PyTorch equivalent).

## Findings (numbers and facts, not vibes)
- C3D: 61.1% on Sports-1M. TFCNet: 88.3% on Diving48 — ~11 points above SlowFast on the same set (survey's standout fine-grained result).
- 2D baselines: CNN-LSTM 88.6% UCF101; LRCN 82.7%; Composite LSTM 75.8% UCF101 / 44.0% HMDB51.
- Applications inventoried: coaching/education, referee assistance, TV highlight generation (action recognition improves localization accuracy, refs [33–36]).
- Limitations: 2022-vintage (predates video-LLM era; compare ledger 0624/SPRINT for the current frontier); accuracy numbers not comparable across datasets; richest team-sport labels disproportionately non-public; nothing validated on NFL footage.
- GSE implementation spec: (1) reproduce SlowFast or TSM baseline on SoccerNet event classification (success = within 3 points of published number, PyTorch); (2) fine-tune to NFL play-type/event recognition (formation, play result, personnel); (3) add pose stream (ST-GCN) for injury-hazard direction per ledger 0624 §14. Effort ~3–4 weeks.
- Acceptance gate: ADOPT iff SoccerNet reproduction within 3 points of published accuracy AND NFL pilot (~200 labeled plays) achieves top-1 ≥ 0.70 on play-type classification; park the lane if NFL pilot < 0.60.
- Improvement experiment: single multi-task model (event classification + temporal localization + pose estimation) on the NFL pilot instead of single-task baselines — shared spatio-temporal representation should beat single-task models on small pilots where data efficiency dominates.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Auto-charting pipeline (events, formations, personnel) for NFL All-22/broadcast — immediate product value for content operation — SCHEME (scheme/formation recognition from film)
- Pose/skeleton stream (ST-GCN) for injury-hazard detection — OTHER (video lane, pairs with ledger 0624 SPRINT evaluation protocol)
- Multi-agent + ball-trajectory interaction modeling — QB-BEHAVIOR (INFERENCE: QB decision-making and play recognition ultimately depend on tracking all agents, not just the ball carrier)
- Survey is a menu, not evidence — TRUST-SIGNAL (2022-vintage accuracy tables are stale and not comparable; do not cite as GSE results)

## Engine-actionable? (yes/no + one-line what)
Yes — defines GSE's experimental video lane with concrete gates (SoccerNet reproduction within 3 pts, NFL pilot top-1 ≥ 0.70) and a multi-task improvement experiment; auto-charting is the near-term deliverable (~3–4 week pilot spec in file).
