# api/GSE_STATS_API_ENTITLEMENTS.md
## What it is (1-2 sentences)
States the entitlement law mapping live Stripe products to Stats API surfaces for Galaxy Sports Network (`acct_1TPE9kQ2wPZMxx60`) across four tiers, with dark/blocked metrics gated at 403 for all tiers. Short product/pricing doc, not sports analysis.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas. Entitlement matrix (verbatim values):
- FREE: no Stripe product → `public_api`
- FANTASY: `prod_Ur6RIZ0AzmKKiT` → `public_api` only
- PRO: `prod_Ud95br56Qtsfiq` → `public_api` + `pro_api`
- ELITE: `prod_Ud980MnXT07nOv` → `public_api` + `pro_api` + `elite_api`
- Dark / blocked metrics: **403 for all tiers**
- Routing mechanics: query param `tier=` on `/metrics` and `/metrics/:id` until session-auth wires real entitlements; production path resolves tier from subscription via `tierForPriceId` → passed into handlers
- Explicit scope note: no price/product creation here — only the entitlement law between existing products and API surfaces

## Data sources named
Stripe (live products on Galaxy Sports Network `acct_1TPE9kQ2wPZMxx60`). No datasets or external data sources.

## Findings (numbers and facts, not vibes)
- 4 tiers, 3 paid Stripe products (`prod_Ur6RIZ0AzmKKiT`, `prod_Ud95br56Qtsfiq`, `prod_Ud980MnXT07nOv`); FANTASY tier buys no additional API surface beyond `public_api`.
- Blocked metrics return 403 regardless of tier — no tier unlocks them.
- Current auth is a query-param stub (`tier=`); real session-auth wiring is pending, with tier resolution planned through `tierForPriceId`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Product/entitlement doc for the Stats API monetization surface. No connection to QB-behavior, coaching, OL, trust-signal, or scheme programs. Note for the public/private surface doctrine (2026-09-28, HARD): "dark / blocked metrics: 403 for all tiers" is a concrete enforcement of that doctrine at the API layer — proprietary data never leaves the internal fence. Worth cross-referencing with the re-fencing work queued for the public site.

## Engine-actionable? (yes/no + one-line what)
No — entitlement law for the Stats API; nothing to wire into the engine (though it operationalizes the public/private data doctrine the engine already follows).

## Referenced files / papers / datasets
- None
