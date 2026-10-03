# docs/arxiv-program/research/2026-09-21/arxiv-deep/0251-building-a-model-for-scoring-20.md
## What it is (1-2 sentences)
Read-note on Huber & Sturdivant (2010, Ann. Applied Stats) modeling inter-arrival times of MLB games where a team scores ≥20 runs as era-segmented exponential (memoryless) processes. Verdict recorded in the file is REJECT: MLB tail-event trivia with no transfer path to an NFL engine.

## Key metrics/methods (formulas where given, else "not specified")
- Exponential pdf: f(t; λ) = λe^(−λt), t ≥ 0; E[T] = 1/λ; Var(T) = 1/λ²
- MLE: λ̂ = 1/mean(IAT)
- Forecast: P(event within t games) = 1 − e^(−λ̂t)
- GOF battery: Kolmogorov–Smirnov, Anderson–Darling, Pearson χ² (10 df); ANOVA on IAT by baseball era with family-wise 95% pairwise comparisons; all in R

## Data sources named
- Baseball-Reference "Play Index" (accessed May 2009) for occurrence list; Retrosheet.org annual game logs for date verification. Public data; assembled IAT series not shared.

## Findings (numbers and facts, not vibes)
- 171,797 MLB games 1901–2008; 222 games with a team scoring ≥20 runs (224 incl. 1901–1909 full); mean IAT = 760.8 games, λ̂ = 0.001314444.
- Single exponential rejected: K–S = 0.1581 (exact p = 0.000026); A–D = 8.207 (critical 2.534 at 0.25%); χ² = 44.616 vs critical 18.31 (df=10).
- Era rates (λ̂ / mean IAT / SD IAT): Dead Ball 0.001632613 / 612.5 / 859.7; Lively Ball 0.002495138 / 400.8 / 439.4; Integration 0.001538142 / 650.1 / 813.2; Expansion 0.000433401 / 2,307.3 / 2,088.3; Free Agency 0.000640466 / 1,561.4 / 2,135.8; Long Ball 0.001408975 / 709.75 / 709.79.
- ANOVA by era: p < 0.0001; Expansion and Free Agency differ significantly from all other eras, not from each other.
- Dead Ball era fails GOF (A–D = 4.054; K–S p = 0.03348), attributed to anomalous clusters (12 events 1901–1902, 10 in 1911–1912; hypothesized 1901 AL expansion diluted pitching).
- Yankees lead with 25 occurrences; only Arizona, Houston, Tampa Bay never scored 20+ through 2009; record 30 runs (2007 Rangers).
- Era boundaries defined ex post from baseball history — the ANOVA "era differences" finding is partly circular (noted in the file).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: era-regime modeling / changepoint thinking — but the fixed ex-post era boundaries are a circularity caution, not a method to copy.

## Engine-actionable? (yes/no + one-line what)
No — REJECT: NFL scoring is not a rare-event process; no betting or content lane exists for ultra-rare-event inter-arrival forecasts.
