# engine/research/2026-09-13/symbolic-regression/REPORT_WPA2_ROBUST.md
## What it is (1-2 sentences)
Robustified (log-cosh loss) symbolic-regression experiment targeting WPA² from 9 pre-snap features, run 2026-09-13 under MOVE-37 protocol with a pre-registered falsification rule. Verdict: FALSIFIED — the time-term hypothesis for WPA² was rejected and the method declared incapable of solving this target.
## Key metrics/methods (formulas where given, else "not specified")
Target y = WPA², clipped at 99th percentile of train, standardized on train. gplearn SymbolicRegressor, log-cosh fitness, function set {add, sub, mul, div, sqrt, log, abs, inv, tanh}, pop 2000 × 30 gens, parsimony 0.001, features standardized (W1 feature set). Primary: train 2021–2022 (n=70,912) → test 2023 (n=35,474). Replication: train 2021–2023 (n=106,386) → test 2024 (n=34,902). Baselines: B1 train mean R² −0.0000; B2 human heuristic raw −0.2755 / affine-calibrated 0.0531; B3 GLI-0.1 calibrated 0.0037 / raw −17.6215 (scale mismatch); B4 HGB signal ceiling 0.2168. Best SR program: `mul(-0.211, abs(X3))` = −0.211·|score_differential|, R² 0.0157 primary, bit-identical formula and constant on replication (R² 0.0183). Shuffled-target null collapses to bare constant −0.211, R² −0.0463 (passes null check). Gen-0 diagnostic: seed 42 implied train R² −0.0153 (vs. MSE round-1's ≈0.63) — heavy-tail attractor eliminated. Pre-registered criteria: 1/5 PASS on criterion 2 (vs. raw uncalibrated B2; loses by 0.0374 vs. calibrated B2) and 5/5 on null; criteria 1, 3, 4 FAIL.
## Data sources named
nflverse-derived data for seasons 2021–2024 (implied by train/test windows; exact provider not named in file).
## Findings (numbers and facts, not vibes)
- Best SR R² = 0.0157 vs. HGB ceiling 0.2168 — the machine finds ~7% of available signal.
- NO seed's program contains X4 (quarter_seconds_remaining); seed 123 collapsed to the constant −0.120 outright.
- The calibrated human heuristic (which CONTAINS the time term) scores R² 0.0531 and beats the best SR formula by 0.0374.
- log-cosh eliminated the pathological gen-0 tail-latching (implied R² ≈0.63 → −0.0153): DeepSeek's diagnosis was correct and the fix works.
- The −0.211·|score_differential| optimum is stable across independent training data (bit-identical constant).
- The verdict does NOT say time is irrelevant to win leverage: HGB finds real signal, and the residual-method target (Experiment 3) is unaffected.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Score differential dominates any time term for WPA² structure under SR — OTHER (model-form finding).
- Human heuristic with time term beats machine formula — TRUST-SIGNAL (calibrated domain heuristics can outrank SR output on heavy-tail targets).
- log-cosh vs. MSE robustness lesson generalizes to any heavy-tail sports loss — OTHER (methodology).
- Falsification executed and documented per pre-registered rule — TRUST-SIGNAL (protocol integrity).
## Engine-actionable? (yes/no + one-line what)
Yes — feed the calibrated-human-beats-SR lesson into model routing: for heavy-tail targets like WPA², prefer calibrated heuristics + HGB-style learners over symbolic regression, and always use robust loss (log-cosh) when trying GP methods.
