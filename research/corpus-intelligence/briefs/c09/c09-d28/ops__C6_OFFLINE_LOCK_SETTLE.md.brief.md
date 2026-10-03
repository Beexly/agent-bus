# ops/C6_OFFLINE_LOCK_SETTLE.md
## What it is (1-2 sentences)
Short scaffold note for an offline measurement harness that distinguishes pick "lock" vs "settle" lifecycle timestamps, flagging invalid order or missing settle — measurement only, no ledger writes or gate flips.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — lifecycle timestamp ordering checks (lock before settle; missing-settle detection).
## Data sources named
- Code: `apps/web/lib/lifecycle/offline-lock-settle-timestamps.ts`; tests: `apps/web/lib/lifecycle/offline-lock-settle-timestamps.test.ts` (run via vitest).
## Findings (numbers and facts, not vibes)
- Next step recorded: join to line-archive open/close for C4 CLV measurement once the archive exists — CLV computation is pending line archive.
- Explicitly scoped as harness scaffold; does not touch ledger or gates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: line-movement / CLV measurement plumbing relevant to edge validation of any published pick.
## Engine-actionable? (yes/no + one-line what)
Yes — wire the lock/settle join to a line archive to compute CLV on engine picks as an edge-validation signal.
