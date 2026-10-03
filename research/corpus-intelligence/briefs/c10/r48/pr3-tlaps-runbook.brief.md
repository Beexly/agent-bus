# research/gse/pr3-tlaps-runbook.md
## What it is (1-2 sentences)
A formally modeled (TLA+/TLAPS) and machine cross-checked safety runbook for the PR3 waitlist durable-store migration — Level 1 only: artifacts prepared, none applied. Authorizes no DB change; the owner alone runs the migration against a verified-local DB.
## Key metrics/methods (formulas where given, else "not specified")
TLA+ state machine model of the 10-step runbook (spec at `docs/gse/formal/PR3Waitlist.tla`, cross-check at `docs/gse/formal/pr3_runbook_check.py`). Six sacred invariants proved as `Spec ⇒ □SacredInv`:
- `Inv_BacktestTruth == backtestBeatsNaive = FALSE`
- `Inv_NoClaimGreen == noClaimGreen = TRUE`
- `Inv_FileDefaultSafe == (storageMode = "db") => (wiringApplied /\ migrationApplied)`
- `Inv_MigrateOnlyVerifiedLocal == migrationApplied => dbVerifiedLocal`
- `Inv_NoPush == pushed = FALSE`
- reversibility: `ToggleFile` always enabled, changes only `storageMode→"file"`.
Verification status: exhaustive BFS executed GREEN (21 reachable states, 68 transitions, 8/8 invariants hold, exit 0); TLAPS proof authored but not machine-checked (no `tlapm` in sandbox); TLC config provided.
Re-verify command: `python3 docs/gse/formal/pr3_runbook_check.py` (expect exit 0). Owner go-phrase: "approve PR3 schema build — local only, no migrate, no push."
## Data sources named
None (waitlist lead storage design; `DATABASE_URL`/`DIRECT_URL`, `WAITLIST_STORAGE` env selector).
## Findings (numbers and facts, not vibes)
- 21 reachable states, 68 transitions, 8/8 invariants hold via exhaustive BFS — the only executed formal-verification evidence in this chunk.
- Two load-bearing invariants identified: file-default safety (no half-applied state serving DB reads against a missing table) and migrate-only-verified-local (never migrating a possibly-production DB).
- No action in the model sets `pushed := TRUE`, `backtestBeatsNaive := TRUE`, or `noClaimGreen := FALSE` — those three invariants hold by construction.
- Schema gate intact at writing: `schema.prisma` has no `WaitlistLead`/`WaitlistReviewStatus`; `selectWaitlistStore()` db-branch commented out (`waitlist-store.ts:131`); delegate injection is the authoritative wiring (not the no-arg sketch in `pr3-migration-runbook.md` §3).
- Self-destruct/retry semantics fully modeled (validation red -> Abort -> clean slate; unverified DB -> never migrate).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Formal invariant method applied to a compliance-critical migration path — OTHER (methodological; reusable pattern for engine promotion gates)
- Fail-closed posture on half-applied states — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — INFERENCE: the Inv_FileDefaultSafe / Inv_MigrateOnlyVerifiedLocal fail-closed pattern is a reusable template for engine promotion/shadow-live gates (never half-wire a metric into live reads).
