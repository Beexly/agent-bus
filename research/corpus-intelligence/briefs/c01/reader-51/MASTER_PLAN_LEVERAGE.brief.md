# ops/archive/leverage/MASTER_PLAN_LEVERAGE.md
## What it is (1-2 sentences)
A credit & free-tier atlas (updated 2026-07-29) listing bootstrapped-honest tools that fit the GSE stack — chosen SoT, free inference keys, cloud-credit programs, observability/auth free tiers, legal sports data sources, and $0 infra — with a founder-priority sequence.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no formulas; it is an inventory of free-tier resource programs).

## Data sources named
- Tier 4 legal sports data: **nflverse, openfootball, MoneyPuck, Open-Meteo, NWS** (cleared licenses when ToS allows commercial); ESPN public / balldontlie / henrygd NCAA / CFBD (rights-check in registry); Sportradar Marketplace trial (official sandbox only); The Odds API (paid enrichment only, not free-path spine). **Permanent drops:** Action Network / Oddsjam CPA / Pinwheel books (DROP permanently), sportsbook CPA, unauthorized scrape, public ROI.

## Findings (numbers and facts, not vibes)
- Tier 0 SoT: Neon gse-postgres (prod DB + branching + pgvector), Vercel sports-web, Prisma dual URL (DATABASE_URL + DIRECT_URL), LiteLLM for multi-provider spend control.
- Tier 1 free inference: Google AI Studio (Gemini free), Groq (high free RPM/TPM), xAI console (trial credits; optional ~$150/mo data-share, irreversible opt-in), Vercel AI Gateway (~$5/mo free credits/team), OpenRouter (failover), Anthropic Console (signup credits + Startups program).
- Tier 2 credit ceilings (public claims, "verify on official portals before applying"): Microsoft Founders Hub $1k→$5k→…→$150k; AWS Activate Founders $1k–$5k, Portfolio up to ~$100k; Cloudflare for Startups $5–10k (partner $100k–$350k class); Datadog for Startups up to $100k claims; Redis for Startups up to $25k claims; GitHub for Startups NOT bootstrapped (funding + partner required).
- Tier 3 free: Sentry startups (~$5k/12mo), PostHog (high free events), Langfuse Hobby, Helicone, Clerk free (~10k MAU class), Auth0 (~7.5k MAU), Doppler, Inngest (~50k events class), Resend, Cloudflare Zero Trust (~50 users), Microsoft Clarity.
- Tier 5 $0 infra: Oracle Always-Free Ampere (workers, Redis, Ollama, henrygd); Hetzner auction/BuyVM offline batch only — not production board.
- Gemini free flagged for free-tier training risk.
- Founder priority sequence: (1) Neon URLs + CRON_SECRET + smoke, (2) Gemini+Groq+xAI keys → LiteLLM, (3) Microsoft without code + Neon startups + CF bootstrapped, (4) Sentry + PostHog + Langfuse, (5) relationship path for GitHub/partner tiers, (6) Oracle VPS.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Data-source licensing inventory: nflverse, openfootball, MoneyPuck, ESPN public, balldontlie, henrygd NCAA, CFBD, Sportradar trial, The Odds API (paid) — usable as the legal data-feed inventory; sportsbook CPA and unauthorized scrape permanently dropped.

## Engine-actionable? (yes/no + one-line what)
Yes — Tier 4 is the standing legal data-source inventory (nflverse, openfootball, MoneyPuck, henrygd NCAA, CFBD, Sportradar sandbox, The Odds API paid) that the ingestion layer should track rights against.
