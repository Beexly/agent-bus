# Line archiver — KEYED product-price leg landed (The Odds API alternate markets)

**Branch:** Beexly/Sports `motif/line-archiver-oddsapi-2026-10-15` @ `0621d411`
(parent: `motif/line-archiver-products-2026-10-15` @ `0b9d360c`). Remote-verified:
all four blob SHAs match local. Nothing merged. Capture only — no customer
surface, no picks.

## What

The keyless product leg (landed earlier today) measured that no keyless ESPN
surface exposes alternate ladders. This leg is the priced route the README gap
table named: The Odds API event-level odds → `alternate_spreads` /
`alternate_totals` persisted as `OddsLineSnapshot` rows under the SAME additive
`ALT_SPREAD` / `ALT_TOTAL` markets, same row shape/stores/phase discipline.
Rows carry `source: "oddsapi"` and the bookmaker's own key as `book` (one book
per capture, DraftKings first when it carries a ladder). Each capture is ONE
`getEventOdds` call requesting h2h/spreads/totals (duplicate-guard context +
moneyline cross-check, reported per game) plus the two alternate markets.

- `packages/ingestion-pipeline/src/line-archiver/oddsapi-product-prices.ts` (core)
- `packages/ingestion-pipeline/src/line-archiver/run-oddsapi-product-prices.ts` (wiring + CLI)
- `packages/ingestion-pipeline/src/__tests__/oddsapi-product-prices.test.ts` (17 tests, mocked fixtures — no live calls)
- README: new "Keyed product prices (The Odds API leg)" section; gap-table pointer updated.

## Credit budget (hard, enforced in code)

Alt captures only within **48h of kickoff**; **≤3 captures per game** counted
from the archive (distinct `capturedAt` among the game's `source:"oddsapi"`
rows) and enforced BEFORE spending; per-capture cost **measured from
x-requests-used header deltas**; monthly burn projected at the capped cadence
(per-capture × 3 × 16 × 5 = **1,200/mo** at the 5-market request shape) and the
alt capture **aborts** if the projection exceeds **2,000**. Key handling = the
repo's existing pattern: wiring reads `THE_ODDS_API_KEY` from the environment
transiently into the shared `OddsApiClient`; the value is never logged or
returned (job reports only `keyConfigured: boolean`); error strings are
scrubbed of any `apiKey=` fragment.

## Verification

- Archiver suites: **71/71 pass** (54 pre-existing + 17 new). Package-wide
  suite: the same 51 failures in the same 7 unrelated files as the parent
  branch — pre-existing, zero regressions.
- Typecheck: byte-identical to the pre-change baseline (57 pre-existing error
  lines in unrelated files; **zero new**).

## Blocked step (one, exact reason)

**Live dry-run against tonight's SEA@DEN (2026_06_SEA_DEN) is BLOCKED:
`THE_ODDS_API_KEY` is not present in this environment** (checked: shell env,
repo/app `.env*` files — only `.example` files exist; no Odds API connector
credential). The real CLI was run end-to-end 2026-10-15 ~18:19Z and behaved as
designed: `keyConfigured: false`, zero API calls, zero rows, exit 1, error
named. **No ladder data is reported because none was captured — nothing is
invented.** The moment the key is in the environment, one command produces
tonight's ladders (game is inside the 48h window until 7:15 PM CT kickoff):
`npx tsx packages/ingestion-pipeline/src/line-archiver/run-oddsapi-product-prices.ts --dry-run`

## Remaining gaps

- **Teasers:** The Odds API exposes no teaser market (book-side parlay
  construct) — remains uncaptured, vendor-catalog reason, stated in README.
- **Buy-points:** not a distinct market — they are ladder rungs adjacent to
  the main line and ARE captured as `ALT_*` rows when the ladder ships.
- No cron route yet (deliberate: the leg spends; cadence is a scheduling
  decision). Wire it when SPEC-B product scoring goes live.
