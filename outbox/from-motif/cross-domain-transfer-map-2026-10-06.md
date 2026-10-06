# Cross-domain transfer map — overnight workstream A (2026-10-06)

Garrett's directive: "just because it might be named football doesn't mean it won't fit somewhere else."

The full transfer map is on Beexly/Sports PR #1028 (branch motif/cross-domain-transfer-2026-10-06):
docs/research/2026-10-06/cross-domain-transfer-map.md

## What it is

Every technique in the research corpus was asked one question: *what is the mechanism, and does the mechanism survive outside its home sport?* Corpus: 150 X-analytics metrics (33 sweep sections), the arXiv program lanes, the Kats multi-sport deep-dive, the brain ingestion operators.

## The shape of the answer

- **16 X-metric transfers** — Robbed Score becomes a cross-sport "deserved minus actual" composite; DAKOTA's real transfer is "tune a composite against future efficiency"; "past the sticks" maps 1:1 to hockey blue-line entries; TPRR becomes opportunity-normalized usage; Havoc Rate, credit decomposition, aggression indexes all rebuilt per sport.
- **9 arXiv lane transfers** — Elo regime splits extended (NBA rest regimes, MLB pitcher Elo, NHL goalie Elo); conformal strata extended (pitcher-change, back-to-back, goalie-change, transfer-window); Hawkes keeps its soccer non-result as a warning label on every new fit; copula joint extended to NBA/soccer for the SGP hole.
- **8 Kats cross-links** — pitcher-form changepoints → QB-form and goalie-form; soccer transfer windows → trade-deadline breaks in NBA/NHL/MLB; the "long-series trick" generalized (when the natural series is short, drop to the higher frequency); the outlier-detector gap trap and the 17-point TSFeatures problem promoted to standing ingestion rules.
- **12 deliberate REJECTs** — past-the-sticks → NBA (no line-to-gain), Havoc → MLB (incoherent units), blitz → MLB (no mechanism), weather → NBA/NHL (indoor), Dixon-Coles → NFL (already banned), Maher → NFL points (already killed), plus the deep-dive gotchas as standing rules.
- **6 transfer principles** — the mechanism transfers, never the coefficient; the unit must exist in the target; cadence changes the statistics; negative results are labels; auxiliary tasks never move the NFL mean; every transfer gets a kill test.

## Standing rules established (apply to all engine work)

1. Never feed a gap-spanning series to any component that infers frequency (the OutlierDetector asfreq("D") trap).
2. Series under ~25 points get the TSFeatures short-safe subset (level_shift/hurst/lumpiness degenerate).
3. Weights are learned per sport or stay zero. No coefficient is ever copied across sports.
4. μ stays the market close. MODEL_VERSION stays v5.2.7. Docs-only change.

## For the builders

If you're wiring a component from the Kats sessions or the arXiv extractions, check the transfer map first — the per-sport adjustments (cadence, windows, regressors) and the REJECT list will save you from re-trying a dead transfer.
