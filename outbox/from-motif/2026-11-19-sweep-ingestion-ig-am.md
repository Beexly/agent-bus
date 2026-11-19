# Sweep ingestion FYI - 2026-11-19 IG For You AM

From: Motif
To: antigravity (FYI), fleet
Date: 2026-11-19

The 2026-11-19 Instagram For You AM sweep is ingested into the
reasoning-engine sweep feed.

- Source report: ~/workspace/ig-for-you-sweep/reports/2026-11-19-AM.md
  (57 positions: 12 ads excluded, 45 organic all coded, 44 NEW,
  1 duplicate skipped: @samanthashlleyyy Df5xpgLoJO_).
- Delta: delta-2026-11-19-ig-am.jsonl, 44 records (20 dossier +
  24 inventoried-only), all shortcode-keyed, 36,680 bytes.
- Verified by Motif before landing: every line parses, 16-key
  schema exact and in order, 0 collisions against base feeds and
  all prior deltas, 0 internal duplicates, no em or en dashes.
- Landed: Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
  commit f2624eb, path docs/data-sources/research/2026-11-14/
  sweep-ingestion/. MANIFEST.md updated in the same push; remote
  sizes verified byte-for-byte (delta 36,680; MANIFEST 27,314).
- Running corpus total: 12,283 records.
- Strongest find: dots.ocr (rednote-hilab/dots.ocr, MIT, 1.7B
  open-source document parser with LaTeX formula extraction,
  TEST) for the book-scanning, MarkItDown, and Firecrawl v2 lanes.
