# docs/BOOTSTRAP_LEVERAGE.md

## What it is (1-2 sentences)
A grounded extraction of the owner's 11,126-resource link dump, prioritizing zero-budget operational and dev-velocity leverage. It names specific free tools/tier equivalents per infra need and a top-5 priority order of actions.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Inventory counts: 11,126 total resources in the dump; 21 free analytics options; 15 RSS/aggregator tools; 102 color-palette/SVG/icon generators.

## Data sources named
FREE_FIRST_DATA.md (asserts the dump has no sports-data sources); NORMALIZED_RESOURCE_LEDGER.csv (the approved-direct ledger every named tool comes from). Named tools: Supabase, Oracle Cloud free VPS, Selfhosted-Apps-Docker, Gitea, Codeberg, GitLab, Grafana, GoAccess, Upstash (free tier, not in dump), promptfoo, LM Studio, GPT4All, AnythingLLM, Awesome Local LLM, Can I Run AI Locally, Ccusage, Code2prompt, LLM Stats, Cloudflare Web Analytics, Umami, GoatCounter, Rybbit, MS Clarity, Feedly, FreshRSS, Miniflux, CommaFeed, Kagi News, NewsMinimalist, Upstract, DeadStack, Crontab Guru, Mockaroo, Mockend, mitmproxy, HTTPToolkit, Snyk, SVGO, SVGCrop, Caesium, PageSpeed, GTmetrix, AbuseIPDB, gitleaks, Resend, Postmark, Mailgun, OneSignal. Free-path sports data: ESPN, henrygd, Open-Meteo, nflverse; gated candidate CFBD.

## Findings (numbers and facts, not vibes)
- The 11,126-resource dump contains **no sports-data sources** — it is operational/cost/dev-velocity leverage only. [OTHER]
- Higgsfield film-slate cost (from cross-referenced POLISH_BACKLOG, not this file): ~18 credits/clip, ~100 credits/full slate, currently HELD. [OTHER]
- Internal app budget layer already exists: `lib/claude-api/` (cost-monitor, usage-store, budget policy, model-router); prompt caching already enabled on the pick-explainer surface. [OTHER]
- Honest gaps the dump does NOT cover: transactional email/web push for Elite tier; sports data/odds (stays on ESPN/henrygd/Open-Meteo/nflverse free path + CFBD gated candidate). [TRUST-SIGNAL: the honest-gap framing; OTHER]
- Priority order (top-down): (1) self-host henrygd on Oracle Cloud free VPS to remove the rate cap; (2) promptfoo eval harness for the 3 live surfaces (pick-explainer, model-court, calibration) to validate model downgrades before shipping; (3) Cloudflare Web Analytics; (4) Snyk + gitleaks in CI; (5) self-host FreshRSS for sports-news intake. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- FreshRSS/self-hosted RSS pipeline feeding the content engine's source list: a route to pipe team-beat news (injury reads, depth-chart notes) into content/Airwave monitoring. [OTHER]
- Honest-gap discipline ("not in the dump, noted for completeness") as a research-standard pattern: declare what a corpus does NOT cover. [TRUST-SIGNAL]
- Remaining content is infra/cost/CI plumbing with no on-field football intelligence. [OTHER]

## Engine-actionable? (yes/no + one-line what)
No — pure build-ops document; the only engine-adjacent thread (FreshRSS → sports-news intake) is already covered by the Airwave lane elsewhere.
