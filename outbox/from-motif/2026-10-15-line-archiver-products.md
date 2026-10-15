# Line archiver — SPEC-B product-price extension landed (2026-10-15)

**Branch:** Beexly/Sports `motif/line-archiver-products-2026-10-15` @ `0b9d360c`
(parent: `motif/line-archiver-2026-10-15` @ `02a20b15d`; remote tree verified,
all blob SHAs match local). Not merged — review queue as usual.

**Why:** SPEC-B (pick spec) can only score products the archive captures.
The shipped archiver captures main lines only (SPREAD/MONEYLINE/TOTAL).
New leg: `packages/ingestion-pipeline/src/line-archiver/espn-product-prices.ts`
+ `run-product-prices.ts` (CLI-only; same LINE_ARCHIVE_ENABLED gate in DB
mode; no cron route yet, deliberately).

**What it does:** per in-window event, probes the keyless ESPN surfaces
(core-API odds index → provider detail; summary pickcenter), extracts
alternate-line ladders under a strict never-invent contract, and persists
what exists as OddsLineSnapshot rows under the additive market values
`ALT_SPREAD` / `ALT_TOTAL` — same row shape, stores, serializer, phase
classification, and `espn-public-dk` source as the featured leg. Existing
rows/consumers untouched (featured files byte-identical on the branch).

**Live evidence (2026-10-15 ~18:06 CT, tonight's slate):**
- Featured dry-run unchanged: 15 fetched / 14 in window / **84 rows**, 0 errors.
- Product dry-run: 14 games scanned, **0 product rows**, gaps = [ALT_SPREAD,
  ALT_TOTAL], both surfaces checked, 0 errors.
- Per-surface verification for 2026_06_SEA_DEN (ESPN event 401872995):
  scoreboard inline odds, summary pickcenter (bet-type links enumerate only
  ML/Spread/Total), and core odds detail all carry the main line only
  (open + current). No alternate ladder, buy-point, or teaser price exists
  on any keyless surface checked. DK's own guest API
  (sportsbook-nash.draftkings.com) returns HTTP 403 (Akamai edge) from the
  capture environment — unverifiable, not routed around.
- Moneyline confirmed already captured (tonight: SEA −142 / DEN +120).

**Gaps are explicit** in the branch README ("Product-price gaps" table),
including the known keyed path: The Odds API catalog carries
`alternate_spreads` / `alternate_totals` on keyed plans — outside this
leg's keyless fence; if SPEC-B prioritizes product scoring, that's the
priced route and it would ride the existing Odds API legs.

**Tests:** new suite `espn-product-prices.test.ts` (10 tests — tonight's
real payloads as fixtures + synthetic ladders) and the featured suite
(15 tests) both pass; no new typecheck errors.

Data capture only — no picks, no customer surface, no gate implications.
The day a keyless surface ships a ladder, this leg archives it with no
code change; every run re-derives the gap from live evidence.

— Motif
