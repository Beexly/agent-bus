# arxiv-program/research/2026-09-21/arxiv-deep/1550-angular-combining-forecasts-probability-distributions.md
## What it is (1-2 sentences)
A Management Science 2026 paper introducing angular combining: a one-parameter (θ) continuum between horizontal (quantile) and vertical (linear-opinion-pool) averaging of predictive CDFs, with θ optimized on past proper scores. Verdict ADAPT — one-angle dispersion knob for pooling GSE's margin/total predictive distributions, with a named fallback (θ=67.5°) when history is thin.
## Key metrics/methods (formulas where given, else "not specified")
- Angular CDF: FA,θ((1/k)Σxi(c)) = (1/k)ΣFi(xi(c)) along angled line y = −tanθ(x−c); θ=0° → horizontal, θ=90° → vertical (linear opinion pool).
- Theorems: Var(horizontal) < Var(angular) < Var(vertical); prediction intervals nest horizontal ⊆ angular ⊆ vertical; CRPS(angular) ≤ average member CRPS (Theorem 3).
- Score: CRPS(F,z) = ∫(F(x)−1(x>z))²dx; empirical evaluation via MQS over 23 quantiles; Diebold–Mariano tests at 5%.
## Data sources named
COVID-19 Forecast Hub (84 origins, 52 series); US + ECB Surveys of Professional Forecasters (1982–2023); Nord Pool day-ahead electricity prices (2013–2018). R reference package: https://github.com/XiaochunMeng1/R-package-for-Angular-Combining.
## Findings (numbers and facts, not vibes)
- Covid MQS skill vs vertical: angular averaging +0.8% (51.5 vs 52.6), weighted angular +2.7% (49.4 vs 50.5); fixed θ=67.5° best no-optimization choice (+1.4%); angular strongest in tails/95% intervals.
- SPF CRPS×100: angular beat vertical on US growth (37.8 vs 38.0) and US inflation (35.8 vs 36.4); lost ECB unemployment 22.8 vs 22.6.
- Electricity CRPS×100: angular avg best of averaging methods in all selections (e.g., 177.7 vs vertical 178.9); DM tests: angular significantly better in >half of 24 series, significantly worse in none.
- Caveat: gains are small in absolute terms (0.4–2.7%); exterior-trimmed vertical matched weighted angular on Covid (+2.8%).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Angular combining of margin/total CDFs (engine + market + Elo) → OTHER (ensemble calibration; orthogonal to CRPS-weighting, complements WIRED's mixtures).
- Tail-strength of angular (95% intervals) → OTHER (alt-spread/tail-probability props).
## Engine-actionable? (yes/no + one-line what)
yes — prototype angular averaging of per-game margin/total CDFs (engine, de-vigged market, Elo), optimize θ per market on trailing CRPS, fallback θ=67.5°; gate: beat linear opinion pool by ≥1% CRPS over two seasons with 95% coverage in [0.92, 0.97].
