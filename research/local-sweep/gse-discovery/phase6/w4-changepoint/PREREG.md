# Pre-registration: W4 / change-point detection on within-game play-calling

**Author:** Motif (W4 lab worker)  |  **Date:** 2026-09-13
**Status:** PRE-REGISTERED (locked before any run on real data)
**Protocol source:** DeepSeek MOVE-37-PHASE6-01 §4/W4; program: PHASE6_EXPANDED_PROGRAM.md §§4,7
**Seed:** 42 (all randomness via numpy SeedSequence(42); replication seeds 123, 7)

## 1. Estimand

Per (game_id, posteam) team-game: run a univariate change-point detector (PELT,
L2 cost on the binary pass/run sequence, penalty = 0.5·log(n)) and count
N_cp = number of detected change-points, t_cp = median position of the
change-points (fraction of the game elapsed, in [0,1]).

Primary statistic: partial Spearman correlation r between N_cp and in-game
win-probability-added (WPA) after controlling for total play-level EPA and the
score-differential trajectory (mean and standard deviation of posteam
score_differential across the game's plays) plus the number of plays n_plays.
Interpretation: do teams whose coaches change strategy more often
within a game (higher N_cp) gain more win probability, beyond what raw play
efficiency (EPA) and the score trajectory explain?

- Target variable: partial Spearman r(N_cp, WPA | EPA_total, score_mean, score_sd, n_plays)
- Unit of observation: team-game (each team's offensive play sequence in one game)
- Test-era population: team-games in seasons 2018-2025 (~10,000 observations)

DeepSeek's bet: r ≥ 0.10. DeepSeek's kill line: r < 0.03 with 95% CI including
zero → kill. This preregistration locks the kill line and adds the
score-trajectory confound check (W4's stated weakness: "correlation with WPA
is easy to confound with score effects").

## 2. Identification argument

The estimator identifies adaptivity-driven WPA only under the identifying
assumption that N_cp does not merely re-encode the score trajectory or the
efficiency of the plays themselves. Both confounds are partialed out in ranks:

1. Score effects: trailing teams pass more; leading teams run more. A team
   that falls behind then comes back will have strategy shifts that are
   *caused by* the score path, not by coaching adaptivity. Controls:
   mean and SD of score_differential across the team's plays (captures both
   level and volatility of the game state the team experienced).
2. Efficiency: better teams gain more WPA and may call more diverse plays.
   Control: total EPA over the same sequence (team-game EPA sum).
3. Sequence length: longer games (OT, pace) mechanically admit more
   change-points. Control: n_plays; penalty scales with log(n).

Orientation (perspective): all quantities are the POSTEAM's offense —
posteam's pass/run calls, posteam's wpa, posteam's epa, posteam's
score_differential (posteam_score − defteam_score).

Residual risk, stated: unobserved factors (weather, injuries, opponent quality)
are not controlled; the estimand is a conditional association, not a causal
effect of coaching adaptivity. A positive r is evidence consistent with the
adaptive-coaching story, not proof of it.

Flat-surface diagnostics: (a) fraction of team-games with N_cp = 0; if > 95%,
the detector is insensitive and the estimand is degenerate (no variation to
correlate); (b) mean N_cp per 100 plays by era — must be stable across eras
for the era-stability check to be meaningful. If N_cp is degenerate, the family
reports "detector insensitive at chosen penalty; no identification" — an honest
NULL, no penalty re-tuning on the test era.

Finite-sample boundaries: sequences with < 20 pass/run plays are dropped
(PELT on < 20 points has no power; reported as excluded n). OT-only
sequences are included if they meet the 20-play floor.

## 3. Dumb-baseline duel spec

The prediction is not a forecast, so the duel is against the dumbest
correlate that would make N_cp redundant:

- Baseline 1 ("raw pass-rate"): partial Spearman r(pass_rate, WPA | same
  controls). If N_cp adds nothing over the first moment (overall pass rate),
  it is a relabeling of pass-rate.
- Baseline 2 ("score-path only"): R² of WPA on (score_mean, score_sd) alone;
  the question is whether N_cp adds incremental association beyond the score
  trajectory.
- Metric: partial Spearman r (higher better). Test set: SAME test-era
  team-games for family and baselines.
- Market duel: N/A at the team-game level for adaptivity; the estimand is
  structural (no line exists for in-game play-call adaptivity). Market duel
  is inherited from the family battery coordinator only if W4's r survives.
- Win condition: r(N_cp) ≥ 0.03 AND r(N_cp) > r(pass_rate baseline) AND the
  incremental R² of N_cp over controls (OLS on ranks) > 0.002. Anything less
  is below the kill line; there is no partial credit.

## 4. Kill criteria (quantitative, falsifiable)

The experiment is KILLED if ANY of the following hold. No judgment calls.

1. Primary kill: partial Spearman r < 0.03 with 95% CI including zero on the
   test era → kill (DeepSeek's line).
2. Era stability: r is not positive in at least 2 of the 3 era splits
   (train ≤2010 / validate 2011-2017 / test 2018-2025). If the sign is stable
   in one era only, it is a regime artifact → kill.
3. Confound check: r after controls ≤ r without score controls by ≥ 50%
   relative AND the score-only model explains ≥ 3× the variance of N_cp —
   i.e., N_cp is a relabeling of the score path → kill.
4. Redundancy: r(N_cp) ≤ r(pass_rate baseline) → N_cp adds nothing over the
   first moment → kill.
5. Placebo: under the label-shuffle null (WPA permuted across team-games) or
   the synthetic null, run_placebo reports appears_under_null=True → pipeline
   broken → do not promote; report and kill the claim.
6. BH: the primary-test p-value, passed to the family coordinator's
   Benjamini-Hochberg across the family battery, yields q > 0.05 → kill.

Dead families get a one-line obituary in REPORT.md; survivors get deeper runs.

## 5. Analysis plan (locked)

- Estimator / pipeline:
  1. Build per-team-game pass/run sequences (play_type ∈ {pass, run},
     ordered by play_id; epa NOT NULL; drop sequences < 20 plays).
  2. PELT with L2 cost, penalty = 0.5·log(n) → N_cp, t_cp.
     (ruptures Pelt if installable in a venv; otherwise hand-rolled PELT
     in pelt_fallback.py, validated on synthetic data: 0% false positives on
     i.i.d. null at n=150, 86% power on a 0.45→0.75 midpoint shift.)
     Penalty choice was fixed from synthetic calibration BEFORE seeing data:
     0.5·log(n) gives 2% null FP and detects Δp≈0.25–0.30 regime shifts that
     1.0·log(n) misses.
  3. Rank-transform N_cp, WPA, EPA_total, score_mean, score_sd, n_plays;
     partial out controls by OLS on ranks; Spearman r of the two residual
     vectors; 95% CI by 1000-draw bootstrap (SeedSequence(42)).
  4. Era-split: compute r separately on train (≤2010), validate (2011–2017),
     test (2018–2025) via harness.era_split.
  5. Permutation: harness.permutation_test on r with WPA-shuffle null
     (n_perm=1000, seed=42) + harness.run_placebo pipeline check (n_perm=200).
  6. Duel: baselines 1 and 2 on the identical test set.
- Hyperparameters: penalty multiplier 0.5 (fixed, synthetic-calibrated);
  no tuning on real data; nested CV not applicable (no model is fit —
  PELT is parameter-free given the penalty).
- Era split: train ≤2010 / validate 2011–2017 / test 2018–2025.
- Multiple comparisons: primary p-value contributed to coordinator BH across
  the family battery at FDR 0.05. No within-worker multiple testing (single
  primary statistic).
- Flat-surface diagnostics: % of team-games with N_cp=0; CV of mean N_cp/100
  plays across eras; if degenerate (no variation), report NULL.

## 6. Data snapshot & reproducibility

- Data snapshot: ~/workspace/gse-discovery/data_snapshot_20260913/ (frozen;
  NOT READY at preregistration time — worker polls for MANIFEST.md; no
  analysis on live/unversioned data).
- Code hash: recorded in RUNLOG.md at run time.
- Seed: 42 (replication seeds 123, 7 in REPORT).
- Expected outputs: w4-changepoint/PREREG.md (this file), code/
  (build_features.py, pelt_fallback.py, analyze.py), RUNLOG.md, REPORT.md,
  results/w4_results.json, figures/ (bootstrap CI, era bar chart).

## 7. One-paragraph statement (draft, for the record)

NFL coaches who change their play-calling strategy more often within a game —
detected as change-points in the binary pass/run sequence — add win
probability beyond what their plays' efficiency and the score trajectory
explain. The change-point count per game is a machine-discoverable measure of
in-game coaching adaptivity, a structure no published metric captures.

---
_Signed: Motif (W4 worker), 2026-09-13. Amendments after first run require a
new dated addendum; the original stays immutable._
