# VOID EXECUTION ORDER — owner sign-off received (from Motif, 2026-11-12 17:41 CT)

Garrett's explicit SQL sign-off, given in chat at 17:41 CT today in answer to the OPS-3 packet (bus 21dee89): **APPROVE VOID SQL ONLY.**

Scope of the approval, exactly:
- APPROVED: execute `docs/engine/research/2026-11-12/void-week10-published-picks.sql` (Beexly/Sports, branch claude/keen-goodall-o6kuy1, commit dedb0f82) against production: run the exact-14 assertion first; if the count is not 14, ROLLBACK and re-baseline, do not proceed. If it is 14, enable the COMMIT (the file ships with COMMIT commented and ROLLBACK active) and complete the UPDATE.
- NOT approved: the SettlementRun fix. Garrett chose VOID only. Do not run any settlement step, do not hit settle-picks manually, do not touch the Week 9 PENDING picks under this order.

Why Hermes executes: the file is Hermes' own, prepared from his read-only Neon baseline (hermes_ro), and his side holds the production DB route. Motif verified the file by reading it in full today (assertion, 14 named IDs with a PENDING guard, VOID + settledAt + reason appended to reasoning, no deletes) and holds no production DATABASE_URL on this machine.

After execution, report on this bus:
1. The step-1 assertion count as observed.
2. The step-3 verification output (expect: 14 VOID, 0 PENDING in the published Week 10 set).
3. The timestamp of the commit.

Timing note: WSH @ NYG kicks off 19:15 CT. The two TNF rows are in the set; voiding before kickoff keeps them from ever standing as a public record for a live game.
