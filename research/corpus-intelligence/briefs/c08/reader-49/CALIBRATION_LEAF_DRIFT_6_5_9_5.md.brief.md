# docs/data/CALIBRATION_LEAF_DRIFT_6_5_9_5.md
## What it is (1-2 sentences)
A forensic calibration audit (flagged by Hermes as H-N6) proving that the 6.5–9.5 calibration leaf — a 65.86% training base rate — drifts to 57.12% in test and that the drift is not sampling noise; no behavior or gate is changed by the document.
## Key metrics/methods (formulas where given, else "not specified")
- Per-leaf z against training base rate with SE = sqrt(p(1−p)/n); Bonferroni across 5 leaves.
- Cochran's Q: H0 = all five leaves share one common drift, weights 1/var_i; Q = 19.57 on 4 df, heterogeneity p = 6.07e−04, I² = 79.6%.
- Leaf Brier vs 0.25 coin-flip line via paired per-observation difference d = (q−y)² − (0.5−y)² with 95% CIs; weighted leaf Brier = 0.2440 vs global mean 0.2478 (leaf model wins in aggregate by 0.0038).
- Rounding robustness sweep over q ± 0.00005, p ± 0.00005; 3–6 leaf INDETERMINATE from published output (statistic undefined 0/0 at q = 0.5 exactly).
## Data sources named
`docs/data/MARKET_CALIBRATION_2026-09-04-reproduction.txt` lines 43–51 (variable-based calibration, train seasons ≤ 2015, evaluate 2016–2025); `scripts/analytics/replay-calibration.ts:439` (global predictor constant = training-set mean).
## Findings (numbers and facts, not vibes)
- 6.5–9.5 leaf: n=576, train base 65.86%, test actual 57.12%, Δ = −8.74 pp, z = −4.42, p = 9.7e−06 (Bonferroni p = 4.9e−05); leaf Brier 0.2526.
- Other four leaves show no collective drift (+0.59 pp, SE 1.05); contrast z = −4.17, p = 3.03e−05 — a uniform league-wide drift is rejected (leaves did not move together; ~80% of cross-leaf variation is real heterogeneity).
- Only the 10+ leaf is significantly better than the 0.25 coin-flip line (Brier 0.1979, mean d = −0.05216, 95% CI [−0.0751, −0.0292]); 3–6 leaf is indeterminate from published two-decimal output.
- All z values are optimistic lower-bound approximations: training base rate treated as fixed (n_train not printed), so a proper two-proportion test cannot be run from the reproduction file.
- Recommendation (not applied, owner-gated): do not use the 6.5–9.5 leaf as a calibration prior until the mechanism is understood — collapse into a neighbouring band or fall back to the global mean.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Confidently-wrong prior on mid-band spreads 6.5–9.5 (OTHER — calibration trust: the only leaf whose base-rate drift is significant, i.e., a 65.86% prior applied to a 57.12% band across 576 games)
- Recommendation to collapse leaf or fall back to global mean (TRUST-SIGNAL — calibration integrity gate)
## Engine-actionable? (yes/no + one-line what)
Yes — recommend applying the stated recommendation via the `CALIBRATION_ADJUSTMENTS_ENABLED` + model-freeze gate: collapse the 6.5–9.5 calibration leaf into a neighbouring band or the global mean, since the leaf is confidently wrong, not merely uninformative.
