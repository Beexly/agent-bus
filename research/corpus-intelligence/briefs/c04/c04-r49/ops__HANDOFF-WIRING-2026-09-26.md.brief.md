# docs/ops/HANDOFF-WIRING-2026-09-26.md
## What it is (1-2 sentences)
A handoff document from a 2026-09-26 wiring session instructing the next agent to wire every un-bridged computation module in the prediction engine into live ingestion-pipeline bridges, with verified-green CI state, a list of orphaned exports by family, red-line build rules, and ownership boundaries with a parallel agent session.
## Key metrics/methods (formulas where given, else "not specified")
- Coverage gate `packages/prediction-engine/src/engine/coverage.test.ts` must hold 10/10; inventory `inventory.json` = 14,448 entries, all `wired: true` via `composition.ts` → `universal-adapter.ts` → `createEntryAdapter`.
- Bridge pattern: fail-closed eval `{ok:true;data} | {ok:false;reason}` with validation up front, try/catch, fail reason "not imputed".
- Test pattern: 25-test style — fail-closes on missing input + computes on real data; deterministic RNG via counter/LCG for `rand: () => number` signatures.
- Calibration-blend methods named (signatures only, no formulas): `applyBeta(model: BetaModel, p)`, `monotoneEnvelope(map, gridSize=2001)`, `tailBlendMap(iso, beta, opts)`, `fitOofCalibration(oofSamples, opts?)`; `diffusionWinProb(lead, timeRemainingMin, driftPerMin, diffusivity)`; `shinFairForSide(book: TwoWayBook, homeIsChosen)`; weather air-density/fahrenheit-kelvin/fg-kick-distance and ball-physics functions.
## Data sources named
- Monorepo packages: `packages/prediction-engine`, `packages/ingestion-pipeline`, `packages/data-ingestion`, `apps/web` (Vercel project `pick-pilot-s-projects/sports-web`).
- Production: https://galaxysportsedge.com. GitHub `Beexly/Sports` repo, branch `main` @ `d4280364e`.
- Founder-gated env flags: `PROPLINE_INTAKE_ENABLED`, `WEATHER_VINTAGE_ENABLED`, `SLEEPER_INTAKE_ENABLED`, `CFBFASTR_INTAKE_ENABLED`, `FEATURE_RECIPE_BACKTEST_ENABLED`.
## Findings (numbers and facts, not vibes)
- At handoff, suites were verified green: prediction-engine 6072/6072 (839 files), ingestion-pipeline 852/852 (76 files, 6 skipped), data-ingestion 2391/2391 (475 files); typecheck and lint clean; tree clean 0/0 vs origin.
- Commits landed: `d4280364e` (symreg/conformal/promotion/kernel/certificate residue bridge, 25 tests), `999db2b3d`, `aca60a620`, `4d0e32924`, `6fa3909b9` (pure-JS SHA-256 window-hash replacing `node:crypto`), `e75ac2fd9`; parallel session landed `b73520085` (NGS measurement + ladder/boost scanners), `660299b8f`, `fd73e0ce8`.
- Orphan audit (post-handoff): edge-lab 44 files / 256 unpulled exports; invention 15 files / 143; experimental 23 files / 95; props-dfs 14 / 45; weather 9 / 49; nfl 8 / 49; tracking 7 / 36; dfs 6 / 32; inplay 2 / 8; honesty 1 / 1.
- Red lines recorded: `node:crypto` in package barrel breaks Next.js client build; duplicate barrel exports caused ~50 failed deploys; PowerShell UTF-8/`\n` write corruption; push conflicts with parallel session require fetch+rebase.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Engine-wiring coverage inventory and fail-closed bridge patterns are infrastructure intelligence: they define how computation modules (weather physics, calibration blending, devig, inplay win-prob) must be callable through live adapters before contributing to predictions.
- (OTHER) `nfl` family orphan list names `block-poisson`, `generalized-poisson`, `luck-neutralized-epa`, `parsimonious-season` as unwired scoring modules — SCHEME-adjacent engine inputs, not coaching observations.
- (TRUST-SIGNAL) Calibration-blend (`tailBlendMap`, `fitOofCalibration`) and devig comparison are honesty/ calibration tooling relevant to whether engine confidence can be trusted.
## Engine-actionable? (yes/no + one-line what)
Yes — exposes the exact orphaned module inventory and bridge pattern the engine needs (physical-context bridge for weather physics + calibration blend) and names unwired NFL scoring/DFS modules as the wiring queue.
