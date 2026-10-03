# docs/product/synthetic-monitoring-spec.md
## What it is (1-2 sentences)
Phase 3+ spec for a synthetic monitoring layer: a BullMQ worker runs production checks every 15 minutes (availability every 5 min), auto-files pre-tagged entries to `docs/ops/issue-queue.md` on failure, dedupes, auto-closes on recovery, and escalates P1s to the owner. Closes the gap between the daily smoke script and continuous production verification.

## Key metrics/methods (formulas where given, else "not specified")
- Voice/brand-safety (P2): CHECK-V1..V3 scan homepage /methodology /pricing HTML against `apps/web/lib/compliance-scanner/rules.ts` LAYER_1_PLATFORM_BANS; zero matches = pass. CHECK-V4: H1 must exactly match the locked line "We're not AI. We're math you can read." (or a documented variant).
- Availability (P1): homepage 200 with response under 3 seconds (every 5 min); /board, /ledger, /api/board/state shape validation; /api/calibration bootstrap-aware.
- Engine freshness: CHECK-E1 — latest IngestionRun `completedAt` within last 60 min, else P1. CHECK-E2 — ≥8 books reporting on latest run, P2 if below for two consecutive runs. CHECK-E3 — at least one non-null Edge Index during active slate hours, P2 if zero for 30+ min.
- Trust gates (P1, existential): CHECK-T1/T2/T3 verify `PUBLIC_PICKS_ENABLED` / `PERFORMANCE_STATS_ENABLED` / `PUBLIC_BLOG_ENABLED` flags actually gate public payloads.
- Build (P3): CHECK-C1 — homepage asset bundle size delta vs prior week; +15% or more files an issue.
- Issue lifecycle: dedupe if same check filed within last 4 hours (recurringCount increments); auto-close after 3 consecutive passes (45 min); cap of 4 issues per check per day. P1 pauses dependent autonomous work; P3 surfaces in end-of-day digest.
- Environment notes: 1,427+ unit tests catch logic regressions in CI; daily smoke catches deploy-time regressions.

## Data sources named
- Production HTML (galaxysportsedge.com, /methodology, /pricing, /board, /ledger, /performance, /blog), `/api/board/state`, `/api/calibration`, `IngestionRun` table, `AgentRunLog` (Twitter/Discord bot heartbeats), `ModelJournalEntry` (weekly Sunday-noon publish cadence check), compliance-scanner rules file.

## Findings (numbers and facts, not vibes)
- Check schedule: 15 min general cadence; availability checks every 5 min; Model Journal cadence checked Sundays at noon ET (miss = P3, recoverable next week).
- Open items: heartbeat-of-heartbeats (external uptime ping to `/api/health/synthetic-monitoring`); P1 paging on weekends yes for trust-gate violations, no for stale ingestion; 4-per-day cap on auto-filing.
- Local dev: `npm run synth:local` runs the suite against a local dev server; cockpit page at `/cockpit/synthetic-monitoring` shows 24h check history.
- 8 acceptance criteria; severity definitions "locked".

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CHECK-E1/E2/E3 freshness + book-count thresholds → OTHER (pipeline-health invariants, not football behavior). INFERENCE: these are reusable as "do not publish on stale data" engine gates.
- Banned-vocabulary scans → OTHER (brand-safety ops).
- Trust-gate compliance checks (T1/T2/T3) → OTHER (flag-enforcement ops).
- No QB, coaching, OL, or scheme content in this file.

## Engine-actionable? (yes/no + one-line what)
Yes — the freshness invariants (ingestion < 60 min, ≥8 books reporting, non-null Edge Index during active slates) are reusable as engine pre-publish data-health gates.
