# adr/006-settlement-hold-state.md
## What it is (1-2 sentences)
A 2026-08-13 ADR (Proposed, no implementation) proposing a new additive `SettlementHold` model so that deliberately-held picks (e.g., score sources disagree → `holdReason: "DISPUTED"`) are persisted, letting settlement-health distinguish "correctly refused to guess" from "actually stuck/broken."

## Key metrics/methods (formulas where given, else "not specified")
- Settlement cron runs hourly at `:20` via `/api/cron/settle-picks`.
- Overdue detection: `result == "PENDING"` AND `game.commenceTime < overdueCutoff` — currently has NO hold exclusion, which conflates held vs stuck picks and drives `settlement = DEGRADED` → launch preflight `RESULT: FAIL`.
- Proposed `SettlementHold`: `(id, pickId, holdReason[String, not enum — orient/path holds on roadmap], settlementRunAt, sourceA, sourceB [the two disagreeing scores], resolvedAt, createdAt)`; unique on `(pickId, settlementRunAt)`; indexed on `(pickId, resolvedAt)`.

## Data sources named
Two unnamed free score sources used by `free-settlement-runner.ts:330-344` (the disagreeing pair that triggers a hold).

## Findings (numbers and facts, not vibes)
- Hold is deliberate and load-bearing per `operating-kernel.ts:172-183`: "exception(s) (DISPUTED / orient / path) need human evidence — never force-settle."
- `rcaInputs` is currently in-memory only; the pick row is left `result: "PENDING"` with no marker when held.
- The fix is purely additive: zero runtime behavior change at write time; rollback is `DROP TABLE "SettlementHold";`.
- Explicit rule #1 preserved: never persist a guessed score — only the refusal + evidence (sourceA/sourceB).
- Migration committed but NOT applied; agent holds no production `DATABASE_URL`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the disputed-score signal itself (`sourceA` vs `sourceB` disagreement) is a cross-source data-trust signal — the engine's intake of external scores/odds should carry disagreement flags rather than silently averaging.
- OTHER: no-fake-data doctrine is an engine-integrity principle — any GSE projection pipeline should record refusals/uncertainty instead of imputing values.

## Engine-actionable? (yes/no + one-line what)
yes — if GSE settles any engine-tracked results, adopt the persist-refusals pattern (hold reason + evidence, never invented scores) for disputed outcomes.
