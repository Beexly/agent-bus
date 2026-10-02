# docs/launch-prep/01-account-setup.md
## What it is (1-2 sentences)
Pre-launch account-setup checklist for owner Garrett: the sequenced, step-by-step procedure for creating, billing, and wiring every external account the GSE platform needs in production (domain → Vercel → Postgres → OAuth → secrets → APIs → Stripe → Redis → env vars → seed → readiness check). Estimated total: ~1.5 hours, ~$41/mo burn until the paywall flips.

## Key metrics/methods (formulas where given, else "not specified")
- not specified (no sports-math formulas; operational checklist).
- Launch gate env defaults: `PUBLIC_PICKS_ENABLED=false`, `PERFORMANCE_STATS_ENABLED=false`, `FEATURED_PICK_PROMOTION_ENABLED=false`, `CONFIDENCE_DISPLAY_MODE=labels`, `MIN_DATA_QUALITY_FOR_GAME_LOG=40`, `MIN_SETTLED_PICKS_FOR_LEARNING=100` — no feature flips until owner approves.
- Stripe pricing in the plan: "Pro" $19/mo, "Elite" $49/mo recurring.

## Data sources named
- The Odds API ($30/mo 20k requests tier = minimum for a real public slate updated every 30 minutes; 500 requests/mo free tier for testing) — labeled "the hard-blocker for real picks."
- Anthropic API (~$5 to start, <$20/mo expected for content at launch volume; blog/content generation only — "picks are never AI-generated").
- Managed Postgres: Neon (recommended, region `us-east-2` paired with Vercel `iad1`) or Supabase (pooled/transaction `DATABASE_URL` + direct/session `DIRECT_URL`).
- Hosting: Vercel (free tier handles launch volume); Upstash Redis (free tier, `rediss://` TLS) for BullMQ worker queue; Google OAuth credentials; Stripe webhooks at `https://<APP_HOSTNAME>/api/webhooks/stripe`.

## Findings (numbers and facts, not vibes)
- Monthly burn: domain ~$1 + The Odds API $30 + Anthropic ~$10 = ~$41/mo (INFERENCE: Vercel/Neon/Stripe/Upstash all free tier until scale/charges).
- Domain registrar recommendation: Cloudflare Registrar cheapest (no markup); WHOIS privacy enabled.
- Sequencing constraint: domain must come first (Stripe webhooks, Google OAuth authorized domains, and Vercel deploy URLs all depend on it).
- Readiness check: `npm run deploy:ready` probes Postgres, Stripe API, The Odds API, and Anthropic — green/red per service before launch.
- Picks pipeline is built to back off gracefully on quota exhaustion — "you won't get a surprise bill — usage is hard-capped by the plan."
- Stripe stays in Test mode with the paywall off for a 30-day silent collection period; live keys only after legal review.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- `MIN_SETTLED_PICKS_FOR_LEARNING=100` and `MIN_DATA_QUALITY_FOR_GAME_LOG=40` gates — TRUST-SIGNAL (sample-size discipline before the engine learns; calibration-state honesty).
- 30-day silent collection + Test-mode Stripe before charging — TRUST-SIGNAL (evidence before monetization posture).
- The Odds API as "the hard-blocker for real picks" with 30-min slate refresh cadence — OTHER (market-data freshness requirement for any live picks surface).

## Engine-actionable? (yes/no + one-line what)
No — operational launch checklist, no engine math; the 100-settled-picks learning gate is a useful calibration-state reference but already in the gates.
