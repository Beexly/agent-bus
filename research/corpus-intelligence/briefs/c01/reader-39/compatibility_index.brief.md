# aws/COMPATIBILITY_INDEX.md
## What it is (1-2 sentences)
A ten-row compatibility index exposing an exact `docs/aws` path for legacy discovery while keeping `docs/fable/aws` as the canonical AWS evidence layer — each row pairs a read-first alias with the canonical artifact and states exactly what it does and does not prove.

## Key metrics/methods (formulas where given, else "not specified")
Not specified. Operative numeric fact: guard `npm run guard:aws-compatibility-index` must be run after changing this path family; local gates default to no spend and no deploy.

## Data sources named
Local artifacts: `docs/fable/aws/AWS_REPO_REALITY_MAP.md`, `AWS_SERVICE_SCORECARD.md`, `AWS_COST_SECURITY_GATES.md`, `AWS_OPERATING_INTELLIGENCE_RUNBOOK.md`, `governance-os/SHADOW_CONTROL_TOWER_BLUEPRINT.json`, `fixtures/AWS_LOCAL_FIXTURE_LIBRARY.json`, `infrastructure/aws/amplify/README.md`, `infrastructure/aws/cdk/shadow-control-tower-synth.fixture.json`, `infra/aws-shadow/README.md`, `apps/web/app/case-studies/aws-governed-sports-intelligence/page.tsx`.

## Findings (numbers and facts, not vibes)
- Every canonical artifact is local/shadow-only: no AWS account setup, no live service use, no spend, no deploy — the index repeatedly disclaims that planning artifacts do not prove live infrastructure.
- Amplify is evaluated as a future option (no app created, no DNS migration); CDK lane is a fixture, not initialized/synthesized/deployed.
- Rules for future edits: add AWS research under `docs/fable/aws` first; keep `infra/aws-shadow` fixture aliases local, synthetic, non-deployable.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure documentation only — no QB-behavior, coaching, OL, trust-signal, or scheme content. The "what it proves / what it does not prove" two-column discipline is a reusable honesty convention, but it is process, not intelligence.

## Engine-actionable? (yes/no + one-line what)
No — pure infrastructure documentation with no sports data, metrics, or methods; no engine signal.
