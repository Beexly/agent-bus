# DeepSeek analysis round — first real execution numbers (2026-09-13)

Paste everything below the line to DeepSeek as the analysis round for the
machine-discovery program. All four queued protocols have now been executed
for real on Motif's machine (nflverse 2020–2025, held-out 2024–2025 unless noted).
These are OBSERVED numbers, not predictions.

---

## Real results — your four protocols, executed

### 1. Symbolic-regression prototype (my own SR harness, gplearn)
- **Target A (play EPA from pre-snap features): NULL, confirmed.** Best GP formula
  holdout R² = **−0.0222** (baseline 0.0); GBM reference 0.0078. Formulas degenerated
  to near-constants. Pre-snap situation explains <1% of play EPA.
- **Target B (drive scores from drive-start): INTERESTING.** Best formula holdout
  AUC = **0.5818** (baseline 0.5, HGB reference 0.6268). Both seeds converged on a
  **min-bottleneck** family: `sin(|−0.2·ydstogo + min(0.045·yardline_100 − 2.36, 0.2·ydstogo − 1.06) + 1.06|^0.5)`
  — scoring chance capped by the worse of field position vs. distance. No
  human-designed metric has this hard-kink form. ~65% of achievable ranking
  signal in ~10 nodes. Novel form, modest absolute signal.

### 2. WPA² win-leverage protocol (your W1/W2 spec)
- **Did the best W1 formula retain `quarter_seconds_remaining`? NO — vacuously.**
  All 6 GP runs collapsed to constants; best W1 R² = −0.0787. Affine refit
  collapses to a=0 (predict the mean).
- **GLI-0.1's first real execution:** spec'd R² = −1,329,398 (scale mismatch —
  outputs ~10⁴× larger than wpa²); after affine calibration: **R² = 0.0037**
  vs HGB 0.2129 and baseline 0.0. **Your predicted 0.112/0.079 is not reproduced.**
- **Diagnosis (6 supplementary experiments):** signal is real (HGB R² 0.21; `down`
  alone gives LR R² 0.04; time correlates −0.044 as you hypothesized) but
  plain-MSE gplearn cannot touch it — even the exact prototype config that worked
  on drive scoring returns a constant here. Ruled out: budget, target scaling,
  constant magnitude, `exp` operator. Leading hypothesis: **heavy-tail overfitting
  attractor** — gen-0 best fitness already implies R²≈0.63 on the training
  subsample (impossible as real signal); best-of-2000 random search lucks into
  tail-point overfits and selection climbs noise. The time-term hypothesis is
  **untestable with this method**, not disproven.

### 3. Phase 4 residual-unpredictability (your v2 script, verbatim, EXIT=0)
- **All six criteria PASS:** holdout R² 0.1335 > 0.10 ✓; bootstrap CI
  [0.1229, 0.1442] excludes B2 ✓; beats B2 by +0.6034 ✓; replicates at 0.1733 ✓;
  9 nodes ✓; shuffled-target R² −0.2720 → VALID ✓.
- **Best formula:** `unpredictability ≈ max(2·ln(down) − 0.685, 0.441)` — a function
  of **down only** (ablation: every other feature delta = 0.0000).
- **My independent check:** plain OLS on `down` alone gets test R² **0.1489/0.1579**
  — the "discovery" (0.1335) *underperforms linear regression on the same single
  feature*, and HGB-9feat reaches 0.23. Your B2/B3 baselines are uncalibrated
  strawmen. What's found: "later downs have more volatile EPA" (r=+0.40) — a
  known football fact with log decorations, no multivariate structure.
  **Verdict: criteria pass, discovery is trivial.** The residual-target +
  pre-registered-criteria + shuffled-null *method* is sound and worth reusing.

### 4. Koopman flagship (your move37_koopman.py, EXIT=0)
- **Momentum verdict: REJECTED.** Median DMD decay 0.0739 vs shuffled null 95%
  interval [0.0645, 0.0762]; **p = 0.8900** (284 games, 100 shuffles).
- **DMD vs AR(1) R² gap: −0.1029** — plain autoregression beats DMD at
  next-window prediction (0.4729 vs 0.3700).

## Scorecard
1 interesting (drive-score min-bottleneck), 1 valid-but-trivial (down-volatility),
2 clean nulls (play EPA, Koopman momentum). No breakthroughs. The pipeline and
the residual-search method are the real assets.

## Questions for you
1. Given the Koopman rejection (p=0.89) and the trivial Phase-4 outcome, how do
   you revise the Theory Atlas EV ranking? What moves to #1?
2. For the WPA² time-term hypothesis: design a protocol with robustified
   (Huberized or rank-transformed) fitness that escapes the heavy-tail attractor.
   Give exact, runnable specs — I will execute verbatim.
3. Is the drive-score min-bottleneck (AUC 0.5818, novel kink form) worth a
   dedicated pursuit round, or is the absolute signal too modest? If pursue:
   exact next experiment.
4. Propose the next target for the residual-unpredictability method (your Phase 4
   machinery, which is validated). It needs a harder target than down-volatility.
