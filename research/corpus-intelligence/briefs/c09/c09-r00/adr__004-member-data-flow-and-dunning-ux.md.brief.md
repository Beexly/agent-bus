# adr/004-member-data-flow-and-dunning-ux.md
## What it is (1-2 sentences)
ADR (2026-06-11, Accepted) fixing four gaps: dashboard confidence leak to FREE members, PRO/ELITE members served the FREE cached picks payload, a dead-end dunning flow for failed cards, and zero tests on the 30-minute production ingestion/settlement heartbeat.
## Key metrics/methods (formulas where given, else "not specified")
- Confidence score per pick: 0–100 (from architecture.md pipeline).
- 30-minute cron heartbeat (`processSport`/`settleSport`) pinned by 26 new vitest tests: settlement always runs, CLV/game-log/snapshot failures never abort settlement, stale data fails the run, `isBootstrap` and CLV lock immutable, errors mark IngestionRun FAILED.
- `getBillingNotice(userId)` states: `PAST_DUE_IN_GRACE` (deadline = pastDueSince + PAST_DUE_GRACE_DAYS), `PAST_DUE_EXPIRED`, `INCOMPLETE`; missing anchor fails closed.
## Data sources named
Stripe webhooks (`invoice.payment_action_required`), `apps/web/lib/billing/notice.ts`, `/api/picks` server-side tier gate.
## Findings (numbers and facts, not vibes)
- FREE tier promises 1 pick/day with no confidence; before the fix, dashboard rendered up to 6 picks with numeric confidence to every logged-in member.
- `/picks` fetched `/api/picks` server-side without cookies + `revalidate: 1800`, so ALL members (incl. PRO/ELITE) got the cached FREE payload; fixed by forwarding session cookie with `cache: "no-store"` for sessions, anonymous traffic keeps 1800s cache.
- Dunning: webhook now handles `invoice.payment_action_required` (3DS) → surfaces PAST_DUE/INCOMPLETE; dashboard banner links to Stripe billing portal.
- Ingestion pipeline previously had zero test scripts and `npm test --workspaces` silently skipped it.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (product/infra): CLV tracking exists in settlement pipeline (CLV lock field); 30-min settlement heartbeat is the single source of truth for pick generation/settlement.
## Engine-actionable? (yes/no + one-line what)
No — product UX/infra decisions; CLV-lock invariants already in engine pipeline, nothing new to wire.
