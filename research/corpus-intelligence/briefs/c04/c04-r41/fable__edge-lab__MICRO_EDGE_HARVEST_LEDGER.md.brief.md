# docs/fable/edge-lab/MICRO_EDGE_HARVEST_LEDGER.md
## What it is (1-2 sentences)
A 23-row candidate ledger of micro-edge hypotheses for the engine, each mapped to a source type, the metric it affects, a decision (test / hold / needs data / needs legal review / needs owner decision), and an explicit falsification rule.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas; each row names a metric affected and a falsification rule instead)
## Data sources named
public/source metadata, public injury report, public transactions, schedule facts, schedule/weather/venue facts, public depth chart, public odds/event time, public consensus snapshots, model outputs, model/replay, "safe football segments", public/manual claim log, public facts + fixture, public play data, model probabilities, public roster/depth, public injury reports, licensed odds
## Findings (numbers and facts, not vibes)
- 23 candidate edges; 13 marked "test", 2 "hold", 3 "needs data", 3 "needs legal review", 2 "needs owner decision".
- Football-relevant candidates: "source freshness decay" → projection staleness (test; falsify if no degradation signal after replay windows); "public injury-report timing delta" → availability adjustment (test; falsify if no lift vs same-day baseline); "roster transaction shock score" → role projection (test; falsify if shock bucket has no error separation); "schedule fatigue/rest asymmetry" → team efficiency (test; falsify if rest delta not stable out-of-sample); "travel/body-clock/weather/turf interaction" → pace and efficiency (needs data; interaction unstable below sample floor); "depth chart instability" → player role confidence (test; falsify if instability does not widen residuals); "calibration degradation after roster shock" → calibration, Brier-delta falsification rule (test); "team/position-specific drift" → drift monitor (test); "coach tendency shift after injuries" → scheme tendency (test; falsify if post-injury tendency not stable); "offensive-line continuity proxy" → pressure/rush proxy (needs data; proxy unavailable or stale); "defensive personnel volatility proxy" → defensive efficiency (needs data; volatility not measurable); "late-week practice participation trajectory" → availability (needs legal review; source terms block storage); "player role elasticity after transaction shock" → player usage (test; falsify if no predictive value).
- Market-data candidates blocked on data/legal: "market movement versus public event timestamp" (hold — movement cannot be timestamped lawfully); "stale consensus penalty" (needs legal review — consensus source cannot be stored); "book-to-book dispersion as uncertainty proxy" and "crowding/steam reversal detection" (needs owner decision — licensed odds cost/license block).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "coach tendency shift after injuries" → COACHING
- "offensive-line continuity proxy" → OL
- "public injury-report timing delta", "late-week practice participation trajectory" → TRUST-SIGNAL (INFERENCE: availability timing as a trustable signal about who plays/role)
- "schedule fatigue/rest asymmetry", "travel/body-clock/weather/turf interaction" → SCHEME (INFERENCE: game-environment edge affecting pace/efficiency)
- "team/position-specific drift" → SCHEME (INFERENCE: scheme drift monitor; could include position-level usage drift)
- Depth-chart/transaction shock candidates → OTHER (role projection/usage modeling)
- Market-data candidates → OTHER (market infrastructure, not football behavior)
## Engine-actionable? (yes/no + one-line what)
yes — 13 "test" candidates are ready to run as engine experiments with pre-defined falsification rules, and 3 "needs data" rows (OL continuity proxy, defensive personnel volatility, travel interaction) name concrete data gaps the engine should fill.
