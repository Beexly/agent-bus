# docs/arxiv-program/research/2026-09-21/arxiv-deep/1187-modeling-ball-possession-dynamics-football.md

## What it is (1-2 sentences)
A full-text ledger of Chacoma et al. (2020), arXiv:2005.04020v2 — a three-agent minimalist physics simulator of soccer ball-possession intervals, theoretically mapped onto a Wiener process with drift and an absorbing barrier. Verdict: REJECT at the concept level — no outcome-prediction model, no market test, no transfer path to NFL spreads/totals/fantasy/calibration; replacement paper owed as ledger 1348.

## Key metrics/methods (formulas where given, else "not specified")
- Three-agent simulator (two teammates + one defender), discrete steps Δt=1 in 2D; step length exponential P_a(r) = (1/a)e^(−r/a); pass attempted with probability p if defender's action radius doesn't intercept the teammate line; BPI ends when d(ball, defender) < a.
- Parameters (p, a, R1, R2) = (0.3, 1, 2.25, 16) chosen by minimizing summed Jensen–Shannon divergences of three observable distributions over 10^5 realizations (a≈2m → R1≈5m, R2≈32m).
- Theoretical mapping (1D defender→ball distance): Fokker–Planck (σ²/2)∂²p/∂x² − μ∂p/∂x = ∂p/∂t with absorbing barrier p(d₀,x_b;t)=0 (Eq. 1); first-passage-time density g(τ) = (x_b/√(σ²2πτ³))·exp(−(x_b−μτ)²/(2σ²τ)) (Eq. 2).
- Fits: μ = 0.09 ± 0.02, σ = 0.39 ± 0.03, r² = 0.97; ⟨δ⟩_P(δ) = −0.07 matches drift magnitude.

## Data sources named
- L. Pappalardo et al. (2019) "Events" dataset (public): all spatiotemporal events from the 2017–18 season of five European leagues (Spain, Italy, England, Germany, France) — 3,071,395 events; 625,195 BPIs; 1,826 games; 98 teams; 2,569 players.
- Empirical regularities: Pass most common event (1.56M, ~2× Duels); ~75% of Duels trigger possession change; most common BPI involves exactly 2 players (0.27M) and 2 event types (0.4M); only BPIs with ≥2 events used.
- Code: none stated (supplementary URL was a placeholder).

## Findings (numbers and facts, not vibes)
- Distribution fits (JSD): P(T) D_JS = 0.017 (good; mean shifted ≈−20%, misses hump at T≈30s); P(Δr) D_JS = 0.008 (very good, captures bimodality, misses long-pass tail from goal kicks/crosses); P(N) D_JS = 0.0007 (excellent).
- Empirical: P(T) ∝ T^(−γ), γ = 5.1 ± 0.1 (authors note too large for a genuine power law); ⟨T⟩ = 13.72 s; ⟨N⟩ = 3.1 passes/BPI; linear ⟨N⟩(T) = ω_p·T with ω_p = 0.19 ± 0.03 (R²=0.99) for 0<T<60s (~0.2 passes/sec). Model failure: allows unbounded growth of ⟨N⟩ with T whereas data saturates (finite-size effect).
- No match-outcome, spread, totals, fantasy, or betting results of any kind reported.
- Leakage/limitations: parameters fit and evaluated on the same single season — descriptive fit, not out-of-sample prediction; no train/test split; no baselines beyond the trivial sample mean; no notion of score, match state, team strength differences, or tactics.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Entire paper → OTHER (soccer micro-physics of possession intervals; no NFL analogue — NFL is a discrete-down sport; no QB-behavior, coaching-tendency, OL, trust-signal, or scheme-matchup content).

## Engine-actionable? (yes/no + one-line what)
No — concept-level rejection; nothing in the paper maps onto a GSE prediction, calibration, or ranking deliverable.
