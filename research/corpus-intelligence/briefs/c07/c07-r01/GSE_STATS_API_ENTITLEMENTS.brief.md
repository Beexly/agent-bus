# api/GSE_STATS_API_ENTITLEMENTS.md
## What it is (1-2 sentences)
Entitlement law mapping the live Stripe tiers to Stats API surfaces: FREE and FANTASY (`prod_Ur6RIZ0AzmKKiT`) get `public_api` only; PRO (`prod_Ud95br56Qtsfiq`) adds `pro_api`; ELITE (`prod_Ud980MnXT07NnOv`) adds `elite_api`; dark/blocked metrics return 403 for all tiers.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas; entitlement resolution: `tierForPriceId` maps subscription → tier → handlers; `tier=` query param on `/metrics` and `/metrics/:id` until session-auth wires real entitlements.
## Data sources named
Stripe (Galaxy Sports Network `acct_1TPE9kQ2wPZMxx60`); three product IDs: `prod_Ur6RIZ0AzmKKiT` (FANTASY), `prod_Ud95br56Qtsfiq` (PRO), `prod_Ud980MnXT07NnOv` (ELITE).
## Findings (numbers and facts, not vibes)
- No price/product creation here — only the entitlement law between existing products and API surfaces.
- Dark metrics are 403 for ALL tiers, including ELITE.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: monetization/entitlement architecture. INFERENCE: the "dark metrics 403 for all tiers" rule aligns with the 9/28 public/private doctrine (site shows only projections and rankings; internals stay fenced).
## Engine-actionable? (yes/no + one-line what)
No — billing/entitlement law; no modeling content.
