# arxiv-program/research/2026-09-21/arxiv-deep/1594-analyzing-sports-commentary-to-recognize-events.md
## What it is (1-2 sentences)
Full-paper ledger read of arXiv:2307.10303 (Miraoui, 2023) — an NLP study classifying live sports text commentary into 12 event categories using tf-idf+SVM/XGBoost and fine-tuned BERT, plus an off-the-shelf sentiment analysis experiment. Ledger verdict: ADAPT — the BERT event-classification pipeline ports to NFL beat-reporter/injury-report sentence classification; the sentiment experiment is a negative result.
## Key metrics/methods (formulas where given, else "not specified")
- One equation: accuracy = correct predictions / total predictions.
- Preprocessing: punctuation/stopword removal, stemming + lemmatization; tf-idf vectors → SVM, XGBoost; fine-tuned `bert-base-uncased`; sentiment via `cardiffnlp/twitter-roberta-base-sentiment` (RoBERTa on ~58M tweets), Neutral discarded.
- 80/20 shuffled random split; metrics accuracy/precision/recall/F1; baseline Minard et al. (2016) SVM (F1 0.71).
## Data sources named
- Audio: 2021 Paralympic games + a few EPL games, transcribed with Google Speech-to-Text (abandoned as unreliable).
- Text: 9,074 football games since 2011 scraped from bbc.com, espn.com, onefootball.com (~941,000 sentences; Serie A 2,152 / Ligue 1 2,076 / La Liga 1,939 / Bundesliga 1,608 / Premier League 1,299); 12 event labels from the sites' event timelines; test sets from livescore.com and YouTube auto-subtitles. Scraped data not redistributed.
## Findings (numbers and facts, not vibes)
- SVM (tf-idf): Accuracy 97.30%, Precision 88.64%, Recall 83.60%, F1 0.85 vs Minard baseline F1 0.71.
- Fine-tuned BERT: 99.8% accuracy on held-out live commentaries; 92% average accuracy on structurally different sources. XGBoost "best performing" classical model (values only in histograms, not tabulated).
- 26% of true "Handball" labels misclassified as "Foul" (SVM) — genuinely ambiguous per author.
- Sentiment per event (non-neutral predominant %): Yellow card Negative 74.01%; Red card Negative 70%; Foul Negative 18.77%; Penalty conceded Negative 100%; most sentences Neutral — author concludes sentiment adds very limited information.
- Critical limitation: shuffled 80/20 split means same-game sentences in train and test (temporal leakage, unaddressed); formulaic templates ("Yellow card for X") inflate scores.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (NLP pipeline): beat-writer / injury-report sentence classification recipe — GSE analog proposed is P(player misses next game | news sentence), serving 15–60 min before books move.
- TRUST-SIGNAL: INFERENCE — the injury-news → availability → line-value chain feeds player-availability signals (QB availability) into the engine.
## Engine-actionable? (yes/no + one-line what)
Yes — the ledger contains a full implementation spec: fine-tune DeBERTa-v3-base on beat-writer sentences labeled by subsequent injury-report status with a season-ordered (not shuffled) split, acceptance gate F1 ≥ 0.80 and ≥55% of designation changes anticipated ≥30 min ahead of the market (n ≥ 50).
