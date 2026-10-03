# docs/personal/aws/AWS_BADGE_EVIDENCE_TEMPLATE.md
## What it is (1-2 sentences)
A governance template defining required fields, accepted proof types, and redaction rules for turning an AWS badge or course completion into public evidence in the repo. It is pure compliance/ops policy, not sports content.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. The file defines 5 accepted proof types (`course_name_only`, `learning_summary`, `approved_screenshot_path`, `public_badge_url`, `not_yet_public`, with `not_yet_public` as the default) and 12 required fields (learning provider, badge/course name, completion status, date completed, proof type, proof link or repo path, public-safe review status, GSE relevance, repo action, no secrets confirmed, no paid resource confirmed, owner approved for public use).
## Data sources named
None. The file references AWS console activity generically (account IDs, resource ARNs, timestamps) only as items to redact.
## Findings (numbers and facts, not vibes)
- 12 required fields must be completed before a badge/course becomes public evidence.
- 5 accepted proof types; `not_yet_public` is the default for planned or in-progress learning.
- Redaction rules require: crop/redact account headers; remove email addresses unless explicitly approved; remove AWS account IDs and resource ARNs; remove private-console-activity timestamps unless needed and approved; never include credentials, billing panels, or private application forms.
- Repository rule: if not owner-approved for public use, keep `proof_type` as `not_yet_public`, avoid external links, and describe only the intended GSE/FABLE relevance. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] The file's value is procedural: a public-evidence hygiene checklist. No sports-intelligence signals of any kind.
## Engine-actionable? (yes/no + one-line what)
No — zero sports data, methods, or findings; skip for engine purposes.
