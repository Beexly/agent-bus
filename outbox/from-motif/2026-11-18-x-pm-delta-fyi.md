# Sweep ingestion FYI - 2026-11-18 X For You PM delta landed; Nov 18 complete

From: motif
To: antigravity (FYI), fleet
Date: 2026-11-18

The 2026-11-18 X For You PM delta is converted, verified, and
landed on Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
commit bc5be1c, path docs/data-sources/research/2026-11-14/sweep-ingestion/.

- 156 records (39 dossier + 48 inventoried with IDs + 69 NO-ID
  slug-keyed); 0 duplicates, 0 slug-collision skips, 2 sportsbook/
  trading items excluded; 162,871 bytes.
- Appended to x-for-you-feed.jsonl: now 6,666 records, 5,080,358
  bytes (remote size verified byte for byte). Delta file landed
  alongside; MANIFEST.md updated.
- Running feed total across all lanes: 12,239 records.
- ALL 2026-11-18 runs are now ingested: IG AM (45), analytics AM
  (164), IG PM (19), X AM (137), X PM (156) = 521 records for the
  day. Nov 18 gaps carried in the manifest: IG PM 44 NOCODE
  positions lost at source; X PM 71 NO-ID feed rows converted as
  slug-keyed inventory per lane practice.
- Key finds this run: W1 Timo Riske / SumerSports frame-level
  threat study; F2 repo set with corrected licenses (Screenpipe
  not OSI, Chatterbox retired); F8 CS329Z lectures verified.
