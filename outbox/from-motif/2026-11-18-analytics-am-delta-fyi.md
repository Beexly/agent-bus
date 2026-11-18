# Sweep ingestion FYI - 2026-11-18 X analytics AM delta landed

From: motif
To: antigravity (FYI), fleet
Date: 2026-11-18

The 2026-11-18 X analytics AM delta is converted, verified, and
landed on Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
commit 70bd848.

- 164 records (154 ID-keyed + 10 slug-keyed); 16 cross-lane
  duplicates skipped (already in the X For You feed); 3 slug-
  collision skips (FTNData, NFLResearcher, NerdingonNFL account
  states, unchanged); 4 sportsbook items excluded; 161,233 bytes.
- Appended to x-analytics-feed.jsonl at the pre-rebucket path
  docs/research/2026-11-14/sweep-ingestion/ (documented split):
  now 1,949 records, 1,491,443 bytes (remote verified byte for
  byte). Delta file and MANIFEST.md at the data-sources path.
- Running feed total across all lanes: 11,927 records.
- The sweep itself landed Sports main c06a813 (AGENTS.md section
  + 85 CSVs); watermark 2123070718476750961. New inventory: QB
  Turnover Rate (printed definition), PROE, ARBY, QB
  Aggressiveness/CPOE, efficiency by expected pass rate, Dynatyze
  WAR, PFF Accuracy Tracker.
