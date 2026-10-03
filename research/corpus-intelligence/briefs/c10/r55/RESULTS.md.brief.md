# ops/hermes/hf7-archive/RESULTS.md
## What it is (1-2 sentences)
A liveness audit of the H-F7 odds line archive table in the Neon `gse-postgres` database, queried 2026-08-20 via `neonctl psql` as `hermes_ro` on branch `main`, SELECT-only.
## Key metrics/methods (formulas where given, else "not specified")
Row counts only; no formulas.
## Data sources named
Neon project `gse-postgres` (summer-brook-99380762), table `odds_line_snapshots`; query SQL at `docs/ops/hermes/hf7-archive/query.sql`.
## Findings (numbers and facts, not vibes)
- `odds_line_snapshots` total: 37,402 rows; MLB (`baseball_mlb`): 11,318; NFL (`americanfootball_nfl`): 9,864.
- Phase breakdown at query time: MLB OPEN 144 / INTERIM 11,174 / CLOSE 0; NFL OPEN 96 / INTERIM 9,768 / CLOSE 0.
- A second total count 18 rows earlier in the same session was 37,384 — the table is still receiving writes.
- `LINE_ARCHIVE_ENABLED` is bound in production.
- CLOSE-phase rows are absent for MLB and NFL — the archive is live on OPEN/INTERIM but not yet stamping CLOSE on these two sports. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Archive live on OPEN/INTERIM only, no CLOSE stamping for NFL/MLB — INFERENCE: line-movement/closing-line-value calibration data is incomplete; any CLV-based trust signal cannot be computed from this archive. [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
Yes — archive stamping CLOSE phases for NFL/MLB would unlock closing-line-value calibration; verify CLOSE stamping is now live before relying on this archive for CLV.
