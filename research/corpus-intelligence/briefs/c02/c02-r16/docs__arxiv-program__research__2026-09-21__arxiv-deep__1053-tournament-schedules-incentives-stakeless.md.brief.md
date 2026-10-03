# docs/arxiv-program/research/2026-09-21/arxiv-deep/1053-tournament-schedules-incentives-stakeless.md

## What it is (1-2 sentences)
Ledger deep-read of Csató, Molontay & Pintér (arXiv:2204.08276v8) — quantifies how the order of fixtures (which of 12 possible schedules) in a four-team double round-robin changes how many late group games are stakeless dead rubbers, via five Poisson goal models fit to 1,632 Champions League matches and one million Monte Carlo tournaments per schedule. Verdict in file: ADAPT — schedule-conditioned incentive probabilities are computable ex ante and belong as features in every group-stage/round-robin model.

## Key metrics/methods (formulas where given, else "not specified")
- Five Poisson goal-model variants (independent, bivariate, team-strength parametrizations) fit to 1,632 UCL matches.
- 12 distinct double round-robin schedules enumerated for 4 teams × 6 matchdays; one million Monte Carlo tournaments simulated per schedule.
- Operative definitions (verbatim): *weakly stakeless* — at least one team's final rank cannot change regardless of result; *strongly stakeless* — neither team's rank can change.
- No closed-form equations; simulation-based. Simulations are ex-ante (pre-tournament strengths only — no result leakage). Sanity check: stakeless probabilities must be exactly 0 before Matchday 4.

## Data sources named
- 1,632 UEFA Champions League matches (model fitting). Simulated: 12 schedules × 1,000,000 tournaments. No code/data stated in the paper.

## Findings (numbers and facts, not vibes)
- Best vs worst schedule: weakly-stakeless probability reduced by 35% on Matchday 5 and 28% on Matchday 6; strongly-stakeless probability reduced by 32%. [COACHING/SCHEME: fixture order materially changes how many games feature rotated/motivationally-compromised teams]
- Full-text read: 30 pages, 1,577 lines via pdftotext; read in full (abstract, 12-schedule enumeration, five Poisson variants, 1M simulations/schedule, results, policy recommendations, appendices).
- Numeric gate in file: ADAPT iff weakly/strongly stakeless games show a statistically significant shift in goal/point distributions or favorite cover rates vs matched non-stakeless games in GSE's historical group-stage data; if dead rubbers are indistinguishable from live games, the feature adds nothing.
- Limitations: four-team double round-robin only — larger groups and the new Swiss-style UCL format need re-derivation; Poisson goal models are simple with no team-specific motivation parameters; stakeless is binary (ignores partial incentives like seeding within qualification).
- Improvement experiment: extend to 36-team Swiss-style UCL and World Cup groups; replace binary stakeless with a continuous "incentive gradient" (expected prize-money/rank movement at stake); test whether markets already price stakelessness (compare closing lines in stakeless vs non-stakeless games).
- No overlap found in phase-one tracker, existing-research-map, or wave-one reports — novel coverage.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ex-ante stakeless probability as a model feature (`p_stakeless_weak`, `p_stakeless_strong`), interacted with team-news/rotation signals: COACHING — teams in stakeless games behave differently (rotation, effort); schedule position is a predictive feature.
- Effort-discount modeling: fit separate outcome models conditional on stakeless status; dead rubbers have different goal/point distributions: SCHEME — game-state/incentive features for group-stage markets (soccer tournaments, tennis round-robins, any group-stage market).
- Best-vs-worst schedule numbers (35%/28%/32%) as citable schedule-design evidence: OTHER — competition-integrity consulting/content angle.
- Incentive gradient (expected prize-money/rank movement at stake) as continuous replacement for binary stakeless: OTHER — feature-design improvement.
- Test whether closing lines already price stakelessness: TRUST-SIGNAL — do not assume the edge exists; the market may already absorb it.

## Engine-actionable? (yes/no + one-line what)
Yes — add `p_stakeless_weak` / `p_stakeless_strong` as pre-match features to every group-stage/round-robin match model (computed ex ante via the Poisson-simulation recipe with GSE's own team strengths), and fit effort-discounted outcome distributions conditional on stakeless status — low-medium implementation difficulty (straightforward Monte Carlo; the work is wiring it into the pre-match feature pipeline per competition format).
