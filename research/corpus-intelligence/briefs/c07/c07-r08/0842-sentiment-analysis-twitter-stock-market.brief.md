# arxiv-program/research/2026-09-21/arxiv-deep/0842-sentiment-analysis-twitter-stock-market.md
## What it is (1-2 sentences)
Ledger read of arXiv:1610.09225v1 (Pagolu et al., 2016) building a tweet sentiment analyzer for Microsoft and testing whether 3-day aggregate sentiment predicts next-day stock price direction. Verdict: ADAPT — a complete sentiment→direction pipeline; the 3-day aggregation window and human-concordance benchmarking are reusable for GSE market-movement (steam) features.
## Key metrics/methods (formulas where given, else "not specified")
- No equations stated. Sentiment aggregation = raw positive/negative/neutral counts over 3-day windows; direction label = 1{close_t ≥ close_{t−1}}.
- Representations: n-gram presence vectors and word2vec (300-dim, summed per tweet); models: random forest / logistic regression / SMO (sentiment), logistic regression and LibSVM (direction).
- Preprocessing: tokenization, stopword removal, regex cleaning (URLs→"URL", #tag→tag, @user→USER, elongated words collapsed).
## Data sources named
250,000 tweets about Microsoft, 2015-08-31 to 2016-08-25, filtered by keywords ($MSFT, #Microsoft, #Windows, product terms); collected via Twitter API + Twitter4J; human-annotated 3-class subset; prices from Yahoo Finance (weekend/holiday gaps filled by (x+y)/2 averaging).
## Findings (numbers and facts, not vibes)
- Sentiment classification accuracy: word2vec+RF 70.18% (precision 0.711, recall 0.702, F 0.690); n-gram+RF 70.49%; logistic 62.42%/57.14%; SMO 62.42%/65.84%.
- Sentiment ROC AUCs: positive 0.772, neutral 0.778, negative 0.828.
- Direction prediction: logistic regression 69.01% accuracy; LibSVM (90% train) 71.82%, on 355 daily instances.
- Human concordance benchmark cited from literature: 70–79% — the classifier sits at the human-agreement boundary.
- Limitations: single stock, single year; direction split not stated as time-ordered (random split on time series → lookahead leakage likely); no transaction costs or naive baseline; 71.82% on ~36 test points is ±15pp noise.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (market-relative lane): social-sentiment → market-movement features are NOT in the existing corpus (which covers CLV, de-vigged consensus, beat-the-close, steam/line movement); complements ledgers 0841 (fan sentiment → game outcomes) and 0845 (news sentiment networks).
- OTHER (feature family): adapt to betting markets — aggregate X sentiment per team over a 3-day pre-game window → predict line movement direction (steam) rather than price direction.
- TRUST-SIGNAL: acceptance gate — reject if the sentiment AUC gain vanishes once injury-report dummies are included (sentiment may just proxy news); improvement experiment — disaggregate into 12-hour buckets with exponential decay and interact with account-credibility weights (beat-writers vs fans).
## Engine-actionable? (yes/no + one-line what)
Yes — build a 72h pre-game X sentiment feature per team and test whether it adds ≥2pp AUC to opening-to-closing line-movement direction on time-ordered 2024 NFL data.
