# arxiv-program/research/2026-09-21/arxiv-deep/0314-muybridge-mobile-human-centerofmass-estimation-from.md
## What it is (1-2 sentences)
A deep-read ledger of Bradshaw et al. (2026, arXiv:2609.02854) "MuyBridge": monocular mobile-video 3D human center-of-mass (CoM) estimation via "sparse fusion" — 2D pose + sparse joint depth + anthropometric segment parameters + ballistic/contact physics anchors. Verdict in the file: ADAPT as a template for broadcast-derived biomechanical load features for future injury/props-risk modeling, with the paper's caveats (8 athletes, markerless reference, depth error dominates).
## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: (a) per-frame 2D pose (Halpe-26) + dense monocular depth (distilled Marigold); (b) sparse depth sampling at joints only; (c) 3D joint back-projection along camera rays to anthropometrically scaled distances; (d) segment CoM from stature/sex-specific de Leva tables; (e) temporal fusion with ground-contact and ballistic-flight anchors + affine range calibration.
- Equations: segment CoM `c_s = p_prox_s + ρ_s(p_dist_s − p_prox_s)`; whole-body CoM `C = Σ_s m_s c_s / Σ_s m_s`; affine range calibration `(α,β) = argmin Σ_f w_f(α z̃_f + β − t_anchor_f)^2`.
- Evaluation metrics: 3D MAE (mm), absolute relative error (AbsRel %), per-axis MAE, jump-height MAE and correlation.
## Data sources named
- AthletePose3D: 8 athletes, ~1.3M synchronized multiview frames (paper's stated scale); test set 1,028 sequence-camera pairs, 235,183 frames. Modalities: mobile-phone monocular video, Halpe-26 2D pose, distilled Marigold depth, multiview 3D reference. Movements: running, track & field (jumps/throws), speed skating.
- Code: https://github.com/Abradshaw1/Muybridge (stated in paper). Data access: public download URL not confirmed in the paper — treat as request/restricted.
## Findings (numbers and facts, not vibes)
- Test-set 3D CoM MAE: running (4.4 m range) 187 mm, AbsRel 3.6%, X/Y/Z 44/33/166 mm; track & field (5.4 m) 185 mm, 2.3%, 94/39/117 mm; skating (10.1 m) 707 mm, 6.6%, 167/41/672 mm.
- Depth (Z) error dominates in all sports (e.g., 166 of running's 187 mm; 672 of skating's 707 mm).
- Flight-phase error is 1.5–2.3× contact-phase error.
- Jump height across 719 pairs: 62 mm MAE, r = 0.84, bias +12 mm.
- On-device (iPhone 15): pose 15.58 ms (63 FPS), depth 349.9 ms (2.86 Hz), full pipeline 946.3 MB, peak memory 1,185 MB, energy 638.4 mJ — sparse design is what makes mobile deployment feasible.
- Limitations (paper-adjacent): only 8 athletes; ground truth is markerless multiview (itself error-prone); one-time per-sequence affine calibration required; NFL contact-heavy movements (cuts, blocking, tackling) untested.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (injury/biomechanics): per-play CoM trajectory features (peak CoM acceleration, CoM displacement on contact, landing asymmetry) as injury-risk covariates — new capability, no GSE consumer yet except a future injury-analytics lane. The ledger's gating bars: contact-phase MAE ≤ 250 mm, flight ≤ 400 mm, test-retest ICC ≥ 0.80 across camera angles, downstream AUC gain ≥ 0.02.
- OTHER (computer vision): sparse-fusion template (dense only where needed + physics anchors) is portable to any broadcast-derived biomechanical feature work.
## Engine-actionable? (yes/no + one-line what)
No — conditional future-lane only: nothing here feeds the current prediction engine; build only if GSE commissions injury/props-risk modeling with a committed consumer and NFL validation clips.
