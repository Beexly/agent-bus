# docs/design/2026-09-19-independent-fair-value-registry.md
## What it is (1-2 sentences)
A DESIGN-status design (founder decision required, not implemented) for restructuring `buildIndependentFairValues` (668 lines: nine "independent" fair-value models in one function) into a small-DAG signal registry, with a hard constraint of byte-identical output and no MODEL_VERSION bump. It identifies four load-bearing properties of the current code that a naive list-refactor would destroy.
## Key metrics/methods (formulas where given, else "not specified")
No formulas; branch inventory: prefetched, kalshi, fpi (ESPN Power Index, rights-gated), clubelo, dixon_coles/poisson (mutually exclusive), skellam_cover (downstream of branch 5's fitted lambdas), mlb_standings, elo, polymarket, nfl_epa. Registry row shape: `{ source, family, dependsOn?, requires: { network?, rights?, sports? }, excludedBy?, produce(ctx) }`. Proof obligation: differential harness old-vs-new asserting deep equality (including order and `capturedAt`) over a 6-case corpus (soccer fixture proving Dixon-Coles-only, hockey/baseball proving Poisson, spreadHome present/absent, prefetched-kalshi dedup, rights-gate-unset fail-closed, one-producer-throws isolation); any diff = STOP.
## Data sources named
Kalshi, ESPN Power Index (rights gate `isEspnPowerIndexCleared(env)`, founder-only), ClubElo, Polymarket, `nfl_epa`, MLB standings, database-backed branches 5 and 7.
## Findings (numbers and facts, not vibes)
- `skellam_cover` (5b) is NOT independent: gated on `matchupLambdas &&`, consumes branch 5's fitted rates; treating it as independent would count one rate model twice in the blend.
- Soccer emits Dixon-Coles ONLY (not Poisson): Dixon-Coles = same lambda as Poisson + low-score correction; emitting both would fake consensus. Hand-enforced anti-phantom-consensus rule today.
- Three distinct gate kinds collapsed in one `if`: network (`skipNetworkIndependents`), rights (licence, fail-closed), already-supplied (dedup by source) — flattening them risks an offline test satisfying a rights gate.
- Soft-fail is doctrine: throwing producers emit nothing; null opinion is honest; a registry runner must isolate per-row failures and never substitute defaults.
- AGENTS.md tension noted: blueprint capped ACTIVE signals at 17 across six families while the ask was for hundreds; honest shape is many DECLARED rows (most blocked behind named acquisition tasks) with a small orthogonal weighted set. 17 is a design number, not a measurement — empirical ceiling comes from the historical backtest corpus.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Family-clustered agreement / anti-phantom-consensus (count distinct signal families, never raw signal count) → OTHER (model-ensemble integrity)
- DEPENDS-ON DAG + soft-fail isolation → OTHER
- Rights-gate fail-closed, dedup by source → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the family-constraint + dependsOn-DAG registry shape (and the 6-case differential-harness corpus) whenever the fair-value ensemble is refactored, so consensus math can't double-count shared-rate models.
