# FREE_FIRST_DATA.md
## What it is (1-2 sentences)
The free-first data architecture doc for the Sports platform: run the stats platform on $0 of paid data wherever a free, cleared source covers the need, with odds/lines (The Odds API) as the single paid dependency, enforced by a per-call spend guard.
## Key metrics/methods (formulas where given, else "not specified")
- Spend guard: `paidCallJustified()` must pass before any paid call; `season-gating.ts` restricts paid odds pulls to in-season sports.
- Cross-source NCAA check: `crossCheckNcaaScores()` joins ESPN ↔ henrygd by stable team **abbreviation** + date proximity (±1 day), reporting agreement / disagreement / coverage gaps. No formula given beyond the join key + window.
- Trust tiers: **CONFIRMED** (two independent free sources agree) / **SINGLE_SOURCE** / **DISPUTED**. `settlePendingPicks()` grades via the engine's `calculatePickResult` but only when trusted — DISPUTED finals HOLD, unmatched stay PENDING.
- henrygd public demo rate cap: 5 req/sec/IP (self-host removes it).
## Data sources named
- ESPN public API — scores/schedule/status (7 sports), AP/Coaches rankings, standings. Clearance: `approved_public_logged_off`.
- henrygd NCAA API — NCAA football **and** basketball scores/rankings/standings; self-hostable via `docker/docker-compose.yml` (ghcr.io/henrygd/ncaa-api :3000); sport paths in `HENRYGD_PATHS`: `cfb`, `mbb`, `wbb`.
- Open-Meteo — game-time weather; open license (CC-BY).
- nflverse — deep NFL stats; open data.
- The Odds API — the one paid dependency (odds/lines only).
## Findings (numbers and facts, not vibes)
- After free-first wiring, odds/lines are the ONLY spend that still justifies paid calls; everything else (scores, schedules, status, rankings, standings, weather, NCAA depth) is served free.
- Modules (apps/web/lib/data-sources): `free-adapters/` (pure parsers + fetchers; `espn-scores` supports `dates` targeting, required to fetch past finals); `source-router.ts` (free-first, cleared-only, quality-ranked routing; `freeCoverageMatrix()` + `planIngestion()` show exactly what to clear to remove spend); `cost-policy.ts` (spend guard); `season-gating.ts`; `free-stats.ts` (TTL-cached facade over free adapters, avoids free-tier rate limits); `free-first-ingest.ts` (`fetchScoresFreeFirst` / `fetchWeatherFreeFirst`: route → fetch → tag provenance); `cfb-free.ts` (`getCfbSnapshot()`: one cached CFB facts snapshot — scores + rankings + standings); `score-verification.ts` (index free finals; cross-check recorded scores); `ncaa-consensus.ts` (cross-source trust + failover; confirms **both** NCAA football and basketball including March Madness; `resilientNcaaScores()` fails over free→free); `free-settlement.ts` (`buildTrustedFinals()` fuses ESPN + henrygd into trust-tiered finals).
- Trust discipline: two independent free sources agreeing on a final = a **confirmed** fact; a score conflict is **flagged and held**, never settled blindly. This feeds the settled track record behind the proof-gated pricing ladder ("≥100 settled + published calibration") without violating the no-stale/no-unverified-data rules.
- Verify $0 operation: `npm run free:doctor` (or `npx tsx scripts/free-ingest-smoke.mjs`) hits every free source live (no key, no spend) and proves cross-source NCAA confirmation (football + basketball); slates aligned dynamically so it works in any season; exits non-zero on any failure.
- Resilient NCAA feed available via `fetchNcaaScoresResilient(sport)` in `ncaa-scores.ts`: ESPN primary → henrygd fallback.
- Self-hosting henrygd: `docker compose -f docker/docker-compose.yml up -d ncaa-api`; then `HENRYGD_NCAA_BASE_URL=http://localhost:3000`. Without the override the adapter uses henrygd's public demo (5 req/sec/IP cap).
- Free settlement path (wired): when `THE_ODDS_API_KEY` is **missing**, `/api/cron/settle-picks` runs `runFreePathSettlement()` (`lib/data-sources/free-settlement-runner.ts`): ESPN free scores (+ henrygd for NCAA); `buildTrustedFinals` + `settlePendingPicks` (DISPUTED holds); transactional pick settle + outbox + post-settlement work; `oddsApiRequired: false` in the response. When the Odds key IS set, the paid `settleSport()` path still runs (externalId match).
- Explicit caveat: validate free-path grades on a live Neon DB before treating the public track record as PROVEN.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The CONFIRMED/SINGLE_SOURCE/DISPUTED trust-tier pattern is directly reusable for the **trust-target intake program**: grade every ingested signal by agreement between independent sources, and adopt the DISPUTED→HOLD discipline (never settle/promote on conflicting evidence) as the shadow-model rule — a contested signal stays in shadow, never published.
- [TRUST-SIGNAL] The cross-source join mechanism (stable team abbreviation + date proximity ±1 day, reporting agreement/disagreement/coverage gaps) is the concrete template for the trust-target intake's source-agreement reporting; "coverage gaps" as a first-class reported output belongs in the tracking lane's intake health dashboards.
- [OTHER] nflverse as a free deep-NFL-stats source is a $0 input to the **calibration/sizing program** — deep stats at zero marginal cost. Open-Meteo game-time weather feeds the **weather-signal intake** in the tracking lane (total-signal doctrine: ingest every signal).
- [OTHER] The "≥100 settled + published calibration" proof-gated pricing ladder defines the public proof threshold the calibration program must cross; `buildTrustedFinals()` + transactional settle + outbox is the settlement-evidence pipeline behind that claim.
## Engine-actionable? (yes/no + one-line what)
Yes — wire the CONFIRMED/SINGLE_SOURCE/DISPUTED trust-tier grading plus the ±1-day cross-source agreement check into the engine's signal-intake and pick-settlement gates, and keep nflverse + Open-Meteo on the free feed list.
