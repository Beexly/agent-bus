# docs/reasoning/operon.md
## What it is (1-2 sentences)
A methodology note on Operon (HEAL's C++ symbolic-regression library; Burlacu, Kronberger, Kommenda, GECCO 2020), positioned in this repo as a ceiling check on the MOVE-37 Target B task: whether any short formula beats the two-feature identity already measured at AUC 0.604.
## Key metrics/methods (formulas where given, else "not specified")
- Operon's edge: nonlinear least squares (Levenberg–Marquardt, automatic differentiation) on constants inside every candidate tree, unlike gplearn which treats constants as genes.
- Default symbols: `add, sub, mul, div, constant, variable`; extras: `fmin, fmax, aq, pow, abs, sin, cos, tanh, exp, log` — trig excluded for Target B rerun.
- Objectives: `r2` (default), `nmse`, `rmse`, `mse`, `mae`, plus `length`/`mdl` for multi-objective NSGA-II; no built-in logit-margin loss.
- Proposed config: `allowed_symbols="add,sub,mul,fmin,fmax,constant,variable"`, objectives `["r2","length"]`, population 1000, generations 200, max_length 16; rule: keep the shortest model whose holdout AUC is within epsilon of the best.
- The holdout on 2024–2025 drives is the only number that matters; do not paste an Operon tree into `engine-reading.mjs` on SRBench average performance.
## Data sources named
- SRBench black-box sets (benchmark context).
- The repo's 2024–2025 drive holdout and the two-feature identity baseline (AUC 0.604).
## Findings (numbers and facts, not vibes)
- Existing measured baseline: two-feature identity at AUC 0.604 on the holdout; Operon asks whether any short formula beats it.
- If the best short formula is an affine function of yardline and ydstogo, Operon agrees with the ablation and nothing new enters the tilt.
- Warning: fitting Operon with R² on a 0/1 scored/not-scored label is a regression-on-binary-target approximation — "the same class of mistake as MOVE-37 if you ignore it."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the "ceiling check" framing — only holdout numbers count, not benchmark averages; and the honest labeling of R²-on-0/1 as a modeling-class mistake.
- OTHER: symbolic-regression methodology for short-formula discovery (max_length 16, Pareto-front reading).
## Engine-actionable? (yes/no + one-line what)
yes — the NSGA-II short-formula ceiling-check pattern (r2+length objectives, 1000 pop × 200 gens, max_length 16) is a directly reusable method for finding minimal tilt formulas against the AUC 0.604 baseline.
