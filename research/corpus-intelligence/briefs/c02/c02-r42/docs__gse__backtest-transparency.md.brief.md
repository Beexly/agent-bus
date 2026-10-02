# docs/gse/backtest-transparency.md

## What it is (1-2 sentences)
The canonical verified backtest truth document for GSE: a fixed set of honest benchmark numbers (out-of-sample samples, model MAE, naive MAE, beats-naive flag) plus the policy that prohibits performance claims (win-rate, ROI, accuracy, edge) in all public and PR1 materials until evidence changes.

## Key metrics/methods (formulas where given, else "not specified")
- Out-of-sample samples: 10,301
- Model MAE: ≈ 5.180
- Naive MAE: ≈ 4.9999
- Beats naive: false
- Formulas/method detail: not specified (no description of target variable, horizon, or naive baseline construction in the file).

## Data sources named
- None named (no dataset, source, or pipeline identified in the file).

## Findings (numbers and facts, not vibes)
- The verified backtest does not beat a naive baseline: model MAE ≈ 5.180 vs naive MAE ≈ 4.9999 on 10,301 out-of-sample samples. (TRUST-SIGNAL)
- Any win-rate, ROI, accuracy, or edge claims from this state would be misleading and are prohibited in PR1 and all draft materials; guaranteed-outcome claims prohibited. (TRUST-SIGNAL)
- Stated evidence-discipline practices: keep the honest benchmark visible before commercial framing; separate process quality from outcome claims; call out uncertainty and constraint boundaries; preserve a defensible trust standard for future calibration. (TRUST-SIGNAL)
- Improvement areas named: decision hygiene and process transparency; uncertainty bands and exceptions; intake quality and evidence logging; compliance-safe owner-aware communication cadence. (TRUST-SIGNAL)
- Things GSE refuses to fake: win-rate/ROI/edge/accuracy/pick-performance claims; backtest uplift language unsupported by the latest read; empty confidence statements without sample + baseline context; narratives implying financial predictability beyond evidence. (TRUST-SIGNAL)
- Approved public/PR1 language only: "Evidence-driven decision process service"; "Audit-first sports intelligence"; "No performance guarantee"; "Confidence applies to process quality, not outcome certainty"; "Results are still under calibration". (TRUST-SIGNAL)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The document is itself a trust signal — an audited, fixed backtest truth that gates all external claims (10,301 samples; 5.180 vs 4.9999; beats naive = false).
- TRUST-SIGNAL: Approved public vocabulary is constrained to process-quality language; no outcome-certainty language permitted.
- OTHER: No actionable modeling facts beyond the baseline comparison; no sources, horizons, or variable definitions given.

## Engine-actionable? (yes/no + one-line what)
no — it is a compliance/truth document, not a modeling input; it constrains what claims the engine's outputs may carry, it does not feed the engine.
