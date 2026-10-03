# arxiv-program/research/2026-09-21/arxiv-deep/1712-ball-bounce-restitution.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2202.03034 (2022), a physics paper deriving a two-parameter energy-conservation model of the coefficient of restitution ε of a gas-filled ball vs internal pressure, extended via the ideal gas law to a quantitative ε(T) relationship validated from −22°C to 80°C. Verdict ADAPT: gives GSE the physics core for cold-weather football pressure/bounce effects (the Deflategate mechanism), extending ledger 1699 (humidor) and 1711 (density altitude).
## Key metrics/methods (formulas where given, else "not specified")
- ε² = E_a/E_b = (h_a/h_b); ε² = (P_in − P_out + λ_1)/(P_in − P_out + λ_2), with λ_1 = fictitious pressure from rubber energy storage, λ_2 = λ + λ_1; temperature extension P_in = kT → ε(T) with Kelvin constants T_1 = P_out/k, T_2 = (P_out − λ)/k. χ² grid fits.
- Energy bookkeeping: stored energy = work compressing gas minus wall-area energy (E_stored ≈ P·ΔV − h·σ·ΔA ≈ (P/2)ΔV); energy lost ∝ ΔV (damped harmonic oscillator); ε velocity-independent by construction.
- Ideal gas law gives ~1 psi pressure drop per ~20°F temperature drop (compute exactly: ΔP/P = ΔT/T).
## Data sources named
Home experiments: basketball dropped from 2.05 m at 15 internal pressures (0–13 psi gauge, 3 trials each); tennis ball at 7 temperatures spanning 251–353 K (3 trials each); punctured-ball controls; literature data (Bridge play balls; Georgallas & Landry basketball/soccer/volleyball at 0.75 m and 1.5 m drops).
## Findings (numbers and facts, not vibes)
- Basketball ε: 0.407 (deflated) → 0.869 (13 psi gauge) — pressure dominates liveliness. (OTHER: ball physics / kicking)
- Tennis ball ε: 0.447 at −22°C → 0.813 at 80°C — temperature swings move ε by ~0.37 across the tested range. (OTHER: cold-weather ball effects)
- χ² fits: basketball χ² = 13.4 (13 dof; 90% threshold 19.8) at λ_1 = 0.80, λ_2 = 4.67; tennis temperature χ² = 3.3 (90% threshold 9.2) at T_1 = 237.3 K, T_2 = 177.3 K. Beats/adjoins ad-hoc power-law ε² = 1/(1+(P/P_0)^n) and G&L's model, notably at low pressure. (OTHER)
- Test velocity ~6 m/s vs up to 65 m/s in competitive tennis — small-deformation assumption breaks at elite impact speeds; no NFL football tested (prolate spheroid, laces). (TRUST-SIGNAL: basketball→football extrapolation needs empirical validation)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ε range 0.407→0.869 with pressure; 0.447→0.813 with temperature: OTHER (cold-weather kicking: colder ball = deader bounce = fewer touchbacks; onside-kick and fumble-recovery adjustments)
- ε(T) closed-form via ideal gas law: OTHER (Deflategate correction module — temperature → pressure drop → ε drop → touchback/fumble adjustments)
- 6 m/s test limit and no football shape tested: TRUST-SIGNAL (do not ship the ε(T) curve without the reproducible test: predicted Δε vs touchback-rate residuals, p < 0.05 on holdout)
## Engine-actionable? (yes/no + one-line what)
yes — add a ball_physics module converting game-day temperature to expected ball-pressure drop and Δε for kickoff/punt bounce and fumble adjustments, gated on the touchback-residual correlation test; keep the ideal-gas pressure correction unconditionally (non-negotiable physics).
