# docs/ops/JYNX_FAILOVER_AND_MODEL_MAPS.md
## What it is (1-2 sentences)
The complete configuration doc for Jynx (GSE's LLM routing layer): end-to-end failover logic across free lane → cloud credits → cash Anthropic, plus the two-layer cloud model-map configuration (catalog ids → host SKUs) with a full founder env block.
## Key metrics/methods (formulas where given, else "not specified")
Failover tree: `jynxComplete`/content path → FREE (Cerebras → secondary free OpenAI-compat; hop only on CerebrasMessagesError | OpenAiCompatError) → CLOUD CREDITS (`callClaude`, order e.g. bedrock → azure → vertex; hop only on *MessagesError | *ConfigError) → CASH Anthropic (`callClaudeMessages`). Modes: unset/`anthropic` → `[]` (cash only); `auto` → all fully-configured clouds in preference order; forced provider → that cloud first; `JYNX_CLOUD_FAILOVER=true` (default) → then other configured clouds; `false` → forced only (or empty → cash). Default preference bedrock → azure → vertex (`JYNX_CLOUD_ORDER` overrides). Studio/journal/model-court skip free-lane → start at clouds. Model-map rules: keys = exact catalog ids from model-router (`claude-sonnet-4-6`, `claude-haiku-4-5-20251001`, `claude-opus-4-8`); values = console copy-paste, never invented; missing key/bad JSON → ConfigError → next cloud or cash; every tier called (≥ sonnet + haiku) needs a key on every cloud used; free-lane models (`gpt-oss-120b`, `FREE_LANE_SECONDARY_MODEL`) are NOT in these maps. Verify: `creditStack.jynx.attemptOrder` lists configured clouds; ledger `modelName` = mapped host id; unit tests `jynx.test.ts`, `provider-dispatch.test.ts`, `jynx-examples.test.ts`.
## Data sources named
None (infra/config doc). Related docs: `JYNX_COST_STACK.md`, `JYNX_VS_AI_GATEWAYS.md`, `BEDROCK_CREDIT_INTEGRATION.md`, `CLOUD_CREDIT_LAUNCH_MAP.md`, `JYNX_OPEN_WEIGHT_FREE_MAP.md`, `JYNX_MARKET_TIER_MAP.md`; error handling: `JYNX_ERROR_HANDLING_AND_CEREBRAS.md`; code: `apps/web/lib/claude-api/jynx.ts`, `provider-dispatch.ts`, `free-lane.ts`, `providers/*`, `jynx-examples.ts`.
## Findings (numbers and facts, not vibes)
- Two-layer config (catalog ids ↔ cloud host SKUs) keeps app code free of hardcoded Bedrock/Azure/Vertex SKUs; env `CLAUDE_PROVIDER=auto` + `JYNX_CLOUD_ORDER=bedrock,azure,vertex` + maps is the full founder block.
- `cloudAttemptOrder` executable examples demonstrate: auto → `["bedrock","azure"]` for the given env; forced azure with failover on → `["azure","bedrock",…]`; inert cash path → `[]`.
- This file explicitly supersedes/contradicts nothing in the list, but pairs with CURSOR_CHEAP_WIRING_PROMPT.md's stale-OpenRouter note: cheap-model routing philosophy is consistent (free rows first).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ledger records the mapped host id (not just the cash id) — full routing traceability per call: TRUST-SIGNAL (audit-receipt culture; matches the "every claim needs audit receipts" mandate).
- Error-type-scoped failover (hop only on *MessagesError | *ConfigError): OTHER (infra resilience semantics).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME findings.
## Engine-actionable? (yes/no + one-line what)
no — LLM routing/failover infra config; no model, metric, or prediction content for the engine.
