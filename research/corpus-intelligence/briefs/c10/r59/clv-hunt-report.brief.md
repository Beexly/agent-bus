# research/2026-09-28/orchestration/clv-hunt-report.md
## What it is (1-2 sentences)
Research brief (Lane 2, 2026-09-28) locating real closing-line-value (CLV) history: found in Garrett's own engine Neon Postgres (`odds`, `odds_line_snapshots`, `opening_lines`, `picks` tables) plus a wired backfill lane; also documents a ready-made CLV math/tooling suite and a free OddsPapi historical-odds backfill option.
## Key metrics/methods (formulas where given, else "not specified")
- Per-pick CLV suite on `picks`: `clvLockLine`, `clvLockPrice`, `clvCloseLine`, `clvClosePrice`, `clvKind` (POINTS|PROBABILITY), `clvValue` (positive = beat the close), `clvVerdict` (BEAT_CLOSE|MATCHED_CLOSE|LOST_TO_CLOSE), `clvCapturedAt`, `clvGradedAt`, `bookDisagreementAtLock` (max−min across books at lock — the liquidity regressor). No formula quoted; grading logic lives in the settle path (`clv-capture.ts` referenced in schema comment, test survives).
- Ready-made math: `apps/web/lib/tracker/clv.ts` (`computeSpreadClv`/`computeTotalClv`/`computeMoneylineClv` — pure functions, signatures not quoted), `packages/prediction-engine/src/clv-harness.ts` (ready-for-data runner), `packages/prediction-engine/src/clv-decomposition.ts` (OLS: information coefficient vs liquidity coefficient on `bookDisagreementAtLock` vs residual), `scripts/ops/regrade-against-book-lines.ts`.
- Snapshot writer: `packages/ingestion-pipeline/src/line-archive.ts`; phases OPEN (first-ever snapshot per gameId+market) / INTERIM / CLOSE (last pre-kickoff snapshot per market+book+side, via `markClosingSnapshots` wired into settle-sport.ts); gated on `LINE_ARCHIVE_ENABLED=true`.
- Honesty rule: `market-memory.ts` `sharpSplitSourced` gate — never label residual "sharp/public money" without sourced handle data.
## Data sources named
- Neon Postgres (neondb): `odds` 8,083,183 rows / 2.0 GB; `odds_line_snapshots` 2,213,952 rows / 535 MB; `opening_lines` 4,923 rows / 1.4 MB ("CLV spine"); `picks` ~4,030 rows / 12 MB. Row counts as of 2026-09-25.
- Books: fanduel, draftkings, betmgm, caesars, pointsbetus, bovada, mybookieag (US, American odds); `us_ex` adds Kalshi/Polymarket/Novig/ProphetX (packages/data-ingestion/src/config.ts). Cadence: `refresh-odds` cron once daily 10:00 UTC, in-season sports only.
- OddsPapi `/historical-odds` (FREE, UNMETERED per nfl-analytics-reverse-engineering.md): NFL sportId 14 / tournamentId 31; Pinnacle NFL game lines (no props) via `fetchPinnacleLineMovement` (packages/data-ingestion/src/odds-provider-adapter.ts, 37 tests). Terms: internal analytics only, no resell; `certifiableForLiveGate=FALSE` pending legal read.
- The Odds API: 20K credits/mo under baxley.garrett@gmail.com (key in Secure Vault only).
## Findings (numbers and facts, not vibes)
- 2,189 CLV-graded rows on `picks`; average CLV **−0.193**, zero positive (as of 2026-09-25 read).
- Snapshot writer silently broke **2026-08-22 → ~mid-Sept 2026** (wrong Prisma filter shape swallowed by a catch returning `{persisted: 0}`); ~3 weeks of missing CLOSE data. Freshness monitor exists (`apps/web/lib/ops/odds-line-archive-freshness.ts`) but wires to no alert channel.
- Third-party checked: gse-competitive-intel (56 CLV hits) = specs/playbooks only, no real line history; zero CSV/JSON line-snapshot files anywhere in ~/workspace; repo UI `apps/web/lib/tracker/clv.ts` is a personal bet ledger (localStorage, manually entered) — not a history source.
- `game_signals` (5,142 rows) is schedule-only, not lines. The 2026-09-04 `clv-harness.ts` note "no historical open/close archive" is stale — archive exists now.
- Open items: confirm `LINE_ARCHIVE_ENABLED=true` in prod + wire a live freshness alert; Garrett's call on OddsPapi legal read to backfill 8/22–9/15 gap; fresh Neon read grant needed for new min/max date, per-sport, per-book counts.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- −0.193 avg CLV with zero positive across 2,189 graded picks: (TRUST-SIGNAL) pick-quality signal — engine's locked lines have been systematically losing to the close; publish-gating relevance.
- `bookDisagreementAtLock` (max−min across books at lock) as the liquidity regressor for CLV decomposition: (TRUST-SIGNAL).
- 8M+ timestamped per-book price rows + 2.2M phase-classified snapshots in owned DB = the raw material for all line-movement features: (OTHER).
- 3-week CLOSE-data outage + unwired freshness monitor: (OTHER) — operational gap.
## Engine-actionable? (yes/no + one-line what)
Yes — quantify exact CLV coverage (min/max date, per-sport, per-book) on a throwaway Neon branch via documented read-only scripts, then route avg CLV and bookDisagreementAtLock into the calibration/honesty gates.
