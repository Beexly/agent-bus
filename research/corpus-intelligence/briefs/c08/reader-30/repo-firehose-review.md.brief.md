# docs/strategy/repo-firehose-review.md
## What it is (1-2 sentences)
Durable extraction ledger (2026-06-03) scoring ~140 firehose repos against engine intelligence, data ingestion, introspection/trust, monetization, customer value, creativity, and design — recording BUILD, CONCEPT, INGEST, DESIGN-EXTRACT, and DECLINE verdicts so nothing is re-reviewed.
## Key metrics/methods (formulas where given, else "not specified")
- **BUILD (shipped):** mberk/shin → Shin's de-vig in `prediction-engine/shin-devig.ts`; gotoConversion/goto_conversion → equal-standard-error de-vig (fast closed form), also in `shin-devig.ts` — a de-vig ENSEMBLE (Shin + goto + naive) cross-checking fair value; olalonde/proof-of-liabilities + proof-of-solvency → Merkle-tree pick/CLV log shipped as `prediction-engine/proof-of-record.ts`.
- **BUILD queue (ordered, founder-gated to WIRE):** (1) done: Shin+goto ensemble, Merkle proof-of-record; (2) WagerBrain odds conversion + implied prob + vig + EV + Kelly + parlay + **538-style ELO win-prob** as independent estimator → `independentFairValues`; (3) paper-betting-tracker vig-free EV gate + half-Kelly + **Monte-Carlo significance test vs a random-EV null** (engine self-grading); (4) kyleskom XGBoost+NN ML estimator scaffold → `independentFairValues`; (5) more read-only odds referees + open-data backfill (openfootball, henrygd/ncaa-api); (6) public consensus/divergence + proof-of-record surface.
- **CONCEPT:** tuangauss/DataScienceProjects → Poisson soccer + Bayesian analyses (soccer estimator extending `poisson.ts`); adunn-55/NBA-Predictions → leakage-safe rolling features + time-series CV discipline.
- **DESIGN-EXTRACT:** Danziger/slotjs (rAF reel motion, 60fps), johakr/html5-slot-machine (Web Animations API), michaelkolesidis/cherry-charm (React-Three-Fiber 3D + Zustand) → contest reveals, live consensus heat-map viz, beat-the-model celebrations; wbrandon25/Online-Crash-Gambling-Simulator → real-time line-movement animation; rugplay/OpenSourceCasino → honest don't-chase framing.
## Data sources named
- TIER-A licensed: MySportsFeeds/mysportsfeeds-node (paid key).
- OPEN-DATA (free, CC0, citable): openfootball/football.json, openfootball/worldcup.json (2026 World Cup), metrica-sports/sample-data (tracking, R&D), factbook/factbook.json.
- TIER-B unofficial (signal-only, never cited; TS-native preferred): henrygd/ncaa-api, andrewrjohn/scoreboard-api (TS, ESPN), EnderLocke/pyespn, bttmly/nba, roclark/sportsipy, panzarino/mlbgame, baronet2/FirstCyclingAPI.
- REFERENCE: pseudo-r/Public-ESPN-API (best ESPN endpoint map, 17 sports); minus5/go-uof-sdk (Betradar UOF read-only recovery/state pattern); nickgardone/sports-calendar-sync (schedule/team-ID map); SportradarAPIs, sports_data_api, mysportsfeeds-r (licensed, wrong language → port).
- Read-only odds referees: declanwalpole/sportsbook-odds-scraper, bakedziti88/sportsbook-api, rozzac90/pinnacle (**marketdata reads ONLY** — `betting.py` DECLINED).
- Divergence/consensus (signal, never bet execution): haris-sujethan/live-sportsbook-arbitrage, auroradan/PrizePicks-Prop-Finder, arcofs/polymarket-sportsbook-arbitrage-agent, dexorynlabs/2026-worldcup-prediction-market (reads Polymarket/Kalshi), JustBeYou/betting, kaarme01/kaarme-bet-scraper, DerekNest/sports-arb-bot.
- DECLINE: real-money/crypto casinos, gambling predictors/cheat/scam, affiliate-spam READMEs, bet-execution/wagering apps, off-topic/dead/noise, fantasy libs (fantasy ≠ prediction).
## Findings (numbers and facts, not vibes)
- Shin's de-vig, the equal-standard-error de-vig, and the Merkle proof-of-record were already SHIPPED at the time of writing; EV/Kelly already partly in `kelly.ts`.
- The queued-but-unbuilt items: ELO independent estimator, Monte-Carlo edge-significance test, ML estimator scaffold, read-only odds referees, open-data backfill, public consensus/divergence surface.
- Explicit decline doctrine: real-money betting automation is a hard no; fantasy libraries declined (fantasy ≠ prediction); TIER-B sources are signal-only and never cited.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the de-vig ensemble + ELO/Poisson/ML independent estimators + Monte-Carlo significance test are core engine calibration/intelligence methods.
- TRUST-SIGNAL: Merkle proof-of-record, Monte-Carlo "is the edge real?" self-grading, and leakage-safe feature discipline are the trust/calibration primitives.
- COACHING: time-series CV discipline (adunn-55) applies to any coaching/model evaluation pipeline.
## Engine-actionable? (yes/no + one-line what)
Yes — the build queue is still the engine's backlog: wire the ELO independent estimator, the Monte-Carlo edge-significance self-grade, and the ML estimator scaffold into `independentFairValues`.
