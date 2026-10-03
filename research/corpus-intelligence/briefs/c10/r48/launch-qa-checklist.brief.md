# research/launch-qa-checklist.md
## What it is (1-2 sentences)
Launch QA checklist for Galaxy Sports Edge (last verified 2026-05-21), distilled from the Front-End Checklist and tailored to GSE's brand-safety invariants, server-side Stripe paywall architecture, and trust rules; 11 sections with MUST/SHOULD/NICE severity, ending in a blank sign-off table.
## Key metrics/methods (formulas where given, else "not specified")
not specified — procedural checklist, no formulas. Key thresholds cited: `<title>` under 60 chars; meta description 120–160 chars; FCP < 1.8s, LCP < 2.5s, CLS < 0.1, TBT < 200ms on 4G; `/dashboard` bundle < 200KB gzipped JS; color contrast 4.5:1 body / 3:1 large; 32-byte fresh NextAuth secret; 90-day Stripe key rotation; `PERFORMANCE_STATS_ENABLED` stays false until >=100 canonical settled picks.
## Data sources named
None (env vars listed as requirements: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXTAUTH_SECRET, ANTHROPIC_API_KEY, THE_ODDS_API_KEY, DATABASE_URL, DIRECT_URL; services: Vercel, Stripe, Neon, Upstash, Sentry).
## Findings (numbers and facts, not vibes)
- Brand-safety MUSTs: `npm run test:brand-safety` 0 hits; `evaluatePublicPerformancePolicy()` returns BLOCKED when `PERFORMANCE_STATS_ENABLED` unset; sample-mode banner on `/dashboard` and `/picks` while `DEMO_PICKS_ENABLED=true` with "verified record" reading "Collecting…" and no numeric claims; risk disclosure on every pick page; footer disclaimer site-wide.
- Paywall MUSTs (server-side, not client): `/api/picks/daily-slate` 200 for FREE tier but redacts confidence + factor breakdown; `/api/picks/*/snapshot` requires PRO+ (402 or redirect for FREE); confidence stripped from JSON, not just UI; Stripe webhook signature verified before entitlement change; `getEntitlements()` at route-handler level.
- Data-integrity MUSTs: prod has `FORCE_REAL_PRISMA=true`, `DEMO_PICKS_ENABLED` unset, `DATABASE_URL` at Neon; `seedPicks()` gated on `NODE_ENV !== "production"`; `FRESHNESS_THRESHOLD_MS` enforced — stale data triggers alert, not a pick; every published pick carries `dataFreshnessAt` within window and `modelVersion`.
- Security MUSTs include: admin/cockpit routes return 404 (not 403) for non-admins; Stripe webhook signature validation; rate limiting on auth endpoints (Upstash or middleware).
- Pre-deploy hard gate order: install -> db:generate -> typecheck (0 errors) -> lint (0 warnings) -> test -> build -> guardrails -> deploy:ready; post-deploy: `npm run smoke:prod` (banned-phrase scan, security-header audit, parallel route checks).
- Day-1 monitoring: Vercel, Stripe, Upstash, Neon dashboards bookmarked; manual `/cockpit` health check 1x/day for 7 days then weekly.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Server-side confidence redaction for FREE tier (strip from JSON, not just UI) — TRUST-SIGNAL
- "Collecting…" instead of numeric claims while performance stats disabled; >=100 settled picks gate before enabling — TRUST-SIGNAL (honest sample-size discipline)
- Stale data triggers alert, not a pick; every pick carries freshness + model version — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
No — launch-ops checklist with no modeling signal; trust posture is already encoded elsewhere.
