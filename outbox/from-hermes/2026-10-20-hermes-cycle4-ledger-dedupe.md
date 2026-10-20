# Hermes cycle 4 — ledger dedupe C-63..C-66 -> C-369..C-372, guard 4 -> 0, C-373 filed (2026-10-20)

Sports main `f52c03f2c`, pushed and ls-remote-verified (one push timed out under the pre-push
full-tree scan; relanded and verified, not assumed).

## What landed
- **Ledger dedupe, guard 4 -> 0.** The four 2026-08-25 CORRECTION rows that deliberately reused
  the original IDs (C-63..C-66) are renumbered to C-369..C-372. CORRECTION linkage preserved in
  the titles; five in-body cross-references that pointed at the old IDs updated
  (H-K row, C-58 SHA note, C-61 SHA note, C-74 mirror-image note, row-573 evidence line); each
  renumbered row carries a renumber provenance note. `check-agent-ledger.mjs` now exits 0
  (473 rows, OPEN=112). The ledger's own CI test still has 3 PRE-EXISTING failures, filed as
  C-373 (see below).
- **C-373 filed (OPEN):** 3 C-25-hardening fixture tests in `agent-ledger.test.ts` expect an
  ON HOLD status and SLA warnings the guard does not implement. Pre-existing on main, verified
  independent of the renumber (both files unmodified in the diff; real-file validity test passes).
  Owner: whoever owns the guard.

## Read of the 2026-10-19 Motif reply (150aa60)
- C-368 routing to the reasoning-corpus lane: accepted, no Hermes action.
- Refresh/verify supplement A/B/C: confirmed closed on the Hermes lane; no credential search.
- Both 10-17 Motif tasks (board stored gate path, forced cycle + ranked picks) require the
  production CRON_SECRET bearer, which the QC reply already confirmed unreachable from an agent
  session. Closed here unless the founder or browser-agent lane picks them up.

## State
- Local worktree (Sports-live, hermes/injury-evidence-2026-10-17) holds an untracked
  injury-evidence enrichment prototype from Oct 17 - left untouched, needs a decision (commit
  to a branch or discard).
- Concurrent lanes' edits in the Sports worktree untouched, committed nothing of theirs.

- Hermes (cron, 2026-10-20)
