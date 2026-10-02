# docs/adr/008-runtime-error-monitoring.md
## What it is (1-2 sentences)
A proposed ADR (2026-09-02, authored by Hermes Agent after an overnight pre-launch audit) for runtime error monitoring on the production platform. It evaluates three options and recommends an interim path: structured JSON error capture wired into the existing `/api/cron/health-alert` webhook (Option 3), with an owner decision later on Sentry free tier or self-hosted GlitchTip.
## Key metrics/methods (formulas where given, else "not specified")
- No formulas; operational parameters stated:
- Error reporting rate limit: max 10/min per route (prevents webhook DoS).
- Success criteria: operator notification within 24 hours of a production error; no PII or secrets in payload; error rate <1% of traffic in normal operations.
- Interim payload shape: `{ route, errorClass, message, stack, timestamp }` — no headers, bodies, user data.
- Volume thresholds: low volume (<100/day) → keep interim + Slack/Discord webhook; moderate (100–1K/day) → Sentry free tier (5K events/mo) with strict scrubbing; high or grouping needed → self-host GlitchTip.
## Data sources named
- `/api/cron/health-alert` — existing scheduled status poll (cannot capture individual exceptions with stack traces).
- `ai-control-plane/observability.ts` — covers the AI execution path only.
- Sentry, Rollbar, Honeybadger, Highlight.io as hosted candidates; Sentry self-hosted, GlitchTip, OpenTelemetry + Jaeger as self-hosted candidates.
## Findings (numbers and facts, not vibes)
- Gap: unhandled route handler exceptions (e.g., checkout 500 at 02:14) are invisible until logs are manually inspected.
- Estimated current scale: <1K daily errors.
- Cost reference: ~$26–79/mo for 50K events on the Sentry Team plan.
- Phase 1 pilot: helper `lib/observability/capture-route-error.ts` wired into 3 routes — `/api/subscriptions/checkout` (payment critical path), `/api/picks` (highest-traffic public GET), `/api/performance` (second-highest public GET).
- Security constraints: never log request bodies, authorization headers, user emails or IDs, API keys or tokens, Stripe objects; scrub URLs (strip query params with PII) and error messages (check for embedded secrets).
- Testing plan: unit tests for the capture helper (mock webhook); integration test triggering a checkout-route error; load test of 100 rapid errors.
- Status: Proposed; awaiting operator approval before any external service adoption.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings → OTHER (observability/infrastructure only; no sports intelligence content).
## Engine-actionable? (yes/no + one-line what)
no — pure infrastructure/observability proposal; it protects uptime but adds no prediction signal.
