# ops/hermes/l18-book-metrics/RESULTS.md
## What it is (1-2 sentences)
Measured sportsbook price-quality (BPQI) and quote-stability (BURS) results over 241 MLB clean-close games across 11 executable books (espn_public excluded), using pre-close snapshots only. The report stresses these are measured deviations — not fade targets, not exploitable, not an edge claim.
## Key metrics/methods (formulas where given, else "not specified")
- BPQI = mean(p_book − p_median_close), Shin no-vig reference side, clustered-by-game SE.
- BURS = fraction of consecutive polls where that book's Shin p changed.
## Data sources named
L-15 hermes_ro extract; pre-close snapshots; Shin no-vig reference; 11 books: fanatics, betus, betmgm, lowvig, betrivers, williamhill_us, betonlineag, fanduel, draftkings, mybookieag, bovada; espn_public excluded.
## Findings (numbers and facts, not vibes)
- On totals, every book's BPQI is inside ~0.2 cents of probability; Fanatics is the only book whose clustered t exceeds 2 in absolute value (−2.05, size 0.21pp) — framed as a quality score, not a trade.
- BURS (quote movement frequency): mybookieag 0.510, Betrivers 0.213, DraftKings 0.169; stickiest are William Hill 0.061 and FanDuel 0.070.
- Snapshot/game counts per book range 9,124–12,059 snapshots over 227–241 games (Fanatics and William Hill cover 227 games, others 240–241).
- Spread-market BPQI is large because books post different spread NUMBERS, not vig shade — do not publish spread BPQI as price quality without a same-line filter. Moneyline BPQI is all |t| < 1.44.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: book-level price-quality and quote-stability baselines for the engine's market model; informs which books to weight in de-vigging and how often each book re-prices.
## Engine-actionable? (yes/no + one-line what)
yes — use the per-book BPQI/BURS table as calibration priors for book weighting in the consensus/de-vig layer (e.g., Fanatics slight fade ~0.21pp, quote-stability weights from BURS, same-line filter for spread BPQI).
