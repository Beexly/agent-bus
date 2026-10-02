# automation-architecture.md
## What it is (1-2 sentences)
The Galaxy Sports Edge automation playbook: decision and week-1 deploy plan for self-hosted n8n on Coolify (Hetzner VPS ~$5/mo) replacing Buffer/Hootsuite/Zapier for social, content, and ops automation.

## Key metrics/methods (formulas where given, else "not specified")
- Cost math: Zapier $30 + Buffer $15 + UptimeRobot Pro $7 + Make $10 = $62/mo SaaS replaced by $5/mo VPS → ~$57/mo saved, ~$680/yr; pays for itself in 3 days.
- X posting via API needs X Developer account ($100/mo paid tier); practical recommendation: use Buffer free tier as the social fan-out layer to avoid the $100/mo X API fee.

## Data sources named
n8n, Coolify, Ghost (optional newsletter), Hetzner CX11 VPS (Ashburn/Frankfurt), Meta Business Suite, Buffer free tier, Cloudflare DNS; galaxysportsedge.com API (`/api/picks/{id}`, `/api/health`); Postgres + Redis for n8n state/queue; Slack approval buttons; Anthropic API for post drafting; Mailgun free 1k emails/mo.

## Findings (numbers and facts, not vibes)
- Tool verdicts: n8n ✅ core (400+ integrations, AI-native LangChain, fair-code license); Coolify ✅ platform; Ghost 🟡 optional; Automated-Socialmedia-Posting ❌ hard skip (browser-scraping FB/IG/X via Selenium — against ToS, accounts banned within days); Bridgy, postwill, Social-Media-App rejected.
- Week-1 plan: Day 1 provision Hetzner + Coolify (`curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash`), Day 2 deploy n8n (n8n.galaxysportsedge.com), Day 3 connect social APIs, Day 4 first three workflows, Day 5 Ghost optional.
- Three starter workflows: daily 9am CT Anthropic-drafted post → Slack approve → Buffer schedule 6pm CT; pick-published webhook → draft teaser → Slack review → Buffer; health monitor every 5 min → Slack alert on failure.
- Performance gate watcher: daily `SELECT COUNT(*) FROM picks WHERE settled_at IS NOT NULL` → Slack alert at 100.
- Rules: don't fork n8n/Ghost/Coolify into the monorepo (preserve-integrity rule); don't pay X API $100/mo tonight; finish the GSE deploy first, n8n after.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Daily Anthropic-drafted on-brand post with banned lexicon ("guaranteed", "lock", "sure thing") and Slack human-approval gate — TRUST-SIGNAL (honest-claims doctrine enforced in automation loop).
- Performance-gate watcher (settled-picks count → alert at 100) — TRUST-SIGNAL (proof-layer accounting).
- No QB/coaching/OL/scheme intelligence content — OTHER (pure ops/infrastructure).

## Engine-actionable? (yes/no + one-line what)
no — infrastructure/automation plan, not engine intelligence; intake only, noted for ops context.
