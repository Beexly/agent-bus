# T4 — Tail Models (Extreme Value Theory) — PREREGISTRATION

**Family:** T4 (lab-side) | **Date:** 2026-09-13 | **Worker:** T4 subagent
**Box:** 2 CPU, ~3GB RAM (shared) | **Seed:** 3713 (fixed everywhere)
**Data:** frozen snapshot `~/workspace/gse-discovery/data_snapshot_20260913/`
(full runs ONLY on MANIFEST.md-verified snapshot; small-sample tests before that)

---

## Q1: Are some NFL teams systematically fat-tailed?

### Estimand
For each team-season T: the GPD (Generalized Pareto Distribution) **shape
parameter ξ** (xi) of the right tail of the team's *per-game total-points*
distribution, i.e. tails of (home_score + away_score) in games where the team
played. Also estimated for the left tail of margin-of-victory
(team_points − opp_points) as a secondary tail.

### Tail variable (per game, per team)
- **Primary:** game total points `tot = home_score + away_score` (from team
  perspective this is the total-points environment the team played in —
  proxies for "blowout/collapse-prone games" combined with the team's own
  scoring pace).
- **Secondary (blowout/collapse):** absolute margin `|margin|`.

### GPD fit
Excesses over threshold u: X − u | X > u ~ GPD(ξ, σ). Fitted via
`scipy.stats.genpareto.fit(excesses, floc=0)` (MLE, location fixed at 0).

### Identification / threshold selection (preregistered)
1. For each team-season, u = the team's empirical 90th percentile of the tail
   variable (per-team-season quantile → each fit uses ~1.6 exceedances per
   season... insufficient: ~16 games/season ⇒ ~1.6 exceedances. TOO FEW).
2. **Therefore:** pool to the **team era level** with the era splits below:
   fit ξ per team per ERA (train ≤2010, validate 2011–2017, test 2018–2025),
   not per team-season. u = team-era 90th percentile (~0.10 × ~250 games ≈ 25
   exceedances per team-era — borderline but usable).
3. Diagnostic check (not a tuning knob): mean-excess plots per era on the
   LEAGUE tail variable must look approximately linear in the top decile;
   if not, the threshold is 90th percentile anyway (preregistered, no data
   snooping) and the result is reported as a failed-identification kill.
4. Fit fallback: if MLE fails to converge or n_exceed < 15 for a team-era,
   that team-era is dropped and recorded (not silently imputed).

### The persistence test (the discovery claim)
- Estimate ξ per team in era A (train ≤2010) and era B (validate 2011–2017)
  and era C (test 2018–2025).
- **Persistence metric:** Spearman correlation ρ(ξ_A, ξ_B) across teams
  (n ≈ 32). Also ρ(ξ_B, ξ_C) as held-out confirmation.
- **Placebo:** randomly permute team labels within era (10,000 permutations);
  p = fraction of permuted ρ ≥ observed ρ (one-sided, positive-persistence
  alternative).
- **Kill criteria (ANY one kills the "persistent fat-tailed team" claim):**
  - ρ(ξ_A, ξ_B) ≤ 0.30 (Spearman), OR
  - permutation p ≥ 0.05 (two-era test on train vs validate, before test), OR
  - mean-excess plot fails linearity ⇒ GPD not the right tail model at all
    (also test exponential, ξ=0 constrained, via likelihood-ratio: if
    LR-test vs GPD fails to reject ξ=0 for >75% of teams, tail is thin and
    T4 is dead).
- **Promote criteria:** ρ ≥ 0.40 on train→validate AND permutation p < 0.01
  AND LR rejects thin-tail for a non-trivial team subset.

### Estimator stability guard
Split-half within era: random halves of games per team-era, fit ξ on each
half, correlation across teams must be positive (ρ_half > 0.25) or the
estimator is noise and the family dies regardless of cross-era results.

---

## Q2: Is "fat-tailed team" bettable? Totals duel.

### Setup
Per-game predicted total: μ_g = predicted total points for game g, from
features observable pre-game (past team offensive/defensive pace ratings +
home field + rest + weather when available).

- **Model N (normal/thin):** total ~ Normal(μ_g, σ_g) with σ_g from
  league/team pooled residual variance (dumb baseline = constant σ over
  rolling windows).
- **Model T (tail-aware):** same μ_g, but predictive distribution =
  mixture: central mass normal + GPD-fitted tails, where the team's GPD
  shape ξ_team (from TRAIN era only) scales tail mass: teams with
  ξ_team > league median get heavier tails in the predictive distribution
  (practically: widen σ proportional to fitted tail quantiles at 90/95/99%).
- **Adversary:** closing `total_line` from pbp (market).

### Duel metric (preregistered)
For each model, price the OVER/UNDER implied probability and compare to
the closing line: bet the model's edge only when |P_model(over) − P_line(over)|
> 5 percentage points (fixed rule, preregistered). Edge = (model hit rate
on taken bets − line-implied breakeven) on the TEST era (2018–2025).
Bets priced at −110 both sides; record ROI and count.

### Dumb baseline N (must-beat)
Normal-assumption totals with rolling 3-season pooled σ, no team tails.
Model T must beat Model N on: (a) log-loss of total-points outcome
(probabilistic forecast of the realized total under each predictive
distribution), and (b) CLV-style edge frequency vs closing line —
measured by taken-bet ROI differential.

### Kill criteria for the bettable claim
- Model T log-loss ≥ Model N log-loss on test era → T4 tails are not a
  better forecast of totals than thin tails. KILL the bettable claim.
- Model T taken-bet ROI ≤ Model N ROI, or both ≤ 0 → not bettable. KILL.
- **Report all three regardless:** closing-line implied calibration is the
  reference; "beats normal but not the line" = interesting, NOT an edge
  (per §7 discovery criteria).

### Era discipline
- ξ_team estimated ONLY from train era (≤2010). Validated once on
  2011–2017. Duel scored ONLY on 2018–2025 test. No refits on test.
- μ_g pace model: fit on train, frozen coefficients, walk-forward means
  only on validation/test (no peeking).

---

## Placebo / permutation (mandatory, per §4)
1. Team-label permutation for ξ persistence (above).
2. Duel placebo: shuffle team→game assignment of ξ_team (keep μ_g) —
   Model T placebo must NOT beat Model N; if it does, the pipeline is
   leaking signal elsewhere.
3. Synthetic null: generate team totals from a common Normal(μ, σ) with
   NO team tails, run full GPD pipeline — must return "no persistence"
   (ρ ≈ 0, permutation p ≈ uniform). If it "discovers" fat teams under the
   null, kill the pipeline, not the world.

## Multiple comparisons
BH correction across the 32 team-era ξ estimates where team-level
significance is claimed; the persistence test is ONE pre-registered
correlation (no correction needed for a single primary test). Duel is one
primary metric (log-loss) + one secondary (ROI).

## Reproducibility
- Fixed seed 3713; `requirements`: nflreadpy, scipy, numpy, pandas/polars.
- Every run writes: code git-hash (or file hash), data snapshot ref
  (MANIFEST.md), RUNLOG with full stdout. Results recomputed from scratch
  for the report (no cached ξ values cross runs).

## Kill criteria summary (quantitative, preregistered)
| # | Claim | Kill if |
|---|-------|---------|
| K1 | GPD fits tails better than thin-tail | LR-test fails to reject ξ=0 in >75% of team-eras |
| K2 | ξ is team-persistent | ρ(ξ_A,ξ_B) ≤ 0.30 or permutation p ≥ 0.05 |
| K3 | ξ estimator stable | split-half ρ ≤ 0.25 |
| K4 | Tail-aware totals beat thin-tail totals | T log-loss ≥ N log-loss (test era) |
| K5 | Bettable edge | T ROI ≤ N ROI or ≤ 0 on test era |
Any K1–K3 → Q1 dead. Any K4/K5 → Q2 dead. Both dead → family obituary.

## Amendment 2026-09-14 (pre-full-run; continuing worker)
Recorded before any snapshot-based run. Statistics and thresholds are
unchanged from the preregistration; this only operationalizes them:

1. **Harness routing.** Persistence permutations, synthetic-null placebo,
   BH, and the totals duel are executed through the shared harness
   (`permutation_test`, `run_placebo`, `benjamini_hochberg`, `duel_report`)
   with the same master seed (3713), the same 10,000-permutation K2 test,
   and the same kill thresholds. The custom `synth_null_fn` for Q1 draws
   team totals i.i.d. Normal(global μ, σ) with per-team-era sample sizes
   preserved — i.e. NO team-specific tails by construction (this is the
   null hypothesis of Q1, not the harness default that destroys all
   association).
2. **Market duel scores.** `harness.duel_report` gets per-observation
   log-loss scores for all three: T (tail-aware), N (normal), and the
   closing total line as Normal(line, σ_mkt) with σ_mkt = SD(total − line)
   fit on train-era games with lines. Same test set, `higher_is_better=False`.
   This operationalizes "vs the closing total line" from spec §3-T4/§4.7.
3. **Mean-excess linearity gate operationalized.** "Approximately linear"
   now means top-decile (q ≥ 0.90) mean-excess R² ≥ 0.80; below → the
   failed-identification kill under K1, recorded in REPORT.md.
4. **BH (§4.5 compliance).** K1 LR-test p-values across team-eras also go
   through `benjamini_hochberg` (FDR 0.05) and the BH reject fraction is
   reported; the preregistered K1 kill rule (>75% fail to reject at raw
   5%) is unchanged.
5. **Dependence caveat.** team-game rows double-count each game's total
   (home and away rows are identical). Fits are per team, so ξ point
   estimates are unaffected; bootstrap SEs are conditional on the team's
   sample and slightly optimistic. Recorded as a caveat in REPORT.md,
   not a kill.
6. **Data gate.** Full runs execute ONLY on a MANIFEST.md-verified frozen
   snapshot (`data_snapshot_20260913/`). `T4_SMOKE=1` mechanics tests on
   two snapshot seasons (1999–2000) are code checks only; no result from
   them enters REPORT.md.

## AMENDMENT 2026-09-14c — placebo shuffle arm method fix (pre-run, data-free)
Review of the harness-integrated placebo revealed the shuffle arm was
DEGENERATE: `_xi_rho_pipeline` was y-blind (team labels lived in X), so
`harness.run_placebo`'s y-permutation could not move the statistic —
p_shuffle = 1.0 on every input, and REPORT.md would have carried a
mechanically false "PLACEBO FAIL: pipeline is broken" line on real data.
- A10. The placebo pipeline_fn is now y-aware: X carries (era, total),
  y carries the TEAM LABELS. Harness's y-permutation is then exactly the
  preregistered team-label shuffle null (matches the standalone
  persistence_test arm). The custom synth_null_fn is unchanged in meaning:
  X["total"] redrawn iid Normal(global mu, sd), labels kept.
- A11. REPORT.md now prints the placebo observed rho and an explicit
  reading note: harness p_* are large when the null routinely reproduces
  the observed statistic; with no discovery claimed (rho ~ 0), large p_*
  is expected under H0, not a broken-pipeline signal. appears_under_null
  kills the pipeline only together with a claimed discovery.
Statistics, thresholds, seeds, and kill criteria are untouched.

## Report contract
REPORT.md will contain: ξ estimates by team-era with CIs (bootstrap,
1000 reps), cross-era persistence numbers + permutation p, mean-excess
diagnostic, duel table (N vs T vs closing line: log-loss, bet count, hit
rate, ROI), placebo/synthetic-null results, and verdict or one-line obituary.

## AMENDMENT 2026-09-14 (pre-run; no data touched yet)
The coordinator's shared harness (`phase6/harness/`, selftest 24/24 pass)
landed after this PREREG was written; `code/t4_pipeline.py` was replaced
with a harness-integrated version BEFORE any run. Amendments (all still
pre-run, all stricter or neutral vs the original):
- A1. Mean-excess identification gate is now quantitative: top-decile R²
  ≥ 0.80 required; below → K1 identification kill. (Original: qualitative
  "approximately linear" + failed-fit kill.)
- A2. K1 LR test now reports BOTH raw 5% rejection fraction and BH-FDR
  0.05 rejection fraction across team-eras; kill triggers when raw
  rejection fraction < 0.25 (same as the original ">75% fail to reject").
- A3. Duel primary verdict comes from `harness.duel_report` on per-game
  log-loss (T vs N vs closing line, same test set; paired sign/t tests);
  the -110 bet-rule ROI table remains as the secondary "bettable" metric.
  Duel verdict mapping: T fails vs N → KILL; T beats N but not line →
  INTERESTING, NOT AN EDGE; T beats N and line (paired, significant) →
  PROMOTE candidate (still under test pending era-split/placebo/BH).
- A4. Placebo now uses `harness.run_placebo` with a custom synthetic null
  matched to Q1's H0 (team totals i.i.d. Normal with no team tails,
  preserving team-era sample sizes); `appears_under_null=True` kills the
  pipeline, not the claim.
- A5. MANIFEST.md hard gate: the pipeline exits (code 2) on any
  unversioned/live data. Mechanics smoke test available as T4_SMOKE=1 on
  two frozen snapshot seasons (1999+2000); smoke output is NOT results.
- A6. Recorded caveat (not a kill): team-game rows double-count each
  game's total (home+away); fits are per team so point estimates are
  unaffected; bootstrap SEs are conditional on the team sample.
## AMENDMENT 2026-09-14b — threshold 0.90 → 0.85 (pre-run, data-free)
Mechanics testing (no real data touched) exposed a finite-sample flaw in the
original design: at q=0.90, the validate era (7 seasons ≈ 112 games/team)
yields ~11 exceedances per team-era — below the preregistered n≥15 fit floor —
so most validate-era ξ would be dropped and the persistence test starved.
- A7. Primary threshold is now q=0.85 (top-15% tail): expected exceedances
  ≈ 29 (train), ≈ 17 (validate), ≈ 20 (test). The n≥15 drop rule stands.
- A8. Robustness sweep (pre-registered): the persistence statistic is
  recomputed at q ∈ {0.80, 0.85, 0.90} and recorded in numbers.json. The
  "persistent fat-tailed team" claim requires the same sign AND
  significance (permutation p < 0.05) at all three thresholds; disagreement
  across thresholds = threshold-dependent artifact → K2 kill.
- A9. synthetic_null_check now mirrors real per-era sample sizes
  (train ≈ 200, validate ≈ 120 games/team) so the null check exercises the
  actual estimator, not an over-powered version of it.
Bias note: lower thresholds trade asymptotic-purity for variance; q=0.80
is deliberately "too low" — if the claim only appears there, it is not a
tail property. Kill criteria K1–K5 apply at the primary q=0.85.
