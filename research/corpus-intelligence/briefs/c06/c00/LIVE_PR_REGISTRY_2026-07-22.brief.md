# ai/phase0/LIVE_PR_REGISTRY_2026-07-22.md
## What it is (1-2 sentences)
Truth-registered inventory (verified live 2026-07-22 via git ls-remote and GitHub PR list) of the draft-PR stack for the GSE/NOVA AI control-plane and settlement convergence wave; all listed work carries IMPLEMENTED_ON_DRAFT_BRANCH, NOT_MERGED, NOT_CUMULATIVELY_VALIDATED, NOT_PRODUCTION_ACTIVE, with `main` at `c19a00d` (nothing merged).
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Test counts cited per PR: #159 green (67 tests), #160 green (91 tests), #162 green (62 tests), #163 green (80 tests), #164 green (96 unit + 20 integration), #152 green (13/13).
## Data sources named
None external; all state verified from the git remote and GitHub PR list.
## Findings (numbers and facts, not vibes)
- ~25 PR rows tracked; only #153 (CI postgres health) and #154 (hash validation) are safe owner-merge candidates after rebase.
- #158–#164 each carry confirmed load-bearing defects (namespace bypasses, ungoverned actor constructors, fail-open DB lookup, random per-call runId defeating retry dedup, caller-authored policy, idempotency races, budget-settlement exceeding holds); none may be proposed for merge as written.
- NOVA live-source validation remains FAILED_CLOSED: no reproducible immutable receipt has ever been produced; must not be described as passing.
- 7/22 addendum added PRs #167–#170 (NOVA convergence inventory, S2 capability governor, S3 source runtime, Jarvis genesis-kernel recovery) and refreshed 6 heads.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the deliberate "shipped/landed banned for unmerged work" vocabulary and FAILED_CLOSED honesty about validation — evidence-honesty pattern for any published engine claim.
## Engine-actionable? (yes/no + one-line what)
no — historical engineering snapshot (2026-07-22); records what was unmerged, useful as context, not model input.
