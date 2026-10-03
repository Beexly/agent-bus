# docs/arxiv-program/research/2026-09-21/arxiv-deep/0367-efficient-2d-to-full-3d-human.md
## What it is (1-2 sentences)
Single-forward-pass 2D→3D human pose uplifter (UU Transformer backbone) extended to predict joint rotations alongside joint locations, 150× faster than the IK baseline, with supervised and weakly-supervised (IK pseudo-label / VPoser prior) training routes. Ledger verdict: ADAPT — adopt the rotation-matrix + geodesic-loss + SMPL-X-layer design and the weak-supervision recipe to train on NFL broadcast footage where ground-truth rotations don't exist.
## Key metrics/methods (formulas where given, else "not specified")
- Backbone: UU (spatial Transformer + temporal Transformer + strided Transformer). Three rotation representations tested: axis-angle, quaternions, rotation matrices; two losses (MSE, geodesic); four supervision strategies: naive heads, SMPL-X-layer (differentiable SMPL-X maps rotations→locations, tying outputs geometrically), IK pseudo-labels (Pavlakos 2019 on GT 3D joints), VPoser body prior.
- MPJAE (Eq. 3): (1/K)Σ_k arccos((tr(R̃_k R_k^T) − 1)/2), converted to degrees in tables. MPJPE: root-relative mm.
- Within-Batch Augmentation: half-batch horizontal-flip mirroring.
## Data sources named
fit3D (public; 11 subjects, 47 fitness exercises, 4 synchronized RGB cameras + 12-camera VICON mocap, per-subject 3D scans); re-split: 6 train (s03,s04,s05,s07,s08,s10), 1 val (s09), 1 test (s11); 26 joints (22 body + 2 per hand). Code: https://github.com/kaulquappe23/full_3d_hpe_uplifting.
## Findings (numbers and facts, not vibes)
- Best supervised naive: N-RM-2 (rotation matrices, geodesic, no WBA): MPJPE 39.40 mm, MPJAE 8.82°. Quaternions collapse under geodesic loss: N-Q-2 MPJPE 563.84 mm, MPJAE 85.35°.
- Best overall supervised: S-AA-3 (SMPL-X layer, axis-angle, MSE, WBA): MPJPE 36.69 mm, MPJAE 9.21° — only 2 mm worse than location-only UU-2 (34.68).
- Weak supervision: V-2 (VPoser, WBA) 38.76 mm / 15.90° MPJAE — rotation error roughly doubles vs supervised (~9°→~16°), MPJPE stays competitive.
- Head-to-head: N-RM-2/S-AA-3 beat UU-IK (16.43°) and Multi-HMR (17.59°) on MPJAE. Runtime: N-RM-2 9.86±2.78 ms vs UU-IK 1952.19±1091.52 ms with pre-init / 4733.31±1826.99 ms without — >150× faster (RTX 2080 Ti).
- Caveat: weak SMPL-X-only supervision (no prior) can produce impossible twisted rotations despite accurate joint positions — the VPoser prior suppresses this.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fast 3D joint-rotation estimation is the enabling layer for QB throwing-mechanics features (shoulder/elbow rotation sequences) and joint-angle-based injury-risk features — a new capability the current NGS taxonomy inventory lacks: QB-BEHAVIOR, OTHER (biomechanics infrastructure).
- The weak-supervision route (IK pseudo-labels + body prior, no GT rotations) is exactly how GSE trains on broadcast NFL footage where rotation labels can never exist: OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — replicate the S-AA-3/N-RM-2 recipe (rotation-matrix head + geodesic loss + SMPL-X layer, VPoser-prior weak supervision) on NFL broadcast QB throw clips to produce joint-rotation biomechanics features, with a rotation-plausibility analyst test (≥3.5/5, zero twist failures) as the acceptance gate.
