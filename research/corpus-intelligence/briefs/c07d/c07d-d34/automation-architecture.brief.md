# automation-architecture.md

## What it is (1-2 sentences)
An operations playbook deciding the GSE social-media/content/ops automation stack: self-hosted n8n orchestrated by Coolify on a ~$5/mo Hetzner VPS, replacing Zapier/Buffer/UptimeRobot/Make (~$57/mo saved), with a day-by-day Week-1 deploy plan. No sports-prediction modeling; purely operational infrastructure.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no statistical methods). Cost math stated: Zapier (5k tasks/mo) $30/mo + Buffer (10 channels) $15/mo + UptimeRobot Pro $7/mo + Make.com (basic) $10/mo = $62/mo SaaS replaced by +$5/mo VPS → ~$57/mo savings, ~$680/year. Pays for itself in 3 days.

## Data sources named
- n8n built-in nodes: X (Twitter), Twitter, Telegram, Discord, RSS, OpenAI/Anthropic, HTTP, webhooks, Postgres
- Anthropic API (post drafting)
- Buffer API (social fan-out: IG/FB/X/Threads)
- Meta's Threads API (still rolling out 2026, no native n8n node yet → HTTP Request node)
- Slack (approval queue + alerts)
- `galaxysportsedge.com/api/picks/published` (webhook), `/api/picks/{id}`, `/api/health`
- Hetzner CX11 VPS, Ubuntu 22.04, Ashburn or Frankfurt
- Coolify (self-hosted PaaS, web UI on :8000); deploys n8n (:5678), Postgres, Redis, Ghost (:2368)
- Public endpoint: `automate.galaxysportsedge.com` via Caddy/Traefik; `n8n.galaxysportsedge.com`, optional `newsletter.galaxysportsedge.com`
- Mailgun (free 1k emails/mo) for optional Ghost newsletter

## Findings (numbers and facts, not vibes)
- Decision: self-hosted n8n on Coolify; Week-1 setup. n8n has 400+ integrations, AI-native (LangChain), fair-code license.
- Of 9 uploaded candidate tools: n8n ✅ core; Coolify ✅ platform; Ghost 🟡 optional (only if paid newsletter "Weekly Edge — top 3 picks of the week, $5/mo" is wanted; `/blog` route already exists).
- Hard-skip reasoning: "Automated-Socialmedia-Posting" (Selenium browser-scraping of FB/IG/X) is against ToS — accounts banned within days; postwill (Ruby gem, custom glue); Bridgy (IndieWeb POSSE, wrong use case); Social-Media-App (build-your-own-Facebook tutorial, wrong tool).
- X posting via official API requires X Developer paid tier $100/mo — explicitly recommended AGAINST for now; use Buffer free tier as the fan-out bridge (n8n → approve → Buffer → IG/X/Threads/FB) until X traffic justifies it.
- 5 planned n8n workflows: (1) Daily post drafter: Cron 9am CT → Anthropic API → Slack approve/reject → on approve Buffer schedules for 6pm CT. Draft prompt constraint: "Voice: calm, technical, mission-control. Banned: guaranteed, lock, sure thing. 280 char max." (2) Buffer/social pusher: approved post → Buffer API → IG/FB/X/Threads. (3) Pick-published webhook: `POST /pick-published` → HTTP GET pick → Anthropic teaser draft → Slack review → Buffer schedule. (4) Performance gate watcher: daily `SELECT COUNT(*) FROM picks WHERE settled_at IS NOT NULL` → Slack alert at count 100. (5) Health check: every 5 min GET `/api/health` → Slack alert on non-200.
- Week-1 plan: Day 1 provision Hetzner CX11 + Coolify installer + `automate.galaxysportsedge.com` A record in Cloudflare DNS, gray cloud (DNS only). Day 2 deploy n8n via Coolify one-click template (env: N8N_BASIC_AUTH_ACTIVE=true etc.). Day 3 connect social APIs (OAuth once per platform). Day 4 build first three workflows. Day 5 Ghost (optional).
- Explicit tonight-vs-Week-1 sequencing: tonight = finish GSE deploy itself, no n8n yet; use Meta Business Suite (free native IG+FB scheduling) + Buffer free tier (X + Threads) in the interim.
- Explicit anti-recommendations: do NOT fork n8n/Ghost/Coolify into the AI Sports monorepo (separate infra, CLAUDE.md preserve-integrity rule, keep `Beexly/Sports` clean); do NOT use the Selenium scraper; do NOT pay for X API tonight.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: The performance gate watcher (`SELECT COUNT(*) ... settled_at IS NOT NULL` → alert at 100 settled picks) is a concrete automation of the proof-layer doctrine — alerting on settlement volume milestone so the Glass Ledger record is honored publicly. This serves the calibration/tracking program as an operational trigger for publishing verified records.
- **OTHER**: The prompt-level banned lexicon ("guaranteed, lock, sure thing") enforced in the daily-drafter workflow is the automation-side instantiation of the honest-claims doctrine and the banned-lexicon trust-gate enforced in CI — mechanism connecting the trust pipeline to content generation.
- **OTHER**: Buffer-as-fan-out architecture avoids per-platform API fees ($100/mo X tier) and parallel OAuth complexity; the decision preserves the no-sportsbook-conflict business structure by keeping automation spend at ~$5/mo, maintaining near-zero cost base (ties to the business plan's break-even math). Serves no QB/coaching/OL program — purely ops.
- **OTHER**: The explicit "do NOT fork into monorepo" rule reinforces the corpus rule that infrastructure state never contaminates the Sports repo's research/proof artifacts — relevant to the tracking lane's data-hygiene posture.

## Engine-actionable? (yes/no + one-line what)
No — ops infrastructure playbook, not engine signal material; file for the automation backlog, not the prediction engine.
