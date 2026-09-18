# TASK — SCRAPE EVERY API. ALL OF THEM.

**Mission:** Every API, backend, dataset, and database in the NFL analytics orbit gets hit, inventoried, and saved. Nothing public stays unmapped. You stop when there is nothing left to hit — not before.

**Standard (Garrett):** Meticulous. Aggressive. Every endpoint touched once, status recorded, raw response saved. Skimming is failure. If you didn't request it, you don't know it.

## LANE MARKERS

- **Garrett's direct order: free-tier signups and free API key requests are AUTHORIZED.** Create accounts, request keys, click verify links — use hq@galaxysportsedge.com wherever a signup needs an identity. If a signup demands anything beyond name/email (phone, company docs, tax/bank), STOP and report it on the bus instead of guessing.
- **HARD NOs (never, no exceptions):** bypassing authentication, circumventing paywalls, auth tricks, using anyone else's credentials. A 401/403 on something you have no legitimate path into = log it and move on.
- **No spending.** Paid tiers get documented with exact price + signup link. Garrett approves every purchase himself.
- **No identity/tax/bank documents submitted anywhere.** Ever.
- Keys you legitimately obtain: keep the VALUES in local device storage only. On the bus, report metadata only (key name, tier, rate limit, expiry). Never paste a key into chat or a bus file.
- Rate discipline: max ~2 requests/second per host, sequential. On a 429: stop that host immediately, log it, move on.

## TARGETS (hit all, in this order)

1. **FTN charting API** — start at their public docs: `https://charting.ftntools.com/api/docs` → pull `/api/openapi.json`. Walk EVERY path in the spec with one unauthenticated GET. Record status + what came back. (Motif's crew is mapping this too — check `dialogue/` for their drop so you don't redo the spec pull; your job is the endpoint-by-endpoint verification.)
2. **FTN sibling backends** — one root GET each, then `/docs` and `/openapi.json` where they exist: `game-logs.api.ftntools.com`, `metrics.ftntools.com`, `models.ftntools.com`, `nfl-parser.ftntools.com`, `odds.ftntools.com`, `dfs.ftntools.com`, `data.ftndata.com`, `api.ftndata.com`, `api.ftnfantasy.com`.
3. **StatRankings** — `https://api.statrankings.com/` root GET only. Record what it serves. No auth paths, no fuzzing.
4. **ESPN public APIs** — `site.api.espn.com`, `sports.core.api.espn.com`: inventory every no-key endpoint (scoreboard, teams, athletes, events, news). These need no key. Map them all.
5. **nflverse / nflfastR** — catalog EVERYTHING: `https://github.com/nflverse/nflverse-data/releases`. Play-by-play (1999+), rosters, schedules, weekly stats, snap counts, injuries, officials, draft, combine, depth charts. Download the full backfill. Parquet preferred.
6. **Kaggle** — NFL Big Data Bowl datasets (2024, 2025, 2026), NFL play-by-play databases. Document size, license, download path.
7. **HuggingFace datasets** — search "nfl play by play", "nfl charting", "dvoa". Pull what's open.
8. **FTN free data** — historical DVOA downloads, Team Total DVOA, any free CSVs on ftnfantasy.com.
9. **ADP sources** — Underdog + DraftKings public ADP pages/endpoints (no login).
10. **Anything else you find** — GitHub code search for "charting.ftntools.com", "ftn_id", "statrankings" (client libs, examples). Wayback for dead data endpoints. No upper bound.

## OUTPUT CONTRACT

- A local data lake: raw responses saved per source, organized by host.
- `MANIFEST.md`: per source — endpoints hit, HTTP status of each, what's openly accessible, sample fields, coverage years, update cadence, format, auth requirement.
- Verdict per source: OPEN (no creds) / KEY OBTAINED (free signup completed — metadata on bus, value in local storage) / PAID (exact price + link, awaiting Garrett) / GATED (no legitimate path — logged).
- Report back on the bus (`STATUS.md` + a note in `dialogue/`). Flag the 10 most valuable open endpoints for the engine.

**Grade yourself.** After each target group, score completeness 1–10. Anything below 8 gets re-scraped. Garrett's bar is 9.2 — act like it.
