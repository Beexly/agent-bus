# engine/research/2026-09-28/isr-verdict-public-pages-stay-dynamic-2026-09-28.md
## What it is (1-2 sentences)
A 2026-09-28 verdict overturning the round-2 ISR recommendation for public projections/rankings pages: those pages render per-tier content (Free teaser vs Pro/Elite full), so ISR would leak tier-gated content; /board, /picks, /slate, /performance must stay `force-dynamic`, with real runtime wins shipped or queued instead.

## Key metrics/methods (formulas where given, else "not specified")
- Correctness rule: /board, /picks, /slate stay `force-dynamic` (each calls `auth()` + `getUserEntitlements()` per request); /performance stays dynamic per repo rule `.claude/rules/nextjs-caching.md` (reads settled picks + calibration state per request).
- ISR legitimacy gate: only for uniform public pages passing the public/private fence checklist (no signals, no methodology, no NGS, no metrics internals); pattern `revalidate = false` + on-demand `revalidatePath` from CRON_SECRET-protected route with warm-up fetch, `revalidate = 86400` safety net; one uncached fetch or `cookies()`/`headers()` poisons the route dynamic; verify with `next build && next start`.
- Shipped: middleware matcher narrowed to gated paths only; `github.autoJobCancelation: true` in vercel.json; pooled-connection boot guard in `@sports/db` (warns when DATABASE_URL is not `-pooler` host with `?pgbouncer=true`, warn-only).
- Queued (needs measurement): Fluid `memory: 512` + `maxDuration: 120-180` per cron route in vercel.json — NOT blind: backtest-calibration, calibration-metrics, feature-recipe-backtest, hydrate-cold-plane and backfill crons are compute-heavy and may OOM at 512MB; measure peak memory per route first.

## Data sources named
- Repo evidence: `apps/web/app/picks/page.tsx`, `vercel.json`, `@sports/db`, `.claude/rules/nextjs-caching.md`.

## Findings (numbers and facts, not vibes)
- Round-2's ISR recommendation rested on a false assumption (pages identical for every visitor); a single cached HTML shell would show Pro content to logged-out visitors or Free content to paying users.
- `force-dynamic` on tier-gated money pages is correct and not a missed optimization.
- Memory guard specifics: do not apply 512MB Fluid limits to the compute-heavy calibration/backfill crons without per-route peak-memory measurement first.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — web-infrastructure caching correctness; the only intelligence-relevant element is the public/private fence checklist reference (projections/rankings/published picks/outcomes only — no signals, no methodology, no NGS).

## Engine-actionable? (yes/no + one-line what)
**No** — correctness guard for site caching; prevents a tier-content leak incident but contains no model or intelligence signal.
