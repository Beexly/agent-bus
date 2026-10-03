# fable/aws/AWS_OPERATING_INTELLIGENCE_RUNBOOK.md
## What it is (1-2 sentences)
A 2026-07-03 runbook for `npm run fable:aws-intel`: a local-only verification harness that checks all required AWS operating-intelligence docs exist, validates the learning-evidence example and fixture library, and emits a machine-readable status report with zero live AWS actions.

## Key metrics/methods (formulas where given, else "not specified")
- Expected output shape: status ok, live_aws_action false, paid_resource_used false, docs_required 19 / docs_present 19, category counts {agents: 2, apps: 1, data: 1, fixtures: 1, governance: 1, guardrails: 4, learning: 4, machines: 1, metrics: 1, pressure: 2, techniques: 1}, learning_evidence {entries: 3, owner_approved_for_public_use: 0, no_secrets_confirmed: 3, no_paid_resource_confirmed: 3}, fixture_library {fixtures: 5, well_architected_pillars_covered: 6}, governance_os {shadow_guardrails: 6, preventive: 2, detective: 2, proactive: 2, well_architected_lens_checks: 6}.
- Failure conditions: any required doc missing, evidence-example schema failure, fixture library missing a required type or missing any of the six Well-Architected pillars, Shadow Control Tower blueprint missing a control type/pillar/drift card/Clean Rooms scenario/CDK synth fixture, or script can't read checked-in repo files.

## Data sources named
- Checked-in repo files only (docs/fable/aws/*).

## Findings (numbers and facts, not vibes)
- Boundary guarantees: no AWS CLI call, no credentials, no network, no deploy, no paid resource.
- Personal AWS learning evidence is kept separate and validated by schema before any public use.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: CI-style doc-verification harness — no sports analytics intelligence.

## Engine-actionable? (yes/no + one-line what)
No — infra verification tooling; the machine-readable evidence-report shape is reusable only as an audit pattern, not sports intelligence.
