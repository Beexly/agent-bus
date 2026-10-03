# ops/SERVICE_WORKER_PRODUCT_VALUE.md
## What it is (1-2 sentences)
Honest capability note for `apps/web/public/sw.js`: it is a web-push notification service worker only (push → system notification; notificationclick → focus/open URL) — not an offline cache or PWA install, and inert until the user grants permission, a subscription is stored, and the server sends a push.
## Key metrics/methods (formulas where given, else "not specified")
Not specified.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- What it is NOT: not an offline app cache, not a PWA "install for offline board", does not intercept `fetch` or cache HTML/API.
- Product rule: do not market "offline GSE" or "install our PWA for live odds" while the SW is push-only; manifest description already avoids live-odds cadence claims.
- Autonomy note: agents leave the SW push-only unless the founder asks for offline product and accepts cache complexity + honesty risk.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: web-platform note, no football intelligence.
## Engine-actionable? (yes/no + one-line what)
No — product/infra note.
