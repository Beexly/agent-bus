# docs/ops/MAX_LEVERAGE.md

## What it is (1-2 sentences)
A "maximum leverage" ops playbook for the GSE universe: ordered money-recovery actions, an always-on free-capacity cron matrix, zero-auth distribution surfaces, a content free-wire config, R&D labels for post-volume work, and explicit hard non-goals. It defers to SESSION_LEVERAGE_ATLAS_2026-08-09.md for the full-session map.

## Key metrics/methods (formulas where given, else "not specified")
- R&D labels (no formulas given): `export:settled-picks` (needs DATABASE_URL), `calibration:offline` (**CIR vs PAVA** + paradox + CLV gate), `dspy:gse` (skill metric GEPA-ready), `orbit:integrity:full` (full extract seal). Calibration metrics cron uses **Eligibility / Murphy RES** — formulas not specified.

## Data sources named
The Odds API (`THE_ODDS_API_KEY`; free path when blank), nflverse (free stats via `refresh-player-stats` cron at :00,:30), curated sports RSS (via `NEWS_RSS_USE_CURATED_DEFAULTS` / `NEWS_RSS_FEEDS`), settled picks export (Postgres).

## Findings (numbers and facts, not vibes)
- Money-recovery #1: Production SHA lag blocked every ship; fix is redeploy to main HEAD, proven by ops-truth `deployment.sha` matching main. [OTHER — ops]
- If `THE_ODDS_API_KEY` is absent/dead, `settle-picks` takes the free path. [OTHER — ops]
- Stripe www webhook must include `checkout.session.expired` + matching `STRIPE_WEBHOOK_SECRET`; proof is 2xx in Recent Deliveries. [OTHER — ops]
- Cron matrix: settle-picks every 3h (free path when key blank); free-spine-health 10:00 UTC; health-alert every 15m; refresh-player-stats :00,:30; reconcile-entitlements 08:00; repair-checkout-attempts 08:30; calibration-metrics (Eligibility / Murphy RES); generate-drafts under rankingP. [OTHER — ops]
- Zero-auth distribution: Edge Index embed badge at `/embed/edge-index/[gameId]`, `/edge-index`, public tools math at `/tools` (**line movement + parlay + CLV**), B2B signals via `GET /api/v1/signals` with `x-api-key`. [TRUST-SIGNAL]
- Merge stack: main #391–#408 (ranking/independents/cal R&D); open #409, #370 (jynx cost), honesty PRs #371/#372 (review only). [OTHER — ops]
- Explicit hard non-goals: no Polymarket feature work; no LIVE_BOARD without founder YES; no full Kelly; no CIR live without `CALIBRATION_ADJUSTMENTS_ENABLED`; no gamma without counsel; no GPU foundation train; no edge-as-p; no inventing free book lines. [OTHER — ops]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration offline stack — CIR vs PAVA, Murphy RES, CLV gate (TRUST-SIGNAL): the named calibration machinery (proper scoring / recalibration vs CLV gate) is the engine's trust-and-proof backbone; any published pick must survive these checks.
- Public tools math — line movement, parlay, CLV calculators (TRUST-SIGNAL): public-facing trust surface; CLV tooling reinforces closing-line capture as a first-class signal.
- "No inventing free book lines" non-goal (TRUST-SIGNAL): explicit anti-fabrication rule — line inputs must be real observations, never synthesized.
- nflverse refresh-player-stats cron (OTHER): free player-stats data source for the engine.
- All remaining items (OTHER): money-recovery ops and cron hygiene.

## Engine-actionable? (yes/no + one-line what)
Yes — the offline calibration labels (CIR vs PAVA, Murphy RES, CLV gate) name the exact checks engine outputs must pass before any public firing.
