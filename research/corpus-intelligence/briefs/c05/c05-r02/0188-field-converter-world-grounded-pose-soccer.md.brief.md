# arxiv-program/research/2026-09-21/arxiv-deep/0188-field-converter-world-grounded-pose-soccer.md
## What it is (1-2 sentences)
Soccer broadcast pose paper (Khan et al., arXiv:2609.10498, 2026) solving global player translation — not pose — by refining a geometry-based ray–ground-plane root initialization with a temporal residual TCN/Transformer on FIFA Skeletal Tracking Light 2026 data, yielding metric world-grounded player localization from monocular broadcasts. The reader's verdict was ADAPT — port the geometry-initialized temporal residual framework to NFL broadcast geometry with NFL field calibration and tracking-data ground truth.
## Key metrics/methods (formulas where given, else "not specified")
- Geometry init (§3.4): select lowest valid lower-limb keypoint j*; back-project through calibrated camera, intersect with pitch plane (z=0), subtract relative-pose offset: r^{c,init}_{i,t} = q^c_{i,t} − x̂^{rel}_{i,t,j*} (Eq. 18).
- Temporal residual refinement: TCN (5 residual blocks, dilations 1,2,4,8,16, k=3, 1.278M params) or Transformer (2 encoder layers, 4 heads, 1.252M) over 41-frame windows, stride 8; output residual Δr̂^c; r̂^c = r^{c,init} + Δr̂^c (Eq. 33); overlapping windows mean-aggregated (Eq. 34).
- Input vector f_{i,t}: flattened pelvis-centered 3D skeleton + 2D keypoints + box geometry/log-aspect + camera descriptor (intrinsics, distortion, center, view dir) + world ray–ground intersection + validity mask (370/345 dims).
- Loss: L = λ_root L_root + λ_vel L_vel + λ_acc L_acc + λ_cam3D L_cam3D; L_root = Smooth-L1 (β=1) on root residuals (Eqs. 35–36); velocity/acceleration auxiliaries (37–41).
- Training: AdamW lr 1.6788×10⁻⁴, wd 3.2001×10⁻⁴, batch 64 windows, ≤60 epochs, early stopping patience 10, grad clip 1.0.
## Data sources named
FIFA Skeletal Tracking Light 2026: 89 clips from 8 matches, ~2.41M player–frame observations; strictly match-disjoint splits (train 62 clips/6 matches, val 12 clips BRA_KOR, test 15 clips ENG_FRA). No public download link. Upstream: SAM 3D Body pose + calibrated intrinsics/extrinsics/distortion.
## Findings (numbers and facts, not vibes)
- Root error / World MPJPE / reproj (cm/cm/px): geometry-only 48.58 / 48.36 / 5.39; MLP residual 13.63 / 15.76 / 3.69; TCN residual 10.12 / 13.20 / 3.49; Transformer residual 11.04 / 13.21 / 3.43. Residual learning cuts root error ~72% vs geometry alone; temporal context adds the rest; TCN ≈ Transformer ("temporal context matters more than the specific temporal backbone").
- Ablation: direct absolute-root regression MLP 256.00 cm, TCN 63.05 cm vs residual MLP 13.63, TCN 10.12 — the decomposition does the heavy lifting.
- Input ablation (Δ root error): w/o 2D pose+box +5.81; w/o camera descriptor +2.90; w/o relative 3D +2.28; w/o ground intersection +1.05; w/o validity mask +0.63.
- Airborne failure: TCN root error ~10 cm grounded → ~15 cm at 10–13 cm foot clearance → 29 cm at 15–18 cm → 37 cm at highest clearance (geometry-only degrades 46 cm → ~1 m).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Geometry-init + temporal-residual decomposition as a perception primitive for broadcast→metric player trajectories — extension of the tracking/NGS lane (no existing work recovers world-grounded pose from broadcast; GSE uses NGS data products, not pose-from-broadcast) — OTHER.
- Game-disjoint split discipline mirrors NGS work — TRUST-SIGNAL.
- Airborne-failure gating (ground-contact vs airborne classifier; fallback ballistic extrapolation) as improvement experiment — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — NFL port: train TCN residual backbone on broadcast clips with nflverse/NGS tracking ground truth, game-disjoint splits (~6 engineer-weeks, calibration is the long pole); ADAPT iff residual-refined root error < 50% of geometry-only AND < 25 cm absolute on held-out 2025 games, feeding the NGS-replacement corpus.
