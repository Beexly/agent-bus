# docs/reasoning/operon.md
## What it is (1-2 sentences)
A design note prescribing Operon (HEAL's C++ symbolic-regression library, GECCO 2020; Python `pyoperon`) as a ceiling-check tool for the MOVE-37 drive-scoring problem: test whether any short symbolic formula beats the existing two-feature (yardline + ydstogo) identity, already measured at AUC 0.604.
## Key metrics/methods (formulas where given, else "not specified")
- Operon's edge: nonlinear least squares (Levenberg–Marquardt, automatic differentiation) on the numeric coefficients inside every candidate tree.
- Default symbols: add, sub, mul, div, constant, variable; extras include fmin, fmax, aq, pow, abs, sin, cos, tanh, exp, log. Trig OFF for a Target B rerun.
- Objectives: default r2; valid single objectives r2, nmse, rmse, mse, mae; multi-objective NSGA-II with length/mdl.
- Reference config: allowed_symbols="add,sub,mul,fmin,fmax,constant,variable", objectives=["r2","length"], population_size=1000, generations=200, max_length=16.
- Selection rule: keep the shortest model whose holdout AUC is within epsilon of the best on the Pareto front.
- Noted constraint: no built-in LogitMarginLoss — drive scored/not-scored is still a regression unless the label is recoded (R² on a 0/1 target) or a custom objective is wrapped.
## Data sources named
- SRBench (black-box benchmarks where Operon is an accuracy leader)
- Target B: 2024–2025 drive data for the holdout verdict (file states the 2024–2025-drive holdout is the only number that matters)
## Findings (numbers and facts, not vibes)
- The two-feature (yardline + ydstogo) identity measured AUC 0.604 — the bar to beat.
- INFERENCE: the rerun has not been executed in this file; no result is reported. The note is a plan, not a verdict — if the shortest Pareto model is just an affine function of yardline and ydstogo, "MOVE-37 is closed."
- Explicit negative finding: do not paste an Operon tree into engine-reading.mjs solely on the basis of SRBench averages.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: "the holdout on 2024–2025 drives is the only number that matters" — a calibration-gating rule against shipping SR results on benchmark prestige.
- SCHEME: target is play-by-play drive-outcome modeling (yardline, ydstogo), a candidate tilt/engine helper input.
- OTHER: symbolic-regression method note (GECCO 2020 citation).
## Engine-actionable? (yes/no + one-line what)
yes — defines the executable Operon ceiling-check recipe (config, objective front, holdout-gate rule) for the MOVE-37 drive-outcome lane whenever that rerun is staffed.
