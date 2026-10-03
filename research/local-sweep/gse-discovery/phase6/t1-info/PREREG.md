# T1 — Information-theoretic structure: PRE-REGISTRATION
## PROJECT MOVE-37 | GSE machine-discovery PHASE 6 | 2026-09-13
**Family worker:** T1 (information-theoretic). **Status:** pre-registered. NO runs before this file existed.

---

## 1. Research questions (estimands)

### T1a. Entropy rate → offensive efficiency
**Estimand:** Spearman rank correlation ρ (team-season play-call entropy rate,
test era) with (team-season offensive EPA/play, test era), plus the duel
improvement from adding the entropy-rate feature to the dumb baseline.

**Hypothesis (directional):** ρ > 0 — less predictable offenses are more efficient.
**Identification argument:** Play-calling is the coach's lever; defenses price in
predictability. Correlation alone is not causal. We mitigate the two big confounds:
  (1) *Game state* (score, down, distance drive both predictability and efficiency)
      → primary metric is entropy rate of play-call **conditional on the
      situation cell** S = (down × ydstogo-bucket × score-diff-bucket), i.e. the
      unpredictability that remains after removing what the situation dictates.
  (2) *Talent* (good teams can afford to be unpredictable) → the era-split duel
      controls this only partially; we state it as a limitation and treat the
      claim as "predictive association," not causal.

### T1b. Transfer entropy: defense ↔ offense play-call
**Estimand:** Team-season transfer entropy TE(defensive-channel → offensive play-call)
and TE(offense → defense), in bits per play.
**Hypothesis:** TE(def→off) > 0 for most team-seasons beyond a block-permutation
null — i.e., defensive alignment carries information about the coming play-call
beyond the offense's own tendencies (a coaching-tendency metric).
**Identification argument:** TE = H(X_t|X_{t-1}) − H(X_t|X_{t-1},Y_{t-1}).
It is exactly the reduction in uncertainty about the next play-call from knowing
the defense's pre-snap channel, over and above the offense's own history.
Positive TE vs a *channel-shuffled* null (Y shuffled within team-season,
preserving marginals and X dynamics) means the coupling is real, not an artifact.
**Feasibility gate (declared now):** the defensive pre-snap channel
(defensive personnel / defenders-in-box) is sparse or absent in nflverse pbp
before ~2015. If coverage of a defensive channel is < 50% of train-era plays,
T1b is killed as **infeasible-on-this-data** (a data kill, not a theory kill —
must be revisited if richer charting data appears). This is recorded honestly,
not tortured into a result.
**Amendment 2026-09-14 (before full run, no results seen):** the same documented
modified era split allowed for T1c (train 2015–2018 / validate 2019–2021 /
test 2022–2025) may be used for T1b if the defensive channel has ≥80% coverage
within those years. Rationale: column-availability fact, not a result peek —
both T1b and T1c were infeasible on the 1-season sample for lack of columns,
so no outcome information exists to condition on.

### T1c. Mutual information: personnel grouping ↔ EPA
**Estimand:** MI(personnel grouping; discretized EPA outcome), in bits, per grouping,
with bootstrap 95% CIs and a label-shuffled permutation null.
**Hypothesis:** some groupings (e.g., 11 vs 12 vs 21 personnel) carry > 0 bits
about play outcome beyond the permutation null, and the ranking is stable across
era halves.
**Identification argument:** purely descriptive — which groupings concentrate
information. No causal claim (personnel is chosen *because of* expected outcome).

---

## 2. Data, splits, leakage control

- **Full run:** ONLY the frozen snapshot at
  `~/workspace/gse-discovery/data_snapshot_20260913/` (MANIFEST.md). No unversioned
  live pulls for the full analysis. Until the snapshot lands: prereg + code +
  1-season sample test (2024) via nflreadpy, clearly labeled SAMPLE.
- **Era splits (mandatory):** train ≤ 2010 / validate 2011–2017 / test 2018–2025.
- **Leakage:** all team-season info descriptors used to predict the test era are
  computed ONLY from train+validate eras (≤ 2017). Play-level duel features for
  test-era plays use descriptors frozen at ≤ 2017. No expanding-window peeking.
- **Seeds:** fixed, `SEED = 20260913`. Permutation counts fixed below.
- **Units of analysis:** play-level (N ≈ 1.2M) for the duel; team-season level
  (N: train ≈ 384, validate ≈ 224, test ≈ 256 team-seasons) for correlations.

---

## 3. Operational definitions (locked before seeing data)

**Play-call alphabet (primary, coarse):** {RUSH, PASS} from `play_type`
(`run` → RUSH; `pass` → PASS; exclude punts/kicks/spikes/kneels/no-plays).
**Fine alphabet (secondary):** {RUSH, PASS_SHORT (air_yards < 10),
PASS_DEEP (air_yards ≥ 10), SCRAMBLE} — reported, not primary.

**Situation cell S (for conditional entropy):** down ∈ {1,2,3,4} ×
ydstogo-bucket ∈ {[1–3],[4–7],[8–10],[11+]} × score-diff-bucket ∈
{[−∞,−9],[−8,−1],[0],[1,8],[9,∞]}. 4×4×5 = 80 cells.

**Entropy estimators:**
- **Primary:** Lempel–Ziv (Kontoyiannis) entropy-rate estimator on the coarse
  sequence: Ĥ = (n · log n) / Σ_i Λ_i, where Λ_i is the longest-match length at
  position i (log base 2 → bits/play). Nonparametric, no order assumption.
- **Secondary:** plug-in conditional entropy H(X_t | X_{t-1}) (order-1) and
  H(X_t | X_{t-1}, S_t) (order-1 + situation) in bits. Also reported: order-2.
- Minimum team-season length: 800 qualifying plays, else dropped (documented).

**Efficiency:** offensive EPA/play (nflverse `epa`, posteam offense), all downs.

**Transfer entropy:** X = coarse play-call, Y = defensive channel
(preference order: `defense_personnel` collapsed to front-count categories if
present; else `defenders_in_the_box` binned {≤6, 7, ≥8}). History length k=l=1.
Estimated via plug-in conditional entropies on the joint (X_t, X_{t-1}, Y_{t-1}).
Permutation null: 200 within-team-season shuffles of the Y channel.

**Mutual information:** X = offensive personnel grouping (nflverse
`offense_personnel` string, top-8 categories + OTHER; requires coverage —
preregistered fallback: if `offense_personnel` is unavailable before 2015,
T1c runs on available years with a documented modified split:
train 2015–2018 / validate 2019–2021 / test 2022–2025). Y = EPA discretized into
tertiles (computed on train). MI via plug-in with Miller–Madow bias correction.
Bootstrap: 500 resamples per grouping for 95% CI. Permutation null: 200
label-shuffles.

**Dumb baseline (the duel):** per-play EPA predicted from down, ydstogo,
yardline_100 ONLY — OLS with quadratic terms in ydstogo and yardline_100,
fit on train era, evaluated on test-era plays. Metric: test MAE (primary),
test RMSE (secondary). **Challenger:** same OLS + team-season info descriptors
(entropy rate, TE) frozen at ≤2017. Paired comparison on test plays
(Di
...[truncated 4679 chars]