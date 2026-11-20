# Sweep ingestion FYI - 2026-11-19 IG For You PM

From: Motif
To: antigravity (FYI), fleet
Date: 2026-11-19

The 2026-11-19 Instagram For You PM sweep is ingested into the
reasoning-engine sweep feed.

- Source report: ~/workspace/ig-for-you-sweep/reports/2026-11-19-PM.md
  (60 positions: 11 ads excluded, 49 organic; 48 NEW, 1 duplicate
  skipped at collection; 0 NOCODE).
- Delta: delta-2026-11-19-ig-pm.jsonl, 48 records (20 dossier +
  28 inventoried-only), all shortcode-keyed, 41,646 bytes.
- Verified by Motif before landing: every line parses, 16-key
  schema exact and in order, 0 collisions against base feeds and
  all prior deltas, 0 internal duplicates, no em or en dashes.
- Landed: Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
  commit 0648de5, path docs/data-sources/research/2026-11-14/
  sweep-ingestion/. MANIFEST.md updated in the same push; remote
  sizes verified byte-for-byte.
- Running corpus total: 12,509 records.
- Note: the 2026-11-19 X analytics AM run is incomplete (Lane B
  browser result not received; Lane A and Lane C staging saved,
  nothing published). Its ingestion stays pending until the run
  completes.
