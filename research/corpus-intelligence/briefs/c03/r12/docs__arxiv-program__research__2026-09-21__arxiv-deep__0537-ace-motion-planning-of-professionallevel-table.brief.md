# docs/arxiv-program/research/2026-09-21/arxiv-deep/0537-ace-motion-planning-of-professionallevel-table.md
## What it is (1-2 sentences)
A full-paper research ledger (arXiv:2607.06989v2, Sony AI, 2026; entire paper §§I–V read) on a robot arm achieving professional-level table-tennis serves via motion primitives, parametrized MPC motion planning, and HEBO Bayesian optimization; verdict: REJECT — robotics systems paper, no predictive model, no GSE-usable data or method.
## Key metrics/methods (formulas where given, else "not specified")
Serve reward: F = r_pos + r_vel + r_top/back + r_side + r_height + s_leg. Minimum-jerk optimization over n_l=32 cubic segments with slack tolerances (Δp_τ=5 mm, Δφ_τ=0.5°, Δv=0.01 m/s or 0.01 relative); slack weights λ̂_p=2 m⁻¹, λ̂_n=1, λ̂_v=0.2 (m/s)⁻¹; solved with KNITRO (~10–20 ms). HEBO (Heteroscedastic and Evolutionary Bayesian Optimization, Cowen-Rivers et al. 2022) over ≤10 normalized decision variables with sequential legality checks and penalties (non-racket contact −5 … rest failure −0.1; infeasible motion −10). Spin-dissimilarity online serve selection; statistical pruning of serves that concede rally points.
## Data sources named
Overhead RGB cameras for ball triangulation (±3 mm); 1,243 professional-player serves (Apr 2025–Apr 2026) as comparison data; umpire-officiated tournaments vs elite/professional Japanese-league players incl. Paris 2024 silver medalist Miu Hirano; Gómez et al. 2017 elite serve-point baselines (52.78% men / 53.28% women). No code/data repo stated.
## Findings (numbers and facts, not vibes)
- Robot serve point-win 95% Wilson CI rose from [40.8–55.3]% (Apr 2025) to [51.5–58.7]% (Apr 2026, vs Miu Hirano) — comparable to elite human baselines (52.78%/53.28%).
- Ace rate: 11% (Apr 2025) → 21% (Mar 2026) → 20% (Apr 2026).
- Spin/velocity: up to 550 rad/s spin, 6.7 m/s ball speed; from Feb 2026 robot serve spin exceeded professional players'. Real hardware tasks: topspin+velocity 263.4±70.0 rad/s, 4.4±1.1 m/s; aiming error 299±313 mm (real) vs 166±285 (sim).
- Sim-to-real gap: only 12–15 of 25 trained serves per task transferred zero-shot (48–60%).
- The system was a key component in the first robot wins in fair Best-of-3 matches vs professional table tennis players (Dürr et al., Nature 652, 2026).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Serve-point-win trajectory (40.8–55.3% → 51.5–58.7%) via iterative BO over serve parameters: OTHER — a robotics systems achievement, not a sports-prediction method.
- HEBO optimizer: OTHER — generic hyperparameter-tuning tooling, interchangeable with existing BO libraries for engine tuning; adds nothing novel.
- Elite human serve-point baselines (52.78%/53.28%): OTHER — sport-specific base rate with no NFL application.
- No QB-BEHAVIOR / COACHING / OL / TRUST-SIGNAL / SCHEME connections.
## Engine-actionable? (yes/no + one-line what)
No — "impressive, irrelevant": no game dataset, no estimator, no market application, no calibration or ranking advance for GSE.
