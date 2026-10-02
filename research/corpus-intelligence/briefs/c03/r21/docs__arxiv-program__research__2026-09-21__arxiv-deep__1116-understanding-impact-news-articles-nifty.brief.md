# docs/arxiv-program/research/2026-09-21/arxiv-deep/1116-understanding-impact-news-articles-nifty.md

## What it is (1-2 sentences)
Ledger of arXiv:2412.06794v1 (Dasgupta & Satpati, 2024), which tests whether news-article sentiment improves prediction of Nifty 50 index movement beyond price-history baselines. Verdict: ADAPT — the lagged news-sentiment feature pipeline (DistilBERT headline log-odds + VADER + ridge) is a legitimate baseline for GSE's market-microstructure lane, but only after fixing the paper's target and validation flaws; nothing adopted as-is.

## Key metrics/methods (formulas where given, else "not specified")
- Sentiment: VADER on article body text; DistilBERT on headlines with a log-odds transform log(p/(1−p)) on headline scores.
- Features: lagged sentiment scores + lagged price features (lag-3 focus).
- Models: ordinary linear regression, ridge, lasso, elastic net (sklearn-family regularized linear).
- Validation: single temporal split — train 1 Jan 2021–31 Aug 2023, test 1 Oct 2023–22 Feb 2024, September 2023 discarded as buffer. Metric: RMSE. Baseline: lag-3 price-only model.
- Proposed GSE adaptation (from ledger): target closing-line movement in points (not price levels); features = DistilBERT headline log-odds + VADER body sentiment aggregated per team per day with lags 1–3, entity-resolved; ridge as baseline; purged/embargoed temporal CV.

## Data sources named
- Economic Times archive news, Jan 2021–22 Feb 2024 (400,000+ news items; topic modeling → 53 topics → 22 via frequency threshold 200). Proprietary/scraped, not redistributed.
- Nifty 50 OHLC series (public from NSE).
- GSE-side test data named in spec: 2022–2024 NFL regular seasons; daily team-news sentiment vs DraftKings/FanDuel closing-line movement.

## Findings (numbers and facts, not vibes)
- Baseline (lag-3 price-only) RMSE: **134.85**; with DistilBERT lag-3 features — linear **128.78**, ridge **128.74**, lasso **223.45**, elastic net **133.79**. Ridge gives ≈4.5% RMSE reduction over price-only baseline.
- Lasso blowing up to 223.45 signals unstable/multicollinear features under L1.
- Limitations noted: price-level target makes RMSE reductions look easy but economically meaningless (134.85 on an index at ~22,000 ≈ 0.6%); weekend forward-fill design flaw (target flat on weekends while features aren't); single index, single split, five-page paper; no code/data release.
- First read in GSE's "text/news as features beyond the price" gap (ML brief area 13); related ledgers 0842, 0845, 0860 are finance-sentiment but different markets/methods (none use DistilBERT headline log-odds + VADER on Indian equities).
- Acceptance gate proposed: ADOPT only if sentiment features cut RMSE ≥3% vs no-news baseline on embargoed 2024 NFL test AND directional accuracy improves ≥1pp.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] News sentiment measurably moves closing lines — beat-writer/injury-news text (Grok daily briefs) can become predictive features, not just context.
- [OTHER] Market microstructure / CLV lane: the pipeline is proposed for predicting NFL closing-line movement from open to close.
- [OTHER] Entity-level sentiment improvement experiment: attribute article sentiment to specific teams/players (NER + coreference) — "whose news it is matters more than how much news there is."

## Engine-actionable? (yes/no + one-line what)
yes — Build per-team-per-day DistilBERT+VADER sentiment features on lags 1–3 and test as ridge features for predicting DraftKings/FanDuel closing-line movement, with purged temporal CV and entity-resolved sentiment (spec in §11–14 of the file).
