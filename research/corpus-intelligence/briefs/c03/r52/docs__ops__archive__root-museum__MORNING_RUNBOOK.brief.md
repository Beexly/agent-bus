# docs/ops/archive/root-museum/MORNING_RUNBOOK.md
## What it is (1-2 sentences)
An overnight 2026-06-13 runbook for the Galaxy Sports Edge repo: StatKing PR #19 was landed and integrated, three real defects were fixed (build crash, admin access-control hole, SEO metadata), and the go-live checklist (Vercel Production secrets + Postgres) was documented as owner-gated.

## Key metrics/methods (formulas where given, else "not specified")
not specified. Verified state cited: `typecheck` 0 errors; `next build` exit 0 (288 routes); 4,538 tests pass (316 files).

## Data sources named
GitHub PR #19 (`codex/upgrade-galaxy-statking-to-nfl-intelligence-system`), branch `claude/friendly-fermat-fy99m2`; handoff docs `handoff/claude/statking/DO_NOT_BREAK.md` (rights gates, fixture/snapshot-backed data) and `handoff/claude/statking/TODO_FOR_CLAUDE.md` (25 prioritized tasks); `scripts/check-deploy-readiness.mjs`, `scripts/seed-stripe-prices.mjs`; admin gate enforced by `admin-routes-gating.test.ts`.

## Findings (numbers and facts, not vibes)
- Three defects fixed: (1) `/admin/statking/crown` + `/backtests` crashed at prerender reading `coverage_report.json`, excluded by an over-broad `coverage/` gitignore rule — ignore rule anchored, report committed, `readJson()` hardened to degrade to honest empty state; (2) all 31 `/admin/statking/*` cockpit pages were world-readable with no access control — added `auth()` + `role !== "ADMIN"` + `redirect()` guard to every page; (3) 26 public `/stats/*` pages had no metadata — added unique title/description/canonical to each.
- StatKing characterized as a rights-gated foundation, not a finished product: data is fixture/snapshot-backed, not live feeds — "don't market it as live"; many `/stats/*` and `/admin/statking/*` pages are placeholder stubs (heading + one line), indexed but not world-class UX.
- Go-live checklist was fully owner-gated: set Production env vars in Vercel (DATABASE_URL, DIRECT_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, GOOGLE_CLIENT_ID/SECRET, THE_ODDS_API_KEY, ANTHROPIC_API_KEY, REDIS_URL, STRIPE keys, 4 STRIPE price IDs, NEXT_PUBLIC_APP_URL), provision Postgres (pooled + direct), verify with `check-deploy-readiness.mjs`, wire Stripe webhook at `/api/webhooks/stripe`, promote to production.
- Repo hygiene finding: 60+ branches with no common history existed; converging on one canonical line and retiring the rest was called the real fix for work getting stranded.
- PR #19's own branch still carried the build break; the corrected state lived only on `claude/friendly-fermat-fy99m2` — ship the corrected branch.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Rights-gated foundation, not finished; fixture/snapshot-backed, don't market as live": TRUST-SIGNAL — honest-data-status discipline that maps directly to the calibration-state honesty doctrine
- Admin access-control hole (31 pages world-readable): OTHER — security fix, not engine
- Canonical-branch convergence (60+ divergent branches): OTHER — repo hygiene

## Engine-actionable? (yes/no + one-line what)
No — integration/deploy status report from June 2026; no engine methods, metrics, or signals.
