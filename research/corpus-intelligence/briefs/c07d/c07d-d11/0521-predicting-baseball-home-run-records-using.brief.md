# arxiv-program/research/2026-09-21/arxiv-deep/0521-predicting-baseball-home-run-records-using.md
## What it is (1-2 sentences)
Deep-read note on arXiv:physics/0608228v1 (Kelley, Mureika, Phillips 2006) fitting annual MLB home-run distributions as exponentials (Gutenberg-Richter analogy) and extrapolating the tail to predict when Bonds's 73-HR record would fall.
## Key metrics/methods (formulas where given, else "not specified")
- Exponential frequency fit (verbatim from Figure 1 caption): frequency(N) ≈ b·e^(−rN) (r = rate parameter, b = scale, N = home runs), fit on the 95% of players with the lowest HR totals per year
- Rarity framing: a performance's annual/all-time rarity = its deviation from the year's exponential
- Forecasting: track exponential parameters' evolution since 1903; note rate of change of each parameter approximately constant since 1948; extrapolate forward; add "exceedance" adjustment (top player often outperforms lower-95% prediction; mechanism not detailed)
## Data sources named
- thebaseballcube.com: annual individual MLB home-run totals, 1903–2005 (103 years); filter ≥100 at-bats
- Previously applied to track & field, weightlifting, baseball (manuscript in preparation, Kelley et al. [5]) — no numbers reported
## Findings (numbers and facts, not vibes)
- Probability of someone hitting 74 HR within next 5 years: >50%; after 10 years: >80% (Figure 1d)
- Era-relative rarities: Bonds 73 HR (2001) = once-in-10-year event; Andruw Jones 51 HR (2005) = once-in-3-year event; Ruth 60 HR (1927) = once-in-10,000-year event ("far more impressive than that of Bonds, even though the latter hit 73")
- Rate of change of exponential parameters approximately constant since 1948 (no numeric slope given)
- FALSIFIED POST-HOC (my inference, from public record): Bonds's 73 HR record still stands as of 2026 — the >50%/5-yr and >80%/10-yr claims did NOT come true; exponential-parameter stationarity did not hold (likely confounded by the steroid era inflating 2001-era parameters)
- No backtesting, no train/test split, no baseline comparison; 95% cutoff, ≥100 AB filter, and exceedance correction are asserted, not estimated or sensitivity-tested; no uncertainty on probability estimates
- Verdict: REJECT
- Gate: already evaluated — headline prediction failed; reject stands unless a re-estimated version with post-2005 data produces calibrated, backtested record probabilities beating a naive base-rate model on a held-out era
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/reasoning program): Serves as a negative control case for Garrett's ingest-and-learn lane — a clean, published example of a parametric stationarity assumption failing on its own forward prediction. Useful as a cautionary citation when evaluating record-probability claims and trend-extrapolation models (regime changes — expansion, testing era — broke the constant-rate assumption).
- OTHER (media framing): The era-relative rarity idea ("a 2,000-yard rushing season in 2025 is a once-in-N-year event", computed empirically from season-total distributions) is salvageable as a content/stat graphic for GSE social posts — a media framing device, not a predictive model (~0.5 day effort).
- OTHER (EVT): The falsified prediction is the natural test bed for whether proper extreme value theory (GEV/GP on annual maxima or peaks-over-threshold, with regime-change indicators) survives where the exponential-Gutenberg analogy failed.
## Engine-actionable? (yes/no + one-line what)
no — headline prediction falsified on its own test case and no transfer path to NFL (heterogeneous player roles break the population-tail analogy); retain only as a falsification-case citation.
