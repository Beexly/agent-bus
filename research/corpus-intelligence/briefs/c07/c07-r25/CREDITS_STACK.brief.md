# ops/archive/leverage/CREDITS_STACK.md
## What it is (1-2 sentences)
An ops table of max free/paid program leverage (Neon, Upstash, Vercel, Stripe, Anthropic, Google Cloud, AWS/Azure, Cloudflare, The Odds API) with a one-sitting activation order and refusal rules.

## Key metrics/methods (formulas where given, else "not specified")
not specified (operational, not mathematical). Notable quantities: Vercel "gamma + 11 crons"; Stripe tiers FREE/PRO/ELITE on `/values`.

## Data sources named
Named providers only: Neon (free/scale Postgres, SoR Prisma, env `DATABASE_URL`), Upstash Redis (free tier, multi-instance online store later), Vercel (Pro/Hobby crons, `/api/cron/*` + CRON_SECRET), Stripe (live keys, entitlements), Anthropic/Claude API + credits programs (internal tools only; never customer pick generator), Google Cloud (free trial/credits, batch OCR eval DARK only), AWS/Azure startup credits, Cloudflare free DNS/CDN for galaxysportsedge.com, The Odds API (paid, enrichment only — NOT spine).

## Findings (numbers and facts, not vibes)
- Activation order: 1) Neon → DATABASE_URL + DIRECT_URL; 2) Vercel env (CRON_SECRET, NEXTAUTH_*, Stripe, Neon); 3) Stripe live prices → reconcile-entitlements; 4) CLOSING_ARCHIVE_PATH writable for gamma durability; 5) Upstash only when multi-instance memory proven insufficient.
- Refusals: never claim "credits activated" without env proof; never put the Odds API on the critical path after the gamma free path.
- The Odds API is enrichment only — not spine — and a founder residual Phase C item.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Provider-stack inventory (infra/finance ops) — [OTHER]
- "Never claim credits activated without env proof" as honesty discipline — [TRUST-SIGNAL]

## Engine-actionable? (yes/no + one-line what)
no — Infra cost-ops with no prediction value; the only durable note is that The Odds API is enrichment-only, never on the critical path.
