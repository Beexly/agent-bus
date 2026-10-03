# docs/arxiv-program/research/2026-09-21/arxiv-deep/1106-lexicon-integrated-cnn-sentiment-analysis.md
## What it is (1-2 sentences)
A deep-read ledger entry for arXiv:1610.06272v2 (Shin, Lee, Choi 2016): CNN sentiment classifier augmented with sentiment/emotion lexicon-embedding channels and attention. Verdict: ADAPT — a lightweight, interpretable lexicon-augmented baseline recipe for GSE's cheap, explainable sports-text sentiment baseline before reaching for LLM APIs.
## Key metrics/methods (formulas where given, else "not specified")
- CNN over word embeddings + parallel lexicon-embedding channel (six sentiment/emotion lexicons per token), combined with attention over lexicon channels (SC-EAV and NC-EAV variants — with/without attention). Exact architectural equations not stated at reimplementation fidelity in this read.
- Assumption: lexicon scores carry signal complementary to distributional embeddings; coverage gaps handled with zero/default vectors.
## Data sources named
SemEval-2016: train/dev/test 15,385/1,588/20,632. Stanford Sentiment Treebank (SST): train/dev/test 8,544/1,101/2,210. Six sentiment/emotion lexicons as extra embedding channels; training-vocabulary lexicon coverage only 11.53% (SemEval) and 9.20% (SST).
## Findings (numbers and facts, not vibes)
- SemEval SC-EAV: 63.8 vs baseline 61.6 (cited systems 63.3, 63.0). SST SC-EAV/NC-EAV: 48.8% vs baseline 47.5%; strongest cited model 49.6% still beats it.
- Stability across embedding sizes: baseline run-to-run SDs 0.8491, 1.1909 vs lexicon-model SDs 0.4208, 0.5764 (lexicon models substantially more stable).
- Absolute gains small (~2 points); dated architecture (2016 CNN era); external validity to sports-domain text untested.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cheap, interpretable sports-text sentiment classifier (injury news: injury/questionable/doubtful/DNP lexicon terms) as always-on classifier with LLM escalation: OTHER (news-signal intake infrastructure).
- Lexicon-model stability (halved run-to-run SD) as a model-selection property: TRUST-SIGNAL (stability criterion for text models).
## Engine-actionable? (yes/no + one-line what)
Yes — build a sports-domain lexicon CNN (injury/questionable/DNP/NFL terms) as the cheap sentiment baseline, gating LLM use on cost×accuracy comparison, if the ≥2-F1-over-plain-CNN pattern replicates on sports text.
