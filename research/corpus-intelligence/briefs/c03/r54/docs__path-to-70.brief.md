# docs/path-to-70.md
## What it is (1-2 sentences)
Strategy-of-record document defining what an honest "70% win rate" means for Galaxy Sports Edge (a calibrated confidence tier, not a blended headline), the staged founder-gated path to get there, and the first real measurement (2026-09-04) of the frozen model replayed over settled history.
## Key metrics/methods (formulas where given, else "not specified")
- Win rate = wins / (wins + losses), pushes excluded. Break-even at −110 = 52.38%.
- Calibration via isotonic/PAVA (`probability-calibration.ts`); gates: `MIN_PUBLISH_CONFIDENCE = 50`, `CONSENSUS_MIN_PCT = 0.55`, `MIN_BOOKMAKERS = 2`, `SPEAK_EDGE = 0.025`, calibration-eligibility GREEN = (brier ≤ 0.22, ece ≤ 0.05, murphyReliability ≤ 0.05) for 3 consecutive runs.
- Ladder: FOUNDING → PROVEN (≥100 settled + published calibration) → ESTABLISHED (≥500 settled + verified CLV ≥ 52.4%) → AUTHORITY (multi-season ROI).
- Time-ordered holdout for calibration: `timeHoldoutSplit`, default trainFraction 0.7 (earliest 70% train, latest 30% test); never in-sample.
## Data sources named
nflverse `games.csv` (CC-BY-4.0, nflverse-data), 1999–2025 REG; 6,967 games, 15,939 settled picks; replay after the spread-sign fix (source: `docs/data/NFL_REPLAY_CALIBRATION_2026-09-04.md`); engine files `scoring.ts`, `edge-engine.ts`, `probability-calibration.ts`, `calibration-drift.ts`, `edge-significance.ts`, `clv.ts`, `clv-capture.ts`, `proof-of-record.ts`, `public-performance-policy.ts`.
## Findings (numbers and facts, not vibes)
- Replay results: SPREAD n=6778, 48.86% CI [47.67%, 50.05%], ROI −6.53%; TOTAL n=6868, 49.49% CI [48.31%, 50.67%], ROI −5.44%; MONEYLINE n=2001, 76.71% CI [74.81%, 78.51%], ROI −1.96%; all picks n=15647, 52.70% CI [51.92%, 53.48%], ROI −5.48%.
- The blended 52.70% rate sits above the 52.38% break-even while ROI is −5.48%: artifact of averaging differently-priced markets (ML wins pay ~0.29 units, spread/total wins pay ~0.91).
- Confidence does not rank outcomes: confidence 70–79 (premium side) n=3770, 48.33%, ROI −7.52%; confidence 65–69 (free side) n=9693, 49.47%, ROI −5.46%; two-proportion z = −1.19, p = 0.235 — "premium picks are worse" not supported, but no evidence they outperform either.
- Edge hunt: 11 market shapes tested (favourite/underdog, four spread bands, over/under, four total bands); zero cleared break-even on the Wilson lower bound (best: TOTAL ≤40 at 50.49%, lower bound 48.14%, ROI −3.57%).
- Replay graded every pick against the closing line with synthetic book depth; entry = close by construction, so CLV is structurally unmeasurable in this corpus — the open/close archive is the outstanding data gap.
- Calibration machinery (isotonic/PAVA, drift monitor, edge-significance Monte-Carlo permutation test, Merkle proof-of-record, CLV grading) exists but is built and switched off on purpose — gated by human `MODEL_VERSION` bumps, never flipped autonomously.
- Step 1 conclusion: isotonic regression cannot manufacture ranking that isn't there; a discrimination result (some published field separating winners from losers) must come before recalibration is meaningful.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The honest single performance number is ROI, never a blended win rate; claimed "70%" framings must be calibrated tiers with reliability curves. [TRUST-SIGNAL — calibration-first publishing doctrine]
- Confidence scores currently carry no discrimination power across 13,463 NFL picks: isotonic/PAVA calibration cannot create signal that isn't there. [TRUST-SIGNAL — do not trust or monetize heuristic confidence until discrimination is proven]
- CLV vs the closing line is the stated leading indicator of genuine edge; the open/close archive is the missing data piece. [OTHER — data gap: open/close odds archive]
- 11 tested market-shape segments all failed the Wilson lower-bound break-even bar: no free lunch in spread/total magnitude splits in this replay. [OTHER — negative edge-hunt result]
## Engine-actionable? (yes/no + one-line what)
Yes — Step 0/1 prerequisites: accumulate ≥100 settled canonical picks with discrimination before wiring calibration (Step 1), and capture open/close odds to make CLV measurable.
