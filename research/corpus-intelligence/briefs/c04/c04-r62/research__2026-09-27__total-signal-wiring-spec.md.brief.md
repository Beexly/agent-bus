# docs/research/2026-09-27/total-signal-wiring-spec.md
## What it is (1-2 sentences)
Garrett Baxley's spec (2026-09-27) for the GSE engine's "total-signal" doctrine: ingest every signal (on-field, off-field, nutrition, psychology, cognitive) and map each to an explicit, logged projection adjustment via the rule shape TRIGGER → AFFECTED → DIRECTION → MAGNITUDE → LOG; every signal ends in an adjustment to a number, never vibes.
## Key metrics/methods (formulas where given, else "not specified")
No formulas — magnitudes are deliberately left as calibration tasks for backtests; the spec fixes the shape (TRIGGER→AFFECTED→DIRECTION→MAGNITUDE→LOG), not the numbers. Seven adjustment rules defined directionally (no magnitudes given):
1. **OL injuries (Garrett's example):** starting LT or C out/doubtful, backup starting → QB passing efficiency DOWN slightly; RB yards-before-contact DOWN; checkdown/target share to RB UP slightly (pressure outlet); team pass rate DOWN a tick; LOG lineman, replacement, snap counts.
2. **Defensive secondary injuries (Garrett's example):** starting S or CB1/CB2 out → opposing QB pass yards/TD UP; opposing WR1/WR2/TE UP; that DST projection DOWN; opposing offense implied total UP slightly; LOG who is out, replacement, coverage responsibility.
3. **Pass-rush injuries:** starting EDGE out → opposing QB time-to-throw UP → opposing QB/WR UP slightly (mirror of rule 2 for the front seven).
4. **Skill-position depth chart movement:** RB/WR/TE elevated to starter, snap-share jumps, bellcow tags (e.g., "Dowdle's out so Warren's the bellcow") → that player's volume projection UP; teammates' target share DOWN.
5. **Weather:** sustained wind thresholds, precipitation, extreme cold → pass yards/attempts DOWN, kick distance DOWN, run rate UP. (Already a DFS gate; encode here.)
6. **Game script / Vegas:** large spreads, high/low totals → trailing-team pass volume UP (with garbage-time discount: 4th-quarter trailing volume is NOT a role change); leading-team run rate UP.
7. **Off-field signals:** nutrition, sleep/travel, psychology, cognitive load; intake starts with what's measurable (injury report participation, travel distance, rest days) before anything exotic.
## Data sources named
- Repo audit 2026-09-27: `lib/data-sources/nflverse.ts` (nflverse adapter), Sleeper market signals, data-sources catalog + router, `lib/picks/signal-lineage.ts` (signal lineage tracking)
- Existing pipeline: DFS optimizer (exact branch-and-bound, k-best, diverse pools, late swap, correlation GPP layer, exposure control, payout sim vs simulated field), `registerDfsSlateProvider` (never called in prod — sample-slate fallback)
## Findings (numbers and facts, not vibes)
- Verified wired state: `game_signals` = 5,142 rows; optimizer real on `origin/main`, no mocks; signal sources + lineage wired.
- The gap (missing): NO adjustment layer — zero injury→projection logic in the codebase (nothing maps "LT out" → "shift RB/QB usage", nothing maps "starting safety out" → "bump opposing QB/WR"); player-level `signals` table = 0 rows, so the prop pipeline has no fuel; no nutrition/psychology/cognitive ingestion; optimizer runs on the illustrative sample slate with no live DFS provider registered.
- Standing rules enforced by this spec: check the repo BEFORE building; real engine data over mocks; every adjustment logged with its trigger (lineage table is the receipt); Garrett explains a rule once, it lives here after that.
- Build order (Garrett's total-signal order): (1) lock projection source (his call, open); (2) register live DFS slate provider; (3) adjustment layer v1 (rules 1–4, highest-leverage); (4) fill player `signals` table; (5) off-field intake; (6) backtest every rule against historical slates before it touches a live projection — a rule that can't prove itself in backtest doesn't ship.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OL (HIGH):** Rule 1 is an explicit OL→QB/RB adjustment mapping — LT/C out = QB passing efficiency down slightly, RB yards-before-contact down, checkdown share to RB up as pressure outlet, pass rate down; lineage logs lineman, replacement, snap counts. This is the engine's OL injury-adjustment contract.
- **QB-BEHAVIOR:** Rule 2/3 are QB-facing behavioral adjustments (secondary/EDGE injuries bump opposing QB pass yards/TD and time-to-throw); rule 4 (bellcow tags, snap-share jumps) and rule 6 (garbage-time discount on 4th-quarter trailing volume — explicitly NOT a role change) are behavioral-pattern guards against misreading usage.
- **COACHING / SCHEME:** rule 6 encodes coaching play-calling response to game script (leading-team run rate up, trailing-team pass volume up) — scheme adjustment logic, not a fact about one coach.
- **TRUST-SIGNAL:** the lineage requirement (every adjustment logged with trigger; "Garrett explains a rule once, it lives here") is an audit/receipt mechanism → OTHER (engineering discipline), not a trust-in-QB signal.
## Engine-actionable? (yes/no + one-line what)
Yes — this IS the engine build contract: build the adjustment layer v1 (rules 1–4) against the logged rule shape, backtest before shipping, and fill the player signals table.
