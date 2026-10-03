# docs/engine/research/2026-09-13/symbolic-regression/REPORT_BOTTLENECK.md
## What it is (1-2 sentences)
Min-bottleneck ablation test of a symbolic-regression-discovered scoring-drive formula: pre-registered verdict **DIE** — the hard kink adds nothing, but the underlying linear distance-vs-field-position differential survives as real, cross-era-stable signal.
## Key metrics/methods (formulas where given, else "not specified")
- Discovered formula simplified exactly to `score_drive ≈ sin(√max(c − b, 0))` where b = 0.0446·yardline_100 − 2.3621 (field position), c = 0.2007·ydstogo − 1.0574 (distance).
- Ablation (logistic refit, train ≤2023 n=22,810, test ≥2024 n=11,271, HGB reference 0.6268): smooth **c − b = 0.6039** > discovered sin(√max(c−b,0)) = 0.5818 > b alone = 0.5700 > min(b,c) = 0.5602 > |c−b| = 0.5473 > (b+c)/2 = 0.5402 > c alone = 0.5077 > max(b,c) = 0.4726. Pre-registered prediction min(b,c) beats all by ≥0.02 AUC → FAILED (lost to c−b by 0.0437, ≈4σ).
- Binding boundary: c binds ⟺ yl > 4.5·ytg + 29.25; validated (goal-line 1.000, own territory 0.000).
- Cross-era: refit 2020–22 (n=16,954) → test 2023–24 (n=11,534): AUC **0.5927** (kill line <0.52, PASS; HGB 0.6334 on same split).
## Data sources named
`data/target_b.parquet` (drive-scoring data, same build as round 1); scripts `bottleneck_ablation.py`, `bottleneck_results.json` (rerunnable).
## Findings (numbers and facts, not vibes)
- **Verdict: DIE** as a novel machine-discovered form — the kink is decoration; the linear 0.2007·ydstogo − 0.0446·yardline_100 differential is the real signal.
- The differential carries genuine ranking signal: AUC ~0.59–0.60 vs 0.5 baseline, ~95% of HGB's lift, stable across eras.
- Football interpretation validated: near the goal line the distance term binds; backed up in own territory the field-position term binds.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the pre-registered kill line and ≈4σ margin of failure is the honest ablation standard — claim only what survives.
- SCHEME: the binding-constraint boundary (yl > 4.5·ytg + 29.25) is a codable red-zone/goalline structure rule for scoring probability.
- QB-BEHAVIOR / COACHING / OL: not addressed.
## Engine-actionable? (yes/no + one-line what)
Yes — add the linear distance-minus-field-position differential as a calibrated drive-scoring feature (AUC ~0.60, cross-era stable); do NOT ship the min-kink/sine scaffolding.
