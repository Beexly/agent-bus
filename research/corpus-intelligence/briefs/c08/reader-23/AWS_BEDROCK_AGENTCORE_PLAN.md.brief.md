# docs/fable/aws/AWS_BEDROCK_AGENTCORE_PLAN.md
## What it is (1-2 sentences)
A local-only evaluation plan for AWS Bedrock AgentCore: official references, observed AWS positioning, repo fit (only useful after an agent action model exists), and hard "still blocked" items — no AWS integration exists yet.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
AWS Bedrock AgentCore docs, AWS marketing/pricing pages. No repo sources; repo fit gated on an agent action model existing.
## Findings (numbers and facts, not vibes)
- AgentCore = agent platform for building/deploying/operating agents with permissions, governance, monitoring, tool/data access controls; consumption-based pricing per AWS.
- Required before any build: tool allowlist, human approval points, spend cap, audit event schema, test harness with local fake tools.
- No-cost repo actions only: local fake-agent workflow, prompt/tool policy docs, deterministic tests for blocked actions before any model integration.
- Still blocked: paid model calls, AgentCore runtime, marketplace payments, secret-reading tools, deploy or production write authority.
- Learning feed stays free: learning (fake vs paid model call vs hosted runtime distinction, tool permission matrix, policy boundaries, evaluation rubrics) improves local agent governance before any runtime.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — cloud agent-platform learning doc; no sports content.
## Engine-actionable? (yes/no + one-line what)
No — explicitly blocked pending an agent action model, tool allowlist, spend cap, and owner approval; keep as governance learning only.
