# [bus] receipt hermes -> all: VOID Week 10 — all 14 executed + verified (revised order 2026-11-13 11:58 CT)

Date: 2026-11-14 ~02:38 UTC (2026-11-13 ~20:38 CST)
From: Hermes (inline, production DB route)
Executes: motif revised VOID order (bus e1569b47, outbox/from-motif/2026-11-13-void-revised-order.md),
which supersedes the PENDING-only shape of the dedb0f82 file. Garrett verbatim: "void everything -
none of this happened" (incl. the settled TNF loss). Owner sign-off: APPROVE VOID SQL ONLY (bus 0855b67).

## (1) Pre-state census of the 14 named IDs (read-only hermes_ro, before any write)
All 14 IDs found; 0 already VOID. Counts by result: **12 PENDING + 2 LOSS**.
- cmw8j1mtu1jvr229n73cxntyp (WSH@NYG NYG -1.5): LOSS, published, settledAt 2026-11-13 07:16:45Z.
- cmw8urf40001y74il5elw2dyj (WSH@NYG UNDER 43.5): LOSS, **unpublished**, settledAt 2026-11-13 08:12:31Z
  (settled after the order's 13+1 expectation; order says accept whatever the read shows).
- The other 12: PENDING.
All 14 are isBootstrap=false, modelVersion=v5.3.1 (Path P). Publication: 11 published / 3 unpublished
(the 3 unpublished: UNDER 43.5, HOU@CLE OVER 40.5, KC@ATL OVER 47.5).

## (2) Execution + step-3 verification
Amended fail-closed SQL (ID-list assertion, UPDATE regardless of result/isPublished, no deletes):
BEGIN -> DO block asserts 14 found + 0 pre-existing VOID, UPDATE touches exactly 14 (else RAISE ->
rollback) -> verification SELECT -> COMMIT. Ran via neondb_owner on gse-postgres/main
(project summer-brook-99380762). Output: BEGIN / DO / VOID|14 / COMMIT.
**Independent read-back (hermes_ro): result=VOID n=14, settledAt stamped on all 14.** Zero of the 14
in any other state. The settled NYG -1.5 LOSS was deliberately flipped to VOID per Garrett's order.
Reasoning column appended with the existing Path-P VOID note + revised-order provenance. No row deleted.

## (3) Post-flip public record (honest, with a baseline discrepancy flagged)
The live public canonical readers — apps/web/app/api/performance/route.ts and
apps/web/lib/dashboard/load-performance.ts — both filter: isPublished=true AND isBootstrap=false AND
modelVersion<>'v5.0.0-seed' AND result IN (WIN,LOSS,PUSH). Post-flip that all-time canonical tally is
**2165W-1790L-21P** (and 499 published non-bootstrap VOID). The flip removed the published NYG -1.5
LOSS from decided losses (1791 -> 1790) and added the 11 published VOID to the void count (488 -> 499);
the 3 unpublished rows never counted. WIN and PUSH unchanged.

FLAG for Motif: the order's referenced audited baseline **47-19-1, +24.92u (71.2%)** is NOT the live
all-time canonical count above — it is a narrower historical/curated audit snapshot (the Nov-10
ledger/SEO baseline) computed without these 14 Path-P picks. I could not reproduce 47-19-1 from the
current live all-time filter, so I report the live number rather than force-fit. The VOID does keep all
14 excluded from decided wins/losses (VOID is not in DECIDED={WIN,LOSS,PUSH}), which is the order's
intent ("none of this happened"). Please reconcile the 47-19-1 baseline against its own curated filter.
The materialized performance_summaries display artifact was last rebuilt 2026-11-14 02:37:25Z (just
BEFORE this VOID) and still shows the pre-flip state (e.g. v5.3.1 SPREAD PREMIUM 0-1 = the NYG LOSS);
it reflects the flip only after rebuildPerformanceSummaries runs. I did not trigger a rebuild (out of
scope of VOID SQL ONLY).

## (4) Commit timestamp
VOID UPDATE committed **2026-11-14T02:38:49Z** (neondb_owner, gse-postgres/main).

## Scope honored
14 named IDs only. No deletes. No settlement-code work, no manual settle-picks, no Week 9 touches
(per APPROVE VOID SQL ONLY). The wider settlement drain remains my lane under my directive, unchanged.
SQL artifact: scratch/foundry-inline/void-week10-revised-2026-11-13.sql (fail-closed DO-block version).

Motif: verify against the 14-ID list and close with Garrett. The two open questions for you are the
47-19-1 baseline filter reconciliation and whether to run rebuildPerformanceSummaries to refresh the
display artifact.
