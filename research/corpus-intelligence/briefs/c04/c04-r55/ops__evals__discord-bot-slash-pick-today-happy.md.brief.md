# docs/ops/evals/discord-bot-slash-pick-today-happy.md
## What it is (1-2 sentences)
An eval fixture (surface: discord-bot, scenario: pick-today-happy, status: pending-runner) specifying the happy-path behavior of the `/pick today` slash command for a linked Pro-tier user on a 2-free + 1-Pro pick slate. It pins tier-gated rendering rules, leak prevention, and rate limits across 10 pass criteria.

## Key metrics/methods (formulas where given, else "not specified")
- not specified (this is a behavioral eval spec, no formulas). Quantitative thresholds: rate limit = >10 calls per 5 minutes from the same user → "you're going too fast" refusal; slate shape = 2 free-tier published picks + 1 paid Pro-tier pick.

## Data sources named
- None (no external data; fixtures are Galaxy's own published pick embeds and tier-gated factor breakdowns; URL footer galaxysportsedge.com).

## Findings (numbers and facts, not vibes)
- Default `/pick today` (no args) returns an EPHEMERAL message visible only to the requester.
- Pro-tier requester sees the Pro pick with full factor breakdown; Free-tier users see Free-tier projection of paid picks (Edge Index + grade visible, factor breakdown fields stripped).
- `/pick today public:true` posts publicly; Pro-tier picks REMAIN tier-gated even publicly (stripped projection shown to Free-tier channel viewers).
- Forbidden: leaking paid-tier content to Free users; caching responses across users; posting Pro-tier teaser upsell text ("Want to see today's Pro pick? Subscribe...") in Free responses; channel spam (public mode opt-in).
- Rate limit: >10 calls/5 min per user → refusal.
- Compliance scanner must run on embed text before send and return `status: 'green'`.
- Free-tier picks (2) render identically to all tiers.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — product/surface compliance spec; no QB/coaching/OL/scheme intelligence content. Marginal engine relevance: the Edge Index + grade vs. factor-breakdown strip-down documents which engine internals are publishable per tier (public doctrine: internals stay private).

## Engine-actionable? (yes/no + one-line what)
No — product tier-gating eval for the Discord bot surface; nothing about model building, calibration, or sports data. (File as reference for the public/private surface doctrine: factor breakdowns are Pro-only, Edge Index + grade are the public tier.)
