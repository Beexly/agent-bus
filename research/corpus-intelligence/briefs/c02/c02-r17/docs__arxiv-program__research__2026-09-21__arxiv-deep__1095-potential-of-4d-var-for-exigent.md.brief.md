# docs/arxiv-program/research/2026-09-21/arxiv-deep/1095-potential-of-4d-var-for-exigent.md
## What it is (1-2 sentences)
Ledger of arXiv:1102.2846v1 (Hoffman, Henderson, Nehrkorn 2011), "Potential of 4d-VAR for Exigent Forecasting of Severe Weather." A conceptual proposal for worst-case tornado forecasting by repurposing 4d-VAR data assimilation; verdict REJECT — no executed experiment, no results, prohibitive compute.
## Key metrics/methods (formulas where given, else "not specified")
- Standard 4d-VAR: J = J_b + J_o (background + observation terms).
- Exigent variant: J = J_b + J_o + w_d·J_d, where J_d rewards severe-weather proxies.
- Tornado damage proxy: J_d = −(1/Δt)(1/A)∫∫ STP dx dt, STP = Significant Tornado Parameter (MLCAPE, 0–6 km shear, 0–1 km SRH, MLLCL, MLCIN).
- Proposed setup: WRF model with NARR initial/boundary conditions (32 km, 8× daily); validation proposed as subjective map-vs-tornado-report comparison.
## Data sources named
No new dataset. References prior MM5 4d-VAR experiments (Hurricane Andrew case). Proposed (not executed): NARR reanalysis data.
## Findings (numbers and facts, not vibes)
- [OTHER] No numerical results for the proposed method. The single cited number: in the Andrew MM5 experiment, damaging land winds were eliminated at the 6-hour forecast but regenerated afterward (a negative result for the approach holding its target in time).
- [OTHER] No tornado experiment was actually run; validation design was proposed-only (subjective visual comparison).
- [OTHER] Ledger: 4d-VAR requires a full NWP model plus its adjoint — computationally enormous and operationally inaccessible to GSE; targets rare worst-case tornado outbreaks with no connection to game-level forecast calibration. Replaced by ledger 1301 (same weather lane).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] GSE overlap: none — gap 8 (weather physics for totals) concerns game-day wind/precipitation effects on scoring; this paper's rare-event worst-case framework is unrelated.
## Engine-actionable? (no — REJECT; no transferable method, see replacement ledger 1301)
