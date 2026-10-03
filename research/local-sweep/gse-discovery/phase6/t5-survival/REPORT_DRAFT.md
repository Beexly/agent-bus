# T5 REPORT — survival analysis of drives

## Verdict: NOT PROMOTED (honest obituary)

**K4 (cross-era stability) FAILED decisively:**
- Train (≤2010) vs validation (2011–2017) team-strength Spearman ρ = **−0.001**
- Permutation p = **0.506** (n = 32 teams)
- Prereg required ρ > 0.2 with p < 0.05

Per the preregistered promotion rule (K1 + K3 + K4 all required), the
discovery cannot be promoted regardless of duel outcomes. The hazard
ratings do not measure a stable team attribute — they are dominated by
sampling noise.

## What was built

**Estimand:** Discrete-time cause-specific hazards per play within a drive.
- `h_score`: drive ends in offensive TD or made FG on this play
- `h_dead`: drive ends scoreless (punt, turnover, turnover on downs,
  missed/blocked FG, opponent TD e.g. pick-six)
- Censored: drive ends because the half/game ends, or the offense kneels
  out the clock (per prereg: half/game-ending drives are censored, not deaths)
- Safeties: excluded (<0.5% of drives), logged per prereg

**Team strength:** S_i = (off_score_i − off_dead_i) − (def_score_i − def_dead_i),
log hazard ratios vs league-average team, sum-to-zero constrained.

**Model:** logit h_c(play) = intercept + t_bin + down + yds_bin + yl_bin +
sd_bin + clk_bin + off[posteam] + def[defteam]. Weighted logistic IRLS on
aggregated cells; full-rank drop-first parameterization; ridge 1e-6.

## Data

Frozen snapshot `data_snapshot_20260913` (manifest 2026-09-14T02:49:49Z):
nflverse via nflreadpy 0.1.5, Polars 1.44.2, seasons 1999–2025.
- 2024 mechanics panel: 49,492 raw PBP rows → 38,668 risk-set plays →
  37,119 cells; 2,376 score events, 3,284 scoreless-death events.
- Train era (≤2010): 420,224 cells, 440,046 plays.
- Validation era (2011–2017): 253,041 cells, 264,520 plays.
- Weather: recorded gap (no nflverse source in manifest).

## Hazard ratios (train era, interpretable and sensible)

The covariate effects validate the mechanics:
- **3rd down**: score HR 12.3x, death HR 163x (drives end on 3rd down)
- **Field position** (yl_bin, higher = pinned deep): death HR rises to 15.1x
- **Distance** (yds_bin): death HR rises to 2.5x at long distance
- **Score differential**: leading teams have higher score HR, lower death HR

The model correctly learns football mechanics. The problem is not the
hazards — it's that team fixed effects estimated from 1-2 seasons of
drives do not persist.

## Duel design (preregistered, A1–A10)

- Next-week home-win prediction, test 2018–2025.
- Contestants: hazard S diff vs EPA/drive diff (off+def) vs Elo diff.
- Identical rolling window: seasons S−2,S−1 full + season-S weeks<W
  (weeks≤4: just S−2,S−1). Duel weights (logistic calibration) fit on
  2002–2010 only.
- K1: hazard beats better baseline by ≥0.002 log-loss, one-sided paired
  permutation p<0.05.
- K2: disagreement region (|spread diff|≥2, n≥150), hazard beats EPA, p<0.05.
- Market duel: margin ~ line + edge_haz + edge_epa (BH-adjusted).
- K3: placebos (P1: era-label shuffle kills K4; P2: team-label shuffle
  kills duel edge; P3: EPA shuffle preserves EPA edge).

## Results

### K4: FAIL (gate)
ρ = −0.001, p = 0.506. The hazard ratings have zero cross-era stability.

### K1/K2/Market: [PENDING — weekly ratings in progress]

### K3 (placebos): [PENDING]

## Why K4 failed (diagnosis)

The team fixed effects are estimated from ~2 seasons of drives per team
(~3,000 drives). The signal-to-noise ratio is too low: drive outcomes are
dominated by situational covariates (down, distance, field position),
leaving little residual for team effects. The adjacent-season correlations
(2008→2009: 0.111; 2009→2010: 0.132; 2010→2011: 0.377) suggest some signal
at 1-year horizon, but the 12-year vs 7-year era comparison washes it out.

**Interpretation:** Survival-hazard team ratings are not a stable primitive.
They may have short-horizon value, but they do not replace EPA as a team
strength measure.

## Obituary

T5 asked whether drive-ending score/death hazards could replace EPA as the
primitive for team strength. The answer is no: the hazard ratings do not
persist across eras (ρ≈0). The mechanics are sound and interpretable, but
the team effects are noise. EPA/drive remains the better primitive.

## Provenance

- Seed: 3705 (all stochastic ops).
- Snapshot: data_snapshot_20260913.
- Code: ~/workspace/gse-discovery/phase6/t5-survival/
- Prereg: PREREG.md (A1–A10).
- RUNLOG.md records all incidents and fixes.
