# arxiv-program/research/2026-09-21/arxiv-deep/1448-margin-of-victory-differential-skill-ratings.md
## What it is (1-2 sentences)
Deep read of Szczecinski (2022, arXiv:2010.11187v3): "G-Elo" — an Elo generalization that bakes margin of victory into a formal probabilistic model by discretizing the point differential into ordinal categories and fitting an Adjacent Categories (AC) model, yielding Elo-identical updates θ ← θ + K̃σ(ỹ − G(z)) with redefined scores; binary Elo and Elo-Davidson fall out as special cases (J=1, J=2). Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Discretize differential d_t into J+1 ordinal categories, e.g. J=6 NFL: {d<−10}, {−10≤d<−5}, {−5≤d<0}, {d=0}, {0<d≤5}, {5<d≤10}, {d>10} with thresholds Δ′=5, Δ″=10.
- AC model: Pr{Y_t=h|z_t} = 10^{α_h+δ_h z_t/σ} / Σ_l 10^{α_l+δ_l z_t/σ} (Eq. 11); symmetry α_h = α_{J−h}, δ_h = −δ_{J−h}.
- G-Elo update: θ_{t+1,i} ← θ_{t,i} + K̃σ(ỹ_t − G(z_t)) (Eq. 25); score ỹ_t = δ̃_{y_t} ∈ [0,1]; expected score G(z) (Eq. 20). Home-field: θ ← θ + ησ (Eq. 29).
- Closed-form frequency coefficient estimation: ξ = √(f_0 f_J) (43); η = (1/2)log10(f_H/f_A) (44); α_h = (1/2)log10(f_h f_{J−h}) − log10 ξ (45); δ_h = (1/(2η))log10(f_h/f_{J−h}) (46).
- J=2 reduces to Elo-Davidson with η = (1/2)log10(f_H/f_A), κ = 10^{α_1}, α_1 = log10(f_D/√(f_H f_A)) (47–48) — exposing that plain Elo's implicit κ=2 assumes ~50% draws, "clearly unrealistic in most sports."
- Metrics: log score LS, Ranked Probability Score RPS, accuracy AC, evaluated on second half of each test season (τ = T/2 burn-in).
## Data sources named
- EPL association football and NFL American football, ten seasons 2009/10–2018/19 (EPL: M=20, T=380/season, Football-data.co.uk; NFL: M=32, T=256/season, Pro Football Reference). First five seasons training, last five test.
- NFL draw frequency f_D = 0.001 — practically binary.
## Findings (numbers and facts, not vibes)
- NFL (Table 3): G-Elo J=6 (freq.): LS 0.6224, RPS 0.2166, accuracy 0.6656 vs Elo-Davidson (J=2): LS 0.6304, RPS 0.2200, accuracy 0.6375 — +2.8pp accuracy gain, largely from dropping draw modeling. Non-algorithmic frequency baseline: LS 0.6881, accuracy 0.5594.
- EPL: G-Elo J=6: LS 0.9679, RPS 0.1987, accuracy 0.5389 vs Elo-Davidson: LS 0.9740, RPS 0.2006, accuracy 0.5442 — small consistent log-score/RPS gains, accuracy flat.
- Closed-form frequency estimators generalized slightly better than ML-optimized coefficients on test data (paper conjectures optimization overfits while frequency averaging regularizes).
- K̃ chosen to minimize training log-loss also minimized test log-loss (Figure 1) — clean train/test transfer.
- Paper notes "beating the bookmakers' prediction by a couple of percent may be sufficient to ensure the monetary gains" (fn. 14); Bet365-implied probabilities plotted as reference in Figure 1.
- Leakage assessment in source: clean — strict season-blocked train/test split, coefficients and K̃ from training seasons only. Within-season skill drift handled only implicitly via SG, not modeled.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 7-category G-Elo beat Elo-Davidson on NFL on LS, RPS, and accuracy (+2.8pp) — principled MOV rating replacing heuristic K(MOV) scaling (TRUST-SIGNAL, OTHER)
- Frequency-based coefficient formulas generalized better than ML optimization — cheap transparent quarterly recalibration (TRUST-SIGNAL)
- Plain Elo's implicit κ=2 assumes ~50% draws; sport-calibrated fix via Eqs. 43–46 (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — implement G-Elo in the ratings module (7-category NFL discretization {d<−10}, {−10≤d<−5}, {−5≤d<0}, {d=0}, {0<d≤5}, {5<d≤10}, {d>10}; coefficients from last 5 NFL seasons via Eqs. 43–46; K̃ grid-search on log-loss), run alongside current Elo and LS ratings in weekly diagnostics, gated on NFL 2019–2023 backtest: ΔLS ≥ 0.005 AND accuracy ≥ baseline + 1pp; extensions: rolling in-season coefficient refit and team-specific K̃_i.
