# arxiv-program/research/2026-09-21/arxiv-deep/0173-evaluating-soccer-player-from-live-camera.md
## What it is (1-2 sentences)
Deep read of Garnier & Gregoir (2021, arXiv:2101.05388v1): "Narya" — end-to-end soccer player evaluation from a single live camera (SSD detection + homography + re-ID tracking) plus Expected Discounted Goal (EDG), a self-play-learned discounted state-value function trained purely in the Google Research Football simulator with zero real match data. Verdict in file: ADAPT — the EDG concept (uniform credit assignment over goal-leading actions) is portable to NFL play valuation as a critique/complement of EPA/WPA; the tracking pipeline is soccer-specific.
## Key metrics/methods (formulas where given, else "not specified")
- EDG: V^π(s) = E_{τ∼π_θ}[R(τ)|s]; cumulative discounted reward R(τ) = Σ_n γ^n r_{t_n}; policy gradient ∇J = E[Σ_t ∇ log π_θ(a_t|s_t) R(τ)].
- PPO + Impala: lr 0.000343, γ=0.993 (≈0.5 weight at 100 frames), 8 parallel envs, batch 1024, clipping 0.08, entropy 0.003, GAE 0.95, grad-norm clip 0.64; training: 50M steps vs easy bot → 50M vs medium → 2×50M self-play.
- Homography X_2 = H X_1 (h_33=1), solved via 28 keypoint masks; REID ResNet-50 embedding (dim 751) + Kalman tracklets.
## Data sources named
Custom: tracking dataset 480/60/60 images; homography 874/159; keypoints 463/46/59; RL training in Google Research Football simulator only (no real data); promised repo https://github.com/DonsetPG/narya (forthcoming at publication, not verified).
## Findings (numbers and facts, not vibes)
- Homography IoU: OURS 0.908/0.921 (mean/median) vs best Citraro 0.939/0.955; SSD detection mAP 74.6 (player AP 89.9, ball AP 59.3); keypoint IoU/F1 0.882/0.91 (FPN+EfficientNet-b3).
- Agent goal difference: 8.14 vs easy bot, 4.7 vs medium, 5.3/4.8 in self-play stages.
- EDG finding: assist/goal value split 35%/65% vs 10%/90% in EPV/VAEP — value "much more uniformly distributed"; EPV and EDG always agree on action-impact sign; EDG rates a pass negatively where VAEP rates it positively when 2 opponents press the receiver; easy-bot-only agent attributes equal potential everywhere (self-play creates spatial structure).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: new capability direction — simulation-learned discounted state value with uniform credit assignment; NFL adaptation = "Expected Discounted Points" (EDP) learned by PPO on an nflverse drive-level simulator, comparing credit-spread against EPA's terminal-play concentration (the paper's 35/65 vs 10/90 finding).
## Engine-actionable? (yes/no + one-line what)
yes — build the nflverse drive-transition simulator + PPO self-play to extract EDP(s); adopt only if calibrated (slope 0.95–1.05) and team mean EDP/play predicts rest-of-season point differential with R² ≥ EPA/play R² + 0.02.
