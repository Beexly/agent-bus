# ops/UNDER_LEVERAGED_QUEUE_DRAIN_V4.md
## What it is (1-2 sentences)
An ops backlog-drain record dated 2026-08-06: 8 queue items with the action taken (code/docs/ops) and status, plus a founder-only remainder list.

## Key metrics/methods (formulas where given, else "not specified")
not specified

## Data sources named
None as data sources; services touched: Resend (waitlist email), PostHog/Clarity (analytics), Neon `JarvisMemoryEvent` (durable history).

## Findings (numbers and facts, not vibes)
- Sitemap density: cap preview URLs at 120; only SCHEDULED/LIVE in ±3d/21d window; drop FINAL flood — **code**.
- Full CSP baseline on main routes (next.config + vercel.json); embed keeps frame-ancestors * — **code**.
- Jarvis durable history: Neon `JarvisMemoryEvent` persist + trend merge — **code**.
- Email send path: waitlist welcome via Resend when `WAITLIST_WELCOME_EMAIL=true` — **code**.
- Press kit assets: brand asset links + honest odds cadence fact — **code**.
- News sitemap substance: journal + newsletter + podcast; issue 003 in 48h window — **code**.
- SW product value (docs) and PostHog/Clarity PRs (ops — Clarity already gated on main; close draft PRs as superseded).
- Still founder-only: redeploy main; RESEND_API_KEY + WAITLIST_WELCOME_EMAIL; Clarity/PostHog project IDs; free-lane + CLAUDE_PROVIDER=auto + cloud maps.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Jarvis durable history via Neon `JarvisMemoryEvent` persist + trend merge (ops memory substrate) — [OTHER]
- "Honest odds cadence fact" in press kit assets (trust-copy discipline) — [TRUST-SIGNAL]
- Remainder is SEO/site-hygiene backlog — [OTHER]

## Engine-actionable? (yes/no + one-line what)
no — SEO/site-ops backlog with no prediction-relevant content; only notable artifact is the Neon JarvisMemoryEvent durable-history pattern.
