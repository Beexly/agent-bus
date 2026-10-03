# fable/GITHUB_VISIBILITY_MAP.md
## What it is (1-2 sentences)
An inventory of which FABLE docs, code, tests, routes, AWS skeletons, and schemas are safe to expose on the public GitHub repo, plus which GitHub issue bodies to file.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (repo-hygiene inventory).

## Data sources named
- Repo-local paths only (docs/fable/*, apps/web/*, scripts/fable-aws-operating-intelligence.ts, infrastructure/aws/*, schemas/fable/*).

## Findings (numbers and facts, not vibes)
- Public-safe docs include the forensic report, evidence index, claim-evidence ledger, edge-lab micro-edge ledger, incumbent pressure test, adversarial review, CODEX reports, CLAUDE_HANDOFF, and AWS README/FINAL_REPORT.
- Visible code: apps/web/app/fable/*, apps/web/lib/fable/*, scripts/fable-aws-operating-intelligence.ts; visible tests: apps/web/lib/fable/*.test.ts, next-config-policy and public-copy-scan tests.
- Public app route /fable backed by local FABLE docs and validators.
- GitHub issue bodies staged in docs/fable/GITHUB_ISSUES_TO_CREATE.md, docs/fable/aws/GITHUB_AWS_ISSUES_TO_CREATE.md, docs/fable/github/*.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evidence-hygiene documentation — no analytics intelligence.

## Engine-actionable? (yes/no + one-line what)
No — repo visibility bookkeeping only.
