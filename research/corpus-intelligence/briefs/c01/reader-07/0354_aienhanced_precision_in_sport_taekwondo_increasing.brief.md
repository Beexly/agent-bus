# arxiv-program/research/2026-09-21/arxiv-deep/0354-aienhanced-precision-in-sport-taekwondo-increasing.md
## What it is (1-2 sentences)
Ledger deep-read of arXiv:2507.14657v2 ("AI-Enhanced Precision in Sport Taekwondo: Increasing Fairness, Speed, and Trust in Competition (FST.ai)"), a framework/vision paper proposing a 6-step AI pipeline (pose estimation + action recognition + impact analysis + edge inference + human-in-the-loop) to replace/augment Instant Video Replay for Taekwondo head-kick scoring. Verdict in the file: REJECT — zero empirical results; no dataset, no measured accuracy, no validation; every number is an explicitly labeled illustrative example.

## Key metrics/methods (formulas where given, else "not specified")
- Proposed 6-step pipeline (none built/measured): (1) high-speed video >60 fps, histogram equalization, Wiener/blind deconvolution deblurring; (2) OpenPose-style 2D pose (18 joints, confidence maps + PAFs), Kalman tracking x_hat_{t|t}^j = x_hat_{t|t-1}^j + K_t(z_t^j - H x_hat_{t|t-1}^j), or optical flow; (3) action segmentation via temporal sliding windows + CNN-LSTM/Transformer on pose sequences — joint angles theta_i = angle(p_{i-1}, p_i, p_{i+1}), velocities v_i = |p_i^{(t)} - p_i^{(t-1)}|/Delta_t -> classes {slide, standard head kick, turning head kick}; (4) impact verification: foot deceleration a_i = (v_i^{(t-1)} - v_i^{(t)})/Delta_t > a_threshold AND IoU(foot bbox, head bbox) > 0.3, plus torso rotation >90/120/150 deg (thresholds inconsistent across sections) -> 3 or 5 points; (5) jury prompt within 3-5 s with confidence + overlays; (6) logging S = (X, y_AI, y_jury) and feedback retraining.
- Feedback retraining loss: L_feedback := lambda_cross * CE(y_jury, y_AI) + lambda_conf * |p_AI - p_jury|^2.
- Latency budget: T_total = T_pose + T_class + T_impact <= 200 ms; edge inference on NVIDIA Jetson (Xavier named), TensorRT, INT8, pruning — design target, not measured.
- Decision rule: D_final = D_AI if accepted else D_jury (human-in-the-loop). No training procedure, no architecture details, no measured hyperparameters.

## Data sources named
- None. Phase 1 of the roadmap would be "curate annotated video datasets from historical matches" — data collection hasn't happened.
- Real-world motivation only: Cadet World Championship 2025 Fujairah anecdote — one IVR review took ~90 s; 40 matches/court/day x 3 requests x 1.5 min = 180 min/day operational loss (arithmetic as motivation, not results).
- Project page: r3al.ai. No code repo, no dataset link.

## Findings (numbers and facts, not vibes)
- No measured findings exist. All numbers are illustrative examples: P(A_3)=0.917 "Turning Head Kick, 91.7% confidence" (§3.2 example); foot deceleration 4.1 -> 0.6 m/s over 0.033 s (a ~= 106 m/s^2), IoU 36%, rotation 156 deg -> 5 points (§3.3 example); T_pose=9 ms + T_class=43 ms + T_impact=8 ms = 60 ms total (§3.4 example, asserted not measured); y=[0.02,0.04,0.94] "94.2% confidence" (§4.3 example); deceleration 3.5 -> 0.4 m/s, a=94 m/s^2, IoU 0.35 (§4.4 example); "12 matches, AI misclassified a slide as a kick in 3 cases... 27% false-positive reduction after retraining" (§4.6 example).
- Turning-kick rotation threshold is >90 deg in §3.3, >150 deg in the §3.3 example, >120 deg in §4.4 — the scoring rule is not self-consistent even as a proposal.
- Paper's own summary language ("mathematically grounded, rigorously validated, and operationally tested") is contradicted by the absence of any experiment.
- Citations include journals of questionable standing (citation padding per the ledger).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the only portable fragment is the human-overrides-AI feedback loop — L_feedback = lambda_cross*CE(y_human, y_AI) + lambda_conf*|p_AI - p_human|^2 — a template for learning from Garrett's pick overrides IF an override log existed (none does); a two-line idea, not a build.
- OTHER: contact heuristic (deceleration + bounding-box IoU overlap > 0.3) is a generic impact detector with no validated transfer to NFL; record as an untested idea, not evidence.
- OTHER: anti-pattern for intake — framework papers with no empirical section cannot count as evidence; the arXiv program's replacement rule (a REJECT never counts) applies.

## Engine-actionable? (yes/no + one-line what)
NO — REJECT; nothing validated to implement; reconsider only if a follow-up reports measured precision/recall on a fixed, released Taekwondo head-kick dataset with a human-jury baseline.
