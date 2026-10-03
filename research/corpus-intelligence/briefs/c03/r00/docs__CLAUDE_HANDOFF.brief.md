# docs/CLAUDE_HANDOFF.md
## What it is (1-2 sentences)
Handoff record (2026-06-24) for the GSE Intelligence Core build on branch `codex/intelligence-core`: a 30-row branch-state table of model/pipeline slices (0, A1–F3, BT, plus FINAL and AUDIT) built, committed, and pushed, with FINAL at `1f2e8dd4` and audit follow-up at `e72e420e`. Gates passed (typecheck, lint, full web Vitest, build); the document is explicitly code-ready pending human review, not live-ready.
## Key metrics/methods (formulas where given, else "not specified")
- Tweedie baseline projection (slice BT)
- Adaptive Conformal Inference (ACI) intervals, Mondrian-by-position, with rolling recalibration (slice B5)
- Promotion gates use Clark-West tests against market-only and equal-weight baselines with purged/embargoed walk-forward discipline (stated; no formula in file)
- Empirical-Bayes player-rate shrinkage with published weights (slice B2)
- Earned-weight ensemble with bounded loss and Clark-West gates (slice B4)
- Correlation/copula layer for best-ball/parlay consumption (slice C6)
- Market-anchored team yards/TD reconciliation with derived fantasy points (slice B3)
- Self-publishing calibration harness + publish-criteria definition only (slice B6); public model-parliament CRPS leaderboard feed (flagged); scoring-rule and reliability-diagram reporting (slice E2); replayable-provenance endpoint (flagged)
## Data sources named
- nflverse regular-season data (used by the E1 replay and historical-backtest harness)
- Feature store "over metrics plus coverage-map rows" with a persistence seam (B1)
## Findings (numbers and facts, not vibes)
- Final gate result: repo `typecheck` passed; repo `lint` passed; full web Vitest passed; repo `build` passed with existing Sentry/OpenTelemetry, stub-Prisma, and edge-runtime warnings; trust/model-freeze/draft-only checks passed.
- Safety invariants: no commits to `master`/`main`; no changes to secrets, money paths, production resources, pricing rungs, `PROJECTIONS_PROVIDER`, or `canPublishProjections`.
- All new estimators and public-facing feeds are shadow, draft-only, flagged off, or `priced=false` until real out-of-sample proof and owner approval exist.
- Calibration proposals are draft-only; no `IMPLEMENTED` calibration proposal or `MODEL_VERSION` promotion was created.
- The market anchor conserves team yards and touchdowns; fantasy points are always derived output, never the conserved team total.
- Conformal intervals use ACI with Mondrian-by-position logic.
- The ladder has separate fantasy and betting tracks: fantasy MAE/coverage cannot unlock betting CLV, and betting CLV cannot unlock projection publication.
- Human gates: `[OWNER]` merge/deployment/publication/live-money/Stripe/price-rung/Vercel-build-wiring/public-feed; `[INFRA]` R2_FEATURE_STORE, R2_FETCH_ARCHIVE, DuckDB `feature_store.*` / `fetch_store.*`, durable hash-chain, tournament, trace, alerts, CDN, source-snapshot retention; `[DATA]` real historical rows, coefficients, thresholds, Clark-West reports, MODEL_VERSION; `[SCHEMA]` LadderEvent migration.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Clark-West gates + purged/embargoed walk-forward promotion discipline → TRUST-SIGNAL (honest anti-overfit promotion gate for any engine estimator)
- Shadow/draft-only/flagged-off default for all new estimators until real out-of-sample proof → TRUST-SIGNAL (calibration-state labeling doctrine)
- Tweedie baseline / ACI intervals / empirical-Bayes shrinkage / earned-weight ensemble / copula layer → OTHER (modeling infrastructure, not position-specific intelligence)
- Market-anchored reconciliation with conserved team totals; fantasy points as derived output → OTHER (forecast architecture)
- Separate fantasy/betting ladder tracks → OTHER (safety architecture)
## Engine-actionable? (yes/no + one-line what)
yes — it inventories the existing shadow estimators (Tweedie/ACI/Clark-West/empirical-Bayes) and promotion gates the engine wiring program must compose with rather than re-invent.
