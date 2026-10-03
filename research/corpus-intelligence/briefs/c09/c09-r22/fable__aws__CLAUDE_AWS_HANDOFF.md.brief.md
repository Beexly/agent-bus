# fable/aws/CLAUDE_AWS_HANDOFF.md
## What it is (1-2 sentences)
A 20-document read-order handoff for Claude to pick up the AWS workstream, with hard local-only rules (no deploys, no account inference, no SDK dependencies without owner approval).

## Key metrics/methods (formulas where given, else "not specified")
- Not specified. Rule: run `npm run fable:aws-gates` and the AWS decision-engine tests after any AWS policy edit.

## Data sources named
- Repo docs list only (docs/fable/aws/*, apps/web/lib/fable/aws-gates.ts, apps/web/lib/fable/aws-decision-engine.ts, infrastructure/aws/amplify/*).

## Findings (numbers and facts, not vibes)
- All AWS work is local-only; model availability always requires current AWS/account verification; do not infer account setup from docs; do not store source data in AWS unless the source registry permits storage and the owner approves a cloud action.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: agent handoff bookkeeping — no sports intelligence.

## Engine-actionable? (yes/no + one-line what)
No — routing document, no analytics content.
