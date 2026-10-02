# docs/frontier/EVENT_SOURCING_PATTERNS.md

## What it is (1-2 sentences)
A docs-only design record naming the event-sourcing pattern (append immutable facts, derive state by replay, reject impossible facts loudly) that GSE already uses across trust-critical subsystems, with an inventory of where it lives and three extracted laws plus anti-patterns for the next subsystem to copy.

## Key metrics/methods (formulas where given, else "not specified")
The three laws: (1) Append-only facts — a correction is a new fact with a later transaction time, never an UPDATE. (2) Replayable derivation — any publicly asserted number must be recomputable from persisted facts by an independent path; if it can't be replayed it is a rumor, not a claim. (3) Loud rejection of impossible facts — temporally impossible or corrupt input throws typed errors (`TwinObservationError`, `PromotionIntegrityError`) before any statistics run; silent filtering is the failure mode. When-to-event-source criteria: value backs a public/paid claim; "what did we know at T?" is a real question (needs bitemporal transaction time); auditability outranks write convenience; multiple writers/late arrivals expected.

## Data sources named
Repo-internal inventory (status vs `main` as of writing): live — `freeze-slate-commitments.ts` slate commitments (write-once rows; replay via `/api/verify/slate`), `PickSignalSnapshot` (prediction-time fields append-only; one-time settlement completion via `updateMany` is a narrowly-scoped exception). Code-complete but unmerged at writing (verify before citing): promotion gate `packages/prediction-engine/src/promotion/` (PR #138), Twin observation log `packages/epistemic-twin/src/as-of.ts` (PR #139, stacked on #137), slate Pedersen aggregate `SlateCommitment.pedersenAggregate*` (PR #136). Hash-chain ledger compose/verify primitives exist but `loadLedgerView()` states "there is no live ledger chain to read" — proven pure function over hypothetical rows, not a populated store.

## Findings (numbers and facts, not vibes)
- Five anti-patterns observed or nearly shipped: (1) self-reported aggregates — the DEC-062 promoter trusted summary fields; a hardcoded stub was indistinguishable from a working system (fix: make row-level facts the only input type so fakeness is unrepresentable); (2) mutating a snapshot's own facts — an edited snapshot is a forged one; (3) fabricated timestamps — missing/unparseable time is absence of evidence, never `new Date()` at read time (OP-003 adapter coerces garbage to null); (4) silent filtering of corrupt events — PR #139 review caught NaN-dated observations silently disappearing at every cut; fix rejects loudly at the boundary; (5) event-sourcing as a license to persist — new tables/migrations stay founder-gated regardless of how correct the event model is.
- Mutable rows remain correct for UI preferences, caches, and anything whose history carries no claim.
- Reference implementations named for the next subsystem: `as-of.ts` for the fact/fold/replay split (small, pure, fully test-pinned); `packages/prediction-engine/src/promotion/` for making dishonest input unrepresentable. `BITTEMPORAL_ADOPTION_V0.md` is the prerequisite reading for bitemporal reconstruction.

## Intelligence connections
- [OTHER] Engineering/audit discipline for trust-critical prediction surfaces — no QB, coaching, OL, or scheme content.
- [OTHER] Relevant to the broader "don't publish a number the evidence doesn't support" doctrine that also constrains the injury-input memo in this chunk.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the three laws (append-only facts, replayable derivation, loud rejection of impossible facts) for every new subsystem that backs a public or paid claim; verify the referenced PRs are merged before citing them as precedent.
