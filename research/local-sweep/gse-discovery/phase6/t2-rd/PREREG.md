# T2-RD — Causal inference at thresholds: PREREGISTRATION
Family: T2 (causal inference at thresholds) | Worker: T2-RD subagent
Date: 2026-09-13 | Seed: 20260913
**STATUS: FINALIZED 2026-09-14 ~02:00 CDT — locked before the full run.
Sample-test gate passed (2023 smoke test: pipeline runs end-to-end, finite
estimates/CIs, 0/16 placebos fire). No changes after full-run start.**
Data: frozen snapshot `~/workspace/gse-discovery/data_snapshot_20260913/` (MANIFEST.md pending; NO full run on unversioned data — 1-season sample tests only until snapshot lands)
Era split (mandatory): train ≤ 2010 / validate 2011–2017 / test 2018–2025

## A. Regression discontinuity battery

### A1. Design
Sharp RD with **discrete integer running variables**. Estimand per cutoff `c`
and outcome `Y`:

    τ(c) = lim_{x↓c} E[Y|X=x] − lim_{x↑c} E[Y|X=x]

estimated by local linear regression (triangular kernel, separate slopes each
side), heteroskedasticity-robust (HC1) SEs. Because X is integer-valued, the
"jump" is identified off adjacent integers net of a local linear trend in X
(discrete-RD caveat recorded; effective support points reported).

**Bandwidth rule (preregistered, no tuning after seeing results):**
h = smallest value in {2,3,4,5} (integer units of X) with
min(n_left, n_right) ≥ 2000 on the estimation sample. If never reached, use
h=5 and flag the cutoff UNDERPOWERED (excluded from discovery claims).

### A2. Primary cutoffs, running variables, outcomes (11 primary tests)

| # | Family | X (running var) | c | Sample | Outcomes Y |
|---|--------|----------------|---|--------|------------|
| 1–3 | STICKS | ydstogo | 3 | 3rd down | conversion¹, pass², epa |
| 4–6 | STICKS | ydstogo | 2 | 3rd down | conversion¹, pass², epa |
| 7–8 | FG-EDGE | yardline_100 | 35 | 4th down | fg_attempt³, epa |
| 9–11 | GOAL | yardline_100 | 2 | goal-to-go⁴ | touchdown, rush², epa |

¹ conversion = first_down or touchdown. ² pass/rush = play-call behavior.
³ fg_attempt = field-goal attempt indicator (first-stage / manipulation check).
⁴ goal-to-go = yardline_100 ≤ 10, downs 1–4, excluding FG attempts/XP.

**Identification arguments:**
- STICKS: the physics of needing 3.0 vs 4.0 yards is smooth; only the
  coaching label ("3rd-and-short" bucket flips at ≤3, and at ≤2 for
  4-down-territory thinking) jumps. Potential outcomes continuous in X at c.
- FG-EDGE: kicker range edge (~52–53 yd FG ⇔ 35-yard line). 4th-down FG
  attempt probability should jump discontinuously; EPA jumping too would
  indicate suboptimal behavior (envelope-theorem violation), not jumping
  indicates optimization.
- GOAL: the 2-yard line is the canonical goal-line play-call bucket edge;
  physics smooth across 2↔3.

**Manipulation check (FG-EDGE premise):** |τ_fg_attempt| must exceed 0.15
in probability. If not, the "incentive jump" premise fails → kill FG-EDGE.

### A3. Placebo cutoffs (mandatory; preregistered)
- STICKS: c ∈ {5,6} on 3rd down (interior of the "medium" bucket — no
  coaching-bucket edge; any jump here = broken RD).
- FG-EDGE: c ∈ {28,42} on 4th down.
- GOAL: c ∈ {5,8} on goal-to-go.
Same outcomes, same bandwidth rule. **Kill rule:** if any placebo cutoff
rejects at α=0.05 for the same outcome, that cutoff's discovery claim is
killed; if ≥2 placebos fire within a family, the family design is killed.

### A4. Secondary / exploratory (reported, not discovery-eligible)
- STICKS at c ∈ {2,3,4}, downs ∈ {2,4}; FG-EDGE secondary: 2nd/3rd down,
  c=25, Y = rush indicator (centering-the-ball behavior), epa.
- Era-stability: τ estimated separately per era; discovery requires the same
  sign in all three eras (train/validate/test).

### A5. RD kill criteria (quantitative)
1. BH-corrected p > 0.05 across the 11 primary tests → no discovery claim.
2. Placebo fires (A3) → claim killed for that cutoff.
3. Underpowered (bandwidth rule) → excluded from discovery.
4. Era sign-flip → regime artifact, not a discovery (reported as null).

## B. Double machine learning battery

### B1. Estimand
ATE θ = E[Y(1)−Y(0)] for binary treatments D on EPA, via the partially
linear model Y = θD + g(X) + U, D = m(X) + V (Robinson orthogonalization),
K=5 cross-fitting, nuisance learners = histogram gradient boosting
(fallback: ridge/logistic on one-hots if compute fails — logged).

### B2. Treatments (preregistered, with fallbacks)
- T-playaction: `play_action` (IF column present in snapshot; else DROPPED
  with one-line note — no substitution).
- T-tempo: `no_huddle` (no-huddle as tempo proxy).
- T-shotgun: `shotgun`.
- **Motion treatment NOT available:** nflverse pbp has no motion indicator
  column (verified against snapshot column list) — no motion estimand exists
  in this data. Spec §3's "motion" is therefore out of scope for T2-RD.
Sample: all non-special-teams, non-kneel/spike plays (regular pass/rush).

### B3. Controls X (all pre-treatment)
down, ydstogo (binned), yardline_100 (binned), score_differential (binned),
qtr, game_seconds_remaining (binned), posteam, defteam, week, season,
roof/surface (if present), temperature/wind bins (if present). Play type,
yards gained, and anything post-snap EXCLUDED (bad controls). When a
variable is the treatment it is excluded from X.

### B4. Naive baseline (the duel target)
θ_naive = mean(epa | D=1) − mean(epa | D=0) on the same sample/era
(the confounded number broadcasts cite).

### B5. Duel spec (preregistered)
For each treatment, on the era split (nuisance + θ fit on train ≤2010,
evaluated on test 2018–2025):
- **D1 debias magnitude:** kill the DML value-add if
  |θ_DML(test) − θ_naive(test)| < 0.02 EPA/play → "naive suffices."
- **D2 OOS prediction duel:** same outcome nuisance ĝ fit on train; on test
  era compare MSE of three EPA models: M0: ĝ(X); M_naive: ĝ(X)+θ_naive·D;
  M_dml: ĝ(X)+θ_DML·D (θs from train). M_dml must beat M_naive on test MSE
  to claim value over the naive delta. Losing = kill.
- **D3 placebo:** shuffle D within (down × ydstogo-bin × yardline-bin)
  strata, rerun DML. Kill the pipeline if |θ_placebo| > 0.02.
- **D4 era stability:** θ per era; discovery needs same sign all eras.

### B6. DML kill criteria
Any of: D3 fires (pipeline broken) → kill; D1 fails AND D2 fails →
"no value over naive delta" obituary; BH-corrected θ_DML p > 0.05 → null.

## C. Family-wide testing discipline
- BH correction across the full T2 primary battery (11 RD + 3 DML×D1/D2
  primary contrasts = 17 tests; D3/D4 are diagnostics, not discovery tests).
- Fixed seed 20260913 everywhere; snapshot ref + code hash in RUNLOG.
- Killed families → one-line obituary in REPORT.md. Nulls stay published.
- Discovery bar (Phase 6 §7): OOS edge vs dumb baseline AND market/public
  model where applicable, era-stable, placebo-clean, one-paragraph statement.
  **Market duel N/A for T2:** causal estimands (RD jumps, treatment effects)
  have no closing-line counterpart; the duel is vs the dumb baseline
  (smooth-only RD / naive EPA delta) per §4.6.

## D. Sample-test gate (pre-snapshot)
1-season sample (2023, nflreadpy live pull, unversioned — SAMPLE ONLY):
pipeline must run end-to-end, produce finite estimates/CIs, placebos must
not systematically fire on the sample. Full runs ONLY after MANIFEST.md.
