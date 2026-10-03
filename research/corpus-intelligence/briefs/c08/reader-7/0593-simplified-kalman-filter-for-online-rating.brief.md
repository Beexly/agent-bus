# docs/arxiv-program/research/2026-09-21/arxiv-deep/0593-simplified-kalman-filter-for-online-rating.md
## What it is (1-2 sentences)
Derives Elo, Glicko, and TrueSkill as special cases of one approximate-Gaussian-Kalman-filter online-rating template (vSKF vector-covariance, sSKF scalar, fSKF fixed-variance, SG pure stochastic gradient) that works for any skills-outcome model. Empirically shows Bayesian machinery adds ~nothing over plain Elo on noisy league data — the payoff is per-team uncertainty tracking and faster convergence in short seasons.

## Key metrics/methods (formulas where given, else "not specified")
- Template: z_t = x_t^T θ_t (home skills − away skills); dynamics θ_t = β_t θ_{t−1} + u_t ε_t; Gaussian projection P[·] minimizing KL (Prop. 1) after mode-finding via second-order Taylor: g = dℓ/dz, h = −d²ℓ/dz²
- vSKF updates: v̄_t ← β_t² v_{t−1} + ε_t 1; ω_t ← Σ_{m∈{I_t,J_t}} v̄_{t,m}; μ_t ← β_t μ_{t−1} + (v̄_t ⊙ x_t)·s g_t/(s² + h_t ω_t); v_t ← v̄_t ⊙ (1 − v̄_t ⊙ |x_t|·h_t/(s² + h_t ω_t))
- fSKF: μ_t ← β_t μ_{t−1} + v̄ x_t·s g_t/(s² + h_t 2F v̄); SG (Elo form): μ_t ← μ_{t−1} + K s x_t g_t
- (g,h) for Thurston (V(z)=N̄(z)/Φ(z), W(z)=V(z)(z+V(z))), Bradley–Terry (g = ln10(y_t − F_L(z)), h = (ln10)² F_L(z)F_L(−z), F_L = 1/(1+10^{−z})), Davidson (with κ, ŷ=y/2)
- Unification: Elo = SG under BT; TrueSkill = Thurston-vSKF variant (posterior variance shrinks slower); Glicko = BT-vSKF with per-player scale √(1+(ω−v̄)a/σ²), a = 3ln²10/π² ≈ 1.6
- Prop. 2 scale invariance: s non-identifiable — μ_t(s, s²v_0, s²ε) = s·μ_t(1, v_0, ε)
- HFA boost η inside L(z/s + η; y): binary η = log_10(f_1/f_0); ternary η = ½log_10(f_2/f_0), κ = f_1/√(f_0f_2)

## Data sources named
NHL 2005/06–2014/15 (M=30, T=1230 games/season), EPL 2009/10–2018/19 (M=20, T=380), NFL 2009/10–2018/19 (M=32, T=256); synthetic M=20, D=100 days, 5000 runs, with day-40 player "switch" adaptation test. No code stated; equations fully specified in text.

## Findings (numbers and facts, not vibes)
- Empirical log-scores (lower better): NFL (Davidson) vSKF 0.679 init / 0.640 final vs SG 0.678/0.641 vs entropy H=0.700 — Bayesian machinery ≈ plain Elo on NFL data. Fitted NFL params: (v_0, ε) = (0.02, 10^{−4}), SG K=0.015; η=0.06, κ=5.5×10^{−3}. EPL: vSKF 1.055/0.974 vs SG 1.052/0.976, H=1.061; (v_0,ε)=(0.04,10^{−7}), K=0.015, η=0.10, κ=0.67.
- Synthetic: KF best; vSKF quasi-identical to full KF; sSKF good at init, slow after the day-40 switch; at high observation noise vSKF ≈ SG (temporal model buys nothing); BT-on-Thurston model mismatch costs nothing predictively.
- The one qualitative vSKF win: EPL 2009/10 (Fig. 5) — vSKF means converge to final values in ~50 days vs ~200 days for SG (extreme teams).
- Limitations (from file): (v_0, ε, K) tuned in-sample on reporting seasons; NHL too noisy for any skill-tracking gain; NFL NFL-window of 128 games initialization ≈ half a season; no market/EPA baselines — entropy only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: per-team uncertainty vector v_t as a GSE feature — (a) widens/shrinks confidence on published picks, (b) reset v after QB change for fast re-convergence (the paper's day-40 switch protocol), (c) pick-confidence model input.
- OTHER: the "any skills-outcome model" template enables a margin-of-victory vSKF upgrade the paper never tests — binary Elo signal → information-rich per-game update.
- TRUST-SIGNAL: INFERENCE — faster convergence (50 vs 200 days analogue) matters disproportionately in a 17-game NFL season vs 380-game EPL; uncertainty vector is the honest-confidence input for the public edge sheet.

## Engine-actionable? (yes/no + one-line what)
Yes — implement vSKF (eqs. 44–49) under BT on nflverse 2018–2025 chronological with NFL params (s=1, v_0=0.02, ε=10^{−4}, β=1, η recomputed on 2015–2025); adopt if it beats SG-Elo log-score by ≥0.3% in the converged window OR reaches 90%-of-final ratings ≥2 games faster on average — the justification is convergence speed and per-team uncertainty, not raw accuracy.
