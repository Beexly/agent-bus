# docs/dfs/research/2026-09-25/youtube-builder-research/handoff-video-model-builds-v3-fullspec-2026-09-25.md
## What it is (1-2 sentences)
A full-spec handoff (452 lines) from Motif to the coding agent covering 8 video-kernel builds (V1–V8), 6 second-wave builder builds (W1–W6), and 4 data/API intake builds (D1–D4), each with exact inputs, method, output shape, compose-with pointers, license posture, and test assertions; plus a follow-up research queue and standing rules. Methodology is learn-and-reimplement (MIT-only builds W4/W5/W6 may adapt with attribution).
## Key metrics/methods (formulas where given, else "not specified")
- V1 leakage probes: future-Elo (feature value changes when future games included → leaked), current-week snap-share (TreMatt03 pattern — features computable only from strictly earlier weeks), sign-convention (urwishpatel2003's 86%-backtest bug; predicted sign must match market sign convention).
- V2 holdout discipline: `sealLastSeason(games)` — holdout = most recent complete season, sealed flag throws if passed to a trainer; `classifyNull(stat, leagueHasStat)` — missing-by-league stat is null, never zero; `mapTeamIdentity(teamId, season)` — (team, tier) namespacing for promotion/relegation.
- V4 deterministic replay: single `StrategyFn` shared by live and replay paths; seeded RNG; byte-identical decision journals; `SKIPPED_NO_MARKET` fail-closed (never invent prices); explicit `ACTIVE`/`INACTIVE_NO_CONFIG` states; inline risk gates.
- V6: 12-game trailing SOS-adjusted offensive/defensive ratings with prior-season Bayesian blending (`w` ramps 0→1 over ~6 weeks); generalized Poisson for TDs (under-dispersed, λ<0); separate FG/safety/XP/OT models; 5,000 Monte Carlo sims; ~10% home-field bump (fit, don't hardcode).
- W1 calibration gates: Brier, log-loss, AUC, ECE (10 bins); isotonic applies ONLY if holdout Brier improves (sjpagano's numbers: Brier .1613, log loss .4831, AUC .8459, ECE .0331 on held-out 2025).
- W2 walk-forward: expanding window, train < t, predict t; model vs closing-line benchmark (benbr11's 65.9% vs ~66% closing-market parity); model card emitter.
- W3 ATS ensemble: 4,300+ games, drop-one-feature walk-forward Δlog-loss ablation, tier-kill rule (joscho11 killed his own ULTRA tier).
- D2 weather: Open-Meteo Previous Runs vintages (as-forecasted ~24/48/72h pre-kickoff), NWS fallback; observed weather NEVER a feature.
- D4 CFB: ~2.2M scored plays from 2004 via sportsdataverse/cfbfastR.
- EV: `ev = p * decimalOdds − 1`, emitted only when EV exceeds threshold AND W1 calibration gate passes (W4 anytime-TD, MIT-adaptable).
## Data sources named
nflverse, Opta, FTN Data, TeamRankings.com, Pro Football Reference, PropLine (proplineapi/propline-mcp — Pinnacle-anchored no-vig lines, prop settlement, line history), The Odds API (already live), Open-Meteo Previous Runs, api.weather.gov, Sleeper public API (free depth charts + injuries), sportsdataverse CFB pipeline (~2.2M plays), Excel LADZ (Patreon-gated workbook — re-implement from recipe only), 8rain Station upload spec (study shape, write own schema), plus follow-up queue: Radke papers, nVenue model-vault interview, AWS NFL agent (go.aws/3ZsWjqY), CUPPS thesis, rugby Ep 1 free API, sharperedge.ai, NRL Excel model, 7 blocked YouTube videos.
## Findings (numbers and facts, not vibes)
- Suggested build order: V1 → V2 → W1 → W2 → W4 → W5 → V6 → V4 → W6 → V3 → V5 → V7 → D1 → D2 → D3 → D4 → W3 → V8; V1/V2/W1/W2 are "the honesty foundation everything else stands on."
- V8's process checklist is the definition of "done" for every model build: leakage probes → prereg → walk-forward vs closing line → calibration gates → sealed holdout → honest writeup.
- License posture: learn-only everywhere except W4 (CHZN1 anytime-TD), W5 (dgrifka luck-neutralized EPA), W6 (snapshift WP event-replay) — MIT, adaptation permitted with attribution in file header; never copy code for others.
- Standing rules: new files only, never modify live code paths; every module gets a test; log each finished item in `docs/research/2026-09-21/wiring/IMPLEMENTED.md`.
- Three builds marked non-overlapping with existing repo code: `prereg-eval.ts`, `sealed-split.mjs`, `conditional-td.ts`, `hr-factors.ts`, `nfl-regime-change.ts` exist — builds compose, never re-implement.
- Non-overlap notes cite Builds 1–15 (indie v2/v2b) and 10 ethandjo builds as separate scopes to check before building.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- V1's three leakage anti-patterns are the highest-leverage test library for the engine (TRUST-SIGNAL).
- V4's never-invent-prices / SKIPPED_NO_MARKET fail-closed discipline (TRUST-SIGNAL).
- W3's tier-kill rule — drop what doesn't earn its place (TRUST-SIGNAL).
- V3's optical-flow + perspective-transform primitive for deriving NGS-like movement metrics from broadcast video (SCHEME, OTHER).
- W4 anytime-TD + W5 luck-neutralized EPA are the two MIT-portable models (TRUST-SIGNAL, SCHEME).
- D1 PropLine Pinnacle-anchored no-vig lines as the odds-data lead (TRUST-SIGNAL, OTHER).
- D2 as-forecasted-only weather as leakage doctrine (TRUST-SIGNAL).
## Engine-actionable? (yes/no + one-line what)
Yes — execute the build order starting with the honesty foundation (V1 leakage probes, V2 holdout/null-identity discipline, W1 calibration gates, W2 closing-line walk-forward), then the two MIT models (W4 anytime-TD, W5 luck-neutralized EPA) and PropLine intake.
