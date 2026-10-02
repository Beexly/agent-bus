# ops/JYNX_COST_STACK.md
## What it is (1-2 sentences)
Spec for Jynx, GSE's unified AI routing/cost stack: a coherent decision ladder (free-lane → AWS Bedrock → Azure Foundry → Google Vertex → Anthropic cash last) across model tiers (haiku/sonnet/opus) with credit-pool ledger attribution. Not a separate binary — code at `apps/web/lib/claude-api/jynx.ts`, `jynx-complete.ts`, `free-lane*`, `provider-dispatch.ts`, `model-router.ts`.
## Key metrics/methods (formulas where given, else "not specified")
- Decision stack per call: surface (studio|content|brief|…) → model tier (haiku/sonnet/opus) via model-router → free-lane eligibility → cloud attempt order (default bedrock → azure → vertex, failover ON) → Anthropic cash last-resort → ledger modelName → credit pool.
- Lanes by priority: (1) Cerebras free (content/brief, gpt-oss-120b primary); (1b) secondary free host (Gemma 4 / Nemotron free OpenAI-compat); (2) AWS Bedrock (full Claude via Activate credits); (3) Azure Foundry (bill/credits, verify SKU); (4) Google Vertex (partner credits); (5) Anthropic cash (emergency only).
- Tiers: Haiku = brief, calibration-insight (cheap); Sonnet = studio, journal, content, court (default reasoning); Internal LLM = classify only, never public claims; Claude Max Pro = human coding agents only.
- Pass criteria: free-lane content shows `gpt-oss*`; studio shows cloud id not plain `claude-*` when auto+configured.
- Law: never claim free/credits while ledger shows cash Anthropic; never free-lane studio/journal/model-court until quality validated; never invent model map ids; LIVE_BOARD/public picks stay gated by product law — Jynx is cost routing only.
- Call-site rules: prefer `jynxComplete`/`generateContentMessages`/`callClaude` over raw `callClaudeMessages` (skips credits); no hard-coded provider SDKs in new code.
- Ops truth surface: `creditStack.jynx` (mode, configured clouds, attempt order, content plan); usage ledger maps modelName → pool (aws_activate / azure_foundry / vertex_partner / cerebras_free / anthropic_direct).
## Data sources named
None (model providers, not data feeds). Env keys listed in the doc (values not given): CEREBRAS_API_KEY, AWS_ACCESS_KEY_ID/SECRET_ACCESS_KEY, AWS_BEDROCK_REGION=us-east-1, AZURE_FOUNDRY_RESOURCE/API_KEY, GOOGLE_VERTEX_PROJECT/REGION, GOOGLE_APPLICATION_CREDENTIALS_JSON, ANTHROPIC_API_KEY (emergency only); knobs CLAUDE_PROVIDER, JYNX_MODE, JYNX_CLOUD_ORDER, JYNX_CLOUD_FAILOVER.
## Findings (numbers and facts, not vibes)
- Recommended cloud order: bedrock, azure, vertex (overridable via JYNX_CLOUD_ORDER).
- Founder env recommendation: enable all configured clouds cooperatively — Jynx uses them, failover tries others unless JYNX_CLOUD_FAILOVER=false.
- See-also docs: JYNX_FAILOVER_AND_MODEL_MAPS.md, JYNX_VS_AI_GATEWAYS.md, JYNX_MARKET_TIER_MAP.md, JYNX_OPEN_WEIGHT_FREE_MAP.md, CLOUD_CREDIT_LAUNCH_MAP.md, CREDIT_ENV_ACTIVATION_CHECKLIST.md, FUNDING_PARTNERSHIP_ALIGNMENT_MASTER.md.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pure AI cost-routing infrastructure; the only adjacent value is that calibration-insight work is routed to the cheap Haiku tier and "never claim free/credits while ledger shows cash" is a cost-honesty invariant.
## Engine-actionable? (yes/no + one-line what)
No — AI routing/cost spec; no football signal or data-source change.
