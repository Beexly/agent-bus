# docs/arxiv-program/research/2026-09-21/notes/matt_barlowe.md

## What it is (1-2 sentences)
Source notes on an independent X analytics modeler (@Matt_barlowe, ~440 followers) who published natural-cubic-spline age curves for RB/WR/QB EPA contributions and derived each position's modeled peak age from the zero of the spline derivative. Sample: 2013–2025 (RB/QB) / 2016–2025 (WR) NFL play-by-play — 149,694 RB carries, 134,254 WR targets, 200,377 QB dropbacks.

## Key metrics/methods (formulas where given, else "not specified")
Method: natural cubic splines fitted to age-contribution to EPA; differentiated directly from stored spline bases; 94% pointwise intervals; linear tails beyond outer knots. Derivative = local slope of fitted EPA age contribution (EPA/dropback/year for QB; EPA/rush/year for RB; EPA/target/year for WR). Peak-age zeros: RB 24.53 yr, WR 25.33 yr, QB 26.67 yr. RB curve crosses zero ≈24.5, reaches ≈−0.008 by 30; WR crosses zero ≈25.3, ≈−0.024 from 30+; QB crosses zero ≈26.7, declines to ≈−0.013 by ~35. Author's caveat: "not a total EPA difference or a causal aging effect."

## Data sources named
NFL play-by-play (2013–2025 / 2016–2025 seasons); X post https://x.com/matt_barlowe/status/2101707476416557418 (Sep 20, 2026).

## Findings (numbers and facts, not vibes)
- Modeled peak ages: RB 24.53, WR 25.33, QB 26.67 years.
- WR age-derivative is the steepest of the three positions (+0.028 at age 21, crossing zero at 25.3).
- QB decline is the most gradual; flat ≈−0.013/year beyond age 37.
- RB curve flat ≈−0.007 from ~37 with linear extrapolation beyond outer knot.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Peak ages RB 24.5 / WR 25.3 / QB 26.7 as aging priors for projection blends — QB-BEHAVIOR (aging component of QB projections)
- Author's explicit caveat against causal interpretation — TRUST-SIGNAL
- Natural-cubic-spline differentiation with 94% pointwise intervals — OTHER (modeling methodology)

## Engine-actionable? (yes/no + one-line what)
Yes — adopt RB 24.5 / WR 25.3 / QB 26.7 peak ages as priors in the engine's player-aging/decline curves for projection blends.
