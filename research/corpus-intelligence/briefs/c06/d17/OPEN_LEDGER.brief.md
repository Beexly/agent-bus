# ops/OPEN_LEDGER.md
## What it is (1-2 sentences)
Founder-authority ledger of what is live, open, parked, or refused across the GSE operation, updated 2026-07-30 (class_A agent residuals killed = 0). It records the "founder law" change log, estate/PR residuals, and the credits/action-pack status.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. (Operational ledger, not a modeling doc; no formulas.)
## Data sources named
- Production Neon dual URLs (gse-postgres)
- Free-spine adapters (game creation WS-B still absent — "do not claim spine live")
- Credits program: docs/ops/GSE_CREDITS_PROGRAMS_ACTION_PACK_V3.md
- Free capacity: CEREBRAS_API_KEY + CONTENT_FREE_LANE_ENABLED; Groq INTERNAL_LLM_API_KEY
- Optional free AI keys (Groq/xAI)
- Founder email: Keystone "founder@" (Zoho if Google 31-day live)
## Findings (numbers and facts, not vibes)
- Class A: 0 — agent-owned residuals killed.
- Class B done 2026-07-30: Neon dual URLs live; CRON_SECRET rotated; production redeployed; smoke green (gamma 401/200, db ok); GEMINI_API_KEY set.
- Class B open: `prove:neon` script run pending; push verified 7-file build-fix patch (main HEAD `4b4ae1e` does not build; prod pinned to `1dbcca9`); ingestion stale (paid Odds API key deactivated ~Jul 25 — free-spine patch is the fix, never re-buy paid key for free path); optional free AI keys (Groq/xAI); explicit YES-only items: LIVE_BOARD, PUBLISH_LEDGER, public picks ladder, Phase C, #226.
- Law enforcement 2026-07-30: PERFORMANCE_STATS_ENABLED and PUBLIC_PICKS_ENABLED were both true in violation of founder law; both set false.
- Class C (gated/parked): Overlay CV; Sportsbook CPA forever blocked (HARD_REFUSE); LiteLLM proxy optional (ai-control-plane live SoT); autonomous external agent execution.
- SoT: docs/ops/CANONICAL.md + Production /cockpit.
- APEX recon 2026-07-31: estate residuals PR #258 (A-8 brand + APEX), PR #261 (Omnibus A-1 trademarks), conformal research branch held.
- Traps to avoid: Stripe once; Vercel slot; Datadog before trial; AWS sequential; Claude = Bedrock InvokeModel only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Free-spine adapter status + game-creation absence — the paid Odds API deactivation (~Jul 25) is a TRUST-SIGNAL relevant caveat: any 2026 historical odds features derived from that window carry a coverage gap.
- OTHER: Explicit-YES gating (LIVE_BOARD, PUBLISH_LEDGER, public picks ladder, Phase C) — nothing ships to public surfaces without founder sign-off; relevant context for why engine outputs stay internal.
- OTHER: "Never re-buy paid key for free path" — free-data spine is the standing data strategy; engine data sources skew free-tier (NWS, nflverse, Cerebras/Groq).
## Engine-actionable? (yes/no + one-line what)
No — pure ops/authority ledger; only context on gating and the Odds-API coverage gap.
