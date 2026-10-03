# docs/arxiv-program/research/2026-09-21/arxiv-deep/1106-lexicon-integrated-cnn-sentiment-analysis.md

## What it is (1-2 sentences)
Deep-read (arXiv:1610.06272v2, Shin, Lee & Choi 2016) of a lexicon-augmented CNN sentiment classifier: parallel lexicon-embedding channels (six sentiment/emotion lexicons) plus attention over lexicon channels (SC-EAV/NC-EAV variants) over word embeddings for sentence-level sentiment classification. Verdict at source: ADAPT — a lightweight, interpretable lexicon-augmented recipe worth building as GSE's cheap, explainable sports-text sentiment baseline before reaching for LLM APIs.

## Key metrics/methods (formulas where given, else "not specified")
- CNN over word embeddings plus a parallel lexicon-embedding channel: each word gets a vector from each of six lexicons (sentiment scores), concatenated/combined with attention over the lexicon channels (SC-EAV and NC-EAV variants — with/without attention), trained end-to-end for sentence-level sentiment classification.
- Exact architectural equations not stated in the read at reimplementation fidelity. Assumption: lexicon scores carry signal complementary to distributional embeddings; coverage gaps (words missing from lexicons) handled with zero/default vectors.
- Features: tokenized text, pre-trained word embeddings, six lexicon score vectors per token; target: sentence sentiment label (SemEval: positive/negative/neutral; SST: fine-grained classes).
- Validation: standard SemEval and SST train/dev/test splits; multiple runs per embedding size to report stability (standard deviations) vs plain-CNN baseline and cited published systems.

## Data sources named
SemEval-2016: train/dev/test 15,385 / 1,588 / 20,632. Stanford Sentiment Treebank (SST): train/dev/test 8,544 / 1,101 / 2,210. Six sentiment/emotion lexicons (unnamed in read); training-vocabulary lexicon coverage only 11.53% (SemEval) and 9.20% (SST). No code released (no code link recorded in read).

## Findings (numbers and facts, not vibes)
- SemEval: SC-EAV 63.8 vs baseline 61.6 (cited systems 63.3, 63.0).
- SST: SC-EAV/NC-EAV 48.8% vs baseline 47.5%; strongest cited model 49.6% (still beats it).
- Stability across embedding sizes: baseline SDs 0.8491, 1.1909 vs lexicon-model SDs 0.4208, 0.5764 — lexicon models substantially more stable run-to-run.
- Lexicon coverage: 11.53% SemEval, 9.20% SST vocabulary — most signal comes from a minority of tokens.
- Absolute gains are small (~2 points); architecture is dated (2016 CNN era — transformers/LLMs dominate now); external validity to sports-domain text untested.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Cheap interpretable sentiment baseline for sports text (injury tweets, coach-speak, beat-reporter sentiment → QB-BEHAVIOR/COACHING signals): GSE's NLP work is LLM-era per the existing-research map with no lightweight lexicon baseline recorded — this fills that slot.
- [OTHER] Run-to-run stability (SD halved vs plain CNN, ~0.42–0.58 vs ~0.85–1.19) is the stronger finding than the ~2-point accuracy gain — INFERENCE: for GSE's total-signal intake where noisy features get re-estimated regularly, stability across retrains is the operative property, not headline accuracy.
- [OTHER] Low lexicon coverage (~10%) means most tokens ride on zero vectors — INFERENCE: a general-purpose lexicon on NFL jargon will under-cover worse, so GSE must seed a sports-domain lexicon (injury, questionable, doubtful, breakout, bust, limited, DNP) rather than reuse off-the-shelf ones.
- [TRUST-SIGNAL] The paper reports multi-run SDs and compares to a real baseline rather than cherry-picking a single best run — honest reporting baseline GSE's own test should match (per the read's acceptance gate: require sports-lexicon CNN run-to-run SD under 0.6 and ≥2 F1-point gain over plain CNN on sports text, else REJECT).

## Engine-actionable? (yes/no + one-line what)
Yes — build a sports-domain lexicon-CNN as the always-on cheap sentiment classifier (LLM as escalation): seed sports lexicon, train SC-EAV/NC-EAV on ~5,000 hand-labeled NFL tweets (bullish/bearish/neutral), compare vs zero-shot LLM on cost×accuracy; effort ~3-5 engineer-days; acceptance gate requires replicating the stability pattern on sports text.
