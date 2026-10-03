# docs/engine/research/2026-09-13/symbolic-regression/REPORT_BOTTLENECK.md
## What it is (1-2 sentences)
Ablation report for Experiment 2 of the MOVE-37 symbolic-regression program (2026-09-13): tests whether the genetic-programming-discovered "min-bottleneck" drive-scoring formula survives as a novel machine discovery. Verdict: DIE as a novel form — its hard kink adds nothing over a smooth linear form — but the underlying linear signal (distance-vs-field-position differential) is real, cross-era-stable, and carries ~95% of an HGB reference model's lift.
## Key metrics/methods (formulas where given, else "not specified")
- Formula under test: `score_drive ≈ sin(|−0.2007·ydstogo + min(0.0446·yardline_100 − 2.3621, 0.2007·ydstogo − 1.0574) + 1.0574|^0.5)`, with b = 0.0446·yardline_100 − 2.3621 (field position), c = 0.2007·ydstogo − 1.0574 (distance); yardline_100 = yards from own goal line (99 = opponent's 1). Analytically simplifies exactly to `score_drive ≈ sin(√max(c − b, 0))`.
- Method: output-mapping refit on train (logistic regression of y on each scalar variant), holdout AUC on test (train ≤2023 n=22,810; test ≥2024 n=11,271); HGB reference AUC 0.6268. Pre-registered prediction: min(b,c) beats all alternatives by ≥ 0.02 AUC.
- Binding-boundary analysis: c binds ⟺ yl > 4.5·ytg + 29.25, evaluated on feasible (yl, ytg) combos (ytg ≤ 100 − yl) and observed plays.
- Cross-era stability: refit 2020–2022 (n=16,954) → test 2023–2024 (n=11,534); PASS threshold >0.54 AUC, kill <0.52.
## Data sources named
- `data/target_b.parquet` (same build as round 1); train/test splits as above. No public dataset named in the file.
## Findings (numbers and facts, not vibes)
- Ablation AUC table: c−b smooth linear 0.6039 (best) > discovered formula sin(√max(c−b,0)) 0.5818 > b alone 0.5700 > min(b,c) 0.5602 > |c−b| 0.5473 > (b+c)/2 0.5402 > c alone 0.5077 > max(b,c) 0.4726.
- Pre-registered prediction FAILS: min(b,c) LOSES to smooth linear c−b by 0.0437 AUC; smooth form beats discovered form by 0.6039 vs 0.5818 (≈4σ on n=11,271).
- Football-interpretation test validated: near goal line (yl 90–99) distance term binds 1.000 (grid and observed n=872); own territory (yl 1–19) binds 0.000 (grid and observed n=142) — matching spec expectations. (An early grid including infeasible combos e.g. yl=99/ytg=20 gave 0.706 and was discarded.)
- Cross-era: AUC 0.5927 on 2023–2024 test (PASSES >0.54, survives <0.52 kill); HGB on same split 0.6334 — signal slightly stronger cross-era.
- Net conclusion: the GP found a real linear signal (0.2007·ydstogo − 0.0446·yardline_100), but it is a coefficient estimate any logistic regression on the two raw features would find — not a machine discovery.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: pre-registered ablation prediction + a published DIE verdict on the authors' own "discovery" — the audit killed the headline claim while salvaging the real signal. This is the standard for vetting machine-discovered forms.
- OTHER: methodological gate for symbolic regression — a discovered nonlinear form must beat its own linearization; if the kink is decoration, it dies.
- SCHEME (weak): drive-scoring probability as a function of down/distance/field position is a game-state feature family, not a scheme tag per se. INFERENCE.
## Engine-actionable? (yes/no + one-line what)
Yes — add the linear differential (0.2007·ydstogo − 0.0446·yardline_100, sign-preserving) as a calibrated drive-scoring feature (~95% of HGB lift, cross-era stable), and apply the "must beat its own linearization" gate to every future symbolic-regression candidate before wiring.
