# T5 REPORT — survival analysis of drives

## Verdict: NOT PROMOTED (honest obituary)

**All preregistered gates failed.** The drive-survival hazard ratings do not
beat EPA/drive or Elo at next-week prediction, and they have zero cross-era
stability. The discovery is a null result.

| Gate | Result | Detail |
|------|--------|--------|
| K1 (duel vs best baseline) | **FAIL** | Hazard log-loss 0.6778 vs Elo 0.6512 (Δ=+0.0265, worse), one-sided permutation p=1.0; required Δ≤−0.002 with p<0.05 |
| K2 (disagreement region) | **FAIL** | n=1154 disagreement games; hazard worse by 0.0351, p=1.0 |
| K3 (placebos) | **FAIL** | P3: target-shuffled null yields max|FE|=0.117 (required <0.05). Null data produces spurious team effects, confirming FE are noise. P2 incomplete (compute restarts) |
| K4 (cross-era stability) | **FAIL** | Spearman ρ=−0.001, p=0.506 (n=32); required ρ>0.2, p<0.05 |
| Market duel | **FAIL** | Hazard edge coefficient −0.013, t=−0.12, p=0.903 (no value over closing line) |

BH-adjusted p-values: all 1.0.

## What was tested

**Hypothesis:** Drive-ending score/death hazards can replace EPA as the
primitive for team strength ratings.

**Estimand:** Discrete-time cause-specific hazards per play:
- `h_score`: P(drive ends in offensive TD or made FG on this play | survives)
- `h_dead`: P(drive ends scoreless — punt, turnover, turnover on downs,
  missed/blocked FG, opponent TD — on this play | survives)
- Censored: drive ends because half/game ends, or offense kneels out clock
- Safeties excluded (<0.5% of drives)

**Team strength:** S_i = (off_score_i − off_dead_i) − (def_score_i − def_dead_i),
log hazard ratios vs league average, sum-to-zero.

**Model:** logit h_c = intercept + t_bin + down + yds_bin + yl_bin + sd_bin +
clk_bin + off[posteam] + def[defteam]; weighted logistic IRLS on aggregated
cells; ridge 1e-6.

## Data

Frozen snapshot `data_snapshot_20260913` (2026-09-14T02:49:49Z):
nflverse via nflreadpy 0.1.5, seasons 1999–2025.
- Train (≤2010): 420,224 cells, 440,046 plays
- Validation (2011–2017): 253,041 cells, 264,520 plays
- Test (2018–2025): 2,127 games

## Duel results (test 2018–2025, n=2127)

| Model | Log-loss | Accuracy |
|-------|----------|----------|
| Hazard S | 0.6778 | 0.573 |
| EPA/drive | 0.6567 | 0.612 |
| Elo | **0.6512** | **0.628** |

The hazard ratings are strictly worse than both EPA and Elo. The gap to
Elo (0.0265) is 13× larger than the preregistered superiority margin
(0.002), in the wrong direction.

## Hazard ratios (train era — mechanics validated)

The covariate effects are interpretable and correct:
- **3rd down**: score HR 12.3×, death HR 163× (drives resolve on 3rd down)
- **Pinned deep** (yl_bin=5): death HR 15.1×
- **Long distance** (yds_bin=6): death HR 2.5×
- **Leading**: higher score HR, lower death HR

The model learns real football mechanics. The failure is not in the
hazards — it's that team fixed effects from ~2 seasons of drives do not
persist across eras.

## Why it failed

1. **No cross-era stability (K4):** Team hazard ratings from 1999–2010 have
   zero correlation (ρ=−0.001) with ratings from 2011–2017. The "team
   effect" is sampling noise.

2. **Dominated by situational covariates:** Drive outcomes are overwhelmingly
   determined by down, distance, and field position. After conditioning on
   these, little residual signal remains for team fixed effects.

3. **Worse than simpler primitives:** EPA/drive and Elo — which aggregate
   more efficiently — both beat the hazard ratings out of sample.

## Obituary

T5 asked whether survival analysis of drives could discover a team-strength
primitive to replace EPA. The answer is no. The hazard model is
mechanically sound and interpretable, but team-level hazard fixed effects
are not a stable attribute. They do not persist across eras, and they do
not predict better than EPA or Elo. EPA remains the superior primitive.

## Provenance

- Seed: 3705 (all stochastic operations)
- Snapshot: ~/workspace/gse-discovery/data_snapshot_20260913/
- Code: ~/workspace/gse-discovery/phase6/t5-survival/
- Prereg: PREREG.md (amendments A1–A10; A10 noted as post-hoc)
- RUNLOG.md: full incident log
- Outputs: duel_out/eval.json, duel_out/k4_stability.json,
  duel_out/hazard_ratios_train.json, duel_out/weekly/ (260 files)

## Deviations and limitations

- **A10 (P2 placebo rule):** Changed after frozen-data fitting began;
  flagged as post-hoc, not primary preregistration.
- **Window definition:** Train hazard uses expanding all-prior-season fits;
  EPA uses S−2/S−1 + current weeks; Elo is chronological. A6 overclaimed
  window identity; the duel is valid but not perfectly symmetric.
- **K3 incomplete:** Placebo P2 (parametric bootstrap) was interrupted by
  compute restarts. P3 completed and FAILED (max|FE|=0.117 on null data),
  which supports the noise interpretation. Given K1/K4 failures,
  K3 cannot affect the promotion verdict.
- **Ties:** Included as home_win=0 (away win or tie); ties are rare (<1%)
  and do not affect conclusions.
