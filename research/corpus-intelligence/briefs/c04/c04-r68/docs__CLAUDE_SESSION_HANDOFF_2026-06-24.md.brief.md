# docs/CLAUDE_SESSION_HANDOFF_2026-06-24.md
## What it is (1-2 sentences)
Session handoff from a 2026-06-24 Claude Code session on branch `codex/intelligence-core`: reports the first real-data out-of-sample backtest of the GSE player-projection engine against a naive points-persistence baseline, plus a 16-agent adversarial currency/frontier audit and a ledger of what shipped.
## Key metrics/methods (formulas where given, else "not specified")
- OOS backtest: leakage-safe trailing-usage features (week W uses strictly weeks < W), purged + embargoed walk-forward + Clark-West harness; model MAE vs naive MAE on fantasy points.
- 2023: boosted-log1p model MAE 4.9928 vs naive 4.7573 (n=2,955); real Tweedie gradient (WO1) MAE 4.8679 vs 4.7573 — model does NOT beat naive in any variant.
- 2021–2023: boosted-log1p MAE 5.1802 vs naive 4.9999 (n=10,301) — does not beat naive. Frontier ablation (log1p / Tweedie-first-order / Tweedie-Newton / ± opponent features): best ~4.87 vs naive 4.76.
- nflverse currency: probed all ~20 datasets live; current through 2025: pbp, snap_counts, injuries, depth_charts, rosters, weekly_rosters, stats_team_week, pfr_advstats, ftn_charting, pbp_participation, espn_qbr, officials; through 2026: schedules, draft_picks (2026 draft present), combine, trades; contracts lags at 2022 (upstream OTC limitation).
## Data sources named
nflverse (weekly player stats; NGS 2016→2025 via combined `ngs_<variant>.csv.gz`; `player_stats_week` 2025 merged from per-season file), live nflverse release manifest (all ~20 datasets probed), 16-agent adversarial audit (24 findings).
## Findings (numbers and facts, not vibes)
- Engine projection does NOT beat naive points-persistence OOS — honest verdict; `canPublishProjections` stays off, everything stays `priced=false`/shadow.
- Making the loss genuinely Tweedie improved MAE 4.99 → 4.87 (2023) but did not flip the result.
- `fetchNflverse("player_stats_week")` merges 2025 per-season file into the combined frozen-at-2024 asset; `currentNflSeason()` is date-driven (returns 2025; projects 2026).
- Currency guard added: `scripts/check-nflverse-currency.ts` (npm `guard:nflverse-currency`) fails loudly if any dataset can't reach the current season.
- ~9 read-only intelligence surfaces (player-lab, usage-pulse, edge-signals, player-model, route-rate, qb-forward, predictiveness, receiving-opportunity, opportunity-transfer) bypass `fetchNflverse` via `nflverseUrl()` + private fetchers → would lag on 2025 data once the 2025 season kicked off (flagged as fix-before-kickoff).
- Sandbox limits: Prisma engine CDN egress-blocked; TypeScript 6.0.2 errors on `moduleResolution:"node"` tsconfigs (TS5107) — TS pin needed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: engine does not beat naive persistence — calibration honesty benchmark, do not publish projections without richer features (opponent/game-script/role) and genuine ML iteration.
- OTHER: nflverse ingestion currency mechanics (2025 merge paths, NGS combined-file switch, currency guard script).
## Engine-actionable? (yes/no + one-line what)
Yes — record the naive-persistence MAE baselines (4.76–4.9999 range by season span) as the engine's calibration benchmark to beat; route the ~9 `nflverseUrl()` surfaces through a merge-aware loader before any 2025-season launch.
