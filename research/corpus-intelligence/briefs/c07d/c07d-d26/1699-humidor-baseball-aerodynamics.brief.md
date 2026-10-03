# arxiv-program/research/2026-09-21/arxiv-deep/1699-humidor-baseball-aerodynamics.md
## What it is (1-2 sentences)
A full-text read of Meyer & Bohn (2008), arXiv:0712.0380, measuring whether storing baseballs in a humidity-controlled humidor changes pitched-ball break and batted-ball distance via controlled humidity experiments plus trajectory simulations with drag and lift forces. Verdict in the ledger: ADAPT — the air-density/drag trajectory physics and the before/after-vs-league difference-in-differences design port to NFL altitude kicking models and venue-environment effect estimation, but all measured coefficients are baseball-specific.

## Key metrics/methods (formulas where given, else "not specified")
- Drag force: **D** = −½ρ C_D A v² **v̂** (Eq. 1)
- Reynolds number: ℛ = vd/ν (Eq. 2)
- Drag-crisis profile: C_D(ℛ) = a + b·tanh((ℛ−ℛ_d)/Δ_d) + c·tanh((ℛ_u−ℛ)/Δ_u) (Eq. 3) — a double-tanh fit with 7 parameters subject to 2 constraints
- Lift force: **L** = −½ρ C_L A v² **v̂**×**ω̂**_b (Eq. 6)
- Spin parameter: S = rω_b/v (Eq. 7)
- Lift coefficient: C_L = 1.5S for S<0.1, = 0.09+0.6S for S>0.1 (Eq. 8) — piecewise linear in S
- Flight ODE: **v̇** = −**g** + (**D**+**L**)/m (Eq. 9), integrated numerically in a vertical plane with rotation axis orthogonal to it
- Lift-acceleration decomposition: Δa_L/a_L^s = ΔC_L/C_L^s + ΔA/A^s − Δm/m^s = 3Δd/d^s − Δm/m^s (Eqs. 11–12)
- Drag-acceleration decomposition: Δa_D/a_D^s = ΔC_D/C_D^s + ΔA/A^s − Δm/m^s (Eq. 14)
- Targets: Δy = y^s − y^d (relative curveball arrival height / break at the plate); Δx = x^s − x^d (relative batted-ball range)
- Observational design: before-humidor (BH) vs after-humidor (AH) Coors Field team stats compared against full-NL averages in the same windows (league control)
- Four alternative drag-coefficient profiles used for robustness: smooth, Frohlich sand-roughened, SHS, Nathan

## Data sources named
- Controlled experiment: 15 MLB baseballs (5 each) stored in airtight containers at 32%, 56%, 74% RH via saturated salt solutions (±1% RH stability), ~70°F; mass to ±0.1 g, diameter via height gauge to ±0.013 in, 5 orientations per ball; weekly measurements; saturation timescale ~2 weeks
- Observational (Table 1): Coors Field team stats 7 seasons before humidor vs 5 seasons after, compared against full-NL averages in the same windows — Rockies ERA, NL ERA at Coors, NL avg ERA, HR/team-game, runs/team-game, avg fly-ball distance, from Baseball-Reference and InsideTheBook
- Aerodynamic literature: drag-crisis data from Frohlich, Achenbach, Sawicki–Hubbard–Stronge (1996 Olympics), Nathan et al.; lift data from SHS and Nathan
- Kagan's coefficient-of-restitution (elasticity) measurements, folded in for net batted-distance effect
- Reference assumptions: Denver atmosphere ρ = 0.91809 kg/m³ (vs 1.0793 kg/m³ sea level) at 70°F; ν = 2.095×10⁻⁵ m²/s (vs 1.8263×10⁻⁵ at sea level); "standard" ball = 9.125 in circumference, 5.125 oz
- Simulated scenarios: curveball break — horizontal launch at 72–88 mph, release 6.25 ft height / 53.5 ft from plate; batted-ball range — optimally struck ball, 35–45 m/s exit velocity at 24.3°

## Findings (numbers and facts, not vibes)
- Humidity response (linear fits): diameter +0.012% per %RH → +0.24% going from 30% to 50% RH; mass +0.08% per %RH → +1.6% for 30%→50% RH; ball density +0.9%
- RH-driven size change is SMALLER than the ball-size variation already allowed by MLB rules
- Aerodynamics alone: the drier ball breaks MORE (Δy > 0 at all pitch speeds), by at most 0.25 in; fractional lift acceleration Δa_L/a_L^s ≈ −0.88% (dry breaks more because mass loss dominates area loss)
- Batted balls (aerodynamics only): humidified ball travels ~2 ft FARTHER (Δa_D/a_D^s ≈ −1.12% — mass effect wins over area)
- Net effect with restitution (Kagan: −6 ft per 20% RH increase): humidified ball travels ~3–4 ft LESS overall (Fig. 7; not exactly additive due to nonlinearity)
- Coors Field BH→AH (Table 1): HR/team-game 1.59→1.26 (−0.33), runs/team-game 6.94→5.87 (−1.07), avg fly-ball distance 323→318 ft (−5 ft), Rockies ERA 6.14→5.34 (−0.80); NL-wide changes ≈ 0 in all categories
- Grip channel: only +0.9% extra spin (Δω/ω^s) on humidified balls would be needed to overcome the aerodynamic break deficit — offered as the likely real mechanism for the observed change (UNCERTAIN: the authors offer this as a hypothesis, not a measurement)
- Key GSE-portable number: Denver ρ ≈ 0.91809 vs 1.0793 kg/m³ sea level ≈ 15% less drag acceleration on the ball — proposed as a closed-form altitude distance modifier for kicks (Δa_D/a_D = Δρ/ρ + ΔA/A − Δm/m per the Eq. 12/14 form)
- Acceptance gate stated in the ledger: ADOPT the altitude feature if the ρ-adjusted model improves log-loss by ≥ 0.002 on the 2024–2025 holdout AND the Denver coefficient is directionally correct
- Improvement experiment proposed: add a spatially varying wind field inside the stadium bowl (wind shielding by stands) to the ODE, validating against actual FG miss direction data (left/right/upright hits); run the venue-effect estimator on dome→outdoor and turf→grass transitions to build a venue adjustment table for totals
- Limitations flagged: baseball-specific drag-crisis curves, C_L(S) relation, and RH mass/diameter response all measured on baseballs — nothing transfers numerically to a tumbling NFL football; 2D planar trajectories; seam-orientation effects ignored; prevailing Denver winds (Chambers et al.) not modeled — flagged as needed future work; SHS vs Nathan disagree on crisis magnitude, and the batted-range result is sensitive to profile choice near 40 m/s; Table 1 explicitly non-causal (roster quality, 2001 strike-zone enlargement, other confounders); net ~4 ft effect small relative to natural ball-to-ball variation

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: The Eq. 9 trajectory framework (drag ∝ ρAv²/m) with the Denver ρ ≈ 0.91809 vs 1.0793 kg/m³ sea-level numbers is the physics template for a Denver-altitude kicking model (FG/punt distance) — serves the calibration/sizing program via a closed-form ~15% drag-acceleration altitude distance modifier, testable on nflverse 2020–2025 FG attempts with the stated ≥ 0.002 log-loss improvement gate.
- COACHING: The BH-vs-AH-vs-league difference-in-differences design (7 seasons before vs 5 seasons after, NL-wide control, year-to-year variance as uncertainty) is a portable template for estimating the effect of coaching-staff changes (HC/OC/DC turnover) on team efficiency — before/after team stat deltas vs league-wide deltas in matched windows — serving the coaching-tendencies program with a causal-control structure instead of raw before/after.
- OTHER: The fractional-acceleration decomposition (Eqs. 11–14: Δa/a = ΔC/C + ΔA/A − Δm/m) gives a closed-form way to attribute any environmental change to its drag components without full ODE simulation — applicable to any venue-environment change (surface, roof, altitude move) via the proposed `weather/venue_effects.py` harness.
- OTHER: The grip-channel finding (+0.9% spin needed to overcome the deficit) is a methodological warning for the engine: measured surface/ball changes can have their largest effect through an indirect behavioral channel (grip → spin) rather than the direct physical channel — when modeling weather/surface effects, look for the human-mediated pathway, not just the physics.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the ρ-based altitude distance modifier (≈15% less drag acceleration in Denver) for FG/punt models and the before/after-vs-league venue-effect estimator, gated on ≥ 0.002 log-loss improvement on 2024–2025 nflverse holdout.
