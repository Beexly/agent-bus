# arxiv-program/research/2026-09-21/arxiv-deep/1805-dummy-rapm-low-minute-players.md

## What it is (1-2 sentences)
A ledger note on arXiv:2608.19454 (Watts, Pipping-Gamón, Wyner, Wharton) — "Dummy RAPM": instead of dropping low-minute players from Regularized Adjusted Plus-Minus, represent them as pooled "dummy" lineup-side count indicators to improve out-of-sample stint-level margin prediction. Ledger verdict: **ADAPT** — a principled replacement-level representation for GSE's rotation/injury adjustment needs.

## Key metrics/methods (formulas where given, else "not specified")
- **Weighted stint-level ridge regression** (standard RAPM scaffolding): response = home-minus-away margin per 100 possessions per stint; weights = stint possession count.
- **Innovation:** add **10 dummy indicators** to the design matrix — counts of 1–5 excluded low-minute players on the home lineup and 1–5 on the away lineup (instead of dropping them).
- Two hyperparameters: minutes-per-appearance exclusion threshold, and dummy/player ridge-penalty ratio (dummies get their own heavier penalty).
- Ridge objective: min_β ‖W^{1/2}(y − Xβ)‖² + λ_player‖β_players‖² + λ_dummy‖β_dummy‖², with **λ_dummy/λ_player = 2.2** (selected).
- Assumptions: low-minute players are exchangeable *within a lineup side* conditional on the count (pooled effect, not player-specific); dummy effect additive and linear in count of excluded players; descriptive/predictive, not causal.
- Validation: strict chronological split per season — October–December training → January–February validation (hyperparameter selection) → March–April outer test. Baselines: standard filtered RAPM (low-minute players dropped) with the same ridge setup.

## Data sources named
ESPN / sportsdataverse NBA play-by-play: **16 seasons, 19,589 games, 496,575 stints**. Per-stint schema: game id, home/away 5-man lineups, possessions, home-minus-away margin per 100 possessions. Code: https://github.com/whartonsabi/dummy-rapm.

## Findings (numbers and facts, not vibes)
- Selected hyperparameters: **10 minutes per appearance** threshold; **dummy/player penalty ratio 2.2**.
- Outer-test RMSE: **Dummy RAPM 12.856 vs Filtered RAPM 12.897** — improvement of **0.042 points (0.30%)**; 95% CI for the RMSE reduction: **0.013–0.070** (excludes zero).
- Dummy RAPM better in **13 of 16 seasons**; mean R² **0.178 vs 0.173**.
- Limitations noted: predictions conditioned on *realized* held-out lineups (lineup-conditioned margin prediction, not a true pregame forecast — no rotation/minutes projection step); 0.30% gain small in absolute terms; count-additivity assumed, not tested (3rd excluded player may differ from 1st); 10-min/appearance threshold is a selected constant that may vary by era/pace.
- Ledger's improvement experiment: replace the fixed 10-minute threshold with a learned per-player "replacement-level" propensity (minutes share × usage) and let the dummy penalty ratio vary by position group; success = outer-test RMSE reduction ≥ 0.06 (beating the paper's 0.042 by ≥ 40%) under the same chronological protocol.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Player-rating / lineup-context methodology: pooled replacement-level representation directly applicable to injury/rotation adjustments in fantasy-points projection. INFERENCE: the same dummy-count design could extend to low-snap NFL players (practice-squad callups, deep rotation) in any per-play or per-possession player-value model. No QB, coaching, OL, scheme, or trust-signal content; no quotes.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the 10-indicator dummy design with the 2.2 penalty ratio as GSE's rotation/injury adjustment baseline: build the design matrix from stint/lineup data, tune λ_player by CV (λ_dummy = 2.2 × λ_player as starting point), select threshold on a validation window (start at 10 min/appearance), and use dummy coefficients as the "replacement-level lineup drag" adjustment when rotation players are ruled out. Reproducible test: replicate on one NBA season of GSE data — Dummy RAPM RMSE < Filtered RAPM RMSE on the outer test, improvement direction matching in ≥ 70% of seasons tested.
