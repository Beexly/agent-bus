# launch-qa-addendum.md
## What it is (1-2 sentences)
Addendum to the v1 production launch checklist adding QA gates for the Evidence Engine era: the data plane (SourceSnapshot → GameSignal → Pick), the shadow-mode publishing boundary, the cockpit surface, brand-safety v2 rules BS-010–BS-053, calibration plumbing, content-surface publishing rails, real-network ingestion smoke, browser QA, operator readiness, production smoke, and rollback. Run after the v1 checklist; MUST failures block launch.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration: Brier-score function with unit tests (identity prediction = 0, anti-correlated = 1, bucket-level, NaN handling); drift detection threshold = **0.02 absolute Brier delta over 30 days** (test cases: no drift, slow drift, sudden drift, insufficient sample); reliability-diagram endpoint returns predicted-probability bins vs observed frequency.
- Initial launch state: all non-market factors in shadow; only 4 activated v1 market factor keys (`marketDepth`, `lineMovement`, `consensusPct`, `impliedProbability`); `CALIBRATION_AUTO_APPLY=false` (env loader refuses to start otherwise).
- Brand-safety v2: test case count ≥60 (v1 ~20 + v2 ~40); BS-021 Kelly block — `recommendStake()` output never in rendered HTML.
- Performance gate: `/performance` renders "collecting" until activation; settled-pick gate = 100 (from operator-playbook cross-ref).
- Cockpit LCP <1.5s on mid-tier mobile; browser QA matrix includes an "older-eye check" (20px default font, 30-inch viewing distance).
## Data sources named
The Odds API (Phase 1 ingestion provider; 500/mo free tier, 20k paid); api-sports.io (possible multi-provider redundancy); ESPN scoreboard fetchers; ClubElo (ungated fair-value input at time of writing); Kalshi (gated); BullMQ background workers; Postgres/Neon; Redis.
## Findings (numbers and facts, not vibes)
- Shadow-mode boundary is the highest-priority new test: `shadow-leak.test.ts` seeds shadow + activated factors, calls every public route, and asserts no shadow factor keys leak; runtime `assertNoShadowFactorsLeaked()` in response pipeline; activation states = `shadow | activated | archived`, no nulls.
- Every Pick row must have non-null `ingestionRunId`, `evidenceBundleId`, ≥1 `FactorContribution`; GameSignal rows include `factorKey`, `source`, `sourceSnapshotId`, `freshnessSec`, `trustLevel`, `activationState`.
- Failure-pattern table documents real operational signatures: 401/429 from the-odds-api.com, `assertNoShadowFactorsLeaked threw`, `Brier score = NaN` (empty bucket — guard with sample-size check), `0 ingestion runs in last cron interval`.
- BS-043: LLM content-worker outputs validated against SourceSnapshot for any number cited.
- Ingestion smoke requires ≥1 SourceSnapshot row, ≥1 Game row, ≥4 GameSignal rows (one per activated market factor), ≥1 Pick row.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration infrastructure — Brier scoring, 0.02/30-day drift detection, reliability diagrams, factor shadow/activation lifecycle — is the engine's measurement and promotion discipline.
- TRUST-SIGNAL: shadow-leak boundary, performance-stat gating, and no-shadow-publication rules are the trust mechanism for published picks.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the calibration plumbing spec (Brier buckets, 0.02/30-day drift threshold, reliability diagrams) and the factor shadow→activation lifecycle as the engine's model-promotion discipline.
