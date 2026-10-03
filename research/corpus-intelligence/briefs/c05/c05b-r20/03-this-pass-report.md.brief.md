# docs/launch-prep/03-this-pass-report.md
## What it is (1-2 sentences)
A dated 2026-05-20 launch-prep pass report documenting a brand/design-system/marketing-surface overhaul (working brand "Helm") plus deploy scaffolding (Vercel crons, Stripe seed, deploy-readiness check) for the Sports web app.

## Key metrics/methods (formulas where given, else "not specified")
- Cron cadences (vercel.json): refresh-odds every 30 min (wired to `processSport()` from `@sports/ingestion-pipeline`, authenticated with CRON_SECRET, loops all SUPPORTED_SPORTS), settle-picks every 15 min (stub — full loop still in `workers/data-refresh/src/index.ts`), jarvis-snapshot every 6 hr (stub — ring buffer populated on-demand by cockpit visits).
- Gate sequence: 30-day silent-collection phase (no public picks, no Stripe checkout, no performance stats); at day 30 (or earlier if 100+ canonical picks settle), open performance gate per `docs/launch-runbook.md §5`, then flip PUBLIC_PICKS_ENABLED + enable Stripe checkout.
- Trust invariants preserved: banned-phrase registry (`apps/web/lib/trust-claims.ts`) unchanged; public-copy scanner tests still cover homepage, pricing, dashboard, performance, picks pages; performance/public-picks/outcome-learning gates all default OFF; seed-picks boundary (`NODE_ENV !== "production"`) unchanged.
- Prior suite: 297 tests; `npm run test:brand-safety` expected green. No formulas.

## Data sources named
- The Odds API (env/coverage check in deploy-readiness script)
- Stripe (price seeding), Anthropic, Postgres, Redis (validated by `check-deploy-readiness.mjs`)
- `01-account-setup.md`: estimated monthly burn ~$41/mo through the silent-collection phase; setup time ~1.5 hours.

## Findings (numbers and facts, not vibes)
- Net file count for the pass: ~20 files added, ~10 modified, 0 deleted.
- 5 new public pages: methodology, responsible-play, terms (v1 placeholder, needs counsel review before paid checkout), privacy, contact.
- 3 new API cron routes (1 wired, 2 stubbed).
- 2 new operator scripts: `scripts/check-deploy-readiness.mjs` (validates env coverage, Postgres, The Odds API, Stripe, Anthropic, Redis; green/red checklist, non-zero exit on failure) and `scripts/seed-stripe-prices.mjs` (idempotent Stripe product/price seeder using `metadata.lookup` tags and price `lookup_key` tags).
- Design system v2: `ink` (editorial charcoal), `accent` (electric cyan), `confidence`, `risk` palettes; display-2xl/xl/lg eyebrow type scale; `live-pulse`, `fade-up`, `shimmer` motion; `glass`, `pop` shadows.
- Brand centralized in `apps/web/lib/brand.ts` (brand name "Helm", tagline, monogram, support/legal emails, tier display names, helpline).
- Verceil region pin: iad1; baseline security-headers block.
- Deferred work: component library kit extraction (PickCard exists; HeroCommandCenter, MarketMovementIndicator, JarvisUpdatePanel remain inline), picks/performance/promotions page redesigns, mobile-first refinement, real logo (monogram `H` ships), x-vercel-cron defense-in-depth on cron routes, final domain + Stripe live mode.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Banned-phrase registry + public-copy scanner tests unchanged as trust invariant — TRUST-SIGNAL
- Performance gate / public-picks gate / outcome-learning gate sequence with 100+ settled canonical picks threshold before opening — TRUST-SIGNAL
- 4-phase model pipeline (Ingest / Score / Publish / Calibrate) + readiness-gate explainer on /methodology — OTHER
- 30-min odds refresh cron + 15-min settlement cron define the data cadence the engine's freshness metrics sit on — OTHER

## Engine-actionable? (yes/no + one-line what)
No — historical infra/launch report; no model features. (Operational note only: the 100-canonical-picks-before-opening threshold and gate-sequence pattern are reusable governance logic for any public pick surface.)
