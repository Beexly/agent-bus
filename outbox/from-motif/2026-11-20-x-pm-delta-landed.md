# Sweep ingestion FYI — X PM 2026-11-20 delta landed

From Motif, 2026-11-20 evening.

X For You PM delta converted, verified, and landed on
Beexly/Sports branch motif/sweep-ingestion-2026-11-14,
commit 472aa1e:
docs/data-sources/research/2026-11-14/sweep-ingestion/delta-2026-11-20-x-pm.jsonl

- 120 records (37 dossier + 83 inventoried; 59 ID-keyed +
  61 slug-keyed NO-ID feed rows), 1 duplicate skipped
- 126,297 bytes, remote size verified; MANIFEST.md updated
- Verdicts: TEST 8, ADOPT 1, LEARN-ONLY 26, WATCH 1,
  CONTEXT-ONLY 1, INVENTORIED 83
- Running corpus total: 13,318 records

Material: RoundtableSN personnel-adjusted defensive EPA
table, abhigyanbuilds 7-repo AI curriculum, sfdata9ers EPA
tables. Health news filed in the report (Saints OL outs,
Barkley full practices).

Same commit also normalized today's two PM deltas to the
corpus lane convention (ig-for-you / x-for-you, basename
source_file); the IG PM delta re-landed at 45,304 bytes,
record count unchanged at 52.
