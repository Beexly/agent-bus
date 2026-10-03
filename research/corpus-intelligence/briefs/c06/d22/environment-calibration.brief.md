# reasoning/environment-calibration.md
## What it is (1-2 sentences)
A compact calibration table for GSE environment features on 544 settled 2024–2025 regular-season games, measuring how rest, wind, temperature, and referee crews move the home margin and the total residual versus the betting number.
## Key metrics/methods (formulas where given, else "not specified")
- Method: linear slope estimates per feature vs outcomes, with standard errors. Referees stored only at 12+ games (minimum-sample inclusion rule).
- Table (feature → n → slope → se → used effect):
  - rest days → home margin: n=544, slope=+0.411, se=0.254 → used +0.411
  - wind mph → total residual: n=349, slope=−0.135, se=0.162 → used +0.000 (not used)
  - temperature F → total residual: n=349, slope=+0.029, se=0.039 → used +0.000 (not used)
- Referee crews with a used effect: 12 of 18.
## Data sources named
- None named explicitly — 544 settled regular-season games from 2024–2025 (GSE's own game data).
## Findings (numbers and facts, not vibes)
- Rest days carry a +0.411 point slope on home margin (se 0.254) over 544 games and are USED in the engine; slope is ~1.6σ (0.411/0.254 ≈ 1.62, INFERENCE from the given numbers).
- Wind has a −0.135 points-per-mph slope on the total residual (se 0.162, n=349) but is set to +0.000 — not used (INFERENCE: slope magnitude below se threshold, too noisy).
- Temperature has a +0.029 points-per-degree slope on the total residual (se 0.039, n=349), also set to +0.000 — not used.
- Wind/temperature are evaluated on 349 games vs 544 for rest (195 fewer games — likely missing weather observations, INFERENCE).
- 12 of 18 referee crews carry a used effect — 6 crews excluded by the 12-game minimum rule.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Rest-days effect used at +0.411 with stated se → TRUST-SIGNAL (honest uncertainty: publishes standard error alongside every slope; drops noisy features to exactly 0.000 rather than keeping weak signal).
- Referee minimum-12-games inclusion rule → OTHER (sample-size discipline for crew effects).
- Wind/temperature slopes measured but zeroed → OTHER (environmental adjustment calibration; corroborates that the engine only wires features that clear the noise bar).
## Engine-actionable? (yes/no + one-line what)
Yes — directly wireable: add +0.411 per extra rest day to home margin, keep wind/temperature at zero pending larger weather samples, and apply the 12-of-18 referee crew effects with the same 12-game minimum rule.
