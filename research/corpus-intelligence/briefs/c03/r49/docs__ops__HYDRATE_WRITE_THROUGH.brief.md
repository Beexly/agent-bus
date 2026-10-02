# docs/ops/HYDRATE_WRITE_THROUGH.md
## What it is (1-2 sentences)
A short spec of the PlayerGameStat → NflverseMemoryStore write-through hydration path: Prisma `PlayerGameStat` rows are flattened to `nfl.*` metrics and written into the PIT online cold plane, with no Odds API key required and session Stripe entitlements winning over query-param tier elevation.
## Key metrics/methods (formulas where given, else "not specified")
Path: (1) Prisma `PlayerGameStat` (SoR, nflverse CC-BY) → (2) `expandPrismaPlayerGameStat` flattens to `nfl.*` metrics → (3) `writeThroughPlayerGameStats` (prefix allowlist + batch cap) → (4) `NflverseMemoryStore.put` (PIT online cold plane). No formulas.
## Data sources named
nflverse (CC-BY licensed, system of record via Prisma `PlayerGameStat`); nflverse `PlayerGameStat` prisma rows; /values endpoint session tiering (`apps/web/lib/gse-stats/session-tier.ts`).
## Findings (numbers and facts, not vibes)
- Law: `oddsApiRequired=false` for the cold plane; LIVE_BOARD off; measurement > narrative.
- Packages ported 2026-07-29: `@sports/partner-stack` (anti-affiliate + entitlements pure), `@sports/phase-c` (remeasure methodology, "no invented 5b"), `@sports/ops` (hydrate-force checklist).
- Code: `packages/stats-api/src/hydration/write-through.ts` (`hydratePlayerGameStatsToMemory(store, rows)`); worker `workers/data-refresh/src/hydrate-cold-plane.ts` (no Odds API key required); web `hydrateLocalNflverseMemory` in `apps/web/lib/gse-stats/value-provider.ts`.
- Session Stripe entitlements win; `?tier=` query param alone cannot elevate.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- nflverse flat `nfl.*` metric flattening as the engine's cold-plane stats store: OTHER (engine data-plumbing inventory — stats layer feed path).
- `oddsApiRequired=false` free cold plane: OTHER (free-lane stats hydration, no paid API dependency).
- No QB-BEHAVIOR, COACHING, OL, SCHEME, or TRUST-SIGNAL findings in this file (one-law "measurement > narrative" is adjacent but not tagged).
## Engine-actionable? (yes/no + one-line what)
yes — This documents the actual engine stats feed path (Prisma PlayerGameStat → nfl.* flat metrics → NflverseMemoryStore cold plane); the total-signal program should treat this as the stats ingestion layer to wire signals into.
