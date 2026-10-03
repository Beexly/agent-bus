# docs/arxiv-program/research/2026-09-21/arxiv-deep/1706-ice-arena-heat-transfer.md
## What it is (1-2 sentences)
Deep-read ledger of Ferrantelli, Viljanen & Kurnitski (arXiv:1507.02896): a building-physics study of heat distribution and refrigeration energy efficiency in an ice hockey arena, with an analytical eigenfunction solution of the transient heat-conduction PDE validated against FEM and on-site measurements. Verdict in the file: REJECT — no sports-outcome data, no weather observations used for prediction, no transferable mechanism for GSE's prediction engine.

## Key metrics/methods (formulas where given, else "not specified")
- Steady-state heat-balance decomposition (radiation + convection + condensation + lighting) before resurfacing; transient heat-conduction PDE ∂u/∂t = α_I ∂²u/∂x² on 0<x<30 mm with u(0,t)=T_S(t), u(L,t)=T_I(t), solved by eigenfunction expansion with time-dependent Dirichlet BCs fitted from measurements.
- Solution: linear quasi-steady profile + eigenfunction series Σ{∫₀ᵗ e^(−αλₙ²(t−τ))Ŝₙ(τ)dτ + e^(−αλₙ²t)cₙ}sin(λₙx), λₙ=nπ/L. Assumes 1-D conduction, known-from-data Dirichlet BCs, constant thermal diffusivity.
- Validation: energy-balance closure, theoretical vs measured resurfacing heat load, analytical profile vs FEM.

## Data sources named
On-site measurements at Reebok Arena, Leppävaara, Finland (two 1,624 m² rinks): heat-flux plate + Pt-100 at ice/concrete interface, thermal camera surface temps (10 s cadence), air temperature/RH stratification at 0.005–8.3 m heights. One resurfacing event: 450 kg water at 40°C spread on ice at −4.5°C surface.

## Findings (numbers and facts, not vibes)
- Heat-load split: ceiling thermal radiation 74%, lighting 14%, convection ~10%, condensation ~2%. Refrigeration ≈ 43% of hall energy use, ~1,800 MWh/yr.
- Resurfacing heat load: Q_w = 231.21 MJ total (Q1 water cooling 75.28, Q2 freezing 152.1, Q3 ice cooling 3.69 MJ).
- Energy-balance closure: theoretical resurfacing heat load 142.37 kJ/m² vs measured 140.49 kJ/m² (1.32% error); steady-state flux 42.87 vs 41.85 W/m².
- Only first ~6–7 eigenfunction terms matter; correction maximal at t=0, minimal ~50 s.
- Air strongly stratified: −3.5°C at 5 mm, +4.2°C at 5 m (ventilation supplies 25°C air at 5 m).
- File notes: single arena, single resurfacing event; BC polynomials fitted to the same event used for validation (circular); no uncertainty quantification; formula needs measured BCs so it predicts nothing from weather alone. Replaced by ledger 1711 (physics/0505118).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: building energy / refrigeration physics — no sports-prediction content of any kind.

## Engine-actionable? (yes/no + one-line what)
no — rejected paper with zero sports-outcome or weather-prediction content; the transferable artifact is textbook heat-equation math, not engine-usable domain knowledge (file's verdict: replaced by 1711).
