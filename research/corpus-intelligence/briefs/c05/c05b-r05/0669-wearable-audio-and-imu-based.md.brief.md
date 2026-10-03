# arxiv-program/research/2026-09-21/arxiv-deep/0669-wearable-audio-and-imu-based.md
## What it is (1-2 sentences)
Ledger brief for arXiv:1805.05456v1 (Sharma et al., 2018), a wrist-worn smartwatch (Samsung Gear S2) system that detects table-tennis shots in real time by fusing microphone audio (short-time energy peak functions) with IMU data, including a self-synchronization method for the two asynchronous sensor streams. Verdict: REJECT — wrong sport, wrong sensor modality (no audio or wearable data in GSE), no transferable method for NFL prediction or calibration; this reject slot is replaced via fresh search in the betting-market-efficiency territory.

## Key metrics/methods (formulas where given, else "not specified")
- Audio branch: short-time energy E[i] = Σ s_k² over 10 ms microframes; Audio Peak Function APF[i] = E[i] − (1/11)Σ_{j=i−5}^{i+5} E[j]; preceded by a 23-tap FIR filter whose weights and threshold bias are learned by backpropagating a hinge-style classification loss through the pipeline (filtering → STE → APF → threshold) with Adam; decision rule shot if APF[i]+bias > 0. Hinge-style loss: Loss[i] = −(APF[i]+bias) if y=1,ŷ=0; +(APF[i]+bias) if y=0,ŷ=1; 0 otherwise.
- IMU branch: radial acceleration a_rad = a_x; tangential angular velocity ω_tan = sqrt(ω_y²+ω_z²) (also a_tan = sqrt(a_y²+a_z²), ω_rad = ω_x); IIR low-passed at 10 Hz; IMU Peak Function IPF[i] = (a_x[i] − Σ_{j=i−4}^{i+5} a_x[j]) × (ω_tan[i] − Σ_{j=i−4}^{i+5} ω_tan[j]).
- Synchronization: quintile-quantize APF/IPF, triangle-smooth (1,2,3,4,3,2,1), maximize cross-correlation → offset (example: −270 ms, peak 0.6); mean absolute alignment error 32 ms on 20 s snippets.
- Combined detector: IPF local maxima (500 ms neighborhood) → candidate points; features = max APF, IPF, a_rad, a_tan, ω_rad near candidates; pre-trained classifier (SVM-RBF or 50-tree random forest); consecutive shot neighborhoods deduplicated.
- Assumptions: impact audio impulse and peak arm speed coincide in time; swing ≈ circular motion with x-axis along the forearm; microphone captures a usable 10–20 ms impact transient.

## Data sources named
- Author-collected only (~650 table-tennis shots from 8 intermediate/professional players, Samsung Gear S2 smartwatch: audio 8 kHz, IMU 100 Hz accelerometer ±8 g / gyroscope ±2000 deg/s; Samsung S6 30 fps video for manual shot tagging). 80/20 train/CV split; shot/non-shot sequences sampled 1:20. NOT public; no code, no dataset release. No public dataset, no code link.

## Findings (numbers and facts, not vibes)
- Audio branch: IIR(10 taps)+APF F-score 75%; trained 23-tap filter+APF F-score 80% (precision 85%, recall 75%), comparable to EPD+MBR baseline (F 81%) vs Zhang et al. EPD (F 42%).
- IMU branch: IPF F-score 78% (precision 73%, recall 83%) vs Srivastava Pan-Tompkins IMU on authors' data (F 55%).
- Combined: SVM-RBF F 91.5% (P 88.4%, R 94.8%); 50-tree random forest F-score 95.6% (precision 97.3%, recall 93.9%) — ~15 pp improvement over either sensor alone.
- 62% of table-tennis shots have acceleration < 3 g, motivating the audio fusion.
- Limitations: 8 players, ~650 shots; no held-out-player evaluation (95.6% F-score likely overstates generalization); no cross-device or cross-sport validation; sync error 32 ms vs a 10 ms impact transient; no ablations of the synchronization step's contribution.
- GSE overlap: tracking lane covers NGS ball/player position, speed, acceleration (27-family taxonomy); no audio modality anywhere in GSE; no wearable data; nothing does impact-event detection from audio — consumer-device sports-tech, not sports prediction. No GSE surface.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No-held-out-player evaluation inflating reported F-score — TRUST-SIGNAL (general lesson: small author-collected datasets without held-out-entity evaluation overstate generalization; relevant to any future GSE wearable/practice-data pilot)
- Self-synchronization of asynchronous sensor streams via cross-correlation of event-derived peak functions — OTHER (signal-processing curiosity only; no NFL sensor target exists)

## Engine-actionable? (yes/no + one-line what)
No — REJECT; table-tennis smartwatch shot detection has zero overlap with GSE's NFL stack (no audio data, no wearable data, no table-tennis market, no transferable method); the APF/IPF peak-function recipe solves an impact-transient detection problem with no NFL analogue in the engine.
