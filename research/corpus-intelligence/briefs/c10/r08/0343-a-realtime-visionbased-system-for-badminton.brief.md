# docs/arxiv-program/research/2026-09-21/arxiv-deep/0343-a-realtime-visionbased-system-for-badminton.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2509.05334v1 (Diwen Huang): a smartphone system that estimates badminton smash speed via YOLOv5 shuttlecock detection plus a constant-velocity Kalman filter and a user-supplied pixel-to-real scale calibration. Verdict in the file: **REJECT** — validation is fatally weak (n=20, single player, MAE 66.41 km/h vs radar), so the speed-accuracy claims are unsupported.
## Key metrics/methods (formulas where given, else "not specified")
- Detector: YOLOv5, confidence threshold 0.1, IoU 0.45, on strictly perpendicular-view video.
- Composite detection score: S = 0.3·C_YOLO + 0.7·P_K, where Kalman proximity score P_K = max(0, 1 − d/(W_frame/4)) (rewards detections near the expected region; d = distance, W_frame = frame width).
- Constant-velocity Kalman filter for trajectory smoothing; manual trajectory correction permitted.
- Scale: S_f = d_real / d_pixel (user-supplied, e.g. measured court dimension on screen).
- Speed: v = (Δpixels / Δt) × S_f × 3.6 (→ km/h). Implied speeds <5 or >375 km/h rejected as invalid.
- The ledger's stated rejection gate: adopt a vision speed estimator only if it achieves MAE ≤5 km/h vs NGS-measured speeds on ≥500 plays across ≥10 games, with no manual correction and no user-supplied scale.
## Data sources named
- Custom 15,000-image shuttlecock detection dataset (perpendicular view; collection/labeling protocol not detailed); YOLOv5 public source cited.
- Validation: 20 smashes by one skilled player, filmed on an iPhone 16 at 30 fps, with a Bushnell Speedster III radar gun as reference.
- No project-specific code or data link stated.
## Findings (numbers and facts, not vibes)
- Detector on the custom set: 93% precision, 87% recall, 91% mAP@0.5.
- Peak vision-vs-radar disagreement over 20 trials: **MAE 66.41 km/h, RMSE 74.68 km/h** — roughly 20–30% relative error on typical 200–400 km/h smashes.
- No at-net aggregate error (MAE/RMSE) reported — only the raw 20-trial table.
- 30 fps sampling of a ~300 km/h shuttlecock gives ~2.8 m/frame, so the reported "peak" is an aliased sample of the true peak.
- Manual trajectory correction was allowed during validation — the numbers are not those of a fully automatic system.
- The user-supplied scale factor propagates user measurement error 1:1 into every speed estimate; unquantified.
- No train/test split for the speed estimator (deterministic pipeline); no cross-player, cross-device, or cross-venue validation; no confidence intervals; no baseline-method comparison.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- MAE 66.41 km/h on n=20 with manual correction allowed → TRUST-SIGNAL: never adopt a phone-based speed estimator with uncalibrated user scale factors.
- Aliased 30 fps peak sampling; 1:1 propagation of hand-measured scale error → OTHER: engineering requirements if this lane were ever revisited (calibrated multi-camera, ≥120 fps, sub-pixel localization).
- "detect → Kalman → scale" pipeline is textbook standard practice with no novel transferable component; NFL external validity none → OTHER: GSE's tracking/NGS lane already has far more accurate professionally measured speed data.
## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict in-file; GSE has NGS-measured speeds, and a ±66 km/h phone estimate is useless to the engine.
