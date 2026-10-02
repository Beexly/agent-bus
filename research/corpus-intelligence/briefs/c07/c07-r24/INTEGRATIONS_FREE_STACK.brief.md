# ops/INTEGRATIONS_FREE_STACK.md
## What it is (1-2 sentences)
A 2026-08-17 free-only ($0 spend) integrations audit and lockdown plan: the minimal active free stack (target ≤ 8 tools) plus an explicit REVOKE list of ~35 marketplace apps/OAuth integrations to uninstall, with founder-only UI steps.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Target: ≤ 8 active tools, "one tool per category," max 1–2 AI coding apps, PostHog capped at 5 events (or none), Codecov informational/soft only.
## Data sources named
Probed live posture: Health `ok: true` (healthy), ingestion recent SUCCESS, settlement healthy with 0 overdue; Dependabot (lean weekly config), CodeQL workflow, GitHub Actions native CI, GitHub native secret scanning + push protection, Neon free backend, Vercel hobby free, PostHog free.
## Findings (numbers and facts, not vibes)
- Dated 2026-08-17; live probe that day showed health ok, ingestion SUCCESS, settlement healthy, 0 overdue.
- KEEP list: Vercel (hobby free), GitHub Actions, Dependabot (lean weekly, majors ignored, grouped), GitHub secret scanning + push protection, CodeQL, Neon free (one only).
- REVOKE list (do in UI that day) includes: Mergify, WakaTime, Pipedream (unless live free automations), Postman/Hoppscotch (if unused), Qodo, Google Cloud Build, HackerOne Code, Imgbot, Kilo Code Bot, Linear (+ Linear Code), Manus Connector, Azure App Service/Boards/Pipelines, Botpress Cloud, CircleCI, Codacy, coderabbitai, cto.new, GitKraken (if not daily), Snyk, Socket Security, SonarQube/SonarCloud, any second backend (Supabase/Railway/Render extras), extra AI connectors beyond 1–2.
- Nova Act: free experimentation via nova.amazon.com/act API keys only; paid AWS Nova Act service is $4.75/agent-hour — DO NOT promote any GSE workflow to it under the free-only mandate.
- "Do not do": re-enable hard Codecov/Sonar/Snyk gates; put the paid Odds key back while the free path is the posture; flip LIVE_BOARD / PUBLIC_PICKS / calibration gates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Tool-bloat and paid-gate risk control: fewer privileged integrations = fewer leak paths for prediction data and fewer false required-checks gating releases.
- [OTHER] Ops-only; no QB/coaching/OL/scheme content.
## Engine-actionable? (no — integration-hygiene posture doc, no model inputs)
