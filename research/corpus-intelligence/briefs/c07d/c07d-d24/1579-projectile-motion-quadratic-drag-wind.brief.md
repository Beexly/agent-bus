# arxiv-program/research/2026-09-21/arxiv-deep/1579-projectile-motion-quadratic-drag-wind.md
## What it is (1-2 sentences)
Chudinov (2022), arXiv:2206.02397v4: a physics paper deriving closed-form elementary-function approximations (no numerical integration) for projectile motion under quadratic drag with a constant horizontal wind, validated against the author's own RK4 integration on badminton/tennis/golf parameter sets. The brief recommends ADAPT for GSE as a fast analytic wind adjustment for punts/field goals.

## Key metrics/methods (formulas where given, else "not specified")
- Drag model: R = mgkV², k = 1/V_term².
- No-wind system: dV/dt = −g sinθ − gkV²; dθ/dt = −g cosθ/V; dx/dt = V cosθ; dy/dt = V sinθ (Eq. 1).
- Hodograph: V(θ) = V0 cosθ0 / [cosθ · sqrt(1 + kV0²cos²θ0 (f(θ0) − f(θ)))], f(θ) = sinθ/cos²θ + ln tan(θ/2 + π/4) (Eq. 2).
- Quadratures: x = x0 − (1/g)∫V²dθ; y = y0 − (1/g)∫V²tanθ dθ; t = t0 − (1/g)∫V/(cosθ) dθ (Eq. 3).
- Wind: R⃗ = −c|V⃗−w⃗|(V⃗−w⃗) (Eq. 4), c = gk; in wind-relative frame u⃗ = V⃗ − w⃗ the problem reduces to no-wind form (Eqs. 5–6).
- Approximation: f(φ) fitted by f_a(φ) = α1 tanφ ± α2 tan²φ with α1 = 2cotφ0 ln tan(φ0/2 + π/4); α2 = 1/sinφ0 − (α1/2)cotφ0 (Eq. 9); trajectory split into three φ-intervals integrated in elementary functions (arctan, arcsin, ln) — Eq. 10.
- Validation metric: relative max deviation at any trajectory point; stated bound ≤ 1% vs RK4.

## Data sources named
No empirical dataset. Validation vs author's own 4th-order Runge-Kutta integration. Example parameter sets (Table 1): badminton shuttlecock (V_term=6.7 m/s, k=0.022 s²/m², V0=60), tennis (V_term=22, k=0.002, V0=50), golf (V_term=32.09, k=0.000971, V0=40 and 60); winds tested: ±10 m/s (golf), −20/−30 m/s (golf), ±3 m/s (shuttle), +10/−19.75 m/s (tennis).

## Findings (numbers and facts, not vibes)
- Relative maximum deviation of analytical formulas (10) from numerical (RK4) at any trajectory point does not exceed 1%.
- Golf example V0=40 m/s, θ0=30°: +10 m/s tailwind extends range, −10 m/s headwind shortens it (Fig. 2).
- Tennis at w=−19.75 m/s: the ball returns to the throw point (Fig. 6).
- Shuttlecock (k=0.022, highest drag) shows greatest trajectory asymmetry and approaches a vertical asymptote.
- k spans a 22× range across test cases (0.000971 → 0.022); wind range tested −30 to +10 m/s.
- Quadratic drag assumed valid for 1×10³ < Re < 2×10⁵; k = 1/V_term² undefined at k=0 (division by zero), k=10⁻¹² recovers parabolic theory.
- Assumptions: constant horizontal wind; no Magnus/lift forces; launch and landing at same elevation; flat earth.
- Football-specific: no V_term given for a football; brief proposes estimating V_term ≈ 28–30 m/s from literature as an INFERENCE/calibration start.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (weather physics → kicking/punts totals): provides the closed-form wind-drift term the engine currently lacks — GSE's wind handling is a catalog metric, not a trajectory correction; this gives a microsecond analytic range/headwind-tailwind adjustment for FG and punt distance models. Serves the totals lane and special-teams intake.
- OTHER (stadium geometry): the brief's improvement experiment proposes fitting per-stadium shielding factors from punt residuals — a wind-transfer-function per NFL stadium — which directly serves the coaching/game-planning lane (weather-aware game plans) as proprietary data.
- UNCERTAIN: whether constant-horizontal-wind holds inside NFL bowls; the brief flags gusts, swirl, vertical components, and bowl shielding as unmodeled — the 1.5-yard RMSE acceptance gate on nflverse 2019–2025 punts is the decision test.

## Engine-actionable? (yes/no + one-line what)
Yes — implement Eq. 10 in weather/wind_adjust.py as a per-kick wind-drift range delta feature for the FG-make logistic and punt-distance models; ADOPT if it cuts windy-game punt RMSE ≥ 1.5 yards vs punter-mean baseline on 2022–2025 holdout with fitted V_term in 20–40 m/s.
