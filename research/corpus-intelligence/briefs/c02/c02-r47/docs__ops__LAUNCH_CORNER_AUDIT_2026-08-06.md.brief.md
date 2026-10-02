# docs/ops/LAUNCH_CORNER_AUDIT_2026-08-06.md

## What it is (1-2 sentences)
A broad launch-corner audit of GSE's production site on 2026-08-06, probing live endpoints (health, settlement, sitemaps, gates) and listing corners checked (cipher claim-only, settle repair drains, CSP/ads/security, PR hygiene). It records shipped work from the wave: Cipher UI claim-only, founderNextSteps + billing/analytics, and this scorecard.

## Key metrics/methods (formulas where given, else "not specified")
not specified

## Data sources named
Production live probes (health endpoint, settlement monitor, postgres contest storage, trust-chrome files, sitemaps, cron auth, `/intelligence/engines` route). Repair drains on CLV / snapshot / TEAM_GAME_LOG tables. Founder Stripe UI (webhook). Prod SHA vs main.

## Findings (numbers and facts, not vibes)
- Settlement overdue count was 0 at probe time (HEALTHY). [OTHER — ops health]
- Sitemap density was ~65 URLs (a "preview flood" had been fixed). [OTHER — ops health]
- News sitemap had 3 entries (issue 003 window). [OTHER — ops health]
- `/picks` and `/stats` gates returned 503/dark — recorded as correct behavior. [OTHER — ops health]
- Unauthenticated cron access returned 401 (correct). [OTHER — ops health]
- Free-lane / Jynx auto remained off (founder env gate). [OTHER — ops health]
- Cipher enforced claim-only (API + UI copy). [TRUST-SIGNAL]
- Free + paid settle repair drains touched CLV / snapshot / TEAM_GAME_LOG. [OTHER — ops health]
- Open PRs left for premise review (explicitly no bulk-merge). [OTHER — ops health]
- Stripe foreign webhook resolves to founder's Stripe UI. [OTHER — ops health]
- `/intelligence/engines` OOM'd once historically; `maxDuration=60` was already set, with a monitor-after-traffic note. [OTHER — ops health]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cipher claim-only copy/API (TRUST-SIGNAL): engine claims must be claim-only, no invented guarantees — trust posture relevant to public-facing pick surfaces.
- CLV / snapshot / TEAM_GAME_LOG repair drains (OTHER): CLV data is a named stored signal table.
- All remaining items (OTHER): site-ops audit, no gameplay intelligence.

## Engine-actionable? (yes/no + one-line what)
No — site-ops audit only; nothing in it changes projections, only honest-gate copy and monitoring hygiene.
