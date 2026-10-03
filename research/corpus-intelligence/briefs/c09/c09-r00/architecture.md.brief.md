# architecture.md
## What it is (1-2 sentences)
System architecture overview: Next.js client → API layer → prediction engine + subscription service → PostgreSQL/Prisma → Odds API ingestion → BullMQ/Redis workers. Defines the ingestion, pick-generation, and content pipelines plus the security model.
## Key metrics/methods (formulas where given, else "not specified")
- Ingestion: 30-min cron → Odds API adapter → normalizer → freshness validator rejects data >1hr old → upsert games/odds → `data.refreshed` event.
- Pick generation: `data.refreshed` → scoring algorithm → confidence score 0–100 per pick → rank by confidence → tag FREE/PREMIUM by confidence threshold → store with version + model metadata → `picks.generated`.
- Content: `picks.generated` → Claude API writes data-backed blog content (explicitly NOT a pick source) → BlogPost w/ SEO → free preview for all, full gated.
- Scalability: Redis picks cache TTL 15 min; anonymous picks fetch `revalidate: 1800`; DB reads are the primary bottleneck (read replicas planned).
- Security: paywall enforced in API route middleware (never client-side); Stripe webhooks HMAC-verified; secrets in env vars only.
## Data sources named
The Odds API (live odds for configured sports/markets); Claude API (content generation only, not picks); NextAuth sessions; Stripe.
## Findings (numbers and facts, not vibes)
- Confidence 0–100 drives FREE/PREMIUM tiering; pick generation is fully downstream of the 30-min freshness-validated ingestion.
- Picks stored with version + model metadata (auditability); content pipeline gated by subscription.
- Entitlement check sits in middleware on every API request; tier filtering server-side.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (system architecture): confidence-scoring and tiering pipeline context for the prediction engine.
## Engine-actionable? (yes/no + one-line what)
No — baseline architecture reference; no new intelligence, signals, or methods for the engine.
