# arxiv-program/research/2026-09-21/arxiv-deep/0645-dynamic-graph-based-forecasts-bookmakers-odds.md
## What it is (1-2 sentences)
Deep-read ledger of Penn, Michael & Bhatt (2025) "Dynamic Graph-Based Forecasts of Bookmakers' Odds in Professional Tennis" — an odds-distillation model that learns bookmakers' implicit player ratings from historical odds and forecasts bookmaker odds for any future match. Verdict: ADAPT to NFL as a "what will the market say" spread/total forecasting tool.

## Key metrics/methods (formulas where given, else "not specified")
- Impute bookmaker probabilities: p = d/||d||₁ (Eq. 3); assume Elo-form odds P(a beats b) = 1/(1+10^{r_b − r_a}) (Eq. 4).
- Log-transformed odds: x_{ab} = log((1−p_{ab})/p_{ab}) = r_a − r_b, additive: x_{ab} = x_{ac} + x_{cb} (Eqs. 5–6).
- Five-set matches: per-set win probability ξ solving P(Bin(N_s, ξ) > N_s/2) = p_{ab} (Eq. 7).
- Weighted directed graph: w_{ab}(M) = ρ^{t_M} τ_s (geometric temporal decay ρ, surface weight τ_s) (Eq. 9); Markovian recursive updates W'_{ab} = ρ^t W_{ab} + w_{ab}(M); E'_{ab} = (W_{ab}ρ^t E_{ab} + w_{ab}(M)x_{ab}(M))/W'_{ab} (Eqs. 12–13).
- Convex least squares fit: f(r) = Σ_{a,b} W_{ab}((r_a − r_b) − E_{ab})² (Eq. 14), PSD via Gershgorin (Eq. 17), solved with scipy L-BFGS-B; Theorem 1 proves geometric decay is the necessary weight function for Markovian updates.

## Data sources named
http://www.tennis-data.co.uk/alldata.php (historical tennis results + bookmaker odds); code at https://github.com/mpenn114/rss-wimbledon-2025 (Python 3.11). Evaluation: 7 Grand Slams 2024–2025, 1,684 matches. Literature benchmarks: gradient boosting incl. odds [16] (3,996 matches 2013–2019), random forest [2] (7,620, 2010–2024), Bradley-Terry [3] (3,439, 2019–2020), logistic regression [1] (501, 2013), Elo [7] (2,395, 2014).

## Findings (numbers and facts, not vibes)
- 7 majors, 1,684 matches: bookmakers 1,249 (74.1%); model 1,237 (73.5%); rankings 1,173 (69.7%). Model vs bookmakers: not significant (p=0.40); model vs rankings: significant (p=0.0006). Model beat rankings in all 7 tournaments; beat bookmakers in 4 of 7.
- Correlation of model vs bookmaker probabilities ≈0.88, best-fit y = 0.88x + 0.08 ≈ 1:1.
- Literature comparison (Ratio = 100×(ModelAcc/BookAcc − 1)): gradient boosting incl. odds +0.14 (best); this paper −0.96; Elo −2.78; points-based −6.94 — "performs averagely well".
- Anomaly cases: model-vs-bookmaker outliers flagged commercial hedging on British players (Martinez v Loffhagen, Darderi v Fery, Quinn v Searle) and an injury (Thompson v Bonzi withdrew injured <2 weeks before Wimbledon); extreme-probability outliers came from low data volume (Zhang/Collignon 4 matches, Royer/Juvan 1, vs Sabalenka 51).
- Explicitly: the model can never systematically beat the bookmaker — it is a distillation, not an edge generator.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: market-modeling — a distilled "what will the book say" line-forecast model for NFL spreads/totals: predict opening lines before release, run CLV studies with market-consistent lines, and run the paper's anomaly detector to flag injury/news-driven line moves.

## Engine-actionable? (yes/no + one-line what)
Yes — build the NFL adaptation swapping the Elo win-prob equation for margin-of-victory offensive/defensive ratings (spread s_{ab} ≈ r_a − r_b + h; total t_{ab} ≈ o_a + o_b) fit on historical Odds-API line data with geometric time decay; gate on 2024 holdout spread-forecast MAE ≤ 3.0 (beating carry-forward by ≥0.75) or ≥10 verified news-driven line anomalies flagged at ≥50% precision.
