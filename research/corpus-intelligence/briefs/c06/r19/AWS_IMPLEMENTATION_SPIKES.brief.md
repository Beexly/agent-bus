# fable/aws/AWS_IMPLEMENTATION_SPIKES.md
## What it is (1-2 sentences)
A four-spike plan for AWS work, all local and zero-cost: Amplify fit review, AWS gate enforcement, SageMaker model-card template mirroring, and Clean Rooms contract checklist — with all live AWS work requiring explicit owner approval.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
`infrastructure/aws/amplify/*`, `apps/web/lib/fable/aws-gates.ts`.
## Findings (numbers and facts, not vibes)
- Spike 1: Amplify fit review — files `infrastructure/aws/amplify/*`, zero cost, goal: document build/deploy assumptions only.
- Spike 2: AWS gate enforcement — file `apps/web/lib/fable/aws-gates.ts`, zero cost, goal: prove default-off behavior.
- Spike 3: model card template — zero cost, goal: mirror SageMaker model-card fields locally.
- Spike 4: Clean Rooms contract checklist — zero cost, goal: prepare partner questions without creating a collaboration.
- Standing rule: all spikes local unless the owner explicitly approves live AWS work.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Spike 3 (local SageMaker model-card mirror) is model-documentation hygiene aligned with the AWS-case-study contrast's operational-rigor lesson (lineage, monitoring, model documentation).
- [OTHER] Spike 4 (Clean Rooms checklist without creating a collaboration) is partner-readiness prep, not a build commitment.
## Engine-actionable? (yes/no + one-line what)
No — spike definitions only; actionable only as a checklist for future AWS work gated by owner approval.
