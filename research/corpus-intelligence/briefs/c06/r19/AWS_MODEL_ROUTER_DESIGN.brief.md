# fable/aws/AWS_MODEL_ROUTER_DESIGN.md
## What it is (1-2 sentences)
The gate and routing design for a model router: default-off env flags, a deterministic-first routing order, cost and human-approval policies, and hard rejection rules.
## Key metrics/methods (formulas where given, else "not specified")
Env gates: `FABLE_MODEL_ROUTER_ENABLED=false`, `FABLE_AWS_ALLOW_EXPERIMENTS=false`, `FABLE_AWS_ALLOW_PAID_RESOURCES=false`, `FABLE_AWS_MAX_MONTHLY_COST_USD=0`. Routing order: (1) deterministic validator → (2) local fixture evaluator → (3) manually approved non-AWS model → (4) manually approved AWS model. Rejection rules: gambling guarantee language, unsupported source retrieval, missing evidence id for high-risk claim, missing cost cap, missing human approval for write/publish/deploy/paid call/live data.
## Data sources named
None (design doc only).
## Findings (numbers and facts, not vibes)
- Defaults: no live API calls, no paid models, no autonomous publishing, no restricted-source retrieval.
- Model class policy: deterministic validators handle claim scanning, gate evaluation, schema checks first; local fixtures handle forensic and replay demos; non-AWS model use requires owner approval + logged cost expectations; AWS model use requires owner approval + cost ceiling + model-selection rationale + eval pass; Bedrock/AgentCore is a governance candidate, not proof of model performance.
- Logging fields: prompt id, evidence id, source ids, no secrets, output hash, evaluator result, cost estimate, evidence ladder classification.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Deterministic-first routing + evidence-id requirement + gambling-guarantee-language rejection are hard trust guardrails for any future model-routing work.
- [OTHER] Default-off env gates ($0 cost ceiling) enforce the zero-cost AWS policy mechanically.
## Engine-actionable? (yes/no + one-line what)
No — design spec only; actionable as the gate template if the model router is ever built.
