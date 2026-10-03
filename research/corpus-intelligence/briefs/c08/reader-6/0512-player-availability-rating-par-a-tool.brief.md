# docs/arxiv-program/research/2026-09-21/arxiv-deep/0512-player-availability-rating-par-a-tool.md

## What it is (1-2 sentences)
Khalid (2018, arXiv:1811.02885): regression models on NHL skaters' physical traits, shooting %, and usage predict points-per-game, feeding an ad-hoc "Player Availability Rating" (PAR) that flags underperforming players on struggling teams as trade targets. File verdict: **REJECT** — NHL-only heuristic whose own results show the ML models losing to existing free public baselines (TSN.ca, NHL.com); nothing transfers to NFL betting/DFS modeling.

## Key metrics/methods (formulas where given, else "not specified")
- Five scikit-learn regression methods with grid-search tuning: linear regression, k-NN, decision trees, random forests, neural networks (features z-score normalized).
- PAR formula (stated exactly; the paper explicitly notes it "does not use a probabilistic method to make predictions"): PAR = (PPG_predicted − PPG_actual)/(PPCG_season) + w_o × (PPG_predicted − PPG_actual)/(PPCG_recent), with w_o = 2. PPCG = team points-percentage (season and last-10).
- Interpretation: negative (PPG_pred − PPG_actual) = outperforming expectations; positive = underperforming; higher PAR = more likely trade-available underperformer on a struggling team.

## Data sources named
- NHL player data 2006–2017 scraped from NHL.com via custom scripts; features: height, weight, shooting percentage, expected time on ice / usage. Exact row counts not stated.
- Baseline projections: TSN.ca "Projected top 300 scorers, 2017" and NHL.com "Fantasy: Top 250 rankings for 2017-18" (preseason).
- Evaluation set: top 100 NHL players by PPG in 2017–18 (season ~30% complete at evaluation time).
- Author launched gmaiplaybook.com implementing the algorithm (stated, not verified by the file's reader).

## Findings (numbers and facts, not vibes)
- Table 1 mean/median error on top-100 PPG players: Neural Nets 0.211/0.188; Decision Tree 0.222/0.21; Random Forest 0.215/0.193; k-NN 0.234/0.21; Linear Regression 0.245/0.22; TSN.ca 0.202/0.173; NHL.com 0.197/0.167. Both public baselines beat every ML method on both mean and median; paper's claim of NN adequacy is "adequate but strictly worse than what's already published."
- Table 2 (actual vs predicted PPG): systematic under-prediction of elite scorers — e.g., Nikita Kucherov actual 1.48 / predicted 1.18; Brad Marchand 1.17 / 1.02; Connor McDavid 1.17 / 0.99; Johnny Gaudreau 1.28 / 0.98.
- Table 3 (top-10 PAR): Ryan Dzingel 2.29; Mark Stone 2.07; Cam Fowler 2.03; Brandon Montour 1.66; Tyler Myers 1.64; Brendan Perlini 1.21; Nick Foligno 1.14; Tomas Tatar 1.12; Dion Phaneuf 1.02; Gabriel Landeskog 0.98.
- Stated limitation: size bias — players >6'3"/220 lbs assigned low PPG (Patrik Laine predicted 0.63 vs actual ~1.5× higher in his rookie year); players <5'9"/170 lbs assigned inflated PPG.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the salvageable concept — flagging players whose actual production trails model-projected production, scaled by team situation, as mispriced/trade targets — is already subsumed by GSE's projection-vs-market residuals in the props lane, which is strictly more sophisticated. Different sport (NHL), different decision problem (GM trades, not betting), weaker methods than GSE already uses.

## Engine-actionable? (yes/no + one-line what)
No — REJECT stands at the paper level: the acceptance gate (any ML method beating the NHL.com/TSN.ca baselines) is already failed by the paper's own Table 1; no GSE implementation proceeds.
