# ops/KELLY_INVESTIGATION.md
## What it is (1-2 sentences)
A short pointer file for the Kelly-criterion stake-sizing lane: the math source of truth is `lib/tracker/staking.ts` (default quarter-Kelly), wrapped by an integrity layer in `lib/staking/kelly-investigation.ts`, with three standing guardrails — zero stake if no edge, never treat p as verified while RED, and with Res≈0 Kelly amplifies noise so the order is rank first, calibrate second, size third.

## Key metrics/methods (formulas where given, else "not specified")
No formulas are written out in this file (it defers to `lib/tracker/staking.ts` for the math). Stated policy parameters:
- **Default: quarter-Kelly** (`lib/tracker/staking.ts`)
- **Zero stake if no edge**
- Never treat `p` as verified while **RED**
- With **Res≈0**, Kelly amplifies noise — the mandated sequence: **rank first, calibrate second, size third**
- Integrity wrapper: `lib/staking/kelly-investigation.ts`

## Data sources named
- `lib/tracker/staking.ts` (math source of truth)
- `lib/staking/kelly-investigation.ts` (integrity wrapper)

## Findings (numbers and facts, not vibes)
- The file is 6 lines (5 substantive): it is an intake pointer, not an investigation write-up — the actual Kelly analysis lives in the two code paths it names.
- The RED-state rule ("never treat p as verified while RED") mirrors Garrett's honest-calibration-state doctrine: uncalibrated probabilities may compute in shadow but never drive sizing.
- The rank→calibrate→size sequence is consistent with his WIRE-FIRST ordering (research → wire → weight → calibrate → test → polish): sizing is the last thing to earn trust, never the first.
- "With Res≈0, Kelly amplifies noise" is the explicit rejection of Kelly-sizing on uncalibrated model probabilities — this directly supports the 2026-09-30 rejection of scoring calibration on old-model picks as progress: uncalibrated model edges are noise, and fractional Kelly just amplifies it. UNCERTAIN whether `lib/staking/kelly-investigation.ts` implements a Res≈0 check quantitatively or as a manual gate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **[OTHER — calibration/sizing, primary]:** This is the stake-sizing doctrine for the engine: quarter-Kelly default, zero stake without edge, RED-state probabilities never treated as verified. Serves the **calibration/sizing lane** directly — any unit-allocation logic (including the DFS Process System's staking and the X-post sizing) must route through `lib/tracker/staking.ts` and respect the rank-first-calibrate-second-size-third sequence.
- **[TRUST-SIGNAL]:** "Zero stake if no edge" plus the Res≈0 noise-amplification warning is a trust-signal rule: without a verified, calibrated edge, the engine should not size at all — it should not publish sizing. This is the internal counterpart of the public "play singles like a responsible adult" parlay stance.
- **[OTHER — flag for wiring]:** The file names the code but contains no numbers; the actual formulas, fractional-Kelly parameters, edge thresholds, and the Res≈0 gating implementation must be read from `lib/tracker/staking.ts` and `lib/staking/kelly-investigation.ts` before any wiring claim is made. INTAKE-ONLY here — do not claim Kelly is "wired" from this file alone.

## Engine-actionable? (yes/no + one-line what)
**Yes** — any sizing/staking work must use quarter-Kelly via `lib/tracker/staking.ts` with zero stake on no-edge and no RED-state p; first step is reading the two named code files to extract the actual formulas and gating.
