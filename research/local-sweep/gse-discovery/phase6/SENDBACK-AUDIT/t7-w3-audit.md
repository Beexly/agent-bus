# Adversarial Audit: T7 (persistent homology) and W3 (Fisher-Rao) Phase-6 protocols

**Auditor role:** adversarial, false-discovery hunting. Not a style review.
**Date:** 2026-09-13
**Protocols audited:**
- DeepSeek deliverable `deepseek-move37-phase6-response-01.md` §2 (T7), §4/W3 (W3)
- Lab pre-registrations: `phase6/t7-topology/PREREG.md`, `phase6/w3-fisherrao/PREREG.md`
- Program rules: `PHASE6_EXPANDED_PROGRAM.md` §4 (testing discipline), §7 (what counts as a discovery)

**Verdict summary:**

| Family | Verdict | One-line reason |
|---|---|---|
| T7 — persistent homology of play clouds | **REPAIR FIRST** | Core duel (incremental R², honest era splits, nested CV) is sound and mechanically executable, but the permutation null is a FATAL design defect as written — it tests nothing — and must be replaced before any compute. Three cheap repairs (train-only standardization, train-only imager fit, relocation mapping) are also required. |
| W3 — Fisher-Rao division clustering | **KILL WITHOUT COMPUTE** (as a discovery family) | Descriptive correlation with a mechanically near-guaranteed result, no predictive or decision-relevant estimand, no §4.6 dumb-baseline duel, and it cannot satisfy program §7 by construction. Keep `d_FR` as a descriptive side-statistic only. |

---

## PART 1 — T7: TOPOLOGICAL STRUCTURE (PERSISTENT HOMOLOGY)

### Defect T7-1 — FATAL: The permutation null is vacuous (order-shuffling invariance)

**What the protocol says.** DeepSeek §2.5 / §2.8 and PREREG §4 criterion 4: "topo features from play-order-shuffled-within-team-season clouds yield an R² increment within ±0.01 of the true increment → topological structure is spurious → family dies."

**Why it tests nothing.** The object is a point cloud `X_{i,t}` — a *set* of plays. Persistent homology of a point cloud is invariant to the ordering of the points, by definition. Shuffling play order within a team-season changes the cloud not at all. Two possible implementations, both broken:

- (a) Same subsample seeds after shuffling: uniform subsampling of the same set with the same RNG state yields the same subsample (up to index remapping). The "permuted" PI is the *identical* PI, the increment difference is exactly 0, and the kill criterion (difference ≤ 0.01 → die) fires **always**. The family is dead by tautology — killed for no reason, or, read as a "null," a null that is a point mass at the observed value.
- (b) Fresh subsample seeds after shuffling: the difference between "permuted" and true increments is pure subsampling noise. With 400 PI features and a ~224-row test set, resampling noise in an R² increment can easily exceed ±0.01. The check then measures RNG luck, not topology.

Either way it is a rubber stamp, not a null. A null must be capable of breaking the hypothesized signal. This one cannot, in either implementation.

**Program violation.** PHASE6_EXPANDED_PROGRAM.md §4.4 already prescribes the correct form: "**shuffle the target**, re-run; run the pipeline on synthetic null data." T7's protocol shuffles the *input order* instead of the target — the exact failure mode the program rule was written to prevent.

**Demanded repair (blocks all compute):** replace with two nulls, both pre-registered with kill thresholds:

- **Null A (link null):** permute team-season labels on the PI feature vectors (equivalently, permute `EPA_{t+1}` across team-seasons within era), refit the full ridge pipeline, record the increment distribution over ≥200 permutations. Kill if the observed increment does not exceed the 95th percentile of Null A by ≥ 0.01.
- **Null B (topology-beyond-moments null):** for each team-season, fit a multivariate Gaussian to its standardized cloud, sample n=300 null points, and run the *entire* pipeline (Rips → PI → ridge) on the null clouds. This is the sharp test of the actual scientific claim — "shape, not moments." Kill if the true increment is within ±0.01 of the Null B mean increment.

Both must be passed. Seeds fixed and logged. Until this replacement is in the PREREG as a dated addendum, T7 does not run.

### Defect T7-2 — MATERIAL: Trajectory language vs. season-collapsed clouds

**What the protocol says.** PREREG §7 (the one-paragraph record statement): "the loops and voids of sustained drives versus scattered desperation plays." The Phase-6 brief advertises "drive trajectories."

**What it computes.** One persistence diagram per team-season over ~1,000 plays collapsed into a single cloud in `(yardline_100, down, score_differential)` space. All within-drive ordering, all game order, all in-game evolution is destroyed before the first Rips call. An H1 loop in this object is a hole in the season-long joint distribution of (field position, down, score) — it cannot mean "a sustained drive," because the object contains no drives. A team that runs 60 identical scripted drives and a team that runs 60 chaotic ones can have similar clouds; a team with one 99-yard drive and 999 three-and-outs can have "loops" that mean nothing about sustained offense.

**Demanded repair:** either (i) test drives-as-curves — build the cloud or filtration at the drive level with plays ordered within drive (e.g., a time-ordered filtration, or per-drive clouds with a drive-level target), or (ii) strike all trajectory/drive language from the PREREG and the record statement and reframe the estimand honestly as "season cloud shape." Interpretation laundering is how a null result gets published as a suggestive finding. Kill criterion if unrepaired: none needed — this is a reporting constraint, but the audit flags any REPORT.md containing "drive" language about season-cloud H1 features as a failed review.

### Defect T7-3 — MINOR (but free): Pooled standardization and imager-fit leak test-era information

**What the protocol says.** PREREG §2: "Standardization statistics computed once across all seasons (train+val+test pooled for the geometry; they are geometric constants, not tuned)."

**Why "geometric constants" is not a defense.** The standardization scale sets the Rips metric; the Rips metric sets the diagram; the diagram sets the PI features. Test-era plays contribute to the pooled mean/variance, so test information enters feature construction. Separately, `persim.PersistenceImager` computes its pixel grid (`birth_range`, `pers_range`) from the diagrams it is fit on — if fit on pooled team-seasons, the grid edges depend on test-era diagrams. The magnitudes are small (8 of 27 seasons; grid edges shift slightly), but the program's adversarial posture is "no test peeking," and the fix costs one line each.

**Demanded repair (blocks all compute):** compute standardization mean/variance from train-era (≤2010) plays only; fit the PersistenceImager on train-era diagrams only; freeze both and apply to val/test. Log the frozen constants' hash in RUNLOG. If the lab wants to argue the pooled version is harmless, it may run both and report the delta — but the pre-registered primary must be the train-only version.

### Defect T7-4 — MINOR: No team-continuity mapping for the t→t+1 target

**What the protocol says.** PREREG §1: test observations are team-seasons t ∈ 2018..2024 "that have a following-season outcome."

**The gap.** Relocations change abbreviations: OAK→LV happened in 2020, inside the test era. The t=2019 OAK observation's target is LV 2020; a naive `(team, t+1)` join on abbreviation silently drops it (and any future relocation). W3's PREREG handled this explicitly (SD→LAC, OAK→LV, STL→LA normalization); T7's does not. Survivor structure is small here (one team-season), but silent drops in the target join are exactly the kind of thing that compounds.

**Demanded repair:** add the explicit franchise-continuity mapping (STL→LA, SD→LAC, OAK→LV) to the target join and assert in code that every t ≤ 2024 team-season has exactly one t+1 target. Log the row count before/after.

### Defect T7-5 — MINOR: Aggregation is honest, but state the power reality

**Checked and cleared (with a note).** The adversarial question was whether ridge tuning leaks: PREREG §3 specifies "ridge regression with cross-validated alpha (fit on train; alpha selection by inner CV on train only)" — that is genuine nested CV, and the test era is untouched by fitting. The DeepSeek spec §2.6 agrees ("Use ridge regression with cross-validated alpha... Fit on train"). No leak found in the tuning path. Two residual notes: (a) 400 PI features on ~500 train rows with a ~224-row test set means the 0.02 increment threshold is a high bar — power, not bias, is the risk; a small true increment will read as NULL, which is the honest outcome, not a failure; (b) the features are 400 highly correlated pixels (sigma=0.1 smoothing) — ridge handles this, effective df is far below 400, no action needed beyond reporting the effective df or the CV-chosen alpha.

### Defect T7-6 — MINOR: The CV gate has low power as an informativeness screen

**What the protocol says.** PREREG §4 criterion 1 (runs FIRST): cross-team-season CV of PI L2 norm < 0.05 → kill.

**The limitation.** The L2 norm of a persistence-weighted PI measures total persistence *magnitude*, not diagram *shape*. Two team-seasons can have wildly different H1 structure with near-identical norms (same total persistence, different birth/death layout). The gate catches total degeneracy (all clouds identical) but passing it says almost nothing about whether the signatures carry team-differentiating information. That is acceptable for a kill-fast gate — it is a screen, not evidence — but the REPORT must not present "passed the CV gate" as positive evidence of informativeness.

**Demanded repair:** report a shape-level dispersion statistic alongside the gate (e.g., mean pairwise L2 distance between team-season PIs relative to within-team-season subsample noise). No kill threshold attached; it is a diagnostic against over-reading the gate.

### Defect T7-7 — MINOR: Discrete-`down` layering artifact

The cloud's second coordinate takes exactly 4 values. After global standardization, every team's cloud is 4 parallel layers with *identical* inter-layer spacing (the spacing is a pooled constant). Cross-team H1 variation therefore comes from within-layer density, not from the layering — so this cannot manufacture a false *differential* signal. It is a design smell, not a bias source. **Demanded:** one robustness line in the REPORT — recompute with `down` jittered (uniform ±0.25 pre-standardization) and report the increment delta; if |delta| > 0.01, flag as discretization-sensitive. Cheap; do it.

### T7 — Estimand-drift and prior assessment (as interrogated)

- **Drift:** partial. The brief's kill-fast framing ("do diagrams separate good/bad offenses out-of-sample") survives only as the weak CV gate (T7-6); the operative estimand is incremental R² over baseline 2. This is a defensible operationalization, not a bait-and-switch — but the REPORT must keep the two claims separate: the gate is not evidence of separation.
- **Foregone null?** The duel (baseline 2 = EPA + pace + pass_rate) is the *correct* adversarial test, not a rigged one: PI is a nonlinear recoding of the same cloud moments that generate those three features, so the incremental test asks precisely "does topology add beyond the moments." The realistic prior is ~85–90% NULL — the honest value of T7 is likely a well-executed negative. If the increment is positive, the mandatory follow-up is an interpretability check (which moments/interactions the PI is proxying — e.g., joint down×score×field structure the linear baseline misses), not a promotion.
- **Market duel:** PREREG honestly marks it N/A at season granularity. Acceptable for the test phase; if T7 ever survives to promotion, a game-level translation with a real spread duel becomes mandatory per §7.

### T7 — Duel assessment

The dumb-baseline duel is well-formed: same test observations for all three models, nested-CV ridge, era-split evaluation, pre-registered 0.02 margin. The duel's *null* (the permutation check) is what is broken — see T7-1. Fix the null and the duel is program-compliant.

### T7 — Final verdict: REPAIR FIRST

**Exact repairs required before compute** (all cheap; none require re-theorizing):
1. Replace the permutation null with Null A (label/target permutation, ≥200 reps, kill if observed increment < 95th pct + 0.01) and Null B (per-team-season Gaussian null clouds through the full pipeline, kill if |true − null| ≤ 0.01). Dated PREREG addendum. — blocks run
2. Train-era-only standardization constants and train-era-only PersistenceImager fit; log hashes. — blocks run
3. Franchise-continuity mapping (STL→LA, SD→LAC, OAK→LV) in the t→t+1 target join with a row-count assertion. — blocks run
4. Strike "sustained drives"/"trajectory" language from the record statement, or implement a drive-level analysis. — blocks REPORT sign-off
5. Report shape-level PI dispersion alongside the CV gate; run the down-jitter robustness check. — reporting requirements

**Kill criteria (post-repair):** fail Null A or Null B → KILL, no rescue. Increment < 0.02 over baseline 2 on test → KILL (honest NULL). Sign flip across eras → KILL. CV gate < 0.05 → KILL before regression.

---

## PART 2 — W3: FISHER-RAO INFORMATION GEOMETRY OF PLAY-CALL DISTRIBUTIONS

### Defect W3-1 — FATAL (as a discovery family): No predictive or decision-relevant estimand; the "discovery" is mechanically near-guaranteed

**What the protocol tests.** Whether within-division team-season pairs have smaller Fisher-Rao geodesic distances between their 36-cell (down × distance × field-position) play-context distributions than cross-division pairs — Cohen's d ≥ 0.3 after residualizing on |ΔElo| + season FE.

**Why a positive result would be boring.** Division-mates play each other twice (6 of 17 games, ~35% of the schedule), share common opponents, and face correlated schedule difficulty. The 36-cell distribution is over *situations a team is in* — and divisional opponents literally create each other's situations head-to-head twice a year. A finding of "division-mates face similar situations" is a discovery of the NFL schedule, not a machine-discovered structure. There is no mechanism identified, no decision it informs, no prediction it improves. DeepSeek's own bet was "weakly," and the PREREG concedes the point outright: "Per program §7 it therefore cannot be an 'edge'; best achievable verdict is a real, surviving structure worth deeper predictive work."

**Program non-compliance.** §4.6: "Dumb-baseline duel (**mandatory**): every family must beat OLS / Elo / rolling-means / always-punt-style heuristics on the **SAME test set**." W3's "duel" is a permutation null — a significance test, not a duel against a baseline on the same test set. §7 (what counts as a discovery) requires "out-of-sample edge vs BOTH the dumb baseline AND the closing line (or a public model where no line exists), stable across era splits" plus permutation/placebo and BH. W3 cannot satisfy §7 *by construction* — it has no outcome to predict. A family whose ceiling is "interesting descriptive fact" does not belong in a discovery battery; it consumes BH budget (§4.5) and reviewer attention on a foregone conclusion.

**Verdict implication:** KILL WITHOUT COMPUTE as a discovery family. The `d_FR` computation itself (closed-form Hellinger, ~2 minutes) is a fine *descriptive side-statistic* — e.g., as a covariate in T7/W2 or a schedule-similarity control — but the division-clustering hypothesis leaves the battery. If anyone wants it back, the price of admission is a predictive reformulation (see W3-3).

### Defect W3-2 — MATERIAL: Game-script confounding is uncontrolled

**The confound.** The 36 cells are (down, distance-bin, field-position-bin) — the *contexts* a team's plays occur in. Score differential is not among them. Teams that trail a lot face more 3rd-and-long at bad field position; teams that lead face more clock-killing runs. Divisional games are systematically closer than cross-division games (familiarity, rivalry effort), so division-mates share *game scripts*, and game scripts mechanically shape the context distribution. The Elo residualization does not fix this: two equally good teams can have very different score-differential profiles (blowout team vs. close-game team), and |ΔElo| is a quality gap, not a script control.

**What would be demanded if it ran:** residualize on (or match on) score-differential distribution distance — e.g., compute each team-season's score-differential histogram over its plays and include its distance-to-opponent as a covariate, or stratify pairs by score-differential similarity. Kill criterion: if adding the game-script control moves d from ≥0.1 to <0.1, the "divisional similarity" was score-distribution similarity → KILL. This is not demanded now, because the family is killed at W3-1 — it is recorded so the descriptive version does not get cited later without the caveat.

### Defect W3-3 — MATERIAL: No kill criterion tied to anything decision-relevant; no path to §7

Per the task's interrogation: what kills W3 *as a discovery*? The PREREG's six kill criteria (d < 0.1, permutation p ≥ 0.05, sign flips, test-era d < 0.1, Elo-explains-it, smoothing fragility) are all *internal-validity* checks on a descriptive statistic. None connects to a prediction, a decision, or money. A family can pass all six and still be worthless to the program's stated goal (machine-discovered edges).

**The only repair that would change the verdict** is a predictive reformulation — a new estimand, not a patch — e.g.: does a team's `d_FR` to its division centroid in season t predict anything decision-relevant in t+1 (coaching-staff turnover alpha, EPA variance, win-total forecast error vs. market)? With a pre-registered predictive kill criterion (e.g., incremental R²/AUC over the §4.6 baselines on the test era). Absent that, W3 stays dead as a discovery family. The audit does not recommend spending theorist cycles on this reformulation: the base rate for "descriptive clustering becomes predictive edge" is low, and W1 already occupies the high-EV white-space slot.

### W3 — Notes on what is *not* defective

For the record: the closed-form math is correct (`2·arccos(Σ√(p_k q_k))` is the Fisher-Rao geodesic on the simplex); the 2002+ season restriction is the right call (2002 realignment); the relocation normalization is present (unlike T7); Lidstone smoothing with the α-robustness kill is honest; the within-season label permutation is a valid placebo for the descriptive claim. The protocol is well-built — for a question the program should not be asking.

### W3 — Duel assessment

There is no §4.6 duel. The permutation null tests "is the clustering real" — worth doing for a descriptive stat, irrelevant for discovery. Nothing to repair within the current estimand; the estimand itself is the problem.

### W3 — Final verdict: KILL WITHOUT COMPUTE (as a discovery family)

- Do not run the 11,900-pair division-clustering analysis as a discovery-family experiment. Do not spend BH budget on it. One-line obituary: *"W3 killed without compute: descriptive division-clustering of play-context distributions is mechanically expected (common opponents, shared game scripts) and has no predictive or decision-relevant estimand; cannot satisfy program §7."*
- `d_FR` survives as a descriptive side-statistic: any worker may compute it (~2 min, closed form) as a covariate or schedule-similarity control, with the game-script caveat (W3-2) attached to any citation.
- Re-admission requires a new protocol with a predictive, decision-relevant estimand and a §4.6 duel — i.e., a different family wearing W3's metric.

---

## Cross-family notes

1. **Program §4.4 already bans T7's mistake.** "Shuffle the target, re-run; run the pipeline on synthetic null data" — T7-1's Null A and Null B are exactly this rule, applied. Future DeepSeek protocols should be checked against §4.4 line-by-line before lab implementation; the lab's PREREG step caught the structure but not the vacuity.
2. **Asymmetry of standards.** T7 is held to REPAIR FIRST rather than KILL because its core duel is honest and its defects are fixable in hours. W3 is killed not because its math is wrong (it is right) but because its *question* cannot produce a discovery. Well-built protocols for uninteresting questions are the more expensive failure mode — they pass every internal check while consuming the battery's false-discovery budget.
3. **Interpretation laundering watch (T7-2).** The most likely failure mode for T7 post-repair is not statistical but rhetorical: a null or weak result described in trajectory/drive language. The REPORT review must grep for it.

---

## The 3 sharpest demands per family

**T7:**
1. The permutation null is vacuous — persistent homology cannot see point order, so shuffling play order either reproduces the identical increment (self-killing tautology) or pure subsampling noise. Replace it with a target/label permutation (Null A) and a per-team-season Gaussian null cloud through the full pipeline (Null B); fail either and the family dies.
2. Stop claiming "sustained drives" from season-collapsed clouds — an H1 loop in 1,000 unordered plays cannot mean a drive. Test drives-as-curves or strike the language.
3. No pooled test-era statistics anywhere in feature construction: standardize on train-era plays only, fit the PersistenceImager grid on train-era diagrams only, and add the franchise-continuity mapping (OAK→LV sits in the test era) to the t+1 target join.

**W3:**
1. Kill as a discovery family without compute: division-mates play each other twice and share opponents and game scripts, so "similar play-context distributions" is a near-mechanical fact about the schedule, not a machine discovery — and with no predictive estimand it cannot satisfy program §7 or the mandatory §4.6 duel.
2. Even descriptively, game script confounds it: the 36 cells measure situations faced, and trailing teams face different situations than leading ones — any future citation of divisional `d_FR` clustering must control for score-differential distribution distance.
3. DeepSeek bet "weakly" and the protocol admits it "cannot be an edge" — a family whose best case is "interesting structure worth deeper work" is a hypothesis generator, not a discovery; re-admission requires a new predictive estimand with a real duel, not a patch.
