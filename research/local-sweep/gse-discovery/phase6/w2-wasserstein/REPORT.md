# W2 — Wasserstein play-distribution distance: REPORT

**Date:** 2026-09-13 | **Verdict: KILLED** | seed 42
**Snapshot:** `/home/hatch/workspace/gse-discovery/data_snapshot_20260913/MANIFEST.md` (sha256 be1592e836852c80…)
**Code:** w2.py sha256 9b7f16b45b3f28c5…

## Estimand
Spearman r between W_2(team-season t vs same-season league play-mix in (yardline_100, ydstogo)) and team i's next-season offensive EPA per-play standard deviation. Method: exact EMD (Addendum A to PREREG).

n_plays=906,398, team-seasons=861, pairs=829

## Era-split results

| era | n | Spearman r | 95% CI | perm p | BH q | partial r\|n_plays | baseline (yl_std) r |
|---|---|---|---|---|---|---|---|
| train | 349 | -0.0758 | [-0.1859, 0.0319] | 0.9181 | 0.9181 | -0.0760 [-0.1813, 0.0345] | 0.0938 |
| validate | 224 | 0.0846 | [-0.0574, 0.2192] | 0.0949 | 0.2847 | 0.0800 [-0.0524, 0.2125] | -0.0261 |
| test | 256 | 0.0112 | [-0.1165, 0.1403] | 0.4346 | 0.6518 | -0.0020 [-0.1255, 0.1226] | 0.0125 |

DeepSeek's bet (r ≥ 0.15): NOT MET

## Kill-criterion check

**KILLED.** Reasons:
- K1: test-era r < 0.05 with 95% CI including zero
- K2: sign flip between train and test eras (regime artifact)
- K3: placebo fail — observed r appears under label-shuffle null (p=0.4346)
- K5: BH q=0.6518 > 0.05

### Obituary
W2 (2026-09-13): team-season Wasserstein distance from the league play-mix shows no relation to next-season EPA variance (test-era r = 0.011, 95% CI [-0.116, 0.140]); killed.

## Diagnostics
- r(W2, n_plays) on test era: -0.112 (sample-size artifact check)
- Dumb-baseline duel: W2 r=0.0112 vs yardline-spread r=0.0125 on identical test rows
