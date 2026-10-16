# X-intel ingestion TRANCHE 2 — deep-scroll catalogs appended (Motif, 2026-10-15)

Follow-on to tonight's tranche 1 (bus note @ 9257690). The ten deep-scroll
catalogs have all returned; their depth is now in the engine, verified the
hard way (remote blob SHAs read back in the foreground — 64/64
identical; push output was not treated as evidence).

**Landing:** Beexly/Sports branch `motif/x-intel-ingestion-2026-10-15`
@ `656029b9cbd32215669bd5a54a102406304293ca` (follow-on commits on tranche 1's `f3c048b`). Ledger twin
appended C-303 → C-325 (302 → 325 rows; first 302 lines byte-identical to
tranche 1's landed ledger; zero existing rows changed). Homed 150 → 173;
the 152-row NO-HOME queue in the tranche-1 prefix is untouched.
Validation: `homes/validation-x-intel-tranche2-2026-10-15.json` — all
pass, zero forbidden emission keys, every new/enriched record weight 0 /
ZERO_OBJECT. Exactly the 13 expected tranche-1 home files were enriched;
the other 25 tranche-1 home files are byte-identical.

**New records (23):** Krupka catalog — WTPRR (C-303), YPRR decomposition
(C-304), XFP vs FP/PFF (C-305), unrealized air yards per route (C-306),
RB efficiency suite (C-307), team pace/style family (C-308).
@throwthedamball original metrics (author is PFF R&D; all BLOCKED-SOURCE
(PFF) with definitions held) — disruption (C-309), disruption pressure
(C-310; his 'nearly 4x as punishing' line recorded as an ATTRIBUTED
CLAIM dated 2025-12-24, not a finding), create rate (C-311), destroy
rate (C-312), perfect block (C-313), perfect coverage (C-314), system
play (C-315), havoc (C-316), the 15-family split catalog (C-317).
GridironGrading — overall prospect score system + grade bands (C-318),
Impact Score (C-319), public datasets with sheet IDs (C-320, recorded,
not downloaded). AQ Production Score + P4 starter bar (C-321).
RyNoonan — scorekeeper adjustment (C-322), quick pressures (C-323),
tackling efficiency vs run (C-324), golf suite on the multi-sport shelf
(C-325).

**Enrichments:** @FF_Geek provenance (no data source credited anywhere in
22/22 posts — charts are instances, not a feed) + TE edition / team EPA
split / Target Outlook on C-280. cfbquant methodology FULLY SPECIFIED on
C-285 (ridge two-way fixed effects lambda=50, garbage-time 5-95% WP rule,
matchup formula, 264-metric glossary, manual-refresh caveat). WOPR 2025
leaders appended (JSN 0.89). Box Score Scout model definitions in the
author's terms on C-294 (xFP frozen 2009-2025 + his stated limit, kicker
model, comps, play-callers DB cross-referenced to the SPEC-C P-014
family). NFL_DF Film Room CORRECTED on C-291 (297 cutups, 3 free, Pro
$8.99/mo). GridironGrading coverage gap (Apr 29-Aug 21 2026 unreadable)
and NFL_DF coverage limit (Feb 2026-Oct 2025 unreachable) recorded on
their homes, not smoothed over. @refereeinsider INTEGRITY FINDINGS on
C-296 (rolling record stated 33-25 vs 34-25 by his own weeklies; Novak
bias flipped Favorites→Visitors after a follower correction; chart→recap
pick changes; record-keeping stopped 2025-11-30, restarted 2026) —
DIAGNOSTIC-ONLY stands, C-297 kernel unchanged. @RyNoonan's audited
self-published record on C-298 (939-742, +95.5u at ≥5% edge since 2022;
unders 62% / +17.5% ROI; published self-correction on overs).
@cookitup31 SENTIMENT-ONLY confirmed on C-302, with the key negative
fact: no gradeable record published anywhere; Prop Season lines recorded
as UNVERIFIED MARKETING CLAIMS.

**Still open (named, unchanged):** SPEC-C premise-type registry v2 for
the coverage-split family; WOPR coefficients unpinned; GridironGrading
sheets recorded-not-downloaded; nothing computed yet — these are homes,
not signals. Branch unmerged, pending Garrett's runbook path.

Deliverable: `~/workspace/your_files/x-intel-ingestion-tranche2-2026-10-15.md`
(Motif workspace). Nothing merged, nothing promoted, emission ZERO_OBJECT.
