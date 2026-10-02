# arxiv-program/research/2026-09-21/arxiv-deep/0350-silent-impact-tracking-tennis-shots-from.md
## What it is (1-2 sentences)
Can tennis shots be detected and classified from IMU data on the passive (non-dominant) wrist — where there is no impact jerk to key on — at accuracy comparable to dominant-arm sensing, so users can wear the smartwatch they already own instead of a sensor on the racket hand? Verdict recorded: REJECT — recreational-wearable tennis shot tracking has no transfer path to NFL prediction or analytics; the wearable lane is one GSE does not operate in.

## Key metrics/methods (formulas where given, else "not specified")
No equations stated (losses named but not written). Shot classification: 1D-conv backbone (three conv blocks, kernel 11, channels 128→256→128, batch norm + Mish, global average pooling, FC + softmax), augmented with a Fourier transform decomposing input into three frequency bands (low 0–4 Hz whole-body motion; medium 5–20 Hz upper-body/arm swing; high >20 Hz impact vibration; bands per Ji & Pachi 2005; Khusainov et al. 2013), each band passed through a temporal Attention Block (1D conv kernel 11 + sigmoid → attention vector) multiplied into conv outputs, plus auxiliary Attention Classifier blocks; cross-entropy on all outputs. Shot detection: MS-TCN action segmentation (3 stages × 4 layers, hidden dim 64), frame-wise binary classification, class-weighted (5:1) cross-entropy, 500 epochs, batch 1, LR 1e-3, Adam; post-processing: ≥k consecutive true frames → 180-frame window (F1 gain from refinement only ~0.2%). Classification training: 100 epochs, batch 64, LR 1e-4, Adam; inputs normalized to [0,1] with separate accel/gyro scalers; RTX 3090.

## Data sources named
20 recreational tennis players (min 6 months experience, KAIST clubs); Xsens DOT IMUs on both wrists, synchronized, 120 Hz, 3-axis linear accel (m/s²) + 3-axis angular velocity (deg/s). Shot classification: 6,000 shot sequences (50 × 6 shots × 20 participants), 6 classes (serve, smash, forehand/backhand stroke, forehand/backhand volley), 1.5 s windows (1.0 s pre + 0.5 s post impact), impact labeled via dominant-arm acceleration jerk + video verification. Detection: 368 minutes of rallies/casual matches from 10 participants, 2,259 shots. Public: https://github.com/jyp0802/Silent-Impact. Prototype: Samsung Galaxy Watch 4 → Amazon S3 → server-side → phone app.

## Findings (numbers and facts, not vibes)
- Classification (5-fold, participant-grouped, mean ± SD): their model — passive arm 88.2 ± 2.0%, dominant 90.1 ± 3.0% (gap only 1.9%); Ganser FCN baseline — passive 81.4%, dominant 90.5% (gap 9.1%)
- Frequency-band attention improved passive-arm performance by +6.8% vs the FCN; on the dominant arm it added nothing (−0.4%); parameter-matched wider backbone gave only +0.4% (attention modules, 53K of 340K params, drive the gain, not size)
- Confusion: forehand stroke 98.9% dominant vs 72.1% passive; serve vs smash 82.8% passive vs 74.1% dominant (passive arm catches the ball-toss, disambiguating overhead swings)
- Detection: MS-TCN — passive accuracy 95.6%, F1 86.0%; dominant 98.5%, F1 94.8%; threshold peak detection baseline — passive 77.8%, F1 37.6%; dominant 97.2%, F1 90.1%
- Ball-feed → rally/match transfer: 86.0% (2.2 pp below feed CV)
- Segment length: 1 s → 79.4%; 1.5 s → 88.2% (chosen); 2 s → 85.9–87.3%; accel-only 81.8%, gyro-only 77.2%; fine-tuning on 10% user data +4.7% (~94%); downsampling to 30/60 Hz <0.5% degradation
- User study (N=10): passive arm significantly less mentally (p=0.02 during play) and physically demanding than dominant-arm wear

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — tennis recreational-wearable IMU shot tracking; zero mapping to NFL prediction, game modeling, or analytics. The one portable idea (Fourier frequency-band attention on motion signals) belongs to wearable products GSE doesn't build.

## Engine-actionable? (yes/no + one-line what)
No — explicit non-build; no GSE data source produces IMU signals and no GSE product consumes shot-level tennis classifications.
