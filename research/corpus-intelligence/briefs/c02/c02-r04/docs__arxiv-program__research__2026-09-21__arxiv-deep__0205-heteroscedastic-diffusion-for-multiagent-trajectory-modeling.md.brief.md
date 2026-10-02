# docs/arxiv-program/research/2026-09-21/arxiv-deep/0205-heteroscedastic-diffusion-for-multiagent-trajectory-modeling.md

## What it is (1-2 sentences)
TPAMI extension of the CVPR 2025 U2Diff diffusion trajectory forecaster, adding per-state heteroscedastic uncertainty (bi-variate noise model with NLL loss and Taylor-propagated variance) and a supervised RankNN that ranks K sampled scene modes by estimated error probability. Evaluated on NFL tracking data (Football-U from the NFL Big Data Bowl).

## Key metrics/methods (formulas where given, else "not specified")
- L_NLL = (1/2)·E[log(2π|ε^Σ_θ|^{1/2}) + (1/2)·ω^T(ε^Σ_θ)^{−1}ω], ω = ε_s − ε^μ_θ; L_total = L_simple + λ·L_NLL, λ ≈ 0.01 (stop-gradient on noise mean)
- Variance propagation: Var(X_{s−ζ}) ≈ (a_s·I + b_s·J_s)·Var(X_s)·(a_s·I + b_s·J_s)^T + b_s²·ε^Σ_θ(X_s); J_s diagonalized in practice
- RankNN trained to maximize differentiable Spearman ρ between per-mode error probabilities e^k and scene-average displacement error SADE
- Metrics: minADE20, minSADE20, minFDE20/minSFDE20, NLL, AccRate (% of ground-truth states inside the 95% ellipse, Mahalanobis), Spearman ρ(e, SADE)
- Reverse Gaussian Sampling via DDIM with skip interval ζ̄=10 → 50 steps reduce to 6 denoising steps

## Data sources named
- Basketball-U [35]: derived from NBA data; 93,490 train / 11,543 test sequences; 50 frames (8s), (x,y) for 10 players + ball
- Football-U [35]: NFL Big Data Bowl (nfl-football-ops/Big-Data-Bowl); 10,762 train / 2,624 test; 50 frames, (x,y) for 22 players + ball
- Soccer-U [35]: SoccerTrack (AtomScott/SportsLabKit); 9,882 train / 2,448 test
- NBA SportVU forecasting [74]: LED's [25] splits; 30 frames (6s); 2s observe → 4s forecast

## Findings (numbers and facts, not vibes)
- Football-U completion: UniTraj minADE20 3.55 → U2Diffine 2.38 (≈33% improvement); minSADE20 4.03 → 2.35 [OTHER]
- Calibration: AccRate@95% on Football-U 95.1% (U2Diffine) vs 93.8% (U2Diff); best-mode 96.7% [OTHER]
- RankNN median Spearman ρ between error probability e and SADE: 0.61 Football-U, 0.79 Soccer-U, 0.51 NBA; 0.55–0.79 range across datasets [OTHER]
- e-ranked Top-1 NBA minSADE: 2.01 → 1.81 (~10% reduction vs random Top-1) [OTHER]
- Cost: U2Diffine (diagonal-Jacobian variance propagation) ~4× sampling cost vs U2Diff — 59ms vs 14ms per mode on Football-U (RTX A6000, batch 128 × 20 modes); displacement gains marginal, gain is calibration [OTHER]
- NBA forecasting scene-level metrics SOTA: minSADE20 1.47 vs LED/MART/MoFlow 1.52–1.63 (>3% better), despite i.i.d. sampling [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — paper is about trajectory-forecasting methodology, not behavior/coaching/line play; no findings map to the five football-substance tags
- INFERENCE: per-mode error probabilities + uncertainty ellipses could in principle gate how much the engine trusts a forecasted player path (a calibration/trust input), but this is not a stated finding

## Engine-actionable? (yes/no + one-line what)
yes — retrofit the bi-variate NLL head + diagonal-Jacobian variance propagation + RankNN mode ranking onto GSE's tracking-trajectory forecaster; ship U2Diff (14ms/mode) live, use ranked Top-1 for public "expected path" output and e-weighted confidence in stake sizing
