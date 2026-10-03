# docs/ops/cost-controls.md

## What it is (1-2 sentences)
A cost-controls and spend-defense plan for the GSE project: a hard monthly cap goal of ≤$25 total external SaaS beyond free tiers ("current survival mode"), with category caps, downgrade/cancel triggers, an immediate kill-switch list, a 14-day app review checklist, and a decision rubric for new tools.

## Key metrics/methods (formulas where given, else "not specified")
- Hard cap: **≤$25 total external SaaS/month** beyond free tiers; cut trigger when total **approaches $30**.
- Category caps: Deploy/hosting (Vercel free/hobby) **$0–20**; database (Neon free tier) **$0**; analytics (PostHog free, **1M events**) **$0**; coverage (Codecov open-source) **$0**; secrets scanning (GitHub native + GitGuardian) **$0**; dependency updates (Dependabot) **$0**; CI minutes (GitHub Actions) included; AI tools **≤2 total**.
- Kill triggers: any tool unused in **14 days** → revoke; any tool producing **>5 alerts/week** with no action taken → disable notifications or remove; Vercel bandwidth/function overages → move non-critical workers to free alternatives or throttle.
- Decision rubric (all must be true): saves/earns **>$100/month** equivalent **or** eliminates a severe risk (secret leak, broken main, major incident); replaces an existing tool or first in category; free tier usable **≥3 months** or clear cancel condition; setup **<30 min** and maintenance burden low; clear owner + rollback path documented.
- 14-day app review checklist (every other Monday): list authorized GitHub Apps + OAuth apps; for each: last used? real value this week? free?; revoke anything failing the **>$100/month ROI** or severe-risk test; confirm Dependabot PRs merged/closed deliberately; check Vercel + Neon usage dashboards.
- Formulas: not specified.

## Data sources named
- None as sports/data sources. Operational surfaces mentioned: Vercel usage dashboard, Neon usage dashboard.

## Findings (numbers and facts, not vibes)
- Immediate kill-switch list (cut first if money tighter): (1) WakaTime; (2) Mergify if not actively auto-merging; (3) any second/third AI connector beyond Copilot + one other; (4) Pipedream if no active high-ROI flows; (5) Postman/Hoppscotch if curl + VS Code suffice; (6) all SonarQube variants; (7) Socket, Snyk, Codacy, CircleCI, Azure anything, Imgbot, Linear (unless actively used); (8) Codecov paid features (stay on free/soft). [OTHER]
- Cap philosophy: "AI tools ≤2 total — cap cognitive load"; "Everything else … Revoke." [OTHER]
- Review cadence: every other Monday against the >$100/month ROI or severe-risk bar. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ≤$25/mo cap + free-tier-first categories (Vercel hobby, Neon free, PostHog 1M events free, Codecov open-source): OTHER (ops) — INFERENCE: engine wiring work should prefer free endpoints/tiers (e.g., ESPN public endpoints, balldontlie) and avoid the $41–61/mo launch posture from V6_HANDOFF.md unless revenue justifies it.
- Kill triggers (14-day unused → revoke; >5 alerts/week with no action → disable; spend approaches $30 → cut): OTHER (ops discipline); TRUST-SIGNAL-adjacent as an alert-hygiene practice (unused alerts get disabled, paralleling alert-fatigue management for engine monitors).
- $100/month ROI rubric + 14-day review cadence: OTHER (ops).
- No sports intelligence content in this file.

## Engine-actionable? (yes/no + one-line what)
No — this is an ops/finance policy with no engine math or data; it constrains engine work indirectly (prefer free data tiers and free-tier infra when wiring, per the $25/mo cap).
