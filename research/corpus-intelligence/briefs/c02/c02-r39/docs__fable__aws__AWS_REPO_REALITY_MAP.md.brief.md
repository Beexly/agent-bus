# docs/fable/aws/AWS_REPO_REALITY_MAP.md
## What it is (1-2 sentences)
A ground-truth inventory of what AWS work actually exists in the Sports repo: nothing live — no CDK app, no Amplify app, no CloudFormation, no SageMaker/Bedrock/Clean Rooms resources, no AWS SDK dependency — only local additions (`apps/web/lib/fable/aws-gates.ts` + test, `infrastructure/aws/amplify/*`) and design docs.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. The file is a binary existence map (5 "not added/deployed/exists" facts, 2 local additions, 2 design additions, 1 allowed next step, 1 blocked next step).
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- 5 negative facts: no AWS CDK app added; no Amplify app created; no CloudFormation template deployed; no SageMaker, Bedrock, or Clean Rooms resource exists in this branch; no AWS SDK dependency added [OTHER]
- Local additions: `apps/web/lib/fable/aws-gates.ts`, `apps/web/lib/fable/aws-gates.test.ts`, `infrastructure/aws/amplify/*` [OTHER]
- Design additions: AWS docs in the folder; copy-paste issue bodies for future implementation [OTHER]
- Allowed next step: local fit review and owner-approved issue creation [OTHER]
- Blocked next step: any live AWS action without owner approval, credentials, budget cap, and source rights review [TRUST-SIGNAL]
- INFERENCE: this confirms the engine's AWS lane is entirely local/design-phase — nothing production-touching to audit or wire.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No football-intelligence content; an infra state-of-the-world note [OTHER]
## Engine-actionable? (yes/no + one-line what)
no — purely a state-of-the-repo note; nothing in it drives engine wiring, though the blocked-next-step gate reinforces the standing hard blocks on live AWS action.
