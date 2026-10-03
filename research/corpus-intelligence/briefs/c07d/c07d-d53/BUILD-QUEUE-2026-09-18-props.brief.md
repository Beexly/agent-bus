# ops/hermes/BUILD-QUEUE-2026-09-18-props.md
## What it is (1-2 sentences)
Hermes agent build queue (6 tasks) for the props lane as of 2026-09-18, issued by the architect session: `EVENT_ODDS_INGEST_ENABLED` and `LINE_ARCHIVE_ENABLED` went live, so the queue diagnoses whether paid Odds API prop-fetch credits are actually landing rows in `OddsLineSnapshot`, with the central hazard being a silent join-key mismatch on `game.externalId`.

## Key metrics/methods (formulas where given, else "not specified")
- **Credit cap:** `DEFAULT_EVENT_ODDS_CREDIT_CAP = 8` per cycle (overridable by `EVENT_ODDS_CREDIT_CAP`); events sorted kickoff-first so the cap does not starve late games. Never calls historical endpoints (10x cost). Never throws.
- **Pre-registration shape (8 fields, fixed):** hypothesis (1 sentence), exact feature definition, code hash, stratum list, kill line as a NUMBER with confidence level + n floor, family id for multiple-comparison control, **false-discovery level**, placebo spec. (An earlier 7-field draft omitting the false-discovery level is explicitly called out as the registry-integrity failure mode the mechanism prevents.)
- **Join-observability counters (per sport per cycle):** `eventsFetched`, `snapshotsKeyed`, `fixturesMatched`, `fixturesUnmatched`, `propRowsBuilt`, `propRowsPersisted`. Error-level log when `eventsFetched > 0` and `propRowsBuilt === 0` with literal string "paid for event odds and built zero prop rows".
- Verify block per code commit: `npm run typecheck` (exit 0), `npm run lint` (exit 0), `npx vitest run <test>` (green); final commit also `npm run guardrails` (26/26), ledger check allows only known M-1 violation. Two attempts per task, then BLOCKED.
- Pre-registration kill lines live under `docs/calibration-proposals/feature-trials/`; a loader (`preregistration.ts`, mainline task 12) refuses uncommitted files.

## Data sources named
- The Odds API event odds (books: `draftkings`, `fanduel`, `betmgm`; NFL markets `player_pass_tds`, `player_receptions`; NBA `player_points`)
- `OddsLineSnapshot` table (props persisted as free-string market e.g. `player_receptions|justin_jefferson`, no schema change; featured rows use enum-ish values)
- `packages/ingestion-pipeline/src/event-odds-ingest.ts` (fetch-only), `process-sport.ts:495` (`ingestEventOddsIfEnabled`), `process-sport.ts:1032-1038` (persistence via `toPropLineSnapshotRows` in `prop-line-rows.ts` → `captureLineSnapshotsIfEnabled`)
- `fixture-collapse.ts:65` (`isEspnExternalId`, used `:90-91`), `game-identity.ts` (identity rules; explicitly NOT `fixture-confirmation.ts`, which is the C-111 ledger schedule guard)
- `apps/web/lib/conviction/signals/prop-alignment.ts` (defensive prop-alignment signal; imports only `../gate-contract`)
- `apps/web/lib/fantasy/props.ts` (fictional demo pool; "Silas Hart" at `:169`) imported by 3 production modules: `components/fantasy/props-edge.tsx`, `components/fantasy/pickem-ranker.tsx`, `app/fantasy/props/page.tsx`
- `packages/prediction-engine/src/edge-lab/props-*` (~30 files, hierarchical-Bayes props stack, exported from barrel, **no production consumer**)
- Architecture doc `docs/architecture/2026-09-18-signal-architecture.md` (Track F item F8 pre-registration shape; Track A item A12 capture-freshness monitor file `apps/web/lib/data-reliability/capture-freshness-manifest.ts`)
- 26 guardrails; ledger `docs/ops/AGENT_LEDGER.md` (known M-1 violation: owner `motif`, outside allowed set, red on main too)

## Findings (numbers and facts, not vibes)
- Props flags went live 2026-09-18 after a 6-day contradiction in the standing notes (AGENTS.md:776-777 said on, :437 said inert); founder confirmed both on.
- The architect's core hazard: `process-sport.ts:1032` joins on `game.externalId`; event-odds snapshots are keyed by The Odds API event id; FIXTURE TRIPLICATION means one NFL fixture exists as THREE `games` rows — one with the odds-api id, two with `espn:americanfootball_nfl:` and `espn:nfl:` ids. An ESPN-id row yields `.get()` → `undefined` → `propRows = []` → nothing persisted while the fetch credit was paid. Silent: no error, no log, no counter.
- Prop-alignment demo-pool audit: `prop-alignment.ts` does NOT import the fictional pool (only `../gate-contract`; the `:28` mention is a comment warning). The conviction gate has zero importers outside its own directory, so no fictional row reaches a pick; Task 3 pins this with a transitive import-guard test, scoped to `apps/web/lib/conviction/**` (the 3 known production importers of the demo pool are fantasy UI surfaces with an honesty badge — out of scope).
- Pin: `prop-alignment` must return `null` (never neutral/zero vote) on empty/absent prop set — "A null is not a vote. A neutral is." This distinction is load-bearing.
- Structural trap (restated): a new cross-package import into `apps/web/lib/board/state.ts` or the picks route resolves to `undefined` under 22 partial mocks of `@sports/prediction-engine` and collapses the board; `packages/*` must never import `apps/web`; `@sports/types` is the crossing boundary.
- Task 6: the line archive died silently for 3 weeks in August because a catch swallowed the failure and the only signal was a row count; `odds_line_snapshots` freshness had no monitor at queue-writing time. Eight single-purpose monitors already exist in the data-reliability directory; the queue forbids building a 9th parallel file — props rows become ONE family inside `capture-freshness-manifest.ts` (mainline task 8).
- Done-state of the whole run: 6 ledger rows DONE (real SHA) or BLOCKED (pasted error); typecheck, lint, 26/26 guardrails; only ledger violation is pre-existing M-1; no flag/schema/published-number/demo-row movement. One honest ledger sentence required answering: is anything landing in the paid-for table.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **(TRUST-SIGNAL)** Props line-capture is the raw material for trust-target intake: real `player_receptions|justin_jefferson`-style snapshot rows keyed by external id let the engine compare its own prop-model outputs against book lines. Until the join-key question (Task 1/2) is answered, any prop-calibration program must treat the archive as possibly-empty — a silent empty archive would masquerade as "props offer no edge."
- **(SCHEME)** The `player_pass_tds` and `player_receptions` NFL markets are exactly the book-facing surface of QB-behavior profiles: QB pass-TD prop lines encode the market's read of QB aggression/coaching tendencies, making them calibration inputs for the QB-behavioral program (model vs. market disagreement flags).
- **(OTHER — calibration/sizing program)** The 8-field pre-registration shape (kill line as a NUMBER with confidence level + n floor, false-discovery level, placebo spec) is the intake gate any prop signal must pass before touching a pick; the false-discovery-level field is the multiple-comparison control that keeps the prop lane from mining 30 markets into spurious "findings."
- **(OTHER — integrity/program hygiene)** The demo-pool guard is a trust boundary: fictional rows must never reach gates, features, or training rows. The `null`-not-neutral pin is a decision-theoretic convention the conviction chain relies on.
- **(OTHER — data plumbing)** The ESPN-vs-Odds-API external-id mismatch is a fixture-identity defect affecting any lane that joins by `externalId` — the same triplication would hit coaching/scheme data joins if they use the same key, so game-identity resolution is shared infrastructure risk.

## Engine-actionable? (yes/no + one-line what)
**Yes** — verify (read-only tool for the founder to run, per queue constraints) whether `fixturesMatched > 0` for NFL event odds, because the whole props-calibration lane is moot if the join misses on all triplicated fixtures and credits burn silently.

## References named in file
- `docs/architecture/2026-09-18-signal-architecture.md` (Track F item F8; Track A item A12)
- `docs/ops/AGENT_LEDGER.md`; `docs/ops/proposals/`; `docs/calibration-proposals/feature-trials/`
- `AGENTS.md`, `CLAUDE.md` (laws 2, 3, 7, 9); `edge-lab/trials-registry.ts` (`TrialInput` `:35-47`)
