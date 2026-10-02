# arxiv-program/research/2026-09-21/arxiv-deep/0616-towards-nationwide-analytical-healthcare-infrastructures-a.md
## What it is (1-2 sentences)
A single-subject proof of concept (Bačić, Vasile, Feng & Ciucă, 2024) for a privacy-preserving smartphone pipeline — MediaPipe pose estimation → knee-angle computation → peak detection — that counts knee-rehabilitation exercise repetitions at home. Verdict in the file: REJECT — no independent validation, N=1 self-reported data, no usable GSE prediction content.
## Key metrics/methods (formulas where given, else "not specified")
- Google MediaPipe pose estimation → 3D landmarks (hip, knee, ankle, foot-index).
- Knee angle via cosine law (paper eq. 1): ∠ABC = cos⁻¹((BC² + AB² − AC²) / (2·BC·AB)), A=hip, B=knee, C=ankle (equations (2)–(3) restating the law of cosines in garbled extracted form).
- Repetition counting: mean-centering of the angle signal; standard-deviation threshold STD_TRESHOLD = 0.5 (tuned for FP vs FN ratio); minimum peak distance/frequency = 4.
- Privacy claim: exporting pose-estimation CSV instead of video presented as privacy-preserving; no formal anonymization analysis performed.
- Narrow documented transfer: the MediaPipe → joint-angle → peak-detection pipeline as a starting template for fully on-device local biomechanical video analysis (2–3 days); no model, no serving, no GSE integration.
## Data sources named
9 videos recorded on an iPhone SE (iOS 15.8.3), camera at approximately waist height, 1080p at 30 fps; 179 total exercises by a single subject (the first author — self-reported rehabilitation). No public data release; no code link stated.
## Findings (numbers and facts, not vibes)
- Claimed counting accuracy: 91.67%–100% of exercises correctly identified (side- and front-view) — but thresholds were tuned on the same 9 videos / 179 exercises (development-set performance; no holdout, no independent subjects, no blinded human labels, no clinical ground truth such as IMU).
- Algorithm parameters: STD_TRESHOLD = 0.5; minimum peak distance/frequency = 4.
- No baseline comparison (no human-counter agreement, no alternative algorithm).
- Limitations: N=1 self-reported first-author subject; privacy claim asserted not demonstrated (pose CSVs retain identifiable gait biometrics); no control for camera angle, clothing, lighting, exercise type; external validity to NFL: none for prediction — does not qualify as injury science (no injury mechanism, no cohort, no outcomes).
- Acceptance gate if ever reconsidered: independent replication on ≥20 subjects with blinded human labels achieving ≥95% exact-count agreement AND a privacy analysis demonstrating non-identifiability of exported pose data.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: no actionable intelligence for any of the four lanes — the file explicitly rejects any GSE prediction use; the only connection is a conditional one (if GSE ever needs private on-device biomechanical video analysis, the MediaPipe → joint-angle → peak-detection pipeline is a documented starting template).
## Engine-actionable? (yes/no + one-line what)
No — REJECT for all GSE prediction use; unvalidated N=1 rep-counter with no transferable modeling content (per the brief's own gate).
