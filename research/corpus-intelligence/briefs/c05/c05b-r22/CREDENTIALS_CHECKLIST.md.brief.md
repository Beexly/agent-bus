# ops/CREDENTIALS_CHECKLIST.md
## What it is (1-2 sentences)
Founder/ops credentials checklist for the production honesty path: required secrets (Neon DB dual URLs, CRON_SECRET rotation, Stripe, Upstash), free-AI cost-control keys, analytics, and optional enrichment — plus the agent's IDLE stop conditions naming founder blockers.
## Key metrics/methods (formulas where given, else "not specified")
- Smoke sequence for CRON_SECRET rotation: new → 200; previous → 200; garbage → 401; no auth → 401.
- Dual-secret rotate playbook: (1) generate new primary; (2) set CRON_SECRET_PREVIOUS = current CRON_SECRET; (3) set CRON_SECRET = new primary; (4) deploy/env sync; (5) smoke; (6) clear PREVIOUS after all callers use new.
- Neon dual-URL rules: project gse-postgres as SoT; DATABASE_URL = pooled (Prisma); DIRECT_URL = unpooled (migrations); never map sports-db `storage_*` into Production aliases; redeploy after any Production env change.
- Law: THE_ODDS_API_KEY is enrichment only, oddsApiRequired=false on Gamma.
- xAI data-share credits: optional ~$150/mo (US); do NOT enable for governed/private prompts unless founder accepts training risk.
## Data sources named
Neon Postgres (gse-postgres, pooled/unpooled URLs); Vercel Production env; Stripe; Upstash Redis; Cloudflare Web Analytics beacon; Microsoft Clarity; Groq (llama-3.3-70b-versatile internal tier); Google AI Studio (Gemini); Anthropic Console; console.x.ai.
## Findings (numbers and facts, not vibes)
- xAI data-share cost: ~$150/mo (US), explicitly opt-in only.
- Agent IDLE stop conditions include: LIVE_BOARD/PUBLISH_LEDGER flips, Phase C (5b) remeasure with paid Odds, #226 HEOS merge YES, Neon/Upstash/Stripe live / Production CRON_SECRET values, free AI keys, public claim surfaces / legal watermark.
- Law: agent does not invent secrets; does not flip LIVE_BOARD; does not claim prod green without smoke.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: "does not claim prod green without smoke" — production-honesty discipline; secrets-never-invented law mirrors the no-invented-scores trust posture.
- OTHER: credential inventory is ops-only, no engine intelligence value beyond hygiene.
## Engine-actionable? (yes/no + one-line what)
No — pure ops credential hygiene; the only engine-relevant law (Odds API enrichment-only, never spine) is already recorded.
