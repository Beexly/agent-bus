# dfs/research/2026-09-25/youtube-builder-research/handoff-ethandojo-nfl-builds-v2-fullspec-2026-09-25.md
## What it is (1-2 sentences)
v2 implementation-complete handoff (Motif → coding agent) reverse-engineering @ethandojo's (Ethan Do) Instagram-described NFL builds into 10 concrete GSE modules with exact feature vectors, file paths, methods, output shapes, and test assertions — superseding v1 with HOW not WHAT. No public repo of his exists; recipe is from his videos, gaps explicitly specified so no further research is needed.

## Key metrics/methods (formulas where given, else "not specified")
Build 1 (game outcome predictor): 7 features, all as differentials (team − opponent), from nflverse trailing-4-game play-by-play — qbEPA (QB EPA per dropback), explosiveRate (share of plays: 10+ rush / 20+ pass yards), turnoverMargin (takeaways−giveaways/game), passRush (pressures per opponent dropback, sack-rate fallback), pointDiff (avg scoring margin), availability (share of offensive snaps by projected starters, 0–1), rosterCarryover (returning-production share vs prior season, multiplies prior-season features). Label: 1=team won. XGBoost-concept (extend repo GBM scaffold `ml-estimator.ts`, additive stumps, logistic link), walk-forward training (train 2018–prior season, refit weekly, never train on predicted week), 10,000 Monte Carlo season sims → `{winProb, projectedScoreHome, projectedScoreAway}`. Benchmark gate: beat coin-flip; match-or-beat his posted 10-6 Wk1 (62.5%) / 11-5 Wk2 (68.8%). Fail-closed: null when any feature null/non-finite.
Build 2 (highlight detector): audio short-time energy spikes >3σ above trailing-5-min mean + Whisper cue phrases ("touchdown","intercepted","pick six","end zone") co-occurring within 15s window; 5s padding.
Build 3 (coverage analyzer): YOLOv8 → safety depth/corner leverage/box count → rule-based {Cover 0,1,2,3,4/Quarters,6,Man} pre- AND post-snap; disguise = pre≠post.
Build 4 (contract value): valuePerDollar = totalEPA / capHitMillions; rank within position; top/bottom decile flags.
Build 5 (4th-down grader): grade = A (optimal), B (within 1pp WP), C (1–3pp WP), D (>3pp WP lost) vs repo's own WP model + fourth-down-playbook; complement to existing `signals/situational/fourth-down-coaching-aggressiveness.ts`.
Build 6 (trade analyzer): PPR-adjusted values + matchup adjustment, tiers by percentile, verdict thresholds: fair <5% gap, wins/loses 5–15%, fleece >15%.
Build 7 (AI OC): score candidate plays by historical EPA/play vs defensive look (down/distance/field position), top-3 + expectedEPA + exploit.
Build 8 (film splitter): play boundaries at stillness→motion transitions + snap-cadence audio burst (motion onset within 2s of burst).
Build 9 (exploit finder): splits with n≥30 plays; bottom-15th percentile EPA allowed flagged, ranked by playsFaced × EPA allowed.
Build 10 (draft copilot): max (projected value − positional scarcity penalty + roster-need bonus); demo context: debated Achane vs Lamb at 1.09, took Jefferson at 2.11.
Standing rules: new files only, every module gets a test, own branch, log in `docs/research/2026-09-21/wiring/IMPLEMENTED.md`.

## Data sources named
nflverse play-by-play (via `packages/data-ingestion/src/nflverse-cache.ts`, `nflverse-source.ts`); OverTheCap salary tables (NEW adapter `packages/data-ingestion/src/overthecap-salaries.ts` needed — no salary source currently ingested); game broadcast video files (needed for Builds 2, 3, 8 — not yet available to engine); Whisper, YOLOv8, PySceneDetect, FFmpeg, OpenCV, PyTorch, Pandas/Streamlit (his stack); `expected-metrics/` scoring models, `parsimonious-season.ts`, `fourth-down-playbook.ts`, `fourth-down-grid-2309.ts`, `win-probability.ts`, `draft-assistant.tsx` (all exist in repo — compose, don't rebuild).

## Findings (numbers and facts, not vibes)
- All 10 builds fully specified with exact repo compose-with targets; every module gets a test with stated assertions.
- His posted records: 10-6 (62.5%) Week 1, 11-5 (68.8%) Week 2 — the module's benchmark gate.
- Honest gaps stated: his exact XGBoost hyperparameters/training split unknown; Builds 2/3/8 blocked on a game-film source the engine doesn't have; Build 4 blocked on the new OverTheCap adapter.
- Build 5 explicitly complements (not duplicates) the existing fourth-down-coaching-aggressiveness signal module.
- Build 10's agent layer sits behind the existing `draft-assistant.tsx` UI, not a new interface.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- qbEPA per dropback + availability (starter-snap share) as differentials — QB-BEHAVIOR
- 4th-down decision grader vs optimal playbook (coaching aggressiveness grades) — COACHING
- Explosive play rate + pass rush pressure rate as differentials — SCHEME
- rosterCarryover (returning production) for roster-change adjustment — TRUST-SIGNAL (data honesty)
- Coverage disguise detection (pre-snap vs post-snap) + team tendency aggregates — SCHEME
- Contract value-per-dollar within position group — OTHER
- Walk-forward + fail-closed nulls as honesty gates — TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
Yes — all 10 builds are implementation-complete specs against existing repo scaffolds (GBM, nflverse ingestion, WP model, season sim), with Builds 1/5/6/7/9/10 unblocked and Builds 2/3/8 awaiting a film source, Build 4 awaiting the OverTheCap adapter.
