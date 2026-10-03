# docs/ops/BRIER_IMPROVEMENT_STEPS.md

## What it is (1-2 sentences)
The calibration playbook for pushing the engine's Brier score below its 0.22 floor: it uses the Murphy decomposition (BS ≈ REL − RES + UNC) to argue that maps/thresholds can only cut REL (reliability) while RES (resolution) is the ranking-power lever that requires genuinely new conditioning information — independent trueProb densification.

## Key metrics/methods (formulas where given, else "not specified")
- Murphy identity: BS ≈ REL − RES + UNC.
- Live numbers: Brier ~0.2478, floor ≤0.22; live REL ~0.004, RES ~0.0048, UNC ~0.248.
- Target: to reach ≤0.22 with residual REL ~0.02, need RES ≳ 0.03–0.05 ("maps cut REL only; RES is ranking power").
- Live δ=0.08 selective threshold (selective-prediction abstention band).
- Independent trueProb coverage ~65%.
- MLB ML+SPREAD pause groups live.
- REL bake-off: plateau collapse ~98%, T≈1.21.
- Forbidden: never PAVA (pool-adjacent-violators, i.e., no isotonic re-fitting as a fix); never invent PROVEN while RED.

## Data sources named
None (methodology memo; no external data sources named)

## Findings (numbers and facts, not vibes)
- Murphy decomposition: BS ≈ REL − RES + UNC; live Brier ~0.2478 with REL ~0.004, RES ~0.0048, UNC ~0.248 — the gap to the 0.22 floor is a RES deficit, not a REL deficit.
- To reach Brier ≤0.22 with residual REL ~0.02 requires RES ≳ 0.03–0.05, roughly 6–10× the live RES.
- Maps and thresholds cut REL only; RES is ranking power and must come from new conditioning information — the memo's prescription is densifying independent trueProb coverage (live ~65%).
- Live selective threshold δ=0.08; MLB ML+SPREAD pause groups are live.
- REL bake-off: plateau collapse ~98%, T≈1.21.
- Hard rules: never PAVA; never invent PROVEN while RED (no claiming proven calibration while the gate is red).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] Murphy BS ≈ REL − RES + UNC with live RES ~0.0048 vs needed 0.03–0.05 — the quantified skill gap: ranking power, not calibration maps, is the lever.
- [SCHEME] "Maps cut REL only; RES is ranking power" — directly bans the failure mode of monotone re-calibration as a skill fix (consistent with ledger C-16: monotone transforms cannot create resolution).
- [TRUST-SIGNAL] "Never invent PROVEN while RED" — calibration-state honesty rule for public claims.
- [OTHER] δ=0.08 selective threshold + MLB ML+SPREAD pause groups live — selective-prediction machinery already in production.
- [OTHER] Independent trueProb coverage ~65% — the densification target the memo prescribes.

## Engine-actionable? (yes/no + one-line what)
Yes — the engine's calibration roadmap is RES-first: densify independent trueProb coverage toward the ≳0.03–0.05 RES target; stop spending effort on REL-only map tuning, and never PAVA.
