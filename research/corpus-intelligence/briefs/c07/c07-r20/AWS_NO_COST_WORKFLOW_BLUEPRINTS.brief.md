# fable/aws/AWS_NO_COST_WORKFLOW_BLUEPRINTS.md
## What it is (1-2 sentences)
Six no-cost local workflows (2026-07-03) for building AWS readiness without touching an AWS account: learning-proof-to-repo, service fit review, mock-before-cloud, AWS agent gate, cost review without spend, and partner architecture without partner data.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — process blueprints, not metrics. Notable gates: cost worksheets default the monthly cap to zero (Workflow 5); agent workflows default spend/deploy/publish/secret/production tools to blocked and require evidence labels (observed / inferred / assumed / blocked) in agent output (Workflow 4); Cloud mocks must state what they do and do not prove plus the validating command (Workflow 3).
## Data sources named
None — synthetic/local mocks only (`docs/personal/aws/AWS_PERSONAL_PROGRESS_TEMPLATE.md`).
## Findings (numbers and facts, not vibes)
- Six workflows enumerated with outputs (learning evidence entry, service scorecard update, mock artifact + validator, tool permission matrix, cost worksheet + kill switch, Clean Rooms synthetic scenario).
- Zero-cost discipline is structural: mock must pass and owner must approve before any live AWS.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No football-intelligence content — OTHER (infra/governance).
## Engine-actionable? (yes/no + one-line what)
No — process blueprints; nothing predictive to wire.
