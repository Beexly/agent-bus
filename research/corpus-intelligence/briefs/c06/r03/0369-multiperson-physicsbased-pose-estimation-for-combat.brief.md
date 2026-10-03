# arxiv-deep/0369-multiperson-physicsbased-pose-estimation-for-combat.md
## What it is (1-2 sentences)
Multi-person 3D pose-estimation pipeline (arXiv:2504.08175v3, Feiz et al. 2025) for combat sports: four stages (multi-view tracking → weighted triangulation → SMPL kinematic optimization → multi-person physics-based iLQR trajectory optimization under contact dynamics) producing physically plausible motion with correct contact and no inter-body penetration. Verdict in file: ADAPT — the iLQR collision/contact-penalty refinement is transferable to broadcast-video player motion reconstruction, but GSE has no calibrated multi-camera tracking source, so it's a future-capability idea, not an immediate build.
## Key metrics/methods (formulas where given, else "not specified")
- Weighted triangulation: confidence-weighted linear system [μ_1(P_11−u_1 P_31); …] [x,y,z,1]^T = 0, μ_j = mean detection confidence of camera j (SVD solve).
- Kinematic objective: min_θ w_1 L_2D + w_2 L_3D + w_3 L_reg + w_4 L_smooth + w_5 L_GMM + w_6 L_Vposer, weights (0.001, 1.0, 0.01, 0.001, 0.0001, 0.0001); L_2D uses Geman-McClure robust ρ on 2D joints with confidence > 0.7.
- iLQR objective: min_u Σ_t w_1 L_reg + w_2 L_p + w_3 L_v + w_4 L_collision, weights (0.001, 10, 0.1, 20); L_collision = Σ φ(d_overlap) over colliding part pairs; Δu_t = K_t Δx_t + α k_t; body density 985 kg/m³; 69 joint-angle DOFs + 6-DOF root.
## Data sources named
New boxing dataset (20+ min multi-view elite sparring video, released, no ground truth); new supplementary dataset (two-person close interactions, up to 4 OpenCV-calibrated cameras aligned to a 24-camera OptiTrack ground-truth frame); benchmarks Campus, Shelf (PCP), CHI3D (127 sequences, SMPL ground truth), Hi4D (100 sequences, 20 pairs). Code: none stated; dataset via project page (URL not in extract).
## Findings (numbers and facts, not vibes)
- Supplementary (lower better): kinematics→dynamics — e_MPJPE 41.2 → 38.4; foot-height error 16.4 → 8.1; foot-planar-velocity error 2.2 → 0.3; smoothness 6.1 → 4.6 (physics halves foot error, kills foot sliding).
- PCP with 4/3/2 cameras: Triangulation 98.0/97.5/88.6; Kinematics 99.0/97.9/89.0; Dynamics 98.4/96.3/90.5 (dynamics slightly lower at 4 views, wins at 2).
- Multi-person physics on CHI3D: penetration 114.9 → 18.7; WA-MPJPE 117.3 → 86.4; W-MPJPE 174.5 → 156.4; PA-MPJPE 92.1 → 75.2 (mm).
- Shelf SOTA: avg PCP 98.6 (Actor1 99.8, Actor2 97.6, Actor3 98.6); Campus competitive (95.3–96.5 vs best baseline 97.4).
- Hi4D exception: penetration 67.2 vs MultiPhys 51.1 and EmbPose-MP 39.8 (worse under extreme interaction — coarse convex-hull collision geometry), though best ground-penetration (1.6) and skating (1.9).
- Limitations: physics metrics partly self-referential; OptiTrack MPJPE gain modest; four-stage + iLQR pipeline far from real-time; requires calibrated cameras (NFL broadcast cameras lack calibration); zero football footage — 2 bodies ≠ 22 players.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL — contact/penetration modeling transfers best to line-of-scrimmage play (pile-ups, OL/DL contact geometry) rather than open-field tracking; the iLQR collision-refinement stage could clean inter-player penetration in kinematic trajectories at the line.
- OTHER — future-method note for a multi-view NFL video reconstruction program, gated on acquiring synchronized multi-angle footage.
## Engine-actionable? (yes/no + one-line what)
No — no data source and no released code today; adopt the iLQR collision-refinement stage only if it beats kinematics-only baseline by the paper's margins (≥10% MPJPE, ≥50% foot-vxy reduction) on the released OptiTrack dataset, and only once multi-angle NFL footage exists.
