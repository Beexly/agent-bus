# docs/ops/JYNX_ERROR_HANDLING_AND_CEREBRAS.md
## What it is (1-2 sentences)
The error-handling model for Jynx (hop once per lane on a closed error set, then fall through; anything else throws) and the Cerebras free-lane integration for content/brief generation, which is explicitly never used for settlement or trust math.
## Key metrics/methods (formulas where given, else "not specified")
- Hop chain: Cerebras --CerebrasMessagesError--> secondary free --OpenAiCompatError--> clouds[i] --*MessagesError|*ConfigError--> clouds[i+1] --> Anthropic cash; generic Error/bugs bubble to caller (no silent success).
- Hoppable free failures: HTTP non-OK, network fetch throw, invalid JSON body, empty text content. Hoppable cloud failures: incomplete config, bad map, unmapped model id, HTTP/invoke failure. Not hoppable: programming errors; scanner failures after a successful LLM return.
- Cerebras integration: POST https://api.cerebras.ai/v1/chat/completions (OpenAI-compatible); default model gpt-oss-120b (DEFAULT_CEREBRAS_MODEL); auth CEREBRAS_API_KEY Bearer; enabled by CONTENT_FREE_LANE_ENABLED=true + key; result shape mirrors Claude: { text, modelName, inputTokens, outputTokens, durationMs }.
- Helpers: isFreeLaneHopError, isCloudHopError, classifyJynxError in jynx-errors.ts. Verify: `npx vitest run apps/web/__tests__/claude-api-free-lane.test.ts`, `npx vitest run apps/web/lib/claude-api/jynx-errors.test.ts`.
- No formulas specified.
## Data sources named
- Cerebras API (free-lane primary, content + brief only).
- Related doc: JYNX_FAILOVER_AND_MODEL_MAPS.md; code files jynx-errors.ts, free-lane.ts, provider-dispatch.ts, providers/cerebras.ts.
## Findings (numbers and facts, not vibes)
- Cerebras is free-lane primary for content + brief ONLY; explicitly not used for studio, journal, model-court, settlement, or trust math. (TRUST-SIGNAL)
- Cerebras was chosen for its non-retain/train posture versus some free aggregators. (OTHER)
- Successful free/cloud paths still run downstream claim/brand scanners — a provider change never skips governance. (TRUST-SIGNAL)
- Operator playbook: always-cash modelName = free off or all hops failed (check env, cloud maps, failover logs); free appearing on studio is expected (not allow-listed).
- Do-not list: no catch-all catch-and-swallow; never route board/settlement through Cerebras or any LLM; never treat free-lane quality as Claude-tier without review; never invent model ids on Cerebras 404 — fix the name or hop.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Settlement, board, model-court, and trust math are permanently excluded from the free LLM lane — (TRUST-SIGNAL)
- Downstream claim/brand scanners run on every provider path regardless of free/cash origin — (TRUST-SIGNAL)
- Hop-once-then-fall-through with abort on unknown errors (no silent success) — (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — adopt the standing constraint that no free-LLM lane ever touches settlement, board, or trust math; free generation is content-only.
