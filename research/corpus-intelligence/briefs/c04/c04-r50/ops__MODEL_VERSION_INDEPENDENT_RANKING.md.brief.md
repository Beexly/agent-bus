# docs/ops/MODEL_VERSION_INDEPENDENT_RANKING.md
## What it is (1-2 sentences)
Release notes for MODEL_VERSION v5.2.2: the engine's independent (market-free) ranking path — Dixon–Coles soccer independents, Kalshi polarity handling, and a shift to ranking by model trueProb with a 0.7 independent blend weight instead of confidence-echoed prices.

## Key metrics/methods (formulas where given, else "not specified")
- Ranking uses **trueProb whenever finite** (incl. PASS), so overpriced favorites demote.
- Default `independentWeight` = **0.7** (blend with confidence; less market-echo dilution).
- `pIndependent` in metrics load = **raw trueProb only** — never confidence-echo rankingP, never double-blend.
- Bake-off kinds scored: `confidence | independent_trueProb | blend_indep_conf | marketFairProb` — never edge-as-p.
- `bestScore` requires **separation > 0** and **coverage ≥ 40%** of confidence n.
- Floors unchanged: Brier ≤ 0.22, ECE ≤ 0.05, Murphy R ≤ 0.05, n ≥ 100, K=3. AUTO_PUBLISH default false; CALIBRATION_ADJUSTMENTS still OFF.
- Spread/TOTAL: rankingP = confidence until ATS/total independents exist (explicit placeholder).
- Board, `/api/picks`, dashboard, cockpit overview and cockpit brief re-sort by `rankingP` after load (featured pin preserved).

## Data sources named
Dixon–Coles soccer independents (TeamGameLog λ + τ(ρ) low-score correlation), Kalshi (series-aware search, team-name→abbr maps, 12h series skew), ESPN FPI (exact name/abbr match only), ClubElo (free fixtures/ratings CSV), ESPN PowerIndex, Polymarket internal estimator (env-gated, default OFF, compliance hold).

## Findings (numbers and facts, not vibes)
- Live bake-off showed **confidence RES ≈ 0.002** — confidence is market-echo; edge-as-p showed negative separation, judged a category error.
- Conclusion stated: pricing real model P raises Murphy RES without inventing skill; if selective RES on independent/blend still < 0.02 under v5.2.2, the engine needs sport-specific models/new features, not more calibration maps.
- Coverage expanded in the same MODEL_VERSION without formula change: Kalshi series-aware search (MLB/college/soccer series), WNBA/CFB/CBB + EPL/MLS/UCL/Liga/Bundesliga/Serie A/Ligue 1, ClubElo soccer, Polymarket estimator.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: Pure model-calibration/ops material — probability pricing, ranking math, calibration floors. No QB behavior, coaching, OL, or scheme content.

## Engine-actionable? (yes/no + one-line what)
Yes — the trueProb-based ranking path, 0.7 independent blend, and separation-gated bake-off are shipped engine mechanisms (v5.2.2); the RES ≈ 0.002 baseline and <0.02 self-correction trigger give an engine-calibration decision rule.
