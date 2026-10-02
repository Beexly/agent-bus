# arxiv-program/research/2026-09-21/arxiv-deep/0224-deep-learning-for-action-spotting-in.md
## What it is (1-2 sentences)
A full-paper read of a timestamped survey chapter on deep-learning action spotting in association football (Cioppa et al., 2024) covering 60+ methods across the SoccerNet family (2018-2024). Verdict was ADAPT: the transferable asset is the temporal action-spotting method catalog and the open-source OSL-ActionSpotting library, usable to automate charting labels (snap, handoff, motion, personnel) from NFL All-22 film.
## Key metrics/methods (formulas where given, else "not specified")
- Task formalization: per video, action set A^n = {a_1^n,...,a_{A^n}^n}, each action a_k^n = (class c, timestamp t); method pipeline M = H o N o B (head/neck/backbone).
- Evaluation: AP^c_delta = (1/11) sum over 11 recall points of max precision (PASCAL VOC 11-point); mAP@delta; a-mAP_loose (delta 5..60 s, 5 s steps); a-mAP_tight (delta 1..5 s, 1 s steps); matching one-to-one with |t_hat - t| <= 0.5*delta.
- Method catalog: NetVLAD / NetVLAD++ (temporally-aware pooling) / CALF (context-aware loss + YOLO-like spotting head) / Zhou et al. (fine-tuned TPN/GTA/VTN/irCSN/I3D-Slow + transformer neck) / Soares et al. (dense anchors + temporal regression) / E2E-Spot (end-to-end TSM/GSM + GRU/MS-TCN/ASFormer) / Baikulov (EfficientNetV2-B0 + 3D conv neck) / T-DEED (Gate-Shift-Fuse + SGP-Mixer encoder-decoder).
## Data sources named
SoccerNet Action Spotting v1 (3 classes, 500 games, 6,637 annotations, 764 hours, 2014-2017 Europe), v2 (17 classes, 110,458 annotations), Ball Action Spotting 2023 (Pass/Drive, 11,041 timestamps), 2024 (12 classes, 11,041 timestamps). All open, all soccer; no NFL data in the family. Open-source: OSL-ActionSpotting library.
## Findings (numbers and facts, not vibes)
- v1 test a-mAP_loose: Nakazawa et al. 81.6 (Goal 87.1, Card 63.3, Substitution 94.3); NetVLAD baseline 49.7.
- v2 challenge a-mAP_tight: MEDet 71.31 (visible 76.29, unshown 54.09); several methods surpass 70% in a-mAP_tight.
- Ball Action 2023 mAP@1: Baikulov 87.04 test; Ball Action 2024 mAP@1: T-DEED 73.39 challenge.
- Unshown-action scores far lower than visible (e.g., loose mAP 60.88 vs 73.22) — off-screen events collapse; INFERENCE: pre-snap motion and coverage-shell labels would be the hardest NFL analogs.
- 60+ methods published over five years on action spotting alone; end-to-end methods need large annotated corpora; NFL has no public SoccerNet equivalent — annotation is the real cost.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (video/CV charting infrastructure): automated label extraction from All-22 = new data-sourcing capability (snap, handoff, pass release, catch, tackle, pre-snap motion).
- COACHING: motion/personnel-formation labels feed coaching tendency profiles (motion rate, personnel groupings by situation).
- SCHEME: charting features like coverage shells become computable if the spotter handles off-ball actions (with the noted unshown-action caveat).
## Engine-actionable? (yes/no + one-line what)
Yes — pilot spec provided: define 6-8 NFL action classes with single-timestamp rules, fine-tune OSL-ActionSpotting/E2E-Spot/T-DEED on ~20 hand-annotated All-22 games, adopt if mAP@1 >= 0.60 on held-out games; improvement experiment fuses video with NGS-style tracking coordinates as auxiliary stream to fix the off-ball failure mode.
