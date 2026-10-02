# product/cockpit-synthetic-monitoring-spec.md
## What it is (1-2 sentences)
Spec for the operator-only /cockpit/synthetic-monitoring dashboard: the human visibility layer over a synthetic monitoring runner that fires every 15 minutes against production. Covers check status across 6 categories, 24-hour sparklines, auto-filed issues, and manual re-run/pause controls.
## Key metrics/methods (formulas where given, else "not specified")
not specified. State rules: passing = last 3 runs all passed; warn = last run yellow or one of last 3 failed; failing = last run failed; pending = check not yet active. 24-hour history = last 96 data points (24h × 4/hour) per check.
## Data sources named
Routes/pages checked: /, /board, /ledger, /api/board/state, /api/calibration; env flags SYNTHETIC_MONITORING_ENABLED, SYNTHETIC_MONITORING_CHECKS, SYNTHETIC_MONITORING_OWNER_CHANNEL, SYNTHETIC_MONITORING_OWNER_TARGET; /api/health/synthetic-monitoring (runner-of-monitor heartbeat); auto-filed issues link from docs/ops/issue-queue.md.
## Findings (numbers and facts, not vibes)
- 6 check categories with 18 checks: (1) Voice/brand-safety P2: CHECK-V1..V4 — banned vocab on /, /methodology, /pricing, hero text matches positioning; (2) Critical-path availability P1: CHECK-A1..A5 — / 200, /board 200, /ledger 200, /api/board/state shape, /api/calibration shape; (3) Engine + data freshness P1/P2: CHECK-E1 latest IngestionRun < 60 min, CHECK-E2 ≥8 books reporting, CHECK-E3 Edge Index visible on slate; (4) Trust-gate compliance P1: CHECK-T1..T3 — PUBLIC_PICKS_ENABLED, PERFORMANCE_STATS_ENABLED, PUBLIC_BLOG_ENABLED respected; (5) Bot/AI surface health P2/P3: CHECK-B1..B3 — Twitter/Discord bot heartbeat, Model Journal weekly cadence (all pending); (6) Build/asset integrity P3: CHECK-C1 bundle size delta vs baseline.
- Pausing the runner requires a decision-log entry explaining why + expected resume timestamp; the runner-health indicator is independent of check results.
- Open items: no "silence this check" feature in v0 (fix the threshold instead); check-history export default yes in Phase 4+.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: CHECK-E1/E2/E3 (freshness + book coverage + Edge Index visibility) and CHECK-T1..T3 (trust-gate compliance) are the production engine's trust/health contract with the public surface.
## Engine-actionable? (yes/no + one-line what)
no — operator-dashboard spec; but the engine freshness thresholds (IngestionRun < 60 min, ≥8 books reporting) are the values the ingestion pipeline must keep green.
