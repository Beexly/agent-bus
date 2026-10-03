# docs/fable/validation/LEAKAGE_CHECKLIST.md
## What it is (1-2 sentences)
A 6-item target-leakage checklist for GSE/FABLE prediction pipelines, specifying what future/derived information must not appear in training features or feature derivation.

## Key metrics/methods (formulas where given, else "not specified")
not specified — checklist, no formulas.

## Data sources named
none (refers generically to training windows, market data, settlement results, source freshness timestamps, same-game targets, player/team IDs).

## Findings (numbers and facts, not vibes)
- 6 checks: (1) no future injury/status data in training window; (2) no post-market movement in market-open features; (3) no settlement result in feature derivation; (4) no source freshness from after prediction time; (5) no same-game target leakage; (6) no player/team IDs used as memorization shortcuts without holdout.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No QB/coaching/OL/scheme/trust-signal content present. [OTHER]
- SCHEME (INFERENCE): same-game target leakage check is scheme-relevant — game-context features must not leak outcome information. [OTHER]

## Engine-actionable? (yes/no + one-line what)
yes — wire these 6 leakage checks into the engine's feature/build gate before any backtest or calibration run is trusted.
