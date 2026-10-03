# arxiv-program/research/2026-09-21/arxiv-deep/1578-aerodynamic-analysis-world-cup-balls.md
## What it is (1-2 sentences)
Paper (arXiv:1710.02784): wind-tunnel-based aerodynamic analysis of FIFA World Cup balls (Teamgeist/Jabulani/Brazuca/Tango 12) — new 7-parameter C_D(v) fit, boundary-layer lift estimation, Runge-Kutta trajectory simulation — quantifying that altitude/temperature air-density variation changes ball flight by up to 23%, explaining the Jabulani's erratic behavior.
## Key metrics/methods (formulas where given, else "not specified")
- C_D(v)|_{Sp=0} = (a−b_min)/(1+exp[(v−v_c)/v_s]) + b_min + drag-rise term (Eq. 5); C_D(Re,Sp) = C_D|_{Sp=0} + b·Sp (Eq. 7).
- C_L^fit(Sp) = α Sp^β, (α,β) = (1.15, 0.83) at Re = 333,793 (Eq. 8); C_L(Re,Sp) heuristic interpolation (Eq. 9); C_L held-out check: predicted 0.14 vs empirical 0.15 at Sp=0.06.
- Air density: ρ = pM/RT (Eq. 10); p = p_0[1 − Lh/T_0]^(gM/RL) (Eq. 11).
- Flight ODE: d²r⃗/dt² = −g ĵ − (ρAv²/2m)[C_D v̂ − C_L(ŝ×v̂)] (Eq. 12); 5th-order Cash-Karp RK integration.
## Data sources named
Wind-tunnel drag data (Alam et al. [37], averaged over two seam orientations; Teamgeist from trajectory analysis [22]); Teamgeist lift measurements [27]; June–July min/max temps for Brasília (12°C/27°C), Johannesburg (3°C/18°C), La Paz [39]; no public dataset or code released.
## Findings (numbers and facts, not vibes)
- Fit parameters (Table 1): Tango12 (a=0.5452, v_c=12.86, v_s=1.304, b_min=0.1657, b_max=0.1953); Teamgeist (0.4927, 12.58, 1.071, 0.1440, 0.1540); Jabulani (0.4839, 18.69, 1.377, 0.1413, 0.1780); Brazuca (0.4740, 12.92, 1.000, 0.1657, 0.2112).
- Jabulani unpredictable region ≈ 15–24 m/s vs 10–17 m/s for others; Jabulani transition lift ≈ (24/17)² ≈ 2× the Brazuca's.
- Altitude (Brasília 1,200 m vs sea level, 25-m kick at 34 m/s): Brazuca 49.0 cm, Jabulani 82.0 cm difference at ball-out-of-play.
- Temperature: Brazuca 12°C vs 27°C → 16.6 cm; Jabulani 18°C vs 3°C → 24.5 cm. Air-density variation up to 23%.
- Coefficients are soccer-ball-specific; no wind in simulations; humidity ignored.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: air-density model (Eqs. 10–11) + ball-flight ODE template are directly adaptable to NFL field-goal/punt distance modeling — the Mile-High distance premium quantified with physics instead of "no verified coefficient" (soccer C_D values do NOT transfer to a tumbling football).
- COACHING: weather/kick-distance modifier per game (stadium altitude + game-time temp/pressure) is a totals/spread feature and a go-for-it decision input.
- QB-BEHAVIOR: INFERENCE — thinner air plausibly affects pass aerodynamics too, but the paper gives no football data; needs nflverse calibration.
## Engine-actionable? (yes/no + one-line what)
Yes — build `weather/ballflight.py`: ρ from Eqs. 10–11 with stadium altitude + game-time temp/pressure, calibrate on nflverse punt hang-time/distance, output per-game FG/punt distance modifiers; gate: ρ-adjusted FG model beats distance-only by ≥0.002 log-loss on 2024–2025 holdout with directionally correct altitude coefficient.
