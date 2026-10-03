# docs/data/MARKET_CALIBRATION_2026-09-04.md
## What it is (1-2 sentences)
A 2026-09-04 walk-forward calibration study of NFL closing moneylines (5,281 settled games, 2006-2025, from nflverse) testing whether de-vigged closing lines need recalibration — and concluding they do not: "The closing line is already the calibration."
## Key metrics/methods (formulas where given, else "not specified")
- Market probability = proportional de-vig of the two closing moneylines; ties excluded. Method: walk-forward folds (train ≤ N, evaluate N+1; never one pooled number).
- Pooled held-out 2016-2025 (n=2,750, raw de-vig, no recalibration): base rate (home win) 55.02%; Brier 0.2106, 95% bootstrap CI [0.2050, 0.2172]; Reliability 0.0324 [0.0311, 0.0339]; Resolution 0.0361; Uncertainty 0.2475; ECE equal-width 0.0180, adaptive 0.0126.
- Reliability curve (equal-count bins, pred → observed home-win %): 28.0→26.6, 42.7→41.2, 55.1→55.4, 64.2→62.0, 73.8→74.0, 84.1→86.8; deviations ~2-3 points, no monotone bias.
- CAVEAT (documented): Murphy decomposition on 10 equal-width bins gives rel − res + unc = 0.2438 ≠ Brier 0.2106 — a finite-bin (within-bin) residual of ≈0.033; the terms are not additive at this binning.
## Data sources named
nflverse `games.csv` (closing moneylines from 2006; cleared-with-attribution, CC BY 4.0). The script: `scripts/analytics/replay-calibration.ts` (run 2026-09-04, exit 0). Paired with `docs/data/CONVERGENT_CALIBRATION_EVIDENCE_2026-09-04.md`.
## Findings (numbers and facts, not vibes)
- Calibrator comparison (mean held-out Δ = Brier(calibrator) − Brier(identity) across 10 folds): isotonic (PAVA) +0.00007; Platt −0.00003; beta (coarse 3-param grid) −0.00014. NONE beats the identity by more than 0.0005 mean Brier — any future recalibration layer would add variance, not skill.
- Post-isotonic ECE per fold, worst folds: 2021 (0.0888 equal-width / 0.0391 adaptive) and 2023 (0.0859 / 0.0112); the equal-width number is inflated by sparse tail bins — the adaptive binner is the honest one.
- Variable-based calibration (favourite strength by |spread_line|, train ≤2015, evaluate 2016-2025): PK-1 leaf test actual 46.81% (n=188); 1.5-2.5 → 50.11% (447); 3-6 → 52.01% (1196); 6.5-9.5 → 57.12% (576); 10+ → 72.89% (343). Weighted leaf Brier 0.2440 vs global 0.2478.
- FLAG (documented as the one number that justifies a follow-up study, not a product change): the 6.5-9.5 leaf drifts 8.7 points train→test (65.86% → 57.12%, n=576, ≈3.6 standard errors) — either real era drift in moderate-favourite cover rates or a training-window artifact.
- Season era: single evaluable leaf (2014-2020: 55.91% train, 55.41% test) shows no era effect.
- Consequences: D7 honored — publish the reliability CURVE as the honest artifact (launch option A), never a recalibrated model claim; combined with the convergent evidence doc: the market resolves outcomes, the confidence score does not; any "edge" language on the public surface remains unsupported. No MODEL_VERSION change; Brier ≤ 0.22 / ECE ≤ 0.05 floors (D2) are met by the MARKET, not by our picks.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The core trust artifact — de-vigged closing lines are well-calibrated (Brier 0.2106, ECE adaptive 0.0126); this justifies the honesty rule that GSE's calibration floors are met by the market, not by engine picks, and that recalibrated model claims stay off the public surface.
- OTHER: Market calibration methodology (de-vig, Murphy decomposition, bootstrap CIs, walk-forward folds) — feeds the v5.3.0 conjunction gate comparing model p to de-vigged market p.
## Engine-actionable? (yes/no + one-line what)
Yes — kill any planned recalibration layer on closing lines (it adds variance, not skill) and prioritize investigating the flagged 6.5-9.5-point favourite leaf's 8.7-point train→test drift before trusting any moderate-favourite adjustment.
