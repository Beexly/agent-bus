# fable/aws/sagemaker-adrs/ADR-0006-when-to-use-hosted-inference.md
## What it is (1-2 sentences)
An architecture decision record rejecting hosted (SageMaker) inference for now, with explicit gates for when hosted inference would be used and a local-batch rollback path.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified. Use-when conditions: low-latency production inference required, model artifact validated, cost cap and rollback approved.

## Data sources named
- None.

## Findings (numbers and facts, not vibes)
- Decision: Reject for now — no validated model artifact, no live AWS budget, no hosting need.
- Additional gates before any traffic: budget + alarm approved, endpoint IAM/network scoped, monitoring + rollback ready.
- Rollback: route traffic back to local/current inference, disable endpoint, preserve prediction and monitoring logs.
- Owner approval needed: yes.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ML-hosting cost decision — no analytics intelligence.

## Engine-actionable? (yes/no + one-line what)
No — a deliberate no-go decision record.
