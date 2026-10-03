# docs/arxiv-program/research/2026-09-21/arxiv-deep/0583-athlete-rating-in-multicompetitor-games-with.md
## What it is (1-2 sentences)
Bayesian dynamic linear model for time-varying athlete/team strength on scored outcomes, with a learned monotone I-spline transformation of scores (Ramsay 1988) that replaces hand-capping of blowouts — fit in two stages (MAP for transform + innovation variance, then fast Kalman filter for abilities). Head-to-head variant applies directly to NFL margins.

## Key metrics/methods (formulas where given, else "not specified")
- DLM: observation p(y_t|θ_t,σ²) = N(y_t|θ_t,σ²); innovation p(θ_{t+1}|θ_t,σ²,w) = N(θ_{t+1}|θ_t,σ²w) (non-mean-reverting random walk, variance capped)
- Transform: τ_λ^MS(y) = λ_0 + Σ_b λ_b I_b(y|d,k), λ_b ≥ 0 (degree-3 I-splines, 3 interior knots at 25th/50th/75th percentiles); Jacobian Σ_b λ_b M_b(y) included in the density
- Game-centering: p(ỹ_t|θ_t,σ²) = N(ỹ_t|X̄_tθ_t,σ²I), H_k = I_k − 1_k1_k^T (multi-competitor); head-to-head variant p(τ_λ(z_t)|θ_t) = N(τ_λ(z_t)|Z_tθ_t,σ²I) on score differences with Z_t (1/−1 design)
- Kalman updates: V_t = ((V_{t−1}+wI)^{−1}+X̄_t^T X̄_t)^{−1}; m_t = V_t((V_{t−1}+wI)^{−1}m_{t−1}+X̄_t^T ψ_t); plus Inv-Gamma sufficient stats a_t, b_t; RTS smoother given
- Fitting: Stage 1 MAP (Nelder-Mead/L-BFGS) or MCMC (Stan) for (w,λ) on first 2/3 periods; Stage 2 Kalman with (ŵ,λ̂) fixed
- Priors: θ_1 ~ N(0,σ²v_0 I); σ² ~ Inv-Gamma(0.1,0.1); w ~ Half-Normal(1)
- Metric: game-size-weighted Spearman ρ = Σ(n_{tg}−1)ρ_{gt}/Σ(n_{tg}−1)

## Data sources named
Proprietary USOPC data ~2004–2019 (not public): Biathlon 703 athletes/31 periods; Biathlon Relay 30 teams; Diving 459 athletes/218 events; Fencing 489 athletes/5,806 bouts; Rugby sevens 90 teams/71 periods/6,639 games. Simulation: p=100, T=20, Yeo-Johnson transforms, 50 replicates. Code: github.com/jche/dlmt (R package).

## Findings (numbers and facts, not vibes)
- Weighted Spearman (test): Biathlon LM-T .64 vs LM .61 vs ROL .61; Biathlon Relay .77 vs .75 vs .75; Diving .64 vs .62 vs .61 — learned transform consistently helps.
- Winner accuracy: Fencing LM-T .70 vs LM .67 vs Glicko .68 (1,785 bouts); Rugby LM-T .71 vs LM .72 vs Glicko .70 (2,503 games) — rugby learned ~identity transform, so no gain (paper's own honesty on when the method adds nothing).
- Posterior (√w, σ on transformed scale): Biathlon (0.28, 98.5), Relay (0.22, 71.6), Diving (0.40, 49.7), Fencing (0.06, 3.2), Rugby (0.18, 14.5) — diving most skill-driven, fencing most chance-driven.
- Fit cost (biathlon, ~6k obs): full MCMC ~8h vs Nelder-Mead 30 min vs L-BFGS <1 min; MAP ≈ MCMC.
- Simulation: λ recovery within 0.01 of truth even with 2 ten-player games/period; w underestimated with few games (conservative); σ inflated with few games.
- Limitations (from file): constant σ² across athletes (heteroskedastic extension future work); mild snooping in knot/period choices; small test sets (18 biathlon events), no significance tests; transform-to-normality fails for low-scoring sports; game-centering is multi-competitor-specific — NFL uses the Z_t score-difference variant.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: learned blowout-shrinking transform for NFL margin-of-victory / EPA-differential team-strength tracking — replaces arbitrary caps (Harville 2003 style); the learned transform shape itself is evidence about NFL margin information content.
- TRUST-SIGNAL: INFERENCE — weekly RTS-smoothed strengths with posterior intervals give an uncertainty-aware power rating for pick-confidence inputs.
- COACHING: INFERENCE — the heteroskedastic improvement experiment (team-specific σ²_u) targets exactly where the market is softest: high-variance teams (young/backup QBs).

## Engine-actionable? (yes/no + one-line what)
Yes — head-to-head variant on nflverse 2009–2025 weekly margins: learn monotone I-spline transform + w via L-BFGS MAP on 2009–2019, weekly Kalman θ_t with explicit HFA/rest covariates; adopt as a GSE strength feature if 2020–2024 pre-game log-loss beats the no-transform DLM by ≥1% and Elo by ≥0.5% with visibly non-identity (|margin|>21 tail shrinkage); heteroskedastic σ²_u per team as improvement experiment.
