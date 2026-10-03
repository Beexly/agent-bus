# ops/UNDER_LEVERAGED_QUEUE_DRAIN_V4.md
## What it is (1-2 sentences)
A 2026-08-06 queue-drain checklist (v4) capturing eight under-leveraged items — sitemap, CSP, service worker, analytics, durable memory, email, press kit, news sitemap — that were drained to code/docs/ops status, plus the founder-only items still blocked.

## Key metrics/methods (formulas where given, else "not specified")
- Sitemap density: cap preview URLs at **120**; only SCHEDULED/LIVE within a **±3d/21d** window; drop FINAL flood
- Full CSP: baseline CSP on main routes via next.config + vercel.json; embeds keep `frame-ancestors *`
- Service worker: documented push-only honesty; no offline theater
- Email send path: waitlist welcome via Resend gated on `WAITLIST_WELCOME_EMAIL=true`
- News sitemap substance: Journal + newsletter + podcast with issue 003 in a **48h** window

## Data sources named
- Neon `JarvisMemoryEvent` (durable history persist + trend merge)
- Resend (waitlist welcome email)
- Clarity / PostHog (analytics; Clarity already gated on main)
- Brand asset links + honest odds cadence fact (press kit)

## Findings (numbers and facts, not vibes)
- 8 queue items drained: 6 to "code" status (sitemap, CSP, Jarvis durable history, email path, press kit, news sitemap), 1 to "docs" (service worker), 1 to "ops" (Clarity/PostHog PR cleanup — Clarity already gated on main, draft PRs closed as superseded / founder-key blocked)
- Concrete thresholds shipped: 120 preview-URL sitemap cap; ±3d/21d scheduled/live window; 48h issue-003 window
- Still founder-only (blocked, not done): redeploy main; RESEND_API_KEY + WAITLIST_WELCOME_EMAIL; Clarity/PostHog project IDs; free-lane + CLAUDE_PROVIDER=auto + cloud maps

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: Sitemap cap (120 preview URLs, ±3d/21d window) and the 48h news cadence are concrete SEO/traffic-lever numbers for the traffic-first operating rule — a real cadence spec, not a target (serves the tracking/other program).
- **OTHER**: "No offline theater" (service worker honesty) mirrors the no-invent doctrine in calibration: public surfaces must not simulate capability they don't have — the same honesty constraint that governs engine stat claims (serves TRUST-SIGNAL adjacent discipline, tagged OTHER).

## Engine-actionable? (yes/no + one-line what)
no — ops hygiene checklist, not engine logic; only the honesty norms carry over and those are already codified elsewhere.
