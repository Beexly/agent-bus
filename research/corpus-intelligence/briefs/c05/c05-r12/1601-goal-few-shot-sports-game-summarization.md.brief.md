# arxiv-program/research/2026-09-21/arxiv-deep/1601-goal-few-shot-sports-game-summarization.md

## What it is (1-2 sentences)
Research ledger on "GOAL: Towards Benchmarking Few-Shot Sports Game Summarization" (Wang, Zhang, Shi 2022, arXiv:2207.08635) — a benchmark paper introducing GOAL, the first and only English sports-game summarization dataset (goal.com football commentary→news, 103 labeled pairs, few-shot setting). The ledger's verdict is ADAPT: the English-language testbed for the summarization pipelines from ledgers 1599/1600 before spending annotation budget on NFL.

## Key metrics/methods (formulas where given, else "not specified")
- ROUGE-1/2/L (py-rouge) on a 20-sample test set (split 63/20/20 train/val/test). Baselines: Longest-k, TextRank, PacSum (extractive); PGN (LSTM abstractive); LED-base-16384 (4,096-token input, 1,024 output, beam 4, lr 3e-5, batch 4, 10 epochs, 20 warmup); PacSum β=0.1, λ1=0.9, λ2=0.1, TF-IDF sentence reps. No new model.

## Data sources named
GOAL: 103 labeled English commentary–news pairs (goal.com, UCL/Europa/Premier/Serie A 2016–2020; <10% of the 2,263-match SOCCER collection have news); avg commentary 2,724.9 words / news 476.3 words; plus 2,160 unlabeled commentary docs for semi-supervised; English news machine-translated to Chinese by 4 volunteers + expert check for cross-lingual setting (63 samples). Released at github.com/krystalan/goal.

## Findings (numbers and facts, not vibes)
- Test ROUGE-1/2/L: Longest 30.3/4.2/19.5; TextRank 27.6/2.9/18.8; PacSum 31.0/5.3/19.6; PGN 32.8/5.7/21.4; LED 34.7/7.8/24.3 (best).
- All absolute scores far below Chinese-dataset numbers (ROUGE-L ~47 in ledgers 1599/1600) — few-shot + longer inputs + missing score field makes this genuinely hard. English commentaries carry no per-timestamp score field (Chinese corpora use (t,c,s)); models must infer game state implicitly.
- Qualitative: LED output has repeated phrases, misses important events; key-verb probing shows it handles common events ("beat") but fails on rarer ones ("blocking").
- Limitations: only 20 test samples (wide confidence intervals); semi-supervised, multi-lingual, cross-lingual settings proposed but not actually benchmarked (reserved as future work); no human evaluation; LED repetition unaddressed.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — content/NLP lane: the English validation bed for porting the SportsSum2.0 select→rewrite→fluency-MMR-rerank pipeline (1599) and KES knowledge-fusion recipe (1600); the semi-supervised self-training setup on 2,160 unlabeled docs is the direct analog of training on unlabeled NFL text streams with a small hand-labeled set; key-verb probing (Figure 2) is a reusable diagnostic for sports-domain familiarity in any GSE content model.

## Engine-actionable? (yes/no + one-line what)
Yes — port the 1599/1600 pipelines to GOAL's English soccer data and require beating LED's ROUGE-L 24.3 on the GOAL test set before applying any summarization architecture to NFL data (run the paper's proposed-but-unrun semi-supervised and few-shot-selector experiments as part of the validation).
