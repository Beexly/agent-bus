# arxiv-program/research/2026-09-21/arxiv-deep/1579-projectile-motion-quadratic-drag-wind.md
## What it is (1-2 sentences)
Projectile motion in a medium with quadratic drag at constant horizontal wind (arXiv:2206.02397v4, Chudinov 2022). Derives closed-form elementary-function formulas (arctan/arcsin/ln) for wind-perturbed projectile trajectories by working in the wind-relative frame and approximating the transcendental hodograph function — validated against RK4 numerical integration with ≤1% max deviation.
## Key metrics/methods (formulas where given, else "not specified")
- Drag: R=mgkV², k=1/V_term²; wind-relative frame u⃗=V⃗−w⃗ reduces to no-wind form; hodograph V(θ)=V0cosθ0/[cosθ·√(1+kV0²cos²θ0(f(θ0)−f(θ)))], f(θ)=sinθ/cos²θ+ln tan(θ/2+π/4); wind quadratures (8) add explicit −(w/g)∫u/cosφ dφ drift term; f_a(φ)=α1 tanφ ± α2 tan²φ fit; final trajectory formulas (10) in three φ-intervals.
- Tested parameters: golf V0=40 m/s, w=±10 m/s; tennis w=+10/−19.75 m/s (at −19.75 the ball returns to the throw point); shuttlecock w=±3 m/s; k spanning 0.000971→0.022 (22× range).
## Data sources named
No empirical dataset — validation against the author's own 4th-order Runge-Kutta integration.
## Findings (numbers and facts, not vibes)
- "The relative maximum deviation of the analytical value (10) from the numerical value (RK4) at any point of the trajectory does not exceed 1%."
- Limitations: constant horizontal wind only (no gusts/swirl/vertical component, no bowl shielding); no Magnus/lift; same-elevation impact; football V_term not estimated in the paper.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: analytic wind adjustment for punts/field goals — runs in microseconds, suitable for live recomputation as wind updates arrive.
- QB-BEHAVIOR: (INFERENCE) the wind-relative-frame transformation could inform deep-pass trajectory modeling, though Magnus absence limits it.
- COACHING: (INFERENCE) per-stadium wind-transfer-function estimates from punt residuals → coaching decisions on FG range and punting direction (the file's own improvement proposal).
## Engine-actionable? (yes/no + one-line what)
Yes — implement formulas (10) as wind-adjusted expected-distance deltas for punts/FG as features in kick models; ADOPT if wind-adjusted model reduces windy-game punt RMSE by ≥1.5 yards vs punter-mean with fitted V_term in the physically sane 20–40 m/s range.
