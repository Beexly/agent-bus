# arxiv-program/research/2026-09-21/arxiv-deep/0844-trouble-with-the-curve-mlb-scouting.md
## What it is (1-2 sentences)
Full-text ledger on arXiv:1910.12622 (Danovitch 2019): predicts whether MLB prospects debut by age 24 from ~10,000 MLB.com/FanGraphs scouting-report texts, benchmarking five deep classifiers; the critical contribution is the leakage study — a classifier hit 100% recall from prospect *names* alone, requiring NLTK entity masking. Verdict: ADAPT — ports directly to an NFL draft-prospect language lane.
## Key metrics/methods (formulas where given, else "not specified")
- Benchmarks: Bag-of-Embeddings, TextCNN, LSTM+Self-Attention, BCN, HAN; word-deletion + synonym-substitution augmentation; weighted cross-entropy for imbalance; NLTK named-entity masking of names, teams, numeric quantities.
- Equations not specified. 20–80 grading scale: grade g ≈ 50 + 10·z.
## Data sources named
TWTC dataset (~10,000 scouting reports from MLB.com Prospect Pipeline and FanGraphs, prose + 20–80 grades, open-sourced); code at github.com/jacobdanovitch/jdnlp (AllenNLP); interactive web app released. Labels: ~7,000 usable, ~80% negative class.
## Findings (numbers and facts, not vibes)
| Model | Accuracy | F1 |
|---|---|---|
| Bag of Embeddings | 64.65% | 53.78% |
| TextCNN | 69.02% | 56.42% |
| LSTM+Self-Attention | 68.64% | 54.65% |
| BCN | 73.52% | 43.33% |
| HAN | 66.00% | 54.07% |
- TextCNN best on accuracy/F1 balance; BCN overfit the majority class (high accuracy, collapsed F1).
- Hypothesis: CNNs win because reports are hierarchical but unordered — sentences are self-contained facts; local n-gram detection + pooling finds discriminative phrases regardless of order.
- Leakage: without masking, prospect surnames were the top discriminative terms (e.g., "alford" 0/47 neg/pos) → 100% recall from names. Names, teams, and numeric quantities must be masked.
- Age-24 cutoff acknowledged as harsh/arbitrary; late bloomers mislabeled.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (draft/prospect modeling): the masking protocol (names/teams/numbers) applies to every GSE text model; the NFL analogue (NFL.com/PFF/The Athletic prospect prose → starter-by-year-3, discriminative phrases as dynasty/rookie-model features) is a new draft-lane capability. Fits GSE's total-signal doctrine as an off-field signal source.
## Engine-actionable? (yes/no + one-line what)
Yes — assemble masked NFL draft-prospect prose corpus (2018–2024 classes), train TextCNN/HAN benchmarks, adopt if masked-text AUC beats draft-position-only AUC by ≥0.03 on a held-out class.
