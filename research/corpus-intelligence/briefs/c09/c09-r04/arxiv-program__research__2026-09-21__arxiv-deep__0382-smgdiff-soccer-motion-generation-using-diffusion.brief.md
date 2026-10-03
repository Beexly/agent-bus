# arxiv-program/research/2026-09-21/arxiv-deep/0382-smgdiff-soccer-motion-generation-using-diffusion.md
## What it is (1-2 sentences)
SMGDiff: a two-stage diffusion system for real-time, user-controllable soccer avatar motion synthesis (keyboard-driven game/VR character animation), plus the new Soccer-X mocap dataset; Motif verdict REJECT — a character-animation product with no transfer path to GSE's prediction engine.
## Key metrics/methods (formulas where given, else "not specified")
- Stage 1: single-step diffusion trajectory generator (transformer encoder, diffusion timestep=1) mapping (skill label, target point, past trajectory) + Gaussian noise → future trajectory; Heuristic Future Trajectory Extension (HFTE) for smoothness
- Stage 2: transformer autoregressive diffusion (CAMDM-style) predicting x̂_0^F with only 8 denoising steps; Loss: L = L_simple + λ_pos L_pos + λ_vel L_vel + λ_foot L_foot (joint-position, velocity, foot-contact auxiliaries)
- Contact guidance at inference (last 2 of 8 steps): ball-contact detection via acceleration threshold τ_a = 2 m/s²; contact loss L = Σ_i d^i·I(d^i>τ_d)·ĉ_b^i/(I(d^i>τ_d)+δ), τ_d = 0.1 m; DSG-style guidance with w_r = 0.5
- Ball control weight: w_b = 1 − ‖b_p^{xy} − h_p^{xy}‖/r, r = 2 m
- Runtime: 30 Hz, 12 ms inference at 8 steps (i7-10700K + RTX 3080 Ti)
- Metrics: FID, foot-sliding distance, mean per-joint acceleration, diversity, trajectory error, orientation error, skill accuracy (all motion-quality metrics for synthetic avatars)
## Data sources named
Soccer-X (new, announced for release, no URL in text): 16 OptiTrack Prime x13 cameras, 240 fps, 30 skilled players; 1.08M frames, 2,398 sequences, 6 categories (dribble, stand, off-the-ball move, trick, shoot, celebrate); SMPL 24-joint format
## Findings (numbers and facts, not vibes)
- SMGDiff beats LMP, MANN-DP, CM baselines on all motion-quality metrics: FID 0.1813 (vs 0.3541/0.3593/0.2494), foot sliding 0.8543, skill accuracy 93.3% (vs 73.3%/69.1%/52.9%)
- 8 denoising steps → 12 ms; 32 steps → 52 ms (Table 3); guidance in last-2-steps best (Table 4)
- Reader's limitations: train/test 9:1 with no player-disjointness stated (likely memorizes performer styles); FID scale inconsistent between Table 1 (0.18–0.36) and Tables 2–4 (0.34–0.40); no physics (pure kinematics); single player only (no multi-agent interaction); dataset not yet released at write time
- Method family (diffusion for motion) already covered in the program by papers 0380 and 2503.18589 on real tracking data — no new capability for GSE
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Motion-synthesis methodology — REJECT for GSE; no connection to prediction products
## Engine-actionable? (yes/no + one-line what)
No — motion-synthesis for avatar animation has no transfer path to prediction products; the trajectory-diffusion family is already absorbed via papers 0380 and 2503.18589
