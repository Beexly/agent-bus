# docs/nflverse-data-catalog.md
## What it is (1-2 sentences)
Catalog of the nflverse free advanced-NFL-data stack (25 dataset families as release assets on `nflverse-data`, MIT, ~$0), with a Node adapter (`packages/data-ingestion/src/nflverse-source.ts`) that fetches directly without R — plus two completed analyses proving the trend-discovery discipline.
## Key metrics/methods (formulas where given, else "not specified")
Cohort analysis + Welch significance test (`packages/prediction-engine/src/trend-discovery.ts`). Trend 1: RB share of team targets +14.7% relative when starting QB is 34+ vs <34 (20.9% vs 18.2%), z=8.0, p=1.3e-15, n=4,936 team-weeks, 2016–2024, concentrated in the 37+ cohort. Trend 2 (debunked): WR average separation 31+ vs ≤27 = −2.0%, p=0.18 (not significant), n=6,934 player-weeks, 2017–2024.
## Data sources named
nflverse release assets (25 families: pbp, pbp_participation, player_stats, stats_player/stats_team, snap_counts, nextgen_stats, pfr_advstats, ftn_charting, depth_charts, injuries, rosters/weekly_rosters, players/players_components, espn_data (ESPN Total QBR), schedules, draft_picks/combine/contracts, officials/teams/trades/misc/test). Universal join key: `gsis_id`.
## Findings (numbers and facts, not vibes)
- QB-age RB-target-share is a REAL trend: +14.7% relative when starter is 34+ (20.9% vs 18.2%), z=8.0, p=1.3e-15, concentrated in the 37+ cohort — larger than the 10–12% a pundit quoted.
- WR separation-by-age is a debunked non-trend: elite WRs surviving to 31+ don't lose separation (p=0.18, not significant).
- Nothing is wired into live scoring; wiring a dataset into the engine is founder-gated MODEL_VERSION step.
- Cost to start: $0 (nflverse) + compute.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: older-QB checkdown tendency (34+, concentrated 37+) is a real, significant behavioral signal.
- SCHEME: pbp_participation (personnel & defenders-in-box) and ftn_charting (play-action, RPO, motion, box counts) give scheme/coverage context.
- TRUST-SIGNAL: the "refuse fake trends" discipline is a trust feature.
- OTHER: free data-catalog infrastructure.
## Engine-actionable? (yes/no + one-line what)
yes — ingest the premium families (pbp, snap_counts, ngs, injuries, pfr_advstats, ftn_charting) on a schedule and run the nightly trend scan with the Welch test, promoting survivors to shadow after out-of-sample replication and CLV proof.
