# docs/DECISIONS_TO_RATIFY.md
## What it is (1-2 sentences)
A 33-row ratification ledger (dated 2026-06-23, "Slice 0") recording every reversible architectural/modeling decision the Codex intelligence-core build made, each with owner, status, rationale, and the human-gated ratification (owner/data/infra/schema) required before any flip to live/published/priced behavior.
## Key metrics/methods (formulas where given, else "not specified")
- **B2 player-rate posteriors**: pseudo-Bayesian shrinkage with `DEFAULT_PLAYER_RATE_SHRINKAGE_K = 12` (12 pseudo-samples); all posteriors remain shadow, `priced=false`.
- **B3 market anchor**: corrected invariant is **yards and TD conservation**, not fantasy-point conservation; physical units (`passYds`, `rushYds`, `teamTD`) anchored first, fantasy points derived afterward.
- **B4 ensemble**: sequential Hedge weights, updated only after each sample settles; bounded loss prevents one spike week from dominating.
- **B5 uncertainty**: rolling Mondrian ACI windows with disjoint fit/calibration/test weeks; position-level alpha updates (worse-calibrated positions carry wider intervals).
- **BT baseline**: cleared-feature boosted-stump Tweedie scaffold (Tweedie-family shadow baseline) with ACI and Clark-West hooks.
- **C2 role migration**: Markov role-state matrix plus vacated-touch redistribution; sparse transitions shrunk via prior smoothing.
- **C4 availability**: Kaplan-Meier return curves, Cox-style hazard multipliers, role half-life readouts (shadow-only).
- **C6 correlations**: Gaussian-copula scaffold with **fixed** coefficients (no learned coefficients without out-of-sample evidence).
- **D4 provenance**: SHA-256 hash-chain replay for settled-pick events.
- Calibration/self-publish metrics: position MAE, interval coverage, rank correlation, **Brier / log-loss / CRPS versus market**; reliability reporting uses Brier, ECE, max-gap, reliability-diagram rows. All require **purged/embargoed out-of-sample (walk-forward)** evidence before promotion. No formulas beyond the above are specified.
## Data sources named
- nflverse (PBP + QBR + player stats) as implied backtest substrate for B2/B3/C4 evidence; Vega/win-probability paths for C3 game script; The Odds API for B4/D1 market baselines; no new data sources introduced by this file.
## Findings (numbers and facts, not vibes)
- **33 decisions** logged across slices A1–F3 plus process decisions; every one carries status "chosen" with a standing human gate; none auto-promotes.
- Standing human gates: `[OWNER]` controls Stripe price creation and all live-money actions; `[OWNER]/[DATA]` controls `PROJECTIONS_PROVIDER`, `canPublishProjections`, `PERFORMANCE_STATS_ENABLED`, `PUBLIC_PICKS_ENABLED`, `OUTCOME_LEARNING_ENABLED`, `CALIBRATION_ADJUSTMENTS_ENABLED`; `[DATA]` controls any `MODEL_VERSION` bump or `IMPLEMENTED` calibration proposal; `[INFRA]` controls R2/DuckDB/Oracle/prod DB provisioning; `[SCHEMA]` controls any migration on shared/prod DB.
- Codex may scaffold behind OFF flags but **may not self-approve** owner, infra, data, schema, payment, entitlement, or calibration truth flips.
- Codex must stop after backlog exhaustion and hand off via `docs/CLAUDE_HANDOFF.md`; "code-ready after FINAL" ≠ "live-ready".
- Final rule: preserve every human-gated flag and draft-only boundary; no estimator, public artifact, pricing rung, projection provider, calibration proposal, or money path promoted by scaffolding alone.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Shadow-only defaults with human-gated promotion → TRUST-SIGNAL
- Shrinkage k=12 for thin player rates → TRUST-SIGNAL
- Yards/TD conservation anchor (not fantasy-point conservation) → SCHEME (game/physical-unit modeling invariant)
- Markov role-state + vacated-touch redistribution → OTHER (role/opportunity mechanics)
- Kaplan-Meier/Cox availability readouts → OTHER (availability modeling)
- Gaussian-copula fixed coefficients for best-ball/Parlay MRI → OTHER (correlation modeling)
- SHA-256 hash-chain replay provenance → TRUST-SIGNAL
- Purged/embargoed walk-forward promotion gate → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
**Yes** — the wire→weight→calibrate promotion discipline (shadow-only, purged/embargoed walk-forward evidence, owner/data gates before any published/priced weight) is the engine's quality gate template; B2's k=12 shrinkage and B3's yards/TD conservation are concrete parameterization anchors for the projection pipeline.
