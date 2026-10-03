# W4 REPORT — Change-point detection on within-game play-calling

**Family:** W4 (DeepSeek white-space proposal §4/W4) | **Worker:** Motif
**Date:** 2026-09-13/14 | **Verdict: KILLED — honest NULL**
**Preregistration:** [PREREG.md](sandbox://workspace/gse-discovery/phase6/w4-changepoint/PREREG.md) (locked 2026-09-13, before data)

---

## Obituary (one line)

W4: the change-point count in within-game play-calling shows no positive
adaptivity effect — partial Spearman r = **-0.031** (95% CI [-0.057, -0.005])
on the 2018–2025 test era, negative in all three era splits; more mid-game
strategy shifts weakly predict *lower* WPA, so the adaptive-coaching
hypothesis is rejected.

---

## What was tested

Per team-game, PELT (L2 cost on the binary pass/run sequence,
penalty = 0.5·log(n), calibrated on synthetic data before touching real
data) → N_cp = number of change-points, t_cp = median position.
Hypothesis (DeepSeek): adaptive coaches (more change-points) outperform
script-stickers → positive partial Spearman r(N_cp, in-game WPA) after
controlling for EPA and the score-differential trajectory. DeepSeek's bet:
r ≥ 0.10. Kill line: r < 0.03 → kill.

## Results

| Era | n (team-games) | partial r | 95% bootstrap CI |
|---|---|---|---|
| train ≤2010 | 6,090 | -0.013 | [-0.036, 0.008] |
| validate 2011–2017 | 3,584 | -0.027 | [-0.056, 0.006] |
| **test 2018–2025** | **4,254** | **-0.031** | **[-0.057, -0.005]** |

- Replication seeds 123 and 7: r = -0.0313, CIs [-0.059, -0.004] and
  [-0.059, -0.003] — verdict is stable.
- Permutation null (WPA shuffled, n=1000): null mean -0.0002, sd 0.0119;
  observed -0.0313 is ~2.6 sd below the null — the negative association is
  real, not noise. (The harness `run_placebo` auto-verdict says "appears
  under null" because the observed value is *below* the null distribution
  on a greater-alternative test — a quirk of the one-sided setup against a
  wrong-direction effect, not a broken pipeline.)
- Dumb-baseline duel: raw pass-rate (same controls) r = -0.082; incremental
  R² of N_cp over the controls-only rank-OLS = 0.00045 (win condition needed
  > 0.002) — N_cp adds nothing.
- Confound check: score trajectory explains only R² = 0.010 of N_cp, and
  r without score controls (-0.025) is similar to r with them (-0.031) — the
  negative association is not a pure score-path relabeling.
- Flat-surface diagnostics: 81–83% of team-games have N_cp = 0 (below the
  95% degeneracy threshold — the detector has variation to work with);
  mean N_cp/100 plays drifts slightly down across eras (0.33 → 0.31 → 0.29).
- Secondary estimand: median t_cp = 0.70 of game elapsed — change-points
  cluster in the second half (late game-script adjustments), as expected.

## Kill criteria (from PREREG.md §4)

1. r < 0.03 → **FIRED** (r = -0.031, wrong sign vs. the bet).
2. r positive in ≥ 2 eras → **FIRED** (negative in all three).
3. Redundancy / duel → **FIRED** (incremental R² = 0.00045 < 0.002).
4. BH: primary p-value contributed to the family-battery correction —
   moot, the claim is dead on the primary test.

## Interpretation

The sign is the story: teams that shift strategy more often within a game
tend to gain slightly *less* win probability, not more. The most plausible
reading is desperation churn — losing teams cycle through play-calling
regimes as the game slips away — rather than coaching adaptivity as a skill.
Either way, N_cp is not a positive adaptivity signal and carries no
predictive value for WPA beyond EPA and score controls.

## Files

- Code: `pelt_fallback.py` (vectorized PELT; 30/30 identical to ruptures 1.1.10),
  `build_features.py`, `analyze.py`, `make_figures.py`
- Data: `results/team_game_features.parquet` (13,928 team-games),
  `results/w4_results.json`, `results/build_diagnostics.json`,
  `results/build_provenance.json` (snapshot ref + code hashes)
- Figures: `results/figures/era_partial_r.png`, `results/figures/ncp_hist.png`
- Logs: `RUNLOG.md`, `build_stdout.log`, `analyze_stdout.log`

**Snapshot:** `~/workspace/gse-discovery/data_snapshot_20260913/` (MANIFEST.md
present; all 27 seasons pbp, 1,279,628 plays, checksums verified 0 mismatches).
Seeds: 42 primary; 123, 7 replication. Snapshot ref recorded in
`results/build_provenance.json`.
