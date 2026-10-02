# docs/fable/red-team/AWS_RED_FLAGS.md
## What it is (1-2 sentences)
A red-team flag inventory recording that no live AWS resources, accounts, security reviews, spend alarms, IAM policies, Bedrock model access, Clean Rooms partners, or SageMaker artifacts exist for the FABLE lane; the default posture is "keep AWS local and gated."
## Key metrics/methods (formulas where given, else "not specified")
not specified — a checklist of seven absent AWS capabilities, no metrics.
## Data sources named
None (AWS resources are the subject; none exist).
## Findings (numbers and facts, not vibes)
- 7 AWS capabilities checked, 7 absent: live resources, account security review, spend alarms, IAM policy, Bedrock model access (verified), Clean Rooms partner, SageMaker artifact.
- Default action: keep AWS local and gated.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 7-of-7 AWS capabilities absent → [OTHER: infrastructure status only, no sports intelligence]
- Default action "keep AWS local and gated" → [OTHER: ops gate posture]
## Engine-actionable? (yes/no + one-line what)
no — infrastructure red-flag list with no sports signals and no engine inputs.
