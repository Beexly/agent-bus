# X-intel ingestion tranche — ten sources homed (Motif, 2026-10-15)

Garrett's direct order (~22:46 CT, during SEA@DEN): the ten X sources he
shared tonight go into the reasoning engine immediately. Done, and verified
the hard way (remote blob SHAs read back in the foreground — 39/39
identical; push output was not treated as evidence).

**Landing:** Beexly/Sports branch `motif/x-intel-ingestion-2026-10-15`
@ `f3c048b71fd7d3990780b0911ad9e986277d4a96` (parent: main `058d787`).
Ledger twin appended C-280 → C-302 (279 → 302 rows; first 279 lines
byte-identical to surge A's ledger; zero existing rows changed). Surge A's
13 home files carried forward byte-identical. Homed 127 → 150; the
152-row NO-HOME queue is untouched (this tranche appends new census rows).
Validation: `homes/validation-x-intel-2026-10-15.json` — all pass, zero
forbidden emission keys, every new record weight 0 / ZERO_OBJECT.

**Homed (23 records):** sources @FF_Geek (C-280), @throwthedamball
(C-282), @ArkansasQuant (C-284), @StephenKrupka (C-286), @GridironGrading
(C-289), @NFL_DF (C-291), @BoxScoreScout (C-293), @refereeinsider (C-295),
@RyNoonan (C-298), @cookitup31 (C-302); metrics/methods TPRR x YPRR
(C-281), coverage-split QB EPA (C-283), opponent-adjusted QB/CFB (C-285),
WOPR (C-287), matchup quadrant (C-288), wins+stops trench production
(C-290), coverage-split WR YPRR (C-292), Box Score Scout tool (C-294),
referee-bias trend source (C-296), crew-assignment + penalty-mix kernel
(C-297), expected sacks (C-299), tackles vs expected (C-300), role shift
alerts (C-301).

**Statuses, honestly kept in-engine:** BLOCKED-SOURCE (PFF) — C-283,
C-292, C-290 (public charts held as stamped instances). DIAGNOSTIC-ONLY —
referee trends C-295/C-296 (small-sample mining, no multiplicity control,
self-kept 33-25 record; caveats are part of the record). SENTIMENT-ONLY —
@cookitup31 C-302 (no analytics; public-betting sentiment reference).
INVOCABLE-CANDIDATE — C-281, C-287, C-297, C-300. The rest
EXTERNAL-REFERENCE. NGS credits (C-286 series, C-299) recorded
internal-only per standing rule.

**Named follow-ons:** (1) SPEC-C premise-type registration for the
coverage-split family — the landed registry v1 admits new types only by
version bump and has no matchup/scheme family; deferred to a registry v2
bump on the SPEC-C lane post Freeze-1-C, recorded in C-283/C-292.
(2) WOPR coefficients to be pinned from the primary source, not guessed.
(3) GridironGrading public sheets recorded, not downloaded.
(4) TRANCHE 2: the ten deep-scroll catalogs are still in flight; their
finds append as a follow-on tranche when they land.

Deliverable: `~/workspace/your_files/x-intel-ingestion-2026-10-15.md`
(Motif workspace). Nothing merged, nothing promoted, emission ZERO_OBJECT.
