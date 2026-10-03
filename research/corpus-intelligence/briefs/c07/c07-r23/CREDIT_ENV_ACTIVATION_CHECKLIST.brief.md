# ops/CREDIT_ENV_ACTIVATION_CHECKLIST.md
## What it is (1-2 sentences)
Env activation checklist for spending cloud credit/free lanes on LLM inference (Cerebras free lane, Groq internal, Bedrock/Vertex/Azure credits) — with smoke tests proving the key is really in use and a no-silent-fallback rule.
## Key metrics/methods (formulas where given, else "not specified")
not specified — smoke tests per provider: Cerebras free lane requires both `CEREBRAS_API_KEY` and `CONTENT_FREE_LANE_ENABLED=true`, usage ledger must show Cerebras model id (not silent Anthropic fallback); Groq internal route: `INTERNAL_LLM_BASE_URL=https://api.groq.com/openai/v1`, model `llama-3.3-70b-versatile`, smoke on an internal classification/draft call; Bedrock: `CLAUDE_PROVIDER=bedrock`, region `us-east-1`, eligibility is InvokeModel only; Vertex and Azure AI Foundry (Claude) analogous with model maps; Azure founder must confirm credit SKU covers Claude Foundry (older MS sponsorship excluded Anthropic).
## Data sources named
none — LLM providers only (Cerebras, Groq, AWS Bedrock, Google Vertex, Azure AI Foundry).
## Findings (numbers and facts, not vibes)
- Failure-visibility rule: if a key is missing, the provider must fail closed or skip — never bill Anthropic while claiming "on credits."
- Free lanes are routed only through non-user-facing content surfaces first (smoke: route a non-user-facing surface, check the usage ledger).
- Full credit launch map lives at `docs/ops/CLOUD_CREDIT_LAUNCH_MAP.md`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: cost-governance for LLM inference spend; the no-silent-fallback principle is a spend-integrity rule, not sports signal.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the no-silent-fallback pattern for any GSE LLM-provider routing: key missing → fail closed/skip, with a usage-ledger smoke test proving the credits are real.
