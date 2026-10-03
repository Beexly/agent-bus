# docs/arxiv-program/research/2026-09-21/arxiv-deep/1694-physics-informed-head-impact-detection.md
## What it is (1-2 sentences)
Deep-read ledger of Raymond et al. (arXiv:2108.08797): physics-informed ML for detecting true head impacts from instrumented-mouthguard false triggers, using a 1D CNN (MiGNet 2.0) trained on video-verified field data augmented with finite-element synthetic impacts — pretrain-on-synthetic-then-fine-tune beats field-only training. Verdict in the file: ADAPT — the synthetic-pretraining + recall-weighted recipe ports to GSE's rare-event classification problems.

## Key metrics/methods (formulas where given, else "not specified")
- Sensor: Stanford MiG2.0 mouthguard — triaxial accelerometer (±400 g @ 1000 Hz) + triaxial gyroscope (±4000 °/s @ 8000 Hz); 10 g trigger; 200 ms windows (−50 ms pre, +150 ms post); input 6 channels (ax, ay, az, αx, αy, αz).
- Model (MiGNet 2.0): deep 1D CNN: 2× [1D conv (64/128 filters, 5×1/10×1), maxpool 2, batchnorm, dropout 40%], reshape to 2D, 2D conv (64 filters, 3×15, stride 3×1), global average pooling, batchnorm, dropout 40%, softmax.
- Physics-informed component: synthetic true impacts from a finite-element head-neck model, generated to match mouthguard output style.
- Training strategies: (1) field only; (2) field + 25% synthetic; (3) field + 100% synthetic; (4) pretrain on synthetic (+verified falses) then fine-tune on field; time-shift augmentation (1–5 ms, up to 5×); class-weighted loss for the 1:10 imbalance.
- Metrics: PPV, NPV, F1, F2 (F2 emphasized — missing true impacts costlier); replacement bar: F2 ≥ 0.90. Fβ = (1+β²)·(precision·recall)/(β²·precision + recall).

## Data sources named
1,024 video-confirmed true impacts + 10,990 confirmed false impacts from Stanford college football (n=12 players, 17 practices) + three Bay Area high schools; 70/15/15 train/val/test split; no synthetic data in val/test. No public data or code release.

## Findings (numbers and facts, not vibes)
- Literature comparison (test): MiGNet 2.0 F1 0.95, F2 0.98 vs Wu et al. 2018 (SVM) 0.90/0.88; Gabler et al. 2020 (AdaBoost CART) 0.89/0.84; Domel et al. 2020 (CNN) 0.79/0.75 (cross-dataset comparison, acknowledged as imperfect).
- Training strategies (test NPV/PPV): field only 0.69/0.97; +synthetic (max) 0.72/1.00; augmented + 25% synthetic 0.76/0.97; balanced + 100% synthetic 0.87/0.86; pretrain-then-finetune 0.89/0.86 (best NPV).
- Workflow trial (6 participants, spring 2021, 88 mouthguard events, video ground truth): manual video review ~12 hours (20 events/hr, 2 hr analyst training) vs automated ~0 hours (>10⁶ events/hr, 5 hr training); both found all 61 true impacts; false impacts: manual 27, auto 20; auto: 7 false positives, 0 false negatives — clears the F2 ≥ 0.90 replacement bar.
- File's gate for the GSE recipe: synthetic pretraining improves F2 by ≥ 0.03 with zero additional real positives AND no increase in false-negative count; REJECT if real-data PPV drops > 0.05 (simulator-artifact risk).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: rare-event sensor/ML detection recipe and manual-vs-automated workflow economics — no football signal content.

## Engine-actionable? (yes/no + one-line what)
yes — adopt the recipe for GSE's rare-event detectors (injury-event flags from tracking data, anomalous-play detection): build a simulation-based synthetic generator for the rare class, pretrain on synthetic + real negatives then fine-tune on real data, class-weighted loss, time-shift augmentation, F2 (recall-weighted) with a pre-registered replacement bar; 2–4 weeks per detector per the file's spec.
