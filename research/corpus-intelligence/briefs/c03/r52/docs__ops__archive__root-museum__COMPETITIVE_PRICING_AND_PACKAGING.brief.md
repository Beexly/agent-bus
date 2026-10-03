# docs/ops/archive/root-museum/COMPETITIVE_PRICING_AND_PACKAGING.md
## What it is (1-2 sentences)
A June 2026 competitive pricing decision for GSN (Galaxy Sports Network / Galaxy Sports Edge picks product): live-web competitor pricing research, a teardown of the old weekly-billing pricing in code, and a proof-gated "founding → proven → established → authority" price ladder set in code.

## Key metrics/methods (formulas where given, else "not specified")
Formulas/metrics: old pricing Pro $9.99/wk ≈ $43/mo, Elite $13.99/wk ≈ $60/mo (weekly × 52/12). Weekly billing = ~52 renewal/dunning/reconsideration events per year vs 1 for annual; annual churns ~3× less than monthly (claimed). FOUNDING price ladder: Pro $14.99/mo · $99/yr, Elite $24.99/mo · $179/yr (~40–45% annual discount). PROVEN trigger: ≥100 canonical settled picks + published calibration. ESTABLISHED trigger: ≥500 settled + verified CLV beat-close ≥52.4% (break-even). Cited stats: documented transition policies cut pricing-change escalations ~25%; value-paired increases lift retention ~26%; grandfathering removes the 10–15% increase-churn spike (ProfitWell). Single source of truth: `apps/web/lib/pricing/pricing-phases.ts`.

## Data sources named
Live web research June 2026: dimers.com/subscription, dimers.com/subscription/dimers-pro-vs-action-pro, sportshandle.com betting guides, oddsjam.com/subscribe, unabated.com/pricing, pickswise.com, rotogrinders.com sports-betting guides. In-repo: `lib/stripe.ts`, `app/pricing/page.tsx`, `apps/web/lib/pricing/pricing-phases.ts`, `components/pricing/pricing-plans.tsx`, `__tests__/pricing-honesty.test.ts`, `.env.example`.

## Findings (numbers and facts, not vibes)
- Competitor pricing landscape (June 2026, verified-ext): Pickswise free; Dimers Pro $24.99/mo (~$8.33/mo annual ≈ $99.99/yr) with Dimebot AI chat, Parlay Picker, Discord; BettingPros $29.99/mo ($119.98/yr ≈ $9.99/mo); Rithmm ~$29.99/mo 7-day trial; ParlaySavant ~$19/mo; BetQL ~$30/mo / ~$200/yr; OddsJam $199.99/mo Gold (40+ books), $399.99 Global; Unabated $49–199/mo. Picks cluster $20–30/mo, annual ≈ $8–12/mo, free tiers + 7-day trials are table stakes.
- Old GSN pricing (Pro $9.99/wk, Elite $13.99/wk, weekly billing, no monthly/annual/trial) was priced above every proven incumbent while still bootstrap with no public track record — identified as backwards.
- Decision: proof-gated named price ladder (FOUNDING $14.99/24.99 · $99/179; PROVEN $19.99/29.99 · $149/229; ESTABLISHED $29.99/49.99 · $219/349; AUTHORITY $39.99/69.99 · $299/499); phase advancement is a deliberate human action via `PRICING_PHASE` env, never automatic.
- GSN moat (verified-code): published calibration + Brier + discrimination; tamper-evident track record, loss autopsies, model journal; full factor trail ("why") on every pick; venue-agnostic fair value. Gaps vs competitors: no proven public record, no AI chat surface, no parlay/DFS tools, no mobile app, no community, no free trial.
- Operator action required: create the 4 test-mode Stripe prices and set `STRIPE_{PRO,ELITE}_{MONTHLY,ANNUAL}_PRICE_ID`; no live Stripe charges touched.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Proof-gated price ladder (100 settled picks + published calibration; 500 settled + 52.4% CLV beat-close): TRUST-SIGNAL — the public accountability milestones (calibration curve, tamper-evident record) are exactly the trust signals the engine must generate
- CLV beat-close ≥52.4% as break-even trigger: TRUST-SIGNAL — hardwires closing-line-value beating as the market edge standard
- Published calibration + Brier + discrimination as differentiator: TRUST-SIGNAL — confirms the "grade ourselves honestly" posture competitors lack
- Competitor feature gaps (AI chat, parlay/DFS tools, community, free trial): OTHER — product roadmap, not engine intelligence
- Pricing psychology stats (25% fewer escalations, 26% retention lift, 10–15% churn spike): OTHER — business, not engine

## Engine-actionable? (yes/no + one-line what)
Yes — locks the engine's public output contract: ≥100 canonical settled picks + published calibration curve are the PROVEN gate, and 52.4% CLV beat-close is the market-beating standard the engine must clear.
