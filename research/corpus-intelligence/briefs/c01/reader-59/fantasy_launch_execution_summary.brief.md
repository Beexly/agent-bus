# strategy/fantasy-launch/EXECUTION_SUMMARY.md
## What it is (1-2 sentences)
The execution summary and owner handoff for the fantasy-revenue launch (branch `claude/sweet-fermi-sk9gws`), reporting 16 commits with all code-implementable work complete and fully gated green — final verification: 413 test files / 5,733 tests pass, production build 193/193 pages, typecheck 0, lint clean.
## Key metrics/methods (formulas where given, else "not specified")
- Weekly-projection model v1 (`lib/projections/weekly-model.ts`): GSE's own forward weekly point projection, composed only from cleared building blocks: xFP anchor + process grade + opponent-adjusted EPA + game environment; availability widens the band only. Ships GATED (`canPublishProjections:false`); flipping it on is a backtest gate, not a code change.
- Opponent-adjusted EPA/play ("our DVOA", `lib/metrics/opponent-adjusted-epa.ts`): transparent, reproducible equivalent of the paywalled efficiency ratings, computed from cleared nflverse play-by-play, carrying the stat-commandment provenance envelope. Surfaced behind a clearance-gated coverage map.
- Weekly-model backtest gate: MAE/Brier via `lib/calibration/compute.ts` + a `model-freeze` calibration proposal required before `canPublishProjections:true` is flipped. Doctrine: "we do not publish a projection we haven't scored."
- Best Ball engine (`lib/fantasy/bestball.ts`): roster ceiling, spike-week, QB↔catcher stack correlation, bye fragility, next-pick recommender.
## Data sources named
- nflverse play-by-play (cleared; projections badge shows "refreshed Xh ago · nflverse").
- Sleeper registered in the clearance registry (enrichment-only, attribution required, `model_training:false`, never the sole basis of a paid feature).
- PROJECTIONS_PROVIDER flag flips the draft/best-ball tools to the live nflverse graded pool (DB-independent HTTP fetch; provider must return `status:"live", count>0`).
## Findings (numbers and facts, not vibes)
- 16 commits this session; 413 test files / 5,733 tests pass; production build 193/193 pages (exit 0); typecheck 0; lint clean; trust-gate · draft-only · model-freeze all OK.
- $49/yr Fantasy tier end-to-end: `SubscriptionTier += FANTASY` (type + Prisma enum + additive migration); entitlements ladder FREE → FANTASY → PRO → ELITE (fantasy unlocks the suite; betting depth + alerts stay Pro/Elite); Stripe price wiring + webhook tier-map + checkout; `requireFantasyApi()`.
- Depth-limited free trial enforced SERVER-SIDE (`lib/fantasy/free-trial.ts`): FREE viewers get only the trial subset (top-N per position); paid rows never serialized to the client. Props fail closed.
- Audit correction that shaped everything: fantasy was ~80% built, not greenfield — this was activation, integrity-wiring, monetization, and launch, not invention.
- Two-agent adversarial pass over the 50+ file diff: math independently verified correct (EPA solver + weekly-model bounds); closed a real CLAUDE.md rule-3 violation (fantasy paywall was client-side only, `/optimizer` skipped it — now server-side, props fail closed).
- Cost runway Phase 0: deploy-gating (`scripts/vercel-skip-build.mjs`) kills ~20-builds-in-3hrs preview churn + per-preview Neon wakes; SourceSnapshot hash-only in prod (drops raw multi-KB payload); `scripts/db/prune-usage.mjs`.
- Owner-handoff blockers (not code): create live Stripe prices (`STRIPE_FANTASY_MONTHLY_PRICE_ID`, `STRIPE_FANTASY_ANNUAL_PRICE_ID`); set `PROJECTIONS_PROVIDER`; provision Oracle Always-Free VPS (Redis + `workers/data-refresh`); Cloudflare R2 for the data lake (persist-what-we-fetch → Parquet); run the weekly-model backtest (MAE/Brier) then flip `canPublishProjections:true`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: revenue-launch engineering summary; no player-level, coaching, or scheme findings.
- SCHEME-adjacent (INFERENCE): opponent-adjusted EPA/play ("our DVOA") from nflverse PBP is a team-efficiency building block, not a scheme-tendency metric — treat as engine-infrastructure, not a coaching/scheme signal.
## Engine-actionable? (yes/no + one-line what)
No — it documents already-built engine infrastructure (weekly-model v1 composition, opponent-adjusted EPA) but the file itself is a launch summary, not a research finding with new metrics, formulas, or data for the engine; the concrete deliverables (EPA solver, weekly-model, backtest gate) already live in the repo's lib/ tree and were verified by the adversarial pass.
