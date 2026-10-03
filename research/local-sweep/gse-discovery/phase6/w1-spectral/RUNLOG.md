# RUNLOG — W1 spectral worker

**Worker:** Motif (W1) | **Session:** persistent subagent | **Date:** 2026-09-13
**Code:** `w1_spectral.py` (sha256 `71bd6788ff350d6eb9ae07d08025adf42399dc2c10b7218859fa3d7d9511c582`)
**Seed:** 42 (all randomness via SeedSequence in placebo/permutation; DFT/OLS deterministic)
**Data snapshot:** `~/workspace/gse-discovery/data_snapshot_20260913/` — **GATE: MANIFEST.md absent at last check**

## Timeline (UTC-5 local = CDT)

- 2026-09-13 ~20:33 CDT — task received; read protocol §4/W1, program §§4,7, harness API.
- PREREG.md written and locked (estimand, identification, duel spec, 6 kill criteria, analysis plan, seed 42).
- `w1_spectral.py` written: snapshot-gated loader, per-drive binary FFT (zero-pad 16, k=1..8),
  team-season signatures, OLS era-split duel, CV flat-surface gate, harness run_placebo,
  harness duel_report, P>=3 sensitivity via W1_MIN_LEN env var.
- Synthetic smoke test: 6/6 pass —
  1. constant-seq DC leakage documented: 14.3% of total power leaks into k=1..8 (protocol-literal
     zero-padding of nonzero-mean binary seq; leakage tracks pass rate, which baseline controls);
  2. mean-centered constant seq has exactly zero power (road not taken: protocol is literal);
  3. alternating seq peaks at k=8 (Nyquist, period 2);
  4. period-4 seq peaks at k=4;
  5. iid binary seq has flat expected spectrum (max/min < 3 over 2000 draws);
  6. planted-signal end-to-end: incremental R^2 = 0.3652 detected (assert > 0.05).
- Snapshot poll started: checks MANIFEST.md every 120s, up to 4h (`snapshot_gate.log`).

## Pending

- Snapshot gate clear → run `python3 w1_spectral.py` (full analysis, <5 min expected),
  then `W1_MIN_LEN=3 python3 w1_spectral.py` (sensitivity), then write REPORT.md.
- If gate does not clear within the poll window: report blocked-with-code-ready
  (no analysis on live data, per PREREG §6).

## Full-run execution (2026-09-14 ~02:53-03:10 UTC)

- 02:53 UTC — first full run hit the data gate: snapshot stores per-season `pbp_1999.parquet`..`pbp_2025.parquet`, script expected a combined file. Two attempted runs silently died (OOM: 7.7GB box, loading 1.28M rows x ~370 parquet cols at once).
- Loader fix (data-path only, no analysis change — recorded here per prereg amendment rule):
  fall back to concatenating per-season `pbp_YYYY.parquet` files, read only the 7 needed columns via `columns=cols`, `del` frames/pbp after use, `gc.collect()`. Code sha256 now `5a7c16c3f443f77f...` (was `71bd6788ff350d6e...`).
- 03:02 UTC — main run (min_drive_len=1) COMPLETED: 1,279,628 pbp rows loaded, 829 team-seasons, seasons 1999-2024.
- 03:10 UTC — sensitivity rerun with `W1_MIN_LEN=3` COMPLETED (note: it overwrote `w1_summary.json` and the duel report; main-run artifacts restored: `w1_summary.json` rebuilt from `w1_run.log`, p3 artifacts renamed `w1_summary_p3.json` / `w1_duel_report_p3.md`).

## Verdict: KILL — multiple kill criteria fire (see REPORT.md)
