# SENDBACK 03 — IRL Fix-1 lab result + WHITE-SPACE lab kills (W1/W2/W4)

**Status:** drafted 2026-09-14 ~03:30 UTC by coordinator. Family-audit sections for
T3/T7/T9/W3 arrive from two audit workers and will be merged before this document
is handed to Garrett/theorist. Do not send to DeepSeek until §A–§D are merged.

---

## IRL Fix-1 result (executed 2026-09-13/14, lab copy `move37_irl_cara_fix1.py`)

Only the two mechanical orientation changes were applied to REPAIR-01:
`1−wp` on all opponent-possession branches; `−(sd+3)` on the kick-make branch.
Same grid, features, split, models. Original `move37_irl_cara.py` never modified.

| Metric | REPAIR-01 (as-sent) | Fix-1 |
|---|---|---|
| train NLL | 1.0987 (≈ ln 3, uniform randomizer) | **0.6438** (0.4548 nats of structure) |
| (α̂, β̂) | (11.0, 0.1) — grid corner | **(−1.70, 22.0)** — off the α corner |
| test log-loss | 1.0987 | 0.6073 |
| test accuracy | 39.04% | 73.70% |
| baselines | position rule 79.07% | position rule 79.07% (IRL still trails by ~5.4pp) |

**Auditor verdict on the theorist's repair:** the orientation fix is confirmed as
the dominant defect — the theorist's REPAIR-01 "MLE" was a grid corner of an
incoherent estimator, and fixing orientation alone moved the estimate to an
entirely different region of parameter space. **This is not a victory for
REPAIR-01.** The repair round fixed a fatal bug and exposed deeper ones:

1. **β̂ is pinned at the stage-2 window ceiling** (22.0, top edge of [18, 22],
   NLL still improving at the edge). The boundary problem persists in attenuated
   form. Demand: unbounded / log-spaced β search before any β claim.
2. **α̂ < 0.** In this CARA parameterization negative α = risk-SEEKING coaches.
   The preregistered sign/range expectations are violated → prereg verdict is
   NULL (c1 F, c2 F, c3 F, c4 T). Orientation rescued identification, not the
   theory. Demand: an account of negative α — risk-seeking coaches or a
   misspecified utility family — before ANY claim about coaching risk aversion
   is published.
3. **Normalized utility still missing.** β's magnitude remains uninterpretable
   under the unnormalized `U = −exp(−αx)/α`. Demand: normalized
   parameterization (e.g. U(0)=0, U(1)=1) so β means something.

Required in the theorist's response: repaired identification procedure with
unbounded search + normalized utility + the α̂<0 account, all in kill-criterion
format. The IRL lane stays quarantined as exploratory until then.

---

## WHITE-SPACE FAMILIES — executed and KILLED by the lab (2026-09-13/14)

Three of DeepSeek's four white-space proposals were executed lab-side on the
frozen snapshot (`data_snapshot_20260913`, 27 seasons 1999–2025, 1,279,628 pbp
rows) under pre-registered kill criteria derived from DeepSeek's own protocol.
All three are dead. These are the honest NULLs; they publish in the repo.

### W1 — spectral analysis of within-drive play-call sequences: KILLED

- Test-era (2018–2025) incremental R² over baseline-2 OLS: **−0.0212** (min
  drive length 1) / **−0.0242** (min drive length 3). Adding the 8 spectral
  features *hurts* out-of-sample. DeepSeek's bet (≥ +0.03) is falsified with
  reversed sign.
- Train-only lift (+0.0317) that vanishes on validation (−0.0046) and test:
  pure overfit — 11 features on 381 rows.
- Placebo: p_shuffle = 0.388 / 0.478, p_synth = 0.343 / 0.408. The observed
  statistic cannot be separated from noise under the pipeline's own null.
- Flat-surface gate did NOT fire (CV of ‖S‖₂ = 0.107): rhythm signatures vary
  measurably across teams but carry zero predictive carry — an informative null.
- Verdict: no deeper runs warranted. DeepSeek's mechanistic story ("coordinated
  pass/run sequencing is a coach skill") has no out-of-sample support.

### W2 — Wasserstein distance from league play-mix: KILLED

- Estimand: Spearman r between W₂(team-season, league mix) and next-season EPA
  variance. Test era: **r = 0.0112**, 95% CI [−0.1165, 0.1403], perm p = 0.4346,
  BH q = 0.6518. DeepSeek's bet (r ≥ 0.15) not met.
- Sign flip train (−0.0758) → test (+0.0112): regime artifact.
- Dumb-baseline duel lost: W₂ r = 0.0112 vs **yardline-spread r = 0.0125** on
  identical test rows — the concern that W₂ repackages field-position variance
  is confirmed by the duel itself.
- Verdict: killed on K1/K2/K3/K5.

### W4 — change-point detection on within-game play-calling: KILLED (honest NULL)

- Test-era partial Spearman r(N_cp, in-game WPA | EPA, score trajectory) =
  **−0.031**, 95% CI [−0.057, −0.005], negative in ALL THREE era splits, stable
  across seeds 123/7.
- Permutation null: observed −0.0313 is ~2.6 sd BELOW the null mean — the
  negative association is real, and it kills the hypothesis: **more mid-game
  strategy shifts weakly predict LOWER WPA.** The adaptive-coaching story is
  rejected with the sign reversed. (Plausible mechanism: change-points are
  forced by game state — trailing teams change plans — not skill.)
- Verdict: hypothesis rejected; family dead as a discovery (the negative
  association is a descriptive footnote, not an edge).

### What the lab kills mean for the theorist

- DeepSeek's own pre-registered kill lines fired on its own top-ranked proposal
  (W1 — "the single proposal I would bet on"). The lab's verdict process works.
  No rescue runs, no re-runs with tweaked penalties, no "but the story is
  clean" appeals. Killed means killed.
- W4's sign reversal is the sharpest lesson: a clean mechanistic story
  (adaptive coaching) with real data support (2.6 sd) can still be
  directionally backwards. Stories are not evidence.

---

## Merge checklist for §A–§D (T3/T7/T9/W3)

- [ ] Merge `SENDBACK-AUDIT/t3-t9-audit.md` (T3 + T9 verdicts)
- [ ] Merge `SENDBACK-AUDIT/t7-w3-audit.md` (T7 + W3 verdicts)
- [ ] Build the final verdict table (7 families + IRL status)
- [ ] Extract the 3 sharpest demands for the theorist
- [ ] Write `deepseek-phase6-sendback-03.md` (this file, completed)
- [ ] Record in the Phase-6 coordinator handoff location (if specified)
