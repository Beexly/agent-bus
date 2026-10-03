# arxiv-program/research/2026-09-21/arxiv-deep/1163-prediction-diversity-and-selective-attention.md
## What it is (1-2 sentences)
An empirical takedown (Nobre & Fontanari 2020, arXiv:2001.10039) of the popular reading of Page's diversity prediction theorem: three estimation experiments show prediction spread does NOT correlate with collective accuracy. The source ledger verdict is ADAPT — adopt the γ = ε − δ identity as a weekly ensemble diagnostic, and take the negative result as a standing design constraint.
## Key metrics/methods (formulas where given, else "not specified")
- Collective error: γ = (⟨g⟩ − G)²; individual error: ε = (1/N)Σ(g_i − G)²; diversity: δ = (1/N)Σ(g_i − ⟨g⟩)².
- Page's diversity prediction theorem: γ = ε − δ (exact algebraic identity, no independence assumption).
- Key analytic point: γ = ε − δ does NOT imply raising δ lowers γ — ε and δ are not independent; raising diversity can raise individual error unpredictably.
## Data sources named
Three estimation experiments with STEM students at University of São Paulo (Jan 2020): (1) candies in a jar — N=105 guesses, truth G=636; (2) paper strip length — N=139, G=22.4 cm; (3) book page count — N=139, G=784. Plus 10⁴ resampled "virtual experiments" per task at group sizes 10/20/40/60. Data access not stated (author-collected).
## Findings (numbers and facts, not vibes)
- Candies: crowd ⟨g⟩=531 (error 16.5%), better than 70% of individuals; skewness 0.73; best guess 630.
- Paper strip: crowd ⟨g⟩=22.0 cm (error 1.8%), better than 85% of individuals; best guess 22.5 cm.
- Book pages: crowd ⟨g⟩=561 (error 28.4%), better than only 63% of individuals; skewness 1.22; best guess 800 (error 2%).
- Pearson r(diversity, collective error): jar — −0.005 (N=10), 0.04 (N=20), 0.06 (N=40), 0.07 (N=60); strip — 0.28 (N=10), 0.11 (N=20), −0.049 (N=40), −0.11 (N=60). All |r| ≤ 0.28: no significant correlation at any group size.
- Jar: optimal group size N=5 maximizes P(error<5%) at 14%; a single random estimate beats any aggregation with N≥20; P(error<5%) decays as αe^{−βN²} (α=0.12, β=0.0021). Strip: P(error<5%) increases monotonically with N; a single estimate has 30% chance within 5%.
- Paper's claim: when the crowd is systematically biased, adding members converges the mean to the wrong value; crowd accuracy is "most likely an artifice of selective attention."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- γ = ε − δ ensemble diagnostic (TRUST-SIGNAL): per-week, per-market decomposition of ensemble Brier into mean individual MSE minus diversity — a half-day pandas job on the existing picks table that tells you whether ensemble error comes from bad models or from a redundant pool.
- Negative result (TRUST-SIGNAL): NEVER use prediction spread alone as a confidence signal for a single game — design constraint for any ensemble-confidence UI.
- δ/ε ratio as model-pool health metric (OTHER): persistently low δ/ε (<0.1) = redundant pool, drop/retrain correlated models; large ε + large δ = individual-model error, not a diversity problem.
## Engine-actionable? (yes/no + one-line what)
Yes — add the weekly γ=ε−δ decomposition + δ/ε tracking per market on the picks table (~half day, pure pandas), and enshrine the "spread is not confidence" negative result as a standing design rule.
