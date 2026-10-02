# docs/PROPRIETARY_METRICS_REPRODUCTION_STRATEGY.md
## What it is (1-2 sentences)
A playbook for reproducing the *information* sold by proprietary NFL metrics providers (NGS, PFF, ESPN QBR/FPI/win rates, DVOA/DYAR, SIS, PFR AV, markets, fantasy projection houses) from public/open data and open methodologies — never by copying their outputs. It also defines the "signal matrix": one weighted composite score (every signal carrying weight × confidence × freshness, with attributed contributions) as the single source of truth every engine tool reads.
## Key metrics/methods (formulas where given, else "not specified")
- DVOA-like ("Galaxy Opponent-Adjusted Efficiency"): value of each play vs the league-average baseline for that exact situation (down, distance, field position), opponent-adjusted, summed, expressed relative to average (DVOA) or as cumulative value (DYAR). Concept stated; exact baselines not in file.
- QBR-like QB composite: from nflfastR EPA + a win-probability-leverage weight + completion context. Stated; no formula in file.
- FPI-like power rating: extend existing Elo (`elo-backtest.ts`) with preseason priors (roster/market) and efficiency inputs (DVOA-like metric), in-season update, calibrated with the backtest framework.
- Weighted composite score (`compositeScore`): blends active signals with attributed contributions (which signals drove the number); each signal carries explicit weight × confidence × freshness; soft signals discounted, never ignored; freshness decay kills stale rumors. Stated; no closed formula in file.
- Honesty anchors given: a settled stat ≈ confidence 1.0, a rumor ≈ 0.2; coachspeak calibrated toward ~zero until it earns weight.
- Universal signal ledger record shape: `{ entity, key, value (directional), weight, confidence, capturedAt }`.
- Calibration backbones named: Brier/ECE/reliability framework, Elo backtest, market backtest (`market-backtest.ts`), backtested projection (`player-projection.ts`), de-vig consensus fair value.
- Moat taxonomy: (1) tracking hardware — irreproducible raw feed, YES for published aggregates + outcome models; (2) human charting labor — approximate-able from public charting (PFR) + ML; (3) open methodology — fully reproducible from public PBP; (4) market pricing — reproducible via de-vig consensus.
## Data sources named
- nflverse/nflfastR (CC-BY-4.0): play-by-play with EPA, Win Probability, Completion Probability + CPOE, success rate, air yards, YAC, xpass; NGS weekly aggregates (`load_nextgen_stats`); PFR advanced charting (`pfr_advstats`: pressures, hurries, blocks, coverage); rosters, snaps, schedules, injuries, combine.
- ffverse `ff_opportunity` (expected fantasy points; `xYAC` in `apps/web/lib/intelligence/expected-points.ts`).
- Kaggle Big Data Bowl tracking samples.
- collegefootballdata.com / cfbfastR (college offense → scheme transition).
- NWS weather (ingested); practice participation (DNP/Limited/Full in `Injury` data); concussion protocol; depth charts (ingested); coaching/roster change data; RSS/news/Reddit narrative engines in the repo; book lines/consensus (Pinnacle named as the sharp pricing reference).
## Findings (numbers and facts, not vibes)
- nflfastR already ships ~75% of the proprietary metrics' value, free.
- NGS hardware: RFID chips in shoulder pads + ball capture x/y ~10×/sec; newer 4K optical adds skeletal tracking (~29 points/player at higher rates); ~75 AWS SageMaker models turn geometry into features (separation, cushion, time-to-throw, closing speed) and into "over expected" models (completion probability, expected YAC, expected rushing yards) plus 0–99 composite scores.
- Raw NGS tracking feed is an irreproducible hardware moat; public substitutes are the free NGS aggregates + reproducible outcome models (CP/CPOE, xYAC); geometry models can be trained on Big Data Bowl samples.
- PFF: human analysts grade every player on every snap on a −2…+2 scale in 0.5 steps (0 = "did their job"), grading process not outcome; reviewed off All-22 tape with per-play context points; normalized to 0–100 at game and season level; labor is the moat; public substitute is PFR advanced charting + EPA-credit allocation.
- ESPN win rates (PRWR/PBWR/RBWR) derive from NGS line-of-scrimmage geometry; approximated via PFR pressure/block charting + Big Data Bowl line-of-scrimmage tracking.
- Legal posture: never scrape, copy, or republish a provider's proprietary OUTPUT; build equivalents from lawful inputs under our own name with our own calibration (same doctrine as the `apps/web/lib/scraping/` clearance engine's "never extract" list).
- Recommended value-for-effort order: (1) persist PBP + the public stat pillars; (2) opponent-adjusted efficiency (DVOA-like) — biggest signal, zero moat; (3) FPI-like power rating extending Elo; (4) Galaxy Index composite, calibrated; (5) Big Data Bowl tracking models (last, hardest, smallest marginal gain).
- Current ingestion state per the doc: `apps/web/lib/nflverse/next-gen-stats.ts` (NGS aggregates), `pressure-coverage.ts` (PFR advanced), `pbp.ts` (EPA/WP) — today fetched read-only and thrown away; Phase A says persist them into the system of record.
- Single-source-of-truth rule: trade analyzer, buy-low/sell-high, start/sit, waiver, lineup tools must all read the same `compositeScore` and its trend — never divergent logic (enforce with a shared score-access layer + test).
- Signal taxonomy enumerates 7 categories: production & efficiency; archetype & scheme fit (RB gap/power/inside-zone/outside-zone/receiving, QB college→NFL transition, TE in-line vs flex, WR outside/slot deep/possession); role/usage/depth; continuity & chemistry (QB↔OC fit, coordinator continuity, O-line continuity, QB↔WR shared-snap history); health & availability; situation & environment; narrative/sentiment/rumor + COACHSPEAK (low confidence, fast decay).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CP/CPOE + QBR-like QB composite + time-to-throw as NGS feature → QB-BEHAVIOR
- QB college→NFL scheme-transition learning-curve discount; QB↔OC fit; QB↔WR shared-snap rapport; coachspeak calibrated ~zero → COACHING
- RB run-scheme archetype ↔ team's current run scheme; TE in-line vs flexed role vs college role; WR outside/slot, deep/possession; scheme continuity year-over-year → SCHEME
- ESPN pass/run block & pass-rush win rates; PFR pressure/block charting; O-line continuity as chemistry signal → OL
- Practice participation (DNP/Limited/Full), injury designation, concussion protocol, rehab cadence, post-injury snap ramp, snap-count trend, role change after coaching/personnel moves → TRUST-SIGNAL
- Universal signal ledger (weight × confidence × freshness, attributed contributions); legal doctrine (equivalents, never copies); single-score architecture; value-for-effort build order → OTHER
## Engine-actionable? (yes/no + one-line what)
yes — the DVOA-like opponent-adjusted efficiency is named the best value-for-effort build (zero moat), and the weight × confidence × freshness signal ledger is the engine's compositional spine.
