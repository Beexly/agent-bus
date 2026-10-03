# docs/ops/CALIBRATION_PUBLISH_CHECKLIST.md
## What it is (1-2 sentences)
DRAFT founder-approval checklist for moving the engine from Founding to Proven: hard blockers on sample size, calibration error metrics, and reporting provenance before any public PERFORMANCE_STATS / LIVE_BOARD / calibration-apply change.
## Key metrics/methods (formulas where given, else "not specified")
Hard blockers (strawman): N overall ≥ 500; N per primary market (spread/total) ≥ 150; high-confidence tail (p ≥ 0.75) N ≥ 50; ECE ≤ 0.05; MCE ≤ 0.12; mean log loss reported; BSS vs climatology > 0 (and vs close if available); date range + model version printed. Isotonic / CIR / ECE / Brier decomposition, Platt / Beta / selector, temperature scaling (R&D). Output artifact: `.gse-local/calibration/metrics.json` with metrics, reliability bins, git SHA.
## Data sources named
Settled, graded sample only (no open games); no invented odds/scores/GSIS; offline gaps labelled.
## Findings (numbers and facts, not vibes)
- Explicitly NOT enough: hot W–L streak, positive ROI alone, BSS > 0 without a reliability diagram, temperature/Platt/isotonic fit without re-checking ECE/MCE/N.
- Until checklist complete and founder-signed: Founding ladder only; board stays gated; no public Proven page.
- Metrics cron exists (`apps/web/app/api/cron/calibration-metrics`) as artifact-only, no gate flips.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the ECE/MCE/N gates are the quantitative backbone of public trust before Proven.
- OTHER: calibration publish governance.
## Engine-actionable? (yes/no + one-line what)
yes — adopt N≥500 / ECE≤0.05 / MCE≤0.12 as the promotion gate for any calibration adjustments into live scoring.
