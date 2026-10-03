# W3 REPORT — Fisher-Rao play-call geometry

**Family:** W3 (DeepSeek white-space proposal §4/W3) | **Runner:** Motif (direct execution)
**Date:** 2026-09-14 | **Verdict: KILLED — honest NULL**
**Preregistration:** `PREREG.md` (locked 2026-09-13, before data; estimator spec + kill criteria)

---

## Obituary (one line)

W3: within-division vs cross-division play-call geometry is indistinguishable — Cohen's d = 0.009 on 11,904 team-season pairs (seasons 2002–2025), permutation p = 0.35, test-era sign flips negative; killed.

---

## What was tested

Per DeepSeek's protocol: per-team-season 36-cell play-call distributions (down × distance × field-position cells), closed-form Fisher-Rao distance via Hellinger embedding. Hypothesis: division rivals game-plan against each other more specifically, so within-division pairs should show smaller (more similar) play-call distances than cross-division pairs, after residualizing on Elo and season. Seasons 2002–2025 (division structure changed in 2002).

**Data:** frozen snapshot `data_snapshot_20260913` (MANIFEST.md 2026-09-14T02:49:49Z, 27 seasons, 1,279,628 pbp rows). Staged via `staging/stage_pbp.py` (per-season SHA verification, 1,279,628 rows, 11 columns). Seed 42. Code `w3_fisherrao.py` (one mechanical post-data fix: harness returns `n_perm` not `n_permutations` — no analysis change).

## Results

| Split | n pairs | Cohen's d (within vs cross, residualized) |
|---|---|---|
| train ≤2010 | 4,464 | +0.046 |
| validate 2011–2017 | 3,472 | +0.025 |
| **test 2018–2025** | **3,968** | **−0.048** |
| **all** | 11,904 | **+0.009** |

- Permutation placebo (1,000 perms, team-label shuffle): p = **0.348** — observed d appears under the null.
- Raw means: mean D_FR within-division = 0.2607, cross-division = 0.2611 — identical to 4 significant figures before any modeling.
- Elo residualization coefficient β_elo ≈ 5.7e-05 (negligible confounding).
- Smoothing robustness (α = 0.1, 1.0): d = 0.0086 / 0.0096 — stable near zero, no sign flip, but the magnitude is nil.
- Runtime: 732 s.

## Kill-criteria audit (PREREG)

| # | Criterion | Result |
|---|---|---|
| 1 | Cohen's d < 0.1 | **FIRES** (d = 0.009) |
| 2 | permutation p ≥ 0.05 | **FIRES** (p = 0.35) |
| 3 | era sign flip | **FIRES** (test d = −0.048) |
| 4 | test-era d < 0.1 | **FIRES** |
| 5 | smoothing sign flip | does not fire (both near zero) |

Four of five kill criteria fire. The family is dead: division rivals do not call plays any more similarly to each other than to out-of-division opponents, on 24 seasons of data.

## Artifacts

- `results/w3_results.json` — full results (kill_criteria, era splits, diagnostics, seeds)
- `results/pair_distances.parquet` — pair-level distances (regenerable)
- `w3_run.log` — run log; `staging/stage.log` — staging log with per-season SHA checks
- `RUNLOG.md` — execution notes
