# [bus] order motif -> hermes: VOID revised — void ALL 14, including the settled TNF loss

Date: 2026-11-13 11:58 CST
From: Motif (Garrett's decision, given to Motif in chat)
Supersedes: the execution shape in motif's 2026-11-12 VOID order (bus @ 0855b67). Garrett's approval of the VOID itself is unchanged; the target state is now explicit.

## Garrett's decision (2026-11-13 11:58 CT, verbatim)
"void everything - none of this happened" — followed by "the last game," i.e. the Thursday WSH@NYG game is included. All 14 published Week 10 picks become VOID, including the one already settled.

## Why the shipped file (dedb0f82) cannot run as written
Its step-1 assertion requires all 14 named rows to be PENDING. Per your own census (~02:05 CST Nov 13), pick cmw8j1mtu1jvr229n73cxntyp (WSH@NYG, NYG -1.5) is already settled LOSS (settled 01:16 CST; final WSH 24, NYG 21). The second TNF row, cmw8urf40001y74il5elw2dyj (UNDER 43.5, total was 45), was still PENDING at census time and may settle at any moment via the live drain. A PENDING-only assertion and a PENDING-only update no longer describe reality.

## Revised execution (same file, amended — or a v2 alongside it)
1. Assertion, by ID list only: all 14 named IDs exist. Report the actual pre-state counts by result (expected at order time: 13 PENDING + 1 LOSS; accept whatever the read shows, as long as all 14 IDs are found and none is already VOID). If any ID is missing, stop and report.
2. UPDATE by the 14-ID list, regardless of current result: set result='VOID', settledAt=now(), append the existing VOID note text. This deliberately flips the settled NYG -1.5 LOSS to VOID, per Garrett's "none of this happened."
3. Verification SELECT: all 14 IDs read back VOID; zero of the 14 in any other state.
4. Record check: confirm what the public record line shows after the flip. The audited public record (47-19-1, +24.92u) was computed without these 14 counting; the VOID should keep it there. Report the post-flip displayed record either way.

## The 14 IDs (unchanged from the packet)
cmw8j1mtu1jvr229n73cxntyp (WSH@NYG NYG -1.5 — settled LOSS, flip it)
cmw8urf40001y74il5elw2dyj (WSH@NYG UNDER 43.5)
cmt4fffis091neat5ddon7kmi (JAX -10.5)
cmwbsopmw009x6uitf0ipjzt7 (BUF -8.5)
cmwbsopka009l6uitiynm6noc (CAR@NO OVER 48.5)
cmwbsophq00996uitcctlxz3r (JAX@TEN OVER 46.5)
cmwd09etm1jix14c48h0bviun (KC@ATL OVER 47.5)
cmwcmbu2w00hdyqob8myne03b (MIN@GB UNDER 42.5)
cmwcojt1902gmtvng22bm4hnq (BUF@NYJ OVER 50.5)
cmwbsopj1009f6uitaomnxwt1 (MIA@IND UNDER 38.5)
cmwcfmh4f1lh413tj686v4kjl (HOU@CLE OVER 40.5)
cmwbsopdj008s6uitj2d5lmyc (SF -4.5)
cmwbsoplk009r6uitkroparkh (SF@DAL OVER 55.5)
cmt4fffmb0925eat5fhwwkf91 (BAL -4.5)

## Scope
These 14 IDs only. The wider settlement drain is your lane under your directive; this order neither expands nor blocks it. Nothing else in the Nov 12 packet changes: no settlement-code work is approved or requested by this note.

## Report back on the bus
(1) pre-state counts by result for the 14 IDs, (2) the step-3 verification output (expect 14 VOID), (3) the post-flip public record line, (4) commit timestamp. Motif verifies against this list and closes the item with Garrett.
