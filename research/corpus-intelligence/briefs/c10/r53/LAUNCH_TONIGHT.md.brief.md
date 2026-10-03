# docs/ops/archive/root-museum/LAUNCH_TONIGHT.md
## What it is (1-2 sentences)
A 2026-05-20 silent-launch runbook: account setup checklist, exact production env-var block (feature gates defaulted off), ~90-minute critical-path steps, and a 30-day silent-collection plan for accumulating canonical history before public picks and stats go live.
## Key metrics/methods (formulas where given, else "not specified")
- Cost: ~$11 domain (galaxysportsedge.com, Cloudflare, expires 2027-05-20) + ~$30/mo The Odds API 20k requests/mo tier (free 500/mo tier exhausts "in a day at our 30-minute refresh cadence").
- Gate thresholds: `DERIVED_MODEL_HISTORY_ENABLED=true` at ~30 settled picks (day 7); `PUBLIC_PICKS_ENABLED=true` when slate healthy (day 14); `PERFORMANCE_STATS_ENABLED=true` at 100+ canonical settled picks (day 21-30); then `stripe:seed` and Stripe Live mode (day 30).
- Env gates listed: `CANONICAL_HISTORY_ENABLED=true`, `DERIVED_MODEL_HISTORY_ENABLED=false`, `PUBLIC_PICKS_ENABLED=false`, `PERFORMANCE_STATS_ENABLED=false`, `MIN_DATA_QUALITY_FOR_GAME_LOG=40`, `MIN_SETTLED_PICKS_FOR_LEARNING=100`, `CONFIDENCE_DISPLAY_MODE=labels`, `OUTCOME_LEARNING_ENABLED=false`, `DEMO_PICKS_ENABLED=false`, `DEV_FAKE_ADMIN=false`.
## Data sources named
The Odds API (20k tier), Neon Postgres (us-east-2 per this file; CLAUDE_PICKUP.md says us-east-1 — INFERENCE: region inconsistent between the two files), Upstash Redis, Google OAuth, Stripe test keys, Anthropic API (blog content only, "never for picks").
## Findings (numbers and facts, not vibes)
- 12 steps: 7 done by last update (domain, Vercel project, Anthropic key, Google OAuth client, NextAuth+Cron secrets, Odds API key, Stripe test keys); 5 pending (Neon, Upstash, git push, Vercel env paste, deploy + smoke).
- Routes live and rendering 200: `/`, `/picks`, `/methodology`, `/performance`, `/pricing`, `/observatory`, `/vault`, `/about`, `/press`, `/contact`, `/responsible-play`, `/terms`, `/privacy`, `/dashboard`, `/cockpit`, `/promotions`, `/brief`, `/blog`.
- SEO: `app/robots.ts`, `app/sitemap.ts`, dynamic OG image 1200x630; footer social row defaults to `pickpilot` handle (edit `apps/web/lib/brand.ts` → `SOCIAL`).
- Trust gates defaulted off; site renders silent-collection state honestly, no fake stats.
- Delegate-to-Codex prompts included for Vercel build errors, Neon connection strings, OAuth redirects, Stripe webhooks.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Gates are server-side enforced so numbers can't be shown before they're earned (30/100 settled-pick thresholds) — the platform's core anti-fabrication mechanism.
- OTHER: Silent-collection doctrine — marketing surface live day 1, model evidence accumulates privately before any public claim. Relevant to calibration-state labeling today.
## Engine-actionable? (yes/no + one-line what)
No — deploy runbook, no predictive content. The staged-gating thresholds (30/100 picks) could inform confidence-tier gating, but they are process numbers, not model parameters.
