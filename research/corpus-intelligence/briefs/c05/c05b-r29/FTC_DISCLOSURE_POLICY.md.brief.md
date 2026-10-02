# revenue/FTC_DISCLOSURE_POLICY.md
## What it is (1-2 sentences)
The FTC disclosure policy for GSE revenue surfaces (updated 2026-07-04): every sponsor, affiliate, paid placement, commission relationship, or material partner relationship requires clear disclosure near the mention.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Minimum disclosure rules: close to the partner/offer mention; visible before the user acts; not buried in footer-only copy; preserved in repurposed content; sponsored video content must use platform paid-promotion controls where available.
## Data sources named
None. Code surface: `apps/web/lib/revenue/disclosure-policy.ts`, `apps/web/lib/revenue/offer-eligibility.ts`, `apps/web/lib/revenue/offer-copy-builder.ts`.
## Findings (numbers and facts, not vibes)
- Policy last updated 2026-07-04.
- Disclosure must be close to the mention and visible before the user acts — not footer-only.
- Disclosure must be preserved when content is repurposed.
- Sponsored video content must use platform paid-promotion controls where available.
- Three code modules named under `apps/web/lib/revenue/`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: revenue-lane compliance posture for affiliate offers (Amazon Associates lane).
## Engine-actionable? (no — compliance policy, not engine material)
