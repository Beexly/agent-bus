# arxiv-program/research/2026-09-21/arxiv-deep/1986-fastbo-fast-hpo-and-nas-adaptive-fidelity.md
## What it is (1-2 sentences)
A multi-fidelity Bayesian-optimization paper (Jiang & Mian, 2024, arXiv:2409.00584) proposing FastBO, which identifies per-configuration adaptive fidelities — the efficient point (where doubling resources stops paying) and the saturation point (where performance plateaus) — instead of fixed successive-halving rungs, and claims any single-fidelity method can be extended to multi-fidelity with it. Reader verdict is ADAPT for GSE's seasonal HPO budget; the source text is an extended abstract, so claims are qualitative only.
## Key metrics/methods (formulas where given, else "not specified")
- Per configuration λ_i with learning curve C_i(r) over resource/fidelity r: warm-up (collect early observations; terminate configs showing consecutive deterioration) → estimate C_i(r) → efficient point e_i = min{ r | C_i(r) − C_i(2r) < δ_1 } (doubling resources past this point yields < δ_1 improvement) → evaluate config to e_i and update BO surrogate → post-processing trains the incumbent to saturation point s_i = min{ r | ∀ r′>r, |C_i(r′)−C_i(r)| < δ_2 }.
- δ_1, δ_2 predefined small thresholds. Proposed GSE values in file: δ_1 = 0.0005 log-loss, δ_2 = 0.0002 (tunable).
- Generality claim: the adaptive-fidelity identification strategy can extend ANY single-fidelity method to the multi-fidelity setting.
- No exact numbers stated in the extended abstract (figures only).
## Data sources named
- HPO/NAS benchmarks: LCBench, NAS-Bench-201, FCNet (tabular HPO + NAS benchmarks); exact task counts not stated. Baselines: random search, standard BO, ASHA, Hyperband, PASHA, A-BOHB, A-CQR, BOHB, DyHPO, Hyper-Tune. No code stated.
## Findings (numbers and facts, not vibes)
- Qualitative claims only (no numbers in the extended abstract): "FastBO can handle various performance metrics and shows strong anytime performance"; "FastBO gains an advantage earlier than other methods, rapidly converging to the global optimum after the initial phase" on all three benchmarks (claims rest on Figures 2–3 anytime curves).
- Limitations in file: extended abstract — no numbers, no ablations, no code; benchmarks vision/NAS-centric, transfer to tabular sports HPO unproven; learning-curve estimation noisy for GBDT configs (performance jumps discontinuously with tree count); δ thresholds need tuning per model family; early termination risks killing slow-starting configs.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-config adaptive fidelity (efficient/saturation points) replacing fixed successive-halving rungs in GSE's LightGBM/XGBoost/CatBoost HPO, fidelity r = number of training seasons (or boosting rounds) — INFERENCE from the file's GSE spec; OTHER.
- Zero-shot predicted efficient point via meta-model over config features + dataset meta-features — INFERENCE from the file's improvement experiment; OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Extend the Optuna/BO loop with per-config curve fitting (isotonic or parametric fit of log-loss vs seasons) over 50 LightGBM configs; adopt iff adaptive fidelity reaches within 0.001 log-loss of the full-evaluation best config using ≤50% of the season-fits of fixed halving, with no top-5 config wrongly early-terminated.
