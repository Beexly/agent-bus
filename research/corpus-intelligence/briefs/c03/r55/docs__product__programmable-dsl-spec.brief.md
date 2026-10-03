# docs/product/programmable-dsl-spec.md
## What it is (1-2 sentences)
Phase 5 spec for a sandboxed domain-specific language ("Sports betting's Bloomberg Terminal") letting Pro/Elite users write their own scoring filters and alert scripts against live and historical data — hand-rolled parser with parse-time type checking, AST-walking runtime, save/share/star of named queries, and Elite-only alert triggers evaluated every 30 minutes.
## Key metrics/methods (formulas where given, else "not specified")
- Language grammar: `filter picks where` / `alert when ... then notify [...]` / `save as "..."`; keywords: filter, where, and, or, not, in, has, between, when, then, alert, save, as, true, false, null; comparison operators, membership `in`/`not in`, range `between`, existence `has`.
- Sandbox hard constraints: no eval/Function, no I/O, no network, no mutation (read-only), no loops/recursion/assignment; execution bounded to 5 seconds per filter against a 100-game slate; AST capped at 200 nodes.
- Full initial field schema documented: root pick (`edge`, `pick`, `game`, `home`, `away`, `market`, `schedule`, `factor_breakdown`, `evidence`, `outcome`); Pick object (kind SPREAD/TOTAL/MONEYLINE/PROP, confidence 50–95, grade SOLID_PLAY/LEAN/NOTE, line, side HOME/AWAY/OVER/UNDER); Game (sport, starts_at, is_outdoor, is_primetime); Team (rest_days, travel_distance_miles, last_game_was_back_to_back); MarketState (consensus/depth/volatility 0..1, line_movement, sharp_money_signal, books_reporting); ScheduleData (density_diff, games_in_last_7_days home/away); FactorBreakdown — one field per factor: consensus, depth, edge, line_movement, volatility, head_to_head, venue_form, schedule_stress, rest_advantage, cross_market, data_quality; EvidenceHealth (overall A–F, bootstrap_share 0..1, freshness_seconds).
- Alerts: evaluated every scoring cycle (30 min); per-alert cooldown default 1 hour (3600s); rate limit 50 alerts/user/day; channels email/sms/discord/webhook; test-fire supported.
- Backtest invocation syntax: `filter picks where ... between "2026-01-01" and "2026-05-01"`.
- Prisma models: `UserDSLQuery` (unique userId+name, isPublic, starCount), `UserDSLQueryStar`, `UserDSLAlert`.
## Data sources named
Code: `packages/galaxy-dsl/`, `apps/web/app/dsl/`, `apps/web/lib/dsl/`; UI: `/dsl`, `/dsl/community`, `/dsl/alerts`, `/dsl/docs`; API: `/api/dsl/run` (Pro+, open item); decision reference master plan Part 2.C.1 + 2.C.10. 11 acceptance criteria for DSL v0.
## Findings (numbers and facts, not vibes)
- Pro tier gets filters; Elite tier gets filters + alerts; alerts are Elite-only (open item default per tier narrative).
- DSL docs at `/dsl/docs` are PUBLIC — intended to show platform depth to non-subscribers.
- Starter library: default 10 seed query templates in `/dsl/templates`.
- Compliance scanner runs on public query names + bodies (anti-abuse criterion).
- Field reference must match actual data shape (no doc drift) as acceptance criterion #11.
- Factor list: 11 named factors — consensus, depth, edge, line_movement, volatility, head_to_head, venue_form, schedule_stress, rest_advantage, cross_market, data_quality.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Canonical 11-factor breakdown list (consensus, depth, edge, line_movement, volatility, head_to_head, venue_form, schedule_stress, rest_advantage, cross_market, data_quality) — the authoritative engine factor inventory as of this spec.
- (OTHER) Field schema documents engine data shapes (EvidenceHealth bootstrap_share/freshness, MarketState consensus/depth/volatility/sharp_money_signal) — usable contract for what signals exist and their ranges.
- (OTHER) `market.sharp_money_signal` and `market.line_movement` are first-class fields — engine tracks sharp money and line movement magnitude as queryable signals.
- (OTHER) Save/share/star of named queries creates a community filter library — crowdsourced edge-discovery surface; most-starred queries are free research into what composite conditions users believe work.
- (OTHER) Backtest invocation syntax implies historical run capability on arbitrary filter expressions — the DSL doubles as a backtesting grammar.
## Engine-actionable? (yes/no + one-line what)
Yes — the 11-factor inventory plus the full field schema (ranges, types, semantics) is the reference contract for wiring new factors and signals into the factor_breakdown; any new adjustment-layer signal should be expressible in this schema.
