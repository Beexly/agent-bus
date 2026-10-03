# ops/CREDIT_ENV_ACTIVATION_CHECKLIST.md

## What it is (1-2 sentences)
Env-activation checklist for switching LLM inference onto free/credit lanes (Cerebras, Groq, AWS Bedrock, Google Vertex, Azure AI Foundry) when the founder hands over a key or grant — with a hard "no silent fallback" rule and per-provider smoke tests that prove the credit lane is actually carrying traffic.

## Key metrics/methods (formulas where given, else "not specified")
No formulas. The "method" is a fail-closed routing doctrine: if the credit key is missing, the provider must "fail closed or skip — never bill Anthropic while claiming 'on credits.'"

Provider configurations stated verbatim:
- Cerebras: `CEREBRAS_API_KEY=...`, `CONTENT_FREE_LANE_ENABLED=true`; smoke rule — `isFreeLaneEnabled()` true only when BOTH set; route a non-user-facing content surface through free-lane; usage/ledger shows Cerebras model id, not silent Anthropic fallback.
- Groq internal LLM: `INTERNAL_LLM_BASE_URL=https://api.groq.com/openai/v1`, `INTERNAL_LLM_MODEL=llama-3.3-70b-versatile`, `INTERNAL_LLM_API_KEY=...`; smoke — internal classification/draft call, no user-facing Claude bill.
- Bedrock: `CLAUDE_PROVIDER=bedrock`, `AWS_BEDROCK_REGION=us-east-1` ("or confirmed"), `BEDROCK_MODEL_MAP={"claude-...":"<verified-bedrock-id>"}`; eligibility — InvokeModel only, no Marketplace Claude-Platform billing; smoke — response metadata/ledger carries Bedrock model id.
- Vertex: `CLAUDE_PROVIDER=vertex`, `GOOGLE_VERTEX_PROJECT`, `GOOGLE_VERTEX_REGION`, `GOOGLE_APPLICATION_CREDENTIALS_JSON`, `VERTEX_MODEL_MAP` — no smoke test specified.
- Azure AI Foundry: `CLAUDE_PROVIDER=azure`, `AZURE_FOUNDRY_RESOURCE`, `AZURE_FOUNDRY_API_KEY`, `AZURE_FOUNDRY_MODEL_MAP={"claude-sonnet-4-6":"<foundry-model-id>"}`; smoke — ledger `modelName` starts with `azure-foundry/`; founder caveat — confirm credit SKU covers Claude Foundry ("older MS sponsorship excluded Anthropic").
- Full map: `docs/ops/CLOUD_CREDIT_LAUNCH_MAP.md`.

## Data sources named
None (LLM inference routing; no data source named).

## Findings (numbers and facts, not vibes)
1. Five credit/free lanes documented: Cerebras free lane, Groq internal LLM (llama-3.3-70b-versatile), AWS Bedrock (InvokeModel, region us-east-1), Google Vertex, Azure AI Foundry (claude-sonnet-4-6).
2. Cerebras free-lane gating is conjunctive: both `CEREBRAS_API_KEY` and `CONTENT_FREE_LANE_ENABLED=true` must be set for `isFreeLaneEnabled()` to return true — single-var presence is insufficient.
3. Smoke tests are ledger-identity tests: the usage ledger must show the credit provider's model id (Cerebras / Bedrock / `azure-foundry/` prefix); the failure mode being guarded against is silently billing Anthropic while the UI claims "on credits."
4. Failure rule: if the credit key is missing, the provider must fail closed or skip — silent Anthropic fallback is explicitly forbidden.
5. Groq lane is scoped to internal classification/draft calls — explicitly not for user-facing surfaces ("no user-facing Claude bill").
6. Bedrock eligibility is InvokeModel only; Marketplace Claude-Platform billing is excluded.
7. Azure/Foundry caveat: older Microsoft sponsorship SKUs excluded Anthropic — the founder must confirm the credit SKU actually covers Claude on Foundry before activating.
8. Cerebras lane smoke routes a non-user-facing content surface first — free-lane traffic never starts on user-facing surfaces.
9. No smoke test is specified for the Vertex lane in this file.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Pure LLM-cost-ops document with no sports-behavioral content; it does not serve any model-lane program (QB-behavioral profiles, coaching, OL, trust-target intake, calibration/sizing, tracking) directly. Mechanism relevance is cost-leverage only: any engine lane that needs LLM inference (classification, draft content, intake parsing) can run on credit lanes — Groq llama-3.3-70b-versatile for internal classification/draft — without touching the Anthropic bill, which is a burn-rate input for the autonomous-money program.
- OTHER — The ledger-identity smoke pattern (usage ledger must name the actual model id) is a trust mechanism applicable anywhere the engine claims "free/credit" inference: it prevents cost claims from drifting from reality, same honesty doctrine as the "no invented PROVEN" rule in the close-out matrix.
- No CONTRADICTION with other files. UNCERTAIN: the file asserts Groq llama-3.3-70b-versatile is adequate for "internal classification/draft" but gives no quality gate for that adequacy — if draft quality degrades, the failure would be silent by this checklist.

## Engine-actionable? (yes/no + one-line what)
Yes — one line: use the conjunctive free-lane gate + ledger-identity smoke pattern as the template for any future credit-lane LLM wiring in engine intake/classification jobs.

### Referenced files, papers, datasets
- `docs/ops/CLOUD_CREDIT_LAUNCH_MAP.md` (full map)
- No papers or datasets named.
