# calibration-proposals/2026-08-09-ranking-polarity-independents-v5.2.1.md
## What it is (1-2 sentences)
An IMPLEMENTED calibration proposal bumping `MODEL_VERSION` to v5.2.1: a ranking-signal quality pass fixing polarity (edge-vs-probability category error) and wiring independent probability fills, without changing confidence weights, maps, or eligibility floors.
## Key metrics/methods (formulas where given, else "not specified")
- Never treat edge as a win probability in proven-path bake-off (category error); bake-off kinds restricted to: confidence | independent_trueProb | blend_indep_conf | marketFairProb.
- Ranking uses `trueProb` whenever finite (including PASS) so overpriced favorites demote; default blend weight 0.7.
- Persist `rankingP`, `rankingSource`, `marketFairProb` on `factorBreakdown`; honest metrics load: `pIndependent` = raw `trueProb` only (never confidence-echo rankingP).
- Independent fill: ESPN PowerIndex logistic, Kalshi team maps, Poisson, Elo (null-safe); FPI team lookup exact-only (no substring fuzzy match).
- `bestScore` requires separation > 0 and coverage ≥ 40% of confidence n.
- Live eligibility floors UNCHANGED: Brier ≤ 0.22, ECE ≤ 0.05, Murphy R ≤ 0.05, n ≥ 100, GREEN×K. Performance surfaces stay dark until eligibility GREEN + publish policy.
## Data sources named
ESPN PowerIndex (FPI), Kalshi team abbreviation maps, Poisson team-rate estimator, Elo — all as independent `trueProb` fills.
## Findings (numbers and facts, not vibes)
- Root cause found: under the old bake-off, conf sep ≈ −0.005 vs edge-as-p sep ≈ −0.14 — treating edge as a probability inverted `bestScore`.
- Blend weight 0.7 default; eligibility floors Brier ≤ 0.22 / ECE ≤ 0.05 / Murphy R ≤ 0.05 / n ≥ 100.
- Gates still OFF: `CALIBRATION_ADJUSTMENTS_ENABLED`, `CALIBRATION_AUTO_PUBLISH` (false), conformal/ACI abstain; free-path ABSENT-only; odds key untouched.
- Founder follow-ups listed: promote Production to main, re-run calibration-metrics cron, regenerate slate so new picks carry priced rankingP + independents.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Edge-as-probability category error → TRUST-SIGNAL (honest-probability discipline, confidence vs probability separation).
- Independent-fill recipe (FPI logistic + Kalshi + Poisson + Elo) → OTHER (ranking-model construction).
- Eligibility floors as publish gate → TRUST-SIGNAL.
## Engine-actionable? (yes/no + one-line what)
Yes — the v5.2.1 ranking rules (trueProb-first ranking, 0.7 blend, null-safe independent fills, exact-only FPI lookup) are concrete implemented model code the engine relies on.
