# docs/arxiv-program/research/2026-09-21/arxiv-deep/0937-elo-vs-uefa-coefficient-all-games.md
## What it is (1-2 sentences)
An empirical rating-comparison paper (László Csató, 2023, arXiv:2304.09078) showing that Football Club Elo (clubelo.com, k=400/K=20, includes domestic league matches) beats UEFA's official club coefficient (5-year European-results-only) at predicting Champions League group matches, knockout qualification, and group ranking across 19 seasons (2003/04–2021/22) — with one bonus finding: the coefficient still adds significant value on top of Elo for group ranking ("European experience"). The deep-read ledger rates it ADAPT (methodological prescription transfers; football-specific numbers don't).
## Key metrics/methods (formulas where given, else "not specified")
- Elo: W = 1/(1+10^{Δ/s}) (eq. 1); E_1 = E_0 + K(R−W), R ∈ {1, 0.5, 0}; clubelo defaults (k=400, K=20, HFA + margin of victory); frozen June 30 each year for fair comparison.
- Head-to-head logistic regressions per task: dependent = success indicator; explanatory = rating difference; three models (UEFA only, Elo only, both).
- Fit metrics: Cox & Snell R² = 1 − (L_0/L_M)^{2/n}; Nagelkerke = R²_{C&S}/(1 − [p^p(1−p)^{1−p}]²); McFadden = 1 − ln(L_M)/ln(L_0); classification rate (0.5 cut), AUC.
- Robustness: alternative DV framing, multinomial logit with draws (n=1,824), period splits 2003/04–2011/12 vs 2012/13–2021/22.
## Data sources named
19 Champions League seasons 2003/04–2021/22: group matches excluding draws (1,402 obs; 863 home wins = 61.6%); knockout qualification excl. finals + six single-leg 2019/20 ties (260 obs; 159 = 61.2% won by second-leg host); group ranking pairwise (912 obs; 686 = 75.2% higher-coefficient team ranked higher). Ratings from clubelo.com and kassiesa.net (public). No code. All fits in-sample explanatory power (no out-of-sample forecasting).
## Findings (numbers and facts, not vibes)
- Rough accuracy (higher rating predicts success): group matches — UEFA 70.68%, Elo 73.32%; knockout — UEFA 61.92%, Elo 65.00%; group ranking — UEFA 75.22%, Elo 78.51%. Elo wins all three.
- Group matches logit: Elo-only — coef 0.007***, C&S 0.270, Nagelkerke 0.367, classif 75.4%, AUC 0.814 vs UEFA-only AUC 0.784; both-model: UEFA 0.003 (ns), Elo 0.006*** — coefficient adds nothing once Elo is in.
- Knockout: Elo-only AUC 0.690 vs UEFA 0.617; both-model UEFA −0.007 (ns).
- Group ranking: Elo-only AUC 0.776 vs UEFA 0.704; both-model UEFA 0.012***, Elo 0.008***, AUC 0.784 — coefficient adds significant value on top of Elo ("European experience" not captured by domestic-weighted Elo).
- Multinomial with draws: Elo AUCs 0.761/0.578/0.761 (home/draw/away) — draws hardest.
- Period splits: UCL more predictable since 2012 (declining competitive balance); Elo dominance holds in both halves.
- Descriptives: group-stage Elo mean 1772.5 (sd 136.6), range 1297.1–2089.3; England avg 1778 vs Hungary 1303 (2021-06-30); biggest Elo shock: Sheriff Tiraspol beating Real Madrid, 2021/22.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (rating design): transferable lesson — never rate teams on a subset of available games; incorporate everything (NFL: preseason with K/4 down-weighting, playoff games K×1.5), keep ratings live weekly rather than frozen at season start. The bonus finding suggests a "big-stage experience" factor: playoff games played by the roster-weighted core (QB + top-8 snap leaders) over trailing 3 seasons as a logistic feature alongside Elo — the paper's Table 6 shows it adds value on top of Elo for tournament advancement; test on NFL playoff games 2010–2024. Connects to corpus 0932 (Elo-MMR): information set matters as much as algorithm. INFERENCE: grid-search K multipliers by game type (preseason 0–0.5, playoffs 1–3) optimizing walk-forward log-loss.
## Engine-actionable? (yes/no + one-line what)
yes — Build all-games NFL Elo (preseason K/4, playoffs K×1.5, live weekly) plus a playoff-experience logistic feature; adopt if it beats regular-season-only Elo on 2020–2025 walk-forward log-loss by ≥0.004 or the experience feature is significant in postseason games.
