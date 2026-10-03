# ops/SAMPLE_N_VS_MAP_N.md
## What it is (1-2 sentences)
An integrity note explaining why the public calibration sample (map n ≈ 760) intentionally differs from the canonical settled count (≈1017), and the rule that the gap must never be "fixed" by weakening eligibility.

## Key metrics/methods (formulas where given, else "not specified")
- `sample.canonicalSettled`: published · !bootstrap · not seed · result ∈ {WIN, LOSS, PUSH} → 1017.
- calibration map n: published · !bootstrap · not seed · result ∈ {WIN, LOSS} · `signalSnapshot.eligibleForLearning=true` · finite confidence · used for Brier/ECE → 760.
- Integrity rule: do not "fix" 760→1017 by dropping `eligibleForLearning`; PROVEN uses map metrics on learning-eligible WIN/LOSS, not raw win rate on 1017.

## Data sources named
- `signalSnapshot` (with `eligibleForLearning` flag), confidence values on pick records.

## Findings (numbers and facts, not vibes)
- canonicalSettled 1017 = 515 wins + 499 losses + 3 pushes.
- map n 760 = learning-eligible WIN/LOSS with usable confidence.
- Gap ≈254–257 ≈ W/L rows excluded by `eligibleForLearning=false` and/or missing confidence — explicitly not hidden seed rows.
- PUSH results count in the canonical sample but are excluded from calibration map n.
- PROVEN gating is on map metrics (Brier/ECE/Murphy on learning-eligible WIN/LOSS), not on the raw 1017 win rate — the two populations serve different purposes.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Eligibility-gated calibration sets as anti-cherry-picking discipline (pushes excluded, learning flag required) — [TRUST-SIGNAL]
- Raw win rate vs calibrated-probability evaluation kept as separate surfaces — [TRUST-SIGNAL]

## Engine-actionable? (yes/no + one-line what)
yes — Enforce eligibleForLearning + WIN/LOSS-only (no pushes) in every calibration set, and report raw win rate separately from Brier/ECE — never merge them.
