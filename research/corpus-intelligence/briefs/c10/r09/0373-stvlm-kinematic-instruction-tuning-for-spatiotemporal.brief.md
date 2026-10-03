# arxiv-program/research/2026-09-21/arxiv-deep/0373-stvlm-kinematic-instruction-tuning-for-spatiotemporal.md
## What it is (1-2 sentences)
Deep-read of arXiv:2503.19355v2 (Ko et al. 2025), "ST-VLM": fine-tuning a 7B video vision-language model on 116K kinematic QA pairs (distance/speed/direction over 3D trajectories) to teach spatio-temporal reasoning from video. The reader's verdict in the file is ADAPT — the QA-construction recipe, not the VLM, is portable.
## Key metrics/methods (formulas where given, else "not specified")
- Traveled distance = Σ_{t=s}^{e−1} ‖P_{t+1}^{(i)} − P_t^{(i)}‖_2 (sum of frame-to-frame 3D displacements); speed = distance/(e−s).
- Direction: θ_t = arccos(((P_{t+1}^{(i)} − P_t^{(i)}) · (P_{s+1}^{(i)} − P_s^{(i)})) / (‖P_{t+1}^{(i)} − P_t^{(i)}‖ ‖P_{s+1}^{(i)} − P_s^{(i)}‖)), discretized to 12 clock-face directions.
- Scoring rules: distance/speed correct if prediction within ±25% of truth, MAE reported; direction correct on exact clock match; direction timestamp correct if IoU ≥ 0.5.
- Pseudo-labeling pipeline: MonST3R 4D reconstruction + Metric3Dv2 metric rescaling + Grounded-SAM2 bounding boxes, ~400 s/video on A6000; trajectories sampled at 0.5-s intervals over 40-frame clips (≤20 s).
- Fine-tune: LLaVA-OneVision 7B, 1 epoch, batch 128, cosine LR 1e−5, 3 days on 8×A6000, training blend STKit 117K + 100K LLaVA-Video-178K + 20K OpenSpatialDataset.
## Data sources named
NuScenes (13K QA, 4K videos, LiDAR); Argoverse2 (8K QA); Ego-Exo4D sports (6K QA, VIO/SLAM trajectories treated as ground truth); BDD100K (86K pseudo-labeled QA); LLaVA-Video; MultiSports (1K QA); STKit-Bench 1,400 QA (74.8% NuPlan — unseen LiDAR set, rest NuScenes/Argoverse2/Ego-Exo4D); general benchmarks PerceptionTest, ActivityNet, Charades-STA, DramaQA, TVQA+.
## Findings (numbers and facts, not vibes)
- STKit-Bench average accuracy: ST-VLM-7B 59.8% vs LLaVA-OneVision-7B 27.4% (+32.4 pp), GPT-4V 28.5%, GPT-4o 26.8%; abstract claims +31.3% over GPT-4V.
- Per-task (Acc / MAE): traveled distance 49.5% / 25.1 m (vs GPT-4V 4.5% / 33.1 m); speed 42.0% / 11.6 km/h; direction 32.0% / 1.7 clocks; direction timestamp 69.0% / 0.61 IoU; multi-object comparisons 74–76%.
- Data ablation: no tuning 27.9% → labeled data only 51.1% → +pseudo-labels 59.8% (pseudo-labels add +8.7 pp).
- Paraphrased questions: 58.2% avg (vs ~27% baselines) — not template overfitting; general video benchmarks +2.7 pp (65.6 vs 62.9), beating 32B LLaVA-N-Video's 65.1.
- GPT-4V with 3-shot only reaches 32.8%; adding geometric context (extrinsics+depth) *degrades* GPT-4V to 31.0%.
- Absolute errors remain crude (MAE 25.1 m distance, 11.6 km/h speed); comparisons easy, precise estimation not.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Kinematic QA recipe over trajectories is directly portable to an NGS-derived text QA dataset for analyst copilots (OTHER).
- Pseudo-labeling adds +8.7 pp — evidence 4D-reconstruction pseudo-labels are worth it where labels are scarce (TRUST-SIGNAL: data-generation method validated).
- Model's "emerging multi-step reasoning" (combining kinematic estimates with arithmetic, e.g., "airplane 36.58× slower than normal") suggests chain-supervised kinematic reasoning could compound (OTHER).
- The paper explicitly EXCLUDES movement direction for sports due to complex 3D trajectories — the one task most relevant to NFL route/angle analysis is the one they dodge (SCHEME).
## Engine-actionable? (yes/no + one-line what)
Yes — build GSE-KinQA: generate 100–200K template QA pairs (traveled distance, top speed, direction-change count, pairwise comparisons) deterministically from nflverse/NGS tracking tables and fine-tune Llama 3.1 8B (already in the TASK-012 stack) as a knowledge-grounded analyst assistant; accept only if ≥55% on paraphrased held-out questions and ≥95% on comparisons.
