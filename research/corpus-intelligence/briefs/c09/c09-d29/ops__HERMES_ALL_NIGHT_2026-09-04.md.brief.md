# ops/HERMES_ALL_NIGHT_2026-09-04.md
## What it is (1-2 sentences)
All-night autonomous work order for the Hermes agent (2026-09-04): a 90-tool-call-per-wave plan for consolidation, calibration research, CLV harness, and launch artifacts — containing the two most important honest backtest/calibration measurements in the corpus at that point.
## Key metrics/methods (formulas where given, else "not specified")
- **Corpus-poisoning bug (PR #695):** nflverse `spread_line` polarity is *positive = home favored* while the repo used *negative = home favored*; every backfilled SPREAD pick was on the wrong team. All pre-#695 measurements declared void.
- **First honest measurement:** 1999-2025 regular season, 6,967 games, 15,939 settled picks, 0 lookahead errors. SPREAD −6.53% ROI · TOTAL −5.44% · MONEYLINE −1.96% · overall −5.48% per unit staked. Blended 52.70% win rate is an artifact of averaging differently-priced markets; ROI is the honest number.
- **Confidence has ~zero resolution:** confidence AUC 0.4965 (p=0.41) on 13,646 picks; controls (|line|, rest, week) all ≈0.50. Live production data (PR #685 body, 2026-09-02): 152 graded picks at ≥80 confidence, 61 wins (40%) — inverted; model resolution 0.005 on 1,663 graded picks (perfect recalibration lands at ≈0.244).
- **11 market slices tested, 0 cleared break-even** on the Wilson lower bound.
- CLV, Edge Index, grade ladder, consensus, depth all UNTESTED-not-disproven (degenerate because replay prices both sides at −110).
- Wave 3 plan: walk-forward calibration, reliability curve + Brier decomposition (reliability/resolution/uncertainty) for the MARKET closing line, ECE adaptive+debiased with bootstrap CIs (≥2,000 seeded resamples), isotonic (PAVA)/Platt/beta bake-off on held-out folds, variable-based calibration (Kelly & Smyth tree on one variable, per-leaf calibrator; splits on sport key, favourite strength, season era). "A point estimate without an interval is not a result."
## Data sources named
nflverse (spread_line, weekly stats); live production graded picks (1,663; 152 at ≥80 confidence); historical replay corpus 1999-2025 (`replayAndSettleGame`, 15,939 settled picks); games.csv market probabilities; The Odds API key rejected by provider since 2026-08-24 15:05 UTC.
## Findings (numbers and facts, not vibes)
- Two independent measurements (live graded picks vs 27-season historical replay) agree the confidence score has essentially zero resolution — corroborated, not suspected. The ≥80 confidence tier wins LESS often than the board average (40% live).
- Owner-level decisions recorded: calibrate the MARKET and publish the reliability curve (D7); do NOT calibrate the pick model into a claim; no speculative model changes — measure, document, propose (D8).
- Totals tie-break defect: at −110/−110, `overPrice <= underPrice` in `scoring.ts:655` is always true, so every tied market resolves OVER with consensus 1.0 ("100% of bookmakers") — a market with no opinion published as unanimous; fix spec'd as a proposal only, `MODEL_VERSION` not bumped.
- PR #685 was already merged (2026-09-03T19:59:36Z, 333 files, 65 commits); 21 stale published PENDING picks (18 v5.0.0 + 3 v5.2.6) needed superseding/voiding before Sept 5.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — engine calibration/validation intelligence: reliability of confidence scores, ROI by market, backtest methodology.
## Engine-actionable? (yes/no + one-line what)
Yes — canonical evidence that confidence scores have ~zero resolution (AUC 0.4965 / 40% at ≥80) and the wave-3 calibration playbook (walk-forward, Brier decomposition, seeded bootstrap CIs, isotonic/Platt/beta bake-off) is the prescribed measurement method.
