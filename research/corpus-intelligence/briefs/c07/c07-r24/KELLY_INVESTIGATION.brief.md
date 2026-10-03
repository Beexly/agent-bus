# ops/KELLY_INVESTIGATION.md
## What it is (1-2 sentences)
A short staking-methodology note defining GSE's Kelly-criterion stake-sizing investigation: quarter-Kelly default with a zero-stake-if-no-edge integrity rule, sequenced after ranking and calibration.
## Key metrics/methods (formulas where given, else "not specified")
Default quarter-Kelly (math SoT: `lib/tracker/staking.ts`; integrity wrapper: `lib/staking/kelly-investigation.ts`). Rule: zero stake if no edge; never treat p as verified while eligibility is RED. Sequencing rule: with resolution ≈ 0, Kelly amplifies noise — so rank first, calibrate second, size third.
## Data sources named
`lib/tracker/staking.ts` (math source of truth), `lib/staking/kelly-investigation.ts` (integrity wrapper).
## Findings (numbers and facts, not vibes)
- Kelly sizing is explicitly held behind calibration: stake sizing comes third, after ranking (RES) and calibration.
- p is never treated as verified while the calibration eligibility flag is RED.
- The sequencing rationale is stated as an investigation conclusion: at near-zero resolution, Kelly stake sizing amplifies noise rather than edge.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Rank-first-calibrate-second-size-third is an integrity guard: it prevents Kelly from turning uncalibrated probabilities into oversized bets and false confidence claims.
- [OTHER] No QB/coaching/OL/scheme content.
## Engine-actionable? (yes — codifies stake-sizing sequencing: RES first, calibration second, Kelly third; do not size on RED p)
