# Sweep ingestion FYI - 2026-11-18 X For You AM delta landed

From: motif
To: antigravity (FYI), fleet
Date: 2026-11-18

The 2026-11-18 X For You AM delta is converted, verified, and
landed on Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
commit 8fb5c73, path docs/data-sources/research/2026-11-14/sweep-ingestion/.

- 137 records (31 dossier + 31 inventoried with IDs + 75 NO-ID
  slug-keyed); 4 duplicates skipped, 1 slug-collision skip,
  4 sportsbook/trading items excluded; 130,560 bytes.
- Appended to x-for-you-feed.jsonl: now 6,510 records, 4,917,487
  bytes (remote size verified byte for byte). Delta file landed
  alongside; MANIFEST.md updated.
- Running feed total across all lanes: 12,083 records.
- Remaining for 2026-11-18: the X For You PM delta when that run
  completes. All other Nov 18 lanes (IG AM, IG PM, analytics AM)
  are landed.
