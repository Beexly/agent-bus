# OL/Injury Data Sources — Audit-Pair Agent B (deepseek-v4-flash)

Date: 2026-10-02. Mission: close the engine's #1 data gap (nflverse pbp has zero OL/injury columns; the funnel-kill test can't fire on real feeds without it).

## Bottom line

The gap is closable with **$0 of new spend for backtesting** and **5 Firecrawl credits/week for live**. No single source does both jobs — the honest architecture is two lanes:

- **Backtest lane (FREE):** nflverse `injuries` (2009–present) + `depth_charts` (2001–present), joined on `gsis_id`.
- **Live lane (5 credits/week):** Firecrawl Alexandria `nfl-com` `sports-league-data/injury_report` (league-wide, current week) + nflverse `depth_charts` (free, updated daily) for starters.

## Verified findings (all measured today, not inferred)

### 1. nflverse injuries — FREE, backtest-grade ✅
- `https://github.com/nflverse/nflverse-data/releases/tag/injuries` — 77 assets, `injuries_2009.parquet` → `injuries_2026.parquet`.
- 2026 file verified: 1,025 rows, weeks 1–4. Columns: `season, week, gsis_id, position, full_name, report_primary_injury, report_status (Out/Questionable/Doubtful: 151/124/19), practice_status (Full/DNP/Limited: 465/280/278)`.
- 149 OL rows (T/G/C) in 2026 alone. `gsis_id` present → matches the engine's id-vocabulary contract (GSIS ids production).
- **Cannot do:** current-week *pre-kickoff* freshness (releases lag the official report by ~1 day); no per-day practice detail (weekly rollup only).

### 2. nflverse depth_charts — FREE, starter identification ✅
- `/releases/tag/depth_charts` — 109 assets, 2001→2026. 2026 file: 592k rows, `dt` timestamped (latest 2026-10-02T06:02:14Z — updated *today*).
- Starters = `pos_abb in (LT,LG,C,RG,RT) AND pos_rank == 1` at latest `dt`. Verified: exactly 160 rows (32 teams × 5).
- `gsis_id` present (26,792 nulls out of 592k — ~4.5%, mostly historical rows; 2026 coverage is near-complete).
- **Join verified:** starters ⟕ injuries on `gsis_id` works. Week 4 check: 0 starting OL league-wide with `report_status='Out'` (CLE's Elgton Jenkins was Out but is not a current starter per the chart — internally consistent).
- **Cannot do:** intra-week surprise scratches (snapshot cadence); the join is lossy where gsis_ids don't match.

### 3. Alexandria nfl-com injury_report — PAID 5 credits/call, live-grade ✅
- League-wide pull (no `team` filter): 291 reports for Week 4, one call, 5 credits. Cached: `data/alexandria/injury-week4.json`.
- Per-report: `player{gsis_id, position, display_name}`, `injuries[]`, `injury_status` (OUT/QUESTIONABLE), `practice_days[{date, status: DIDNOT/LIMITED/FULL}]` — **per-day granularity the free sources lack**.
- `weeks_available=[1,2,3,4]` — current season only. **No historical seasons: cannot backtest.**
- Week 5 pull returned empty (reports not published yet as of Fri 2026-10-02 ~03:45 CT) and still cost 5 credits — **poll timing matters; don't pull before Friday evening.**
- Wire-up: `coaching`/funnel OL leg consumes `(gsis_id, week) → (is_out: injury_status in (OUT, DOUBTFUL) or all-week DNP, practice_trend)`.

### 4. Alexandria nfl-com team_roster — PAID 5/team, limited value ⚠️
- Verified: `position="OL"` group filter works; CLE returned 14 OL with `gsis_id, esb_id, status (ACT/DEV/CUT), jersey, measurables`. Cached: `data/alexandria/roster-cle-ol.json`.
- **No depth-chart order, no starter flags** — cannot identify starters. Redundant given free depth_charts. **Do not buy at scale** (32 teams × 5 = 160 credits/week for what nflverse gives free).

### 5. Sleeper API — FREE, demoted on verification ⚠️
- `api.sleeper.app/v1/players/nfl`: 12,229 players, no key. Has `gsis_id`, `injury_status`, `injury_body_part`, `news_updated`.
- **Killer finding:** `depth_chart_order` populated for **1 of 138** team-rostered OL; `practice_participation` populated for **0 of 138**. It cannot identify starters and has no practice data.
- Usable only as a supplemental injury cross-check (`injury_status`: 11 IR, 3 PUP, 10 Questionable, 2 Out among OL). Live snapshot only, no history, aggregator provenance unknown.

### 6. OurLads depth charts — scrape fallback
- All 32 teams, per-slot 1st/2nd/3rd tables, updated regularly (e.g. ARZ 09/16/2026). No API; Firecrawl scrape-able if nflverse depth_charts ever lags. Not needed today.

### 7. ESPN hidden injuries API — dead for our purposes
- Third-party measured probe (2026-08-19): live snapshot only; `?season=` silently ignored. Skip.

## Recommended architecture

```
BACKTEST (free, 2009+):
  injuries_YYYY.parquet ─┐
                          ├─ LEFT JOIN on (gsis_id, week, season) ─→ starter_week table:
  depth_charts_YYYY.parquet┘   (gsis_id, team, week, pos_abb, report_status, practice_status)
  starters = pos_abb ∈ {LT,LG,C,RG,RT} ∧ pos_rank = 1 @ max(dt) ≤ week

LIVE (5 credits/week):
  Fri evening: Alexandria injury_report(season, REG, current_week)  → 5 credits
  Daily:       nflverse depth_charts latest dt (free)               → starters
  Cross-check: Sleeper injury_status (free)                        → flags drift
  Rule: starter OUT ⇔ report_status ∈ {Out, Doubtful} ∨ 3×DIDNOT practice week
```

**Wire-up instructions:**
- New provider module: `intelligence/providers/ol_availability.py` (suggested) exposing `get_starter_status(team, week, season, mode: backtest|live) → list[(gsis_id, pos_abb, status, practice_trend)]`.
- Consumed by: the funnel/OL leg in `reasoning/` (pressure-funnel thesis) and `coaching/` adjustments. The corpus's "starting tackle OUT ≈ −2.65 pts" adjustment finally has a real feed to fire on.
- Refresh: backtest cache on demand (pin parquet SHAs); live pull Fridays 18:00 CT + Sunday 11:00 CT (inactives); cache everything under `data/alexandria/` and `data/nflverse/`.
- Failure mode: empty upstream → loud `DataGapError`, never a quiet zero. If Alexandria Terms gate appears (`THIRD_PARTY_DATA_TERMS_REQUIRED`), stop and escalate to Garrett — do not accept terms autonomously.
- Cost envelope: ~10 credits/week live (Fri + Sun pulls) ≈ 40/month — under 1% of the 5,000 Firecrawl budget. Rosters not needed (free depth_charts supersede).

## Honest limitations
- **TTT (time-to-throw) remains NGS-only** — no source found closes that; the quick-game proxy stands.
- Surprise game-day scratches: only the Sunday pull catches them; the engine must tolerate a ~90-min blind window.
- The backtest/live lane split is a data-drift surface: same join logic, different upstream freshness. Pin versions and log provenance per row.
- Alexandria week-5 pull proved: pulling before the report publishes still bills. Gate pulls on `weeks_available` or Friday-evening timing.

## Paid call log (this session)
| # | provider | capability | options | creditsCost | result |
|---|----------|-----------|---------|-------------|--------|
| 1 | nfl-com | sports-league-data/injury_report | week 5 | 5 | empty (not published yet) |
| 2 | nfl-com | sports-league-data/injury_report | week 4 | 5 | 291 reports, cached |
| 3 | nfl-com | sports-league-data/team_roster | CLE, OL | 5 | 14 players, cached |
| 4–6 | firecrawl | find-tools (×3) | various | 0 | contracts verified |
| — | — | v2/search discovery (×4) | — | 0 | free |
**Firecrawl total: 15 credits.** OpenRouter analysis call (deepseek-v4-flash): 816 prompt + 10,146 completion tokens (billed to Garrett's OR balance per plan rates).

## Raw pulls cached
- `~/workspace/gse-intelligence-build/data/alexandria/injury-week4.json` (291 reports)
- `~/workspace/gse-intelligence-build/data/alexandria/injury-week5.json` (empty — not published)
- `~/workspace/gse-intelligence-build/data/alexandria/roster-cle-ol.json` (14 OL)
- `/tmp/inj2026.parquet`, `/tmp/dc2026.parquet`, `/tmp/sleeper.json` (ephemeral verification copies)
