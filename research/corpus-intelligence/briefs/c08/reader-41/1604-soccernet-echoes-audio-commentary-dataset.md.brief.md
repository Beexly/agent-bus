# docs/arxiv-program/research/2026-09-21/arxiv-deep/1604-soccernet-echoes-audio-commentary-dataset.md
## What it is (1-2 sentences)
Deep read of SoccerNet-Echoes (arXiv:2405.07354): a multilingual ASR-derived commentary layer over 550 SoccerNet games (1,030 halves with commentary) built with Whisper, with transcription-quality evaluation and a hallucination-mitigation heuristic. Verdict in file: ADAPT — the pipeline ports directly to NFL broadcast-audio mining for injury/lineup/tactical intelligence.
## Key metrics/methods (formulas where given, else "not specified")
Pipeline: Whisper large-v1/v2/v3 on all halves with 30-s language detection → per-video best-model selection via unique-word-ratio heuristic (unique/total words; highest wins as anti-hallucination measure) → Google Translate batch translation of non-English to English. Evaluation: WER/CER/BLEU vs GOAL dataset human-verified transcripts (40 halves / 20 games). NLP: dependency parsing for verb-noun pair extraction; per-player mention frequency as influence proxy. Model selection result: v3 chosen 46.9% (483/1,030 videos), v1 30.7%, v2 22.4%. WER: v1 0.443, v2 0.458, v3 0.551; CER: 0.261/0.269/0.341; BLEU: 54.50/52.59/47.97. Best unique-word ratio: v3 0.370.
## Data sources named
SoccerNet (550 games, 1,100 halves, 6 leagues, 4 seasons 2014–2020); GOAL dataset (40 human-verified English halves for evaluation); 10 commentary languages (English 297, Spanish 264, Russian 218, German 135, French 102, Turkish 4, Italian 4, Polish 2, Bosnian 2, Hungarian 2; 70 halves with no commentary). Public code/data: https://github.com/SoccerNet/sn-echoes.
## Findings (numbers and facts, not vibes)
- Whisper v1 is best on clean English (WER 0.443) but v3 is selected most often (46.9%) because it hallucinates least on noisy audio.
- WER ~0.44–0.55: usable for event/context mining, not verbatim quoting.
- Batch Google Translate introduces context errors (example in file: "штрафной" → "penalty kick" vs correct "free kick").
- 70 of 1,100 halves lack commentary (56 no audio, 14 stadium-only).
- File's GSE spec: Whisper large-v3 over NFL broadcast audio, unique-word-ratio model selection + VAD preprocessing, mine for injury mentions (≥90% of broadcaster-reported injuries detected within ±2 min in test), mention-frequency player influence signals, tactical-discussion extraction feeding text-event pipelines and a SoccerRAG-style QA layer.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: broadcast-audio ASR pipeline for injury/news extraction (off-field total-signal intake).
- COACHING: tactical-discussion extraction from commentary as a coaching-adjustment signal.
- TRUST-SIGNAL: hallucination-mitigation heuristic (unique-word ratio) + explicit transcription-quality metrics — a trust doctrine for mined text.
## Engine-actionable? (yes/no + one-line what)
yes — Run Whisper large-v3 on NFL broadcast audio and mine transcripts for injury mentions and tactical discussion as an off-field signal intake, confidence-weighted for WER ~0.5 noise.
