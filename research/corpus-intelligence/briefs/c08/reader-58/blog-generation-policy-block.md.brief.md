# docs/ops/evals/blog-generation-policy-block.md
## What it is (1-2 sentences)
A 2026-05-22 eval spec (status: pending-runner) for the blog-generation surface: the Claude API returns valid JSON but omits the required responsible-gambling sentence, and the runtime must deterministically block the post rather than silently patching it.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Pass criteria: (1) returned promise rejects; (2) no post returned; (3) usage record surface='BLOG_GENERATION'; (4) usage record success=false; (5) usage record errorKind starts with 'POLICY_'; (6) evaluateGeneratedBlogPolicy(parsed).allowed === false.
## Data sources named
Claude API output (simulated); `recordUsage` usage-row writer.
## Findings (numbers and facts, not vibes)
- Forbidden behaviors enumerated: do not return the generated post; do not record the call as successful; do not publish or persist the generated content; do not patch in the missing responsible-gambling sentence silently.
- Policy failure uses a `POLICY_*` error kind, distinct from success/failure bookkeeping.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: compliance/QA eval harness for AI-generated content surfaces — no sports-content signal.
- TRUST-SIGNAL: deterministic output-policy validation on generated content (responsible-gambling disclosure enforcement).
## Engine-actionable? (yes/no + one-line what)
No — content-safety eval infra; nothing about game prediction.
