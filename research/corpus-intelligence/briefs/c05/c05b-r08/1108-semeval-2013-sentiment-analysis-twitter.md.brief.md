# arxiv-program/research/2026-09-21/arxiv-deep/1108-semeval-2013-sentiment-analysis-twitter.md
## What it is (1-2 sentences)
Research brief (ledger 1108) on the SemEval-2013 Task 2 task-description paper (Nakov et al., arXiv:1912.06806v1): the canonical shared-task design for Twitter sentiment analysis — 5-annotator MTurk labeling, phrase-vs-message subtasks, and the (F_pos+F_neg)/2 metric. **Verdict: ADAPT** — not for its 2013 models, but as the labeling-and-evaluation template GSE should copy for its own sports-text classifiers.
## Key metrics/methods (formulas where given, else "not specified")
- Metric: F = (F_positive + F_negative)/2 — macro-average of F1 over the two polar classes, neutral excluded.
- Annotation protocol: 5 Mechanical Turk annotators per item; annotator requirements >95% approval rating and ≥50 approved HITs; $0.03 per HIT; majority/agreement filtering to gold labels.
- Task structure: subtask (A) phrase-level polarity in context, subtask (B) message-level polarity; two domains (Twitter and SMS); classes positive/negative/neutral (phrase), positive/negative/neutral/objective (message).
- Systems compared (2013-era): n-gram/SVM/lexicon/ensemble approaches; 149 submissions from 44 teams; shared train/test with hidden test set; cross-domain tested (train Twitter / test SMS and vice versa).
## Data sources named
SemEval-2013 Task 2 dataset, released under CC BY 3.0 (tweet IDs/text); tweet recovery now constrained by X API policy and deletions — partially irrecoverable.
## Findings (numbers and facts, not vibes)
- Best scores: phrase-level Twitter 88.93; phrase-level SMS 88.37; message-level Twitter 69.02; message-level SMS 68.46 (F metric as defined).
- Message-level scores (~69) far below phrase-level (~89) — whole-message sentiment is substantially harder.
- Cross-domain drop is real (SMS results lower than Twitter).
- Replication cost: the 5-annotator, 95%-approval bar is expensive at scale today.
- GSE adaptation plan in brief: 2,000 NFL tweets labeled under this protocol, hidden test split, (F_bullish+F_bearish)/2 metric; deploy bar = any model clears 60 at message level; adopt protocol as GSE standard if pilot Fleiss κ ≥ 0.6 on 200 items, reject if κ < 0.4.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: NLP/signal-desk infrastructure — the annotation protocol and metric design directly fill the documented gap in GSE's X-ops/NLP lanes (no existing annotation protocol or sports-text benchmark); prerequisite for bullish/bearish player-news classification feeding the signal desk.
- TRUST-SIGNAL: inter-annotator agreement (Fleiss κ) gates whether sports sentiment is even a learnable task — an honesty mechanism before any model is deployed; the stance-toward-engine's-position extension (agree/disagree) turns sentiment into disagreement-prediction, the monetizable form.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the 5-annotator protocol + (F_bullish+F_bearish)/2 metric as GSE's standard sports-text benchmark (pilot 200 items, κ ≥ 0.6 gate), ~1 engineer-week plus annotation budget.
