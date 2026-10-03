# fable/aws/AWS_PLUGIN_GOVERNED_AUDIT.md
## What it is (1-2 sentences)
A governed audit (updated 2026-07-03) applying "local AWS plugin reasoning" to the FABLE/GSE repo; it documents evidence classification (observed/inferred/unknown/blocked/requires owner approval) and the action-tier result for the current changes, creating no AWS resources.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Action tiers: Tier 0 = docs/scorecards/crosswalks/reports/templates; Tier 1 = local TypeScript decision-engine tests and local evidence harness. Repo fixes applied: added `apps/web/lib/fable/aws-decision-engine.ts`, `aws-decision-engine.test.ts`, decision-engine schema coverage in the evidence harness, inert FABLE/AWS env flags in `.env.example`, the audit itself, and the plugin crosswalk.
## Data sources named
None. Observed facts: repo path `C:\Users\Garrett\Sports`, branch `codex/fable-nfl-evidence-integration`, remote `https://github.com/BeeXly/Sports.git`, GitHub CLI unauthenticated, AWS decision-engine tests pass locally. Unknown: AWS account identity, spend/budgets, IAM posture, live resource inventory. Blocked: live PR/issue creation, any live AWS readiness claim.
## Findings (numbers and facts, not vibes)
- Current changes are Tier 0 and Tier 1 only; no Tier 2 read-only AWS discovery run; no Tier 3–5 action attempted.
- No live AWS account inspected; no IAM policy scanner exists (no active IaC policy file); no budget/alarm resource; no deployment framework beyond a zero-cost Amplify skeleton; no partner Clean Rooms contract.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: repo/infra state documentation only; no football signal.
## Engine-actionable? (yes/no + one-line what)
no — infra audit with no sports content.
