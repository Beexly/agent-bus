# docs/ops/COMPETITOR_LEVERAGE_2026-09-12.md

## What it is (1-2 sentences)
A competitor teardown memo from 2026-09-12 built on three extraction JSONs (Statcast leaderboard schema with 201 features, a 50-URL DFS/projection/prop sweep with 71 features across 14 named services, Statcast retention mechanics with 53 features), concluding competitors sell alerts, export lock-in, daily habit surfaces, and stable active tools — not raw predictions — with a retention-first build order proposed.

## Key metrics/methods (formulas where given, else "not specified")
not specified

## Data sources named
Statcast leaderboard schema (201 features), 50-URL sweep of LineStar, RotoGrinders, FantasyLabs, Oddsshopper, props.cash, Outlier, SaberSim, PickFinder, Daily Fantasy Fuel, FantasyPros, PFR (Pro Football Reference), Football Outsiders, rbsdm, nflsavant; Statcast retention mechanics (53 features); FanGraphs (export gating, honesty positioning).

## Findings (numbers and facts, not vibes)
- Competitors' retention engine is ALERTS: prop-line update alerts (PickFinder), injury/lineup-change pushes (props.cash), 5-minute line-movement refresh (Daily Fantasy Fuel), net-positive player alerts + starter/odds/situation trends (LineStar), breaking-news scratch alerts (SaberSim). [OTHER]
- Export lock-in: 1-click DK/FD lineup export (Daily Fantasy Fuel), Pick'Em app export (PickFinder), CSV download free at Statcast but Members-only at FanGraphs — export is the paid conversion lever. [OTHER]
- Social proof figures claimed: props.cash "200,000 fans", PickFinder "150,000+ bettors"; memo states no bought numbers and we claim none until earned. [OTHER]
- GSE verified state: watchlist alert-dispatch code exists but no alert preference/delivery wired; DK import exists but no DK/FD export and zero CSV export anywhere; slate/game readings pages exist but have no follow/subscribe action; calibration proof is our differentiator and nobody else sells it, but it does not retain alone. [TRUST-SIGNAL]
- Proposed build order: P1 game/player follow + alerts, P2 DK/FD export gated behind Pro, P3 daily cheatsheet surface per league, P4 cleared-source Statcast/NextGen/PFR ingestion (L14 input), P5 community proof from real counts only. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Statcast/NextGen/PFR cleared-source ingestion (P4) feeds the L14 input lane — directly relevant to player-level feature depth for the engine (OTHER).
- Line-movement and injury/news alerts (P1) mirror the off-field signal intake the engine needs; same data, dual use for product and model (OTHER).
- Competitor retention patterns confirm prediction quality alone is not the market product — alerts, exports, and habit surfaces are the conversion surface (OTHER).
- Memo explicitly positions calibration proof as the sole differentiator competitors don't sell — reinforces the TRUST-SIGNAL lane from the ECE memo.

## Engine-actionable? (yes/no + one-line what)
yes — P4's cleared-source Statcast/NextGen/PFR ingestion is directly wireable as L14 model inputs; injury/line-movement alert signals double as off-field adjustment inputs for the engine.
