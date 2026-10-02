# intelligence/LEVERAGE_STATUS.md
## What it is (1-2 sentences)
Leverage-status report (generated 2026-09-04, corrected 2026-09-05) auditing the prediction-engine codebase: TODO/FIXME scan, dead-code archive, research-lab.md algorithm coverage gap closure, and standing calibration/market-data risks.
## Key metrics/methods (formulas where given, else "not specified")
- Brier score 0.247 vs GREEN threshold ≤ 0.22 (status 🟡 — calibration needs improvement). Formulas not specified.
- 313 algorithm source files scanned (373 including tests); 0 true TODO/FIXME/HACK markers.
- 12 orphaned modules archived to `attic/` (70,425 bytes via `du -b`); 5 of 19 flagged modules proven transitively live and kept.
- Barrel `index.ts` exports 330 symbols, many unused (R&D "dark" modules: linear-thompson, pedersen-ledger, calibration-commitment, calibration-sequence, bernoulli-eprocess, adaptive-delta-analysis/hedge, brier-ogd-ensemble, forecast-skill-eprocess).
- MODEL_VERSION v5.2.7; research-lab.md maps all 10 brief types to live, importer-verified engine modules.
## Data sources named
- nflverse replay parser (kept live module); no raw sport data beyond code inventory.
## Findings (numbers and facts, not vibes)
- TODO/FIXME audit clean (3 raw regex hits, all benign on inspection).
- Dead-code disposition: `bankroll, bernoulli-eprocess, calibration-drift, consensus-view, contest-scoring, edge-significance, instrumented-eprocess, narrative-signal, performance-analytics, publication-coin, responsible-gaming, suppression-curve` archived; `elo-estimator, hawkes-steam, nflverse-replay-parser, projection-evaluation, tweedie-aci` kept as transitively live.
- Module map confirms live status of: `scoring.ts`, `edge-engine.ts`, `game-context.ts`, `settlement.ts`, `clv.ts`, `kelly.ts`, `conviction-tier.ts`, `calibration-apply.ts`, `probability-calibration.ts`; confidence row: scoring → conviction-tier → calibration → quarter-Kelly.
- Standing risks: Brier 0.247 above 0.22 GREEN; Odds API key absent (market clock stalled since 2026-07-25).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: confirms `player-projection.ts`, `player-rate-posteriors.ts`, `player-archetype.ts`, `opponent-adjusted.ts` exist as team/player models in the engine (code inventory, not wired data).
- COACHING: `game-context.ts` computes pre-game features including game context/game script; `nfl-body-clock.test.ts` exists (edge-lab), indicating travel/circadian modeling code.
- TRUST-SIGNAL: the 10 research brief types include Coach/Scheme Change Brief, Rumor Triage Brief, Market Movement Brief, Injury Timeline Brief — operator surfaces for trust-signal intake.
- OTHER: the rest is dead-code/debt hygiene.
## Engine-actionable? (yes/no + one-line what)
Yes — one-line: Brier 0.247 vs 0.22 threshold quantifies the engine's calibration gap and confirms the player-model modules (player-archetype, player-rate-posteriors, opponent-adjusted) exist as wire targets for QB behavioral profiles.
