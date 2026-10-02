# docs/ops/OVERNIGHT_NCAAF_2026-09-04.md
## What it is (1-2 sentences)
Architect's overnight run plan for the 2026-09-05 launch: a ranked, rights-checked work list to calibrate the NFL picks model via historical replay on nflverse data, with two dispatch prompts (Firecrawl corpus recon, Hermes/GLM build order) and explicit statements of what overnight will NOT deliver.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration means replaying the frozen model against the price it would have bet, graded on **closing lines** — play-by-play carries plays, not prices, and cannot calibrate picks.
- Deliverables specified: NFL replay calibration over nflverse 1999–present emitting reliability curve (10 bins), ECE (adaptive **and** debiased), Brier with three-way decomposition (reliability / resolution / uncertainty), n per bin, and the same numbers **split by season**; hold out the **most recent two seasons** and report in-sample vs out-of-sample separately.
- The replay engine (`packages/prediction-engine/src/historical-replay.ts`, 430 lines) splits each raw schedule row into two disjoint type-separated halves so the scorer structurally cannot see a score; input type `RawScheduleRow` = gameKey · season · week · gameType · homeTeam · awayTeam · commenceTime · spreadLine · totalLine · homeMoneyline · awayMoneyline · restHome · restAway.

## Data sources named
- **nflverse** (`games.csv`): ~7,000 games, 1999–present, closing spread/total/both moneylines + finals; `approved_open_license` (CC-BY-4.0, attribution `"Data from nflverse (https://github.com/nflverse), CC-BY-4.0"`), registry line 111 — fully cleared for the backfill.
- `cfb_pbp_2025_all.csv` (local on the Windows box): feature fuel only (efficiency, pace, drive outcomes) — NOT a calibration corpus.
- Kaggle `robbypeery/college-football-data-2025`: `NOT VERIFIED` — contents unread, license unread.
- CFBD / collegefootballdata: `vendor_candidate`, all flags false (`automation_allowed`, `commercial_display_allowed`, `storage_allowed`, `derived_analytics_allowed`, `model_training_allowed` all false); free tier = 1,000 calls/mo, $10/mo Tier-3 buys throughput; terms page JS-rendered and not machine-verifiable — needs a human/legal read.

## Findings (numbers and facts, not vibes)
- The only NFL coupling in the replay module is the string literal at `historical-replay.ts:234` (`sport: "americanfootball_nfl"`) plus a week-stepper comment at :425 — so NCAAF replay is a ~5-line parameterization, not a new engine.
- `scripts/run-historical-calibration.mjs` header (lines 11–13) carried a false claim that the pick model "can't be calibrated until real settled picks exist" — `historical-replay.ts` falsified it; the script calibrates the market baseline the engine must beat.
- CFBD is blocked on a **terms read, not money**: paying for Tier-3 without reading the terms does not unblock it; reading without paying probably does for a backfill sized to the free tier.
- PR #692 (ESPN scoreboards targeted by US Eastern day, not UTC) still unmerged — highest value-to-risk item open, since late-window games settle against the wrong scoreboard day.
- Tier-1 recon criteria (for the Firecrawl prompt): only a corpus carrying **closing** spread/total/moneyline for NCAAF, ideally 2013→present, under a license permitting commercial derived use; play-by-play without prices is tier 2 by definition.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: Calibration infrastructure, rights registry, and build planning — no QB behavior, coaching, OL, or scheme content. INFERENCE: the replay/holdout method (two-season holdout, season-split calibration numbers) is directly reusable for any future QB-behavior or coaching-tendency model validation.

## Engine-actionable? (yes/no + one-line what)
Yes — concrete implementation contracts: parameterize `sportKey` in `historical-replay.ts`, run the NFL replay calibration and emit the 10-bin reliability curve / dual-ECE / Brier-decomposition artifact, fix the calibration-script header, ingest college PBP as cleared features, and produce the CFBD terms decision memo.
