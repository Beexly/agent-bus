# docs/ops/archive/leverage/MASTER_PLAN_NARRATIVE.md

## What it is (1-2 sentences)
The canonical GSE master plan (narrative version, updated 2026-07-29, polish pass; marked non-primary — operator SoT is `CANONICAL.md` + Production /cockpit), covering product law, runtime state, ops unlocks, the AI control plane, a ranked startup-leverage/credit stack, and the legal sports-data allow/deny table. Exit line: `class_A=0`, `LIVE_BOARD=off`, `oddsApiRequired=false`, next=`P0_ENV_THEN_KEYS_THEN_CREDITS`.

## Key metrics/methods (formulas where given, else "not specified")
No sports-statistical formulas. Ops numbers from the file: cron matrix = 18 routes · 12 scheduled · 0 edge, auth via `cronAuthError`; gse-verify alias = `npm run typecheck && npm run lint && (cd apps/web && npx vitest run) && node scripts/guardrails/trust-gate.mjs && node scripts/guardrails/em-dash-scan.mjs`. Leverage figures: Microsoft Founders Hub ~$1k Azure without investor code (→ ~$150k path), AWS Activate Founders ~$1k–$5k, GitHub for Startups $10k credits (outside funding + partner required), Sentry for Startups ~$5k/12mo, Resend free ~3k emails/mo, Vercel AI Gateway ~$5/mo free, Inngest ~50k events, Google Cloud trial ~$300, Cloudflare for Startups bootstrapped ~$5–10k. AI control plane: volume = Gemini Flash-Lite → Groq; reason = xAI Grok → Anthropic; privacy rule `store_prompts_in_spend_logs=false`, xAI data-share OFF for governed use.

## Data sources named
Legal sports-data table — ALLOWED: Sportradar official trial; league APIs under ToS; NOAA / public weather / census; nflverse / openfootball / MoneyPuck (cleared licenses); ESPN public / balldontlie / henrygd (ToS-cleared); FPL/EPL free data only with written PL commercial permission. FORBIDDEN: sportsbook CPA; Oddsjam-as-+EV product; Pinwheel book-history scrape; unauthorized sportsbook scrape / WS intercept; unauthorized book feeds; free path requiring paid Odds; ungated commercial FPL scrape. Registry: `packages/stats-api/src/sources/external-registry.ts` · `EXTERNAL_LEVERAGE_MAP.md`. Founder locks: Public ROI / guaranteed edge = blocked; LIVE_BOARD off; PUBLISH_LEDGER off; sportsbook CPA permanently blocked. Production-harden rules H1–H6 (Node cron, no secrets in logs, force-dynamic, `{ok:false,error}` API errors, missing Stripe tier → free/refuse, missing DATABASE_URL → clean refuse).

## Findings (numbers and facts, not vibes)
- Reality snapshot (Pass 4 complete): SHIPPED = dual CRON_SECRET auth, cron nodejs + force-dynamic, free Gamma path, honest board, prefire gate, own-feed PIT refuse, methodTag CLV, trust-gate / AI Council CI, CRON_MATRIX + smokes; CODE_READY = hydration stubs, Phase C harness (unverified), multi-provider keys via control-plane (no LiteLLM required), durable receipts (needs Neon); PARKED = overlay optical CV, Poly1305/CF Access/SPIFFE digression.
- Human action list: P0 = fix/confirm Production DATABASE_URL + DIRECT_URL, re-verify CRON_SECRET, redeploy, gamma smoke expecting 401 then 200, create Gemini + Groq + xAI keys; P1 = credit-program applications; blockers named = founder-only Production Neon URLs + smoke + free AI keys + credit apps.
- SoT stack fixed: Vercel `sports-web`, Neon gse-postgres + Prisma dual URL, ai-control-plane (sealed), Stripe entitlements, Vercel crons + CRON_SECRET.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Refuse-default posture, public ROI blocked, trust-gate/AI Council CI, evidence receipts + ledger, PIT refuse — the trust-ops layer: **TRUST-SIGNAL**
- Legal sports-data allow/deny table as the engine's sanctioned source whitelist (nflverse, openfootball, MoneyPuck, ESPN public, balldontlie, henrygd) with explicit bans: **OTHER** (data-legality boundary for engine ingestion)

## Engine-actionable? (yes/no + one-line what)
Yes — the allow/deny source table is the legal ingestion whitelist for engine data wiring; `external-registry.ts` is the existing registry to wire against.
