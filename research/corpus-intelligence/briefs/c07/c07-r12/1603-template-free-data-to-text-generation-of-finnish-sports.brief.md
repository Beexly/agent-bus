# arxiv-program/research/2026-09-21/arxiv-deep/1603-template-free-data-to-text-generation-of-finnish-sports.md
## What it is (1-2 sentences)
Template-free Data-to-Text Generation of Finnish Sports News (arXiv:1910.01863, Kanerva et al. 2019). Trains a two-stage CRF event-selection → pointer-generator seq2seq pipeline on 3,454 STT-agency Finnish ice-hockey games (36,097 events, 12,251 human-aligned) to generate game reports, and evaluates with journalist product-readiness editing — finding 75–90% of generated text directly usable.
## Key metrics/methods (formulas where given, else "not specified")
- CRF event-selection F-score 67.1% (end result 98.0%, goal 70.2%, penalty 20.1%, save 47.7%); class weighting 0.85:1; pointer-generator (2-layer BiLSTM encoder + 2-layer LSTM decoder, 500 hidden/embedding, dropout 0.3, copy+coverage, OpenNMT-py).
- Test: BLEU 19.67, NIST 4.41, METEOR 0.23, ROUGE-L 0.42, CIDEr 1.87 (vs Rotowire best BLEU 16.50). Human: 84.7% of 510 events factually error-free (names 25, goal type/score 24, time reference 14, total score 6, penalty 5, assist 2, power play 2 — 78 errors). Journalist WER: 5.6% (annotator), 9.9%/11.2% to post-edit draft, 22.0%/24.4% to direct machine-labeled publication.
- Key finding: models tuned by BLEU produced MORE fluent but MORE factually wrong text — hyperparams hand-tuned for factuality balance instead; 33.9% of events were alignable (the rest is ungroundable reportorial content).
## Data sources named
Corpus + code: github.com/scoopmatic/finnish-hockey-news-generation-paper; original corpus at urn.fi/urn:nbn:fi:lb-2019041501.
## Findings (numbers and facts, not vibes)
- Only ~34% of hockey events were alignable to text — the share of real news inferrable from statistics; learning curve still rising at 100% data (data-starved); document-level generation attempts failed.
- Only ledger with a journalist usability metric; pairs with ledgers 1599–1602 (commentary→news) and 1600 (knowledge fusion).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: stat-grounded NFL game-recap generation pipeline (CRF-select → copy-enabled generator over play-by-play events) with minimum-edit WER evaluation by editors (target ≤10% WER to post-edit draft).
- TRUST-SIGNAL: the BLEU-vs-factuality warning — optimize and select content models on factual-error rate, never BLEU alone; 78-error taxonomy as a template for GSE's own content QA.
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the event-selection protocol and alignment methodology for NFL box-score/play-by-play → recap generation, gating models on factual-error rate (≤15% on 50 NFL games) rather than BLEU; full replication achievable on the public corpus.
