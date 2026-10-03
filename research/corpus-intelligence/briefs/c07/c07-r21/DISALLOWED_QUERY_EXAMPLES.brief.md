# fable/aws/clean-rooms-demo/DISALLOWED_QUERY_EXAMPLES.md
## What it is (1-2 sentences)
A short guardrail list of 8 query types forbidden inside the AWS Clean Rooms demo — essentially privacy/compliance boundaries for working with partner data in the FABLE evidence harness.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
None — the file is policy, not analysis. References "partner data", "private team records", and "fixture rows".
## Findings (numbers and facts, not vibes)
The 8 disallowed queries are: (1) joining on user identity; (2) exporting row-level partner data; (3) reconstructing bettor, athlete, or account behavior; (4) querying below privacy threshold; (5) using partner data for model training without explicit contract; (6) exporting fixture rows below privacy threshold; (7) inferring individual player health from private team records; (8) using partner data to publish unsupported model-edge claims.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the whole list is an honesty/integrity contract — it explicitly forbids publishing unsupported model-edge claims and training models on partner data without a contract.
## Engine-actionable? (yes/no + one-line what)
no — it is an internal compliance checklist for the demo harness, not an engine signal or method.
