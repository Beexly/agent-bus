# engine/research/2026-09-13/symbolic-regression/REPORT_WPA2_STRATIFIED.md
## What it is (1-2 sentences)
Lab report (2026-09-13, MOVE-37 program) of two symbolic-regression experiments on squared win probability added (WPA²) from nflfastR play-by-play: a time-stratified SR run testing whether the GP could discover a conditional time-term contribution, plus a soft-target-regularization variant. Both designs failed — the report concludes the SR method is "structurally incapable of this target class."

## Key metrics/methods (formulas where given, else "not specified")
- Target: y = WPA², clipped at stratum-train 99th percentile, standardized. nflfastR WPA is implied (wp per play, squared).
- Strata on `game_seconds_remaining`: EARLY = gsr > 2700 (Q1, n≈16k/24k train/repl), LATE = gsr < 900 (Q4/OT, n≈19k/28.6k train/repl). Documented correction: the source analysis wrongly assumed `quarter_seconds_remaining` was game-level (it's quarter-level, max 900).
- Harness: tournament.py with 7 §7 fixes; gplearn SymbolicRegressor, log-cosh fitness, function set {add,sub,mul,div,sqrt,log,abs,inv,tanh}, population 2000 × 30 generations, parsimony 0.001; splits primary train 2021–2022 → test 2023, replication train 2021–2023 → test 2024.
- Redesign C: soft-target regularization beta=0.9 on y_train (Vanneschi & Castelli 2021), train-target std 1.0000→0.9000, median preserved.
- Play-type residual gate: target = pass_indicator − xpass (nflfastR xPass column); residual mean −0.0431/−0.0437; no SR run — probe stops at the gate.

## Data sources named
- nflfastR play-by-play (2021–2024 seasons; 141,288 plays in the frame), columns: `quarter_seconds_remaining`, `game_seconds_remaining`, WPA, xPass, pass_indicator, score_differential, down.
- Sandholtz et al. 2024 (fourth-down base experiment reference); Vanneschi & Castelli 2021 (soft-target regularization).

## Findings (numbers and facts, not vibes)
- Probe diagnostics (GBM ceiling / OLS linear test R²):
  - LATE primary: GBM 0.3079 (high tier), OLS 0.0514; clip99 0.0565, tail kurtosis 31.4
  - LATE replication: GBM 0.2979, OLS 0.0420; clip99 0.0533, kurt 29.8
  - EARLY primary: GBM 0.1514, OLS 0.0882; clip99 0.0177, kurt 18.7
  - EARLY replication: GBM 0.1375 (standard), OLS 0.0749; clip99 0.0178, kurt 18.8
- Calibrated human time-term heuristic (B2 baseline) explains test R² 0.1233 / 0.1165 in the LATE stratum vs 0.053 on full data — time carries concentrated late-game signal.
- Best LATE SR programs found only baroque transforms of |score_differential| (X3): seed 123 R² 0.0369 / 0.0385 (`log(tanh(inv(sqrt(tanh(X3))))))`); seeds 42: `mul(-0.211, abs(X3))` R² 0.0315; seed 7 collapsed to constant −0.160, R² negative. NO quarter_seconds_remaining (X4) term in any of 6 LATE programs, on either split.
- Smooth-linear OLS on the same 9 features beats best SR in LATE (0.0537/0.0433 vs 0.0369/0.0385) — kink is decoration there.
- EARLY control: both seeds found down-only forms (X0 = down); `sub(X0, tanh(X0))` R² 0.1126 / 0.0922 beats OLS (0.0898 / 0.0777) — down effect is genuinely nonlinear (saturating).
- Redesign C: two of three seeds collapsed to constants (R² −0.0300 / −0.0207); third found sqrt(|score_differential|) at R² −0.0030, worse than log-cosh alone (best 0.0157). Per pre-registered rule, SR declared structurally incapable of this target class.
- Play-type residual gate: GBM ceiling 0.0527 (primary) / 0.0375 (replication) vs kill threshold 0.03 → CONTINUE, not skipped; OLS captures most of it (0.040/0.026 — little nonlinear headroom); kurtosis −1.04 → MSE (not log-cosh) is the correct fitness if ever run.
- nflfastR xPass overpredicts pass probability by ~4.3pp on the pass/run-filtered sample (residual mean ≈ −0.043) — possible miscalibration or sample-selection artifact, reported as observation not claim.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — method-failure report for a win-probability feature-discovery method (symbolic regression on WPA²); directly relevant to the GSE MOVE-37 discovery program's choice of methods, not to football intelligence per se.
- SCHEME — the play-type residual gate (pass_indicator − xPass) quantifies how well nflfastR's xPass explains pass/run play selection; residual is thin and mostly linear.
- COACHING — §4: IRL fourth-down utility recovery (Sandholtz et al. 2024 replication) was NOT attempted, awaiting a protocol spec from DeepSeek.

## Engine-actionable? (yes/no + one-line what)
**Yes** — feeds the discovery-lane methods ledger: log-cosh SR confirmed incapable of conditional time-term structure (heuristic R² 0.12 vs best-machine 0.04 in late game); the down-only saturating form `sub(down, tanh(down))` is a replicable coefficient estimate for leverage-weighting; and xPass shows ~4.3pp overprediction bias on the filtered sample worth carrying as a calibration prior.
