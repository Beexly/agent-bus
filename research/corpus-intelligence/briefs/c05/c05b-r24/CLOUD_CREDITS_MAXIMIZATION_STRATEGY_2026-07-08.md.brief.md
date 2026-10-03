# ops/archive/leverage/CLOUD_CREDITS_MAXIMIZATION_STRATEGY_2026-07-08.md
## What it is (1-2 sentences)
A strategy doc plus shipped scaffolding for extracting maximum runway from AWS Activate and Google for Startups credits: route Claude inference through AWS Bedrock on GenAI credits (shipped `aws-sigv4.ts`, `bedrock.ts`, `provider-dispatch.ts` behind the existing `claude-api` seam, inert by default), run infra and a Gemini non-user-facing "free lane" on Google credits, with a verified program-by-program benefits inventory and claim order.

## Key metrics/methods (formulas where given, else "not specified")
- **AWS Activate tiers**: Founders ~$1k; Portfolio $25k–$100k (accelerator/VC); GenAI tier up to $300k, explicitly covering Bedrock/SageMaker/Trainium; Claude first-class on Bedrock.
- **Google for Startups Cloud**: AI-first startups up to $250k year-1 / $350k over 2 yrs (requires meaningful Gemini usage); non-AI track up to $200k; year 2 covers only 20% of usage (up to $100k); general credits do NOT cover Anthropic — one verified exception: $10k Anthropic partner-model credit on Vertex (request via Google AE).
- **Claude pricing parity**: Bedrock = Vertex = direct Anthropic API; Batch = up to 50% off; prompt caching = up to 90% off cached input; both stack with credits.
- **Prompt-caching floor**: `cache_control` only engages at ~2048 tokens cached prefix (Sonnet 4.6); all 7 surfaces' system prompts below it (largest ≈650 tokens), so caching is a silent no-op — book no savings from it until a static prompt exceeds the floor within the 5-minute TTL.
- **Activate benefit inventory (verified 2026-07-08)**: Datadog Pro 1 yr free (claim before any organic trial — existing customers ineligible); Stripe ~$500 fee credits (12-mo clock from activation; ≈ fees on ~$11k Pro-tier volume); Amplitude Growth 1 yr free (~$10k list); support credits ($350 Founders / up to $10k Portfolio); SaaS bundle (Notion 6mo, Slack 30% off, Intercom 12mo free, HubSpot up to 75% off, Mercury $750); GenAI Accelerator up to $1M credits (8-week, ~40 startups/yr); training/certification NOT credit-eligible.
- **Google benefit inventory**: Enhanced Support up to $12k/1 yr; Redis Cloud up to $25k; Workspace Business Plus free 12 mo (~$264, 31-day trap on paid Workspace); Mixpanel 1 yr free; Google Ads 2× match (spend $500→$1,000, up to $1,400→$2,800; new-advertiser only, <14-day account, ~35-day verification, 60-day spend window — time to launch week).
- **Critical eligibility pitfall**: Activate credits cover Anthropic only as Bedrock 3P spend via `InvokeModel`/`Converse` (the shipped adapter's exact API); Claude-Platform-on-AWS (Marketplace billing) is NOT covered — never "upgrade" to it while credits remain. Exclusions: Mechanical Turk, ProServe, Training. Credits expire ~12–24 months; re-applying grants only the difference.
- **Stackable programs**: Anthropic Claude for Startups (free credits + highest rate limits, open with/without VC, selection weighs usage); Neon self-funded up to $1k (<$1M funding, MVP); Stripe via Activate (one redemption per lifetime — never burn the slot on a perk-code); Vercel $1.2k Activate side-path (may consume the once-ever Vercel-for-Startups slot before a future $30k claim — confirm terms); Microsoft for Startups $5k Azure (Claude explicitly excluded from Azure sponsorship — the Azure-for-Claude play is dead); Vercel $30k / GitHub $10k / Redis $10k / Neon $100k all accelerator/VC-gated — one accelerator affiliation flips all five unlocks at once.
- **Value ladder**: (1) Claude→Bedrock on credits; (2) Batch on top (50%); (3) Gemini free lane via OpenAI-compatible `internal-llm.ts` seam (`INTERNAL_LLM_BASE_URL/INTERNAL_LLM_MODEL/INTERNAL_LLM_API_KEY`, env-only, zero code); (4) BigQuery for historical nflverse PBP + calibration analytics; (5) selective infra migration; (6) keep Vercel+Neon while cheap.
- **Inference provider seam endpoints**: Groq `https://api.groq.com/openai/v1`, Together AI `https://api.together.xyz/v1`, Fireworks `https://api.fireworks.ai/inference/v1`, Gemini `https://generativelanguage.googleapis.com/v1beta/openai`.
- **Bedrock activation runbook**: 6 steps — console model access + exact model ids into `BEDROCK_MODEL_MAP`; IAM principal scoped to `bedrock:InvokeModel` only (prefer STS); env staging first, `CLAUDE_PROVIDER` not set until smoke; staging smoke with `modelName` assertion proving credit usage; per-surface `callClaudeMessages`→`callClaude` adoption lowest-stakes first (`brief`, `calibration-insight`); batch layering.
- **Guardrails**: unmapped models fall back to Anthropic rather than inventing ids; Bedrock results carry Bedrock model id as `modelName` in the cost/usage ledger (observability against silent fallback); runtime routing gated separately from agent AWS gates (`FABLE_AWS_*` remain off); no secrets in code.
- **Ops workflows**: Neon branch-per-experiment pattern for backtests/settlement dry-runs (connection-string swap, delete branch after — credit hygiene); Bedrock cost reconciliation via AWS Cost Explorer (`ce:GetCostAndUsage` grouped by SERVICE) against the `credit-pool` dashboard + `FABLE_AWS_MAX_MONTHLY_COST_USD` ceiling.
- **Three independent ways to pay the Claude bill** (priority): AWS Bedrock (up to $300k) → Anthropic Claude for Startups credits (direct API, no code change) → Google Vertex $10k partner credit (drop-in sibling provider).

## Data sources named
- Historical analytics target: nflverse PBP via BigQuery (cheap historical PBP + calibration analytics strengthening the expected-metrics IP).
- Programs: AWS Activate (GenAI tier), Google for Startups Cloud, Anthropic Claude for Startups, Neon self-funded tier, Microsoft for Startups, Datadog for Startups, Amplitude, Mixpanel, Redis Cloud, Intercom, Stripe, Vercel for Startups, GitHub for Startups, Together AI / Groq / Fireworks / Modal / Mistral startup programs, Google AI-First NA accelerator, AWS GenAI Accelerator.

## Findings (numbers and facts, not vibes)
- Single largest variable cost is LLM inference (Anthropic API); the credits play offsets it directly.
- Shipped inert scaffolding: zero-dependency SigV4 signer (`aws-sigv4.ts`, correctness pinned to AWS's official `get-vanilla` known-answer vector), Bedrock `InvokeModel` adapter returning identical `ClaudeMessagesResult` shape, `callClaude()` dispatcher with transparent Anthropic fallback on any error.
- Prompt caching currently inert: all 7 surfaces' system prompts below the ~2048-token cache floor (largest ≈650 tokens) — no savings to book.
- Stripe fee credit ≈$500 covers ≈$11k of Pro-tier volume; one redemption per lifetime — claim via Activate, never via a small perk-code.
- Google Ads 2× match timed to launch week is named the acquisition lever.
- Founder still owed at doc time: confirm AWS Activate tier granted; Bedrock model access + verified model ids; Google credit amount/track + Gemini AI Studio key; monthly Bedrock cap; staging smoke test.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: Claude-inference routing to Bedrock under credits with `modelName` ledger observability — operational, not engine-signal.
- **OTHER**: BigQuery as the named capability unlock for large-scale historical nflverse PBP + calibration analytics — direct engine backing-store option.
- **OTHER**: Neon branching as the established pattern for settlement dry-runs and calibration experiments — connects to the existing branch-only testing doctrine.
- **OTHER**: Batch API (50% off) and caching floor data — cost-engineering numbers for any future LLM-heavy engine workload.
- **TRUST-SIGNAL**: hard rule restated — internal/free lane never used for user-facing content; user-facing surfaces stay on governed Claude.

## Engine-actionable? (yes/no + one-line what)
Yes — stand up BigQuery for historical nflverse PBP + calibration analytics and use Neon branch-per-experiment pattern for calibration/settlement experiments, both named as the doc's capability unlocks.
