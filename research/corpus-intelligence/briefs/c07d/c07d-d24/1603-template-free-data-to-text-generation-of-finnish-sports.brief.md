# arxiv-program/research/2026-09-21/arxiv-deep/1603-template-free-data-to-text-generation-of-finnish-sports.md
## What it is (1-2 sentences)
Kanerva et al. (2019), arXiv:1910.01863 (TurkuNLP, University of Turku): a template-free two-stage data-to-text pipeline (CRF event selection → pointer-generator verbalisation) that generates ice-hockey game reports from structured game statistics, evaluated with a journalist product-readiness study. The brief recommends ADAPT for GSE — the event-selection protocol, alignment methodology, and evaluation framework transfer directly to NFL recap generation.

## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 event selection: CRF sequence labeler over the game's event sequence, per-event features, binary include/exclude, class weighting 0.85:1 (CRFsuite); F-score 67.1% (end result 98.0%, goal 70.2%, penalty 20.1%, save 47.7%).
- Stage 2 generation: pointer-generator seq2seq (2-layer BiLSTM encoder + 2-layer LSTM decoder, 500 hidden/embedding, dropout 0.3, copy + coverage mechanisms, OpenNMT-py), trained per single event with a `length` control feature (short/medium/long; best-confidence selection at test); Adam 5e-4, batch 32, ~40 epochs, 80/10/10 game split.
- Validated on E2E NLG Challenge first: beats TGen on BLEU/METEOR/ROUGE-L; BLEU and METEOR above the best shared-task participants.
- Evaluation: automatic BLEU/NIST/METEOR/ROUGE-L/CIDEr; learning curve vs training-data fraction; human minimum-edit evaluation with WER = edit distance / reference length.

## Data sources named
Finnish ice-hockey corpus: 3,454 games (STT news agency 1994–2018) auto-paired by date/team heuristic; 2,307 manually checked, 2,134 correctly paired; events extracted by regex (end result, goal, penalty, save — 36,097 total); single annotator aligned 12,251 events (33.9%) to 8,831 text spans (9,266 sentences, 84,997 tokens) over ~6 weeks, deleting/neutralising ungrounded content. Event→text input = XML-tagged feature sequence; output = neutralised Finnish report sentence. Data + code: github.com/scoopmatic/finnish-hockey-news-generation-paper; original corpus at urn.fi/urn:nbn:fi:lb-2019041501.

## Findings (numbers and facts, not vibes)
- Hockey test automatic scores: BLEU 19.67, NIST 4.41, METEOR 0.23, ROUGE-L 0.42, CIDEr 1.87 (vs Rotowire best BLEU 16.50; vs E2E single-ref 31.90).
- Human evaluation on 59 full games (CRF selection + generation concatenated chronologically): WER 5.6% (6.2% without punctuation).
- Factual-error taxonomy on 510 events: 84.7% of generated events factually error-free; 78 errors total — names 25, goal type/score 24, time reference 14, total score 6, penalty 5, assist 2, power play 2.
- KEY FINDING: models tuned by BLEU (via RBFOpt) produced more fluent but more factually wrong text — BLEU rewards fluency over factuality (Wiseman et al. 2017); hyperparameters were therefore hand-tuned for a factuality balance instead. The brief's explicit rule for GSE: optimise and select models on factual-error rate, never BLEU alone.
- Journalist product-readiness: two STT journalists editing toward (a) post-edit draft: WER 9.9%/11.2%; (b) direct publication as machine-labeled news: WER 22.0%/24.4%. Journalist verdict: 75–90% of generated text directly usable depending on post-editing budget — "relatively close to a viable product."
- 33.9% of events aligned — the rest is reportorial content statistics cannot support, which the brief calls the key finding: most of real sports news is NOT inferrable from statistics (vs background knowledge, interpretation, quotes).
- Limitations: single annotator for 6 weeks (no IAA reported); per-event generation causes repetition and poor document flow (document-level generation attempts failed); copy-mechanism errors on inflected names (token-level, not subword); learning curve still rising at 100% data — data-starved.
- Pairs with 1600's knowledge-fusion (both confront the fact/knowledge boundary from opposite sides); distinct from ledgers 1599–1602 (commentary→news summarization and RAG).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (content generation lane): the only ledger in this wave with a journalist usability metric — gives GSE a proven protocol for stat-grounded NFL game recap generation (align historical recap-quality sentences to play-by-play events using the 6-week single-annotator protocol; train event selection with the 67.1% F-score as floor; generate per-event sentences with copy + length control). Serves the content/distribution lane, not the prediction engine.
- OTHER (evaluation doctrine, broadly transferable): the BLEU-vs-factuality finding applies to any GSE NLG evaluation — adopt minimum-edit WER with editors as the acceptance metric (target ≤10% WER to post-edit draft) and factual-error-rate as the model-selection objective, never BLEU alone. Serves the calibration/QC lane for any generated content.
- UNCERTAIN: the 33.9% alignment ceiling — INFERENCE: NFL play-by-play is far richer than 1994–2018 Finnish hockey event logs, so the inferrable fraction may be higher, but the fundamental boundary (stats vs interpretation/quotes) persists and should be measured, not assumed.

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the CRF-select → pointer-generator pipeline to NFL box-score/play-by-play → recaps with a factuality-first evaluation protocol; GSE acceptance gate: on 50 NFL games ≤15% of generated play descriptions contain a factual error and blind-editor post-edit WER ≤ 12%.
