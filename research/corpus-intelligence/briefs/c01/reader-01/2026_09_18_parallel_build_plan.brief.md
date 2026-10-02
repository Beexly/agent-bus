# architecture/2026-09-18-parallel-build-plan.md
## What it is (1-2 sentences)
The GSE engine's parallel build plan (superseding the serial 19-step architecture of 2026-09-18-signal-architecture.md): 7 concurrent tracks, 76 no-bump work items, re-adjudicating 81 signal-registry rows into BUILDING-NOW (47), CAPTURING-NOW (9), SHADOW-NOW (8), FOUNDER-BLOCKED (10), KILLED (7). The core doctrine: the certification/honesty gate constrains only what number reaches a customer, never what is built, captured, computed, or instrumented.
## Key metrics/methods (formulas where given, else "not specified")
- Offset-logistic head (F-1): market logit enters as a FIXED OFFSET, not a penalized coefficient — null hypothesis is literally the market (supersedes the confidence-vector logistic head).
- Hierarchical shrinkage: global → sport → sport-by-market (F-2).
- Walk-forward splitter requires a fixture group key (F-3); certification is fixture-clustered (F-5); pre-registration with git-ancestor verifier (F-10); hash-chain-verified trials registry (F-12).
- Key killing measurements (named, not formulas): legacy composite confidence killed — at 80+, n=235, claims .8663, realizes .5191, z=-10.7. Pressure-to-sack conversion killed — conversion luck explains under half a percent of outcome variance. Isotonic calibrator killed — a monotone map cannot invert a non-monotone score.
- Promotion proof rule: a gate's withheld set must grade worse than its kept set over at least 100 fixture-clustered decisions (D-6 starts that record; the decision record had been dead 94 days).
- Capture pacing: injuries reach 100 games around Week 7; weather (9–10 outdoor games/week) reaches it around Week 10–11; basketball produces no rows until mid-October season start.
- E-3 finding: the six-hourly calibration cron rewrote settled rows' stored independent probability with non-as-of inputs — any model fitted on that column is "fitting on the answer."
## Data sources named
nflverse (game-id crosswalk CAP-5a), Statcast registry, NFL tracking data (needed but not held — blocks scheme/coverage/box-count signals), injury feeds, weather feeds, officials datasets, beat/coach reports (absent source — founder-blocked), vendor charted metrics (not held), exchange prices (developer-agreement restriction), public money splits (no cleared consensus source), news feeds.
## Findings (numbers and facts, not vibes)
- 81 registry rows: 64 of 81 active; 10 founder-blocked with named blockers (e.g., "Scheme, coverage, box counts" blocked on lacking tracking data; "Interception-worthy rate" share-alike licensed, founder rules; beat/coach reports have no real per-team feed URLs).
- 7 killed rows each name the killing measurement or structural rule (list in methods above; also: market-regressed public rating, stake sizing on public surfaces, social sentiment for the engine).
- 22 files partially mock the engine package (standing doc says 19 — flagged drift).
- Orphan persisters: `apps/web/lib/ingestion/team-week-stats.ts` and `rush-tendencies.ts` are complete, tested modules with no caller; wiring into the 07:15 cron is a one-line change each.
- Book-depth term scales with book count and saturates only above the ideal-book threshold (not constant).
- Shadow-evidence factors carry weight hardcoded to zero and never enter the confidence sum (`packages/prediction-engine/src/scoring.ts:142-158, :576-584`); 8 of 15 `PickSignalSnapshot` flags are structurally false.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: drive-outcome totals model, efficiency split (dropback vs rush) ingester + garbage-time filter (TC-3, TC-4, TC-7), opponent-adjusted efficiency ratings V2 (TC-5).
- OL: pressure-to-sack conversion KILLED — conversion luck explains <0.5% of outcome variance (do not model conversion rate as skill).
- COACHING: officials ingester/beat-and-coach report lanes (CAP-5b, D-11) — INFERENCE: officials + narrative lanes feed coaching/situational tendency profiles once captured.
- OTHER: measurement/calibration machinery (offset-logistic head, fixture-clustered certification, capture-now doctrine).
## Engine-actionable? (yes/no + one-line what)
Yes — the offset-logistic head (market-as-null), fixture-clustered walk-forward with 100-decision promotion gates, and the E-3 as-of leakage audit are directly adoptable calibration/training rules; the drive-outcome totals + dropback/rush efficiency split is the concrete new-model lane to wire.
