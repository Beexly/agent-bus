# docs/arxiv-program/research/2026-09-21/arxiv-deep/1116-understanding-impact-news-articles-nifty.md
## What it is (1-2 sentences)
A deep-read ledger entry for arXiv:2412.06794v1 (Dasgupta & Satpati 2024): news-sentiment prediction of Nifty 50 index movement with VADER + DistilBERT log-odds features. Verdict: ADAPT — the lagged news-sentiment feature pipeline is a legitimate baseline for GSE's market-microstructure lane (predicting NFL closing-line movement), but only after fixing the paper's target and validation flaws; nothing adopted as-is.
## Key metrics/methods (formulas where given, else "not specified")
- VADER on article text; DistilBERT on headlines with log-odds transform log(p/(1−p)); lagged sentiment + lagged price features (lag-3 focus); OLS/ridge/lasso/elastic-net.
- No novel equations. RMSE on a single temporal split: train 2021-01-01–2023-08-31, test 2023-10-01–2024-02-22, September 2023 discarded as buffer.
## Data sources named
Economic Times archive (Jan 2021 – 22 Feb 2024; 400,000+ news items; 53 topics → 22 after frequency threshold of 200); Nifty 50 OHLC series (public from NSE). Economic Times archive is proprietary/scraped.
## Findings (numbers and facts, not vibes)
- Baseline (lag-3 price-only) RMSE: 134.85. DistilBERT lag-3: linear 128.78, ridge 128.74, lasso 223.45, elastic net 133.79 — ≈4.5% RMSE reduction from sentiment (ridge).
- Lasso blowup to 223.45 signals multicollinear, fragile features.
- Flaws: weekend forward-fill muddies the weekend boundary; price-LEVEL target (RMSE 134.85 on index at ~22,000 = 0.6%) makes gains economically meaningless vs returns/direction; single index, single split, five-page paper.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- DistilBERT headline log-odds + VADER body sentiment as lagged features predicting closing-LINE MOVEMENT (open→close, not levels): TRUST-SIGNAL (market-microstructure / CLV lane; news intake tied to line movement).
- Entity-resolved sentiment (attribute each article to specific teams/players) hypothesized to double the RMSE gain vs market-wide averages: OTHER (feature-engineering hypothesis, testable).
- Lasso blowup on correlated sentiment features → ridge preferred: TRUST-SIGNAL (model-stability note for correlated news features).
## Engine-actionable? (yes/no + one-line what)
Yes — ridge regression on lagged DistilBERT/VADER news sentiment predicting NFL closing-line movement, with purged/embargoed temporal CV (no forward-fill), adopt only if ≥3% RMSE gain + ≥1pp directional-accuracy gain on embargoed 2024.
