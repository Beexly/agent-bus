# data/CARDS_INCENTIVE_CALENDAR.md
## What it is (1-2 sentences)
A nine-card implementation deck ("doctrine C5 incentive calendar") building a per-team incentive state machine (eliminated/seeding-locked/auditioning/rest), coach PROE/pace fingerprints, 2026 NFL rule-change re-estimation machinery, and a body-clock/rest/weather props bind — with deck-wide fail-closed, market-firewall, and as-of-leak invariants. Research + build spec, NOT results (everything is CANDIDATE; admission via trials registry).

## Key metrics/methods (formulas where given, else "not specified")
- **IC2 standings-math:** `points = wins + 0.5*ties`; `maxPoints = points + remaining`; `eliminatedSafe` ⟺ (maxPoints(t) < max over division rivals of points(r)) AND (maxPoints(t) < P7 = 7th-largest points among 15 conference rivals); `clinchedBerthSafe` ⟺ #(rivals with maxPoints ≥ points(t)) ≤ 6; `clinchedTopSeedSafe` ⟺ points(t) > max over rivals of maxPoints(r); <8 rivals/conference ⇒ all flags false.
- **IC3 incentive states:** precedence seeding_locked (clinchedTopSeedSafe) → rest_window (clinchedBerthSafe AND remaining ≤ 1) → auditioning (eliminatedSafe AND remaining ≥ 2) → eliminated (eliminatedSafe AND remaining ≤ 1) → contested; stateEnteredAsOf via 7-day backward scan, max 26 steps; completed ⟺ scores non-null AND start+4h ≤ asOf; in-progress counts as remaining.
- **IC4 reprojectUsage:** contested ⇒ pass_through; seeding_locked/rest_window ⇒ refuse_to_price (`rest_risk_unquantified`) for EVERY player; eliminated/auditioning ⇒ post-state regime refit when ≥2 post-state games (`sample = aggregateGameLog(post, {decay: 1})`, `regime = regimeShift(career, sample).direction` — diagnostic only, never a numeric adjustment); else refuse `insufficient_post_state_games`.
- **IC6 coach fingerprints:** PROE = Σ(isPass − xpass) over neutral plays (qtr ∈ {1,2,3}, |score differential| ≤ 8, finite xpass ∈ [0,1]); pace gaps = consecutive same-posteam rows sorted by game_seconds_remaining DESC with elapsed ∈ [4,45]s; shrinkage `proeShrunk = (n·proeRaw + n0·leagueProe)/(n+n0)`, n0 = pseudoPlays default 300 (play-weighted league pooling, NOT mean-of-coaches); feature keys `coach:proe_diff`, `coach:pace_secs_diff`; window default 32 games, minGames 8; ingest at observedAt = end of last constituent game.
- **IC7 rule-change re-estimation:** `widenGammaPrior(prior, k)` = {alpha/k, beta/k} (mean α/β preserved, variance × k); `planReestimation` defaults: varianceInflation 2, recencyDecayOverride 0.85, minPostGamesForRefit 4, eraBoundary = Aug 1 of season; directionHypothesis is metadata ONLY — up/down plans are numerically identical; `proposed_failed` ⇒ no plan.
- **IC8 context bind:** `rest_days = (kickoffMs − prevEndMs)/86_400_000` (never default 7); `body_clock_shift_h = venueOffset − teamOffset` (SEA at ET venue = +3); `wx_total_suppression = totalSuppressionIndex({isDome, windMph, precipProbPct, tempF})` ∈ [0,1], dome ⇒ 0; forecast issued after kickoff−1h lead ⇒ refuse `leaky_forecast`.
- **IC9 admission:** families nfl-body-clock, nfl-coach-fp, nfl-incentive run at BH-FDR q=0.10; weather family SKIPPED in --real (no cleared pre-kickoff forecast archive); working seasons 2019–2024, 2025 sealed holdout; permutations 1000, fixed seed; selftest requires leak-probe pValue ≤ 0.01.
- **Props conjugate spine:** `posteriorRate(prior, total, games)` ⇒ alpha+total, beta+games; `probOver` NB posterior-predictive survival; `aggregateGameLog(games, {cap, decay})`, decay ∈ (0,1].
- Deck invariants: every record carries `priced: false`; fail-closed on missing data (samples DROPPED, not imputed); p-side only (CI q-contamination walk `assertPSideHasNoMarketProp`); nothing live without masterplan §6 (temporal CV, CRPS/PIT, BH-FDR).

## Data sources named
- nflverse (CC-BY-4.0) pbp — working seasons 2019–2024; projections on 8 pbp columns only, never the ~372-column matrix; pbp cache `.cache/edge-lab/`.
- nfldata games.csv `home_coach`/`away_coach` (via loader `loaders/nfl-games.ts`, `NFLDATA_GAMES_CSV_URL`).
- NFL Football Operations / nfl.com rule pages + published 2026 NFL Rulebook (IC1 manual research only; no scraping proposed).
- Wikipedia team-season coordinator lists (CC-BY-SA — share-alike legal escalation).
- Pro-Football-Reference (permission_required; no scraping).
- Manual enumeration: 32 teams × ~2 coordinators typed from public announcements.

## Findings (numbers and facts, not vibes)
- C5.2 gap: nflverse pbp has NO coordinator column; nfldata games.csv has head coaches only — IC6 ships v0 on head-coach labels; IC5 surveys coordinator sources with v0Decision on games.csv.
- Body-clock/rest/weather exist ONLY as game-market EvalRow builders and feed nothing in the props stack (the IC8 gap); only `nfl-team-form` has ever passed trials-registry admission.
- The honest IC9 frame: closing price already encodes coaches, rest, travel, dead games heavily — likely few-or-zero admissions; a truthful "nothing admitted" is a PASS.
- 32-team division table hard-coded for IC3; team aliases: OAK→LV, SD→LAC, STL→LA, LAR→LA.
- Product stance: Week-18 `rest_risk_unquantified` refusal is a feature — no pick shown rather than a fabricated one; if a cleared play-probability source lands, a future card replaces refusal with a hurdle.
- Attack-verified examples: widen α=12,β=3,k=2 ⇒ {6,1.5}; shrinkage n=100/raw 0.10/league 0.02/n0=300 ⇒ 0.04; PROE fixture with all-pass at xpass 0.55 ⇒ 0.45; pace bounds: 4s and 45s count, 3s and 46s dropped; neutral boundary ±8 eligible, ±9 dropped.
- Lane routing: IC2 PUBLIC (any free endpoint); IC3–IC8 INTERNAL (Grok/Hermes only); IC1 + IC9 CROWN (paid/contractual surfaces only, never a free endpoint or public claim); reports/edge-lab/context-admission.json is gitignored, never committed.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (COACHING) — IC6 coach fingerprints: per-coach neutral-script PROE and pace baselines with 300-play/300-snap empirical-Bayes shrinkage — directly buildable coaching-tendency profiles.
- (QB-BEHAVIOR) — IC4's per-state usage re-projection (auditioning/eliminated teams re-fit usage on post-state games only) models QB target-concentration regime shifts; rest-window teams refuse to price (trust-targets shift unquantified).
- (SCHEME) — PROE pace-gap heuristics and neutral-script definitions are scheme-adjacent coaching fingerprints; 2026 rule-change census (IC1) maps each adopted change to affected prop families with direction priors.
- (TRUST-SIGNAL) — The fail-closed doctrine (refuse rather than impute: no rest=7 default, no sit-probability, no observed-weather-for-forecast) is a calibration-honesty posture; body-clock shift (SEA at ET = +3h) as a player-state covariate.
- (OL) — not covered; no line-play content.

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: ship IC6's shrunk coach PROE/pace fingerprints (window 32, min 8, n0=300) as shadow-context L3 covariates, and implement IC3's five-state incentive machine with fail-closed rest refusal — but only with trials-registry BH-FDR q=0.10 admission and sealed-2025 holdout before anything touches live p.
