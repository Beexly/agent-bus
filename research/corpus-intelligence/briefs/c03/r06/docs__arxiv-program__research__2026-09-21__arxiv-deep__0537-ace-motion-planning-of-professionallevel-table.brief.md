# docs/arxiv-program/research/2026-09-21/arxiv-deep/0537-ace-motion-planning-of-professionallevel-table.md

## What it is (1-2 sentences)
Deep-read ledger of arXiv:2607.06989v2 (Torrente et al., Sony AI 2026) on generating ITTF-legal elite table-tennis serves with an 8-DoF robot arm via motion primitives, minimum-jerk MPC, and HEBO Bayesian optimization. Verdict: REJECT — robotics motion-planning paper; "impressive, irrelevant" for GSE prediction.

## Key metrics/methods (formulas where given, else "not specified")
- Parameter vector (Eq. 1): xi_s = (u_0, u-dot_0, u-double-dot_0, X_0, tau, p_tau, n_tau, v_tau, tau_f, u_{tau_f}).
- Minimum-jerk program (Eq. 2): min_z 1/2 j_z^T j_z + lambda_p eps_p + lambda_n eps_n + lambda_v eps_v subject to joint constraints and tolerances Delta p_tau=5 mm, Delta phi_tau=0.5 degrees, Delta v=0.01 m/s / 0.01 relative; slack weights lambda_p=2 m^-1, lambda_n=1, lambda_v=0.2 (m/s)^-1.
- Serve reward (Eq. 3): F = r_pos + r_vel + r_top/back + r_side + r_height + s_leg; genome ≤10 dims, population 20, 100 iterations, ~1.5 min/serve.
- Spin-dissimilarity serve selection (cluster by spin, pick least-used from a different cluster than previous serve) + statistical pruning of serves that concede rally points.

## Data sources named
- 1,243 professional-player serves as comparison data (Apr 2025–Apr 2026, Japanese league incl. Paris 2024 silver medalist Miu Hirano). Baseline stat from Gómez et al. 2017: elite points-won-while-serving ~52.78% (men) / 53.28% (women). No code or data repository stated.

## Findings (numbers and facts, not vibes)
- Robot serve point-win 95% Wilson CI rose from [40.8–55.3]% (Apr 2025) to [51.5–58.7]% (Apr 2026 vs Miu Hirano) — comparable to elite human 52.78%/53.28% serve-point baselines.
- Ace rate: 11% (Apr 2025) → 21% (Mar 2026) → 20% (Apr 2026).
- Spin/velocity: up to 550 rad/s spin, 6.7 m/s ball speed; from Feb 2026 robot spin exceeded professional players'.
- Task-specific generation (real hardware): topspin+velocity 263.4±70.0 rad/s, 4.4±1.1 m/s; backspin −131.8±176.9 rad/s; aiming error 299±313 mm real (166±285 sim); sidespin high variance ±255 rad/s both directions.
- Sim-to-real gap: only 12–15 of 25 trained serves valid on hardware per task (48–60% transfer).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Elite serve-point win base rates (52.78%/53.28%): OTHER (sport-specific base rate, no NFL application per the ledger).
- HEBO Bayesian optimizer as generic tuning tooling: OTHER (duplicates GPyOpt/Ax/Optuna, adds nothing over existing libraries).
- Selection bias in "competition library" metrics (pruning of losing serves): TRUST-SIGNAL (ledger's adversarial note on metric validity).

## Engine-actionable? (yes/no + one-line what)
No — REJECT; no predictive model, no sports data usable by GSE, no transferable statistical method.
