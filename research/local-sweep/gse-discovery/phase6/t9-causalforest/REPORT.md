# T9 REPORT — Causal forest: heterogeneous treatment effects of 4th-down aggressiveness

**Label: CATE under unconfoundedness.** All estimates below assume
unconfoundedness (no unmeasured confounders). Coaching decisions to go for
it on fourth down reflect film study, locker-room information, weather
reads, and gut feel that no box-score covariate captures; to the extent
aggressive coaches differ systematically from conservative ones in ways our
covariates miss, the CATE estimates are confounded. Nothing below is a
causal claim about what *would* happen if a team changed its fourth-down
policy — it is a description of heterogeneity in observational outcomes
under the unconfoundedness assumption.

## 1. Data
- Frozen snapshot: `~/workspace/gse-discovery/data_snapshot_20260913`
  (MANIFEST.md 2026-09-14T02:49:49Z, sha256
  `be1592e836852c807183f88a1b00baa6d1400acab4c0d7acff2e8ff841ac8759`;
  27 seasons 1999-2025).
- Analysis frame: fourth-down plays, punt/field-goal vs pass/run;
  n=100,316 (seasons 2000-2025; 1999 lost to prior-season EPA join).
- Era split: train <=2010 / validation 2011-2017 / test 2018-2025.
- Code: `t9_pipeline.py` sha256
  `adf2e8742502ed9c750bbf1be0c7b1bae8ba66ef24bedf2bf112e50818cf5752`
  (seed-42 run); forest backend `econml.CausalForestDML`.

## 2. Sample counts (seed 42)

| split | n | treat rate | win rate |
|---|---|---|---|
| train (<=2010) | 42,518 | 0.125 | — |
| validation (2011-2017) | 27,123 | 0.118 | — |
| test (2018-2025) | 30,675 | 0.190 | — |
| overall | 100,316 | 0.143 | 0.474 |

## 3. Outcome orientation validation
- Winner derived from final play's `posteam_score_post`/`defteam_score_post`
  mapped through `posteam == home_team` (posteam_score_post is the
  possessing team's score, NOT the home score — audited 2026-09-14).
- Y=1 iff fourth-down posteam == final winner. Tie games dropped (n=436).
- Sanity: posteam win rate 0.474; go-rate rises 0.125 -> 0.190 across eras
  (matches known aggressiveness trend).

## 4. Quality proxy
- Snapshot `posteam_elo` column exists but is entirely null -> preregistered
  fallback: prior-season offensive EPA/play per team, standardized on train.
- Missing 4% (seasons without prior year).

## 5. Nuisance diagnostics (seed 42)
- Propensity GBM (200 trees, depth 4): validation AUC = 0.950,
  pseudo-R² = 0.565. Treatment is HIGHLY predictable from game state.
- Outcome GBM: validation R² = 0.314.
- Overlap: test fraction with e in [0.05, 0.95] = 0.283 (**KILL**; < 0.90).
  Coaches' fourth-down decisions are so predictable that 72% of test plays
  have extreme propensities.

## 6. CATE results (test set, seed 42)
- ATE (train, for reference) = +0.0237 win probability.
- Var(CATE) = 0.00026 (**KILL**; < 0.01). No detected heterogeneity.
- DR calibration slope = -2.17, 95% CI [-4.78, 0.45] (**KILL**; outside
  [0.7, 1.3]). Negative slope: the forest's CATE variation is
  anti-correlated with doubly-robust scores — pure fitting noise.

## 7. Policy duel (AIPW win probability, test set, seed 42)
- CATE policy (go iff CATE>0): go-rate 0.948, AIPW = 0.4207.
- Homogeneous-ATE bot (go iff ATE>0): go-rate 1.000, AIPW = 0.4316.
- CATE − homogeneous = -0.0109 (**KILL**; < +0.02). The CATE policy LOSES
  to the dumb baseline. Paired t p = 0.988.
- Historical-frequency policy: AIPW = 0.4277 (also beats CATE policy).

## 8. Era stability (seed 42)
- 22 qualifying cells (>=30 treated + 30 control); 100% sign-consistent;
  passes. The small positive ATE sign is stable, but there is no
  heterogeneity to be stable *about*.

## 9. Permutation null (seed 42)
- 10 propensity-decile permutation refits from checkpoint
  `t9_checkpoint_seed42_primary.pkl` (stage 2). Running; expected to
  confirm the observed Var (0.00026) is fitting noise (kill fires when
  perm mean within 0.005 of observed — near-certain at this magnitude).

## 10. Seed stability

| seed | Var(CATE) | cal slope | duel diff | overlap | verdict |
|---|---|---|---|---|---|
| 42 | 0.00026 | -2.17 | -0.0109 | 0.283 | KILL (NULL) |
| 123 | 0.00021 | -3.42 | -0.0072 | 0.283 | KILL (NULL) |
| 7 | 0.00023 | -2.55 | -0.0118 | 0.283 | KILL (NULL) |

All three seeds agree on every kill criterion. The NULL replicates.

## 11. Verdict
- **KILL (NULL): no detected heterogeneity — homogeneity sufficient.**
  Failed kill criteria (all seeds): flat_surface (Var(CATE) ~0.0002 << 0.01),
  calibration (slope negative, outside [0.7, 1.3]), duel (CATE policy loses
  to homogeneous by ~0.01), overlap (only 28% of test in [0.05, 0.95]).
  Passed: era_stability (22 cells, 100% sign-consistent — the small positive
  ATE is stable, but there is no heterogeneity to be stable about).
- Interpretation: fourth-down go/kick decisions are highly predictable
  from game state (propensity AUC 0.95). Conditional on game state, the
  win-probability effect of going for it shows no detectable heterogeneity
  (CATE SD ~0.015). The average effect is small and positive (+2.4%), but
  it does not vary systematically with field position, distance, score,
  clock, or team quality in a way any forest can find. A homogeneous
  "4th-down bot" beats the CATE-conditioned policy. **CATE under
  unconfoundedness**: unmeasured coaching factors could confound even the
  ATE, but they cannot create heterogeneity the forest would miss — the
  null is about the absence of detectable heterogeneity, not about
  unbiasedness of the level.

## 12. P-values for the family BH battery (FDR 0.05)
- Duel (CATE policy vs homogeneous bot), paired t: p = 0.988 (seed 42;
  seeds 123/7 similar, policy loses). Not a discovery — NULL.
- Permutation null: p pending (stage 2). Expected ~1.0 (no signal).
- Calibration is CI-based, not a p-value; flat-surface is a variance
  threshold, not a test.
- **No T9 claim survives to the BH battery: the family verdict is NULL.**

## 13. Limitations
- Unconfoundedness is untestable and likely violated (coach quality,
  private injury info, weather reads).
- Win-probability outcome is coarse; play-level EPA/WPA would be sharper
  but the protocol fixes game win.
- Prior-season EPA quality proxy misses within-season injuries/form.
