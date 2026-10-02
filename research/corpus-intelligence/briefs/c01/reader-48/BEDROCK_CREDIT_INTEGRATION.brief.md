# ops/BEDROCK_CREDIT_INTEGRATION.md
## What it is (1-2 sentences)
Ops integration note for routing Claude API calls through AWS Bedrock (InvokeModel) paid with AWS Activate GenAI credits, plus Azure Foundry and Vertex twins, fronted by the Jynx planner's `auto` provider order with a free-lane (Cerebras/secondary free hosts) first. Status: adapter + Jynx multi-cloud failover implemented, inert until env opt-in; dated 2026-08-06.
## Key metrics/methods (formulas where given, else "not specified")
- Runtime order: content|brief + free-lane ON -> Cerebras (then secondary free host) -> `callClaude` cloudAttemptOrder (bedrock -> azure -> vertex by default) -> Anthropic cash last. studio|journal|model-court -> `callClaude` only (no free-lane).
- Gate: `isBedrockConfigured(env)` requires keys + region + `BEDROCK_MODEL_MAP` (Anthropic id -> Bedrock id; no guessed defaults).
- Recommended: `CLAUDE_PROVIDER=auto`, `JYNX_CLOUD_ORDER=bedrock,azure,vertex`, `JYNX_CLOUD_FAILOVER=true` (default), `AWS_BEDROCK_REGION=us-east-1`.
- Verification: `node scripts/ops/launch-preflight.mjs` -> freeLane + jynx auto; ops truth `creditStack.jynx.attemptOrder` includes `bedrock`; smoke one studio/journal call and ledger `modelName` must be the Bedrock/azure/vertex id, never the bare Anthropic cash id; unit: provider-dispatch failover (Bedrock 503 -> Azure); free-lane smoke `shouldUseFreeLane("content", {CONTENT_FREE_LANE_ENABLED, CEREBRAS_API_KEY}) === true`.
## Data sources named
None as sports data inputs. Providers: AWS Bedrock (InvokeModel), Azure Foundry, Vertex, Cerebras/secondary free hosts. Live call sites (Bedrock-ready when env set): content-generator, journal, studio, pick-explainer, model-court, loss-autopsy, calibration-training.
## Findings (numbers and facts, not vibes)
- Claude on Bedrock is the same family; list price tracks Anthropic but can be paid with AWS Activate GenAI credits (or other AWS credits). Eligibility often restricted to InvokeModel (not Marketplace "Claude platform" SKUs) — confirm against the Activate offer letter.
- Free-lane and Bedrock are orthogonal: free-lane first for allow-listed content; Bedrock (and Azure/Vertex) for the Claude quality path when configured.
- "Do not" rules: never guess Bedrock model IDs in code; never `CLAUDE_PROVIDER=bedrock` without a model map; never claim "on credits" while the ledger shows direct Anthropic ids only; never route settlement/trust math through any LLM; never rebuild adapters (improve env + maps only).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Infrastructure cost-routing note only; no behavioral, coaching, OL, scheme, or trust-signal content. OTHER
## Engine-actionable? (yes/no + one-line what)
No — cost-routing infra for LLM generation; no predictive signal, formula, or calibration input.
