# docs/fable/aws/AWS_FINAL_RECOMMENDATION.md
## What it is (1-2 sentences)
The near-term AWS decision for the FABLE lane: keep everything local, use cost/deploy guards, defer Amplify/SageMaker/Clean Rooms until real triggers (release-control decision, reproducible artifacts, partner contract) exist.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — decision record, not a metrics document.
## Data sources named
- `aws-gates.ts` (the default cost/deploy guard).
## Findings (numbers and facts, not vibes)
- Recommended: (1) keep FABLE AWS work local; (2) use aws-gates.ts as the default cost/deploy guard; (3) Amplify only as a future preview-host candidate after a release-control decision; (4) SageMaker concepts first as local documentation, not endpoints; (5) Clean Rooms only after a real partner contract exists.
- Do not: connect AWS accounts in this branch; add AWS SDK dependencies for speculative plans; move source data to AWS without registry approval; treat local skeletons as deployed services.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All items → OTHER (infra governance decisions; no engine signals).
## Engine-actionable? (yes/no + one-line what)
No — it is a governance decision record (local-first AWS posture), intake only; the actionable sibling is AWS_MICRO_EDGE_FACTORY.md.
