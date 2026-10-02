# Triage calibration QC — 2026-09-21

Reconstructed scored manifests vs original screening reports:

## Batch 1 — PASS (faithful)
- 143 lines, 143 unique. {3:16, 2:47, 1:42, 0:38} vs screened {3:16, 2:43, 1:29, 0:55}.
- All 16 listed 3s preserved. All 43 listed 2s preserved.
- 4 unlisted papers honestly upgraded to 2 on fresh reads: 2301.13052, 2105.09881, 1902.08081, 1505.06918.
- Note: 3 of the 4 upgrades (1902.08081, 2105.09881, 2301.13052) are already in the COVERED list, so they are skipped by build_manifest.py regardless.

## Batch 3 — PASS (faithful, minor drift)
- 142 lines, 142 unique. {3:41, 2:42, 1:32, 0:27} vs screened {3:41, 2:45, 1:33, 0:23}.
- All 41 listed 3s preserved. Drift of -3 in 2s / +4 in 0s is within re-read variance.

## Batch 4 — FLAG: score inflation in reconstruction
- 142 lines, 142 unique. {3:16, 2:67, 1:20, 0:39} vs screened {3:16, 2:49, 1:42, 0:35}.
- All 16 listed 3s preserved. Of 49 table-listed 2s: 46 preserved, 1 bumped to 3 (2406.16171), 1 dropped to 1 (2105.12196), 1 dropped to 0 (2512.01075).
- 21 unlisted papers upgraded to 2. Mixed quality: plausible (2403.16282 football betting ML, 1601.04302 Footballonomics, 1903.10889 hockey scoring time, 2511.02815 MLB win strength, 2604.08722 soccer CV) alongside weak-for-GSE (2409.01493 Shrouded Sin Taxes, 2607.06495 Pitwall F1 briefings, 1705.05831 ATP rankings).
- Cross-batch calibration spread on 2s: batch2 ~28, batch3 ~45, batch4 ~67. The 2/1 boundary is agent-calibration-sensitive.

## Decision (2026-09-21)
Do NOT re-litigate triage. Reasons:
1. We need 500 of 865 candidates; score≥2 totals ~265+batch5, so ~235 score-1s get selected regardless — the 2/1 boundary only shifts which 1s are marginal.
2. The deep-dive ledger bar (full method, math, dataset, code, reproducible test, numeric gate) is the true filter; weak papers fail there and are replaced from reserve.
3. Fix at manifest time: build_manifest.py must select lane-balanced (per research lane), not purely score/recency, which dilutes single-batch calibration drift.

Batch 2 reconstruction and batch 5 screening still pending at time of writing.
