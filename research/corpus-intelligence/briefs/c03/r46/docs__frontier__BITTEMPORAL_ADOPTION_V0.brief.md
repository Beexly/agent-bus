# docs/frontier/BITTEMPORAL_ADOPTION_V0.md
## What it is (1-2 sentences)
Design record for a bitemporal adoption layer (v0 code-complete, reviewed as pure in-memory code in `packages/epistemic-twin/src/as-of.ts`, PR #139, not yet merged to `main`) that separates valid time (`observedAt`) from transaction time (`recordedAt`) for the epistemic twin's operational truth, preventing hindsight leaks like the `/nflverse` OOM-500 incident where `/api/health` reported healthy.
## Key metrics/methods (formulas where given, else "not specified")
- Every `TwinObservation` carries `observedAt` (valid time) and `recordedAt` (transaction time); invariants enforced loudly via `TwinObservationError`: (1) both must be valid Dates, (2) `recordedAt >= observedAt`, (3) nested `evidence.observedAt` must be valid and must not postdate `recordedAt`.
- Cut function `foldObservationsAsOf(observations, asOf, mode)` with three `AsOfMode`s: `"transaction"` (`recordedAt <= asOf` — what the system knew), `"evidence"` (`observedAt <= asOf` — what had happened, hindsight view), `"both"` (default; both conditions).
- Test-pinned proposition: under invariant 2, `"both"` and `"transaction"` select identical sets for valid input.
- Fold law (winner selection): latest `observedAt` wins; ties → latest `recordedAt`; full ties → later input element (append-order). Most-recent-**evidence**-wins, NOT last-write-wins.
- Freshness decay is evaluated at the reconstruction point: `composeGraphAsOf` runs the frozen `composeGraph` with `now = asOf`; evidence stale relative to `asOf` composes unknown exactly as it would have live; capabilities with no visible observation compose unknown with `no_observation_as_of:<id>` ("absence of coverage is not green").
- No `Date.now()` anywhere — `asOf` is always a parameter; v0 importable without DB, clock, or network.
- 138+ tests pin the composition and as-of laws as of the latest review pass.
## Data sources named
None external — internal epistemic-twin constructs (`TwinObservation`, `CapabilityTemplate`, `templatesFromSeed`, OP-003 wire form, `adapt-op003.ts`); companion contract `OPERATIONAL_EPISTEMIC_TWIN_CONTRACT.md` (lands with PR #134).
## Findings (numbers and facts, not vibes)
- Motivating incident: `/nflverse` OOM-500'd while `/api/health` said healthy; single-timestamp postmortem conflates "true at 12:00" vs "known at 12:00" (the probe saw the outage at 12:03).
- Adversarial review of PR #139 found corrupt rows (NaN timestamps) would otherwise validate and then vanish or win at arbitrary cuts — hence loud validation.
- v0: pure, dark, in-memory — no persistence, no consumers. Persistence is FOUNDER-GATED Phase 1: append-only Prisma `CapabilityObservation` table (`capabilityId`, `observedAt`, `recordedAt DEFAULT now()`, status/evidence payload, `deploymentSha`); corrections are new rows with later `recordedAt`; Phase 2 index strategy (BRIN on `recordedAt`, GiST if range-overlap queries materialize) is PARKED.
- Non-goals: no auto-remediation, no new alerting, no status-enum migration, no `/api/health` wiring until #135 + #137 merge, no persistence until the Phase-1 gate opens.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hindsight-leak prevention via valid/transaction-time separation → [TRUST-SIGNAL: walk-forward discipline extended from predictions (`PickSignalSnapshot` pre-lock) to operational truth]
- Loud `TwinObservationError` validation + append-only Phase 1 design → [TRUST-SIGNAL: tamper-evident, reconstructable audit trail — honest incident timelines]
- Latest-`observedAt`-wins fold law + no-data-composes-unknown → [TRUST-SIGNAL: late backfills of old evidence can't overwrite newer evidence; "absence of coverage is not green"]
- All 138+ tests pinned pre-merge; merge/consumer/persistence all gated → [OTHER: adoption-ladder status]
## Engine-actionable? (yes/no + one-line what)
yes — adoption-ready design for the operational twin: merge PR #139 + #137, founder-gate Phase 1 persistence (append-only `CapabilityObservation`), then wire as-of incident reconstruction so `/api/health` green vs probe-dead discrepancies are auditable; do not build Phase 2 indexes.
