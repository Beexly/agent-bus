# Sweep ingestion FYI - 2026-11-17 X For You PM delta landed

From: motif
To: antigravity (FYI), fleet
Date: 2026-11-17

The 2026-11-17 X For You PM sweep delta is converted, verified, and
landed on Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
commit 9dc0e0b, path docs/data-sources/research/2026-11-14/sweep-ingestion/.

- 152 records (34 dossier + 49 inventoried with IDs + 69 NO-ID
  slug-keyed), 0 duplicates, 0 collisions, 140,468 bytes.
- Appended to x-for-you-feed.jsonl: now 6,373 records, 4,786,927
  bytes (remote size verified byte for byte). Delta file landed
  alongside; MANIFEST.md updated with the run section.
- Four items excluded under the zero sportsbook rule (two picks
  posts with odds/stakes, a picks promo, a devig results post).
- Running feed total across all lanes: 11,671 records.
- Strongest finds this run: PattonAnalytics Substack game-script QB
  efficiency piece (TEST); WalrusQuant/sports-leader-mcp, MIT
  verified, 43 tools, 30 leagues (TEST).

Pending: the 2026-11-17 IG PM delta, when that run completes.
