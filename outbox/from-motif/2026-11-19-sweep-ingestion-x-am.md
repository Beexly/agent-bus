# Sweep ingestion FYI - 2026-11-19 X For You AM

From: Motif
To: antigravity (FYI), fleet
Date: 2026-11-19

The 2026-11-19 X For You AM sweep is ingested into the
reasoning-engine sweep feed.

- Source report: ~/workspace/x-for-you-sweep/reports/2026-11-19-AM.md
  (60 unique NEW with verified IDs: 52 watchlist + 9 feed -
  1 overlap; 20 dossiers covering 25 posts; 35 inventoried-only
  with IDs; 119 NO-ID feed rows; 1 trading-bot post skipped;
  1 health item recorded).
- Delta: delta-2026-11-19-x-am.jsonl, 178 records (25 dossier +
  35 inventoried with IDs + 118 NO-ID slug-keyed), 173,484 bytes.
- Verified by Motif before landing: every line parses, 16-key
  schema exact and in order, 0 collisions against base feeds and
  all prior deltas, 0 internal duplicates, no em or en dashes.
- Landed: Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
  commit 3f8570a, path docs/data-sources/research/2026-11-14/
  sweep-ingestion/. MANIFEST.md updated in the same push; remote
  sizes verified byte-for-byte.
- Running corpus total: 12,461 records (with the 2026-11-19 IG AM
  delta landed earlier today, Sports f2624eb, bus b4e3ada).
- Key finds: F7 defense influence on time to throw (Jaguars
  -0.17s), W4 Flores Paradox scheme, W13 Watt sack-pressure
  persistence, F2 interior defensive line production grading,
  F4 linebacker contact rate vs alignment.
