# Reconciled OL/Injury Data Sources — 2026-10-02 night
Pair: MiMo 2.6 Flash (A) × DeepSeek V4 Flash (B), same brief, independently executed.

## Verdict: gap CLOSED. $0 for backtest, ~5 Firecrawl credits/week live.

## Confirmed by both (treat as fact)
1. **nflverse `injuries` dataset exists and is free** — 2026 file: 1,025 rows, weeks 1–4,
   all 32 teams, `report_status` (Out/Questionable/Doubtful), `practice_status`
   (Full/Limited/DNP), **149 OL rows**, `gsis_id` present. History back to 2009.
   The "zero OL/injury columns" finding was pbp-only; the separate injuries dataset was overlooked.
2. **nflverse `depth_charts`** — starters identifiable (`pos_abb` in LT/LG/C/RG/RT, `pos_rank=1`
   → exactly 160 rows), gsis_id join verified working. Week-4 check: 0 starting OL Out league-wide.
3. **Alexandria `nfl-com` `injury_report`** — 291 Week-4 reports, per-day practice detail
   (DIDNOT/LIMITED/FULL) the free sources lack, gsis_id included. 5 credits/call, league-wide.
   Current season only — cannot backtest. **Timing trap:** pulling Week 5 before publication
   returned empty and still billed 5 credits. Gate live pulls on Friday evening.
4. **Sleeper demoted by both** — `practice_participation` empty, depth_chart_order ~unpopulated.
   Free cross-check only.
5. **Alexandria `team_roster` not worth buying at scale** — no starter flags, 5 credits/team
   (160 for all 32); gsis_ids come free from sources 1–3.

## Reconciled stack (wire in this order)
1. **nflverse injuries** → weekly official-report grid (backtest + current)
2. **nflverse depth_charts** → starter identification via gsis_id (preferred over ESPN name-matching)
3. **Alexandria injury_report** → per-day practice detail for live weeks (5 credits/week)
4. **ESPN hidden depthcharts/injuries + Sleeper** → sanity cross-checks only

## Wire-up spec (for the coding agent)
- New provider: `get_ol_status(team, week, season, mode)` / `get_ol_starters(...)`, raising
  `DataGapError` on uncovered weeks (e.g., unpublished Week 5).
- Backtest path: normalized nflverse CSVs. Live path: Alexandria pull gated on publication.
- L3 OL track consumes via the provider registry. Tests mirror `coaching/tests/`,
  including a DataGapError test for uncovered weeks.
- T1 implication: the funnel-kill's missing OL leg is now fillable on real data —
  the real-data gate can move from PARTIAL toward VALIDATED once wired.

## Honest limitations
- TTT stays NGS-only; no source found closes it.
- Weekly snapshots (no intraday vintage in nflverse); ~90-min game-day blind window.
- Backtest/live drift surface: per-day detail exists only in the paid live lane.

## Spend
Firecrawl: 25 credits total (A: 10, B: 15; all discovery/inspection free).
OpenRouter: ~$0.002 combined. Remaining Firecrawl balance: ~4,110 / 5,000.
