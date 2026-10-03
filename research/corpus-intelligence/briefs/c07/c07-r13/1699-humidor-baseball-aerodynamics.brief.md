# arxiv-program/research/2026-09-21/arxiv-deep/1699-humidor-baseball-aerodynamics.md
## What it is (1-2 sentences)
A physics paper (Meyer & Bohn, arXiv:0712.0380) combining a controlled humidity experiment on 15 baseballs with drag/lift trajectory simulations and a Coors Field before/after-humidor observational comparison vs NL baseline. Verdict: ADAPT — the trajectory-physics framework and the before-after-vs-league venue-effect design port to NFL altitude/weather kicking models, but all measured coefficients are baseball-specific.
## Key metrics/methods (formulas where given, else "not specified")
- Flight ODE: v̇ = −g + (D+L)/m (Eq. 9); Drag D = −½ρ C_D A v² v̂; Lift L = −½ρ C_L A v² (v̂×ω̂_b); Reynolds ℛ = vd/ν.
- C_D(ℛ) = a + b·tanh((ℛ−ℛ_d)/Δ_d) + c·tanh((ℛ_u−ℛ)/Δ_u) (double-tanh, 7 params, 2 constraints); C_L = 1.5S for S<0.1, = 0.09+0.6S for S>0.1, S = rω_b/v.
- Fractional-acceleration decomposition: Δa_L/a_L^s = ΔC_L/C_L^s + ΔA/A^s − Δm/m^s = 3Δd/d^s − Δm/m^s (Eqs. 11–12); drag analogue Eq. 14.
- Denver atmosphere: ρ = 0.91809 kg/m³ (vs 1.0793 sea level) at 70°F; ν = 2.095×10⁻⁵ m²/s (vs 1.8263×10⁻⁵).
- Scenarios simulated: curveball break (72–88 mph, release 6.25 ft / 53.5 ft) and batted-ball range (35–45 m/s exit at 24.3°), 2D planar.
## Data sources named
Controlled experiment: 15 baseballs at 32%/56%/74% RH (saturated salt solutions, ±1% RH), ~70°F; mass ±0.1 g, diameter ±0.013 in, 5 orientations, weekly. Observational: Coors Field team stats 7 seasons before vs 5 after humidor vs NL averages (Baseball-Reference, InsideTheBook): ERA, HR/team-game, runs/team-game, avg fly-ball distance. Aerodynamic literature: Frohlich, Achenbach, Sawicki–Hubbard–Stronge, Nathan et al.; restitution via Kagan. No code/data release.
## Findings (numbers and facts, not vibes)
- Humidity response: diameter +0.012%/RH → +0.24% for 30%→50% RH; mass +0.08%/RH → +1.6%; ball density +0.9%. Smaller than MLB rulebook allowance.
- Aerodynamics alone: drier ball breaks MORE (Δy>0 at all speeds), max 0.25 in; humidified batted ball travels ~2 ft farther.
- Net with restitution (Kagan: −6 ft per 20% RH increase): humidified ball travels ~3–4 ft less overall.
- Coors BH→AH: HR/team-game 1.59→1.26 (−0.33), runs/team-game 6.94→5.87 (−1.07), avg fly-ball distance 323→318 ft (−5 ft), Rockies ERA 6.14→5.34 (−0.80); NL-wide changes ≈ 0.
- Grip channel: only +0.9% extra spin (Δω/ω^s) needed to overcome the aerodynamic break deficit — offered as the likely real mechanism.
- Limitations: 2D planar; seams ignored; Denver winds unmodeled; Table 1 explicitly non-causal (roster quality, 2001 strike-zone enlargement unmeasured); net ~4 ft effect small vs natural ball variation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the Eq. 9 trajectory framework (drag ∝ ρAv²/m) is the physics template for a Denver-altitude FG/punt kicking model — Denver ρ ≈ 0.92 vs 1.08 kg/m³ ≈ 15% less drag acceleration (GSE has no verified altitude coefficient yet); the BH-vs-AH-vs-league difference design is the venue-environment effect estimator (surface/roof/altitude changes).
- TRUST-SIGNAL: the authors' explicit non-causality of Table 1 is the honesty standard for GSE venue-effect claims.
## Engine-actionable? (yes/no + one-line what)
Yes — implement ρ-based effective-distance altitude adjustment for FG/punt models from nflverse + stadium/game-time temp/pressure, with log-loss ≥ 0.002 improvement on 2024–2025 holdout as the acceptance gate.
