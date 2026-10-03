# docs/arxiv-program/research/2026-09-21/arxiv-deep/1101-projection-angles-of-projectiles-in-sports.md

## What it is (1-2 sentences)
Ledger of arXiv:2609.08249v1 (Tsuboi 2026, verdict REJECT). A qualitative classical-mechanics analysis of optimum projection angles in track-and-field throwing/jumping events (drag/lift perturbations, run-up effects) — no data, no ML, no mechanism connecting to fantasy or game prediction.

## Key metrics/methods (formulas where given, else "not specified")
- EOM: m·du/dt = −kqu − lqv, m·dv/dt = −kqv + lqu − mg; k=½ρACD, l=½ρACL; εD=k·q_i²/(mg), εL=l·q_i²/(mg).
- θopt perturbation (13): θopt = π/4 − α(√2/6 + (√2/4)r) + α²(1/9 + (1/6)r − (1/8)r²); lift-only exact cos θopt = (β + √(β²+8))/4.
- Run-up: q_i(θ) = V cosθ + √(w²−V²sin²θ); cubic 2γcos³ψ + (γ²+2−2ζ)cos²ψ + 2ζ − 1 = 0.
- Validation internal only: perturbation vs RK4 integration (Δt=10⁻³), accurate for εD, εL ≲ 0.5.

## Data sources named
None. Numerical validation against the author's own ODE integrations; cited experimental anchors: baseball batting launch angles ~25–30°, golf drives ~10°, shot put ~30–40° (Linthorne 2001), long jump takeoff ~20–30° (Linthorne et al. 2005). No code/data released.

## Findings (numbers and facts, not vibes)
- Drag-only: θopt → ~35° at α≈1.0 (linearized) vs ~41° under quadratic drag; linearized model overestimates drag effect ~2.6× in initial slope.
- Lift-only: θopt → 0° at β=1.0; lift's first-order effect ~1.5× drag's (linearized), ~3.9× under quadratic law.
- Run-up model predicts shot put 30–35° and long jump 20–25°, matching cited literature.
- Replaced by ledger 1309 (replacement paper 2603.21163, ADAPT) per the file's rejection gate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none applicable — track-and-field biomechanics with no GSE lane overlap; a punt/kickoff trajectory stretch application is explicitly unsupported by the file (football punts involve tumbling aerodynamics outside the point-mass model).

## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict; no prediction, fantasy, or coaching application exists for GSE.
