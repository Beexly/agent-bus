# PHASE 6 — EXPANDED DISCOVERY PROGRAM
## PROJECT MOVE-37 | GSE machine-discovery lane | 2026-09-13 (escalation)

**Objective (unchanged):** machines discovering mathematical structures humans
missed. White space: no widely-used sports metric was machine-discovered.
The play is the METHOD.

**Escalation directive (Garrett, 2026-09-13):** much deeper theories, more
testing, more data, push harder, be smarter. This document is the program.

---

## 1. What rounds 1–5 taught us (the bar)

Every claim so far died on contact with real data. The failure modes are now
the design spec:

- **Overfitting heavy tails** (GLI-0.1: claimed R² 0.112/0.079, lab got 0.0037)
- **Flat identification surfaces** (IRL: NLL 0.00009 nats from uniform, grid-corner "MLE")
- **Orientation/sign bugs** (IRL: modeled coach maximized opponent WP)
- **Triviality** (Phase 4 residual: plain OLS on down beats symbolic regression)
- **No signal where claimed** (Koopman/DMD momentum: p=0.89, AR(1) wins)

**The bar, stated once:** a discovery must (a) beat a dumb baseline
out-of-sample, (b) survive era-split validation, (c) survive permutation/
placebo, (d) be interpretable enough to state in one paragraph. Anything that
fails (a) is dead on arrival — no matter how beautiful the math.

---

## 2. Data expansion

Current work used 2014–2024 (IRL) / 2020–2025 (SR). Expand to:

- **pbp 1999–2025** (full nflverse era): ~27 seasons, ~1.2M plays. Enables
  era-split validation across real regime changes (dead-ball → passing explosion
  → two-high era).
- **Betting lines** (`spread_line`, `total_line` in pbp): the market is the
  adversary. Any "discovery" must beat or add to the closing line.
- **Weather** (nflverse `weather` table): wind/temperature effects are
  under-modeled in public numbers.
- **Rosters + depth charts + injuries**: personnel-level features, not just
  team-level.
- **Officials/crews**: flag-rate heterogeneity (exploratory).
- **Data snapshot versioning**: freeze `gse-discovery/data_snapshot_YYYYMMDD/`
  per run. No silent nflverse updates mid-experiment.

**Era splits (mandatory for every claim):**
train ≤ 2010 → validate 2011–2017 → test 2018–2025. A structure that only
works in one era is a regime artifact, not a discovery.

---

## 3. Theory families (the deep bench)

Each family gets: a lab executable, a dumb-baseline duel, pre-registered kill
criteria. DeepSeek theorizes protocols; the lab executes. Families marked (L)
can start lab-side immediately; (T) need DeepSeek protocol design first.

### T1 — Information-theoretic structure (L)
- Entropy rate of play-type sequences by team (Lempel-Ziv / plug-in estimators):
  is unpredictability itself predictive of offensive efficiency?
- Transfer entropy: does defensive formation predict offensive play-call
  (and vice versa) beyond base rates? Directional information flow as a
  coaching-tendency metric.
- Mutual information between personnel groupings and EPA: which groupings
  carry the most bits about outcome?
- Duel: vs down/distance/yardline-only EPA model.

### T2 — Causal inference at thresholds (L/T)
- Regression discontinuity at the sticks (yards-to-go integer boundaries),
  at FG-range edges (~35-yard line), at the goal line: do outcomes jump
  discontinuously where incentives jump? Sharp RD = evidence of structural
  behavioral effects.
- Double machine learning: causal effect of play-action, motion, tempo on EPA
  with high-dimensional controls. Separates causation from play-caller selection.
- Duel: vs naive EPA deltas (which every broadcast cites and which are
  confounded).

### T3 — Regime-switching team states (T)
- Hidden Markov models on team-seasons: are there latent "form" states with
  distinct EPA distributions and transition dynamics? How many states does
  BIC select? Do states persist across seasons (program-level) or reset
  (roster-level)?
- Duel: vs Elo-only and vs rolling-EPA.

### T4 — Tail models (L)
- Extreme value theory on scoring runs / EPA tails: do blowouts and collapses
  follow GPD tails with team-specific shape parameters? Fat-tailed teams as a
  bettable property (totals markets assume thin tails).
- Duel: vs normal-assumption totals model.

### T5 — Survival analysis of drives (L)
- Cox / parametric survival models for drive "death" (punt/turnover/score)
  with time-varying covariates (field position, down, score, clock). Hazard
  functions as the primitive instead of EPA.
- Duel: vs EPA-per-drive rankings — do hazard-based team ratings disagree,
  and where they disagree, who predicts next-week outcomes better?

### T6 — Bayesian hierarchical partial pooling (L)
- Team-season strength with partial pooling across eras: shrinks noisy
  small-sample estimates (early season, backup QBs) properly instead of the
  ad-hoc shrinkage in public models.
- Duel: vs raw EPA and vs Elo on weeks 1–6 prediction (small-sample regime
  where pooling should dominate).

### T7 — Topological structure (T, high-risk)
- Persistent homology on drive trajectories in (yardline, down, score-diff)
  space: do winning teams' drives have distinct topological signatures
  (loops = sustained drives, components = three-and-outs)? Long shot, but
  this is exactly the kind of structure humans would never hand-design.
- Kill fast: if persistence diagrams don't separate good/bad offenses
  out-of-sample in one clean test, kill it.

### T8 — Symbolic regression, done properly (L)
- Islands + migration, parsimony-pressure sweeps, **stability selection**
  (which expressions recur across seeds/subsamples?), functional complexity
  caps. The round-1 SR failed; this is SR with the overfitting controls the
  first attempt lacked.
- Target: closed-form EPA/WP approximations simpler than nflfastR's black
  boxes, or genuinely new composites. Duel: vs OLS/Ridge on the same features.

### T9 — Heterogeneous treatment effects (T)
- Causal forests: WHERE does aggressiveness (go-for-it) pay? Treatment effect
  as a function of (yardline, score, time, team quality). The "4th down bot"
  gives averages; heterogeneity is the undiscovered structure.
- Duel: vs homogeneous go/kick/punt recommendations.

### T10 — Uncertainty quantification (L)
- Conformal prediction for WP: calibrated prediction intervals, not point
  estimates. Coverage guarantees under distribution shift (era-split).
  Honest uncertainty is itself an edge (sizing, live betting).
- Duel: vs nflverse WP point estimates on log-loss and calibration.

---

## 4. Testing discipline (deeper testing, non-negotiable)

1. **Pre-registration** with kill criteria before every run. No HARKing.
2. **Nested cross-validation** where tuning exists. The IRL grid-corner fiasco
   never repeats: unbounded/log-spaced optimizers, flat-surface diagnostics
   (report NLL − ln(K), not just NLL).
3. **Era-split validation** (§2): train ≤2010 / validate 2011–2017 / test
   2018–2025. Mandatory.
4. **Permutation + placebo tests**: shuffle the target, re-run; run the
   pipeline on synthetic null data. If the "discovery" appears under the null,
   the pipeline is broken, not the world interesting.
5. **Multiple-comparison correction**: Benjamini-Hochberg across the family
   battery. Ten families at α=0.05 without correction is a false-discovery
   machine.
6. **Dumb-baseline duel (mandatory)**: every family must beat OLS / Elo /
   rolling-means / always-punt-style heuristics on the SAME test set. Losing
   to a 3-line baseline = instant kill, no matter the theory.
7. **Market duel**: anything predictive must be tested against the closing
   line (spread/total). Beating public models but not the market = interesting,
   not an edge. Report both.
8. **Reproducibility**: fixed seeds, frozen data snapshots, every run logs
   code hash + data snapshot + full output. A result that can't be re-run
   didn't happen.

---

## 5. Compute plan (push harder)

- SR: 10× generations, 8 islands, 5 seeds minimum, parsimony sweep. Overnight
  runs are fine — the lab doesn't sleep.
- Optimization: coordinate ascent on log grids / expand-then-refine with
  boundary EXPANSION. Never re-center on a corner again.
- Parallel family execution via subagent coordinators; one family per worker,
  shared data snapshot, results to `gse-discovery/phase6/<family>/`.
- Budget: this is the flagship intellectual lane. Compute is cheap; false
  discoveries are expensive. Spend the compute.

---

## 6. DeepSeek's role (be smarter about the theorist)

- DeepSeek has NO code execution. Everything they send is a PROTOCOL until the
  lab runs it. This rule has now been earned five times over.
- Their comparative advantage: breadth of theory, formal derivations,
  kill-criterion design. Give them the expanded brief (Phase-6 prompt) and
  let them propose T3/T7/T9 protocols plus anything in the white space we
  haven't listed.
- Every DeepSeek protocol must include: exact estimand, identification
  argument, finite-sample behavior at boundaries, dumb-baseline duel spec,
  kill criteria. Protocols missing any of these go back unread.
- The lab's comparative advantage: execution, adversarial validation,
  failure-mode forensics (the audit that killed two IRL rounds is the template).

---

## 7. What counts as a discovery

1. Out-of-sample edge vs BOTH the dumb baseline AND the closing line (or a
   public model where no line exists), stable across era splits.
2. Survives permutation/placebo and BH correction.
3. Stated in one paragraph a sharp analyst would understand.
4. Reproducible from the frozen snapshot by a third party.

Until then, everything is "under test." The honest NULLs stay published in
the repo — null results are the moat. Nobody else does adversarial sports
science in public.

---

## 8. Immediate execution (this week)

- [ ] Data snapshot: pull 1999–2025 pbp + lines + weather + rosters → frozen
- [ ] Harness: era-split CV + permutation + BH + duel-report template (shared)
- [ ] L-families start lab-side: T1, T2-RD, T4, T5, T6, T8, T10
- [ ] Phase-6 prompt → DeepSeek (T3/T7/T9 protocols + white-space proposals)
- [ ] IRL repair loop continues in parallel (send-back 02 already with Garrett)
- [ ] Weekly: kill/promote review. Dead families get a one-line obituary in
      the repo; survivors get deeper runs.
