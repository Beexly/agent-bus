# data-analytics-strategy.md
## What it is (1-2 sentences)
Honest audit of engine ingestion (market data ~100% live via The Odds API; player/team stats 0%) plus a worked proof that nflverse free data closes the gap: a statistically significant QB-age → RB-target-share trend computed from real data, and the reusable trend-discovery engine (`trend-discovery.ts`) built from it. Nothing here is wired into live scoring — foundation + proof only, founder-gated for productization.
## Key metrics/methods (formulas where given, else "not specified")
- Engine today: de-vigs sportsbook odds (Shin / goto), blends ATS form, H2H, rest, schedule density, line movement; grades against the close (CLV). No formulas given.
- Trend-discovery engine (`packages/prediction-engine/src/trend-discovery.ts`, pure, tested): feed observations (metric + categorical features per unit), define buckets over any feature → returns each cohort's mean vs the field, absolute/relative delta, and a Welch significance test, ranked by effect size. Functions: `discoverCohortTrends()` / `significantTrends()`.
- QB-age → RB target share (nflverse 2016–2024, 4,936 team-weeks, computed in `scripts/analytics/qb-age-rb-target-share.mjs`):
  - ≤26: n=2251, 18.1%; 27-29: n=1017, 18.7%; 30-33: n=770, 17.9%; 34-36: n=491, 19.2%; 37+: n=407, 22.9%.
  - QB 34+ vs <34: 20.9% vs 18.2% → +2.7 pts, relative +14.7%; Welch z = 8.0, p = 1.3e-15 (overwhelmingly significant).
  - Trend is real, LARGER than the 10–12% a pundit quoted, concentrated in the 37+ cohort.
- Bar for wiring a discovered trend into live scoring: must replicate out-of-sample AND show CLV in shadow mode (per `docs/evidence-engine.md`), gated by `MODEL_VERSION`.
## Data sources named
The Odds API (odds/spreads/totals/line movement/bookmaker consensus every 30 min, 7 sports; `/scores` for settlement), ESPN (settlement), nflverse (`github.com/nflverse/nflverse-data`, MIT, CSV/parquet, fetchable from Node without R: rosters with birth_date, weekly player stats, snap counts, play-by-play). Kalshi fair value, Reddit narrative, OpenFootball: scaffolded but inert. API-Sports: key set, zero code consuming it.
## Findings (numbers and facts, not vibes)
- Player/team statistics (targets, snaps, air yards, usage, EPA, age, injuries, depth charts, weather, play-by-play): 0% — no `Player` table, no `PlayerStat` table, no ingestion. (INFERENCE: doc is from an earlier era than the total-signal program; treat as historical state, not today's.)
- Team scoring rates (Poisson λ): coded but gated off (`TEAM_RATES_AVAILABLE=false`).
- QB 37+ cohort: 22.9% RB target share (n=407) vs 18.1% at ≤26 (n=2251) — the strongest split.
- Phase plan: 0 (done — proof + discovery engine), 1 (nflverse ingestion adapter + Player/PlayerGameStat tables, backfill 2016→present), 2 (feature store + nightly trend scan → cockpit "Trend Desk" with n, effect size, p-value, recency check), 3 (shadow→wire, founder-gated), 4 (public timestamped "we called it first" trend cards).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB 34+ (esp. 37+) → +2.7 pts RB target share, z=8.0, p=1.3e-15 → QB-BEHAVIOR (age-driven checkdown/target redistribution).
- Reusable discovery engine (any feature × any metric, Welch-tested) → OTHER (trend-discovery machinery).
- "A discovered trend is a hypothesis, not a pick" + CLV-shadow requirement → TRUST-SIGNAL.
## Engine-actionable? (yes/no + one-line what)
Yes — the QB-age/RB-share trend is a concrete verified cohort effect (usable as a feature or shadow signal), and `trend-discovery.ts` is the reusable machine for finding more of them.
