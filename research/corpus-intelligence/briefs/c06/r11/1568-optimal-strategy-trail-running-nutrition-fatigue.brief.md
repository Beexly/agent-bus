# arxiv-program/research/2026-09-21/arxiv-deep/1568-optimal-strategy-trail-running-nutrition-fatigue.md
## What it is (1-2 sentences)
Paper (arXiv:2401.02919): extends Keller's optimal-running model with terrain, carbohydrate-oxidation, and fatigue dynamics, solves the optimal-control problem (bang-bang + singular arcs; Theorem 1: max force only at start and steep uphills, near-constant power elsewhere), and predicts elite race finish times within 0.51–13.3% using generic literature parameters.
## Key metrics/methods (formulas where given, else "not specified")
- State ODEs: dv/dt = f − g·sin α − v/τ − c·v²; dx/dt = v; dE/dt = σ − f·v + (ζ/m)·N(t) − Q; dQ/dt = K·f·v (fatigue ∝ work rate); dN/dt = k·N(1−N/M) logistic oxidation, N(t) = (1/M + (1/N₀−1/M)e^{−kt})⁻¹.
- Parameters: M = 2.32×10⁻² g/s, k = 1.353 1/s, N₀ = 2×10⁻³ g/s; E₀ = 2×10³ m²/s², m = 65 kg, K = 6×10⁻⁵ 1/s, σ̂ = 27 m²/s³; σ = σ̂·f_d·f_a, f_d = (940−T/60)/1000, f_a = 1 − 11.7×10⁻⁹a² − 4.01×10⁻⁶a.
- Oxidation logistic fit to Jeukendrup et al. data: R² = 0.9459; fatigue Q(t) nearly linear regardless of course.
- Optimal control: Hamiltonian, switching function ψ linear in f → max-force subarcs + singular arcs; numerics GEKKO/IPOPT; Generalized Legendre–Clebsch verified.
## Data sources named
Five 2023 Golden Trail World Series races (Zegama 41.5 km 3:36:40; Mont-Blanc 43.0 km 3:35:04; Dolomyths 21.0 km 1:51:36; Pikes Peak Ascent 20.5 km 2:00:20; Mammoth 26k 27.5 km 1:54:48); elevation from Strava API .gpx; oxidation data from Jeukendrup et al. [33]; no code repo.
## Findings (numbers and facts, not vibes)
- Finish-time errors: Zegama 0.51% (3:35:34 vs 3:36:40), Mont-Blanc 3.45%, Dolomyths 10.03% (optimistic, loose-rock switchbacks unmodeled), Pikes Peak 9.93% (optimistic), Mammoth 13.3% (pessimistic, gravel faster than profile). Best <5% on alpine marathons.
- Structural: optimal strategy ≈ near-constant power; max force only at start and uphills steeper than α₀; final acceleration as energy depletes; drag negligible (γ≪ι,β, dropped).
- Limitations: no recovery term in dQ/dt; continuous running ≠ intermittent football; no injury outcome; generic parameters cap accuracy; weather/surface unmodeled.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the dQ/dt = K·(work rate) ODE is the mechanistic core for a player workload/fatigue-state feature — accumulate from NGS power proxy (speed × acceleration), decay between sessions (recovery term the paper omits); calibrate K, ρ per position group against soft-tissue injury flags; spiky-vs-smooth weekly load as load-management signal.
- COACHING: "uniform power is optimal" → flag players whose weekly load distribution is spiky vs smooth for staff.
- TRUST-SIGNAL: injury-availability model with principled fatigue state improves availability forecasting that followers see in injury reports/pick confidence.
## Engine-actionable? (yes/no + one-line what)
Yes — build per-player latent fatigue state Q from NGS power proxies with recovery term, fitted per position group; gate: injury-risk model with Q-features beats 7/28-day rolling-average load features by ≥2 AUC points on 2024 soft-tissue injuries, and fitted recovery half-life 2–7 days (else misspecified).
