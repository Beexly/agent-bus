# arxiv-program/research/2026-09-21/arxiv-deep/0841-using-twitter-to-predict-football-outcomes.md
## What it is (1-2 sentences)
Deep read of Kampakis & Adamides (2014, arXiv:1411.1243v1): predicting EPL match outcomes from Twitter text — a chi-square-filtered bigram bag-of-words random forest vs a historical-stats model vs the combination, on 1.98M tweets over 3 months of the 2013–14 season. Verdict in file: ADAPT — a dated but clean proof that social-media text carries orthogonal signal, portable to NFL X-sentiment features.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no equations; chi-square test p-values and mutual information used for feature ranking (standard definitions).
- Pipeline: CMU ARK TwitterNLP POS tagger (keep adjectives/verbs/nouns/adverbs/interjections/emoticons) → Porter stemming → chi-square-ranked bigrams, 1–35 terms per side (best ~11–15 per side) → RF/NB/LR/SVM (100 seeds, OOB), leave-one-out CV.
## Data sources named
1,975,614 tweets, 2014-03-21 to 2014-05-11 (Twitter Streaming API; team hashtags; multi-team tweets discarded; US-sport nickname collisions filtered); Liverpool 426,457 tweets, Fulham 15,530; historical stats (team averages: goals, corners, shots on target, fouls, cards + market value, squad age, internationals, titles). No code/data stated.
## Findings (numbers and facts, not vibes)
- Twitter-only RF: 65.6% ± 4.33% accuracy (56.3–74.7%), κ=0.25 ± 0.093; historical-only NB: 58.9% ± 5.97%, κ=0.239 ± 0.075; combined RF: 69.6% ± 2.4% (64.4–74.7%), κ=0.28 ± 0.065.
- Bigrams beat unigrams; performance peaks at ~11–15 features per side then declines; Twitter RF may predict the majority class often (high accuracy, modest kappa).
- Limitations: ~90 matches, high variance; feature selection likely outside the CV loop (optimistic bias); no time-ordered split; never tested against odds (the real baseline).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: first fan-sentiment-signal ledger in the corpus — complements 0845 (news co-occurrence); NFL port = X team-mention tweets in 72h pre-game window → POS-filtered bigram + chi-square features → auxiliary inputs to the game-outcome model (with the improvement experiment isolating injury/news leakage from pure sentiment).
## Engine-actionable? (yes/no + one-line what)
yes — build the X-sentiment feature pipeline on the 2024 NFL season with time-ordered CV (train weeks 1–12, test 13–18); adopt as an auxiliary feature family only if combined-model kappa beats stats-only kappa by ≥0.03.
