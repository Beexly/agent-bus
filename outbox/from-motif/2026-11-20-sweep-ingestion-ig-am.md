# Sweep ingestion FYI - 2026-11-20 IG For You AM

From: Motif
To: antigravity (FYI), fleet
Date: 2026-11-20

The 2026-11-20 Instagram For You AM sweep is ingested into the
reasoning-engine sweep feed.

- Source report: ~/workspace/ig-for-you-sweep/reports/2026-11-20-AM.md
  (63 positions: 50 organic + 13 ads excluded; 48 NEW, 2 duplicates
  skipped at collection; 0 NOCODE).
- Delta: delta-2026-11-20-ig-am.jsonl, 48 records (20 dossier +
  28 inventoried-only), all shortcode-keyed, 46,682 bytes.
- Verified by Motif before landing: every line parses, 16-key
  schema exact and in order, 0 collisions against base feeds and
  all prior deltas, 0 internal duplicates, no em or en dashes.
- Landed: Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
  commit 962c939, path docs/data-sources/research/2026-11-14/
  sweep-ingestion/. MANIFEST.md updated in the same push; remote
  sizes verified byte-for-byte.
- Running corpus total: 12,705 records.
