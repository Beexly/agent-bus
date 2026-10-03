# arxiv-program/research/2026-09-21/arxiv-deep/1602-soccerrrag-multimodal-soccer-information-retrieval.md
## What it is (1-2 sentences)
Paper (arXiv:2406.01273): SoccerRAG — an extractor→validator→SQL-agent→few-shot-SQL-RAG pipeline answering natural-language queries over a multimodal soccer archive (videos, Whisper-transcribed commentary, event annotations, player info in SQLite); the controlled ablation proves the validator is the crucial component (full pipeline GPT-3.5: 9/10 correct vs SQL-agent-only: 0/10).
## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: (1) LangChain LLM feature extractor → schema-defined JSON; (2) validator — string-match/Levenshtein entity resolution vs DB + auxiliary abbreviation tables, asks user on ambiguity; (3) LangChain SQL agent; (4) SQL RAG — top-K=2 human-crafted SQL exemplars (sqls.json) retrieved by FAISS over question embeddings.
- Query difficulty quantified via Halstead metrics (n1, n2, N1, N2, volume V, difficulty D, effort E).
- Ablation: 6 pipeline configurations × 2 LLMs (GPT-3.5-Turbo / GPT-4.0-Turbo) on 10 questions; 20 benchmark questions with subjective perfect/50%/fail scoring.
## Data sources named
Augmented SoccerNet: 550 games, Whisper-ASR commentary, Labels-v2 event annotations, Labels-caption game info → SQLAlchemy SQLite (games, leagues, seasons, lineups, events, commentary) + manually built abbreviation CSVs (augmented_teams/leagues.csv). Open source: github.com/simula/soccer-rag (schema.json, sqls.json, demo).
## Findings (numbers and facts, not vibes)
- Full pipeline: GPT-3.5 9/10 correct (only Q8 failed — large-list output refusal); GPT-4 8/10 (Q7 model laziness, Q8 refusal).
- Standalone SQL agent fails on nearly all questions: GPT-3.5 pipeline-1 0/10, pipeline-2 2/10.
- Validator is the crucial component (extractor-validator optimal on most of 20 questions); GPT-4 fixed Q15 where 3.5 missed a property; Q18 ("players named Aleksandar") confused the extractor.
- Execution: GPT-3.5 significantly faster; peak hours 22.6% slower (3.5) / 46.5% slower (4.0); LLM laziness documented (subset returns, premature "I have the information" stops).
- Limitations: only 10 questions in ablation, subjectively scored; open-source LLM note (Llama 2, Mistral-7B) now dated; LLMs truncate large list outputs.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: fills GSE's "ask the archive" gap — natural-language query layer over the NFL archive (games, play-by-play, rosters, injuries, odds/CLV history, Whisper-transcribed Game Pass commentary); validator with NFL abbreviation tables ("KC", "Mahomes", "MNF") + Levenshtein resolution is the component to build first.
- TRUST-SIGNAL: behind-the-scenes research engine for @GalaxySportsHQ content and engine analytics — not a public surface; improves the evidence quality of posted analysis.
- OTHER: 9/10 vs 0/10 ablation is the design lesson — never ship a raw text-to-SQL agent without the extractor-validator stage.
## Engine-actionable? (yes/no + one-line what)
Yes — port the pipeline to NFL: Postgres archive + NFL extractor schema + abbreviation validator + few-shot SQL exemplars for common GSE questions (splits, line-movement, injury lookups), reimplemented with current open function-calling models; gate: ≥0.8 pass rate on 20 held-out NFL questions with validator vs ≤0.3 without.
