# docs/launch-observatory.md

## What it is (1-2 sentences)
Operator's map of the Sports Intelligence OS surfaces (customer/admin/cockpit) and the deterministic rules governing what crosses from internal to public, centered on the Jarvis synthesis layer, the pick forensic ledger, and the public-performance readiness policy.

## Key metrics/methods (formulas where given, else "not specified")
- Public-performance readiness policy (`evaluatePublicPerformancePolicy`, pure function, unit-tested): public stats blocked when (1) readiness gate `canExposePerformanceStats` is false, (2) canonical settled-pick count < `minSettledPicksForLearning` (default 25), or (3) every pick in the recent window is bootstrap. Same helper consumed by `/dashboard`, `/cockpit`, `/api/picks` gating — single source of truth.
- Pick eligibility (`evaluatePickEligibility`): result ∈ {PENDING, WIN, LOSS, PUSH (excluded from W/L denominator), VOID (excluded entirely)}; bootstrap picks (pre-`CANONICAL_HISTORY_ENABLED=true`) never count toward public W/L; `snapshot.eligibleForLearning` set only when `canLearnFromOutcomes=true`, canonical, real settlement exists.
- Staleness alert thresholds: ingestion RED if >24h stale; settlement RED if >36h stale.
- Forensic ledger: last 100 picks per page; CSV export max 500 rows per call.
- Alert severities: page = ingestion/settlement RED, new safety warning, or launch status becomes NOT_READY_DATA/NOT_READY_SAFETY; warning = status change or GREEN→AMBER; info = recoveries. Delivery intentionally NOT wired (pure payload module).
- Responsible gambling helpline: 1-800-522-4700 (NCPG), single update point `risk.gamble-responsibly` in `apps/web/lib/trust-claims.ts`.
- Banned phrases (fail CI): `guaranteed`, `risk-free`, `sure thing`, `easy money`, `can't lose`, `lock`, `verified track record`, `thousands of bettors`.
- Jarvis: never fabricates a number — missing inputs become UNKNOWN; never claims LAUNCH_READY while a safety warning is active; never recommends auto-betting or auto-publishing.

## Data sources named
- The Odds API + DBs → ingestion worker → `Pick` + `PickSignalSnapshot` tables → `getReadinessGates()`, `db.pick`, `db.ingestionRun` → `evaluatePublicPerformancePolicy()` → `/dashboard`, `/performance`, `/api/picks`; operator side → `synthesizeJarvis()` → `/cockpit`, `/cockpit/history`, `/admin/dashboard`.
- Required env vars (external-config warnings when missing): `DATABASE_URL`, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `THE_ODDS_API_KEY`, `ANTHROPIC_API_KEY`.

## Findings (numbers and facts, not vibes)
- `/picks` 503s when `canExposePublicPicks=false` and filters `isBootstrap=false`; `/performance` short-circuits to bootstrap state when `canExposePerformanceStats=false`; blocked dashboards show "Collecting" with trust-safe baseline-data messaging — bootstrap-era streaks must never appear on customer surfaces.
- Bootstrap→canonical transition is operator-controlled via `CANONICAL_HISTORY_ENABLED`; bootstrap picks are persisted, internal-only, never in `/api/performance` aggregations.
- Jarvis launch statuses: LAUNCH_READY, LAUNCH_READY_PENDING_EXTERNAL_CONFIG, NOT_READY_DATA, NOT_READY_VALIDATION, NOT_READY_SAFETY, UNKNOWN; phase matrix maps phases 1–9 to statuses.
- CSV export contract: 22 columns in fixed order (`id` … `exclusionReasons`), RFC 4180 minimal escaping, header `\r\n`-terminated, filename `cockpit-history-YYYY-MM-DD.csv`, `Cache-Control: no-store`.
- Jarvis trend ring buffer is process-local (in-memory); multi-process deploys need a Redis swap when persistence matters. Alert delivery not wired.
- Static HTML snapshots committed at `reports/launch-night/snapshots/` (index, cockpit, cockpit-history, cockpit-brief, cockpit-calibration, dashboard, performance, picks, home, brief).
- Vocabulary map: customer copy uses "Verified picks"/"Early-period picks"/"Complete picks"/"Confidence Score" for internal "Canonical"/"Bootstrap"/"Settled"/"Edge Score"; "Track record" banned (implies a historical guarantee); mandatory disclaimer: "Past performance does not guarantee future results" on every public performance claim.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] 25-pick minimum canonical settled sample before any public performance stat may be shown; bootstrap picks structurally excluded from all public W/L — the gating that makes the PROVEN kit's 380-pick calibration sample trustworthy.
- [TRUST-SIGNAL] CI-failing banned-phrase registry (`guaranteed`, `lock`, `verified track record`…) plus the mandatory past-performance disclaimer — hard trust guardrails on any public-facing engine output.
- [TRUST-SIGNAL] Staleness paging rules (ingestion >24h, settlement >36h) and the safety-warning rule that public picks can never be live while the performance gate is closed — operational integrity of the prediction product.
- [OTHER] Jarvis "never fabricate; missing → UNKNOWN" and never-LAUNCH_READY-under-warning — epistemic discipline pattern for any synthesis layer.

## Engine-actionable? (yes/no + one-line what)
Yes — the 25-settled-pick minimum and bootstrap-exclusion rule are the hard sample-size floor any public performance claim must clear before exposure.
