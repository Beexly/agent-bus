# engine/research/2026-09-28/vercel-max-leverage-round2/r2-caching.md
## What it is (1-2 sentences)
A 2026-09-28 public-sources-only deep-research note on Next.js App Router caching for the GSE sports-web on Vercel — ISR mechanics, the `'use cache'`/Cache Components model, PPR status, Vercel cost gotchas, and per-page-type recommendations (projections, rankings, internal read APIs, internal fence) with migration checklist. Largely superseded as a plan by isr-verdict-public-pages-stay-dynamic (the "identical for every visitor" assumption was false).

## Key metrics/methods (formulas where given, else "not specified")
- ISR mechanics: `export const revalidate` = false (cache indefinitely, on-demand only) / 0 (always revalidate) / N seconds (stale-while-revalidate); lowest revalidate wins across fetches in a route; on-demand via `revalidatePath`/`revalidateTag` is lazy (next request regenerates — warm with a fetch); background regeneration counts as compute on per-request billing; any `revalidate: 0`/`no-store` fetch poisons the route dynamic; `NEXT_PRIVATE_DEBUG_CACHE=1` and `x-nextjs-cache` (HIT/STALE/MISS/REVALIDATED) for diagnosis.
- Cache-Control emitted: static pages `s-maxage=31536000`; ISR pages `s-maxage={revalidate}, stale-while-revalidate={expire - revalidate}` (default expire 1yr); dynamic pages `private, no-cache, no-store, max-age=0, must-revalidate` (automatic via force-dynamic).
- Cache Components (Next 16, v16.3.6 observed): `'use cache'` stable, keyed by build ID + function ID + serializable args; no `cookies()`/`headers()`/`searchParams` inside; `updateTag` Server-Actions-only; `revalidateTag(tag, profile)` — profile is REQUIRED in Next 16 (`revalidateTag('slate','max')`); enabling `cacheComponents: true` ERRORS on leftover `dynamic`/`revalidate`/`fetchCache` exports.
- cacheLife profiles: default 5m/15m/never; seconds 30s/1s/1m; minutes 5m/1m/1h; hours 5m/1h/1d; days 5m/1d/1w; weeks 5m/1w/30d; max 5m/30d/1y (stale/revalidate/expire).
- Cost gotchas: function invocations are the meter; cache hits never count; ISR reads/writes billed in 8KB units with writes ~10× reads; `'use cache'` runtime output does NOT durably persist on serverless Vercel (in-memory, lost across requests); PPR route with holes still invokes the function on a shell hit — holeless ISR is cheaper for uniform pages; Vercel cron auth pattern is `Authorization: Bearer <CRON_SECRET>`, crons can miss or duplicate (jobs must be idempotent).
- Page-type recipes: public projections — hole-free ISR `revalidate = false` + on-demand invalidation from publish flow; rankings — `revalidate = 86400` safety net + on-demand primary (or 604800 pure TTL); internal read APIs — cache only public-safe payloads (`force-static` + `revalidate = 300` for GET), else `force-dynamic`; internal fence pages — `force-dynamic` with auto private headers, auth in middleware, never capture per-user secrets in `'use cache'` scopes.

## Data sources named
- Public Next.js documentation (v16.3.6, preview.nextjs.org; updateTag API reference; cacheLife reference), Vercel cron docs (via theimhtikesoe audit 2026-08-27), community Vercel cost references (catcorner22/cursor_skills, saleor paper-storefront rules, rector-labs journal), nextjs security guide (khanelinix). Explicitly: no repo access, no deployment/testing in this research pass.

## Findings (numbers and facts, not vibes)
- Plain hole-free ISR beats PPR for uniform pages (Vercel cache-layer docs: "A route with holes still invokes the function on a shell hit; a holeless route is just ISR (a pure prerender HIT)").
- The critical correction: `updateTag` from a cron Route Handler does not work (Server Actions only) — use `revalidateTag(tag, 'max')` or `revalidatePath` in cron handlers.
- `'use cache'` alone does not replace ISR for Vercel cost savings (in-memory entries don't survive across serverless requests).
- Queued/unverified in this pass: whether sports-web has `cacheComponents: true`; Fluid Compute billing of background revalidation; ISR unit counts on the actual bill; on-build eager regeneration status.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — front-end caching research; the public/private surface doctrine is restated as the cache-eligibility fence (cache only projections/rankings/published picks/outcomes; never signals, methodology, NGS, or metrics internals).

## Engine-actionable? (yes/no + one-line what)
**No** — thorough but web-infra research; superseded for GSE's tier-gated money pages by the isr-verdict note, and carries no football intelligence.
