# docs/ops/EXACTLY_ONCE_RUNTIME.md
## What it is (1-2 sentences)
A 2026-07-22 implementation pass (Track A + Track B + versioned envelope, on a draft branch, NOT_MERGED) adding exactly-once control-plane event infrastructure: an append-only `control_event_ledger` folded into the state machine's own atomic SQL statements, a `processed_event` sink gate, and a detection-only formal-receipt cron that flags CTI violations (e.g., GE2 concurrent pending attempts).
## Key metrics/methods (formulas where given, else "not specified")
- Deterministic eventId = `${invocationId}:FINALIZED_SUCCESS`, `${attemptId}:ATTEMPT_STARTED`, etc. (never wall-clock, never random UUID).
- Idempotency: ledger INSERT folded INTO the same SQL statement as the authoritative transition (gated on the transition's CTE) + `ON CONFLICT ("eventId") DO NOTHING`.
- Projection: pure fold to (claimPhase, exposurePhase, pendingCountClass ∈ {ZERO, ONE, GE2}, fingerprintBound, hasRejectedFp); `admitUnderSRQC` always admits (detection-only).
- Cron `/api/cron/run-formal-receipt` daily 09:45 UTC, 26h lookback; formal_incident row id = `${witnessEventId}:${violationKind}` ON CONFLICT DO NOTHING; SrqcVersion activation script-only/human.
## Data sources named
Postgres (control_event_ledger, processed_event, formal_incident, srqc_version); Formal Foundry proofs; formal-heartbeat/ (dormant).
## Findings (numbers and facts, not vibes)
- Proven against real Postgres (sequential AND concurrent): 100-concurrent no-double-spend budget test passes; GE2 detected, zero false positives on legal sequential shapes, double window run logs at most once.
- Status: IMPLEMENTED_ON_DRAFT_BRANCH / DORMANT-BEYOND-EMISSION / NOT_MERGED. No ENFORCE path anywhere; no Iceberg/Kafka/Flink/Airflow (Tracks C/D deferred).
- Invariants preserved: all Formal Foundry property tests + formal-heartbeat suite green; ledger can never record a transition that did not happen.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Budget/invocation control-plane infra: OTHER (AI control plane, not sports engine).
## Engine-actionable? (yes/no + one-line what)
No — AI control-plane exactly-once infrastructure; nothing in the sports prediction engine.
