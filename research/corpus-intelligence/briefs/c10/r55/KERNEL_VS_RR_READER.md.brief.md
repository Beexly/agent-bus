# plans/KERNEL_VS_RR_READER.md
## What it is (1-2 sentences)
A 2026-07-29 decision record choosing between two implementations of a slate-opening reader: the shipped RR (Repeatable Read) two-statement reader in `planSlateOpeningFromDb` vs. a proposed single-function SQL structural kernel `try_open_slate`. Decision: keep the RR reader as shipped-compatible, land the SQL kernel dark as the preferred structural end-state.
## Key metrics/methods (formulas where given, else "not specified")
- TOCTOU (time-of-check/time-of-use) race closed via Postgres Repeatable Read `$transaction` isolation (one snapshot) on two Prisma statements (pending-count read + opener select).
- Preferred end-state: `SELECT * FROM try_open_slate($1)` — one function owns both reads, making a REVEAL-while-pending>0 violation unrepresentable at the call surface.
- Safety equivalence holds under decrement-only pending writers + RR: no REVEAL while pending > 0. Crypto (binding + mint) stays in pure `planSlateOpening`, out of SQL.
## Data sources named
None — internal engineering document; only references Prisma/Postgres internals.
## Findings (numbers and facts, not vibes)
- Commit reference: MAIN verified at f8a6065; #236 shipped the RR two-statement reader.
- Land order: (1) doc + SQL stub + TS dual-path (`open-via-sql.ts`) + tests; (2) migration + GRANT fence (founder/ops); (3) new call sites prefer SQL, RR remains fallback one release; (4) adversary suite green on both paths; (5) do NOT flip reveal/LIVE_BOARD flags.
- Explicit non-goals: no silent rewrite of #236 without dual-path tests; no claim SQL is production until migration + grants applied.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All findings tagged OTHER — pure infrastructure/engineering decision record with no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
No — no actionable content; internal Postgres isolation decision record, no sports metrics, methods, or data.
