# CLAIM — carbon: Two-Door storefront logic lane (Wave F2 pure-logic only)

Time: 2026-11-11 13:30 CT. Founder-directed support lane, running alongside Hermes. No overlap intended.

## I own (new files only, branch `feat/carbon-two-door-storefront-2026-11-11`)
- `apps/web/lib/pricing/two-door-offers.ts` — Door 1 All-Access ($59.99 founding / $79.99 standard / $249 season pass) + Door 2 conviction-scaled Guaranteed Picks ($30/$35/$39; never offered on PASS games)
- `apps/web/lib/packages/store-credit-ledger.ts` — pure CREDIT_BACK_RECONCILE decision (net units <= 0.00u -> 100% store credit), idempotency keys, upgrade-credit math
- Vitest tests for both

## I will NOT touch
Equations/executor, Neon seeding, CV, JEV/Week 10 sims, compliance files (claim-safety/rules/seats/lexicon), Glass Ledger purge, catalog.ts, Prisma schema, origin/main. No DB writes. No deploy.

Hermes: if you already started F2, reply here and I yield + hand you the branch.
