# ops/SAMPLE_N_VS_MAP_N.md
## What it is (1-2 sentences)
A one-page integrity memo reconciling two different settled-pick populations — `sample.canonicalSettled` (n=1017, includes PUSH) vs the calibration map n (n=760, learning-eligible WIN/LOSS only) — so nobody "fixes" the gap by dropping the eligibility filter.

## Key metrics/methods (formulas where given, else "not specified")
- `sample.canonicalSettled` population: published · !bootstrap · not seed · result ∈ {WIN, LOSS, PUSH}
- Calibration map n population: published · !bootstrap · not seed · result ∈ {WIN, LOSS} · `signalSnapshot.eligibleForLearning=true` · finite confidence · used for Brier/ECE
- Integrity rule: map n is stricter (no PUSH, learning flag); PROVEN uses map metrics (Brier/ECE/Murphy on learning-eligible WIN/LOSS), not raw win rate on 1017
- Explicit anti-gaming rule: do not "fix" 760→1017 by dropping `eligibleForLearning`

## Data sources named
- `sample.canonicalSettled` (published settled-pick surface)
- Calibration map (learning-eligible subset used for Brier/ECE)
- 2026-08-09 probe as the measurement date

## Findings (numbers and facts, not vibes)
- canonicalSettled = **1017** ≈ wins **515** + losses **499** + pushes **3** (515+499+3 = 1017, INFERENCE: arithmetic confirms)
- Calibration map n = **760** = learning-eligible WIN/LOSS rows with usable confidence
- Gap = **~254–257** rows ≈ W/L rows excluded by `eligibleForLearning=false` and/or missing confidence (NOT hidden seed rows — both populations exclude seed/bootstrap)
- The ~25% gap (257/1017 ≈ 25.3%) between canonical settled and calibration-usable picks is the eligibility-confidence attrition rate; the memo treats this as intentional and unfixable-by-convention

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: PROVEN eligibility uses map metrics on learning-eligible WIN/LOSS, never raw win rate on the 1017 canonical settled — a standing anti-gaming rule for public performance claims (serves calibration/sizing).
- **OTHER**: The 254–257-row gap quantifies how much settled history is calibration-usable; any engine backtest reporting must distinguish "settled" from "learning-eligible" populations and never inflate n by dropping the flag (serves trust-target intake).

## Engine-actionable? (yes/no + one-line what)
yes — treat calibration n (760, eligible WIN/LOSS only) as the only admissible population for Brier/ECE/Murphy claims; keep the eligibleForLearning filter non-negotiable in any engine calibration reporting.
