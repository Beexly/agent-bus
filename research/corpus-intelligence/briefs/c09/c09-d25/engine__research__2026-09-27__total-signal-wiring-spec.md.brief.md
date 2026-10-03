# engine/research/2026-09-27/total-signal-wiring-spec.md
## What it is (1-2 sentences)
The standing spec for GSE's total-signal doctrine: every signal (on-field, off-field, nutrition, psychology, cognitive) maps to an explicit, logged projection adjustment. It audits the 2026-09-27 repo state (what's wired, what's missing) and gives a 6-step build order plus a taxonomy of 7 adjustment-rule families.
## Key metrics/methods (formulas where given, else "not specified")
Rule shape: TRIGGER → AFFECTED → DIRECTION → MAGNITUDE → LOG. Magnitudes are calibration tasks solved by backtest, not set in the spec ("the spec fixes the shape, backtests fix the numbers"). Standing rules: every adjustment logged with its trigger (signal-lineage table as receipt); a rule that can't prove itself in backtest doesn't ship.
## Data sources named
nflverse adapter (`lib/data-sources/nflverse.ts`), Sleeper market signals, data-sources catalog + router, `lib/picks/signal-lineage.ts`; `game_signals` table (5,142 rows); DFS optimizer (exact branch-and-bound, k-best, diverse pools, late swap, correlation GPP layer, exposure control, payout sim).
## Findings (numbers and facts, not vibes)
- Wired: nflverse adapter, Sleeper market signals, catalog/router, signal lineage; `game_signals` = 5,142 rows; optimizer is real, on origin/main, no mocks.
- Gaps: **zero injury→projection logic**; player-level `signals` table has **0 rows** (prop pipeline unfueled); no nutrition/psychology/cognitive ingestion; optimizer runs on illustrative sample slate — `registerDfsSlateProvider` never called in prod.
- Rule families: (1) OL injuries: starting LT/C out → QB efficiency down, RB yards-before-contact down, RB checkdown share up, team pass rate down; (2) secondary injuries: starting S/CB1/CB2 out → opposing QB/WR/TE up, that DST down, opposing implied total up; (3) pass-rush injuries: starting EDGE out → opposing time-to-throw up → QB/WR up slightly; (4) depth-chart movement: elevation/bellcow tags move volume to that player, teammates' target share down; (5) weather: wind/precip/cold → pass volume down, run rate up; (6) game script: big spreads → trailing-team pass volume up (4th-quarter trailing volume discounted — not role change), leading-team run rate up; (7) off-field: intake starts with measurable proxies (injury-report participation, travel distance, rest days).
- Build order: lock projection source (Garrett's call) → live DFS slate provider → adjustment layer v1 (rules 1–4) → fill player signals table → off-field intake → backtest every rule before live use.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL (explicit rule: LT/C out → QB efficiency / RB yards-before-contact / team run-pass mix adjustments)
- QB-BEHAVIOR (checkdown-to-RB share rises under pressure; QB time-to-throw reacts to opposing EDGE injuries)
- SCHEME (run/pass mix and game-script volume shifts encode offensive playcalling response)
- COACHING (bellcow tagging — e.g. "Dowdle's out so Warren's the bellcow" — is a coaching personnel decision)
- OTHER (project-management: build order; doctrine that the engine is built to be smartest, not to beat books)
## Engine-actionable? (yes/no + one-line what)
Yes — this is the master handoff contract for the wiring program: build the adjustment layer v1 (injury/depth-chart rules 1–4) and fill the 0-row player signals table per the 6-step order.
