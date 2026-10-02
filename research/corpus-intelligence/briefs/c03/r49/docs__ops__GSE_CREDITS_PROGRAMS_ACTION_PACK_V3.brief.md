# docs/ops/GSE_CREDITS_PROGRAMS_ACTION_PACK_V3.md
## What it is (1-2 sentences)
A 2026-07-31 action pack re-sequencing startup-program and cloud-credit claims (credits, programs, partnerships) by leverage for GSE, documenting verified on-main credit plumbing, program traps, a click-queue ordered by (value × probability) ÷ minutes, and a founder/agent handshake for env activation.
## Key metrics/methods (formulas where given, else "not specified")
Leverage sequencing rule: (value × probability) ÷ minutes. B-11 CLV free-spine note: `CLOSING_ODDS_API_KEY` ≈100/mo of 500 free — no paid Odds API reactivation required. Program values cited: PostHog for Startups ~$50k + free tier; Cloudflare for Startups up to ~$250k (historical); HubSpot up to 90% yr 1; Modal/RunPod $25k-class; Google AE $10k Vertex; Vercel ~$1.2k Activate path. Google for Startups 31-day rule: no paid Google Workspace on domain within 31 days of applying or credits can be forfeited. Laws: applications/ToS/account creation founder-only; agent wires env + smoke when keys land; never claim a program or invent a green.
## Data sources named
Credit OS paths: `apps/web/lib/claude-api/providers/` (bedrock + aws-sigv4, vertex + google-oauth, cerebras + tests); `credit-pool.ts`, `model-router.ts`, `provider-dispatch.ts`, `cost-monitor.ts`, `model-economics.ts`, `usage-store.ts`, `budget-store.ts`, `free-lane.ts`, `internal-llm.ts`, `dashboard.ts`; `docs/revenue/` (10 docs: FTC, RG partner policy, offer compliance, outreach, target-list template, …); `apps/web/lib/affiliate/ledger.ts`. Env surfaces: `CONTENT_FREE_LANE_ENABLED=true` + `CEREBRAS_API_KEY`; `INTERNAL_LLM_*`; `CLAUDE_PROVIDER=bedrock|vertex` + `BEDROCK_MODEL_MAP` / `VERTEX_MODEL_MAP`; `NEXT_PUBLIC_ANALYTICS_ENABLED` (OP-004 gated; PR #260).
## Findings (numbers and facts, not vibes)
- Verified plumbing on main: every credit won is spendable the day it lands; bottleneck is applications (mostly founder-gated).
- Keystone: `founder@galaxysportsedge.com` email (~5 min) unblocks Microsoft Founders Hub, HubSpot, NVIDIA Inception, GitHub for Startups, Notion, Linear.
- Claude credit eligibility rule: stay on Bedrock **InvokeModel** only; Marketplace/Claude-Platform-on-AWS and Azure Claude NOT eligible. (Azure Claude = InvokeModel-eligible? INFERENCE: the file only disqualifies Marketplace/Claude-Platform-on-AWS and "Azure Claude"; it does not state which Azure flavor is eligible.)
- Claim-order traps: Datadog claim via program before organic trial (one shot); Stripe one lifetime offer — save for Activate fee credit at payments go-live; Vercel ~$1.2k Activate may consume the larger Vercel-for-Startups slot — confirm terms; AWS credits expire 12–24 mo, sequential Founders→Portfolio/GenAI never parallel; don't triple analytics (PostHog already live).
- KIE update: Founders Hub moved up for KIE **GPU** only (not Claude); free-first: NVIDIA Inception + Modal/RunPod + Hugging Face for KIE Phase 0/1.
- Sportsbook CPA: HARD_REFUSE forever (`docs/revenue/`); non-gambling partnerships only; FTC disclosure required.
- Copy law for Anthropic Claude for Startups: "gated public track record," never "public track record page" (gates are OFF).
- Supersedes v2 (2026-07-30 11:45); v2 traps/copy still stand.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- B-11 CLV free-spine path (100/mo of 500 free closing-odds API calls, no paid reactivation): TRUST-SIGNAL (CLV measurement machinery on a free lane — engine calibration cost story).
- "Gated public track record" copy honesty law; sealed ledger; no invented greens: TRUST-SIGNAL.
- No QB-BEHAVIOR, COACHING, OL, or SCHEME findings.
## Engine-actionable? (yes/no + one-line what)
yes — The B-11 free CLV lane (CLOSING_ODDS_API_KEY ≈100/mo of 500 free) is a concrete free data path for CLV measurement on engine picks; the Bedrock-InvokeModel-only eligibility rule matters to the Jynx free/cloud cost routing that backs agent research throughput.
