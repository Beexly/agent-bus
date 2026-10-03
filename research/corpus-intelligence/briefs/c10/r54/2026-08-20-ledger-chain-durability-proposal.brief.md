# docs/ops/edge/2026-08-20-ledger-chain-durability-proposal.md
## What it is (1-2 sentences)
A proposal for making the Glass Ledger hash chain durable in Postgres (status: proposal only, not implemented; schema.prisma is sealed and requires founder review). It diagnoses why Hermes's first attempt (in-memory + local-JSON fallback in `hermes/b6a-chain-append`, commit `7f3822c4`) would have shipped a fake ledger: serverless module state and per-instance `/tmp` do not survive cold starts, so the chain would silently restart from `GENESIS_HASH` on essentially every request.
## Key metrics/methods (formulas where given, else "not specified")
- `LedgerChainEntry` Prisma model: `seq` Int @unique (0-indexed chain position), `prevHash` (entryHash of seq-1 or GENESIS_HASH at seq 0), `entryHash` @unique = `sha256Hex(canonicalJson(entry minus this field))`, `entryType` ("PICK" | "SETTLEMENT"), `pickId`, `payload` canonical JSON, `createdAt`.
- Persistence pattern mirrors `freeze-slate-commitments.ts`: append inside `db.$transaction`, read tail row (`orderBy: { seq: "desc" }, take: 1`) for `prevHash`, insert, never throw to caller (catch, log, continue). `LEDGER_CHAIN_ENABLED` flag gates with zero DB interaction when off.
## Data sources named
Existing `PickProofReceipt` and `SlateCommitment` models (schema.prisma:594, 623); `process-sport.ts` in the refresh-odds cron route (`apps/web/app/api/cron/refresh-odds/route.ts`, Vercel serverless, no functions/maxDuration override).
## Findings (numbers and facts, not vibes)
- The pure hash-chain math (`ledger-chain.ts`) is already correct with no I/O; its own header says callers own persistence. Hermes's store deviated from the documented design.
- Anchor-matching failure in wiring into `process-sport.ts` was the proximate block, not the real bug.
- B-6a, B-6b, B-6c cascade-blocked until the founder approves; B-7 (Consensus Clock + Line DNA against fixtures) does not depend on the chain and should proceed next.
- Directive: discard `hermes/b6a-chain-append`'s `ledger-store.ts`, do not merge it.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Discontinuous ledger restart on cold start presenting as continuous audit trail — TRUST-SIGNAL
- Fail-closed, never-block-publish append semantics (catch, log, continue) — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
No — proposal is founder-gated; when approved, the migration + store rewrite + wiring is a single well-scoped task specified directly in the file.
