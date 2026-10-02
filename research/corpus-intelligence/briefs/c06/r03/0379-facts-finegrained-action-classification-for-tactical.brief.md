# arxiv-deep/0379-facts-finegrained-action-classification-for-tactical.md
## What it is (1-2 sentences)
Action-classification paper (arXiv:2412.16454, Lai et al. 2024) showing a fine-tuned VideoMAE Vision Transformer on raw video reaches 90% on fine-grained fencing actions (and 83.25% on boxing punch types), vs 64.8% for a pose-estimation-based baseline — plus a new public fencing dataset (6,400 clips, 8 classes). Verdict in file: ADAPT — the transfer is automated action labeling from NFL video (route/pass-rush move classification) where NGS labels are absent, but it needs NFL-specific labeled clips and a temporal-segmentation front end.
## Key metrics/methods (formulas where given, else "not specified")
- Model: MCG-NJU/videomae-base (Kinetics-400, 12 layers, 12 heads, hidden 768, FFN 3072), fine-tuned: 16 uniformly subsampled frames, 224×224, lr 5e-5, effective batch 8 (batch 4, grad accum 2), warm-up 0.1, 10 epochs, eval every 500 steps; two GTX 1080 Ti (~20 GB).
- Preprocessing equations only: X_sub = {x_i | i = k·T/N}; symmetric padding = ((H_target−H_orig)/2, (W_target−W_orig)/2); X_std = (X−μ)/σ.
- Model code not stated (reproducibility rests on documented hyperparameters); dataset at https://anonymous.4open.science/r/FACTS-B1C5 (anonymous link, may not persist).
## Data sources named
FACTS fencing dataset (new, public): "Quarte Riposte" competition footage; 13,459 clips annotated by fencing-community majority vote; final 6,400 clips across 8 labels (Attack/Riposte/Counter-attack/Remise × Left/Right), ~186 frames/clip mean, horizontal-flip augmented. Boxing: 2021 Olympic Boxing Punch Classification Video Dataset (Kaggle, Stefanski et al.) re-cut into 8,000 clips × 8 labels (L/R × head/missed/block/body punch), 15 frames each, recorded on four GoPros at 50 fps, referee-annotated.
## Findings (numbers and facts, not vibes)
- Fencing: accuracy 90%, eval loss 0.3895, 95% CI [0.8812, 0.9187]; weighted precision/recall/F1 = 0.90/0.90/0.90; per-class F1 AR 0.84, AL 0.84, RR 0.87, RL 0.90, CAR 0.89, CAL 0.90, ReR 0.97, ReL 0.98. Baseline pose pipeline: 64.8%.
- Boxing: accuracy 83.25%, eval loss 0.8145, 95% CI [0.8125, 0.8542]; per-class F1 weakest LHHP 0.62 / RHHP 0.65; LHHP↔RHHP confusion 23×/33× (left/right symmetry struggles in fast action).
- Main confusions: counter-attacks vs similar offensive actions (CAR confused with RR 8×, AR 2×).
- Robustness: −5 pp accuracy on home (non-competition) videos (domain shift on video quality/lighting/occlusion — exactly GSE's broadcast-film conditions).
- Caveats: split ratios unstated, no bout-level de-duplication stated (near-duplicate frames could inflate accuracy); conflicting/ambiguous annotations systematically excluded (selection bias); assumes pre-clipped single-action inputs — no detection/localization stage; no VideoMAE-vs-random-init ablation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — INFERENCE: the raw-video-classification method could extend to QB behavior tags (drop type, release mechanics, scramble triggers) from film, though the paper itself covers no QB content.
- SCHEME — WR route classification per route-stem clip, pass-rush move and blocking-scheme tags; labels feed route-type-specific receiver efficiency and auto-tagged content clips.
- OTHER — labels supply what NGS lacks: college film, All-22-only plays, historical footage, pass-rush move types; improvement arm: audio-visual fusion (broadcast crowd/whistle/pad-crack audio) to disambiguate occluded contact events like tackles/blocks.
## Engine-actionable? (yes/no + one-line what)
Yes — prototype fine-tuned VideoMAE route classification (≥8 route classes, ≥200 clips/class, weeks 1–12 train / 13–15 val / 16–18 test, time-ordered) joined to nflverse play_id, as offline batch labeling feeding route-type receiver efficiency features; gate: ≥10 pp over the pose-based baseline AND per-class F1 ≥ 0.70.
