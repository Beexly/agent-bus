# Wiring Backlog Audit — 2026-10-06

**Garrett's directive:** everything gets wired. Everything from research — X, arXiv, Kaggle.

## What was audited (all claims grounded by grepping code on origin/main ac4befcae)

| Source | Inventoried | Wired | Partial | Not wired |
|---|---|---|---|---|
| X sweeps (33 sections, 221 items → 35 concepts) | 35 | 23 | 4 | **9** |
| Brain ingestion operators | 15 | 7 | 1 | **7** |
| arXiv BUILD-QUEUE top-20 ADOPT | 20 | 3 | 3 | **14** |
| Kats components | 7 | 0 | 0 | **7 in flight** |

"Wired" = importable code in ≥3 files (not a docs mention). Full methodology in the backlog doc.

## The backlog: 38 items, 3 tiers

**Tier 1 — wire this week (S effort):** Robbed Score (@AjayTakes — fully specified formula), Route Win Rate, YPRR, Pass Rush Win Rate (+True Pass Set variant), Separation Score, Equalized Coverage (arXiv:1908.05428), Jackknife+, Contested Catch Rate, Double Team Rate, Stuff Rate, Off-Target Throw %.

**Tier 2 — this month (M):** Engine residual mining, SportsAlpha signal miner, Conformalized selective regression, Weather-aware conformal, In-play calibration eval, Skellam bake-off, Hawkes event grain, Karlis–Ntzoufras, James–Stein (finish), Bet timing optimal stopping, Hybrid season sim.

**Tier 3 — quarter-scale (L):** Neural-head symbolic distillation (INVENT flagship), PySR on nflverse, Offline RL CQL, Chronos/Moirai TSFM, flexBART, SportSQL, MinervaScore (finish), ATB retry.

## In flight

7 Kats Jules sessions (TSFeatures → simulators) + arXiv 11-lane extraction. Plans return for approval; each drives to a PR.

## Links

- Backlog: Beexly/Sports `docs/research/2026-10-06/wiring-backlog.md`
- Branch: `motif/wiring-backlog-2026-10-06`
- PR: https://github.com/Beexly/Sports/pull/1029 (docs-only)

## Note for builders

Tier 1 items are Jules-sized. Each wire task is 1–2 sentences in the backlog with a size estimate. Claim a tier-1 item, build against the spec, open a PR. Merge Sheriff reviews.
