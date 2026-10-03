# models/model-benchmark-lab.md
## What it is (1-2 sentences)
Doctrine defining the five-dimension benchmark framework every predictive model version must pass before promotion to production, explicitly aimed at preventing overfit win-rate claims.
## Key metrics/methods (formulas where given, else "not specified")
Dimension 1 — Prediction Accuracy: over a holdout window (never training data), % of picks with confidence ≥60 that won; baselines required: naive (always pick favorite), market (follow closing line), prior model version; REJECTED if it underperforms the naive baseline regardless of absolute win rate. Training window: ≥1 full season odds+results; holdout: ≥1 full season excluded from training; production evaluated per 30-pick batch. Dimension 2 — Confidence Calibration: calibration curve, predicted confidence vs actual win rate in 10-point buckets (50–59 … 90–100); pass if no bucket deviates more than ±15 percentage points over minimum 30 picks per bucket. Dimension 3 — Sample Sufficiency: ≥30 settled picks (same version, same window) to report any win rate publicly; ≥30 per sport per version; ≥30 per pick type (spread, moneyline, total); ≥100 settled picks to claim "this model hits at X%". Dimension 4 — Edge Case Robustness: 100% of edge scenarios (thin/stale/contradictory/missing evidence) must produce appropriate uncertainty handling; any confident pick from insufficient evidence is a FAIL. Dimension 5 — Version Comparison: Brier score, log loss, win-rate delta, calibration delta on same holdout; pass requires statistically meaningful improvement (p < 0.05 over 100+ picks) on at least one dimension with no meaningful regression elsewhere.
## Data sources named
nflgame, nfldb, nflscrapR, nflfastR (NFL play-by-play, EPA/WPA), pybaseball (Statcast, wOBA/FIP), sports-reference Pythagorean win expectation; training data = historical odds + results.
## Findings (numbers and facts, not vibes)
- The "our model hits at 68%" trap is the named anti-pattern: win-rate claims without time-series splits, baselines, or sufficient samples are not credible and must not be cited publicly. [TRUST-SIGNAL]
- MVP path is Dimension 3 (sample sufficiency) as a gate in the compliance scanner — the highest-leverage near-term control; no standalone benchmark runner exists yet (Zone 2 new additive package). [TRUST-SIGNAL]
- AI-generated evaluation outputs used as the sole measurement are a P0 licensing/security risk; human evaluation is required for Dimension 4. [TRUST-SIGNAL]
- Benchmark holdout window must not overlap training window; holdout data in training is a P1 risk. [OTHER]
- Forbidden: deploying without a completed scorecard, lowering thresholds to pass, training-data-as-holdout, cherry-picked baselines, suppressing a failing dimension, reporting over a hand-selected favorable window. [TRUST-SIGNAL]
- Every deployed model version needs a completed benchmark scorecard stored alongside model version metadata; version without scorecard = P1. [TRUST-SIGNAL]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Findings tagged TRUST-SIGNAL and OTHER; no QB-BEHAVIOR, COACHING, OL, or SCHEME content present.
## Engine-actionable? (yes/no + one-line what)
Yes — this is the direct spec for the GSE benchmark runner and the calibration gate: ±15pp calibration tolerance, 30/100 sample floors, naive-baseline rejection rule, Brier/log-loss version comparison.
