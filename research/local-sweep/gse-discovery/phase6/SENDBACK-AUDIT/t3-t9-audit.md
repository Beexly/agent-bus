# ADVERSARIAL AUDIT — T3 (HMM regime-switching) & T9 (causal forest 4th-down)

**Auditor role:** adversarial, false-discovery hunting. Not a praise pass.
**Date:** 2026-09-13 | **Run context:** MOVE-37-PHASE6-01
**Protocol under audit:** `~/workspace/gse-discovery/deepseek-move37-phase6-response-01.md` (§1 T3, §3 T9)
**Lab implementation checked:** `~/workspace/gse-discovery/phase6/t3-hmm/` (`t3_hmm_select.py`, `t3_hmm_duel.py`, PREREG.md),
`~/workspace/gse-discovery/phase6/t9-causalforest/` (`t9_pipeline.py`, PREREG.md)

**Verdicts up front:**

| Family | Verdict |
|---|---|
| T3 — HMM regime-switching team states | **REPAIR FIRST** (6 demanded repairs; 2 independently fatal if unrepaired) |
| T9 — Causal forest, 4th-down aggressiveness | **REPAIR FIRST, borderline** (5 demanded repairs; 2 independently fatal to the estimand as specified) |

Neither family is killed without compute. Both ask real questions and both can be made
honest with mechanical, cheap repairs. But **neither is executable as written**: as specified,
T3 can manufacture "regimes" out of schedule strength and distributional splits, and T9's
estimand is misspecified badly enough that its own kill criteria would strangle a true signal
while its weak-orthogonalization path can inflate a noise artifact past the variance gate.

---

## PART A — T3: REGIME-SWITCHING TEAM STATES (HMM)

### Defect T3-D1 (FATAL): the fit unit is specified three contradictory ways

§1.5 kill criterion: "K* ≥ 2 in ≥ 70% of **team-seasons (fit per team)**" — team-seasons as the
unit, per-team as the fit. §1.6 pseudocode step 2 fits **per team-season** sequences, step 4
selects K* **pooled**, step 5 refits **one shared HMM across all teams**. §1.2's BIC uses
N ≈ 14,000 (all team-games pooled). PREREG §3 says "K* = argmin_K BIC **(pooled)**."
The lab implementation fits **per team, pooled across that team's seasons**, with BIC using
that team's own n (`math.log(n)`, `n = r["n_obs"]`) — matching none of the three.

These are different statistical objects with different penalties, different power, and
different interpretations. The kill criterion as written is unverifiable: there is no
procedure that is simultaneously "per team-season" and "fit per team," and the 70%
threshold has no defined denominator.

**Demanded repair:** pick ONE, rewrite §1.5/§1.6/PREREG to match, and make the lab code match
the text:
- (a) Selection: per **team-season** BIC with N = that team-season's G (16/17 games),
  K* chosen per team-season; kill criterion = fraction of team-seasons with K* ≥ 2.
- (b) Then a **separate, explicitly labeled** pooled model (shared emissions/transitions
  across all team-seasons, N ≈ 14,000) used only for the persistence test and the duel,
  with its own BIC table.
Do not mix the two. **Kill criterion:** if after rewrite the code's fit unit and the
PREREG's stated unit differ in any run, that run is void.

### Defect T3-D2 (FATAL): per-team-season BIC at n = 16 has ~zero power — the 70% kill criterion is a statistical artifact

BIC penalty difference between K=2 and K=1: Δp = p(2) − p(1) = 7 − 2 = 5 parameters,
so ΔBIC penalty = 5·log(16) ≈ **13.9 nats**. The maximized log-likelihood gain from a
genuine two-state split on 16 game-level EPA/play observations — where within-state noise
(game-level EPA/play SD ≈ 0.1–0.15) dwarfs plausible state-mean separation — will
essentially never exceed ~14 nats. Consequences:
- Under option (a) above, the "≥70% of team-seasons" criterion is nearly unpassable **by
  design**: the protocol will kill T3 not because regimes don't exist, but because the
  test cannot see them. A kill under this criterion is evidence about n=16, not about regimes.
- Conversely, any K ≥ 2 selection at n = 16 is more likely an overfit to one outlier game
  than a discovered regime.

**What the per-team-season fit can and cannot identify:** it can detect only gross
bimodality (e.g., a cluster of games separated by several within-state SDs). It **cannot**
identify transition dynamics (15 transitions per team-season), cannot separate K=2 from
K=3, and cannot support the persistence test (π_cross needs cross-season label continuity
the per-team-season fit does not provide).

**Demanded repair:** strike the per-team-season 70% criterion entirely. Primary selection
is the pooled model (option (b) in D1): one BIC table, N = total team-game obs, shared
structure. Report per-team-season posterior state uncertainty as a diagnostic: if >25% of
team-seasons have max posterior state probability < 0.7, states are unidentifiable at the
unit of interest — **kill the regime claim** (report as mixture only). **Kill criterion:**
pooled ΔBIC(K* vs K=1) < 10 → "no regime structure," family dies.

### Defect T3-D3 (MATERIAL): no opponent-strength control — the HMM will rediscover the schedule

Baum-Welch assumes stationary transitions; the emissions are raw posteam offensive
EPA/play with **no opponent adjustment anywhere in the protocol**. NFL schedule
difficulty is clustered within seasons (divisional stretches, soft/hard runs). A "bad
state" is observationally identical to "a stretch of good defenses"; a "good state" to
"a stretch of bad defenses." The transition matrix then estimates schedule clustering,
not form regimes. This is the single most likely false-discovery path in T3.

**Demanded repair:** residualize before fitting. Regress game-level offensive EPA/play on
opponent defensive strength (defteam EPA/play allowed that season, or pre-game Elo
differential — both available in nflverse) and fit the HMM on the **residuals**. The duel
must then predict residualized next-game EPA with all baselines on the same residualized
outcome (fair comparison preserved). **Kill criterion:** if the residualized HMM selects
K* = 1 while the raw-EPA HMM selects K* ≥ 2, the "regimes" were schedule — the regime
claim dies; report as "schedule artifact," not a NULL about form.

### Defect T3-D4 (FATAL): no temporal-permutation diagnostic — distributional splits can masquerade as regimes

§6 claims "Permutation nulls enforced: T3 (via K*=1 comparison)." A BIC model comparison
is not a permutation test. Nothing in the protocol breaks the temporal order. If the
emissions are merely bimodal (e.g., heavy-tailed EPA/play — the very misspecification the
protocol worries about in §1.3), BIC will select K ≥ 2 on **shuffled** game order too, and
every downstream claim about "regimes," "persistence," and "switching" is false while the
protocol's gates all pass.

**Demanded repair:** gate the family on a shuffle test, run BEFORE the duel:
1. Shuffle game order within each team-season (destroys Markov structure, preserves the
   marginal distribution).
2. Refit the pooled selection on shuffled data; record ΔBIC_shuffled(K* vs 1).
3. **Kill criterion:** if ΔBIC_shuffled is within 10 of ΔBIC_real, or shuffled data also
   selects K* ≥ 2, the states are distributional, not temporal → kill the
   "regime-switching" interpretation. The family may survive only as a static-mixture
   claim, and the persistence test and duel may not be reported as regime evidence.

### Defect T3-D5 (MATERIAL): game-script / garbage-time confounding of the estimand

Game-level EPA/play averages ~60 plays **including garbage time**. The filter
(`play_type IN ('pass','run')`) includes kneel-downs (very negative EPA) and
prevent-defense-inflated pass EPA in blowouts. A latent "state" is observationally
identical to "games that were blowouts" — the estimand (team form) is confounded by game
script, and the confound is serially correlated within seasons (bad teams have more
garbage time), which is exactly what an HMM will latch onto.

**Demanded repair:** exclude garbage-time plays from the aggregation (pre-register one
rule, e.g. drop plays with |wp − 0.5| > 0.45 or 4th-quarter |score differential| > 16;
drop qb_kneel/qb_spike explicitly). Report sensitivity: K* and ΔBIC with and without the
filter. **Kill criterion:** if K* flips (≥2 → 1) under garbage-time exclusion, the states
were script artifacts — regime claim dies.

### Defect T3-D6 (MINOR): state labels are unaligned across teams and across restarts

States are unlabeled. Under pseudocode step 5 (one shared HMM) cross-team "state 1"
comparisons are licensed but rest on the heroic assumption that all 32 teams share one
transition matrix and one emission set — a bad team's entire season can sit in "state 1,"
confounding team quality with state. Under per-team fits, states are unaligned across
teams and any cross-team state statement is meaningless. Separately, the 10 restarts and
the 3 seed replications (42/123/7) can permute labels, so reported state means are not
comparable across runs unless aligned.

**Demanded repair:** (a) sort states by ascending μ and enforce the ordering in code;
(b) the persistence test must use a single fixed fit — no cross-run state comparisons;
(c) state explicitly which fit licenses cross-team statements (shared HMM only) and which
does not (per-team fits). No kill criterion — documentation, but any report violating it
is void.

### Defect T3-D7 (MINOR): flat-surface diagnostic can pass on a shared spurious mode

(best − median)/|best| < 0.01 across 10 restarts can pass when all restarts land in the
**same** basin (e.g., all split on the same outlier game). Agreement on a local mode is
not identification. The IQR is reported but has no gate.

**Demanded repair:** add two gates alongside the existing diagnostic: (i) emission
separation — |μ_1 − μ_2| > 1 pooled within-state σ for K* = 2, else "unidentified
mixture"; (ii) restart label-agreement — after label alignment, require ≥ 8/10 restarts
to agree on the argmax state for ≥ 80% of games. **Kill criterion:** if restarts disagree
on assignments, states are unidentified — skip persistence test and duel, report NULL.

### Defect T3-D8 (MINOR): selection sees the test era

The lab's `t3_hmm_select.py` fits on all seasons 1999–2025 pooled per team; the protocol
(§1.6 step 7) prescribes train ≤ 2010 for HMM fitting with test 2018–2025 held out.
K* selection and emission parameters estimated on test-era games contaminate the duel.

**Demanded repair:** restrict selection and all parameter fits to train era (≤2010);
test-era games enter only via forward filtering under frozen parameters. One-line fix.

### Dumb-baseline duel assessment (T3)

Named baselines: (1) Elo-OLS, (2) rolling mean of last 4 games' EPA/play, (3) HMM
posterior-weighted forward-filter prediction; win margin +0.02 R² on 2018–2025.
The duel is mechanically well-posed, but two problems:
- **The HMM predictor can beat rolling-EPA by shrinkage alone.** For K=2 with persistent
  states, the forward-filter prediction is approximately an adaptive shrinkage estimator.
  It can clear +0.02 R² on a spurious mixture with no true regime structure. The duel
  does not test "regimes vs no regimes" — it tests "adaptive smoother vs 4-game mean."
  **Demand:** add an EWMA (exponentially-weighted moving average, α tuned on train) baseline.
  The honest duel for the regime claim is HMM vs EWMA, not HMM vs 4-game mean. If HMM ≈
  EWMA, the "states" add nothing beyond smoothing — report as such.
- The duel is uninterpretable as regime evidence unless D4 (shuffle gate) passes first.
  **Order of operations: shuffle gate → residualization check → duel.** A duel win with a
  failed shuffle gate is a smoothing win, not a regime discovery.

**T3 verdict: REPAIR FIRST.** The question (game-level form regimes) is real and the
repairs are mechanical: rewrite the fit-unit spec (D1), strike the powerless 70%
criterion (D2), residualize opponent strength (D3), add the shuffle gate (D4), filter
garbage time (D5), align labels (D6), harden the flat-surface gate (D7), era-restrict
selection (D8), add the EWMA baseline. Estimated extra work: hours, not days. Do not run
the duel until D3+D4 pass.

---

## PART B — T9: HETEROGENEOUS TREATMENT EFFECTS OF 4TH-DOWN AGGRESSIVENESS

### Defect T9-D1 (FATAL): Y = game win is the wrong outcome — the estimand's signal is buried by design

A single 4th-down go-vs-kick decision shifts win probability by ~0.01–0.05. Game outcome
is binary with Var ≈ 0.25, driven by ~60 subsequent plays the decision does not touch.
Per-observation SNR ≈ 0.02/0.5 ≈ **0.04**. Consequences, each disqualifying:
- The calibration gate (slope ∈ [0.7, 1.3] of noisy DR scores on noisy τ̂) will fail by
  **attenuation bias** even under a true heterogeneous effect — the protocol kills true
  signals.
- The variance gate (Var(CATE) > 0.01, i.e. σ_τ > 0.1) demands heterogeneity **larger
  than the plausible ATE itself** (realistic: τ̄ ≈ 0.02, σ_τ ≈ 0.02 → Var ≈ 0.0004).
  The protocol can only pass this gate on estimation-noise-inflated variance — i.e., it
  selects for the artifact (see D4's weak-orthogonalization path).
- DeepSeek itself marked the outcome SPECULATIVE (self-audit #24: "Design choice;
  alternative is WPA as continuous outcome").

**Demanded repair:** Y := the decision's **WPA** (nflverse `wpa` column — continuous,
directly attributable, per-play SD ~0.03–0.05 vs effect ~0.01–0.03, ~10× the SNR).
The duel becomes expected-WPA policy comparison; the 0.02 win-probability margin is
re-derived on the WPA scale via a pilot power calculation on the **train era only**:
minimum detectable heterogeneity given n ≈ 30k, min leaf 50. Pre-register the new
Var(CATE) threshold from that calculation, not from a round number. **Kill criterion:**
if with WPA outcome the forest still fails calibration or the duel margin → kill.
Do not run the game-win-Y version at all; it is dominated on every statistical axis.

### Defect T9-D2 (FATAL for the pooled estimand): T = 0 collapses punt and field-goal attempt — consistency violated

"Kick" is not a well-defined intervention. Punt and FG attempt have radically different
payoff structures and are selected in different regions: punts on 4th-and-long in own
territory (P(go) → 0 — this is where overlap failures concentrate), FG attempts in
opponent territory (P(go) moderate). The propensity model must bridge two different
selection mechanisms; τ(x) = E[Y(go) − Y(kick)|X] averages "vs punt" and "vs FG"
comparisons with weights set by the sample mix. No coach ever chooses "kick" — the
estimand answers a question no decision-maker asks, and the homogeneous-bot policy
"go iff ATE > 0" inherits the meaninglessness.

**Demanded repair:** split into two estimands, each with its own overlap trimming, CATE,
calibration, and duel:
- τ_punt(x) on the go-vs-punt subsample,
- τ_FG(x) on the go-vs-FG subsample.
**Kill criterion:** if either subsample has <90% overlap retention or no cell with
≥30/≥30, that sub-analysis is unidentified — report it as such; do not pool. The pooled
T9 as specified should not be executed.

### Defect T9-D3 (MATERIAL): clustering ignored — SEs anti-conservative, permutation null miscalibrated

~30k decisions are clustered in ~4k games (same coach, same game script, same opponent)
with coaches repeated across seasons. The protocol treats plays as independent:
- The duel's paired t-test and the calibration HC1 SEs understate uncertainty →
  anti-conservative p-values and CIs.
- The permutation test shuffles T **within propensity deciles across games**, breaking
  within-game T correlation → the null distribution does not correspond to the actual
  null (no heterogeneity, but clustered decisions). A "pass" or "fail" against this null
  is uninterpretable.

**Demanded repair:** (a) cluster-robust inference at the **game level** everywhere —
cluster-HC1 SEs for calibration, cluster bootstrap or cluster-robust paired test for the
duel; (b) **block permutation**: shuffle T within (game × propensity bin); single-decision
games contribute nothing to the null (correct). **Kill criterion:** re-evaluate kill
criteria 3 (duel) and 6 (permutation) under clustered inference — if the duel p > 0.05 or
the block-permutation null overlaps observed Var(CATE), the corresponding kill fires.

### Defect T9-D4 (MATERIAL): unconfoundedness is asserted, and weak orthogonalization is a flag instead of a kill

Coaches decide on information absent from X: weather (nflverse **has** game-level
`temp`, `wind`, `roof` — not in X), injuries, personnel, opponent tendencies, gut feel.
The protocol labels estimates "CATE under unconfoundedness" and moves on — a label is
not a sensitivity analysis. Worse: the nuisance R² floor of 0.03 (admitted SPECULATIVE,
self-audit #28) "**flags** but continues." With propensity pseudo-R² < 0.03 (AUC < 0.60),
Robinson residualization is weak and the forest's "heterogeneity" is substantially
estimation noise — the exact path by which Var(CATE) > 0.01 gets cleared artifactually
(compounding D1).

**Demanded repair:** (a) promote to **KILL**: outcome-model R² < 0.03 or propensity
AUC < 0.60 → family dies, no flag-and-continue; (b) add available measured confounders
to X (`temp`, `wind`, `roof`/outdoor, rest days if available); (c) sensitivity analysis
with teeth: report the Cinelli–Hazlett robustness value for the policy gap — how strong
an unobserved confounder (benchmarked against the strongest observed one, e.g.
score_differential) would have to be to erase the duel margin. **Kill criterion:** if a
confounder as strong as score_differential could erase the policy gap → no decision-value
claim; report adjusted differences only.

### Defect T9-D5 (MINOR — resolved in code, clarify in text): apparent double orthogonalization

Protocol §3.6 reads as: step 4 computes doubly-robust scores γ, step 5 fits
CausalForestDML "which does its own orthogonalization internally." Read literally, that
is double residualization. The lab implementation (`t9_pipeline.py::fit_forest`) in fact
feeds raw (X, T, Y) to CausalForestDML and uses γ only for the calibration regression
and the AIPW policy scoring — the legitimate R-learner pseudo-outcome use. No
double-counting in code.

**Demanded repair:** one clarifying line in PREREG §5.7: "γ is not an input to the
forest; it is used only for calibration and AIPW scoring." No kill criterion. Not an
estimand defect.

### Defect T9-D6 (MATERIAL, partial): duel honesty gaps beyond the era split

The parent's concern — "policy evaluated on the same test data used to fit the CATE" —
does **not** hold under the PREREG: the forest is fit on train only (§5.7), policies
evaluated on test. The era split is the cross-fitting. Genuine remaining gaps:
- π_CATE(x) = 1[τ̂ > 0] is a zero-threshold policy on noisy τ̂ — high-variance,
  and the threshold was never chosen honestly. **Demand:** a thresholded variant
  (go iff τ̂ > c, c tuned on the **val** era) reported alongside; the gated duel uses the
  val-chosen threshold.
- The AIPW duel scores use train-fit nuisances evaluated on test — honest, but under
  D1/D4's weak-nuisance path the duel is a noise comparison. D1/D4 repairs subsume this.
- Missing baseline: the **observed coach policy** AIPW value, mean(μ̂_0 + γ̂·T_observed).
  If the CATE policy cannot beat what coaches actually did, the decision-value claim is
  hollow regardless of the homogeneous-bot margin. **Demand:** report it (non-gated).

### Dumb-baseline duel assessment (T9)

Named baselines: homogeneous-ATE "4th-down bot" (go iff train ATE > 0), always-go,
always-kick, historical-frequency-by-cell; win margin ≥ 0.02 win-probability on test.
Assessment:
- The homogeneous bot is the **right** primary baseline — it is exactly the "public
  4th-down model" the discovery claim is measured against. Keep it.
- But with Y = game-win, the 0.02 margin is approximately the **entire plausible ATE** —
  the protocol demands the heterogeneity premium equal the whole effect. On the WPA
  scale (D1 repair) the margin must be re-derived from the pilot power calc; do not
  port 0.02 across outcome scales.
- The duel's AIPW evaluation is honest given the era split, but its SEs are
  anti-conservative until D3's clustering repair lands. No duel p-value is reportable
  before that.
- Historical-frequency baseline (train go-rate by cell, >0.5) is fine; cells <30/30 fall
  back to the overall rate — pre-registered, acceptable.

**T9 verdict: REPAIR FIRST (borderline).** D1 (outcome) and D2 (punt/FG collapse) are each
independently fatal to the estimand as specified — the protocol cannot be executed as
written without either guaranteeing a false NULL (its own Var gate strangles a true
signal) or admitting a noise artifact (weak orthogonalization inflates Var past the
gate). The repairs change the estimand enough to require a PREREG addendum (allowed
pre-run): Y := WPA, punt/FG split, game-level clustered inference + block permutation,
kill-not-flag on nuisance R², measured-confounder augmentation + robustness value,
val-tuned policy threshold, observed-coach-policy baseline. After repair this is a
legitimate, interesting analysis. Without repair, do not run.

---

## CROSS-FAMILY NOTES

1. **The self-audit's UNSOURCED count (33/52) understates the problem.** The issue is not
   that thresholds are round numbers — it is that two of them (T3's 70%-of-team-seasons,
   T9's Var(CATE) > 0.01) are *miscalibrated against the signal scale itself*: one has ~zero
   power by construction, the other demands heterogeneity larger than the plausible effect.
   Recalibrate gates against pilot/train-era signal scales, not conventions.
2. **Order of operations for both families:** diagnostic gates (shuffle/permutation,
   residualization, overlap, nuisance strength) BEFORE any duel. A duel win downstream of
   a failed diagnostic is not a discovery — it is a mislabeled artifact. The protocols
   currently list gates and duels side by side with no ordering; impose it.
3. **Implementation–protocol drift is already real** (T3 select script: per-team pooled
   fits on all eras vs protocol's per-team-season/pooled/train-era spec; T9: code correctly
   resolves the γ ambiguity the text leaves open). Freeze one spec, then make the code
   match it byte-for-byte before any run — the D1/D5 repairs cover both instances.

## THE THREE SHARPEST DEMANDS PER FAMILY

**T3:**
1. **Shuffle gate before duel (T3-D4):** shuffle game order within team-season; if BIC
   still selects K ≥ 2, the "states" are distributional splits, not temporal regimes —
   kill the regime interpretation. This is the cheapest, most decisive test in the family
   and it is absent.
2. **Residualize opponent strength (T3-D3):** fit the HMM on EPA/play residualized on
   opponent defensive quality; if K* ≥ 2 collapses to K* = 1, the regimes were the
   schedule. Without this, the HMM's most likely "discovery" is schedule clustering.
3. **Strike the 70% criterion (T3-D1/D2):** the per-team-season BIC at n = 16 has ~zero
   power (5·log 16 ≈ 13.9 nats penalty) and the criterion's unit ("team-seasons, fit per
   team") is incoherent — it guarantees a false kill, not a finding. Replace with pooled
   selection and a per-team-season posterior-uncertainty diagnostic.

**T9:**
1. **Change the outcome to WPA (T9-D1):** Y = game win buries a ~0.02 signal in ~0.5 SD
   noise; the Var(CATE) > 0.01 gate then demands heterogeneity bigger than the plausible
   effect — the protocol strangles true signals and selects for noise artifacts.
   Y := play-level WPA, re-derive all gates from a train-era pilot power calc.
2. **Split punt vs FG (T9-D2):** T = 0 collapses two different interventions; consistency
   is violated and the estimand answers a question no coach asks. Two separate estimands
   (τ_punt, τ_FG) or do not run.
3. **Kill, don't flag, on weak nuisances (T9-D4):** propensity AUC < 0.60 or outcome
   R² < 0.03 → family dies. Flag-and-continue plus a weak outcome is the exact pipeline
   through which estimation noise clears the Var(CATE) gate disguised as heterogeneity.
