# ops/hermes/BUILD-QUEUE-2026-09-18-props.md
## What it is (1-2 sentences)
Architect-issued 6-task build queue for Hermes on 2026-09-18, triggered because prop ingest went live (`EVENT_ODDS_INGEST_ENABLED` and `LINE_ARCHIVE_ENABLED` on) and paid Odds API credits were being spent with no proof rows land. Tasks: make the silent prop join failure observable, enumerate the join-key mismatch statically, prove the demo prop pool cannot reach the live path, build a shadow-only consumer for the hierarchical-Bayes props stack, write (not run) prop-market pre-registrations, and add prop-capture freshness monitoring.
## Key metrics/methods (formulas where given, else "not specified")
- Credit cap: `DEFAULT_EVENT_ODDS_CREDIT_CAP = 8` per cycle, overridable via `EVENT_ODDS_CREDIT_CAP`; event ids sorted kickoff-first so the cap does not starve late games. Historical Odds API endpoints cost 10x and are never called.
- Per-cycle observability counters per sport: `eventsFetched`, `snapshotsKeyed`, `fixturesMatched`, `fixturesUnmatched`, `propRowsBuilt`, `propRowsPersisted`. Error-level log when `eventsFetched > 0` and `propRowsBuilt === 0` with the words "paid for event odds and built zero prop rows".
- Pre-registration shape (architecture Track F item F8): EIGHT fields — hypothesis (one sentence), exact feature definition, code hash, stratum list, kill line as a NUMBER with confidence level and n floor, family id for multiple-comparison control, false-discovery level, placebo spec.
## Data sources named
- The Odds API: books `draftkings`, `fanduel`, `betmgm`; markets `player_pass_tds` and `player_receptions` (NFL), `player_points` (NBA).
- `OddsLineSnapshot` table — props persist with no schema change because `market` is a free string (e.g. `player_receptions|justin_jefferson`); featured rows use enum-ish values.
- `apps/web/lib/conviction/signals/prop-alignment.ts` (prop-alignment conviction signal; header warns of a demo pool with fictional player "Silas Hart" in `apps/web/lib/fantasy/props.ts`).
- Hierarchical-Bayes props stack: ~30 files under `packages/prediction-engine/src/edge-lab/props-*`, exported from package barrel, no production consumer.
- Static join-key predicates: `fixture-collapse.ts:65` `isEspnExternalId` and `game-identity.ts` identity rules.
## Findings (numbers and facts, not vibes)
- FIXTURE TRIPLICATION: one NFL fixture exists as THREE `games` rows — one carrying the Odds API event id, two carrying `espn:americanfootball_nfl:` / `espn:nfl:` ids. `process-sport.ts:1032` joins event-odds snapshots on `game.externalId`, so on ESPN-id rows the lookup returns `undefined`, persists nothing, and silently wastes paid credits. No error, no log, no counter.
- The ingest module `event-odds-ingest.ts` is FETCH-ONLY by design ("Persistence is the caller's job"); persistence implemented at `process-sport.ts:1032-1038` via `toPropLineSnapshotRows` → `captureLineSnapshotsIfEnabled`.
- `prop-alignment.ts` does NOT import the fictional pool (only imports `../gate-contract`; the :28 mention is a comment warning). The conviction gate has zero importers outside its own directory — no fictional row can reach a pick today. Guard exists to keep it that way.
- Line archive died silently for three weeks in August because a catch swallowed the failure; nothing monitors `odds_line_snapshots` freshness.
- Constraints: no DB access, no flag reads/flips, no schema change, no `MODEL_VERSION` bump, no publish, `packages/*` must never import `apps/web`, no new cross-package import into `apps/web/lib/board/state.ts` or the picks route (22 partial mocks would resolve to `undefined` and collapse the board), ledger row M-1 red (owned by motif), guardrails 26/26.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the demo-pool guard (fictional rows must never reach real picks) and the pre-registration kill-line discipline are honesty/trust mechanics.
- OTHER: ops-only — credit-spend observability, freshness monitoring, capture pipeline wiring.
## Engine-actionable? (yes/no + one-line what)
Yes — the 8-field pre-registration shape is the standard any prop-trial loader must read/write (props markets run before mainline's loader lands, so the shape must be complete now), and the shadow-only props consumer design (consume persisted rows, never call the Odds API, no-op on zero rows, no `packages/*` → `apps/web` imports) is the safe pattern for activating the 30-file HB props stack.
