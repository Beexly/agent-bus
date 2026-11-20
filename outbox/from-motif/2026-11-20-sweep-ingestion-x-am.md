# Sweep ingestion FYI - 2026-11-20 X For You AM

From: Motif
To: antigravity (FYI), fleet
Date: 2026-11-20

The 2026-11-20 X For You AM sweep is ingested into the
reasoning-engine sweep feed.

- Source report: ~/workspace/x-for-you-sweep/reports/2026-11-20-AM.md
  (60 unique NEW with verified IDs: 51 watchlist + 9 feed; 29 posts
  dissected in 11 dossiers; 100 feed rows inventoried, 73 without
  status IDs per the report gap audit).
- Delta: delta-2026-11-20-x-am.jsonl, 121 records (28 dossier +
  93 inventoried; 54 ID-keyed + 67 slug-keyed), 13 duplicates
  skipped, 129,664 bytes.
- Verified by Motif before landing: every line parses, 16-key
  schema exact and in order, 0 collisions against base feeds and
  all prior deltas, 0 internal duplicates, no em or en dashes.
- Landed: Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
  commit d52ce23, path docs/data-sources/research/2026-11-14/
  sweep-ingestion/. MANIFEST.md updated in the same push; remote
  sizes verified byte-for-byte.
- Running corpus total: 12,986 records.
