# math/GSE_EXPECTED_METRICS.md
## What it is (1-2 sentences)
The GSE "metric bible" defining three proprietary over-expected metrics — GSE-CPOE, GSE-RYOE, GSE-xYAC — computed from public nflverse play-by-play with fit-on-load models, validated (not copied) against NGS as ground truth with pre-registered graduation thresholds and grain-discipline rules.
## Key metrics/methods (formulas where given, else "not specified")
### Shared shape
- Fit an expected-value model on a season of plays; residual = actual − expected per play; roll up per player. Join key throughout: nflverse `gsis_id`. Rollup (`rollup.ts → rollupByPlayer`) reports per-play means scaled to NGS units + unscaled `overExpectedTotal`, sorted descending, id-tiebroken.
### GSE-CPOE (completion percentage over expectation) — `gse-xcomp-v1`
- Estimator: L2-regularized full-batch gradient-descent logistic regression (`fitLogistic`/`predictLogistic`), standardized features, intercept as separate unpenalized bias initialized at class-prior log-odds; deterministic (400 iterations, lr 0.3, L2 = 1e-3).
- Play row: one dropback per row (`complete_pass=1` or `incomplete_pass=1`, with `air_yards`, `passer_player_id`).
- Features (10, canonical order): `airYards`, `airYardsSquared` (depth + curvature), `qbHit` (public pressure proxy = `qb_hit`), `isMiddle`/`isLeft` (right = reference), `down`, `ydstogo`, `yardline100`, `shotgun`, `noHuddle`.
- Formula: `GSE-CPOE(passer) = 100 × mean(complete − P̂(complete))`, in completion-percentage points (`reportScale = 100`); `overExpectedTotal` = completions above expectation (counting stat).
- Floors: `MIN_DROPBACKS_TO_FIT = 200`; `DEFAULT_MIN_PASSER_ATTEMPTS = 100` (matches NGS passing grain).
### GSE-RYOE (rush yards over expected per attempt) — `gse-xrush-v1`
- Estimator: ridge (L2) linear regression, closed-form normal equations `β = (ZᵀZ + λR)⁻¹ Zᵀy`, standardized design with leading intercept column, `R = diag(0,1,1,…)` (intercept unpenalized), solved exactly by Gaussian elimination with partial pivoting — no iteration, no randomness; default `λ = 1`.
- Play row: designed rush (`rush=1`, `qb_kneel≠1`, with `rushing_yards`, `score_differential`, `rusher_player_id`).
- Features (9): `yardline100`, `down`, `ydstogo`, `shotgun`, `scoreDifferential` (offense minus defense at snap — game-script/box-count proxy), `runMiddle`/`runLeft` (right reference), `gapGuard`/`gapTackle` (end reference).
- Formula: `GSE-RYOE(rusher) = mean(rushingYards − ŷ(rushingYards))`, yards per attempt (`reportScale = 1`); `overExpectedTotal` = total rush yards over expectation.
- Floors: `MIN_RUSHES_TO_FIT = 200`; `DEFAULT_MIN_RUSHER_ATTEMPTS = 50`.
### GSE-xYAC (yards after catch over expectation) — `gse-xyac-v1`
- Estimator: ridge linear regression (same kernel as RYOE), `λ = 1`.
- Play row: completed reception (`complete_pass=1`, with `air_yards`, `yards_after_catch`, `receiver_player_id`).
- Features (6): `airYards` (dominant public proxy for expected YAC), `yardline100`, `down`, `ydstogo`, `isMiddle`/`isLeft`.
- Formula: `GSE-xYAC(receiver) = mean(yardsAfterCatch − ŷ(yardsAfterCatch))`, yards per catch.
- Floors: `MIN_CATCHES_TO_FIT = 200`; `DEFAULT_MIN_RECEIVER_CATCHES = 30`.
### Fit-on-load architecture
- Loader (`loadNflverseExpectedMetrics`): fetches a real season of nflverse PBP via `loadPbp`, column-projected to ~27 of ~372 columns (OOM defense); tries `[season, season−1]` fallback; runs `assertIngestible("nflverse")`; REG only; excludes two-point attempts, spikes, kneels; fits all three models on that exact season at load.
- Provenance (`ExpectedMetricProvenance`): `modelVersion`, `method`, `featureKeys`, `featureSchemaHash` (deterministic djb2 hash, 8 hex chars — drift detector, not cryptographic), `sampleSize`.
- Honesty gates (return `null`, never guess): below 200-play floor → empty block (`provenance: null`, verdict `insufficient-sample`); logistic returns `null` on degenerate labels (all completions or all incompletions); ridge returns `null` when underdetermined (`n < p+1`) or matrix singular even after ridging; source error → `status: "source-error"` with empty blocks.
### Validation methodology (`validation.ts`)
- `buildCalibrationReport(ours, truth)` → `CalibrationReport`: `n` (inner-join size), `pearson`, `spearman`, `rmse`, `mae`, `bias` (= `ourMean − truthMean`), `ourMean`, `truthMean`; join of <2 players → all-zero report (not NaN); all stats rounded to 4 decimals.
- `graduationVerdict(report, thresholds)`: `n < minSample` → `insufficient-sample`; `pearson ≥ graduatedPearson` → `graduated`; between provisional and graduated → `provisional`; else `failed`.
- Pre-registered thresholds: cpoe — minSample 12, graduated 0.60, provisional 0.35; xyac — 12, 0.50, 0.25; ryoe — 12, 0.40, 0.20. (Rationale: CPOE recoverable from public depth+pressure; xYAC depends on unseen defender proximity; RYOE leans hardest on unseen defenders-in-the-box and closing/top speed.)
- Grain discipline (join-by-`playerId`; caller enforces): same season (activeSeason after fallback), REG only, `gsis_id` key, matched per-player qualifier on both sides; NGS side read from week-0 season-aggregate rows (`week == 0`, `season_type == REG`). Forbids: per-play vs per-season correlation, min-100 vs min-1 pools, REG vs REG+POST, name-based joins.
### Honest limitations
- Public proxies: `air_yards` (+ square), `qb_hit` binary pressure, location/gap buckets, down/distance/field position, shotgun/no-huddle, score differential. Physically absent: receiver separation/cushion, defender proximity at catch, defenders-in-the-box, runner closing speed/top speed/time-to-LOS, time-to-throw, route geometry.
- Cannot claim: identity with NGS's model (per-play probabilities differ by construction); equality with any NGS number for a player (report surfaces `bias`); anything forward-looking — `canPublishProjections` stays `false`; wiring into edge/scoring engine is a separate founder-gated MODEL_VERSION step.
## Data sources named
- **nflverse** play-by-play (CC-BY-4.0) — the fit source; ~27 of ~372 columns read.
- **NGS (Next Gen Stats)** — ground truth for validation ONLY: enters only as the y-axis of the validation correlation; never copied into a served metric (explicitly NGS-agnostic serving posture). Legal/data map in `docs/data/NGS_GROUND_TRUTH_MAP.md`.
## Findings (numbers and facts, not vibes)
- 10 CPOE features, 9 RYOE features, 6 xYAC features, all canonically ordered with `featureSchemaHash` drift detection.
- Deterministic fitting: logistic (400 iter, lr 0.3, L2 1e-3) and closed-form ridge (λ=1, unpenalized intercept) — same plays → same coefficients.
- Sample floors: 200 plays to fit; qualifiers 100 dropbacks / 50 carries / 30 catches per player.
- Graduation bars: 0.60 / 0.50 / 0.40 Pearson (cpoe/xyac/ryoe), each with provisional tiers at 0.35 / 0.25 / 0.20, min join n = 12.
- Modules: `numeric.ts` (primitives; `0` not `NaN` on degenerate input), `linear.ts`, `logistic.ts`, `types.ts`, `rollup.ts`, `expected-completion.ts`, `expected-rush-yards.ts`, `expected-yac.ts`, `validation.ts`, `index.ts`, loader `apps/web/lib/nflverse/expected-metrics.ts`, premium-gated GET route `apps/web/app/api/nflverse/expected-metrics/route.ts` (measurement only).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: GSE-CPOE is the core QB efficiency-over-expectation profile — formula, 10-feature model, and 100-dropback qualifier give a directly reusable QB grading kernel (target concentration/HHI not in this doc).
- OL: `qbHit` as the public pressure proxy ties OL/pass-protection performance to completion outcomes; score-differential and gap/location features feed run-blocking context for RYOE.
- SCHEME: shotgun, noHuddle, down/ydstogo, yardline100, run location/gap one-hots, and throw-location one-hots (right as reference) are all scheme/situation features reusable for coaching-tendency profiles.
- TRUST-SIGNAL: honesty-gate pattern (return null rather than guess; `failed` verdict; pre-registered thresholds; bias surfaced not hidden) is the trust posture template.
- OTHER: NGS enters only as validation ground truth — the legal posture (NGS as referee, never the product) is explicit.
## Engine-actionable? (yes/no + one-line what)
Yes — one-line: the full feature contracts, formulas, floors, and validation thresholds for CPOE/RYOE/xYAC are a ready-made QB/RB/WR over-expected grading kernel the engine can reuse for player-behavior profiles.
