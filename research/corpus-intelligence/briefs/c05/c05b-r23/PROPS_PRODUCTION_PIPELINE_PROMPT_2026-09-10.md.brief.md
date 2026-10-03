# docs/ops/PROPS_PRODUCTION_PIPELINE_PROMPT_2026-09-10.md
## What it is (1-2 sentences)
Copy-paste coding-agent build prompt (2026-09-10) that wires live player logs + live prop lines into the engine's NFL player-props production path. The math modules already exist, are tested, and were dry-run validated; Phase A (agent-run JSON flow) works with no keys, Phase B (game picks) needs THE_ODDS_API_KEY, Phase C gaps require founder sign-off.
## Key metrics/methods (formulas where given, else "not specified")
- Full chain: `fitGroupPrior(samples)` → `posteriorRate(prior, total, games)` → `probOver` / `probOverContinuous` → `firePostedProp(p, quote, books)` → JSON pick.
- Modules (pure functions, zero runtime deps beyond `@sports/types`): `edge-lab/props-hb.ts` (fitGroupPrior, posteriorRate, probOver, probOverContinuous); `edge-lab/props-priced-edge.ts` (`pricePropAgainstMarket()`, Shin de-vig, edge = p − q); `edge-lab/props-line-shop.ts` (`shopPostedPrices()`, juice-floor check per book); `edge-lab/props-fire-gate.ts` (`firePostedProp()` → { ok, fire, p, edge, bestBook, price }).
- Phase A script `scripts/props-slate.ts`: per-season nflverse player-week CSVs (NOT the legacy combined `player_stats.csv.gz` — it lags newest seasons); per-position-group priors (RB receptions, WR receiving yards, etc.); slate JSON `{ player, market, line, books: [{ book, american }] }`; output `{ player, market, line, p, edge, fire, bestBook, price }`. Deterministic; nflverse fetch cached locally with season + download date in output.
- Phase B: build `OddsInput` (`{ gameId, homeTeam, awayTeam, commenceTime, sport, bookmakerOdds[] }`) from The Odds API (or hand-verified lines); call `scoreGame()` from `packages/prediction-engine/src/scoring.ts`. Fail-closed: spread/total markets require complete two-sided quotes from ≥2 books or the engine returns null — correct, do not work around.
- Phase C (founder decisions): wire `edge-lab/features/nfl-body-clock.ts` into game-context behind trials registry; prop-line archive storing offered lines + results unlocks `priced: true`, CLV, fire-gate calibration; evaluate opponent-bind modules (`props-hb-air-yac-bind`, `adot-sep-bind`, …) for matchup adjustments.
- Validation: walk-forward 2022–24, monotone calibration, beats climatology on Brier. 2026-09-10 dry run: CMC over 4.5 receptions P=0.6706 FIRE-grade; Puka over 90.5 yards P=0.4676 rejected. Phase A acceptance: reproduce CMC→p≈0.671 FIRE, Puka→p≈0.468 no-fire within rounding.
- Done criteria: `npm run typecheck` exit 0, `npm run lint` exit 0, new tests green; one commit, UNPUSHED (per LAWS).
## Data sources named
- nflverse per-season player-week stats CSVs (free, no key): `https://github.com/nflverse/nflverse-data/releases/download/player_stats/stats_player_week_<season>.csv`
- The Odds API (needs THE_ODDS_API_KEY) for automated game odds + prop lines; hand-verified/manual slate JSON otherwise
- Postgres (`DATABASE_URL`) only if founder asks for persisted pipeline
## Findings (numbers and facts, not vibes)
- Explicitly DO NOT USE: `gse-ml-service` (only 1 of 5 models is a real predictor and it is uncalibrated — skip); `workers/pick-generation` (stub that exits immediately — real game-pick path is `workers/data-refresh` → `process-sport.ts` → `scoreGames()`); `pipeline/live-orchestrator.ts` (shadow-only).
- Agent must first read AGENTS.md laws, check `docs/ops/AGENT_LEDGER.md` for claimed/dispatched work, and get `ops/engine-integration-spike-2026-09-10.md` (module trace, dry-run numbers) from the autonomous-revenue-engine workspace.
- Phase A = only fully keyless phase; Phase B automation needs the key; Phase C needs sign-off, "do not start without sign-off."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Player-props Bayesian hierarchical pipeline spec, validated, production-wiring recipe — OTHER
- Fail-closed spread/total quoting rule (≥2 books, two-sided) as an engine invariant — TRUST-SIGNAL
- Opponent-bind modules (`props-hb-air-yac-bind`, `adot-sep-bind`) as candidate matchup adjustments — SCHEME
- nfl-body-clock (travel/acclimation) as a game-context input behind trials registry — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — build `scripts/props-slate.ts` per Phase A: nflverse per-season CSVs → fitGroupPrior → posteriorRate → probOver/Continuous → firePostedProp, with Shin de-vig edge = p − q and juice-floor line shopping, acceptance = reproduce CMC o4.5 p≈0.671 FIRE / Puka o90.5 p≈0.468 no-fire.
