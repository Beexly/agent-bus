# docs/ops/SMOKE.md
## What it is (1-2 sentences)
Post-deploy/post-env smoke-test runbook for the Sports monorepo. Defines the law "no secret echo · refuse-default · measure before claim" and lists the command sequence to verify a deploy is healthy.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — ops checklist, no formulas.
## Data sources named
None named (internal tooling: trust-gate, em-dash-scan, guard:ai-council, credentials-smoke, gamma-cron-smoke.sh).
## Findings (numbers and facts, not vibes)
- Smoke sequence: `node scripts/guardrails/trust-gate.mjs`, `node scripts/guardrails/em-dash-scan.mjs`, `npm run guard:ai-council`, then `node scripts/ops/credentials-smoke.mjs` (credentials presence only, no values printed).
- Gamma cron check: unauthorized request must return **401**; Bearer primary must return **200** (body may still report empty markets honestly).
- Dual-secret rotation check: garbage bearer → 401; `CRON_SECRET_PREVIOUS` bearer → 200 during rotation window; primary bearer → 200.
- Public law probes (no auth): `/board` must render without lying "all green" when LIVE_BOARD is off; `/api/gse/v1/own/values` without `asOf` must refuse, not invent zeros.
- Do-not-run list: never set LIVE_BOARD / PUBLISH_LEDGER / reveal without explicit founder YES; never put THE_ODDS_API_KEY on free critical path as required; never smoke-print secrets into chat logs.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The refuse-default law ("own-values without asOf must refuse, not invent zeros"; "board should render without lying 'all green'") — TRUST-SIGNAL (anti-fabrication doctrine).
- Everything else — OTHER (ops runbook).
## Engine-actionable? (yes/no + one-line what)
No — deploy smoke runbook; no modeling content.
