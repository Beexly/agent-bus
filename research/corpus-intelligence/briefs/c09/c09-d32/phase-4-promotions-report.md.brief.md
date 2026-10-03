# phase-4-promotions-report.md
## What it is (1-2 sentences)
Phase-4 build report (2026-05-18, branch `sports-intelligence-os-phase-1`) for a compliance-gated sportsbook promotions/affiliate marketplace: the `Promotion` data model, public/admin routes, the single-source publish guard, cockpit review-queue integration, and seed/test coverage.
## Key metrics/methods (formulas where given, else "not specified")
`evaluatePromotionForPublish` in `apps/web/lib/promotions/guards.ts` refuses public rendering unless ALL eight rules pass: `disclosureText`, `responsibleGamingText`, `termsUrl` present; not past `expiresAt`; `status` == ACTIVE; `complianceStatus` == APPROVED; headline/offerSummary free of banned hype phrases; `eligibleStates` declared; requested state in `eligibleStates` and not in `restrictedStates`. All eight rules covered by `apps/web/__tests__/promotions-guards.test.ts` (12 assertions). Tests added: promotions-guards (12 assertions), promotions-public-payload (5), public-copy-scanner updated for `/promotions`, route-smoke (includes promotions routes).
## Data sources named
`packages/db/prisma/schema.prisma` (`Promotion` model), `apps/web/lib/promotions/guards.ts`, `apps/web/app/cockpit/layout.tsx` (admin gate), `packages/db/prisma/seed.ts` (five demo promotions), cockpit review queue (BOBBY owns promotions review; JARVIS owns disclosure-missing blocks; `transitionTask` allow-list service).
## Findings (numbers and facts, not vibes)
- `offerCategory` enum: `DEPOSIT_MATCH`, `RISK_FREE_BET` (legacy industry term — display copy may NOT use "risk free"), `ODDS_BOOST`, `BONUS_BET`, `SIGNUP_BONUS`, `REFERRAL`, `OTHER`; `affiliateType` enum: `CPA`, `REVSHAARE`, `HYBRID`, `NONE`; `status` enum: `DRAFT`, `NEEDS_REVIEW`, `ACTIVE`, `PAUSED`, `EXPIRED`, `ARCHIVED`, `BLOCKED`; `complianceStatus` enum: `UNREVIEWED`, `APPROVED`, `NEEDS_TERMS`, `NEEDS_STATE_REVIEW`, `NEEDS_DISCLOSURE`, `BLOCKED`; defaults US / 21+.
- Five seed promotions: `draftkings-bonus-bet-200` (ACTIVE/APPROVED, fully compliant), `fanduel-odds-boost-week` (NEEDS_REVIEW/NEEDS_STATE_REVIEW), `betmgm-signup-bonus` (DRAFT/NEEDS_TERMS), `expired-historical-promo` (EXPIRED), `blocked-noncompliant-promo` (BLOCKED, banned hype copy) — plus two companion cockpit tasks.
- Public surface: `/promotions` with optional `?state=XX` filter and `GET /api/promotions`; admin at `/cockpit/promotions` and `/cockpit/promotions/[slug]`.
- Runtime blockers at write time: sandbox could not execute `npm install`/`db:push`/`test`/`build` (emptied `node_modules/.bin`, mount returns "Operation not permitted"); validation by static inspection only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (affiliate/product ops): compliance-gated promotions marketplace model and publish guard.
## Engine-actionable? (yes/no + one-line what)
No — affiliate/product surface; nothing for the prediction engine.
