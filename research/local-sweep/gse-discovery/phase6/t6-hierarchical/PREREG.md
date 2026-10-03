# T6 — Bayesian Hierarchical Partial Pooling — PREREGISTRATION
MOVE-37 Phase 6 | Family T6 | Worker: Motif | 2026-09-13
Status: PREREGISTERED — no estimation run on data yet.

## 1. Estimand
For each team-season (t, s): latent offensive strength O[t,s] and defensive
strength D[t,s], defined as expected EPA/play on offense (resp. allowed on
defense, sign-flipped) relative to that era's league mean. Estimand used for
game prediction: predicted score margin in game g between home A and away B:

  margin_hat = (O[A] - D[B]) - (O[B] - D[A]) + HFA

where ratings are fitted on games already played *in the same season before
game g* (weeks 1..w-1 predicting week w), and HFA is a scalar estimated on
the training era.

## 2. Pooling structure (the discovery claim)
Public models shrink early-season ratings ad hoc (e.g., "blend with prior
season" or fixed shrinkage constants). T6 replaces that with principled
partial pooling: team-game EPA/play observations y[i] (team t, game i, n[i]
plays) are modeled as

  y[i] | theta[t] ~ Normal(theta[t], sigma2 / n[i])
  theta[t] ~ Normal(mu_era, tau2)

Hyperparameters (mu_era, sigma2, tau2_offense, tau2_defense) estimated by
marginal maximum likelihood (empirical Bayes) on the TRAIN era; mu_era is
the era league mean (fixed at 0 after centering). Posterior-mean team
ratings are analytic James-Stein-style shrinkage:

  theta_hat[t] = lambda[t] * ybar[t] + (1 - lambda[t]) * mu_era,
  lambda[t] = tau2 / (tau2 + sigma2 / n[t])

The discovery question: does *properly estimated* shrinkage (tau2 from the
data, observation noise scaled by actual play counts) beat (a) no shrinkage
and (b) the ad-hoc shrinkage baked into Elo, on small-sample early-season
game prediction? The duel ground is weeks 1-6, where n[t] is small and
lambda[t] << 1 for most teams.

## 3. Priors and identification (stated explicitly)
- No subjective priors anywhere. Prior mean = era league mean (0 after
  centering); prior variance tau2 = ML estimate from the train era marginal
  likelihood. This is empirical Bayes, not fully Bayesian: priors are
  estimated, not chosen.
- Identification: tau2 is identified from between-team variance in
  game-level EPA/play *after* subtracting within-team sampling variance
  sigma2/n. If between-team variance is fully explained by sampling noise
  (tau2_hat ~ 0), the model reduces to "all teams are average" and the duel
  result will show it. Flat-surface diagnostic (Phase-6 §4 rule 2): report
  the maximized marginal log-likelihood at tau2_hat vs at tau2 = 0 and vs
  tau2 = +inf (no-pooling limit); if the profile is flat (difference <
  ~2 log-points per degree of freedom), tau2 is unidentified and T6 is
  killed regardless of duel outcomes.
- HFA: estimated once on train era as mean(home margin - predicted margin
  at zero ratings); frozen for validate/test.
- Era-split: TRAIN <= 2010 (hyperparameters: tau2, sigma2, HFA), VALIDATE
  2011-2017 (tune: which plays included — see §5; prediction horizon choice),
  TEST 2018-2025 (final duel, run once).

## 4. Computation choice (documented, per task)
This box has no PyMC/Stan and ~2 CPUs / ~3GB free RAM. Full MCMC is not
runnable, and pretending otherwise would be dishonest. The implementation
is empirical Bayes with analytic posterior means (numpy/scipy only):
marginal likelihood maximized with scipy.optimize on the train era,
shrinkage applied in closed form. For this estimand (Normal-Normal
conjugate), analytic empirical Bayes IS the correct posterior-mean
solution — MCMC would add nothing but Monte Carlo error. Stated limitation:
no full posterior credible intervals; uncertainty in tau2 is propagated
by re-fitting on the validate era and checking stability of duel outcomes.

## 5. Duel spec (mandatory, per §4 rule 6)
All three contestants predict the same test games, trained only on the
same season's earlier weeks:
- HIER (T6): empirical-Bayes hierarchical EPA/play ratings, per §1-2.
- RAW: raw team-mean EPA/play from prior weeks, no shrinkage, no prior
  (the naive estimator the pooling is supposed to improve on).
- ELO: standard Elo on game W/L, K-factor tuned on VALIDATE era only,
  prior rating 1500, home-field parameter fit on TRAIN.
Prediction metrics per game: log-loss of predicted win probability and
binary accuracy. Win probability from margin_hat via probit link
(p = Phi(margin_hat / s)), with s fit on VALIDATE; same s applied to all
three contestants (ELO uses its own expected-score formula, kept as-is
since that is the public baseline people actually use).

Two duels:
- PRIMARY (kill gate): weeks 1-6 games, TEST 2018-2025. The theory says
  pooling dominates in the small-sample regime; if it doesn't win HERE,
  the family has nothing.
- SECONDARY (completeness): full-season (weeks 1-18) games, TEST 2018-2025.
  Reported, not a kill gate: by late season lambda[t] -> 1 and all
  contestants converge, so a tie here is expected, not a failure.

Design decisions (tunable ONLY on VALIDATE, frozen before TEST):
- Play inclusion: regular-season plays only; EPA/play per team-game.
  Include/exclude garbage-time (WP>0.95 or <0.05): decided on VALIDATE.
- Offense and defense pooled separately (two tau2 values).
- Neutral-site games: HFA=0.

## 6. Permutation / placebo (mandatory, per §4 rule 4)
- Permutation: shuffle team labels on team-game observations within each
  TEST season (destroying true team structure), re-run HIER vs RAW vs ELO.
  Expectation under a working pipeline: all three tie (~0.5 accuracy, equal
  log-loss); specifically HIER must NOT beat baselines on permuted data
  beyond chance. If HIER "wins" under permutation, the pipeline leaks and
  everything is void.
- Placebo: synthetic null dataset, same size as TEST, team effects drawn
  ~ N(0, 1e-6), outcomes from a probit with HFA only. HIER vs RAW vs ELO
  must tie. If any contestant shows an edge, the evaluation code is biased.

## 7. Quantitative kill criteria (pre-registered, no HARKing)
On TEST 2018-2025 weeks 1-6 games, per-game paired differences:
  d1 = logloss(RAW) - logloss(HIER), d2 = logloss(ELO) - logloss(HIER)
- KILL if one-sided paired t-test fails to reject d1 <= 0 at alpha=0.05.
- KILL if one-sided paired t-test fails to reject d2 <= 0 at alpha=0.05.
- Both p-values Holm-corrected within T6 (2 comparisons). A "win" needs
  both corrected p < 0.05 AND mean(d) > 0.
- KILL if tau2_hat is unidentified (profile flatness, §3).
- KILL if HIER wins TEST but fails the same two tests on VALIDATE
  (pre-TEST sanity: if it doesn't work on 2011-2017, it doesn't touch 2018-2025).
- KILL if HIER's wins come only from the HFA term (ablation: HIER with
  HFA=0 vs RAW; if the pooling itself adds nothing, the discovery is
  "home field advantage," which is not a discovery).
Secondary expectations (not kill gates): full-season TEST should show no
significant differences (convergence); permuted/placebo must show none.

If any KILL fires: one-line obituary in REPORT.md, code kept, no further
runs on this family.

## 8. Discovery bar (§7) — honest pre-assessment
- (a) Duel: HIER vs RAW/ELO is the dumb-baseline duel. Market duel (§4
  rule 7): ALSO tested vs closing spread_line probit; T6 claims a
  *method* for ratings, not a market edge. Report HIER vs spread: if HIER
  beats RAW/ELO but not the market, verdict is "interesting, not an edge."
- (b) Era-split: built in (§3).
- (c) Permutation/placebo + Holm correction: built in (§6-7).
- (d) One-paragraph statement: "Early-season team ratings should be
  shrunk toward the league mean by a factor estimated from how much true
  team-to-team variation exists relative to game-to-game noise; the data
  say the factor is <factor>, which beats raw averages and Elo by
  <margin> log-loss points on weeks 1-6, 2018-2025."
Pre-assessment of risk: this is a method improvement, not a new
structure. Most likely outcome is a small but real win in weeks 1-6. A
NULL is publishable ("proper pooling adds nothing beyond Elo's ad-hoc
shrinkage") and honest.

## 9. Reproducibility
- Fixed seeds: RNG_SEED = 20260913 (all stochastic steps: permutation,
  placebo draws, any resampling).
- Data: frozen snapshot ~/workspace/gse-discovery/data_snapshot_20260913/
  ONLY. No full runs on unversioned pulls. Small-sample code tests on
  nflreadpy direct pulls are for smoke-testing code paths, not results.
- Every run logs: git/code hash, snapshot MANIFEST hash, full stdout to
  RUNLOG.md. Results reproducible from snapshot by a third party.

## 10. File manifest (work dir ~/workspace/gse-discovery/phase6/t6-hierarchical/)
- PREREG.md (this file)
- t6_duel.py — full pipeline: hyperparameter fit, ratings, Elo, duels,
  permutation, placebo, Holm tests
- RUNLOG.md — dated run log
- REPORT.md — verdict + numbers or obituary
