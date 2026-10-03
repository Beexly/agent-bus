# docs/ops/archive/leverage/EXTERNAL_LEVERAGE_MAP.md
## What it is (1-2 sentences)
A registry (with a machine-readable counterpart at `packages/stats-api/src/sources/external-registry.ts` and API `GET /api/gse/v1/external`) of all external data sources outside Beexly/Sports, split into free APIs, HuggingFace computer-vision resources, engines, and governing licensing law.

## Key metrics/methods (formulas where given, else "not specified")
- No metrics or formulas — pure source inventory. The Odds API free tier is 500 credits/mo per `config.ts` (noted in BUILD_LOG).
- Licensing law (verbatim): research_only ≠ commercial ingest; unknown_review = BLOCKED until counsel; CC-BY-SA = hold (pbp_participation pattern); measurement > narrative — eval metrics stay DARK until ship floors.

## Data sources named
- Free APIs (commercial path when ToS allows): nflverse (NFL foundation, CC-BY-4.0); Open-Meteo / NWS (weather); ESPN public API (scores, multi-sport); henrygd NCAA API (CFB/CBB free); CollegeFootballData (CFB advanced); balldontlie (NBA free tier); MoneyPuck / NHL API (hockey); openfootball (soccer, CC0); OpenF1 / Jolpica (F1 telemetry); The Odds API (licensed odds, paid when needed); Kalshi public (prediction-market corroboration only).
- HuggingFace / CV (research-first, not silent commercial): MCG-NJU/SportsMOT (player MOT eval); TeamTrack (full-pitch MOT paper/data); CourtSide YOLO (tennis ball detect); facebook/detr-resnet-50 (generic detect bootstrap); SoccerNet (action spotting research); Roboflow Sports Universe (scorebug/jersey, per-dataset license); BaseballCV (pitch/hit vision research).
- Engines: Feast · Ultralytics YOLO · roboflow/supervision.

## Findings (numbers and facts, not vibes)
- nflverse is the designated NFL foundation under CC-BY-4.0 (the engine's legal ingestion base; NGS data is internal-only per Garrett's HARD doctrine).
- Kalshi is explicitly "prediction market corroboration only" — not a primary signal.
- CV lane is research-first: models may be evaluated, not silently commercialized; Roboflow Sports Universe requires per-dataset license checks.
- All eval metrics stay DARK until ship floors; unreviewed sources are BLOCKED until counsel.
- This file is the external-source complement to the engine's internal NGS/total-signal ingestion posture.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Ingestion inventory for the total-signal doctrine: weather (Open-Meteo/NWS), prediction-market corroboration (Kalshi), CV vision resources (SportsMOT, TeamTrack, BaseballCV, SoccerNet) — candidate signal families the engine can evaluate.
- [OTHER] Rights posture rules (research_only ≠ commercial ingest, CC-BY-SA hold, DARK-until-ship) that the engine's source-admission policy must enforce.
- [OTHER] No QB/coaching/OL/scheme content.

## Engine-actionable? (yes/no + one-line what)
Yes — use it as the engine's sanctioned source inventory for the total-signal ingestion lane: nflverse (CC-BY-4.0) as the NFL base, weather and Kalshi corroboration as admissible signal families, CV resources as research-first evals, all gated by the stated licensing law.
