# PHASE-6 PROTOCOL BRIEF — PROJECT MOVE-37
## From: execution lab (Motif) via Garrett | To: DeepSeek (theorist) | 2026-09-13

You have NO code execution. Everything you send is a PROTOCOL until the lab
runs it on real data. This rule has now been earned five times over — nothing
below is negotiable.

## 1. Program context

PROJECT MOVE-37's objective is unchanged: machines discovering mathematical
structures humans missed. White space: no widely-used sports metric was
machine-discovered. The play is the METHOD, not any single equation.

Garrett has escalated the lane: deeper theories, more testing, more data, push
harder, be smarter. This brief is your work order inside that escalation.

Lab-side status (for context, not your assignment): the lab is executing
T1 (information-theoretic), T2-RD (regression discontinuity), T4 (tail models),
T5 (survival analysis of drives), T6 (hierarchical partial pooling), T8
(symbolic regression done properly), and T10 (conformal WP) against a frozen
1999–2025 data snapshot with era-split validation. The IRL repair loop
continues separately. Do NOT duplicate these families — your lane is T3, T7,
T9 below, plus the white-space call in §5.

## 2. What rounds 1–5 taught us (your design constraints)

Every claim so far died on contact with real data. Design your protocols so
these failure modes are impossible, not merely unlikely:

1. **Overfitting heavy tails** — GLI-0.1 claimed R² 0.112/0.079; lab rerun got
   0.0037. gplearn memorized tail noise. Your protocols must include
   stability/regularization arguments, not just fit statistics.
2. **Flat identification surfaces** — IRL returned NLL 0.00009 nats from
   uniform with the "MLE" on the grid corner. If your estimator cannot move
   off a flat surface, say how the protocol DETECTS that (flat-surface
   diagnostic) rather than reporting a corner as an estimate.
3. **Orientation/sign bugs** — the IRL repair scored the OPPONENT's win
   probability in 4 of 5 branches. State every estimand's orientation
   explicitly (whose probability, whose utility, whose perspective).
4. **Triviality** — Phase-4 residual target was beaten by plain OLS on down.
   If a 3-line baseline beats your structure, the protocol must kill it.
5. **No signal where claimed** — Koopman/DMD momentum: p=0.89, AR(1) wins.
   Claim nothing without a null comparison.
6. **Broken repairs** — IRL REPAIR-01 was executed verbatim (531,234 plays)
   and returned a NULL the lab's audit rejected: orientation bugs survived
   the repair, the "MLE" was a grid corner, NLL 0.00009 nats from uniform.
   A repair that doesn't survive verbatim execution is not a repair. Design
   repairs you would bet your reputation on surviving ours.

The bar, stated once: a discovery must (a) beat a dumb baseline out-of-sample,
(b) survive era-split validation, (c) survive permutation/placebo,
(d) be interpretable enough to state in one paragraph. Anything failing (a)
is dead on arrival, no matter how beautiful the math.

## 3. Data and validation regime your protocols must assume

- Data: nflverse play-by-play 1999–2025 (~1.2M plays), betting lines
  (spread/total), rosters, schedules. Frozen snapshot, versioned, seeded.
- **Era splits (mandatory for every claim):** train ≤2010 / validate
  2011–2017 / test 2018–2025. A structure that works in one era is a regime
  artifact, not a discovery. Your protocols must specify era-stability checks.
- Every protocol needs: permutation/placebo spec, multiple-comparison
  treatment (Benjamini-Hochberg across the family battery), a dumb-baseline
  duel on the SAME test set, and a market duel (closing line) where the
  claim is predictive.

## 4. Protocol requests

### T3 — Regime-switching team states (Hidden Markov Models)

Design the protocol: HMMs on team-seasons for latent "form" states with
distinct EPA distributions and transition dynamics. Specify: the observation
model (play-level? game-level? drive-level EPA?), the state-cardinality
selection procedure (BIC — state its exact form for your observation model),
the persistence question (do states persist across seasons = program-level,
or reset = roster-level — this needs an explicit test, not a narrative),
and the duel: vs Elo-only and vs rolling-EPA on next-game prediction,
era-split. Kill criteria must include a named outcome for "BIC selects 1
state" (that is a finding, not a failure to report).

### T7 — Topological structure (persistent homology) — high-risk, kill fast

Design the protocol: persistent homology on drive trajectories in
(yardline, down, score-differential) space. Specify: the filtration, the
summary statistic (persistence diagrams → vectorization — landscapes? images?
which one and why), and the ONE clean out-of-sample test: do topological
features separate good/bad offenses where EPA-based features do not?
State the kill criterion up front: if persistence features do not separate
out-of-sample in the pre-registered test, the family dies — no rescue rounds.
This is exactly the kind of structure humans would never hand-design, which
is why it is worth one clean shot and not two.

### T9 — Heterogeneous treatment effects (causal forests)

Design the protocol: WHERE does aggressiveness (go-for-it on 4th down) pay?
Treatment effect as a function of (yardline, score, time, team quality) via
causal forests. Specify: the treatment definition, the identification
argument (unconfoundedness given WHAT conditioning set — and where that
argument is weakest), the honesty/orthogonalization procedure, and the duel:
vs homogeneous go/kick/punt recommendations (the "4th down bot" averages).
Heterogeneity is the undiscovered structure; averages are the baseline to
beat. Include a calibration check for the CATE estimates (not just
heterogeneity existence).

## 5. White-space call (your comparative advantage)

Propose 2–4 ADDITIONAL theory families we have not listed (lab runs T1, T2,
T4, T5, T6, T8, T10; you own T3, T7, T9). Rules for proposals:

- Must be structures humans would not hand-design (that is the white space).
- Must be executable by the lab in numpy/pandas/scipy on ~1.2M plays on a
  modest box (2 CPUs, ~3GB RAM) — no GPU clusters, no exotic solvers.
  If it needs a package, name it and confirm it pip-installs cleanly.
- Must not be a relabeling of an existing public metric.
- Rank your proposals by expected information value, with the ranking
  criterion stated.
- Mark ONE proposal you would bet survives the dumb-baseline duel, and say
  why in two sentences. If you wouldn't bet on any of them, say that instead
  — it's information.

## 6. Required anatomy of EVERY protocol you return

Protocols missing ANY of these go back unread. No exceptions.

1. **Exact estimand** — the mathematical object being estimated, with
   orientation stated (whose probability/utility/perspective).
2. **Identification argument** — why the data can pin this down; where the
   argument is weakest, stated plainly.
3. **Boundary finite-sample behavior** — what happens at parameter/grid
   boundaries, in small samples (early seasons, rare states), and under
   model misspecification. Include the flat-surface diagnostic: how the lab
   will know the estimator learned nothing.
4. **Dumb-baseline duel spec** — the named baseline(s), the shared test set,
   the metric, the margin that counts as a win.
5. **Kill criteria** — quantitative, falsifiable, pre-registered. Include
   what a NULL result means (it is a finding, not a failure — the lab
   publishes honest NULLs).
6. **Lab-executable spec** — data inputs (which nflverse tables/columns),
   algorithmic steps at pseudocode precision, compute budget estimate,
   random seeds to fix.

## 7. Process

- Return T3, T7, T9 protocols plus white-space proposals in ONE response.
- Do not re-send IRL material unless the repair changes it (that loop is
  separate and already has its send-back).
- Number every numeric claim in a self-audit table (§6-style, complete rows,
  no truncations): each number either sourced/derived in-text or marked
  UNSOURCED. The lab verifies the table before executing anything.

The lab's comparative advantage is execution and adversarial validation.
Yours is breadth of theory, formal derivation, and kill-criterion design.
Bring all three.
