# docs/data-sources/research/misc/evidence-source-strategy-2026-05-21.md
## What it is (1-2 sentences)
A 2026-05-21 sourcing-strategy memo deciding which provider surfaces can safely power the next GSE intelligence layer: reviewed surfaces, an architecture decision (Evidence Readiness Matrix gating), and per-factor provider fit with risk postures and shadow-only rules.
## Key metrics/methods (formulas where given, else "not specified")
- Architecture: SourceSnapshot (proves a provider response existed) -> normalization into EvidenceRecord / GameSignal -> Evidence Readiness Matrix -> scoring reads only ACTIVE factors.
- Matrix statuses: ACTIVE, SHADOW_READY, SHADOW_COLLECTING, BLOCKED, ABSENT. Each factor carries source categories, minimum trust, minimum sample size, freshness window, scoring eligibility, activation requirement, failure horizon, likely failure mode.
- True EV remains blocked until independent fair probability is source-backed and separately promoted.
- Code added: packages/prediction-engine/src/evidence-readiness-matrix.ts + __tests__/evidence-readiness-matrix.test.ts, with executable definitions for market board, line movement, rest state, schedule density, pace profile, division context, player availability, officials, venue environment, venue history, milestone context, independent fair probability, true EV.
- Posture rules: player availability, officials (high min sample), and pace are SHADOW_ONLY until settled-outcome history proves incremental calibration value (pace specifically until bucket-level Brier improvement is measured). Weather can be useful quickly but must age out aggressively.
## Data sources named
The Odds API (live odds, scores/settlement; paid key present; 20,000 requests remaining per the deploy-readiness check at the time); Sportradar Sports Data API; SportsDataIO (injuries, lineups/depth charts, standings, betting data, historical odds, ID mapping); Open-Meteo (forecast and archived forecast APIs).
## Findings (numbers and facts, not vibes)
- Market odds first: risks are quota exhaustion inside 2 weeks, stale line movement if opening/current prices are not preserved, and false "edge" if market-derived fair price is mistaken for independent probability.
- Player availability: use only official/licensed injury, lineup, and depth-chart feeds (SportsDataIO or Sportradar). Risks: late scratches, inconsistent team phrasing ("questionable" vs "game-time decision"), player ID mapping drift across providers.
- Officials/referees: use only licensed assignment and historical same-sport trend feeds (Sportradar if coverage includes assignments, or league official sources). Risks: small samples, playoff/prime-time assignment bias, crew composition changes.
- Venue environment: venue coordinates plus game-time weather/roof/surface state (Open-Meteo where outdoor conditions matter). Risks: roof decisions, wind shifts near first pitch/kickoff, incorrectly geocoded stadiums.
- Pace/team rates: use league/team stat feeds, not LLM summaries (SportsDataIO, Sportradar, or league APIs where legally allowed). Risks: early-season samples, injuries changing tempo, garbage-time distortion.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the Evidence Readiness Matrix as the gating spine; SHADOW_ONLY posture for unproven factors; True EV blocked until independent fair probability is source-backed.
- OTHER: player availability, officials, venue environment, and pace as contextual evidence classes for the engine; opening-vs-current price preservation as a data-quality rule.
- QB-BEHAVIOR, COACHING, OL, SCHEME: INFERENCE — not discussed in this memo.
## Engine-actionable? (yes/no + one-line what)
yes — keep SHADOW_ONLY postures for player availability/officials/pace until bucket-level Brier improvement is measured; treat weather as fast-useful but aggressively aged-out; always preserve opening vs current prices so CLV and line movement are computable.
