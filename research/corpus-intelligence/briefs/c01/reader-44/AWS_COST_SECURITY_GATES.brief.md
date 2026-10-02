# fable/aws/AWS_COST_SECURITY_GATES.md

## What it is (1-2 sentences)
Spec for the AWS cost and security gates: implemented code (`aws-gates.ts`, `aws-decision-engine.ts`), default behaviors, env gates, decision-engine defaults, security boundaries, and verification commands — plus a "Personal AWS Learning Feed" section explaining how Garrett's own AWS learning strengthens the gate system without credentials.

## Key metrics/methods (formulas where given, else "not specified")
- Default behavior: experiments off; deploys off; paid resources off; monthly cost cap defaults to `0`.
- Env gates: `FABLE_AWS_ALLOW_EXPERIMENTS`, `FABLE_AWS_ALLOW_DEPLOY`, `FABLE_AWS_ALLOW_PAID_RESOURCES`, `FABLE_AWS_MAX_MONTHLY_COST_USD`.
- Decision-engine defaults: local docs-only changes allowed by default; local validation/dry-run allowed when a validation command exists; read-only AWS discovery requires clear user need + explicit profile and region; deploys require account, profile, region, owner approval, final confirmation, cost summary, rollback, dry-run evidence; paid model calls/resources blocked by default; storage or partner sharing blocked when data rights are unknown; wildcard IAM / administrator access / broad PassRole / public-resource signals raise risk; production/DNS changes critical and blocked by default. No formulas.

## Data sources named
- Learning evidence path: `docs/personal/aws/personal-learning-evidence.example.json` (repo-safe action: add learning evidence only through this or an owner-approved copy; proof links blocked until owner approval). No engine data sources named.

## Findings (numbers and facts, not vibes)
- Monthly cost cap defaults to `0`; paid resources and deploys are blocked by default and require multi-condition owner approval including cost summary and dry-run evidence.
- Security boundaries: no secrets in docs; no checked-in AWS credentials; no role/service creation in that branch; source storage rights must be checked before any cloud storage.
- Verification: `npm run test --workspace=apps/web -- lib/fable/aws-gates.test.ts lib/fable/aws-decision-engine.test.ts`; `npm run fable:aws-gates`.
- Learning feed: cloud-ops/cost learning strengthens cost ceilings, kill switches, budget/anomaly-monitor runbooks; IAM/security learning strengthens wildcard/admin/PassRole/public-resource/cross-account review; storage learning strengthens source-rights checks before cloud storage — all through better judgment, not credentials; no live AWS cost/IAM/account commands from the learning bridge.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pure cost/security governance; no QB, coaching, OL, scheme, or trust-signal content → tag: OTHER. Adjacent only insofar as the source-rights gate (storage blocked when data rights unknown) constrains how any engine data gets stored in the cloud.

## Engine-actionable? (yes/no + one-line what)
No — governance-only; note only that the data-rights check before cloud storage applies to any future labeled-dataset or engine-data persistence.
