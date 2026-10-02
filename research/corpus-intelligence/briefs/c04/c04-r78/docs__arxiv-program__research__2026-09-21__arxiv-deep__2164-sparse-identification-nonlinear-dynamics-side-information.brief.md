# docs/arxiv-program/research/2026-09-21/arxiv-deep/2164-sparse-identification-nonlinear-dynamics-side-information.md
## What it is (1-2 sentences)
SINDy-SI adds domain side information (equilibria, monotonicity, symmetries, invariant sets) as hard Sum-of-Squares constraints inside the sparse nonlinear-dynamics discovery loop, yielding models that are simultaneously sparse, accurate, and guaranteed law-abiding. The paper shows it beats both plain SINDy and unconstrained SOS-constrained fitting in scarce-data regimes by 2+ orders of magnitude.

## Key metrics/methods (formulas where given, else "not specified")
- IVP ẋ=f(x), x(0)=x₀; vector-field targets from finite differences f(s(t_i)) ≈ (s(t_i)−s(t_{i−1}))/(t_i−t_{i−1})
- Parameterization f̂(x)=W^⊤φ(x) (monomial library); sparse objective min ‖Y−ΦW‖²_F + ξ‖W‖₀; thresholded refit
- Side-information-constrained regression: min_W ‖Y−ΦW‖²_F subject to f̂(x) ∈ P_d ∩ {S_i}, lifted to a convex SDP via Schur complement
- SOS encoding example: {−∂f̂_i/∂x_i(x) − z_i(x)g(x)} ∈ Σ with SOS multipliers z_i and bounding ball g(x)=R²−‖x−c₀‖² (Putinar's Positivstellensatz)
- CV cost J_k = Σ_{i,j≠k} ‖f(s(t_i,x_j))−f̂(s(t_i,x_j))‖₂ / ((m−1)r) — leave-one-trajectory-out
- Iteration: solve constrained SDP → threshold small coefficients → re-solve with ℓ₁-relaxation γ (−γ ≤ ξ₂w_ij ≤ γ)

## Data sources named
- Lorenz system (σ=10, ρ=28, β=8/3): m=100 trajectories × r=40 timestamps in [0,10], three noise scenarios; fitted degree-5 polynomial, h=56 monomials (h > r = 40)
- Single-Machine Infinite-Bus power system (non-polynomial sin dynamics): m=100 × r=20 in [0,1]; fitted degree-7 polynomial, h=36 monomials (h > r = 20)
- Noise injected on states and vector-field outputs; synthetic MATLAB (ODE45) data
- Tooling: SOSTOOLS (MATLAB) + commercial MOSEK SDP solver; no public code from authors

## Findings (numbers and facts, not vibes)
- Lorenz average J_k — low noise: OLS 5.63×10⁴, SINDy 3.19×10⁶, SI-only 822.42, SINDy-SI 2.0432; medium noise: OLS 5.59×10⁵, SINDy 1.28×10⁶, SI-only 1.89×10⁴, SINDy-SI 1.66×10³; high noise: OLS 5.13×10⁶, SINDy 1.49×10⁷, SI-only 2.16×10⁵, SINDy-SI 1.15×10⁵. Side information alone beats sparse-only by ~2 orders of magnitude; the combination wins everywhere and the gap widens with noise.
- SMIB: SINDy-SI recovered the 7th-order Taylor expansion of the true sin dynamics emergently (f̂₂(x)=0.1790x₁⁷−1.944x₁⁵+34.09x₁³−203.8538x₁−1.415x₂+47.171 vs true 0.0404x₁⁷−1.6987x₁⁵+33.97x₁³−203.841x₁−1.415x₂+47.1698) without being told the expansion existed.
- Threshold λ was handpicked (0.1 Lorenz, 1e-2 SMIB), not tuned per method — comparisons may flatter SINDy-SI.
- SOS/SDP scales badly with state dimension and polynomial degree; the paper stays at n=2,3 states.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Sports side information encodable as hard constraints — win-prob dynamics confined to [0,1]; tied game at t=0 ⟹ zero drift; ∂(win-prob)/∂(score_diff) ≥ 0; ∂/∂(opponent_timeouts) ≤ 0; momentum mean reversion. A discovered equation cannot violate the law (unlike PINN-style soft penalties) — a "laws of the game" artifact that can veto physically absurd engine outputs (e.g., win prob > 1 after calibration transforms).
- TRUST-SIGNAL: SOS certificate verifies constraints exactly (not by sampling) — an audit-grade guarantee for the engine's sanity layer.
- INFERENCE: pairs with short-season NFL data — the scarce h>r regime where this method wins is exactly GSE's data regime.

## Engine-actionable? (yes/no + one-line what)
Yes — reimplement the constrained-discovery loop in Python (cvxpy + open SDP solver, PySINDy monomial library) to fit guaranteed-sane win-prob dynamics from nflverse game-state trajectories with sports side information as SOS hard constraints; ~5–8 engineer-days with a pre-registered accept/reject gate (≥1 order-of-magnitude J_k improvement, BFR ≥ 60% on 2025 holdout).
