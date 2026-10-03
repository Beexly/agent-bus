# arxiv-program/research/2026-09-21/arxiv-deep/0842-sentiment-analysis-twitter-stock-market.md
## What it is (1-2 sentences)
Paper: Pagolu, Challa, Panda & Majhi (2016), arXiv:1610.09225v1. Builds a tweet sentiment analyzer for Microsoft (3-class human-annotated classifier, 70.2% word2vec / 70.5% n-gram accuracy) and tests whether 3-day aggregate tweet sentiment predicts next-day MSFT price direction (69.01% logistic, 71.82% LibSVM). Verdict: ADAPT — methodologically modest, but the 3-day aggregation window and human-concordance benchmarking are directly reusable for GSE market-movement features (sentiment → line movement).

## Key metrics/methods (formulas where given, else "not specified")
No equations stated in the paper. Mechanics as given:
- Preprocessing: tokenization, stopword removal, regex cleaning (URLs→"URL", #tag→tag, @user→USER, elongated words collapsed).
- Representations: n-gram presence vectors and word2vec (300-dim, summed per tweet).
- Sentiment classifier: random forest / logistic regression / SMO trained on human-annotated tweets; word2vec+RF selected (70.18%) over n-gram+RF (70.49%) "for semantic sustainability."
- Direction classifier: per-day features = total positive/negative/neutral counts over a 3-day window; logistic regression and LibSVM predict next-day up/down; 80/20 and 90/10 splits; 355 instances.
- Sentiment aggregation = raw counts over 3-day windows; direction label = 1{close_t ≥ close_{t−1}}.
- Assumptions: tweet sentiment about the company proxies investor mood; 3-day window is the right aggregation (chosen by experiment); missing price interpolation is harmless; human annotation is ground truth (concordance 70–79% cited from literature).

## Data sources named
- Tweets: 250,000 tweets about Microsoft, 2015-08-31 to 2016-08-25, filtered by keywords ($MSFT, #Microsoft, #Windows, product terms); collected via Twitter API + Twitter4J.
- Labels: human-annotated subset with 3 classes (positive=1, neutral=0, negative=2); a trained classifier labels the rest.
- Prices: MSFT daily open/close from Yahoo Finance; weekend/holiday gaps filled by (x+y)/2 averaging (Goel's method, per the paper).
- Schema: per tweet: cleaned tokens; per day: counts of positive/negative/neutral tweets; per day: price direction label (1 if up vs previous day, else 0).
- Access: Twitter API (2015-era), Yahoo Finance (public). Code/data: none stated (Weka for modeling; Twitter4J for collection).

## Findings (numbers and facts, not vibes)
- Sentiment classification: word2vec+RF accuracy 70.18% (precision 0.711, recall 0.702, F 0.690); n-gram+RF 70.49% (0.719/0.705/0.694); logistic 62.42%/57.14%; SMO 62.42%/65.84%.
- ROC AUCs (sentiment classifier): positive 0.772, neutral 0.778, negative 0.828.
- Direction prediction: logistic regression 69.01% accuracy; LibSVM (90% train) 71.82%.
- Human concordance benchmark cited from literature: 70–79% agreement — the sentiment classifier sits at the human-agreement boundary.
- 355 daily instances for direction prediction (so 71.82% on the 90/10 split is ~36 test points, ±15pp noise — INFERENCE that this is noisy).
- Limitations: single stock (MSFT), single year — no cross-sectional or out-of-period validation; direction split not stated as time-ordered → random split on a time series means lookahead leakage likely; weekend-gap interpolation ((x+y)/2) fabricates price continuity and sentiment on non-trading days leaks into adjacent labels; no transaction costs, no naive baseline (e.g., always-up); human annotation protocol and inter-annotator agreement for *their* labels not reported.
- Referenced related papers/files: Goel's method (weekend interpolation); complements ledger 0841 (fan sentiment → game outcomes) and 0845 (news sentiment networks); per the existing-research map, market microstructure is covered (CLV as label, de-vigged consensus, beat-the-close, line movement/steam) but *social-sentiment → market-movement* features are NOT — this is a new feature family for the market-relative learning lane.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- New feature family for the market-relative learning lane (TRUST-SIGNAL): adapt the pipeline to betting markets — aggregate X sentiment per team over a 3-day pre-game window (the paper's aggregation choice) → predict line-movement direction (steam) rather than price direction. Sentiment classifier: fine-tuned modern embeddings on sports tweets; direction model: logistic regression on sentiment counts + baseline market features.
- Key confound to test (TRUST-SIGNAL): REJECT the sentiment features if the gain vanishes once injury-report dummies are included — sentiment may just proxy news, not add independent information. Acceptance gate: ADOPT only if time-ordered AUC gain ≥ 0.02 over the no-sentiment baseline (time-to-kickoff + opening line only).
- Improvement direction (TRUST-SIGNAL): disaggregate the 3-day window into 12-hour buckets with exponential decay weighting, and interact sentiment with account-credibility weights (beat-writers vs fans). Hypothesis: recency-weighted, credibility-weighted sentiment beats raw 3-day counts because actionable information decays fast and fan noise dominates volume. Credibility weights are also a natural fit for the trust-target intake program (weighting sources by track record).
- QB-BEHAVIOR/COACHING-adjacent note (INFERENCE): the same sentiment pipeline could screen coach/QB narrative sentiment as a regime signal (e.g., QB controversy chatter volume spikes pre-game), but the paper provides no evidence for this — treat as exploratory, not grounded.

## Engine-actionable? (yes/no + one-line what)
Yes — build the sentiment→steam pipeline: 3-day (72h) pre-game X sentiment counts per team → predict opening-to-closing spread movement direction; effort 3–4 days. Reproducible test: 2024 NFL season, X team sentiment 72h pre-game, opening-to-closing spread movement as binary target (steamed toward/away); metric accuracy and AUC, time-ordered split; baseline no-sentiment model (time-to-kickoff + opening line only); pass if sentiment features add ≥2pp AUC; reject if gain vanishes with injury-report dummies included.
