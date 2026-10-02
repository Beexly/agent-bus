# ops/FUNDING_PARTNERSHIP_ALIGNMENT_MASTER.md

## What it is (1-2 sentences)
A one-page funding/partnership/credit master plan dated 2026-08-06 that consolidates all startup-credit, free-tier, and non-gambling-partner work so agents act from one source. Standing goal: drive cash AI burn to zero via free tiers, Activate credits, and startup programs while the product moat compounds.

## Key metrics/methods (formulas where given, else "not specified")
- **Click-queue prioritization formula:** (value × probability) ÷ minutes — tasks are ordered by this expected-value-per-minute score.
- **Success criteria:** `creditStack.anyCreditLaneReady === true` on prod; usage ledger shows `cerebras_free` and/or `aws_activate` spend; Anthropic cash share trending down; ≥1 non-gambling partner outreach started (founder); ≥1 startup credit program application submitted (founder).
- Otherwise not specified (no dollar targets or burn numbers).

## Data sources named
- Ops visibility API `/api/ops/public-surface-truth` → `creditStack` (booleans only) for credit-posture state.
- Internal docs referenced: Action Pack v3, CREDITS.md, CLOUD_CREDIT_LAUNCH_MAP, JYNX_COST_STACK, BEDROCK, docs/revenue/*.
- Smoke script: `node scripts/ops/smoke-free-lane.mjs`.
- Named providers/programs: Cerebras (free inference for content, wired PR #320), Bedrock/AWS Activate, Vertex/Google ($10k partner-credit path), Azure Foundry (`providers/azure-foundry.ts`), Groq internal LLM, Haiku router, Odds API free settlement spine, Claude Max Pro, Neon/Vercel/PostHog/GitHub startups, NVIDIA Inception, Anthropic Claude for Startups, Datadog.

## Findings (numbers and facts, not vibes)
- **Law:** applications are founder-only; agents wire env + smoke after keys land.
- **Sportsbook CPA = HARD_REFUSE**; sportsbook outreach never on the partner list.
- 13-item click-queue: (1) Cerebras env flip, (2) Groq internal LLM key, (3) free-lane smoke, (4) confirm `creditStack.freeLaneConfigured: true` after redeploy, (5) `founder@galaxysportsedge.com` keystone email (Zoho if Google 31-day rule), (6) NVIDIA Inception, (7) Anthropic Claude for Startups honest application (gates OFF; free-first spine), (8) AWS Activate tier confirm → Bedrock model ids, (9) PostHog/Neon/GitHub for Startups only if the free capacity will be spent, (10) fill one row of partner target list (`docs/revenue/PARTNER_TARGET_LIST_TEMPLATE.md`) in categories sports_data, creator_tool, ai_tool, cloud_tool, local_sponsor, (11) use PARTNER_OUTREACH_PLAYBOOK.md + FTC + RG policies, (12) sponsor media kit only when assets honest (`SPONSOR_MEDIA_KIT.md`), (13) one accelerator affiliation evaluation (~1 hour, multiplies AWS/Google/CF/GitHub tiers).
- **Claim-order traps:** Stripe has one lifetime offer (save for payments go-live); Vercel Activate path may consume a larger startup slot; Datadog must be claimed via program before organic trial; Google 31-day Workspace anti-stacking; AWS credits expire and are sequential (Founders → Portfolio/GenAI); Claude Marketplace on AWS is not Activate-eligible (use Bedrock InvokeModel); Claude on Azure Foundry eligible only if SKU allows (older MS sponsorship may exclude Anthropic).
- **Product moat alignment:** settlement HEALTHY · 0 overdue; contests paper (postgres durable); StatKing dark (rights-first honesty); live board/public picks OFF (trust-gate); content free-lane wire ready; credit posture API shipping.
- Partner categories that fit: sports_data, creator_tool, ai_tool, cloud_tool, local_sponsor — never sportsbook CPA.
- Agents must NOT: apply to programs, invent grant $ amounts, set LIVE_BOARD, soften trust-gate for "demo ROI", hyper-focus settlement while credits stay unflipped.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Hard-refuse on sportsbook CPA, founder-only applications, never invent grants, never claim ROI, keep trust-gate unsweetened for "demo ROI" — this file is the funding-lane extension of the founding-launch integrity doctrine.
- OTHER: Startup-credit/free-tier stack mapping (Cerebras, Groq, Bedrock, Vertex, Azure, Activate programs) and the (value × probability) ÷ minutes prioritization formula — business-ops intelligence with zero engine bearing.

## Engine-actionable? (yes/no + one-line what)
No — funding/partnership operations, not engine model content.
