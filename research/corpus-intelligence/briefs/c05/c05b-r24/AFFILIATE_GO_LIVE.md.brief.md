# ops/archive/root-museum/AFFILIATE_GO_LIVE.md
## What it is (1-2 sentences)
A go-live runbook for the GSE affiliate revenue lane (additive to subscription, fully dark by default): what's already built (compliance gate, operator registry, `/promotions` public surface, `/go/[slug]` click gate, legal pages), the 5 owner steps to activate one partner, and the guardrails that stay on.

## Key metrics/methods (formulas where given, else "not specified")
- **Compliance gate** (`apps/web/lib/promotions/guards.ts`): a promo cannot show publicly without affiliate disclosure, responsible-gaming text, a real operator terms URL (placeholder/test/`javascript:` URLs rejected), an `eligibleStates` allow-list, unexpired + ACTIVE/APPROVED status, no banned hype language, and an approved operator. State filtering honored.
- **Operator registry** (`apps/web/lib/cockpit/operator-registry.ts`): DraftKings, FanDuel, BetMGM, Caesars, BetRivers, Fanatics, ESPN BET pre-loaded as `KNOWN_NOT_PARTNERED` — recognized but cannot publish until flipped to `APPROVED_PARTNER`.
- **Click gate** (`/go/[slug]`): re-checks compliance at click time (never forwards a pulled/expired promo); attaches first-party `subid` for attribution.
- **Activation record shape**: real `affiliateUrl`, real `termsUrl`, `disclosureText`, `responsibleGamingText`, `eligibleStates`, `minimumAge: 21`, `status: "ACTIVE"`, `complianceStatus: "APPROVED"`; `licensedStates` filled from the signed agreement + operator's current state licensing (left empty so nothing is fabricated).
- **Link hygiene**: affiliate links carry `rel="nofollow sponsored noopener noreferrer"`; disclosure + RG text on every card.
- **Optional follow-up**: durable click tracking via a `PromoClick` Prisma model written from the `console.info` seam in `/go/[slug]/route.ts`; per-network sub-id parameter names (some use `btag`/`s1` instead of `subid`); optional `AFFILIATE_SUBID` env.

## Data sources named
- Operators: DraftKings, FanDuel, BetMGM, Caesars, BetRivers, Fanatics, ESPN BET.
- Legal pages: `/responsible-play`, `/privacy`, `/terms` (1-800-GAMBLER, self-exclusion, ncpgambling).

## Findings (numbers and facts, not vibes)
- Affiliate is additive and stays fully dark until deliberately turned on, partner by partner; `/promotions` renders an honest empty-state when no partner is approved.
- Seed safety: demo promotions never seed a production database.
- Owner steps are deliberately not automatable (EIN + affiliate program application → affiliate ID/tracking link; engage counsel if required; flip `operatorClass` to `APPROVED_PARTNER`; create the `Promotion` row; optional sub-id).
- Guardrails that stay on: no promo publishes without an `APPROVED_PARTNER` operator; no state shows a promo unless in its `eligibleStates`; banned hype language blocked in headlines/summaries; click gate fails closed to `/promotions` on any compliance regression.
- This is an ops/museum archive doc (root-museum), not an engine-signal doc.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: honest empty-state when no partner approved (same refuse-default pattern as the board); compliance-at-click-time re-check; disclosure + responsible-gaming text on every card; banned-hype-language filter.
- **OTHER**: additive-revenue design — affiliate stays dark by default, one-partner-at-a-time activation with real legal action gating.

## Engine-actionable? (yes/no + one-line what)
No — affiliate revenue ops, not engine signal; only the fail-closed compliance pattern is reusable elsewhere.
