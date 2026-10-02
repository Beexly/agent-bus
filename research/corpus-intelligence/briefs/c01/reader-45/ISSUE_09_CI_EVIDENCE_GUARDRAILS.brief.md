# fable/github/ISSUE_09_CI_EVIDENCE_GUARDRAILS.md
## What it is (1-2 sentences)
A GitHub-issue spec for a no-cost FABLE CI workflow that runs local checks only (claim ledger validation, source validation, AWS gate validation, docs scanner, targeted FABLE tests) with no network-only service or AWS credential required; files likely touched: .github/workflows/fable-evidence.yml and package.json; open owner decision: whether to make it branch-protection required.
## Key metrics/methods (formulas where given, else "not specified")
not specified — test plan is `npm run fable:evidence` plus targeted FABLE tests; risk noted: workflow may duplicate existing CI.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
No findings; process/issue doc only. Key fact: the evidence suite is designed to run fully local/no-cost so any intelligence contributor can run it before landing.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER — CI hygiene; INFERENCE: if intelligence-profile code ever lands under fable evidence gates, this workflow is the pre-land check.
## Engine-actionable? (yes/no + one-line what)
no — CI spec doc; no football content.
