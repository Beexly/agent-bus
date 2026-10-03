# docs/ops/hermes/l14-label-census/RESULTS.md

## What it is (1-2 sentences)
Label-availability census (v3, queried 2026-08-19T17:31:57Z by `hermes_ro` on a copy-on-write Neon branch) measuring how many clean closing-line labels the 1,368,288-row live `odds` table holds per sport/market. Its headline verdict: there are not enough clean labels per sport to train a close-prediction model; the dedicated `odds_line_snapshots` archive exists but has 0 rows (LINE_ARCHIVE_ENABLED never persisted a snapshot).

## Key metrics/methods (formulas where given, else "not specified")
- **Market** = one `(game, odds.market)` tuple. **Eligible** = at least 3 distinct pre-start timestamps, from at least 3 books, spanning at least 2 hours before start. **Clean close** = eligible, plus a book-quoted snapshot with age in `[0, 15]` minutes before start (a 30-minute stale bound is noted as implied).
- Books observed: 11 sportsbooks plus `espn_public`; dropping `espn_public` does not change any clean count.
- NFL preseason = `americanfootball_nfl` games with UTC commence month 7 or 8 (no `americanfootball_nfl_preseason` sport key exists).
- First-half totals are not ingested at all (`OddsMarket` is only H2H / SPREADS / TOTALS; 0 rows match half/1H/H1).

## Data sources named
- Live `odds` table in `gse-postgres/neondb` (1,368,288 rows; census ran on branch `hermes-census-20260819`).
- 11 sportsbooks + `espn_public` (The Odds API feed).
- `opening_lines` table (first-seen SPREADS 1,099 rows, TOTALS 1,080 rows; no moneyline opener table; rows not timestamped history).
- Empty `odds_line_snapshots` archive (0 rows).

## Findings (numbers and facts, not vibes)
- **Go/no-go: NO** — not enough clean labels per sport to train a close-prediction model.
- **MLB has the most labels:** 241 clean closes each on spread, full-game total, and moneyline (eligible window 2026-05-22 to 2026-08-20); 717 games with odds, 569 eligible per market. Median opener ~24.8–25.1 hours before start; median snapshot cadence 19.4 minutes.
- MLS: 111 games with odds, ~79–81 eligible, 23–24 clean closes (median opener 89.7h, cadence 18.9 min).
- NBA: 12 games, 10 eligible, 1 clean close per market (median opener 42.3h, cadence 116.1 min).
- NHL: 12 games, 12 eligible, 0 clean closes per market (cadence 110.3 min).
- NCAAF: 161/142/124 games with odds across spread/total/ML, 99/94/65 eligible, 0 clean closes; first snapshots are futures (~2,391h for spread, ~503.9h for totals/ML); cadence 48.7 min; eligible window 2026-08-29 to 2026-11-08.
- NFL preseason: 48 August games (16 already FINAL) with zero odds rows. NFL regular season: 84 future games, last snapshot 2026-06-17, 69 eligible spread/total, 21 eligible ML, 0 clean closes; median opener 3,056.1h (~127 days), cadence 136.6 min.
- NCAAB: 0 rows on any market.
- Line history begins 2026-05-22 — no prior season. The 241 MLB clean closes all had at least 3 books inside the 15-minute window.
- True openers are not held for the sports that have labels: MLB's median first snapshot is ~25h before start; NFL/NCAAF first snapshots are futures.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: this is market-data infrastructure intelligence — it quantifies CLV/closing-line training-label availability, directly feeding the backtest/calibration lane.
- OTHER: the NFL regular-season 0-clean-close count plus a 3,056-hour median opener confirms the NFL market-signal lane currently cannot be calibrated on closes; any model trained now must use futures-movement or backfilled odds (Odds API backfill lane) rather than close labels.

## Engine-actionable? (yes/no + one-line what)
Yes — defines the CLV/calibration training-data ceiling per sport (MLB-only viable for close-prediction training today) and flags the LINE_ARCHIVE_ENABLED snapshot gap + first-half-total ingestion gap as wiring targets.
