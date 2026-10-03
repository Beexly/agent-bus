# docs/ops/hermes/l17-path-geometry/RESULTS.md
## What it is (1-2 sentences)
Final results of the L-17 path-geometry edge experiment on MLB totals line movement: six line-path features tested for predicting realized closing-line value, ending with a pre-registered STOP verdict for the edge program on this corpus.
## Key metrics/methods (formulas where given, else "not specified")
- Six features, each gated by a decimation check: realized variation (median RV_dec/RV_full ≥ 0.5), increment ρ₁ (median abs shift ≤ 0.2), sign-change rate (median abs shift ≤ 0.2), dispersion half-life (median relative shift ≤ 0.5), cross-sectional skew (median abs shift ≤ 0.5), staleness fraction (median abs shift ≤ 0.2).
- Ridge regression (all six features, alpha=1, GroupKFold 5 by game) against realized CLV.
- Pre-registered decision rule: r ≥ 0.15 continue, r < 0.10 stop, no appeal.
## Data sources named
The L-15 `hermes_ro` extract (2026-08-19T17:54:49Z); entry = last snapshot with hours-to-start in (1, 3]; `espn_public` excluded from features.
## Findings (numbers and facts, not vibes)
- 210 MLB totals games had the entry plus at least 10 pre-entry snapshots.
- Totals grouped-CV: Spearman r = 0.091 (n = 203 games, p = 0.19, R² = −0.049) → STOP per the pre-registered rule.
- All six features survived decimation (not 19-minute cadence noise); the model still does not predict realized CLV.
- Mean CLV = −0.00045 (sd 0.010).
- Univariate r vs CLV: realized variation −0.192; increment ρ₁ −0.045; sign-change rate −0.055; dispersion half-life −0.109; cross-sectional skew +0.043; staleness fraction −0.052. Univariate RV at r = −0.192 is one of six looks, not a pre-registered claim, and did not change the decision.
- Moneyline: r = −0.047, R² = −0.072 → stop. Spreads: r = 0.209, R² = −0.074 — rank correlation without variance explained, not the pre-registered primary market; same quarantine as C-41, do not continue on spreads.
- Explicit: no booster, no second experiment on this corpus.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Line-path geometry features (dispersion half-life, realized variation, staleness) as line-movement descriptors: OTHER
- Explicit verdict that line-path geometry does not predict realized CLV on this corpus: OTHER (edge-program result)
- All items MLB totals/moneyline/spreads, no football content: OTHER
## Engine-actionable? (yes/no + one-line what)
yes — negative result: stop building line-path-geometry features for CLV prediction on this corpus (MLB totals); spreads rank-signal quarantine (C-41) also noted as do-not-pursue.
