# ops/CALIBRATION_UNCERTAINTY_STACK.md

## What it is (1-2 sentences)
Internal spec of the engine's calibration-and-uncertainty stack: how binary probabilities (Temp / Platt / PAVA / EB-τ) and numeric intervals (QRF + CQR) are calibrated, which metrics gate eligibility, and how uncertainty bands are built — with a hard rule that conformal/CQR layers stay OFF the public binary board.

## Key metrics/methods (formulas where given, else "not specified")
Pipeline: `Binary p → Temp / Platt / PAVA / EB-τ → Brier·ECE·Murphy(R, resolution, uncertainty) → eligibility → stationary-bootstrap bands (internal) → optional conformal abstain (flag OFF)`. Numeric path: `Numeric y → QRF quantiles → optional CQR intervals (props/margins) — not PROVEN path`.

Formulas/parameters stated verbatim:
- Stationary bootstrap: "Mean block ≈ 14 (days/events). Resample contiguous geometric blocks with wrap."
- EB-τ hierarchical: `u_g ~ N(0,τ²)`, τ̂ moment match clamp [0.05, 2]. Unknown g → u=0.
- Isotonic preference rule: prefer isotonic PAVA/CIR when "Odd reliability shape" or "Ranking OK, levels wrong"; prefer Platt/temperature when "Small N, need strong regularization" or "Need smooth global rescale only."
- CQR TypeScript API: `conformalQuantile`, `cqrInterval` in `apps/web/lib/calibration/cqr.ts`.
- Flags: `CONFORMAL_ABSTAIN_ENABLED` default false; CQR/conformal-abstain flags default OFF, "not PROVEN unlocks".
- Eligibility gate: PROVEN eligibility is "still Brier/ECE on **p**" — conformal/CQR never unlock eligibility.
- Numeric intervals: QRF (quantile random forest) quantiles as base; CQR intervals on top for props/margins, wire-only behind an explicit numeric-interval flag, never on the public binary board by default.
- "Map CI ≠ conformal coverage"; "ACI abstain = show/set size only"; "Split-conformal residual sets = outcome coverage, optional R&D".

Brier/ECE/Murphy formulas themselves are not restated in this file ("not specified" for the equations).

## Data sources named
None explicitly (calibration operates on engine's own model outputs; no external data source named in the file).

## Findings (numbers and facts, not vibes)
1. Two-product split: binary sides use Temp | Platt IRLS | Isotonic PAVA/CIR | EB-τ → Brier/ECE/Murphy → eligibility; numeric lines (spreads/totals/props) use QRF → CQR intervals as a separate coverage product layer.
2. Eligibility is PROVEN-path only, decided on Brier/ECE computed on probability p — no conformal or CQR output can change eligibility.
3. Stationary bootstrap mean block size ≈ 14 days/events with geometric blocks and wrap; used for map-grid CIs and Brier CIs; explicitly "Not for public ROI."
4. Conformal abstain (ACI) is disabled by default (`CONFORMAL_ABSTAIN_ENABLED` false); even when enabled it only shows set size, never a probability.
5. EB-τ hierarchical adjustment: group random effects u_g ~ N(0,τ²), τ̂ estimated by moment matching and clamped to [0.05, 2]; unknown group → u = 0 (no adjustment).
6. Isotonic vs Platt guidance: isotonic for odd reliability shapes and when ranking is fine but levels are wrong; Platt/temperature for small N needing regularization or pure global rescale.
7. QRF intervals described as "Adaptive-width uncertainty on maps" and "Input to CQR"; skip QRF for binary side calibration and for PROVEN eligibility.
8. "Request-path heavy forests without caching" explicitly listed under "Skip for" for QRF usage (latency/ops constraint).
9. CQR implementation exists at `apps/web/lib/calibration/cqr.ts` (`conformalQuantile`, `cqrInterval`) but is flagged as not-yet-wired — wire only behind an explicit numeric-interval flag later.
10. Map CI and conformal coverage are called out as distinct concepts not to be conflated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — This file is engine calibration infrastructure, not behavioral signal. It serves the calibration/sizing program directly: the two-product split (Brier/ECE-gated binary eligibility vs QRF+CQR numeric intervals) dictates how engine probability outputs get hardened before publication, and the "not PROVEN path" label means CQR intervals cannot be used as evidence-of-edge. Full sentences on mechanism: because eligibility is decided strictly on Brier/ECE of p, any downstream signal (QB-behavioral profiles, coaching tendencies, trust-target intake) must manifest as calibrated probability shifts to earn public-board rights — raw score improvements in any lane do not unlock display.
- TRUST-SIGNAL — The EB-τ clamp [0.05, 2] bounds how much hierarchical group effects can move probabilities; this is the mechanism that prevents over-fitting to small-sample group effects (e.g., a QB's situational splits with n≈small). It serves the trust-target intake program by guaranteeing any group-conditioned adjustment is shrunk before it touches published p.
- OTHER — The isotonic-vs-Platt decision rule is an operational calibration heuristic for the sizing program: when a new signal lane improves ranking but distorts levels (common with binary behavioral features), the file prescribes isotonic PAVA; when data is thin, Platt/temperature with regularization.
- No CONTRADICTION found within this file. UNCERTAIN: the file states CQR for props/margins is "not PROVEN path" — it does not define what evidence would make it a PROVEN path, so the unlock criterion is unspecified.

## Engine-actionable? (yes/no + one-line what)
Yes — one line: encode the binary-vs-numeric product split and the isotonic-vs-Platt selection rule into the calibration pipeline defaults before any new signal lane is wired.

### Referenced files, papers, datasets
- `apps/web/lib/calibration/cqr.ts` (`conformalQuantile`, `cqrInterval`)
- No papers or datasets named.
