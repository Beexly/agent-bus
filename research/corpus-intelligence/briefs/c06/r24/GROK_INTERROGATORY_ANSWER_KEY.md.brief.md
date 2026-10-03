# ops/archive/prompts/GROK_INTERROGATORY_ANSWER_KEY.md
## What it is (1-2 sentences)
The founder-only answer key for grading four sharded Grok code-audit interrogatories (billing, ingestion, engine, public-api): correct answers quoted from exact file:line, used to judge whether a shard actually read the code.
## Key metrics/methods (formulas where given, else "not specified")
- Grading rule: a shard that answers all interrogatories with quotes has demonstrably read the code — trust its verdict; one wrong/unquoted answer means discount and re-run.
## Data sources named
- Code files cited: apps/web/lib/entitlements.ts:20, app/api/subscriptions/checkout/route.ts:77,79, lib/stripe.ts:84, packages/data-ingestion/src/config.ts, packages/ingestion-pipeline/src/quiet-board.ts, packages/prediction-engine/src/availability-role-tenure.ts:61-62/240-241, packages/ingestion-pipeline/src/process-sport.ts, apps/web/app/api/picks/route.ts ~63/153, apps/web/lib/data-reliability/public-freshness-gate.ts.
## Findings (numbers and facts, not vibes)
- Billing: DEV_FAKE_ADMIN grants ELITE, disabled in prod by NODE_ENV hard-gate; double-checkout returns HTTP 409 code "already_subscribed"; Stripe customer idempotency key `gse-customer-${userId}`; unmapped price on ACTIVE paid renewal holds tier, never downgrades (asymmetry: no guard on NEW subscription.created).
- Ingestion: freshness threshold 4h (ODDS_FRESHNESS_MAX_HOURS override); quiet-board horizon 24h, boundary inclusive (`<=`, game exactly at now+24h is INSIDE); quiet write = SUCCESS with oddsInserted 0, and the public freshness gate only counts runs with oddsInserted > 0 so quiet skips can't fake freshness; fetch helper `noStoreFetch` = cache: "no-store".
- Engine: shadow-lock fields priced:false + status:"shadow" (literal types) with canPublishProjections:false; proof-receipt modelProb minted null (confidence/100 would be fabricated); clvLock protected by upsert update:{} (no clvLockLine/clvLockPrice in update); pickSelectionSide slices at " ML" for moneyline.
- Public API: FREE viewers get confidence present-as-null; premium picks excluded by tier WHERE clause (distinct from confidence nulling); stale-data 503 has reason "stale_data" + bootstrapMode:false; performance withheld below MIN_SETTLED_PICKS_FOR_LEARNING (insufficientSample:true); seed rows excluded in prod via modelVersion NOT "v5.0.0-seed".
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: modelProb minted null (never fabricated stat), freshness/anti-fake gates, readiness-honest performance withholds.
- OTHER: ingestion quiet-board/freshness mechanics, shadow-publish locks, Stripe idempotency, audit grading methodology.
## Engine-actionable? (yes/no + one-line what)
Yes — the null-modelProb rule and shadow-lock/quiet-board mechanics are reusable trust invariants for any public prediction surface.
