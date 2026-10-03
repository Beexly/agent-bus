# docs/engine/research/2026-09-29/why-eight-signal-families-are-always-false.md
## What it is (1-2 sentences)
A 2026-09-29 forensic note explaining why 8 signal families (injury, milestone, officials, pace, player, ratings, venue_env, weather) register 0/3,493 on settled published picks — tracing the zero to hard-stamped `BLOCKED_MISSING_SOURCE` shadow evidence and missing source categories, not a broken writer.

## Key metrics/methods (formulas where given, else "not specified")
- Census: `scripts/ops/family-weight-evidence-census.ts`, read-only on Neon `gse-postgres` branch `main`, role `hermes_ro`. Population: 3,493 settled, non-bootstrap picks joined `pick_signal_snapshots` → `picks`.
- Eight families at exactly 0/3,493: `injury  milestone  officials  pace  player  ratings  venue_env  weather`.
- Registry `trustWeight`s on these families are "not unmeasured — there is nothing to measure; a weight on a signal that has never been observed is a decoration."
- Active signals confirmed reaching the slate: `kalshi`, `elo`, `poisson_dixon_coles`, `mlb_standings`, `nfl_epa_adj`, `CONTINUOUS_VALUE` family; `hadOddsSignal: true` is a hard literal ("odds are always the primary input").

## Data sources named
Neon `gse-postgres` branch `main` (read-only, `hermes_ro` role). No external sports data providers — the point is none are configured.

## Findings (numbers and facts, not vibes)
- Cause 1 (7 of 8): all eight `had*Signal` booleans in `packages/prediction-engine/src/signal-snapshot.ts` (~lines 180-189) derive from ONE set, `activeShadowCategories`, filtered on `activationStatus === "ACTIVE"`; the sole producer (`packages/ingestion-pipeline/src/process-sport.ts:1196`, via `buildMissingContextEvidence`) hard-stamps every record `BLOCKED_MISSING_SOURCE`, so the set is structurally always empty. Correct fail-closed behavior.
- `SHADOW_CONTEXT_CATEGORIES` (line 182) covers 7 categories: PLAYER_AVAILABILITY, OFFICIALS, VENUE_ENVIRONMENT, PACE, TEAM_RATES, STANDINGS, DIVISION_CONTEXT, MILESTONES.
- Cause 2: weather, injury, ratings are absent from `SHADOW_CONTEXT_CATEGORIES` entirely — no audit-trail row is even emitted; only hits for ACTIVE producers are test fixtures (`engine.test.ts`, `signal-adapters.test.ts`), never a production writer.
- Cause 3: `generate-signal-slate.ts` (the signal path) contains zero occurrences of `shadowEvidence` — only the book path (`process-sport.ts`) sets it; even with a source configured, signal-path picks would not record context (real path asymmetry).
- Ruling: "the fix is data licensing, not code"; restricted license = learn-from, not discard — each blocked category is a provider decision, not a dead end.
- Explicit prohibition: do NOT flip `BLOCKED_MISSING_SOURCE` to ACTIVE to make flags move — "a fabricated provenance record, and exactly what AGENTS.md law 8 forbids."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- PLAYER_AVAILABILITY/injury signal family absent from all 3,493 settled picks — QB-BEHAVIOR (availability context unusable until a licensed provider is named).
- PACE, OFFICIALS, VENUE_ENVIRONMENT, weather families never observed — SCHEME (pace), OTHER (officials/venue/weather).
- The fail-closed doctrine (signals with no licensed source must not move a published number) — OTHER (engine governance).
- INFERENCE: this file confirms the T4 player-signals table is genuinely EMPTY and the engine's confidence currently moves on odds + kalshi/elo/poisson/epa only — no coaching, weather, or injury context is priced in today.

## Engine-actionable? (yes/no + one-line what)
Yes — each blocked family needs a named licensed provider (or a learn-from intake path) before any trust weight can be measured; prioritize player-availability/injury and weather first.
