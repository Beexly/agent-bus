# arxiv-program/research/2026-09-21/arxiv-deep/0364-deep-learning-for-sports-video-event.md
## What it is (1-2 sentences)
Ledger deep-read of arXiv:2505.03991, a survey ("Action Spotting and Precise Event Detection in Sports: Datasets, Methods, and Challenges") that formalizes the TAL / Action Spotting / Precise Event Spotting taxonomy, catalogs 16 datasets and 17 methods on a SoccerNet leaderboard, and derives full evaluation equations. Verdict in the file: ADAPT — the taxonomy, tolerance-window formalism, leaderboard, dataset catalog, and the three open challenges are a design reference for GSE's video event-detection and frame-accurate highlight cutting; no model to lift, only benchmarks, equations, and an engineering roadmap.

## Key metrics/methods (formulas where given, else "not specified")
- TAL mAP: Precision = TP/(TP+FP), Recall = TP/Total GT; T-IoU = |Ip ∩ Ig|/|Ip ∪ Ig|; AP = sum_k(R_k - R_{k-1})P_k; mAP = (1/C) sum_c AP_c.
- AR@AN: matched GT / total at fixed proposal counts (AR@50/100/200). AUC = integral of AR(n) over 0..N.
- AS/PES AP: detection = TP if predicted timestamp falls within tolerance window of an unmatched GT (one match per GT, non-reusable); Precision_n = TPs up to n / predictions up to n; AP = (1/Total GT) sum_i Precision_i — early high-confidence TPs contribute most.
- Tolerance ladder (Table I, with units ambiguous in the paper): TAL ~1-5 s; AS 5-60 (frames per Table I / seconds per text); PES 0-2 frames (table) / 1-5 frames (~33-200 ms at 25-30 fps per text).
- Method families: TAPG/TAL — global-to-local (TURN, CTAP) vs local-to-global (TAG, BSN, BMN, BSN++, TCANet, BCNet); AS/PES — Giancola temporal pooling, NetVLAD++, RMS-Net, Zhou transfer learning, E2E-Spot (RegNet-Y + Gate Shift Modules + 1-layer bi-GRU), STE (1D-conv only), SpotFormer (VideoMAE + Swin), Soares dense anchors, ASTRA (Transformer + visual/audio queries), T-DEED (fine-grained temporal resolution), UGL (RegNet-Y+GSM + GLIP vision-language local entities — first VL model in PES), COMEDIAN (MoCo + Soft Contrastive distillation pretraining — SOTA at publication).
- Engineering findings: Giancola active-learning pipeline reaches SOTA-comparable AS with only one-third of the labeled dataset; Vanderplaetsen late audio fusion (just before FC layer) beat other visual+audio strategies; Zhou's sport-specific backbone fine-tuning gave the largest single jump.

## Data sources named
- 16-dataset catalog (Table III): SoccerNet (2018, 500 videos/764 h, 3 classes), SoccerNet-v2 (2021, 500/764 h, 17 classes), SoccerNet Ball Action Spotting (2023, 7 videos, 12 classes, 11,041 timestamps), Tennis E2E-Spot (2022, 3,345 clips, 6 classes), OpenTTGames (2020, 12 videos @120 fps, 4,271 frame-precise events), P^2A (2024, 2,721 videos/272 h, 14 fine / 8 high-level classes), NCAA basketball (2016, 257 videos, 14 categories), Badminton Olympic (2018, 27 videos, 12 classes), FineGym (2020, 5,374 videos, 32 classes), MCFS (2021, 11,656 segments/17.3 h, 130 actions), FineDiving (2022, 300 videos, 52 action types). Zero American-football datasets in the catalog.
- Method code refs: COMEDIAN, E2E-Spot, ASTRA, T-DEED, UGL, SoccerNet public repos (no new code/data from the survey itself).

## Findings (numbers and facts, not vibes)
- SoccerNet leaderboard (Table II): COMEDIAN 73.10 tight test / 68.38 challenge (SOTA at publication); Soares dense anchors 65.07 test / 68.33 challenge; ASTRA 70.10 tight / 79.21 loose (challenge); E2E-Spot 66.73/73.62 (challenge); Zhou 49.56/74.84 (challenge); Giancola baseline 31.37 loose (2018).
- Only 3 of 17 methods are cross-sport validated: E2E-Spot (tennis/diving/gymnastics/skating), T-DEED, Tran UGL. Every other method was validated on soccer only.
- Active learning: SOTA-comparable AS with 1/3 of labeled data (Giancola et al., soccer only).
- PES motivation: in tennis/table tennis/skating, 1-2 frame errors can miss ball contacts or bounce locations.
- Three open challenges: (1) cross-sport generalization; (2) unsupervised/low-supervision largely unexplored; (3) multimodal fusion stuck at concatenation/late fusion — future is attention-based cross-modal transformers, temporal alignment, ASR+commentary as weak supervision.
- Table II is a literature compilation (different eras/splits) — directional, not gospel. Paper's Table I vs text disagree on AS tolerance units (frames vs seconds).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: annotation-spec design — adopt TAL/AS/PES tiers for GSE video: interval labels for play phases, single timestamps for event indexes (turnovers, scores), frame-level ±1-2 frame labels for PES-grade highlight cut points matching the 2-4 s telestrated clip requirement (standing video rule).
- OTHER: prototype selection — start with E2E-Spot (cross-sport validated, efficient) or T-DEED, not heavy SpotFormer; UGL's GLIP local-entity prompts adapt to NFL entities (ball, pylon, first-down marker).
- OTHER: late-fuse audio (crowd/whistle/commentary) just before the FC layer per Vanderplaetsen's finding.
- OTHER: labeling-budget de-risk — active-learning loop (1/3 data) before paying for full NFL annotation; then reproduce-test whether it holds on football's denser event structure.
- OTHER: soccer->NFL cross-sport transfer tax is unmeasured — a publishable gap; zero American-football datasets in the catalog.

## Engine-actionable? (yes/no + one-line what)
YES — adopt the TAL/AS/PES taxonomy as the annotation spec, evaluate with the paper's AS/PES AP equations at multiple fixed-frame tolerance windows, and prototype highlight-cutting from E2E-Spot/T-DEED with late-fused audio.
