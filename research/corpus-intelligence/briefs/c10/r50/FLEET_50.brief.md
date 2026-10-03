# ops/FLEET_50.md
## What it is (1-2 sentences)
Companion to FREE_WINDOW_BLITZ.md; answers how 50 agents on different free models produce one coherent engine instead of 50 divergent artifacts: align by a frozen contract (signatures, paths, types, tests, error semantics, units) before any worker spawns.
## Key metrics/methods (formulas where given, else "not specified")
Contract mandates proper scoring rules (CRPS, PIT) instead of hit rate; walk-forward evaluation with random K-fold made impossible at API level; compositional (Dirichlet) shares instead of independent per-player counts; explicit censoring and zero-inflation; one joint simulation all props are marginals of. Lane A kernel cards: CRPS discrete, CRPS empirical, PIT histogram+uniformity, log-loss, Brier+decomposition, calibration slope/intercept, BH-FDR, walk-forward splitter, block bootstrap CI, effective sample size/design effect, NB fit+sample, Beta-Binomial, ZIP/hurdle, Dirichlet-multinomial fit+sample, censored-count helper, lognormal-tail mixture.
## Data sources named
None (model roster names only: Ox Alpha-class, GLM-class free, Nemotron Ultra-class, North-mini-code-class, Gemma-class).
## Findings (numbers and facts, not vibes)
- 50-agent allocation: Lane A (math kernel) 12, Lane B (data dictionary) 18, Lane C (fixtures & tests) 10, Lane D (cross-verify) 8, Lane E (prose/render) 2. Sequencing: Lane A first — kernel is the hard dependency for edge:validate.
- Waves of 8-12 workers, one worktree per worker, waves complete/verify/merge before the next; "workers are mortal" — every card small, idempotent, restartable, committed on pass. Workers never explore the repo; the card carries the full spec.
- Quality rule: a wave where >half the cards fail verify is a CARD-DESIGN failure — fix the spec, not the workers. Verification is a command, never a model's opinion.
- Cross-model adversarial check (Phase 3): a DIFFERENT model family reviews each artifact against the contract (Lane D, decorrelated error).
- Crown/judgment work never enters the fleet at any scale: covariate-bus scaffold generator, clearance engine and source-rights registry, license classification decisions, edge promotion/retirement, merge decisions, mining grids, calibration and CLV results, EDGE_CATALOG.md survivors.
- Done-when: kernel, dictionary, fixtures, and conformance tests run with no free model in the loop, against the contract the engine actually uses.
- Selection: never let one provider own a lane (spread every lane across >=2 providers); free-model terms verified at spawn time (the "Ox Alpha doesn't train on prompts" claim was wrong).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Contract mandated proper scoring rules (CRPS, PIT, Dirichlet compositional shares, one joint simulation all props are marginals of) — OTHER (ops/architecture, not sports intelligence; no QB/coaching content).
## Engine-actionable? (yes/no + one-line what)
No — ops playbook for agent orchestration, no sports-intelligence content; the scoring-rule contract items it names (CRPS, PIT, Dirichlet shares) already exist as engine contract requirements elsewhere.
