# docs/ops/CALIBRATION_GATE_SCALE_2026-09-06.md

## What it is (1-2 sentences)
A 2026-09-06 calibration-gate audit arguing the gate binds ONLY through ECE: the Brier 0.22 floor is vacuous (a constant 0.69 forecaster clears it), the Murphy REL floor of 0.05 is 4.47× looser than ECE's 5-point absolute band, and RES has no floor at all — while a no_rows audit found 297 settled ML picks with bookmakerCount=0 (signal slate writes no odds rows), meaning no recoverable price existed.

## Key metrics/methods (formulas where given, else "not specified")
- Brier floor 0.22 is cleared by a constant 0.69 forecaster (UNC=0.2139) — the floor does not bind.
- Murphy REL floor 0.05 = 22.4-pt RMS gap vs ECE's 5-pt absolute band → 4.47× looser.
- RES has NO floor: a zero-skill base-rate forecaster reads GREEN.
- Sample: n=458, Brier 0.1926, REL 0.0053, ECE 0.0524 (floor 0.05) → RED (ECE over by 0.0024).
- Per-version ECE: v5.2.7 n=245 ECE 0.1089; v5.2.6 n=110 ECE 0.0587; v5.1.0 n=74 ECE 0.0729; v5.0.0 n=29 ECE 0.1531.
- Deployed-version floor: the gate applies to the deployed version's own sample.
- no_rows audit: 297 settled ML picks had bookmakerCount=0 → no recoverable price; alias-merge latent defect recorded as a ledger row.

## Data sources named
- Signal slate (writes no odds rows — the source of the bookmakerCount=0 defect)
- None other (gate-design memo; metrics computed on the engine's own settled-pick record)

## Findings (numbers and facts, not vibes)
- Only ECE binds: the Brier 0.22 floor is cleared by a constant 0.69 forecaster (UNC=0.2139), so the floor cannot reject a no-skill model.
- The Murphy REL floor of 0.05 corresponds to a 22.4-pt RMS gap vs ECE's 5-pt absolute band — 4.47× looser, i.e. nearly non-binding.
- RES has NO floor: a zero-skill base-rate forecaster reads GREEN — the gate's biggest hole.
- 2026-09-06 truth surface: n=458, Brier 0.1926, REL 0.0053, ECE 0.0524 against the 0.05 floor → RED, over by 0.0024.
- Per-version ECE degrades on older/smaller samples: v5.2.7 (n=245) 0.1089, v5.2.6 (n=110) 0.0587, v5.1.0 (n=74) 0.0729, v5.0.0 (n=29) 0.1531 — small-n ECE reads high (finite-sample upward bias, consistent with ledger C-290: a perfect forecaster ≈0.09 at n=100).
- no_rows audit: 297 settled ML picks had bookmakerCount=0 because the signal slate writes no odds rows — no recoverable price exists for them; recorded as an alias-merge latent defect ledger row.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Gate binds only via ECE; Brier floor vacuous (constant 0.69 clears 0.22) and RES unfloored (zero-skill base-rate reads GREEN) — the gate as written can pass a model with no skill.
- [SCHEME] Murphy REL floor 4.47× looser than ECE — REL and ECE are not interchangeable gate statistics; pick one binding metric.
- [SCHEME] Per-version ECE: small-n samples read high under finite-sample bias — gate on the debiased estimator (ledger C-290: SUM_k w_k sqrt(max(0, g_k²−v_k))), not raw binned ECE.
- [OTHER] 297 settled ML picks with no odds rows — price provenance gap in the signal-slate path; those picks can never have CLV measured.

## Engine-actionable? (yes/no + one-line what)
Yes — add a RES floor (the gate's missing constraint; zero-skill must read RED) and gate on the debiased ECE estimator, not the raw binned value.
