# ops/JYNX_VS_AI_GATEWAYS.md
## What it is (1-2 sentences)
Design memo positioning GSE "Jynx" — the in-app AI router inside `apps/web` — against external AI gateways (OpenRouter, LiteLLM/Helicone-style, Cloudflare AI Gateway, direct Anthropic SDK), defining its product law: burn free lanes and cloud credits before cash, with trust-gate surfaces hard-wired into routing.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no numeric metrics; qualitative comparison). Routing architecture: in-app router in `apps/web` (same deploy), ordered failover on transport/config errors across clouds → cash.
- Spend order: free (Cerebras + secondary free for content/brief only) → cloud credits (Bedrock / Azure Foundry / Vertex Claude maps) → Anthropic cash.
- Product law: free lane allowlist (free only on `content`/`brief`); studio not free by default; trust-gate surfaces stay on Claude clouds; unmapped models throw (no-guess `*_MODEL_MAP`), no silent wrong SKU.
- Model IDs: Anthropic catalog; observability via ledger `modelName` and ops `creditStack.jynx`; budget modules for blog etc.; funding-aligned spend (AWS Activate / Azure Foundry / Vertex credits before Anthropic cash).
- External-gateway fallback table: 50+ non-Claude models via one key → OpenRouter (research/non-trust); org-wide proxy → LiteLLM; edge cache in front of public AI APIs → CF AI Gateway; GSE board/content under product law → Jynx only.
- What Jynx is not: not a multi-tenant public AI gateway product; not a replacement for Claude Max Pro (human coding); not a model marketplace; not settlement/trust math — never routes board truth through LLM.
## Data sources named
- Cerebras (free lane for non-retain content/brief).
- AWS Bedrock, Azure Foundry, Google Vertex (Claude credit-cloud maps).
- Anthropic (catalog IDs; cash endpoint; Max Pro for human coding).
- OpenRouter (free model pool; research/long-tail experiments, non-trust only).
- LiteLLM / Helicone (self-host or SaaS multi-provider proxy), Cloudflare AI Gateway (edge caching/WAF, analytics).
## Findings (numbers and facts, not vibes)
- Jynx runs inside `apps/web`, one deploy — no extra gateway hop latency or second billable middleman.
- Free lane is a restricted allowlist: `content`/`brief` only; studio surfaces are not free by default; quality/trust surfaces stay on Claude clouds.
- Operator takeaway: keep Jynx as the GSE runtime router; external gateways only for non-product or research workloads that must not confuse credit accounting or free-lane policy.
- Data posture: prefer Cerebras free for non-retain; clouds per contract.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) "Never routes board truth through LLM" — trust-gate surfaces kept on Claude clouds; settlement/trust math is never LLM-routed.
- (OTHER) Free-first content / cash-last spend order (free → credits → cash) — cost discipline architecture.
- (OTHER) Loud-misconfig doctrine (unmapped models throw; no-guess MODEL_MAP) — reliability practice.
- (OTHER) No second billable middleman: in-app router keeps observability in ledger `modelName` + ops `creditStack.jynx`.
## Engine-actionable? (yes/no + one-line what)
No — this is an AI-routing/infrastructure design memo, not a predictive model or data source for the GSE engine; nothing to wire into prediction pipelines.
