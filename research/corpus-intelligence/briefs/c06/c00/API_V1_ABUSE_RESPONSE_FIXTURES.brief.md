# api/API_V1_ABUSE_RESPONSE_FIXTURES.md
## What it is (1-2 sentences)
Fixture report (updated 2026-07-06) proving API v1 denial behavior and promotion-conflict checks in a shadow/local harness before any live route, database adapter, env var, credential, provider call, or billing hook exists.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Fixture coverage matrix: malformed API key → 401; conflicting API keys → 401; overscoped consumer → 403; quota exhausted → 429; unsafe payload rights → 403; malformed route controls → 405 — all with no quota debit and no payload leak.
## Data sources named
None; synthetic local fixtures. Canonical files: apps/web/lib/api/v1/abuse-response-fixtures.ts and its test file.
## Findings (numbers and facts, not vibes)
- Verification: PASS, 5 test files, 25 tests; typecheck initially FAILED on a nullable replay-conflict map/filter type issue, then PASSED after replacing it with an explicit conflict collection loop.
- Locks always held: liveRoutePromotionAllowed=false, commandsExecutableNow=false, routeExposed=false, databaseWritesAllowed=false.
- Explicit non-approval statement: this is not route, launch, security, legal, or production-readiness approval.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: API security harness detail — no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
no — security-fixture plumbing with zero sports-model content.
