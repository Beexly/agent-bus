# docs/ops/COORDINATION-SWARM-2026-09-26.md
## What it is (1-2 sentences)
A coordination broadcast for the 2026-09-26 wiring swarm: a multi-agent ownership protocol for wiring exported prediction-engine modules into the barrel via one bridge file per subagent, with hard collaboration rules, red lines, and a remaining-work inventory.

## Key metrics/methods (formulas where given, else "not specified")
- Coverage gate reports 100% (14448/14448 inventory entries wired), but the inventory counts a universal stub adapter as "wired" — the mission is REAL bridges that call the math.
- Verification block: `npm run typecheck`, `npm run lint`, vitest on the agent's test file, and `packages/prediction-engine` coverage test MUST be 10/10.
- Re-run audit method: scan each family directory for `export function|const|interface|type|class` names absent from `packages/prediction-engine/src/index.ts` and every `*bridge*.ts`.

## Data sources named
Git remote `origin`/`main` as authoritative repo state (`git ls-remote origin refs/heads/main`); commit hashes named: wiring session at `1fe995b9e`, residue `d4280364e`, dead pre-rebase hashes `1d0576590`, `a7b5e1267` (never wait on these).

## Findings (numbers and facts, not vibes)
- 6 dispatched background subagents with exact bridge files: `dfs-portfolio-bridge.ts` (dfs), `nfl-scoring-bridge.ts` (nfl), `edge-lab-honesty2-bridge.ts` (edge-lab), `invention-tracking-bridge.ts` (invention + tracking), `experimental-models-bridge.ts` (experimental), `props-metrics-bridge.ts` (props-dfs + metrics/core).
- Wiring session's own scope IN PROGRESS at T31: weather, honesty `shinFairForSide`, calibration-blend, inplay safe-lead.
- Unclaimed slices listed for a parallel session: weather (3 files), inplay (3 files), `sizing/*` (18 modules), `markets/*` (8), `odds/*` (2).
- Red lines: no `node:crypto` in the package barrel; no duplicate barrel exports; import aliasing is not renaming; PowerShell writes not reliably UTF-8 (write Python helpers); no `any`/`as any`/`@ts-ignore` under strict TS + `noUncheckedIndexedAccess`; never fabricate product data; never weaken a guard to pass a test.
- Protected files (AGENTS.md law): prisma schema/migrations, workflows, guardrails, `.claude/**`, `.env*`, package-lock.json, `.gitignore`, `.githooks/**`, `apps/web/lib/ai-control-plane/**`; never flip gates: PUBLIC_PICKS, STATS_PUBLIC, LIVE_BOARD, PERFORMANCE_STATS, PROPLINE_INTAKE_ENABLED, WEATHER_VINTAGE_ENABLED, SLEEPER_INTAKE_ENABLED, CFBFASTR_INTAKE_ENABLED, FEATURE_RECIPE_BACKTEST_ENABLED.
- Remaining families after the swarm: sizing (18), markets (8), odds (2), weather (6), inplay (3), signals/** (30), research (5), gse-score (6), ladder (2), pipeline (1), lp (3), simulators (1), nfl (4).
- Rule 1: never edit a shared barrel; report copy-paste-ready export blocks instead; stage files by name, never `git add -A`; never push without founder authorization.
- Notable API signatures found during bridging: `gpPosterior1d(X, y, xstar, l, sigmaF, sigmaN)` (6 params); `rffFeatures(X, D, gamma, rand)` takes an RNG function, returns `{Phi, omega, b}`; `rbfKernelGp(x[], y[], l)` takes vectors; `TwoWayBook`/`BetaModel`/`CalibrationSample` already in barrel.
- Degenerate-variance traps: `bestSplit` returns null when within-group residual variance is zero; some fit functions return null on uniform synthetic data — build test data with real spread.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Module families being wired (nfl block-poisson / generalized-poisson / luck-neutralized-EPA / ATS ablation, DFS dominance-pruning / tournament-variance / payout-framework, sizing kelly variants, edge-lab) — tagged OTHER (engine wiring inventory and coordination protocol; no player/coach behavioral findings, though the NFL scoring and EPA modules may become QB/scheme signal inputs once wired — INFERENCE).

## Engine-actionable? (yes/no + one-line what)
No — read-only task; coordination protocol for the wiring swarm, not a finding to apply. Note for parent: the "14448/14448 wired" coverage gate counts stub adapters, so real-bridge completion is the actual progress metric.
