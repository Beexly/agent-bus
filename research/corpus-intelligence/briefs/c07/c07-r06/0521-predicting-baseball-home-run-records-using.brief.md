# arxiv-program/research/2026-09-21/arxiv-deep/0521-predicting-baseball-home-run-records-using.md
## What it is (1-2 sentences)
Kelley, Mureika & Phillips (2006) fit annual MLB home-run frequency distributions with an exponential curve (Gutenberg-Richter earthquake-law analogy) and extrapolate its parameters to forecast the probability of Barry Bonds's 73-HR record being broken. The deep read's verdict is REJECT — the headline prediction was falsified (record still stands in 2026) and there is no transfer path to NFL prediction.

## Key metrics/methods (formulas where given, else "not specified")
- Per-year exponential frequency fit on the lower-95% player HR counts: frequency(N) ≈ b·e^(−rN) (r = rate parameter, b = scale).
- Tail extrapolation: a performance's era-relative rarity = deviation from the year's exponential.
- Record forecast: track r and b evolution since 1903; note rate of change ≈ constant since 1948; extrapolate forward; add a "top-player exceedance" adjustment (mechanism not detailed).
- No train/test split, no backtesting, no baseline comparison reported.

## Data sources named
Annual individual MLB home-run totals, 1903–2005 (103 years), from thebaseballcube.com; filter: players with ≥100 AB.

## Findings (numbers and facts, not vibes)
- Predicted: >50% chance of someone hitting 74 HR within 5 years; >80% within 10 years (of the 2005/2006 writing date).
- Era-relative rarities computed: Bonds 73 (2001) = once-in-10-year event; Andruw Jones 51 (2005) = once-in-3-year event; Ruth 60 (1927) = once-in-10,000-year event.
- Post-hoc fact (INFERENCE from public record, in the deep read): no player has hit 74+ HR since 2006 — the model's own forward prediction failed; the parameter-stationarity assumption did not hold (likely steroid-era inflation of the 2001-era parameters).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: a cautionary tale — unvalidated stationarity assumptions and no backtest; falsified by its own forward prediction; a reminder that elegant analogies (Gutenberg-Richter) without calibration are not evidence.
- OTHER: era-relative rarity framing ("a 2,000-yard rushing season in 2025 is a once-in-N-year event") is a content/stat-graphic device only, not a predictive model.

## Engine-actionable? (yes/no + one-line what)
no — the forecasting method is falsified; only the era-relative rarity framing could be salvaged as a social-media content device (~0.5 day of work, zero engine value).
