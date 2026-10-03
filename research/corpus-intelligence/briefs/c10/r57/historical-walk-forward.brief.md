# reasoning/historical-walk-forward.md
## What it is (1-2 sentences)
The engine's own walk-forward record: home-field constant selected on 2002-2014, then each season 2015-2026 scored only by models fit on earlier seasons; compares Elo vs pregame logit vs devigged market price on same-game Brier. Also records the three week-3 model probabilities (Elo, logit, market) per game.
## Key metrics/methods (formulas where given, else "not specified")
- Home-field selection: grid of hfa ∈ {0, 30, 48, 65, 80} × margin-of-victory multiplier ∈ {true, false} on 3,466 games (2002-2014), chosen by lowest Brier. Winner: hfa=48 Elo points, margin multiplier false, Brier 0.2269. Base K=20 from existing rating module.
- Walk-forward: fit on earlier seasons only; 2026 did not enter the 2015-2025 fits.
- Metric: same-game Brier (lower = sharper). 11 seasons 2015-2025 where all three exist: Elo 0.2314, pregame logit 0.2262, devigged price 0.2122.
## Data sources named
Engine's own 3,466-game 2002-2014 set; 2015-2025 seasons (264-285 games/season); logit sample for 2026 = 7,240 earlier games. No external sources named.
## Findings (numbers and facts, not vibes)
- Devigged price beats pregame logit beats Elo in every season of 2015-2025 weighted aggregate: 0.2122 vs 0.2262 vs 0.2314 (11 seasons, games where all three exist).
- Per-season (same-game Brier): devigged price best in all 11 seasons 2015-2025; Elo's best season 2024 (0.2140); Elo's worst 2022 (0.2396).
- 2026 (33 games): elo 0.2282, logit 0.2524, devigged 0.2289 — devigged and Elo essentially tied; logit is the worst.
- Home-field grid: hfa 48/no-margin-multiplier (0.2269) barely beats hfa 65 (0.2270); hfa 0 scores 0.2322-0.2334 (worst). Margin multiplier always hurts at a given hfa level.
- Week-3 model disagreements (elo / logit / market): KC at MIA 0.342 / 0.475 / 0.173 (market far most bearish on KC); NE at JAX 0.479 / 0.621 / 0.583 (logit bullish on NE); PHI at CHI 0.331 / 0.699 / 0.363 (logit far most bullish on PHI, market+Elo aligned); CAR at CLE 0.607 / 0.424 / 0.437; CIN at PIT 0.611 / 0.451 / 0.378.
- LAC at BUF: elo 0.778, logit 0.803, market 0.741 — models agree on BUF direction.
- File states: "It is not a pick."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Devigged price > logit > Elo across 11 seasons (TRUST-SIGNAL — market as calibration anchor)
- hfa=48 selected on 3,466 games, K=20 (OTHER — calibration constants)
- logit sample N=7,240 for 2026 (TRUST-SIGNAL — sample provenance)
- Model divergence PHI@CHI / KC@MIA / NE@JAX (OTHER — disagreement flags for watch)
## Engine-actionable? (yes/no + one-line what)
yes — devigged-price Brier baseline (0.2122, 11 seasons) is the documented bar to beat; any family must improve on same-game Brier to earn its prior weight.
