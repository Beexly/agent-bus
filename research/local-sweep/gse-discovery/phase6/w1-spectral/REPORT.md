# W1 / spectral-rhythm — FINAL REPORT

**Worker:** Motif (W1) | **Run:** 2026-09-14 ~03:02 UTC (main, min drive len 1) and ~03:10 UTC (sensitivity, min drive len 3)
**Data:** frozen snapshot `~/workspace/gse-discovery/data_snapshot_20260913/` (MANIFEST.md 2026-09-14T02:49:49Z, 27 seasons 1999–2025, 1,279,628 pbp rows)
**Code:** `w1_spectral.py` sha256 prefix `5a7c16c3f443f77f` (PREREG code hash `71bd6788ff350d6e` superseded by a loader-only fix documented in RUNLOG.md — no analysis change)
**Seed:** 42 (permutation/placebo only; DFT and OLS deterministic)
**Logs:** `w1_run.log`, `w1_run_p3.log`, `w1_summary.json`, `w1_summary_p3.json`, `w1_duel_report_p3.md`, RUNLOG.md

---

## VERDICT: KILL

The spectral-rhythm family fails the pre-registered kill line on the 2018–2025 test era and trips two of the six kill criteria outright.

## Kill-criteria audit (PREREG §4)

| # | Criterion | Result |
|---|-----------|--------|
| 1 | Test-era incremental R² over baseline-2 OLS ≥ 0.02 | **FIRES (KILL).** Test incr R² = **−0.0212** (P≥1) / **−0.0242** (P≥3). Adding the 8 spectral features *hurts* out-of-sample. |
| 2 | Test-era baseline-2 R² ≤ 0 → vacuous duel | Does not fire: baseline-2 test R² = +0.1392 (n=224). Outcome is modelable; spectral adds nothing. |
| 3 | Placebo: statistic appears under the label-shuffled null (p_shuffle ≥ 0.05) | **FIRES.** p_shuffle = 0.388 (P≥1) / 0.478 (P≥3); p_synth = 0.343 / 0.408; `appears_under_null=True`. The observed statistic cannot be separated from noise under the pipeline's own null. |
| 4 | Effect only in train era, absent in val + test | Present: train incr = +0.0317 / +0.0282; validate = −0.0046 / −0.0120; test = −0.0212 / −0.0242. Train-only lift that vanishes on unseen eras = in-sample overfit, not durable rhythm skill. |
| 5 | Flat-surface gate: CV(‖S‖₂) < 0.05 | Does not fire: CV = 0.107 (P≥1) / 0.104 (P≥3). Rhythm signatures *do* vary across teams — the null surface is not flat, which makes the failure more informative (measurable structure, zero predictive carry). |
| 6 | P≥3 sensitivity: incr R² moves > 0.01 when dropping 1–2-play drives | Does not fire as instability, but confirms the kill: −0.0212 → −0.0242 (Δ = 0.003). The failure is not a short-drive artifact; the family is dead under both filters. |

## Duel numbers (OLS, standardized on train era, fit t ≤ 2010)

Main run (P≥1, 829 team-seasons):

| Era | n | baseline-2 (EPA/play + pace + pass_rate) | + spectral S_1..S_8 | incremental |
|-----|---|---:|---:|---:|
| train (t ≤ 2010) | 381 | 0.2701 | 0.3017 | **+0.0317** |
| validate (2011–2017) | 224 | 0.1358 | 0.1312 | −0.0046 |
| test (2018–2024) | 224 | 0.1392 | 0.1180 | **−0.0212** |

Sensitivity (P≥3): train +0.0282, validate −0.0120, test **−0.0242**. DeepSeek's predicted ≥ +0.03 on test is falsified; the sign is reversed.

## Obituary

W1 spectral-rhythm is dead: play-call frequency structure varies measurably across teams (CV 0.107) but carries no next-season predictive signal beyond EPA, pace, and pass rate. The train-era lift (+0.03) is pure overfit — 11 features on 381 rows — and the placebo cannot distinguish the statistic from noise. No deeper runs warranted.

## Notes / follow-ups

- **Process lesson:** the shared 7.7 GB box OOM-killed the first two full runs (loading 27 seasons of full-width parquet at once); fix was column-pruned per-season concat. Any future Phase-6 worker on this snapshot should reuse that loader pattern.
- The `duel_report` for the main P≥1 run was overwritten by the P≥3 rerun; numbers above come from `w1_run.log`. P≥3 report survives as `w1_duel_report_p3.md`.
- The family died clean — no amendment needed to the PREREG beyond the logged loader fix.
