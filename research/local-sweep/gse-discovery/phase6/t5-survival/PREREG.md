# T5 — Survival analysis of drives: PRE-REGISTRATION
## GSE Phase 6 | 2026-09-13 | worker: T5 subagent | seed: 3705

Status: PREREGISTERED BEFORE ANY MODEL FIT. Code may be smoke-tested on a
1-season sample (fit mechanics only — no verdicts drawn from sample fits).

---

## 1. Research questions

Q1. Can drives be modeled as discrete-time survival processes where the
    **hazard function** (per-play probability that a drive ends, and how)
    is the primitive instead of EPA?
Q2. Do hazard-based team offensive/defensive ratings **disagree** with
    EPA-per-drive ratings, and where they disagree, which predicts
    next-week game outcomes better?

## 2. Estimand

Discrete-time **cause-specific hazard** of drive death, per play t = 1,2,3,...
within a drive:

- h_score(t | X_it): P(drive ends in a score — offensive TD or FG — on play t
  | drive alive at start of play t, covariates X_it)
- h_dead(t | X_it): P(drive ends scoreless — punt, turnover, turnover on
  downs — on play t | alive at t, X_it)

Team ratings are the **team fixed effects** in these hazard models:
- off_score_i: log hazard ratio of team i's offense scoring per play
  (higher = better offense)
- off_dead_i: log hazard ratio of team i's offense dying scoreless per play
  (higher = worse offense; enters ratings negated)
- def_score_j: log hazard ratio a defense j imposes on opponent scoring
  (higher = worse defense; enters negated)
- def_dead_j: log hazard ratio a defense j imposes on opponent scoreless death
  (higher = better defense)

Net team strength: S_i = (off_score_i − off_dead_i) − (def_score_i − def_dead_i).
S is a log-hazard-ratio-scale scalar; higher = stronger team.

## 3. Censoring definition (pre-registered, non-negotiable)

A drive-play observation is **right-censored** (contributes to the risk set
but no event) when the drive ends for a reason other than offense/defense
play:

- Drive ends because the half or game ends (`fixed_drive_result` in
  {"End of half", "End of game"}): CENSORED at the last observed play.
- QB kneel / spike to run out the clock ending the drive where the clock,
  not the defense, kills it: drives whose final play is a kneel in the last
  2:00 of a half with the outcome decided are CENSORED (flag: kneel-down
  drive). Rationale: the offense chose not to try to score; the hazard of
  "death" is not identified.
- All other drive ends are EVENTS of the observed cause:
  score ∈ {"Touchdown", "Field goal", "Safety"} (safety credited as a
  defensive score event — counts in h_score for the *defense's* offense? NO:
  safety is scored BY the defense; prereg rule: safeties are dropped from
  both cause models, <0.5% of drives, documented in RUNLOG),
  scoreless death ∈ {"Punt", "Turnover", "Turnover on downs",
  "Missed field goal", "Blocked field goal", "Field goal attempt" no-good}.
  Missed/blocked FG: the drive died scoreless → h_dead event.
- Overtime drives: included, clock covariate handles it.

Time scale: play index within drive (1-based). Plays beyond t=15 pooled
into t=15+ (fewer than 0.3% of plays; avoids sparse baseline cells).

## 4. Identification argument

The discrete-time hazard MLE = logistic regression on the play-level risk
set (each play is a Bernoulli trial conditional on survival to that play;
this is exactly the discrete-time survival likelihood — no approximation).
Team FE identified by sum-to-zero constraints within each of the four FE
vectors (Σ off_score = Σ off_dead = Σ def_score = Σ def_dead = 0), i.e.
effects are log hazard ratios vs the league-average team, holding
covariates fixed. Covariates (down, distance, field position, score
differential, clock) absorb game-state confounding so team FE capture
residual team quality, not schedule/state luck. No unobserved-confounding
claim is made: ratings are descriptive hazard contrasts, and their only
test is the pre-registered predictive duel.

Threats documented, not hand-waved: (a) team FE absorb coaching/scheme
effects — fine, ratings are allowed to be "team program" effects;
(b) garbage-time play-calling differs — clock/score covariates absorb the
first order; (c) era regime change — handled by era-split validation.

## 5. Model specification (frozen)

For each cause c ∈ {score, dead}, weighted logistic regression on cells
aggregated over (t_bin, down, ydstogo_bin, yardline_bin, scorediff_bin,
clock_bin, posteam, defteam):

  logit h_c = α_{t} + β_down + β_ydstogo + β_yardline + β_scorediff
              + β_clock + off_c[posteam] + def_c[defteam]

- t: dummies 1..14, 15+.
- down: 1,2,3,4 (4th-down selection noted as limitation).
- ydstogo: {1, 2, 3–5, 6–9, 10, 11–15, 16+}.
- yardline_100 (yards to opponent goal): {1–10, 11–25, 26–40, 41–60, 61–80, 81–99}.
- score_differential (offense minus defense): {≤−17, −16..−9, −8..−4, −3..−1, 0,
  1..3, 4..8, 9..16, ≥17}.
- half_seconds_remaining: {>900, 301–900, 121–300, ≤120} (second-half clock
  pressure; first-half end also censored per §3).
- No interactions in the primary spec (interactions = exploratory only,
  reported as such, BH-corrected).
- Estimation: Newton-IRLS on aggregated weighted cells, sum-to-zero
  constraints via dropping the last team level and recovering. Convergence:
  max|Δℓ| < 1e-8 or 100 iterations; non-convergence → obituary, no rescue
  tuning (documented).
- Fixed seed 3705 for any stochastic step (cell bootstrap CIs, permutation).

## 6. Duel spec (the only verdict that matters)

**Task:** predict next-week NFL game outcomes (home win/loss), seasons
2018–2025 (test), using ratings computable from data available *before*
that week's games.

**Rating windows (identical for all contestants):** for week W of season S,
ratings use drives from seasons S−2, S−1 and weeks 1..W−1 of season S
(minimum: if fewer than 4 games of season S played, use only S−2, S−1).
Same windows for hazard ratings, EPA/drive ratings, Elo.

**Contestants:**
- HAZARD: S_i from §2; game feature = (S_home − S_away).
- EPA: off EPA/drive and def EPA/drive allowed, shrunk toward league mean
  with prior weight = 60 drives; game features = (offEPA_home − offEPA_away),
  (defEPA_home − defEPA_away) with defEPA signed so higher = better defense.
- ELO: standard Elo, K fit by MLE on train era (≤2010), HFA fit on train;
  game feature = Elo_home − Elo_away (+ HFA).
- Each contestant → logistic regression P(home win) fit on train era
  (≤2010) only. Validation era 2011–2017 used for spec sanity checks only
  (no refit of duel weights; reported for transparency).

**Primary metric:** test-era log-loss. Secondary: accuracy, implied-spread
RMSE vs actual margin.

**Disagreement region:** games where hazard-implied spread and EPA-implied
spread (from each model's train-fit logistic → spread mapping via margin
regression on train) differ by ≥ 2.0 points. On this subset: which model
has better log-loss?

**Market duel (§4.7):** closing spread_line from pbp. Report (a) RMSE of
each model's implied spread vs actual margin, (b) regression of actual
margin on (spread_line, model_edge): does the hazard edge add to the line
(t-stat on model_edge coefficient, test era)?

## 7. Permutation / placebo (mandatory)

- P1 (label shuffle): randomly permute team labels on drives 200 times,
  recompute hazard ratings, rerun duel. Null distribution of
  Δlogloss(hazard − best baseline). Empirical p = fraction with Δ ≤ observed.
- P2 (synthetic null): simulate drives with all team FE = 0 (bootstrap
  resample of covariate cells, random team assignment); pipeline must
  produce |S_i| small and duel Δlogloss ≈ 0. If the pipeline "discovers"
  ratings under the null, the pipeline is broken → obituary.
- P3 (target shuffle): shuffle drive outcomes within (t, down, yardline)
  cells; team FE must collapse to ≈0 (max |FE| < 0.05).

## 8. Multiple comparisons

Benjamini–Hochberg across the T5 test battery: {K1 primary duel, K2
disagreement duel, market-edge t-test, K4 stability}. α = 0.05. Individual
hazard-ratio CIs (cell bootstrap, 200 reps, seed 3705) are descriptive;
no selection on significance.

## 9. Kill criteria (quantitative, pre-registered)

- **K1 (PRIMARY):** Kill unless test-era paired-permutation log-loss of
  HAZARD beats the better of (EPA, ELO) with one-sided empirical p < 0.05
  **and** Δlogloss ≤ −0.002 (substantive, not just significant).
- **K2 (disagreement discovery):** If ≥150 games fall in the disagreement
  region: hazard must beat EPA there (log-loss, one-sided permutation
  p < 0.05) for a "discovery region" claim. If <150 games, K2 vacuous
  (reported, not failed).
- **K3 (placebo gate):** P1/P2/P3 must pass (placebo Δlogloss p ≥ 0.05;
  null FE collapse). Failure = pipeline broken = obituary, not "promising".
- **K4 (stability sanity):** Spearman ρ between team S trained ≤2010 and
  trained 2011–2017 must be > 0.2 with p < 0.05. (Weak bar: programs persist
  somewhat across eras.)
- **Verdict PROMOTE** requires K1 + K3 + K4 all pass (BH-adjusted where
  applicable). K2 passing alone = "disagreement edge, primary null" —
  reported honestly, family stays under test. Anything else = one-line
  obituary in REPORT.md.

## 10. Reproducibility

- Data: frozen snapshot ~/workspace/gse-discovery/data_snapshot_20260913/
  (MANIFEST.md). No full-era runs before MANIFEST exists.
- Seeds: 3705 everywhere stochastic.
- Every run logs: git/code hash (sha256 of scripts), snapshot ref,
  nflverse data vintage (max game date in snapshot), full stdout → RUNLOG.
- 1-season sample runs are for code validation only; sample-fit numbers
  never enter REPORT.md verdicts.

## 12. Amendments (all made BEFORE any real fit; sample fits are mechanics-only)

- **A1 (2026-09-13, §7 P1 feasibility):** 200 full-pipeline team-label
  shuffles are computationally infeasible (each = 2 full IRLS refits on
  ~600k train cells, ~2 min each → ~13 h). Replaced with:
  (a) paired sign-permutation test (10k reps, instant) on test-era
  per-game log-loss differences for the K1/K2 p-values — the standard
  test for this comparison;
  (b) P2 parametric-bootstrap synthetic null (all team FE = 0, one full
  refit) and P3 within-stratum target shuffle (one full refit) as the
  pipeline-integrity placebos, with the pre-registered numeric gates
  (max|FE| < 0.05; |null duel Δlogloss| < 0.002).
  The K3 gate now reads: P2/P3 pass AND paired-permutation machinery
  verified sane (p≈uniform under P2 null).
- **A2 (2026-09-13, data hygiene):** plays with null covariates
  (down/ydstogo/yardline_100/score_differential/half_seconds_remaining)
  are dropped before cell aggregation; the count is logged per season.
  (Empirically these are kickoff/PAT-adjacent rows leaking through the
  play-type filter, <0.1% of kept plays.)
- **A3 (2026-09-13, duel-weight fitting):** duel logistic weights are fit
  on train seasons 2002–2010 using per-season *expanding* ratings
  (season S rated from seasons < S only) — no within-train lookahead.
  Validation-era metrics use per-season static ratings (sanity only).
- **A4 (2026-09-13, corrected):** weekly fits are parallelized over
  (season, week) tasks with a 2-process pool; no warm starts are used
  (each window fit starts at beta=0). `cells_wk_{season}.parquet` (with week
  key) built for seasons ≥ 2011 only (train era needs static cells only).
- **A5 (2026-09-13, parameterization fix):** the as-written dummy spec was
  rank-deficient by 6 (constant vector spanned by every categorical's full
  dummy set) and Newton diverged on the 1-season sample. Fixed to a
  full-rank parameterization: intercept + drop-first dummies per
  covariate; team FE = drop-last (reference 0) recentered to exact
  sum-to-zero. The likelihood and the estimand (§2) are unchanged — this
  is a reparameterization, not a spec change. IRLS now uses a
  backtracking line search (monotone LL) with ridge 1e-6. t_bin coded
  0..14 (0 = first play of drive, 14 = 15th play and beyond).

## 11. Compute/memory discipline

2 CPUs, ~3GB RAM, shared box. Season-chunked polars processing, column
pruning at load, categorical dtypes, cell aggregation before IRLS
(design matrix is cells, not plays). `nice -n 15`.

## 12b. Further amendments (all BEFORE any frozen-snapshot fit)
- **A6 (2026-09-13):** validation era (2011–2017) uses genuine rolling
  weekly hazard ratings with the identical window as test
  (S−2,S−1 full + S weeks<W), not the static 2011–2017 era rating.
  All contestants (hazard, EPA/drive, Elo) use the same window definition.
- **A7 (2026-09-13, IRLS correctness fix):** the rewritten Newton step
  solved for the full updated beta but was applied as an increment
  (`beta + alpha*step`), so fits ran to max_iter without converging.
  Fixed to solve for the Newton increment
  (`step = A^{-1}(XtWz − A@beta)` = penalized gradient direction).
  Verified: 2024 sample converges (9/8 iters), NLL drops 408→344 on a
  3k-cell subset, team ratings pass sanity (BUF/PHI/BAL top; CLE/JAX/CAR
  bottom).
- **A8 (2026-09-13):** EPA/drive window ratings use a precomputed
  cumulative lookup (`EpaLookup`) — mathematically identical to the
  per-game `epa_ratings_window` (same shrinkage, same league mean), but
  O(1) per game instead of O(games × drives).
- **A9 (2026-09-13):** duel labels are taken from the same feature frame
  as the features (row-alignment guarantee); duel weights fit on
  2002–2010 only (seasons 1999–2001 lack two full prior seasons).
- **A10 (2026-09-13, P2 duel-gate correction):** the P2 "duel delta"
  gate is one-sided. Under the synthetic null the refit hazard ratings
  are pure noise (≈0), so the null-hazard duel prediction is correctly
  UNINFORMATIVE and must lose to informed baselines; requiring
  |delta|<0.002 would perversely fail a correct pipeline. P2 passes iff
  max|FE|<0.05 (no hallucinated team effects) AND the null hazard does
  not spuriously beat the best baseline (delta_null = lh0 − min(le,ll_)
  is not significantly negative; gate: delta_null > −0.002).
