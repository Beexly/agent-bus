# docs/ops/archive/leverage/CLAUDE_CREDITS_ACTIVATION_RUNBOOK.md
## What it is (1-2 sentences)
The 2026-07-08 do-this list for paying the Claude bill three independent ways (Anthropic "Claude for Startups" credits, AWS Bedrock Activate credits up to $300k, Google Vertex $10k partner credit), with exact per-path steps, shipped-code status, and ready-to-paste application text.
## Key metrics/methods (formulas where given, else "not specified")
- Path B (Anthropic Claude for Startups): fastest, zero code — credits land on the existing `ANTHROPIC_API_KEY`; application at claude.com/programs/startups.
- Path A (AWS Bedrock): biggest, up to $300k; adapter shipped (`providers/aws-sigv4.ts` pinned to AWS's official test vector; `providers/bedrock.ts` InvokeModel with identical result shape); activation = `CLAUDE_PROVIDER=bedrock` + 4 env vars (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_BEDROCK_REGION`, `BEDROCK_MODEL_MAP` for `claude-sonnet-4-6`, `claude-haiku-4-5-20251001`, `claude-opus-4-8`); staging smoke test required before promotion; Batch discounts up to 50% for batchable content; cap mirrored in `FABLE_AWS_MAX_MONTHLY_COST_USD`.
- Path C (Google Vertex $10k Anthropic partner credit): top-up only; requires emailing the Google AE (not automatic); env: `CLAUDE_PROVIDER=vertex`, `GOOGLE_VERTEX_PROJECT`, `GOOGLE_VERTEX_REGION`, `GOOGLE_APPLICATION_CREDENTIALS_JSON`, `VERTEX_MODEL_MAP` (adapter not yet shipped).
- Seven governed Claude production surfaces, all model-routed (Haiku/Sonnet/Opus), with cost + usage ledger and claim/brand-safety scanners + fabricated-stat guard before ship.
## Data sources named
`CLOUD_CREDITS_MAXIMIZATION_STRATEGY_2026-07-08.md`; Anthropic Console billing page; AWS Bedrock console; Google for Startups Cloud AI tier.
## Findings (numbers and facts, not vibes)
1. Hard rule: keep Claude on AWS Bedrock `InvokeModel` specifically — Claude-Platform-on-AWS Marketplace and Claude-on-Azure both bill in ways that are NOT credit-eligible; the shipped adapter uses InvokeModel, correct by construction (TRUST-SIGNAL).
2. All Path-A code was already merged and tested — activation is a single env flip; `callClaude` dispatcher wires all 7 surfaces and falls back to direct Anthropic API on any Bedrock error; inert by default (unset `CLAUDE_PROVIDER` = byte-identical behavior) (OTHER).
3. Credit-eligibility is the lever, not price: the same bill paid three diversified ways so no single approval delay/expiry strands the platform (OTHER).
4. The staging smoke test protocol is the proof pattern: confirm each generated draft's recorded `modelName` is a Bedrock id — proves credits are used and no silent fallback (TRUST-SIGNAL).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Finding 1: TRUST-SIGNAL
- Finding 2: OTHER
- Finding 3: OTHER
- Finding 4: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
No — LLM cost/credit ops only; the "prove which pool pays via recorded modelName" pattern is reusable cost-governance instrumentation.
