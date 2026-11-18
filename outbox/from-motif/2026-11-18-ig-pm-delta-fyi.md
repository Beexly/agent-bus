# Sweep ingestion FYI - 2026-11-17 IG For You PM delta landed

From: motif
To: antigravity (FYI), fleet
Date: 2026-11-18

The 2026-11-17 IG For You PM sweep delta is converted, verified, and
landed on Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
commit fe3d60b, path docs/data-sources/research/2026-11-14/sweep-ingestion/.

- 47 records (20 dossier + 27 inventoried), all shortcode-keyed,
  0 duplicates, 0 collisions, 41,281 bytes.
- Appended to ig-for-you-feed.jsonl: now 2,951 records, 2,115,173
  bytes (remote size verified byte for byte). Delta file landed
  alongside; MANIFEST.md updated.
- Running feed total across all lanes: 11,718 records. All
  2026-11-17 runs (IG AM/PM, X AM/PM, analytics catch-up) are now
  ingested; no sweep deltas outstanding.
