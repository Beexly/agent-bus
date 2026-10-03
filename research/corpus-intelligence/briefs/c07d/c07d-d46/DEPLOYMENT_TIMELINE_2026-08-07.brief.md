# ops/DEPLOYMENT_TIMELINE_2026-08-07.md

## What it is (1-2 sentences)
Minute-by-minute deployment log of the 2026-08-07 evening (CDT): a PR #373 autonomy-allow-list deploy failed on a TypeScript error, production was held on the prior good SHA, and a fix commit restored a Ready state with 5 autonomy action paths live — plus the exact failure diagnosis.

## Key metrics/methods (formulas where given, else "not specified")
No formulas or metrics. Discrete events and parameters:
- Timeline (approx, CDT): ~28m earlier — `cd61502d` (waitlist + free-spine + webhook) Ready (prod), last known-good before allow-list; ~3m — `6c9c848` fix/autonomy-allowlist-sot (PR #373 preview) Error (type error build); ~3m — `48756564` #373 squash → main Error (same `RUN_GENERATE_DRAFTS` not on `AutonomyActionKind`); concurrent — redeploy of `cd61502d`, Building → Ready, production stayed on prior good SHA; ~9:29p — `e9bc3c48` action-kind fix Ready (prod), unblocked #373, 5-path allow-list live.
- Founder env: `PUBLIC_PICKS_ENABLED=true` — gate open, but surface still kill-switch dark until oddsInserted SUCCESS.
- Post-fix production: SHA `e9bc3c48…`, Autonomy EXECUTE, 5 safe targets, public picks gate ON, `/api/picks` 503 `stale_data` until an odds-inserting run lands within the 240m SLA.
- Failure verbatim: `execute-autonomy-cycle.ts` type error — `'RUN_GENERATE_DRAFTS' does not exist in type Partial<Record<AutonomyActionKind, string>>`. Root cause: "Allow-list SoT listed 5 crons; TypeScript union only had 3 execute kinds. Fix: extend `AutonomyActionKind` + planner queue."

## Data sources named
None (deployment/infra log; no data source named).

## Findings (numbers and facts, not vibes)
1. Three SHAs involved: `cd61502d` (last known-good), `6c9c848` (PR #373 preview, build error), `48756564` (#373 squash to main, same error), resolved by `e9bc3c48` (action-kind fix, ~9:29 PM CDT, Ready in prod).
2. The #373 failure was a type-level mismatch: the allow-list source of truth listed 5 cron actions but the `AutonomyActionKind` TypeScript union only defined 3 execute kinds; `RUN_GENERATE_DRAFTS` was referenced but absent from the union.
3. Fix: extend `AutonomyActionKind` and the planner queue; after fix, the 5-path autonomy allow-list went live with Autonomy EXECUTE and 5 safe targets.
4. During the failure window, production never moved: a concurrent redeploy of `cd61502d` kept prod on the prior good SHA (zero-downtime posture — the broken build never served).
5. Public picks gate `PUBLIC_PICKS_ENABLED=true` was ON at the env level, but the surface stayed kill-switch dark until oddsInserted reached SUCCESS — gate-on does not mean content-live.
6. `/api/picks` served 503 `stale_data` until an odds-inserting run completed within the 240-minute freshness SLA — the freshness SLA is 240m.
7. The file records "founder" as the actor who set the public-picks env var — an example of a founder-only gate flip.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Deployment incident log, not a behavioral or modeling study; serves no model lane directly (QB-behavioral, coaching, OL, trust-target intake, calibration/sizing, tracking). Two mechanism-level lessons transfer: (a) the allow-list SoT vs type-union mismatch is the same class of bug as calibration gates drifting from their documented definitions — any gate documented in ops must be type-enforced, not just documented; (b) the "gate ON but surface dark until oddsInserted SUCCESS" pattern is the kill-switch honesty doctrine also seen in the close-out matrix — public surfaces never go live on env-flag alone, which is the mechanism that protects every model lane from publishing on stale inputs.
- OTHER — The 240m `stale_data` SLA is a freshness parameter the engine's data-lane specs can reuse: any model consuming odds inputs should inherit the same staleness definition.
- No CONTRADICTION with other files (consistent with gate discipline elsewhere). UNCERTAIN: none material — this is a factual incident log.

## Engine-actionable? (yes/no + one-line what)
No — one line: incident log with no reusable model/calibration parameter beyond the already-captured 240m freshness SLA pattern.

### Referenced files, papers, datasets
- `execute-autonomy-cycle.ts` (failure site)
- PR #373 (autonomy allow-list SoT)
- No papers or datasets named.
