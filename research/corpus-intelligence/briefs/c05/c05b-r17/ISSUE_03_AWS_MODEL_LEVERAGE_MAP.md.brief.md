# fable/github/ISSUE_03_AWS_MODEL_LEVERAGE_MAP.md
## What it is (1-2 sentences)
GitHub issue spec for building an AWS model leverage map: model classes mapped across workload, cost, risk, fallback, AWS candidate, non-AWS candidate, and decision — without assuming account access or model availability, citing official AWS docs.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Mapping schema: workload, cost, risk, fallback, AWS candidate, non-AWS candidate, decision. Acceptance: official AWS docs cited, no paid model call required. Test plan: `npm run fable:evidence`. Files to touch: docs/fable/aws/AWS_MODEL_LEVERAGE_MAP.md, docs/fable/aws/AWS_MODEL_ROUTER_DESIGN.md. Risk: AWS service availability can drift. Open owner decision: Bedrock or model-provider access.
## Data sources named
Official AWS docs (to be cited).
## Findings (numbers and facts, not vibes)
- Model mapping is deliberately hype-free: no account access or model availability assumed.
- No paid model call required to complete the map.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — model-routing infrastructure spec; no sports content.
## Engine-actionable? (yes/no + one-line what)
No — infra routing map spec, no engine signal yet (relevant only when the engine needs an AWS model router).
