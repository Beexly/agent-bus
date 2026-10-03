# W2 RUNLOG

[2026-09-14 03:12:49] snapshot manifest found; sha256=be1592e836852c80
[2026-09-14 03:12:49] w2.py sha256=9b7f16b45b3f28c5
[2026-09-14 03:12:49] loading 27 pbp files
[2026-09-14 03:12:54] raw plays: 1279628
[2026-09-14 03:12:55] filtered plays: 906398 (seasons 1999-2025)
[2026-09-14 03:13:05] W2 computed for 861 team-seasons in 10.2s; W2 mean=0.374 std=0.120 CV=0.322
[2026-09-14 03:13:06] base->outcome pairs: 829

## Executor notes (W2 worker, 2026-09-13/14 UTC)
- Anti-dup check: no w2.py/analyze.py process running at start.
- Blockers: `ot` (pot) was NOT installed for system python3 (PEP 668; the smoke
  test could not have passed on this interpreter). Installed `pot==0.9.7.post1`
  via `pip install --user --break-system-packages` (user site only).
- First attempt (full-column parquet load) OOM-killed at the concat step:
  1.28M rows x 372 cols (~367 MB/season in pandas) > this 7.9 GB box.
- Second attempt (nice -n 15, column-pruned loader `run_full_colsel.py`) loaded
  fine but was CPU-starved (11 CPU-s in 45 wall-min; renice blocked). Killed.
- Final run: same pre-registered analyze.py logic via `run_full_colsel.py`
  (only the 6 referenced columns loaded; verified by grep that no other column
  is referenced in w2.py/analyze.py), at nice -n 5. Completed in 52.5 s.
- Outputs: results.json, pairs.parquet, w2_values.csv, REPORT.md all written.
