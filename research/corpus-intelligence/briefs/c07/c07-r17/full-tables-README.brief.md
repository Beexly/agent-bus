# arxiv-program/research/2026-09-21/full-tables/README.md
## What it is (1-2 sentences)
Documentation of one AM and one PM read-only browser sweep (2026-09-21) transcribing chart/table images into CSVs verbatim, with per-chart metadata (qualifiers, footers, data sources, capture URLs, completeness notes).

## Key metrics/methods (formulas where given, else "not specified")
- Chart 1: Total QBR ordering, qualifiers "pre-MNF | Season: 2026 | Min. 20 rel. plays & 15 pass attempts"; "Total QBR" definition NOT given by author — matches ESPN's 0–100 Total QBR but not confirmed.
- "RB Rush Share" = share of team RB rush attempts; columns '25, '26, +/-.
- "PASS ATTEMPTS BY AIR YARDS" — % of attempts in buckets 0-5, 6-10, 11-20, 21+; min 15 attempts.
- Deep Pass % + Deep Pass EPA; "Top 10 single-game blitz rates since 2022" (SumerSports); RBs >16.0 FPG while running a route on <35% of team dropbacks (since 2021); WR catchable vs uncatchable air yards.
- MIA-vs-SF Week 2 game recap: 14-metric card, 0.91 EPA/dropback for SF, 99.7th-percentile passing performance; final 35–13.

## Data sources named
@sfdata9ers (X), @MagicSportsGuy, @GridironInfo_, @NFL_University ("Data via NFL Pro on September 21 Through SNF"), @SamHoppen / SumerSports, @RyanJ_Heath / @FantasyPtsData (author is Lead Data Writer at FantasyPointsData), @KyleM_FF, statrankings.com (RB rush share data footer); nflverse (air yards footer).

## Findings (numbers and facts, not vibes)
- MIA–SF Week 2: final 35–13; SF 0.91 EPA/dropback (99.7th percentile); MIA better on the ground, SF dominated everywhere else (verbatim post text).
- Air-yards and EPA leaderboards captured as partial (top-1/2/5 + tails) — most CSVs are PARTIAL captures, not full tables.
- Two recurring data-source caveats: most charts state no data source; footer colors per historical percentiles; week-2-only caveats (through SNF, not MNF).
- @MagicSportsGuy caveat: RB rush share noise from injuries (Jones, Saquon, Price) and two blowouts for CMC (plus cramps); only one game for LAR/NYG.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Deep pass % + deep pass EPA, air-yard attempt distributions — QB-BEHAVIOR (QB throw profile/intent).
- Blitz rates (SumerSports) — SCHEME (defensive tendency).
- RB rush share shifts, route% for RBs — OTHER (usage/efficiency; INFERENCE: fantasy-relevant).
- Catchable vs uncatchable air yards — QB-BEHAVIOR (QB accuracy/delivery quality).

## Engine-actionable? (yes/no + one-line what)
no — provenance catalog of social-chart captures; the per-source notes are useful for source tiering, but no tested method or finding ships directly.
